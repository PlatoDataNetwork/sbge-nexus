import { MapPin, Square, TrendingUp, Calendar } from 'lucide-react';
import StatCard from '@/components/StatCard';
import { memo } from 'react';
import facilityFerryImage from '@/assets/facility-ferry.jpg';
import facilityPatersonImage from '@/assets/facility-paterson.jpg';
import facilityCliftonImage from '@/assets/facility-clifton.jpg';
import facilityStatenIslandImage from '@/assets/facility-staten-island.png';
import facilityAberdeenImage from '@/assets/facility-aberdeen.jpg';
import facilityWestLongBranchImage from '@/assets/facility-west-long-branch.png';

// Static data moved outside component to prevent recreation on each render
const facilities = [
  {
    name: 'StorageBlue Newark',
    location: 'Newark, NJ',
    sqft: '95,000',
    occupancy: '92%',
    status: 'Stabilized',
    image: facilityFerryImage,
  },
  {
    name: 'StorageBlue Paterson',
    location: 'Paterson, NJ',
    sqft: '24,000',
    occupancy: '88%',
    status: 'Stabilized',
    image: facilityPatersonImage,
  },
  {
    name: 'StorageBlue Clifton',
    location: 'Clifton, NJ',
    sqft: '35,000',
    occupancy: '95%',
    status: 'Stabilized',
    image: facilityCliftonImage,
  },
  {
    name: 'StorageBlue Staten Island',
    location: 'Staten Island, NY',
    sqft: '267,000',
    occupancy: '90%',
    status: 'Value-Add',
    image: facilityStatenIslandImage,
  },
  {
    name: 'StorageBlue Aberdeen',
    location: 'Aberdeen, NJ',
    sqft: '85,000',
    occupancy: '87%',
    status: 'Development',
    image: facilityAberdeenImage,
  },
  {
    name: 'StorageBlue West Long Branch',
    location: 'West Long Branch, NJ',
    sqft: '68,000',
    occupancy: '93%',
    status: 'Stabilized',
    image: facilityWestLongBranchImage,
  },
];

const performanceMetrics = [
  {
    title: 'Total Square Feet',
    value: '574K',
    change: '+12% YoY',
    positive: true,
  },
  {
    title: 'Average Occupancy',
    value: '90.5%',
    change: '+3.2% vs Target',
    positive: true,
  },
  {
    title: 'Facilities',
    value: '6',
    change: 'Current Portfolio',
    positive: true,
  },
];

const Portfolio = () => {

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
                Assets to be Immediately Acquired
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Six initial facilities representing strategic positions in target markets
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center md:border-r border-accent/30 pr-6">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">6</div>
                  <div className="text-sm md:text-base text-accent font-medium">Facilities</div>
                </div>
                <div className="text-center md:border-r border-accent/30 md:pr-6">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">4,945+</div>
                  <div className="text-sm md:text-base text-accent font-medium">Units</div>
                </div>
                <div className="text-center md:border-r border-accent/30 pr-6">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">574,000</div>
                  <div className="text-sm md:text-base text-accent font-medium">NRSF</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">$197.2M</div>
                  <div className="text-sm md:text-base text-accent font-medium">Projected Market Value Estimate</div>
                </div>
              </div>
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
                Current StorageBlue Assets
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
                  <div className="h-48 relative overflow-hidden">
                    {facility.image ? (
                      <img 
                        src={facility.image} 
                        alt={facility.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full bg-gradient-primary relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Square className="h-16 w-16 text-primary-foreground/30" />
                        </div>
                      </div>
                    )}
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

      {/* StorageBlue Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                StorageBlue Case Studies
              </h2>
              <p className="text-lg text-muted-foreground">
                Proven performance across multiple investment strategies
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-10 hover-lift">
                <div className="mb-6">
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                    StorageBlue Case Study I
                  </h3>
                  <p className="text-lg text-muted-foreground">North Jersey / NYC Metro</p>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">No. of Facilities</div>
                    <div className="text-2xl font-semibold text-foreground">6</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Investment</div>
                    <div className="text-2xl font-semibold text-foreground">$46.5M</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Sale Price</div>
                    <div className="text-2xl font-semibold text-foreground">$100M</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">MOIC</div>
                    <div className="text-2xl font-semibold text-foreground">34.0x</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">IRR</div>
                    <div className="text-2xl font-semibold text-green-600">33.79%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Status</div>
                    <div className="text-2xl font-semibold text-foreground">SOLD</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-10 hover-lift">
                <div className="mb-6">
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                    StorageBlue Case Study II
                  </h3>
                  <p className="text-lg text-muted-foreground">New Jersey</p>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">No. of Facilities</div>
                    <div className="text-2xl font-semibold text-foreground">3</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Investment</div>
                    <div className="text-2xl font-semibold text-foreground">$89M</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Targeted Sale Price</div>
                    <div className="text-2xl font-semibold text-foreground">$97.2M</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">MOIC</div>
                    <div className="text-2xl font-semibold text-foreground">2.18x</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">IRR</div>
                    <div className="text-2xl font-semibold text-green-600">33.01%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Status</div>
                    <div className="text-2xl font-semibold text-foreground">Active</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-10 hover-lift">
                <div className="mb-6">
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                    StorageBlue Case Study III
                  </h3>
                  <p className="text-lg text-muted-foreground">New Jersey</p>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">No. of Facilities</div>
                    <div className="text-2xl font-semibold text-foreground">3</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Investment</div>
                    <div className="text-2xl font-semibold text-foreground">$22M</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Targeted Sale Price</div>
                    <div className="text-2xl font-semibold text-foreground">$36.8M</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">MOIC</div>
                    <div className="text-2xl font-semibold text-foreground">4.16x</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">IRR</div>
                    <div className="text-2xl font-semibold text-green-600">29.36%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Status</div>
                    <div className="text-2xl font-semibold text-foreground">Active</div>
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

export default memo(Portfolio);
