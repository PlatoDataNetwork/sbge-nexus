import { Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StevenGreener = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/leadership">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Leadership
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Steven Greener
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Head of Music Talent Management</p>
                <p className="text-lg text-muted-foreground">Primary Wave • Strategic Advisors</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Steven Greener serves as Head of Music Talent Management at Primary Wave Entertainment and is a 
                      partner in the firm. With a distinguished career spanning talent management, film production, and 
                      entertainment strategy, Steven has established himself as one of the industry's most respected 
                      executives. At Primary Wave, he oversees the music talent management division, representing an 
                      impressive roster including Cee Lo Green, Fantasia, Melissa Etheridge, Brandy, Cypress Hill, 
                      Eric Benét, and Yanni, among others.
                    </p>
                    <p>
                      Steven began his career working alongside industry legends Benny Medina and Jeff Pollack, managing 
                      Will Smith during the early years of his transformation from music to film stardom. This experience 
                      provided Steven with invaluable insights into building multi-platform entertainment careers and 
                      managing talent across multiple media channels. He then transitioned into film production, producing 
                      notable projects that demonstrated his versatility and creative vision.
                    </p>
                    <p>
                      Throughout his career, Steven has demonstrated an exceptional ability to identify and develop talent, 
                      structure complex deals, and build strategic partnerships that maximize opportunities for his clients. 
                      His approach combines sophisticated business acumen with deep creative understanding, enabling him 
                      to guide artists through the complex landscape of modern entertainment while preserving their 
                      artistic integrity and maximizing their commercial potential.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Steven brings expertise in brand development, strategic 
                      partnerships, talent relations, and entertainment industry best practices. His experience building 
                      and managing high-profile relationships, negotiating complex agreements, and creating innovative 
                      partnership opportunities provides valuable perspectives for the company's marketing strategies, 
                      brand positioning, and strategic alliance development.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Head of Music Talent Management and Partner at Primary Wave Entertainment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Early career managing Will Smith alongside Benny Medina and Jeff Pollack
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Represents roster including Cee Lo Green, Fantasia, Melissa Etheridge, Brandy, Cypress Hill
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Film producer with credits across multiple successful projects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Decades of experience in talent management and entertainment strategy
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Talent Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Music industry and artist development
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Entertainment Production</h3>
                      <p className="text-sm text-muted-foreground">
                        Film and television production expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Brand Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Building and managing high-profile brands
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        Creating innovative alliance opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StevenGreener;
