import { Building2, Award, Users, TrendingUp } from 'lucide-react';
import StatCard from '@/components/StatCard';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
              35+ Years of Proven Excellence
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              A founder-driven legacy of innovation and performance in self-storage
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              value="#1"
              label="In North Jersey"
              description="Market leadership position"
              icon={<Award className="h-8 w-8" />}
            />
            <StatCard
              value="35"
              label="Years of Experience"
              description="Industry expertise"
              icon={<TrendingUp className="h-8 w-8" />}
            />
            <StatCard
              value="+3.5M"
              label="Total SqFt Developed"
              description="Proven track record"
              icon={<Building2 className="h-8 w-8" />}
            />
            <StatCard
              value="6"
              label="Initial Facilities"
              description="Strategic portfolio"
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                From American Self-Storage to StorageBlue to SBGF
              </p>
            </div>

            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="bg-card border border-border rounded-lg p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      American Self-Storage
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded over 35 years ago, American Self-Storage established the foundation of excellence 
                      in the New Jersey market. Building a reputation for innovation and customer service that 
                      set industry standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="bg-card border border-border rounded-lg p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      StorageBlue Evolution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rebranded as StorageBlue to reflect our modern approach and expanded vision. 
                      Introduced disruptive services like free pickup across all 5 NYC boroughs and 
                      New Jersey, changing the competitive landscape of the industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="bg-card border border-border rounded-lg p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      StorageBlue Growth Fund, LP
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Launched SBGF to provide institutional investors access to our proven expertise and 
                      growth strategy. A $350M equity offering representing $1B in buying power, targeting 
                      strategic acquisitions and development in emerging and underserved markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="space-y-6">
              <p className="text-3xl md:text-4xl font-heading italic text-primary">
                "You can't match the passion for success as in a Founder-driven company."
              </p>
              <footer className="text-lg text-muted-foreground">
                — Alan Mruvka, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20">
                  <img 
                    src="/src/assets/alan-mruvka.png"
                    alt="Alan Mruvka" 
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  Alan Mruvka
                </h2>
                <p className="text-xl text-accent">Founder & CEO</p>
              </div>
              
              <div className="space-y-6">
                <blockquote className="text-xl md:text-2xl font-heading italic text-center text-primary border-l-4 border-accent pl-6">
                  "You can't match the passion for success as in a Founder-driven company."
                </blockquote>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Alan Mruvka holds over 35 years of experience in self-storage, real estate development and entertainment. 
                  His most distinguished success is revolutionizing celebrity-based television as the Founder of E! Entertainment 
                  Television, now an NBC/Comcast company valued at over $15 Billion.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As Founder and CEO of StorageBlue, Mruvka built a company that grew to seventeen buildings 
                  (almost three million square feet) in the New Jersey/New York City metropolitan area. His leadership 
                  combines entrepreneurial vision with proven operational excellence.
                </p>

                <div className="pt-6">
                  <a href="/profile/alan-mruvka" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                    View Full Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                Guiding principles that drive our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Founder-Driven Passion
                </h3>
                <p className="text-muted-foreground">
                  Unmatched commitment and alignment with investor success through ownership mentality
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Innovation Focus
                </h3>
                <p className="text-muted-foreground">
                  Continuously advancing technology and service models to maintain competitive advantage
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Institutional Discipline
                </h3>
                <p className="text-muted-foreground">
                  Rigorous investment processes and operational standards that institutional investors expect
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  Customer Excellence
                </h3>
                <p className="text-muted-foreground">
                  Exceptional service and innovation that drives customer satisfaction and retention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
              Why StorageBlue
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-primary-foreground/80">
                  Over 3.5 million square feet developed with consistent performance across market cycles
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Market Leadership</h3>
                <p className="text-primary-foreground/80">
                  #1 position in North Jersey with deep market knowledge and established relationships
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                <p className="text-primary-foreground/80">
                  Pioneering services like free pickup and leveraging AI for operational excellence
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold mb-3">Founder-Driven</h3>
                <p className="text-primary-foreground/80">
                  Aligned interests with unmatched passion and commitment to investor success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
