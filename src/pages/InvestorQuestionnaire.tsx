import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { logActivity } from "@/lib/activityTracker";

const questionnaireSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  companyName: z.string().trim().min(2, "Please enter your company name"),
  address: z.string().trim().min(5, "Please enter your address"),
  state: z.string().trim().min(2, "Please enter your state"),
  zip: z.string().trim().min(5, "Please enter your zip code"),
  phone: z.string().trim().min(10, "Please enter a valid phone number"),
  isQualifiedInstitutional: z.boolean(),
  investmentEntity: z.string().min(1, "Please select an option"),
  investmentRange: z.string().min(1, "Please select an investment range"),
  investmentTimeline: z.string().min(1, "Please select a timeline"),
  storageExperience: z.string().min(1, "Please select your experience level"),
  investmentGoals: z.string().min(10, "Please provide at least 10 characters"),
});

const InvestorQuestionnaire = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    address: "",
    state: "",
    zip: "",
    phone: "",
    isQualifiedInstitutional: false,
    investmentEntity: "",
    investmentRange: "",
    investmentTimeline: "",
    storageExperience: "",
    investmentGoals: "",
  });

  useEffect(() => {
    // No authentication required - allow anyone to access
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      
      // Log questionnaire visit if authenticated
      if (session?.user) {
        logActivity(session.user.id, "questionnaire_visit", {
          page: "investor_questionnaire",
          timestamp: new Date().toISOString()
        });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      questionnaireSchema.parse(formData);
      setSubmitting(true);

      // Save to database for CRM
      const { error: dbError } = await supabase
        .from('investor_questionnaire_responses')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          company_name: formData.companyName,
          address: formData.address,
          state: formData.state,
          zip: formData.zip,
          phone: formData.phone,
          is_qualified_institutional: formData.isQualifiedInstitutional,
          investment_entity: formData.investmentEntity,
          investment_range: formData.investmentRange,
          investment_timeline: formData.investmentTimeline,
          storage_experience: formData.storageExperience,
          investment_goals: formData.investmentGoals,
          user_id: session?.user?.id || null,
        });

      if (dbError) {
        console.error('Error saving questionnaire:', dbError);
        toast.error("Failed to submit questionnaire");
        return;
      }

      // Log questionnaire submission if authenticated
      if (session?.user) {
        await logActivity(session.user.id, "questionnaire_submitted", {
          page: "investor_questionnaire",
          responses: formData,
          timestamp: new Date().toISOString()
        });
      }

      toast.success("Questionnaire submitted! Please create an account to continue.");
      
      // Store email in session storage to pre-fill signup form
      sessionStorage.setItem('investor_email', formData.email);
      sessionStorage.setItem('investor_name', formData.fullName);
      
      // Redirect to signup page
      navigate("/auth");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to submit questionnaire");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Investor Qualification Questionnaire</CardTitle>
            <CardDescription>
              Help us understand your investment profile and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="ABC Investment Corp"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Main Street"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="NY"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code *</Label>
                  <Input
                    id="zip"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="10001"
                    required
                  />
                </div>
              </div>

              {/* Qualified Institutional Investor */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  Are you a qualified institutional investor with at least $75M under management? *
                </Label>
                <RadioGroup
                  value={formData.isQualifiedInstitutional.toString()}
                  onValueChange={(value) =>
                    setFormData({ ...formData, isQualifiedInstitutional: value === "true" })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="qii-yes" />
                    <Label htmlFor="qii-yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="qii-no" />
                    <Label htmlFor="qii-no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Investment Entity */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  Are you investing as an individual or through an entity?
                </Label>
                <RadioGroup
                  value={formData.investmentEntity}
                  onValueChange={(value) =>
                    setFormData({ ...formData, investmentEntity: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="font-normal cursor-pointer">
                      Individual Investor
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="entity" id="entity" />
                    <Label htmlFor="entity" className="font-normal cursor-pointer">
                      Investment Entity (LLC, Trust, etc.)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Investment Range */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  What is your anticipated investment range?
                </Label>
                <RadioGroup
                  value={formData.investmentRange}
                  onValueChange={(value) =>
                    setFormData({ ...formData, investmentRange: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="100k-250k" id="100k-250k" />
                    <Label htmlFor="100k-250k" className="font-normal cursor-pointer">
                      $100,000 - $250,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="250k-500k" id="250k-500k" />
                    <Label htmlFor="250k-500k" className="font-normal cursor-pointer">
                      $250,000 - $500,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="500k-1m" id="500k-1m" />
                    <Label htmlFor="500k-1m" className="font-normal cursor-pointer">
                      $500,000 - $1,000,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1m+" id="1m+" />
                    <Label htmlFor="1m+" className="font-normal cursor-pointer">
                      $1,000,000+
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Investment Timeline */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  What is your expected investment timeline?
                </Label>
                <RadioGroup
                  value={formData.investmentTimeline}
                  onValueChange={(value) =>
                    setFormData({ ...formData, investmentTimeline: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediate" id="immediate" />
                    <Label htmlFor="immediate" className="font-normal cursor-pointer">
                      Immediate (Within 30 days)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3months" id="1-3months" />
                    <Label htmlFor="1-3months" className="font-normal cursor-pointer">
                      1-3 Months
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-6months" id="3-6months" />
                    <Label htmlFor="3-6months" className="font-normal cursor-pointer">
                      3-6 Months
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exploring" id="exploring" />
                    <Label htmlFor="exploring" className="font-normal cursor-pointer">
                      Currently Exploring Options
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Storage Experience */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  What is your experience with self-storage investments?
                </Label>
                <RadioGroup
                  value={formData.storageExperience}
                  onValueChange={(value) =>
                    setFormData({ ...formData, storageExperience: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none" className="font-normal cursor-pointer">
                      No Previous Experience
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="limited" id="limited" />
                    <Label htmlFor="limited" className="font-normal cursor-pointer">
                      Limited Experience (1-2 investments)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate" className="font-normal cursor-pointer">
                      Moderate Experience (3-5 investments)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="extensive" id="extensive" />
                    <Label htmlFor="extensive" className="font-normal cursor-pointer">
                      Extensive Experience (5+ investments)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Investment Goals */}
              <div className="space-y-4">
                <Label htmlFor="investmentGoals" className="text-base font-semibold">
                  What are your primary investment goals?
                </Label>
                <Textarea
                  id="investmentGoals"
                  placeholder="Please describe your investment objectives, risk tolerance, and what you're looking to achieve with this investment..."
                  value={formData.investmentGoals}
                  onChange={(e) =>
                    setFormData({ ...formData, investmentGoals: e.target.value })
                  }
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={submitting}>
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Request Access
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestorQuestionnaire;
