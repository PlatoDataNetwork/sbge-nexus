import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, MapPin, TrendingUp, Calendar } from "lucide-react";

const CurrentPortfolio = () => {
  const navigate = useNavigate();

  const portfolioStats = {
    facilities: 6,
    units: "5,400+",
    nrsf: "400,000",
    projectedValue: "$150M"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/50 to-transparent border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/investor-portal")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Investor Portal
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            StorageBlue's active facilities and strategic market positioning in the NYC Metropolitan Area
          </p>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">{portfolioStats.facilities}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Units</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{portfolioStats.units}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total NRSF</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{portfolioStats.nrsf}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Projected Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">{portfolioStats.projectedValue}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Portfolio Growth</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Expansion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-primary pl-6 pb-6">
                <Badge className="mb-2">2020 - Present</Badge>
                <h3 className="text-xl font-semibold mb-2">Pandemic Era Growth</h3>
                <p className="text-muted-foreground mb-4">
                  Since the start of the pandemic in 2020, StorageBlue added 8 properties totaling 7,000+ units and over 500,000 NRSF.
                </p>
              </div>
              
              <div className="border-l-2 border-secondary pl-6 pb-6">
                <Badge variant="secondary" className="mb-2">March 2024</Badge>
                <h3 className="text-xl font-semibold mb-2">Strategic Portfolio Sale</h3>
                <p className="text-muted-foreground mb-4">
                  StorageBlue sold 6 fully stabilized properties for significant returns, demonstrating successful execution of the development and exit strategy.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <Badge variant="outline" className="mb-2">Current</Badge>
                <h3 className="text-xl font-semibold mb-2">Active Portfolio</h3>
                <p className="text-muted-foreground">
                  6 institutional-quality properties with strong occupancy and cash flow, positioned for continued growth in the NYC Metropolitan Area.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Strategic Advantages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Off-Market Deal Sourcing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Due to deep-market relationships created over 35 years within self-storage, Alan Mruvka and StorageBlue have access to high-quality off-market properties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Vertically Integrated Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground mb-3">Complete in-house capabilities:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <Badge variant="outline">Acquisitions</Badge>
                    <Badge variant="outline">Development</Badge>
                    <Badge variant="outline">Construction</Badge>
                    <Badge variant="outline">Operations</Badge>
                    <Badge variant="outline">Marketing</Badge>
                    <Badge variant="outline">IT Management</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Established Brand in North Jersey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">140%</div>
                  <p className="text-sm text-muted-foreground">Increase in Portfolio NRSF</p>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">35+</div>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">13</div>
                  <p className="text-sm text-muted-foreground">Institutional Quality Properties</p>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-xl font-semibold mb-4">High-Quality Partnerships</h3>
                <p className="text-muted-foreground mb-4">
                  StorageBlue maintains strategic relationships with leading financial institutions including Marcus & Millichap, Cooper Horowitz Real Estate Financing, Natixis, and Barclays.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Portfolio?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Learn more about investment opportunities and our growth strategy
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/schedule-call")}>
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/case-studies")}>
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentPortfolio;
