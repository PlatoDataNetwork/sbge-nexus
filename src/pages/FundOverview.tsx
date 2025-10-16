import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, DollarSign, TrendingUp, Shield, Building, Target, MapPin } from "lucide-react";
import { memo } from 'react';

const targetMarkets = [
  'Arizona',
  'California',
  'Florida',
  'Las Vegas',
  'New Jersey',
  'New York',
  'North Carolina',
  'Tennessee',
  'Texas',
];

const investmentTypes = [
  {
    title: 'Stabilized Acquisitions',
    description: 'Acquiring performing assets in strategic locations with immediate cash flow',
    icon: Building,
  },
  {
    title: 'Ground-Up Development',
    description: 'New construction in high-demand areas with strong development returns',
    icon: Target,
  },
  {
    title: 'Value-Add Redevelopment',
    description: 'Repositioning underperforming assets to maximize returns',
    icon: TrendingUp,
  },
  {
    title: 'Portfolio Acquisitions',
    description: 'Strategic multi-property acquisitions for scale and efficiency',
    icon: MapPin,
  },
];

const additionalOpportunities = [
  'Small Bay Industrial Storage',
  'Vehicle & Truck Storage',
  'Industrial Outdoor Storage (IOS)',
  'General Industrial Warehouses',
  'Outdoor RV Storage',
  'Boat & Marine Storage',
];

const FundOverview = () => {
  const navigate = useNavigate();

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fund Overview</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A geographically-focused real estate investment vehicle targeting self-storage and 
            industrial storage facilities in emerging and underserved US markets
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Capital Raise</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$350M</div>
                <p className="text-xs text-muted-foreground mt-1">Target equity offering</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Buying Power</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$1B</div>
                <p className="text-xs text-muted-foreground mt-1">Total acquisition capacity</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Target IRR</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">16-24%</div>
                <p className="text-xs text-muted-foreground mt-1">Projected returns</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Leverage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">65/35</div>
                <p className="text-xs text-muted-foreground mt-1">Debt-to-equity ratio</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Building className="h-5 w-5 text-primary" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Identified Equity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$70M</div>
                <p className="text-xs text-muted-foreground mt-1">Targeted purchases</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <CardTitle className="text-sm font-medium text-muted-foreground">Horizon</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">5-7 Yrs</div>
                <p className="text-xs text-muted-foreground mt-1">Investment timeline</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why StorageBlue?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Proven Track Record</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over $300M in successful facility developments and exits with consistent returns above 20% IRR
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Vertically Integrated</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In-house development, construction, and property management capabilities reduce costs and improve execution
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Strategic Markets</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus on high-growth, underserved markets with strong demographic and economic trends
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Free Pickup Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unique competitive advantage that drives occupancy rates 15-20% higher than market average
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Investment Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">70%</div>
                <CardTitle className="text-lg">Stabilized Acquisitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Immediate cash flow from performing assets</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">20%</div>
                <CardTitle className="text-lg">Ground-Up Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">New construction in high-demand areas</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">10%</div>
                <CardTitle className="text-lg">Value-Add Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Repositioning underperforming assets</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Investment Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {investmentTypes.map((type) => (
              <Card key={type.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Target Markets</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Focused on emerging and underserved markets with strong growth fundamentals
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {targetMarkets.map((market) => (
              <Card key={market} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{market}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Opportunities */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Beyond Traditional Self-Storage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalOpportunities.map((type) => (
              <Card key={type} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{type}</h3>
                  <p className="text-sm text-muted-foreground">
                    Strategic diversification in related storage sectors
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(FundOverview);
