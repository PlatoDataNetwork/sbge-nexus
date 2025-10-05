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

const questionnaireSchema = z.object({
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
    investmentEntity: "",
    investmentRange: "",
    investmentTimeline: "",
    storageExperience: "",
    investmentGoals: "",
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      }
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      }
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      questionnaireSchema.parse(formData);
      setSubmitting(true);

      // Here you would typically save to database
      // For now, just show success message
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Questionnaire submitted successfully!");
      navigate("/investor-portal");
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
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/investor-portal")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portal
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

              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Submit Questionnaire
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
