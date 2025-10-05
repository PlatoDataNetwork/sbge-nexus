import { MapPin, Square, TrendingUp, Calendar } from 'lucide-react';
import StatCard from '@/components/StatCard';

const Portfolio = () => {
  const facilities = [
    {
      name: 'Facility 1',
      location: 'North Jersey',
      sqft: '250,000',
      occupancy: '92%',
      status: 'Stabilized',
    },
    {
      name: 'Facility 2',
      location: 'NYC Metro',
      sqft: '180,000',
      occupancy: '88%',
      status: 'Stabilized',
    },
    {
      name: 'Facility 3',
      location: 'New Jersey',
      sqft: '320,000',
      occupancy: '95%',
      status: 'Stabilized',
    },
    {
      name: 'Facility 4',
      location: 'North Jersey',
      sqft: '210,000',
      occupancy: '90%',
      status: 'Value-Add',
    },
    {
      name: 'Facility 5',
      location: 'NYC Metro',
      sqft: '275,000',
      occupancy: '87%',
      status: 'Development',
    },
    {
      name: 'Facility 6',
      location: 'New Jersey',
      sqft: '195,000',
      occupancy: '93%',
      status: 'Stabilized',
    },
  ];

  const performanceMetrics = [
    {
      title: 'Total Square Feet',
      value: '1.43M',
      change: '+12% YoY',
      positive: true,
    },
    {
      title: 'Average Occupancy',
      value: '90.8%',
      change: '+3.2% vs Target',
      positive: true,
    },
    {
      title: 'Facilities',
      value: '6',
      change: 'Initial Portfolio',
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Strategic assets across high-growth markets
            </p>
          </div>
        </div>
      </section>

      {/* Performance Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Portfolio Overview
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Six initial facilities representing strategic positions in target markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {performanceMetrics.map((metric) => (
                <div key={metric.title} className="bg-card border border-border rounded-lg p-6 hover-lift">
                  <div className="text-sm text-muted-foreground mb-2">{metric.title}</div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">{metric.value}</div>
                  <div className={`text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Current Assets
              </h2>
              <p className="text-lg text-muted-foreground">
                High-quality facilities in strategic locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden hover-lift"
                >
                  <div className="h-48 bg-gradient-primary relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Square className="h-16 w-16 text-primary-foreground/30" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                        {facility.name}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {facility.location}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Square Feet</span>
                        <span className="font-semibold text-foreground">{facility.sqft}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Occupancy</span>
                        <span className="font-semibold text-green-600">{facility.occupancy}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Status</span>
                        <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                          {facility.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Realized Returns
              </h2>
              <p className="text-lg text-muted-foreground">
                Proven performance across multiple investment strategies
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-8 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Portfolio Acquisition 2019
                    </h3>
                    <p className="text-muted-foreground">North Jersey / NYC Metro</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">IRR</div>
                    <div className="text-3xl font-heading font-bold text-green-600">22.4%</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Investment</div>
                    <div className="font-semibold text-foreground">$42M</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">MOIC</div>
                    <div className="font-semibold text-foreground">2.1x</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Hold Period</div>
                    <div className="font-semibold text-foreground">4.5 years</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Ground-Up Development 2020
                    </h3>
                    <p className="text-muted-foreground">New Jersey</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">IRR</div>
                    <div className="text-3xl font-heading font-bold text-green-600">18.7%</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Investment</div>
                    <div className="font-semibold text-foreground">$28M</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">MOIC</div>
                    <div className="font-semibold text-foreground">1.8x</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Hold Period</div>
                    <div className="font-semibold text-foreground">3.2 years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
              Investment Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <TrendingUp className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strong Performance</h3>
                <p className="text-primary-foreground/80">
                  Consistent above-market returns across diverse investment strategies
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strategic Locations</h3>
                <p className="text-primary-foreground/80">
                  Prime positions in high-growth, underserved metropolitan markets
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <Square className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assets</h3>
                <p className="text-primary-foreground/80">
                  Modern facilities with strong occupancy and operational efficiency
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <Calendar className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proven Timeline</h3>
                <p className="text-primary-foreground/80">
                  Track record of successful acquisitions, development, and exits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
