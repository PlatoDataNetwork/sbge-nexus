import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm: '',
    aum: '',
    accreditation: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.firm) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    try {
      // Save to database for CRM
      const { error: dbError } = await supabase
        .from('contact_form_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          firm: formData.firm,
          aum: formData.aum,
          accreditation: formData.accreditation,
          message: formData.message,
        });

      if (dbError) {
        console.error('Error saving contact form:', dbError);
        toast({
          title: 'Error',
          description: 'Failed to submit form. Please try again.',
          variant: 'destructive',
        });
        return;
      }

      // Show success message
      toast({
        title: 'Message Sent',
        description: 'Thank you for your interest. Our team will contact you shortly.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        firm: '',
        aum: '',
        accreditation: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Request access to our investment materials and speak with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We welcome inquiries from qualified institutional and accredited investors. 
                    Our team is ready to discuss the StorageBlue Growth Fund opportunity.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a href="mailto:invest@storagebluecapital.com" className="text-muted-foreground hover:text-primary transition-colors">
                      invest@storagebluecapital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                    <div>
                      <div className="font-semibold text-foreground mb-3">Locations</div>
                      <div className="space-y-3 text-muted-foreground text-sm">
                        <p>
                          230 Park Ave<br />
                          New York, NY 10169
                        </p>
                        <p>
                          32 W 22nd St<br />
                          New York, NY 10010
                        </p>
                        <p>
                          100 Executive Drive<br />
                          Fort Lee, NJ 07024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Investor Qualifications</h3>
                  <p className="text-sm text-muted-foreground">
                    This investment opportunity is available only to qualified institutional investors 
                    and accredited investors as defined by applicable securities regulations.
                  </p>
                </div>
              </div>

              {/* Request Access Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-8 hover-lift">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                    Contact us
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
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
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firm">Firm / Organization *</Label>
                        <Input
                          id="firm"
                          value={formData.firm}
                          onChange={(e) => handleChange('firm', e.target.value)}
                          placeholder="Investment Firm LLC"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="aum">Assets Under Management</Label>
                        <Select value={formData.aum} onValueChange={(value) => handleChange('aum', value)}>
                          <SelectTrigger id="aum">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10m">Under $10M</SelectItem>
                            <SelectItem value="10m-50m">$10M - $50M</SelectItem>
                            <SelectItem value="50m-100m">$50M - $100M</SelectItem>
                            <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                            <SelectItem value="over-500m">Over $500M</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accreditation">Investor Status</Label>
                      <Select value={formData.accreditation} onValueChange={(value) => handleChange('accreditation', value)}>
                        <SelectTrigger id="accreditation">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="accredited">Accredited Investor</SelectItem>
                          <SelectItem value="qualified">Qualified Institutional Buyer</SelectItem>
                          <SelectItem value="institutional">Institutional Investor</SelectItem>
                          <SelectItem value="family-office">Family Office</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Please share any specific questions or interests..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" variant="premium" className="w-full">
                      Submit Request <Send className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you confirm that you are a qualified institutional investor 
                      or accredited investor. All information will be kept confidential.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Important Legal Information
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>This website and its contents are confidential and proprietary.</strong> The information 
                contained herein does not constitute an offer to sell or a solicitation of an offer to buy securities. 
                Any such offer or solicitation will be made only by means of a confidential Private Placement Memorandum (PPM).
              </p>
              <p>
                <strong>Investment Risk:</strong> An investment in the StorageBlue Growth Fund, LP involves significant 
                risks and is suitable only for sophisticated investors who can afford to lose their entire investment. 
                There can be no assurance that the Fund will achieve its investment objectives or that investors will 
                receive a return on their capital.
              </p>
              <p>
                <strong>Forward-Looking Statements:</strong> This website contains forward-looking statements based on 
                current expectations. Actual results may differ materially. Past performance is not indicative of future results.
              </p>
              <p>
                <strong>Regulatory Compliance:</strong> Securities offered through this Fund are not registered under the 
                Securities Act of 1933 and are being offered pursuant to exemptions therefrom and from applicable state 
                securities laws.
              </p>
              <p className="pt-4 border-t border-border">
                © StorageBlue, LLC 2025. All rights reserved. Unauthorized use or distribution is prohibited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
