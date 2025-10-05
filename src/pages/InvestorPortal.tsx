import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Presentation, ClipboardList, CheckCircle, TrendingUp, Briefcase, Calendar } from "lucide-react";
import { toast } from "sonner";
import { logActivity } from "@/lib/activityTracker";

const InvestorPortal = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [hasAccepted, setHasAccepted] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already accepted terms in this session
    const termsAccepted = sessionStorage.getItem('investor_terms_accepted');
    if (termsAccepted === 'true') {
      setHasAccepted(true);
    }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      }
      setSession(session);
      setLoading(false);
      
      // Log portal visit
      if (session?.user) {
        logActivity(session.user.id, "portal_visit", {
          page: "investor_portal",
          timestamp: new Date().toISOString()
        });
      }
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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrolledToEnd = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
    setScrolledToBottom(scrolledToEnd);
  };

  const handleAcceptTerms = () => {
    setHasAccepted(true);
    sessionStorage.setItem('investor_terms_accepted', 'true');
    toast.success("Terms accepted. Welcome to the Investor Portal!");
    
    // Log terms acceptance
    if (session?.user) {
      logActivity(session.user.id, "terms_accepted", {
        page: "investor_portal",
        timestamp: new Date().toISOString()
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!hasAccepted) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Investment Disclaimer & Terms</CardTitle>
              <CardDescription>Please read carefully before proceeding</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full pr-4" onScrollCapture={handleScroll}>
                <div className="space-y-4 text-sm leading-relaxed">
                  <h3 className="font-semibold text-lg">IMPORTANT LEGAL DISCLOSURE</h3>
                  
                  <p>
                    This confidential private placement memorandum (the "Memorandum") is being furnished on a confidential basis to a limited number of accredited investors and qualified purchasers for informational purposes only in connection with the private placement of limited partnership interests (the "Interests") in StorageBlue Growth Fund, LP (the "Fund"). This Memorandum does not constitute an offer to sell or a solicitation of an offer to buy any securities in any jurisdiction where such offer or solicitation would be unlawful.
                  </p>

                  <p>
                    <strong>INVESTMENT RISK:</strong> An investment in the Fund involves a high degree of risk. Prospective investors should carefully review and consider the risk factors described in this Memorandum and the Fund's Limited Partnership Agreement. There can be no assurance that the Fund will achieve its investment objectives or that investors will receive a return of their capital. Investors must be prepared to bear the economic risk of their investment for an extended period of time and to possibly lose their entire investment.
                  </p>

                  <p>
                    <strong>ACCREDITED INVESTOR REQUIREMENT:</strong> The Interests are being offered and sold only to "accredited investors" as defined in Rule 501(a) of Regulation D under the Securities Act of 1933, as amended (the "Securities Act"), and to "qualified purchasers" as defined in Section 2(a)(51) of the Investment Company Act of 1940, as amended. Prospective investors will be required to provide documentation satisfactory to the Fund demonstrating that they meet these requirements.
                  </p>

                  <p>
                    <strong>NO REGISTRATION:</strong> The Interests have not been registered under the Securities Act, or under the securities laws of any state or other jurisdiction, and are being offered and sold in reliance on exemptions from the registration requirements of the Securities Act and such laws. The Interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under the Securities Act and applicable state securities laws.
                  </p>

                  <p>
                    <strong>ILLIQUID INVESTMENT:</strong> There is no public market for the Interests, and none is expected to develop. The Interests are not redeemable at the option of the limited partners. Investors should assume that they will not be able to liquidate their investment in the Fund except in limited circumstances. The Fund has a contemplated term of five to seven years, and investors must be prepared to hold their Interests for the entire term.
                  </p>

                  <p>
                    <strong>FORWARD-LOOKING STATEMENTS:</strong> This Memorandum contains forward-looking statements regarding the Fund's investment strategy, objectives, and expected performance. These statements are based on current expectations and assumptions and are subject to risks and uncertainties. Actual results may differ materially from those expressed or implied in such statements. Past performance is not indicative of future results.
                  </p>

                  <p>
                    <strong>CONFIDENTIALITY:</strong> This Memorandum and the information contained herein are confidential and proprietary to the Fund. By accepting this Memorandum, you agree to maintain its confidentiality and to not reproduce, distribute, or disclose any of the information contained herein without the prior written consent of the Fund's General Partner, except to your professional advisors who are bound by confidentiality obligations.
                  </p>

                  <p>
                    <strong>NO TAX OR LEGAL ADVICE:</strong> The information provided in this Memorandum does not constitute tax, legal, or investment advice. Prospective investors are strongly encouraged to consult with their own tax, legal, and financial advisors regarding the tax consequences and suitability of an investment in the Fund based on their individual circumstances.
                  </p>

                  <p>
                    <strong>FEES AND EXPENSES:</strong> The Fund will charge management fees and may be subject to performance-based incentive allocations as described in the Fund's Limited Partnership Agreement. These fees and expenses will reduce returns to investors. Prospective investors should carefully review all fee arrangements before making an investment decision.
                  </p>

                  <p>
                    <strong>CONFLICTS OF INTEREST:</strong> The General Partner and its affiliates may have conflicts of interest in managing the Fund. These conflicts are described in detail in the Fund's Limited Partnership Agreement. Prospective investors should carefully review and consider all disclosed conflicts of interest.
                  </p>

                  <p>
                    <strong>ACCEPTANCE OF TERMS:</strong> By clicking "Accept Terms" below, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions set forth in this disclaimer. You further represent and warrant that you are an accredited investor and/or qualified purchaser, that you have the financial ability to bear the economic risk of this investment, and that you are reviewing this information for your own account and not with a view to distribution.
                  </p>

                  <p className="text-muted-foreground italic mt-6">
                    Last Updated: October 2025
                  </p>
                </div>
              </ScrollArea>

              <div className="mt-6 space-y-4">
                {!scrolledToBottom && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="animate-pulse">⬇️</span>
                    Please scroll to the bottom to enable the accept button
                  </p>
                )}
                <Button 
                  onClick={handleAcceptTerms}
                  disabled={!scrolledToBottom}
                  className="w-full"
                  size="lg"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Accept Terms & Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Investor Portal</h1>
          <p className="text-xl text-muted-foreground">
            Access your investment materials and complete your qualification
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Investment Memorandum Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Investment Memorandum</CardTitle>
              <CardDescription>
                Comprehensive overview of the fund structure, terms, and investment thesis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toast.info("Investment Memorandum will be available soon")}
              >
                View Document
              </Button>
            </CardContent>
          </Card>

          {/* Investor Deck Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Presentation className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Investor Deck</CardTitle>
              <CardDescription>
                Detailed presentation on StorageBlue Growth Fund investment opportunity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/investor-deck")}
              >
                View Presentation
              </Button>
            </CardContent>
          </Card>

          {/* Investor Questionnaire Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <ClipboardList className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle>Investor Questionnaire</CardTitle>
              <CardDescription>
                Quick qualification form to verify accredited investor status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/investor-questionnaire")}
              >
                Complete Form
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Case Studies Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Case Studies</CardTitle>
              <CardDescription>
                Track record of successful facility developments and exits with proven returns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/case-studies")}
              >
                View Case Studies
              </Button>
            </CardContent>
          </Card>

          {/* Current Portfolio Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Briefcase className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Current Portfolio</CardTitle>
              <CardDescription>
                Overview of active StorageBlue facilities and investment opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/current-portfolio")}
              >
                View Portfolio
              </Button>
            </CardContent>
          </Card>

          {/* Schedule a Call Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Calendar className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle>Schedule a Call</CardTitle>
              <CardDescription>
                Book a consultation to discuss investment opportunities and next steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate("/schedule-call")}
              >
                Schedule Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestorPortal;
