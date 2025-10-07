import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import wladimirKlitschkoImage from '@/assets/wladimir-klitschko.jpg';

const WladimirKlitschko = () => {
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
            <div className="h-96 relative overflow-hidden bg-muted/20">
              <img 
                src={wladimirKlitschkoImage} 
                alt="Wladimir Klitschko" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Wladimir Klitschko
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Boxing Legend & Hall of Famer</p>
                <p className="text-lg text-muted-foreground">Strategic Advisor</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Wladimir Klitschko is a Ukrainian former professional boxer who competed in the heavyweight 
                      division and is considered one of the greatest heavyweight champions in boxing history. Known 
                      for his technical skill, intelligence, and athleticism, Klitschko held the world heavyweight 
                      championship twice and dominated the division for over a decade.
                    </p>
                    <p>
                      Throughout his illustrious career, Klitschko held the WBA (Super), IBF, WBO, IBO, and Ring 
                      magazine heavyweight titles. He holds the record for the longest cumulative heavyweight title 
                      reign of all time, with the most successful consecutive title defenses. His disciplined approach, 
                      strategic thinking, and relentless pursuit of excellence made him a dominant force in boxing.
                    </p>
                    <p>
                      Beyond boxing, Klitschko is known for his intelligence and business acumen, holding a PhD in 
                      sports science. As a Strategic Advisor to StorageBlue, he brings championship mentality, 
                      strategic discipline, and the winning mindset that comes from competing at the highest levels 
                      of international sport.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Two-time world heavyweight champion
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Held WBA (Super), IBF, WBO, IBO, and Ring magazine titles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Record for longest cumulative heavyweight title reign in history
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Olympic Gold Medalist in 1996 Atlanta Olympics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        PhD in Sports Science - combines athletic and intellectual excellence
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Championship Mentality</h3>
                      <p className="text-sm text-muted-foreground">
                        Decade-long dominance at the highest level
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Discipline</h3>
                      <p className="text-sm text-muted-foreground">
                        Technical excellence and preparation
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Athletic Intelligence</h3>
                      <p className="text-sm text-muted-foreground">
                        PhD-level analytical thinking
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">International Business</h3>
                      <p className="text-sm text-muted-foreground">
                        Global perspective and leadership
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

export default WladimirKlitschko;
