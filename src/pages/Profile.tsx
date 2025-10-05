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
      title: 'CEO, Newmark',
      image: null,
      bio: [
        'Barry Gosin serves as Chief Executive Officer of Newmark, one of the world\'s leading commercial real estate services firms. With decades of experience in the real estate industry, Gosin brings unparalleled expertise in real estate advisory and hospitality sectors.',
        'His strategic vision and deep market knowledge have been instrumental in driving growth and innovation across multiple real estate asset classes.',
      ],
      experience: [
        {
          role: 'Chief Executive Officer',
          company: 'Newmark',
          period: 'Current',
          description: 'Leading one of the world\'s premier commercial real estate advisory firms.',
        },
      ],
      achievements: [
        'CEO of leading commercial real estate firm',
        'Extensive hospitality sector expertise',
        'Strategic advisory leadership',
        'Real estate market innovation',
      ],
      education: [
        'Real estate leadership',
        'Hospitality industry expertise',
      ],
      quote: null,
    },
    'paul-massey': {
      name: 'Paul Massey',
      title: 'CEO, Massey Knakal Realty Services',
      image: null,
      bio: [
        'Paul Massey is the Chief Executive Officer of Massey Knakal Realty Services, bringing exceptional expertise in investment sales and market analysis. His deep understanding of commercial real estate markets and transaction strategies has positioned him as a leading voice in the industry.',
      ],
      experience: [
        {
          role: 'Chief Executive Officer',
          company: 'Massey Knakal Realty Services',
          period: 'Current',
          description: 'Leading investment sales and advisory firm with focus on commercial real estate transactions.',
        },
      ],
      achievements: [
        'CEO of premier investment sales firm',
        'Deep market analysis expertise',
        'Transaction advisory leadership',
        'Commercial real estate specialist',
      ],
      education: [
        'Investment sales expertise',
        'Market analysis specialization',
      ],
      quote: null,
    },
    'scott-rechler': {
      name: 'Scott Rechler',
      title: 'Chairman & CEO, RXR Realty',
      image: null,
      bio: [
        'Scott Rechler is Chairman and Chief Executive Officer of RXR Realty, one of the New York metropolitan area\'s leading real estate development and investment firms. Under his leadership, RXR has become known for transformative development projects and innovative real estate solutions.',
        'His vision for sustainable, technology-enabled real estate development has set new standards in the industry.',
      ],
      experience: [
        {
          role: 'Chairman & CEO',
          company: 'RXR Realty',
          period: 'Current',
          description: 'Leading premier real estate development and investment firm in the New York metro area.',
        },
      ],
      achievements: [
        'Chairman & CEO of RXR Realty',
        'Transformative development projects',
        'Real estate innovation leader',
        'Sustainable development advocate',
      ],
      education: [
        'Real estate development expertise',
        'Investment management',
      ],
      quote: null,
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
                <Link to="/contact">Request Access</Link>
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
