import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Award, Briefcase, GraduationCap, Building2 } from 'lucide-react';

const Profile = () => {
  const { slug } = useParams<{ slug: string }>();

  const profiles: Record<string, any> = {
    'alan-mruvka': {
      name: 'Alan Mruvka',
      title: 'Founder & CEO',
      image: null,
      bio: [
        'Alan Mruvka holds over 35 years of experience in self-storage, real estate development and entertainment businesses. His most distinguished and monumental success is in revolutionizing a genre of entertainment and celebrity-based television as the Founder of the pop culture icon, E! Entertainment Television, now an NBC/Comcast company valued at over $15 Billion.',
        'Mruvka is the Founder and CEO of StorageBlue, a New Jersey based self-storage company that grew to seventeen buildings (almost three million square feet) in the New Jersey/New York City metropolitan area.',
        'As a partner in American Self Storage from 1989 through 2015, Mr. Mruvka was active in the acquisition, development, construction and management of 17 self-storage facilities. In 2015, the majority of the American Self Storage facilities were sold off and the rest split up between Mr. Mruvka and his partners, and StorageBlue, a new generation of self-storage, was born.',
      ],
      experience: [
        {
          role: 'Founder & CEO',
          company: 'StorageBlue',
          period: '2015 - Present',
          description: 'Leading the next generation of self-storage with innovative services and technology integration.',
        },
        {
          role: 'Founder & CEO',
          company: 'E! Entertainment Television',
          period: '1989 - 2003',
          description: 'Founded and led E! Entertainment for 14 years, building it into a network valued at over $15 Billion.',
        },
        {
          role: 'Partner',
          company: 'American Self Storage',
          period: '1989 - 2015',
          description: 'Active in acquisition, development, construction and management of 17 self-storage facilities.',
        },
      ],
      achievements: [
        '35+ years of experience in self-storage industry',
        'Founded E! Entertainment Television (valued at $15B+)',
        'Built 3 million square feet of self-storage facilities',
        '#1 self-storage operator in North Jersey',
        'Successful exit of 6 facilities in 2024 with 17-34% IRR',
      ],
      education: [
        'Extensive experience in real estate development',
        'Entertainment industry pioneer',
        'Self-storage innovation leader',
      ],
      quote: "You can't match the passion for success as in a Founder-driven company.",
    },
    'barry-gosin': {
      name: 'Barry Gosin',
      title: 'CEO & Chairman, Newmark',
      image: null,
      bio: [
        'Barry Gosin serves as Chief Executive Officer and Chairman of Newmark Group, Inc. (Nasdaq: NMRK), a leading commercial real estate advisor and service provider to large institutional investors, global corporations, and other owners and occupiers.',
        'Under his leadership, Newmark has grown into one of the world\'s premier commercial real estate services firms, providing comprehensive solutions across all asset classes. His strategic vision and deep market knowledge have been instrumental in driving growth and innovation.',
        'Gosin\'s extensive experience spans decades in commercial real estate advisory, with particular expertise in hospitality and institutional real estate sectors. His leadership has positioned Newmark as a trusted partner for sophisticated real estate transactions worldwide.',
      ],
      experience: [
        {
          role: 'Chief Executive Officer & Chairman',
          company: 'Newmark Group, Inc.',
          period: 'Current',
          description: 'Leading one of the world\'s premier commercial real estate advisory firms serving institutional investors and global corporations.',
        },
      ],
      achievements: [
        'CEO & Chairman of Nasdaq-listed Newmark Group',
        'Drove significant revenue growth and market expansion',
        'Extensive hospitality sector expertise',
        'Strategic advisory leadership across asset classes',
        'Real estate market innovation leader',
      ],
      education: [
        'Commercial real estate leadership',
        'Institutional investment expertise',
        'Hospitality industry specialization',
      ],
      quote: null,
    },
    'paul-massey': {
      name: 'Paul Massey',
      title: 'Founder & CEO, B6 Real Estate Advisors',
      image: null,
      bio: [
        'Paul Massey was born in Boston, Massachusetts where he attended the Roxbury Latin School. He graduated from Colgate University with a Bachelor of Arts degree in Economics in 1983.',
        'Mr. Massey began his career at CBRE and soon became head of the market research department in Midtown Manhattan, then transitioned into investment sales brokerage. He founded Massey Knakal Realty Services together with his colleague Robert A. Knakal, building it into one of New York City\'s most respected investment sales firms.',
        'Following the sale of Massey Knakal, Paul founded B6 Real Estate Advisors, continuing his legacy of excellence in commercial real estate investment sales. His deep understanding of New York City\'s five boroughs and comprehensive market knowledge has positioned him as one of the industry\'s most trusted advisors.',
        'Beyond real estate, Paul ran for Mayor of New York City, demonstrating his commitment to public service and city leadership. His entrepreneurial spirit and proven track record make him an invaluable strategic advisor.',
      ],
      experience: [
        {
          role: 'Founder & CEO',
          company: 'B6 Real Estate Advisors',
          period: 'Current',
          description: 'Leading investment sales and advisory firm serving all five boroughs of New York City.',
        },
        {
          role: 'Co-Founder & CEO',
          company: 'Massey Knakal Realty Services',
          period: 'Past',
          description: 'Built premier investment sales firm specializing in NYC commercial real estate.',
        },
        {
          role: 'Head of Market Research',
          company: 'CBRE Midtown Manhattan',
          period: 'Early Career',
          description: 'Led market research department before transitioning to investment sales.',
        },
      ],
      achievements: [
        'Founded two successful NYC real estate firms',
        'Deep expertise across all five NYC boroughs',
        'Ran for Mayor of New York City',
        'Colgate University Economics graduate',
        'Leading voice in NYC commercial real estate',
      ],
      education: [
        'Bachelor of Arts in Economics, Colgate University (1983)',
        'Roxbury Latin School',
        'Investment sales expertise',
        'Market research and analysis',
      ],
      quote: null,
    },
    'scott-rechler': {
      name: 'Scott Rechler',
      title: 'Chairman & CEO, RXR Realty',
      image: null,
      bio: [
        'Scott Rechler (born November 4, 1967) is the Chief Executive Officer and Chairman of RXR, a fully integrated real estate company and investment manager that owns and manages over 30 million square feet of commercial properties and more than 9,600 multifamily units.',
        'RXR specializes in public-private partnerships and master developments that include the $4 billion development of Terminal 6 at JFK International Airport, and numerous transformative projects across the New York metropolitan area.',
        'Under Rechler\'s leadership, RXR has become an innovative investor, developer, and place-maker committed to applying a customer and community-centered approach to real estate. His vision for sustainable, technology-enabled development has set new industry standards.',
        'Beyond his corporate leadership, Rechler serves on The Real Estate Roundtable Board of Directors and is recognized as one of the region\'s most influential real estate executives.',
      ],
      experience: [
        {
          role: 'Chairman & CEO',
          company: 'RXR Realty',
          period: 'Current',
          description: 'Leading fully integrated real estate company managing 30M+ SF of commercial properties and 9,600+ multifamily units.',
        },
        {
          role: 'Board Member',
          company: 'The Real Estate Roundtable',
          period: 'Current',
          description: 'Contributing to national real estate policy and industry leadership.',
        },
      ],
      achievements: [
        'Chairman & CEO managing 30M+ SF portfolio',
        '$4 billion Terminal 6 JFK Airport development',
        'Public-private partnership specialist',
        'Sustainable development innovator',
        'Real Estate Roundtable Board member',
        'Community-centered development leader',
      ],
      education: [
        'Real estate development and investment',
        'Public-private partnerships',
        'Master development expertise',
        'Sustainable building practices',
      ],
      quote: null,
    },
    'john-calipari': {
      name: 'John Calipari',
      title: 'Hall of Fame Basketball Coach',
      image: null,
      bio: [
        'John Calipari is one of the most successful and recognizable coaches in college basketball history. He has led teams to the NCAA Final Four multiple times and won the NCAA Championship with the University of Kentucky in 2012.',
        'Known for his ability to recruit and develop top talent, Coach Calipari has sent numerous players to the NBA, becoming one of the most influential figures in basketball. His "Players First" philosophy emphasizes preparing young athletes for professional and personal success.',
        'Beyond basketball, Calipari is an accomplished author and motivational speaker, sharing his leadership principles with audiences worldwide. His strategic mindset and winning mentality make him an invaluable strategic advisor.',
        'Calipari was inducted into the Naismith Memorial Basketball Hall of Fame, cementing his legacy as one of the game\'s all-time greats.',
      ],
      experience: [
        {
          role: 'Head Coach',
          company: 'University of Kentucky Men\'s Basketball',
          period: '2009 - 2024',
          description: 'Led Wildcats to NCAA Championship, multiple Final Fours, and consistently top recruiting classes.',
        },
        {
          role: 'Head Coach',
          company: 'University of Memphis',
          period: '2000 - 2009',
          description: 'Built program into national powerhouse with Final Four appearance.',
        },
      ],
      achievements: [
        'Naismith Memorial Basketball Hall of Fame inductee',
        '2012 NCAA National Championship',
        'Multiple Final Four appearances',
        '40+ players sent to NBA',
        'Four-time Naismith College Coach of the Year',
        'Author and motivational speaker',
      ],
      education: [
        'Leadership and team building',
        'Talent development expertise',
        'Strategic coaching philosophy',
      ],
      quote: 'The biggest thing is you cannot be afraid to miss. If you are afraid to miss, you are afraid to be great.',
    },
    'byron-scott': {
      name: 'Byron Scott',
      title: 'NBA Champion & Hall of Famer',
      image: null,
      bio: [
        'Byron Scott is a three-time NBA champion who won titles with the Los Angeles Lakers during the legendary "Showtime" era in 1985, 1987, and 1988. Playing alongside Magic Johnson and Kareem Abdul-Jabbar, Scott was known for his clutch shooting and championship pedigree.',
        'After a successful 14-season playing career, Scott transitioned into coaching, leading teams including the New Jersey Nets to back-to-back NBA Finals appearances in 2002 and 2003. He also served as head coach for the New Orleans Hornets, Cleveland Cavaliers, and Los Angeles Lakers.',
        'Scott\'s combination of championship experience as both a player and coach, along with his leadership qualities, provides unique insights into building winning organizations and developing talent.',
      ],
      experience: [
        {
          role: 'NBA Player',
          company: 'Los Angeles Lakers, Indiana Pacers, Vancouver Grizzlies',
          period: '1983 - 1997',
          description: 'Three-time NBA Champion, 12,000+ career points, known for clutch performances.',
        },
        {
          role: 'NBA Head Coach',
          company: 'Multiple NBA Teams',
          period: '2000 - 2016',
          description: 'Led New Jersey Nets to consecutive NBA Finals, coached multiple franchises.',
        },
      ],
      achievements: [
        'Three-time NBA Champion (1985, 1987, 1988)',
        'Two-time NBA Finals Head Coach',
        '14-season playing career',
        '12,000+ career points',
        'Part of Lakers "Showtime" dynasty',
        'NBA Coach of the Year (2008)',
      ],
      education: [
        'Arizona State University',
        'Championship mentality and culture',
        'Team leadership and development',
      ],
      quote: null,
    },
    'wladimir-klitschko': {
      name: 'Wladimir Klitschko',
      title: 'Boxing Legend & Hall of Famer',
      image: null,
      bio: [
        'Wladimir Klitschko is one of the greatest heavyweight boxers of all time, holding the world heavyweight championship for over a decade. Known as "Dr. Steelhammer" for his powerful punch and PhD in Sports Science, Klitschko perfectly combined athletic prowess with intellectual rigor.',
        'Together with his brother Vitali Klitschko, they made history as the only siblings to simultaneously hold world heavyweight titles. Wladimir\'s technical skill, strategic approach, and athletic intelligence set him apart in the sport.',
        'With a record of 64 wins (53 by knockout) and only 5 losses, Klitschko defended his titles successfully 23 times. His disciplined approach to training, business, and life demonstrates the principles of excellence and strategic thinking.',
        'After retiring from boxing, Klitschko has become an entrepreneur, philanthropist, and speaker, applying his championship mindset to business ventures and social causes. He holds a PhD in Sports Science, reflecting his commitment to education alongside athletic achievement.',
      ],
      experience: [
        {
          role: 'Professional Boxer',
          company: 'Heavyweight Division',
          period: '1996 - 2017',
          description: 'Unified Heavyweight World Champion, 64-5 record with 53 KOs.',
        },
        {
          role: 'Entrepreneur & Speaker',
          company: 'Various Ventures',
          period: '2017 - Present',
          description: 'Business ventures, motivational speaking, and philanthropic work.',
        },
      ],
      achievements: [
        'Unified Heavyweight World Champion',
        '23 successful title defenses',
        '64-5 professional record (53 KOs)',
        'PhD in Sports Science',
        'Olympic Gold Medal (1996)',
        'Longest combined world heavyweight reign',
        'International Boxing Hall of Fame',
      ],
      education: [
        'PhD in Sports Science',
        'Strategic thinking and preparation',
        'Performance optimization',
      ],
      quote: 'I never saw a successful person who wasn\'t flexible and who didn\'t have a certain degree of resilience.',
    },
    'roger-mason-jr': {
      name: 'Roger Mason Jr.',
      title: 'NBA Executive & Former Player',
      image: null,
      bio: [
        'Roger Mason Jr. enjoyed a successful 10-season NBA career playing for teams including the San Antonio Spurs, Washington Wizards, and Miami Heat. Known for his three-point shooting and professionalism, Mason transitioned seamlessly from player to executive.',
        'Following his playing career, Mason became the first solo Deputy Executive Director for the National Basketball Players Association (NBPA), overseeing player relations, programs, and career development. In this capacity, he was second in command at the players\' union.',
        'Mason has since co-founded and served as Co-CEO at Vaunt, and served as President and Commissioner of the BIG3 basketball league. His diverse experience in sports business, player advocacy, and strategic partnerships makes him a valuable advisor on sports marketing and athlete relations.',
        'Currently, Mason serves as Global Talent Business Strategy Advisor at Oaktree Solutions, working with professional athletes and entertainment talent on business development and strategic positioning.',
      ],
      experience: [
        {
          role: 'Global Talent Business Strategy Advisor',
          company: 'Oaktree Solutions',
          period: '2024 - Present',
          description: 'Advising professional athletes and entertainment talent on business strategy.',
        },
        {
          role: 'Deputy Executive Director',
          company: 'NBA Players Association (NBPA)',
          period: 'Past',
          description: 'First solo Deputy Director, overseeing player relations and career development.',
        },
        {
          role: 'Co-CEO & Co-Founder',
          company: 'Vaunt',
          period: 'Past',
          description: 'Co-founded and led technology/sports venture.',
        },
        {
          role: 'NBA Player',
          company: 'Multiple NBA Teams',
          period: '2002 - 2012',
          description: '10-season career with Spurs, Wizards, Heat, and other teams.',
        },
      ],
      achievements: [
        '10-season NBA career',
        'First solo Deputy Executive Director of NBPA',
        'Co-founder and Co-CEO of Vaunt',
        'President & Commissioner of BIG3',
        'Sports business strategist',
        'Player advocacy leader',
      ],
      education: [
        'University of Virginia',
        'Sports business and marketing',
        'Strategic partnerships and negotiations',
      ],
      quote: null,
    },
    'donald-difrancesco': {
      name: 'Donald DiFrancesco',
      title: 'Former Governor of New Jersey',
      image: null,
      bio: [
        'Donald T. DiFrancesco served as the 51st Governor of New Jersey and was a long-time member of the State Senate. He served the citizens of New Jersey with distinction for more than 25 years in public office.',
        'Born in Scotch Plains, New Jersey, Governor DiFrancesco graduated from Penn State University and Seton Hall University School of Law. His legal career and public service have been marked by dedication to his community and state.',
        'As Governor, DiFrancesco focused on education, transportation, and economic development. His extensive experience in state government and understanding of regulatory matters provides valuable insights into navigating complex government relations and policy.',
        'Following his time in office, DiFrancesco has continued to serve New Jersey through legal practice and advisory roles, leveraging his decades of experience in government and law.',
      ],
      experience: [
        {
          role: '51st Governor',
          company: 'State of New Jersey',
          period: '2001 - 2002',
          description: 'Served as Acting Governor of New Jersey.',
        },
        {
          role: 'State Senator',
          company: 'New Jersey State Senate',
          period: '25+ years',
          description: 'Long-serving state senator with leadership positions.',
        },
        {
          role: 'Attorney',
          company: 'Private Practice',
          period: 'Current',
          description: 'Practicing law with focus on government relations and regulatory matters.',
        },
      ],
      achievements: [
        '51st Governor of New Jersey',
        '25+ years in New Jersey State Senate',
        'Education and transportation initiatives',
        'Economic development leadership',
        'Government relations expertise',
      ],
      education: [
        'Penn State University',
        'Seton Hall University School of Law',
        'Government policy and regulation',
      ],
      quote: null,
    },
    'raymond-lesniak': {
      name: 'Raymond Lesniak',
      title: 'Former New Jersey State Senator',
      image: null,
      bio: [
        'Raymond Lesniak served in the New Jersey State Senate from 1983 to 2018, representing the 20th Legislative District for an impressive 35 years. Throughout his career, he championed groundbreaking legislation and became one of the most influential legislators in New Jersey history.',
        'Known for his tenacity and willingness to take on difficult fights, Lesniak earned a reputation as a fierce advocate for progressive causes. "Not only do I not back away from a fight, I cherish it," Lesniak has said. "All my life, the bigger the challenge, the more it attracted me."',
        'During his 40 years in the New Jersey Legislature (including time in the Assembly), Lesniak was instrumental in passing landmark legislation on issues ranging from economic development to civil rights to animal welfare. His ability to build coalitions and navigate complex political landscapes made him one of the most effective legislators in state history.',
        'A graduate of Rutgers University, Lesniak has been inducted into the Rutgers Hall of Distinguished Alumni. His expertise in legislative strategy, regulatory matters, and political relationships provides invaluable insights for navigating complex business and government challenges.',
      ],
      experience: [
        {
          role: 'State Senator',
          company: 'New Jersey State Senate, 20th District',
          period: '1983 - 2018',
          description: '35 years representing the 20th Legislative District, championing groundbreaking legislation.',
        },
        {
          role: 'Legislator',
          company: 'New Jersey Legislature',
          period: '40 years total',
          description: 'Combined service in Assembly and Senate spanning four decades.',
        },
      ],
      achievements: [
        '35 years in New Jersey State Senate',
        '40 years total legislative service',
        'Groundbreaking legislative champion',
        'Rutgers Hall of Distinguished Alumni inductee',
        'Progressive policy leadership',
        'Coalition building expertise',
      ],
      education: [
        'Rutgers University (RC\'71)',
        'Legislative strategy and policy',
        'Government relations and regulatory matters',
      ],
      quote: 'Not only do I not back away from a fight, I cherish it. All my life, the bigger the challenge, the more it attracted me.',
    },
  };

  const profile = slug ? profiles[slug] : null;

  if (!profile) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Profile Not Found</h1>
          <Button asChild variant="premium">
            <Link to="/leadership">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Leadership
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost">
          <Link to="/leadership">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Leadership
          </Link>
        </Button>
      </div>

      {/* Profile Header */}
      <section className="py-12 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Building2 className="h-24 w-24 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                {profile.name}
              </h1>
              <p className="text-2xl text-primary-foreground/90 mb-4">{profile.title}</p>
              {profile.quote && (
                <blockquote className="text-lg italic border-l-4 border-accent pl-4 mt-6">
                  "{profile.quote}"
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">Biography</h2>
            <div className="space-y-6">
              {profile.bio.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Highlight - Special for Alan Mruvka */}
      {slug === 'alan-mruvka' && (
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 text-center">
                  <div className="text-5xl font-heading font-bold mb-3">$15B+</div>
                  <div className="text-xl font-semibold mb-2">E! Entertainment Value</div>
                  <p className="text-primary-foreground/80 text-sm">
                    Founded and built E! Entertainment Television, now valued at over $15 Billion
                  </p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 text-center">
                  <div className="text-5xl font-heading font-bold mb-3">3M+</div>
                  <div className="text-xl font-semibold mb-2">Square Feet Developed</div>
                  <p className="text-primary-foreground/80 text-sm">
                    Built and managed nearly three million square feet of self-storage facilities
                  </p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 text-center">
                  <div className="text-5xl font-heading font-bold mb-3">35+</div>
                  <div className="text-xl font-semibold mb-2">Years of Experience</div>
                  <p className="text-primary-foreground/80 text-sm">
                    Over three decades in self-storage, real estate development, and entertainment
                  </p>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">StorageBlue Success</h3>
                      <p className="text-primary-foreground/80">
                        #1 self-storage operator in North Jersey with successful exit of 6 facilities in 2024 achieving 17-34% IRR
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">Entertainment Pioneer</h3>
                      <p className="text-primary-foreground/80">
                        Revolutionized celebrity-based television and created a pop culture icon watched by millions worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {profile.experience && profile.experience.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-heading font-bold text-primary">Experience</h2>
              </div>
              <div className="space-y-6">
                {profile.experience.map((exp: any, index: number) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Achievements */}
      {profile.achievements && profile.achievements.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-heading font-bold text-primary">Key Achievements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 bg-card border border-border rounded-lg p-4">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Education & Expertise */}
      {profile.education && profile.education.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-heading font-bold text-primary">Education & Expertise</h2>
              </div>
              <div className="space-y-3">
                {profile.education.map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 bg-card border border-border rounded-lg p-4">
                    <GraduationCap className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Learn More About Our Team
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Our leadership team is ready to discuss the StorageBlue Growth Fund opportunity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="accent">
                <Link to="/auth">Request Access</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/leadership">View All Leadership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
