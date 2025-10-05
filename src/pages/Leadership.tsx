import { Linkedin, Award, Building2 } from 'lucide-react';

const Leadership = () => {
  const executives = [
    {
      name: 'Alan Mruvka',
      title: 'Founder & CEO',
      bio: 'Founder of StorageBlue with 35+ years of experience in self-storage development and operations. Previously founded American Self-Storage, establishing market leadership in North Jersey.',
      achievements: ['35+ years industry experience', '3.5M+ sqft developed', 'Founded American Self-Storage'],
    },
    {
      name: 'Executive Team Member',
      title: 'Chief Financial Officer',
      bio: 'Seasoned financial executive with extensive experience in real estate finance, capital markets, and institutional investor relations.',
      achievements: ['20+ years finance experience', 'Institutional capital raising', 'Real estate M&A'],
    },
    {
      name: 'Executive Team Member',
      title: 'Chief Operating Officer',
      bio: 'Operations expert focused on technology integration, process optimization, and scaling facility management across multiple markets.',
      achievements: ['Technology implementation', 'Operations scaling', 'Portfolio management'],
    },
    {
      name: 'Executive Team Member',
      title: 'Chief Development Officer',
      bio: 'Leading all acquisition, development, and construction activities with deep expertise in ground-up development and value-add projects.',
      achievements: ['Development expertise', 'Acquisition strategy', 'Construction management'],
    },
  ];

  const advisors = [
    {
      name: 'Ja Rule',
      title: 'Brand Ambassador',
      description: 'Multi-platinum recording artist and entrepreneur bringing brand visibility and strategic marketing insights',
    },
    {
      name: 'Advisory Board Member',
      title: 'Real Estate Advisor',
      description: 'Former institutional real estate executive with expertise in portfolio strategy and capital markets',
    },
    {
      name: 'Advisory Board Member',
      title: 'Technology Advisor',
      description: 'PropTech innovator advising on AI implementation and digital transformation strategies',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
              Leadership
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Experienced team with proven track record in self-storage
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Executive Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Industry veterans with deep expertise in self-storage development, operations, and finance
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {executives.map((exec, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover-lift">
                  <div className="h-64 bg-gradient-primary relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="h-24 w-24 text-primary-foreground/20" />
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                        {exec.name}
                      </h3>
                      <p className="text-accent font-medium">{exec.title}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exec.bio}
                    </p>
                    
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="text-sm font-semibold text-foreground">Key Achievements:</div>
                      <ul className="space-y-1">
                        {exec.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <Award className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-primary-foreground" />
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
                  Alan Mruvka founded American Self-Storage over 35 years ago, building it into the #1 self-storage 
                  operator in North Jersey. His vision and hands-on leadership have guided the development of over 
                  3.5 million square feet of storage facilities, establishing a reputation for innovation, quality, 
                  and customer service excellence.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With StorageBlue, Alan is applying decades of industry expertise and entrepreneurial drive to 
                  create a new standard in self-storage. His founder-led approach ensures alignment with investor 
                  interests and unwavering commitment to building long-term value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Advisory Board
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Strategic advisors providing expertise in brand development, real estate, and technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
                  <div className="h-48 bg-gradient-primary rounded-lg mb-6 flex items-center justify-center">
                    <Linkedin className="h-12 w-12 text-primary-foreground/30" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{advisor.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advisor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ambassador Highlight */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Brand Partnership
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ja Rule brings his entrepreneurial experience and cultural influence as StorageBlue's Brand Ambassador. 
              His involvement amplifies our brand reach and demonstrates our commitment to innovative marketing and 
              customer engagement strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-heading font-bold mb-2">Multi-Platinum</div>
                <p className="text-sm text-primary-foreground/80">
                  Recording artist with global recognition
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-heading font-bold mb-2">Entrepreneur</div>
                <p className="text-sm text-primary-foreground/80">
                  Successful business ventures across industries
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-heading font-bold mb-2">Brand Power</div>
                <p className="text-sm text-primary-foreground/80">
                  Amplifying StorageBlue's market presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-background">
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
    </div>
  );
};

export default Leadership;
