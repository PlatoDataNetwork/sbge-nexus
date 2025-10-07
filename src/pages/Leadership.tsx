import { Linkedin, Award, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import jaRuleImage from '@/assets/ja-rule.png';
import byronScottImage from '@/assets/byron-scott.jpg';
import rinaldoDArgenioImage from '@/assets/rinaldo-dargenio.jpg';
import paulWeinerImage from '@/assets/paul-weiner.jpg';
import wladimirKlitschkoImage from '@/assets/wladimir-klitschko.jpg';
import gualbertoMedinaImage from '@/assets/gualberto-medina.png';
import michaelShereskyImage from '@/assets/michael-sheresky.png';

const Leadership = () => {

  const executives = [
    {
      name: 'Alan Mruvka',
      title: 'Founder & CEO',
      slug: 'alan-mruvka',
      bio: 'Founder and CEO with over 35 years of experience in self-storage, real estate development and entertainment. Founded E! Entertainment Television, now an NBC/Comcast company valued at over $15 Billion.',
      achievements: ['35+ years industry experience', 'Founded E! Entertainment Television', 'Built 3M+ sqft of self-storage'],
    },
    {
      name: 'Barry Gosin',
      title: 'CEO, Newmark',
      slug: 'barry-gosin',
      bio: 'Chief Executive Officer of Newmark, bringing extensive expertise in real estate and hospitality sectors.',
      achievements: ['Real Estate Leadership', 'Hospitality Expertise', 'Strategic Advisory'],
    },
    {
      name: 'Paul Massey',
      title: 'CEO, Massey Knakal Realty Services',
      slug: 'paul-massey',
      bio: 'Chief Executive Officer of Massey Knakal Realty Services with deep market knowledge and transaction expertise.',
      achievements: ['Investment Sales', 'Market Analysis', 'Transaction Advisory'],
    },
    {
      name: 'Scott Rechler',
      title: 'Chairman & CEO, RXR Realty',
      slug: 'scott-rechler',
      bio: 'Chairman and CEO of RXR Realty, leading one of the region\'s premier real estate development firms.',
      achievements: ['Development Leadership', 'Real Estate Innovation', 'Portfolio Management'],
    },
  ];

  const executiveTeam = [
    {
      name: 'Winston Ma',
      title: 'Chief Investment Officer',
      subtitle: 'Partner',
      slug: 'winston-ma',
      bio: 'Investor, attorney, author, and adjunct professor at NYU with extensive experience in international finance.',
      achievements: [
        'Former Managing Director at China Investment Corporation (CIC)',
        'Former Deputy Head of Equity Capital Markets at Barclays',
        'VP Investment Banking at J.P. Morgan',
        'Corporate Lawyer at Davis Polk & Wardwell'
      ],
    },
    {
      name: 'Molly Ford',
      title: 'Chief Strategy Officer',
      subtitle: 'Partner',
      slug: 'molly-ford',
      bio: 'Expert in financing acquisitions with focus on sourcing, evaluation, and capitalization.',
      achievements: [
        'Specializes in single-asset and portfolio transactions',
        'Corporate transaction expertise',
        'Degree from Brown University'
      ],
    },
    {
      name: 'Conrad Roncati',
      title: 'Chief Operating Officer',
      subtitle: 'Partner',
      slug: 'conrad-roncati',
      bio: 'Architect and developer with over 40 years of experience overseeing comprehensive real estate development.',
      achievements: [
        '40+ years in architecture and development',
        'Founder of Architectura with offices in NYC, NJ, CA, FL, CT',
        'Oversees acquisition, entitlements, design, engineering, and construction'
      ],
    },
    {
      name: 'Nicholas Horner',
      title: 'Outside General Counsel',
      subtitle: 'Shumaker, Loop & Kendrick, LLP',
      slug: 'nicholas-horner',
      bio: 'Business lawyer with over 10 years of experience in M&A, securities compliance, and fund formation.',
      achievements: [
        '10+ years business law experience',
        'Expertise in M&A and securities compliance',
        'Represented corporations in transactions over $300M'
      ],
    },
    {
      name: 'Warren Diamond',
      title: 'Senior Advisor',
      subtitle: 'Partner',
      slug: 'warren-diamond',
      bio: 'Self-storage pioneer with over 40 years of experience in the NY/NJ markets.',
      achievements: [
        'CEO of American Real Estate Management',
        '40+ years in self-storage',
        'Former partner (25 years) in American Self Storage',
        'Deep expertise in NY/NJ self-storage markets'
      ],
    },
    {
      name: 'Larry Namer',
      title: 'Senior Advisor',
      subtitle: 'Partner',
      slug: 'larry-namer',
      bio: 'Entertainment, media, and real estate entrepreneur with over 50 years of experience.',
      achievements: [
        'Co-Founder of E! Entertainment Television (valued over $15B)',
        '50+ years entrepreneurial experience',
        'Founded Comspan Communications, Steeplechase Media, Metan Global Entertainment Group'
      ],
    },
    {
      name: 'Frank Zisa',
      title: 'SVP Investor Relations',
      subtitle: 'Partner',
      slug: 'frank-zisa',
      bio: 'Former Senior Development Manager with expertise in acquisitions and developments across multiple asset classes.',
      achievements: [
        'Managed over $1.4B in acquisitions & developments',
        'Former roles at Prudential Investment Management and Extra Space Self Storage',
        'Degrees in Real Estate Development from Columbia University'
      ],
    },
    {
      name: 'Justin Horowitz',
      title: 'Chief Debt Officer',
      subtitle: 'Partner',
      slug: 'justin-horowitz',
      bio: 'Capital markets advisor specializing in nationwide debt and equity placement.',
      achievements: [
        'Capital markets advisor at Cooper Horowitz (NYC)',
        'Previous roles at Savills Studley and Brickman',
        'Degree from Syracuse University Whitman School of Management'
      ],
    },
  ];

  type Advisor = {
    name: string;
    title: string;
    board: string;
    slug?: string;
    description: string;
    image?: string;
  };

  const allAdvisors: Advisor[] = [
    {
      name: 'John Calipari',
      title: 'Hall of Fame Basketball Coach',
      board: 'Strategic Advisors',
      slug: 'john-calipari',
      description: 'Hall of Fame basketball coach bringing strategic leadership and winning mentality to the organization.',
    },
    {
      name: 'Byron Scott',
      title: 'NBA Champion & Hall of Famer',
      board: 'Strategic Advisors',
      slug: 'byron-scott',
      description: 'Three-time NBA champion with the Los Angeles Lakers during their Showtime era, bringing championship experience and leadership.',
      image: byronScottImage,
    },
    {
      name: 'Wladimir Klitschko',
      title: 'Boxing Legend & Hall of Famer',
      board: 'Strategic Advisors',
      slug: 'wladimir-klitschko',
      description: 'Former heavyweight world champion known for technical skill, intelligence, and athleticism in the ring and business.',
      image: wladimirKlitschkoImage,
    },
    {
      name: 'Roger Mason Jr.',
      title: 'NBA Executive & Former Player',
      board: 'Strategic Advisors',
      slug: 'roger-mason-jr',
      description: 'Ten-season NBA veteran turned executive, bringing sports business acumen and strategic partnerships.',
    },
    {
      name: 'Donald DiFrancesco',
      title: 'Former Governor of New Jersey',
      board: 'Government Affairs',
      slug: 'donald-difrancesco',
      description: '51st Governor of New Jersey with over 25 years serving in the State Senate with distinction.',
    },
    {
      name: 'Raymond Lesniak',
      title: 'Former NJ State Senator',
      board: 'Government Affairs',
      slug: 'raymond-lesniak',
      description: 'Served in the New Jersey State Senate from 1983 to 2018, representing the 20th Legislative District.',
    },
    {
      name: 'Gualberto Medina',
      title: 'Former Secretary of Commerce',
      board: 'Government Affairs',
      slug: 'gualberto-medina',
      description: 'Attorney and CPA with extensive expertise in management, sales, business development, and regulatory matters.',
      image: gualbertoMedinaImage,
    },
    {
      name: 'Rinaldo D\'Argenio',
      title: 'Attorney',
      board: 'Government Affairs',
      slug: 'rinaldo-dargenio',
      description: 'One of New Jersey\'s most influential attorneys specializing in complex regulatory matters including utilities and environmental issues.',
      image: rinaldoDArgenioImage,
    },
    {
      name: 'Paul Weiner',
      title: 'Attorney',
      board: 'Government Affairs',
      slug: 'paul-weiner',
      description: 'Master strategist with diverse expertise in corporate law, real estate development, and municipal government law.',
      image: paulWeinerImage,
    },
    {
      name: 'Nawaf Althari',
      title: 'The Althari Group - Founding Partner',
      board: 'Strategic Advisors',
      slug: 'nawaf-althari',
      description: 'Founding Partner of The Althari Group, bringing strategic business development and investment expertise.',
    },
    {
      name: 'Brian Cury',
      title: 'EarthCam - Founder & CEO',
      board: 'Strategic Advisors',
      slug: 'brian-cury',
      description: 'Founder and CEO of EarthCam, pioneer in construction monitoring and jobsite camera technology.',
    },
    {
      name: 'Kery Davis',
      title: 'Howard University - Athletic Director',
      board: 'Strategic Advisors',
      slug: 'kery-davis',
      description: 'Athletic Director at Howard University with leadership experience in sports management and operations.',
    },
    {
      name: 'David Feldman',
      title: 'BFBST LLP - Co-Founder',
      board: 'Strategic Advisors',
      slug: 'david-feldman',
      description: 'Co-Founder of BFBST LLP, providing strategic financial and business advisory services.',
    },
    {
      name: 'Steven Greener',
      title: 'Primary Wave',
      board: 'Strategic Advisors',
      slug: 'steven-greener',
      description: 'Executive at Primary Wave bringing entertainment industry expertise and brand development experience.',
    },
    {
      name: 'Ramses Ishak',
      title: 'United Talent Agency',
      board: 'Strategic Advisors',
      slug: 'ramses-ishak',
      description: 'Partner at United Talent Agency with expertise in talent management and strategic partnerships.',
    },
    {
      name: 'Michael Sheresky',
      title: 'Partner',
      board: 'Strategic Advisors',
      slug: 'michael-sheresky',
      description: 'Strategic partner providing business advisory and operational expertise.',
      image: michaelShereskyImage,
    },
  ];

  // Responsive image component to improve headshot placement across varying aspect ratios
  const ResponsiveHeadshot = ({ src, alt }: { src: string; alt: string }) => {
    return (
      <div className="rounded-lg mb-4 overflow-hidden bg-muted/20">
        <div className="aspect-[4/3] w-full flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };


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
              Experienced team with proven track record in self-storage and real estate
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Senior executives with extensive experience in real estate and self-storage investment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {executives.map((exec, index) => (
                <Link
                  key={index}
                  to={`/profile/${exec.slug}`}
                  className="bg-card border border-border rounded-lg overflow-hidden hover-lift"
                >
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
                    
                    <div className="pt-4">
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <span>View Bio</span>
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Executive Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experienced professionals driving operational excellence and strategic growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {executiveTeam.map((exec, index) => (
                <Link
                  key={index}
                  to={`/profile/${exec.slug}`}
                  className="bg-card border border-border rounded-lg overflow-hidden hover-lift group"
                >
                  <div className="h-48 bg-gradient-primary relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-primary-foreground/20" />
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                      {exec.name}
                    </h3>
                    <p className="text-accent font-medium text-sm">{exec.title}</p>
                    {exec.subtitle && (
                      <p className="text-xs text-muted-foreground">{exec.subtitle}</p>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                      {exec.bio}
                    </p>
                    <div className="pt-3">
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <span>View Bio</span>
                      </Button>
                    </div>
                  </div>
                </Link>
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
                  <Button asChild variant="premium" size="lg">
                    <Link to="/profile/alan-mruvka">View Full Profile</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Governmental Affairs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Board of Governmental Affairs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Distinguished government leaders providing regulatory expertise and strategic guidance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allAdvisors
                .filter(advisor => advisor.board === 'Government Affairs')
                .map((advisor, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover-lift"
                  >
                    {advisor.image ? (
                      <ResponsiveHeadshot src={advisor.image} alt={advisor.name} />
                    ) : (
                      <div className="rounded-lg mb-4 overflow-hidden bg-gradient-primary">
                        <div className="aspect-[4/3] w-full flex items-center justify-center">
                          <Building2 className="h-12 w-12 text-primary-foreground/30" />
                        </div>
                      </div>
                    )}
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {advisor.board}
                      </span>
                    </div>
                    <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                      {advisor.name}
                    </h4>
                    <p className="text-accent font-medium text-sm mb-3">{advisor.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {advisor.description}
                    </p>
                    {advisor.slug && (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link to={`/profile/${advisor.slug}`}>
                          View Bio
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advisors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Strategic Advisors
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Distinguished advisors providing expertise in strategy and business development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allAdvisors
                .filter(advisor => advisor.board === 'Strategic Advisors')
                .map((advisor, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover-lift"
                  >
                    {advisor.image ? (
                      <ResponsiveHeadshot src={advisor.image} alt={advisor.name} />
                    ) : (
                      <div className="rounded-lg mb-4 overflow-hidden bg-gradient-primary">
                        <div className="aspect-[4/3] w-full flex items-center justify-center">
                          <Linkedin className="h-12 w-12 text-primary-foreground/30" />
                        </div>
                      </div>
                    )}
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {advisor.board}
                      </span>
                    </div>
                    <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                      {advisor.name}
                    </h4>
                    <p className="text-accent font-medium text-sm mb-3">{advisor.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {advisor.description}
                    </p>
                    {advisor.slug && (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link to={`/profile/${advisor.slug}`}>
                          View Bio
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ambassador */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Brand Ambassador
            </h2>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
              <div className="w-64 h-64 mx-auto mb-6">
                <img 
                  src={jaRuleImage} 
                  alt="Jeffrey Atkins 'Ja Rule' - Brand Ambassador" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-3xl font-heading font-bold mb-2">Jeffrey Atkins "Ja Rule"</h3>
              <p className="text-xl text-primary-foreground/90 mb-6">Multi-Platinum Recording Artist & Entrepreneur</p>
              
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Jeffrey Atkins, better known by his stage name Ja Rule, has been appointed as Brand Ambassador 
                for StorageBlue. He is an accomplished singer, actor, and businessman who has won numerous awards 
                for his music and has been nominated for two American Music Awards and four Grammy Awards. 
                He has sold over 30 million records worldwide and has received critical acclaim for his acting 
                talents across film, documentary, and television projects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-heading font-bold mb-2">30M+</div>
                  <p className="text-sm text-primary-foreground/80">Records Sold Worldwide</p>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold mb-2">Multi-Platinum</div>
                  <p className="text-sm text-primary-foreground/80">Recording Artist</p>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold mb-2">Award-Winning</div>
                  <p className="text-sm text-primary-foreground/80">Actor & Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Leadership;
