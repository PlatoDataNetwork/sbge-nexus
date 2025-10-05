import { TrendingUp, Users, Building2, DollarSign, PieChart, BarChart3 } from 'lucide-react';
import StatCard from '@/components/StatCard';

const Market = () => {
  const marketStats = [
    {
      value: '$39.5B',
      label: 'Market Size',
      description: 'Total U.S. self-storage market value',
    },
    {
      value: '3.5%',
      label: 'Annual Growth (CAGR)',
      description: 'Projected through 2028',
    },
    {
      value: '90%',
      label: 'Ownership Fragmentation',
      description: 'Operated by small owners',
    },
    {
      value: '$15-20',
      label: 'Avg. Rental Rate/SqFt',
      description: 'National average annual rate',
    },
  ];

  const growthDrivers = [
    {
      title: 'Urbanization Trends',
      description: 'Continued migration to metropolitan areas creating demand for flexible storage solutions',
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: 'E-Commerce Growth',
      description: 'Online retail driving demand for inventory storage and last-mile logistics',
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: 'Housing Market Dynamics',
      description: 'Home transitions, downsizing, and remote work driving storage needs',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'Business Storage Demand',
      description: 'Small businesses requiring flexible, cost-effective storage options',
      icon: <DollarSign className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
              Market Insight
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              An underserved market meets institutional expertise
            </p>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Market at a Glance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A large, fragmented market with significant consolidation and growth opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketStats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Drivers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Growth Drivers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Multiple secular trends supporting long-term market expansion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {growthDrivers.map((driver) => (
                <div key={driver.title} className="bg-card border border-border rounded-lg p-8 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0">
                      {driver.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {driver.title}
                      </h3>
                      <p className="text-muted-foreground">{driver.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NYC Metro Opportunity */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                The NYC Metropolitan Opportunity
              </h2>
              <p className="text-lg text-muted-foreground">
                A severely underserved market with unique competitive advantages
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <PieChart className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      Supply Constraints
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Since 2018, NYC has banned conversion of buildings into self-storage across all 5 boroughs. 
                      This creates a unique opportunity for operators positioned just outside the boroughs with 
                      innovative service models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      Strong Fundamentals
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The NYC metro area combines high population density, limited living space, and strong economic 
                      activity—all key drivers of self-storage demand. Average rental rates in the region are among 
                      the highest in the nation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      Competitive Advantage
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      StorageBlue's free pickup service and lowest price guarantee address the key pain points 
                      of NYC customers—convenience and cost—while competitors are limited by their fixed locations 
                      and traditional service models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Dynamics */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
              Industry Dynamics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Market Fragmentation</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Over 90% of self-storage facilities are owned and operated by small, independent owners. 
                  This presents significant consolidation opportunities for institutional capital.
                </p>
                <div className="text-3xl font-heading font-bold">90%</div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Institutional Interest</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Major players like Public Storage, Blackstone, and CubeSmart validate the asset class. 
                  Self-storage has become a core institutional real estate strategy.
                </p>
                <div className="text-3xl font-heading font-bold">Top Tier</div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Recession Resilient</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Self-storage has historically demonstrated strong performance through economic cycles, 
                  with occupancy and rates remaining stable during downturns.
                </p>
                <div className="text-3xl font-heading font-bold">Defensive</div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Technology Adoption</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Innovation in automation, AI-driven pricing, and customer experience is transforming 
                  the industry and creating competitive advantages.
                </p>
                <div className="text-3xl font-heading font-bold">Digital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Market Validation
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading institutional investors recognize self-storage as a core real estate asset class
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {['Public Storage', 'Blackstone', 'CubeSmart', 'Extra Space'].map((company) => (
                <div key={company} className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
                  <span className="text-base font-semibold text-secondary">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;
