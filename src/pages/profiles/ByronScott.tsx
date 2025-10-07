import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import byronScottImage from '@/assets/byron-scott.jpg';

const ByronScott = () => {
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
            <div className="h-96 bg-muted/20 relative overflow-hidden flex items-center justify-center">
              <img 
                src={byronScottImage} 
                alt="Byron Scott"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Byron Scott
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">NBA Champion & Hall of Famer</p>
                <p className="text-lg text-muted-foreground">Strategic Advisor</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Byron Scott is a three-time NBA champion and legendary basketball figure who achieved greatness 
                      both as a player and coach. As a key member of the Los Angeles Lakers during their iconic "Showtime" 
                      era in the 1980s, Scott won three NBA championships alongside Magic Johnson, Kareem Abdul-Jabbar, 
                      and James Worthy.
                    </p>
                    <p>
                      Following his distinguished playing career, Scott transitioned to coaching, where he served as head 
                      coach for several NBA teams including the New Jersey Nets, New Orleans Hornets, Cleveland Cavaliers, 
                      and Los Angeles Lakers. His leadership on the court and from the sidelines has earned him respect 
                      throughout the basketball world.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Scott brings championship experience, competitive drive, and 
                      leadership wisdom gained from decades at the highest levels of professional basketball. His insights 
                      on team building, performance excellence, and winning strategies provide valuable guidance for 
                      organizational growth and success.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Three-time NBA champion with Los Angeles Lakers (1985, 1987, 1988)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Member of the legendary "Showtime" Lakers dynasty
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        NBA head coach for multiple franchises over two decades
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Led New Jersey Nets to two NBA Finals appearances
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Championship experience and leadership at the highest levels
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Championship Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Three NBA championships as player
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Head coaching and team management
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Performance Excellence</h3>
                      <p className="text-sm text-muted-foreground">
                        High-level competitive success
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Advisory</h3>
                      <p className="text-sm text-muted-foreground">
                        Team building and organizational growth
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

export default ByronScott;
