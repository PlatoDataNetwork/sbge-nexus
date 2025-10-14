import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, TrendingUp, Shield, Target } from 'lucide-react';
import StatCard from '@/components/StatCard';
import heroBg from '@/assets/hero-bg.jpg';
import storageInterior from '@/assets/storage-interior.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#0a1f2e]/75" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight">
              Institutional Access to the Future of Self-Storage
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              StorageBlue Growth Fund, LP ("SGBF"). $350M Equity Fund.<br />
              $1B Buying Power. 35+ Years of Proven Performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-[hsl(220,90%,30%)] text-white hover:bg-[hsl(220,90%,25%)]">
                <Link to="/investor-questionnaire">
                  Request Access <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(43,48%,62%)] text-foreground hover:bg-[hsl(43,48%,55%)]">
                <Link to="/strategy">Fund Overview</Link>
              </Button>
            </div>
            
            <p className="text-lg font-semibold text-white pt-6">
              StorageBlue Growth Fund LP ("SBGF")
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              value="$350M"
              label="Target Capital Raise"
              description="Representing $1B in buying power"
              icon={<Building2 className="h-8 w-8" />}
            />
            <StatCard
              value="35+"
              label="Years of Experience"
              description="Proven leadership in self-storage"
              icon={<Shield className="h-8 w-8" />}
            />
            <StatCard
              value="16-24%"
              label="Target IRR"
              description="Strong returns for investors"
              icon={<TrendingUp className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                Strategic Edge in an Underserved Market
              </h2>
              <p className="text-lg text-muted-foreground">
                Since 2018, NYC has banned conversion of buildings into self-storage across all 5 boroughs. 
                StorageBlue is disrupting the industry by providing free pickup to all NYC boroughs and NJ.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Free Pickup Service</h3>
                    <p className="text-muted-foreground">No other self-storage company offers free pickup in NYC</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Lowest Price Guarantee</h3>
                    <p className="text-muted-foreground">Competitive pricing with premium service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Vertically Integrated</h3>
                    <p className="text-muted-foreground">Full control from acquisition to operations</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[hsl(43,48%,62%)] text-foreground hover:bg-[hsl(43,48%,55%)]">
                <Link to="/strategy">
                  View Full Strategy <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={storageInterior}
                alt="Modern self-storage facility"
                className="rounded-lg shadow-premium w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              The Opportunity
            </h2>
            <p className="text-xl text-primary-foreground/90">
              "There is no substitute for 35 years of experience."
            </p>
            <p className="text-lg italic text-primary-foreground/80">— Alan Mruvka, Founder</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-3xl font-heading font-bold mb-2">$350M</h3>
                <p className="text-primary-foreground/80">Target capital raise representing $1B in buying power</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-3xl font-heading font-bold mb-2">$70M</h3>
                <p className="text-primary-foreground/80">Equity already identified for targeted purchases</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-3xl font-heading font-bold mb-2">5-7 Years</h3>
                <p className="text-primary-foreground/80">Strategic investment horizon</p>
              </div>
            </div>
            
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link to="/investor-portal">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Validation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Market Validation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Joining industry leaders in a fragmented, high-growth market
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {['Public Storage', 'Blackstone', 'CubeSmart', 'Extra Space'].map((company) => (
              <div key={company} className="flex items-center justify-center p-6 bg-muted/50 rounded-lg hover-lift">
                <span className="text-lg font-semibold text-secondary">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
