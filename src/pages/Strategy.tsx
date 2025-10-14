import { Target, MapPin, TrendingUp, DollarSign, Shield, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { memo } from 'react';

// Static data moved outside component to prevent recreation on each render
const targetMarkets = [
  'New Jersey',
  'New York',
  'Florida',
  'Texas',
  'Arizona',
  'California',
  'Tennessee',
  'North Carolina',
  'Las Vegas',
];

const investmentTypes = [
  {
    title: 'Stabilized Acquisitions',
    description: 'Acquiring performing assets in strategic locations with immediate cash flow',
  },
  {
    title: 'Ground-Up Development',
    description: 'New construction in high-demand areas with strong development returns',
  },
  {
    title: 'Value-Add Redevelopment',
    description: 'Repositioning underperforming assets to maximize returns',
  },
  {
    title: 'Portfolio Acquisitions',
    description: 'Strategic multi-property acquisitions for scale and efficiency',
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

const iconMap = {
  'Stabilized Acquisitions': Building,
  'Ground-Up Development': Target,
  'Value-Add Redevelopment': TrendingUp,
  'Portfolio Acquisitions': MapPin,
};

const Strategy = () => {

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
              Investment Strategy
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              A disciplined approach to self-storage investing
            </p>
          </div>
        </div>
      </section>

      {/* Fund Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Fund Overview
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A geographically-focused real estate investment vehicle targeting self-storage and 
                industrial storage facilities in emerging and underserved US markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Capital Raise</h3>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">$350M</div>
                <p className="text-sm text-muted-foreground">Target equity offering</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Buying Power</h3>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">$1B</div>
                <p className="text-sm text-muted-foreground">Total acquisition capacity</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Target IRR</h3>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">16-24%</div>
                <p className="text-sm text-muted-foreground">Projected returns</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Leverage</h3>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">65/35</div>
                <p className="text-sm text-muted-foreground">Debt-to-equity ratio</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Identified to be Deployed</h3>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">$70M</div>
                <p className="text-sm text-muted-foreground">Targeted purchases</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Horizon</h3>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">5-7 Yrs</div>
                <p className="text-sm text-muted-foreground">Investment timeline</p>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Why StorageBlue?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-foreground/10 rounded-lg flex-shrink-0 mt-1">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-sm text-primary-foreground/90">Over $300M in successful facility developments and exits with consistent returns above 20% IRR</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-foreground/10 rounded-lg flex-shrink-0 mt-1">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vertically Integrated</h4>
                    <p className="text-sm text-primary-foreground/90">In-house development, construction, and property management capabilities reduce costs and improve execution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-foreground/10 rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Markets</h4>
                    <p className="text-sm text-primary-foreground/90">Focus on high-growth, underserved markets with strong demographic and economic trends</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary-foreground/10 rounded-lg flex-shrink-0 mt-1">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Free Pickup Service</h4>
                    <p className="text-sm text-primary-foreground/90">Unique competitive advantage that drives occupancy rates 15-20% higher than market average</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Structure */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">Investment Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">50%</div>
                  <p className="text-sm font-semibold text-foreground mb-1">Stabilized Acquisitions</p>
                  <p className="text-xs text-muted-foreground">Immediate cash flow from performing assets</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">30%</div>
                  <p className="text-sm font-semibold text-foreground mb-1">Value-Add Opportunities</p>
                  <p className="text-xs text-muted-foreground">Repositioning underperforming assets</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">20%</div>
                  <p className="text-sm font-semibold text-foreground mb-1">Ground-Up Development</p>
                  <p className="text-xs text-muted-foreground">New construction in high-demand areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Investment Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Multiple pathways to value creation through strategic acquisitions and development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {investmentTypes.map((type) => {
                const IconComponent = iconMap[type.title as keyof typeof iconMap];
                return (
                  <div key={type.title} className="bg-card border border-border rounded-lg p-8 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          {type.title}
                        </h3>
                        <p className="text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Target Markets
              </h2>
              <p className="text-lg text-muted-foreground">
                Focused on emerging and underserved markets with strong growth fundamentals
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {targetMarkets.map((market) => (
                <div
                  key={market}
                  className="bg-card border border-border rounded-lg p-6 hover-lift flex items-center space-x-3"
                >
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{market}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Opportunities */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
              Beyond Traditional Self-Storage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalOpportunities.map((type) => (
                <div
                  key={type}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
                >
                  <h3 className="text-lg font-semibold mb-2">{type}</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Strategic diversification in related storage sectors
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default memo(Strategy);
