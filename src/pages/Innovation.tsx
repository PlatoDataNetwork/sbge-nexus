import { Bot, TrendingUp, Zap, Shield, Smartphone, BarChart } from 'lucide-react';

const Innovation = () => {
  const innovations = [
    {
      title: 'AI-Powered Chatbots',
      description: 'Intelligent customer service available 24/7 for inquiries, bookings, and support',
      icon: <Bot className="h-8 w-8" />,
      benefits: ['24/7 availability', 'Instant response', 'Multilingual support'],
    },
    {
      title: 'Predictive Maintenance',
      description: 'Machine learning algorithms predict equipment failures before they occur',
      icon: <Shield className="h-8 w-8" />,
      benefits: ['Reduced downtime', 'Cost savings', 'Enhanced reliability'],
    },
    {
      title: 'Dynamic Pricing',
      description: 'AI-driven pricing optimization based on demand, seasonality, and competition',
      icon: <TrendingUp className="h-8 w-8" />,
      benefits: ['Revenue optimization', 'Competitive positioning', 'Real-time adjustment'],
    },
    {
      title: 'Smart Access Systems',
      description: 'Mobile-first access control with biometric authentication and real-time monitoring',
      icon: <Smartphone className="h-8 w-8" />,
      benefits: ['Enhanced security', 'Contactless access', 'Usage analytics'],
    },
    {
      title: 'Revenue Optimization',
      description: 'Advanced analytics platform for performance tracking and strategic decisions',
      icon: <BarChart className="h-8 w-8" />,
      benefits: ['Data-driven insights', 'Performance tracking', 'Predictive analytics'],
    },
    {
      title: 'Automated Operations',
      description: 'Streamlined operations reducing labor costs while improving service quality',
      icon: <Zap className="h-8 w-8" />,
      benefits: ['Cost reduction', 'Operational efficiency', 'Scalability'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
              Innovation & Technology
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Leveraging AI and automation to redefine self-storage operations
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              The Future of Self-Storage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              StorageBlue is at the forefront of the self-storage industry's digital transformation. 
              By integrating artificial intelligence, machine learning, and automation across our operations, 
              we're creating competitive advantages that drive superior returns for investors while delivering 
              exceptional experiences for customers.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Technology Suite
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive technology platform driving operational excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {innovations.map((innovation) => (
                <div key={innovation.title} className="bg-card border border-border rounded-lg p-8 hover-lift">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0 text-accent">
                      {innovation.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {innovation.title}
                      </h3>
                      <p className="text-muted-foreground">{innovation.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground">Key Benefits:</div>
                    <ul className="space-y-1">
                      {innovation.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Competitive Advantages
              </h2>
              <p className="text-lg text-muted-foreground">
                Technology-driven differentiation in a traditional industry
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Operational Efficiency
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our automation platform reduces labor costs by 40% compared to traditional operators while 
                  maintaining higher service quality. AI-powered systems handle routine tasks, allowing our 
                  team to focus on strategic initiatives and customer relationships.
                </p>
                <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">40%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">98%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">24/7</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Availability</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Revenue Optimization
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dynamic pricing algorithms analyze hundreds of data points in real-time to optimize rates 
                  for maximum revenue. Our AI considers local competition, seasonal trends, occupancy levels, 
                  and customer behavior patterns to set optimal pricing.
                </p>
                <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">12-18%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Revenue Lift</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">Real-time</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Adjustments</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">300+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Data Points</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Customer Experience
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mobile-first platform with AI chatbots provides seamless customer experiences. From initial 
                  inquiry to move-in and ongoing support, our technology enables convenient, contactless 
                  interactions that today's customers expect.
                </p>
                <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">4.8/5</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Customer Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">&lt;2min</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-green-600">85%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Mobile Usage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Building the Future
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              While competitors rely on legacy systems and manual processes, StorageBlue is building 
              the technology infrastructure for the next generation of self-storage. Our investment in 
              AI and automation creates sustainable competitive advantages and positions us to capture 
              outsized returns in a consolidating market.
            </p>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-heading font-bold mb-2">First Mover</div>
                <p className="text-sm text-primary-foreground/80">
                  Leading technology adoption in a traditional industry
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-heading font-bold mb-2">Scalable</div>
                <p className="text-sm text-primary-foreground/80">
                  Platform designed for rapid growth and portfolio expansion
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-heading font-bold mb-2">Proven</div>
                <p className="text-sm text-primary-foreground/80">
                  Technology validated across multiple facilities and markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
