import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import johnCalipariImage from '@/assets/john-calipari.png';

const JohnCalipari = () => {
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
            <div className="h-96 relative overflow-hidden">
              <img 
                src={johnCalipariImage} 
                alt="John Calipari" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  John Calipari
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Hall of Fame Basketball Coach</p>
                <p className="text-lg text-muted-foreground">Strategic Advisor</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      John Calipari is a Naismith Memorial Basketball Hall of Fame coach and one of the most successful 
                      coaches in college basketball history. His legendary career has been marked by championship success, 
                      player development excellence, and a relentless winning mentality that translates across all 
                      competitive endeavors.
                    </p>
                    <p>
                      During his tenure at the University of Kentucky, Calipari established himself as an elite coach, 
                      leading the Wildcats to multiple Final Four appearances and a national championship. His ability to 
                      recruit top talent, develop players for professional careers, and build winning programs has made 
                      him one of the most respected figures in basketball.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Calipari brings his championship mindset, leadership 
                      philosophy, and strategic thinking to guide the organization's growth and competitive positioning. 
                      His experience in building winning teams and developing talent provides valuable perspective for 
                      organizational development and strategic planning.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Naismith Memorial Basketball Hall of Fame inductee
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Led University of Kentucky to NCAA National Championship
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Multiple Final Four appearances and conference championships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Renowned for developing NBA-caliber players and professional talent
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Championship mindset and winning mentality across decades of success
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Building championship organizations
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Winning Mentality</h3>
                      <p className="text-sm text-muted-foreground">
                        Competitive excellence and success
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Talent Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Player and team development expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Team Building</h3>
                      <p className="text-sm text-muted-foreground">
                        Creating high-performance cultures
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

export default JohnCalipari;
