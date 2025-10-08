import { Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RogerMasonJr = () => {
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
                  Roger Mason Jr.
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">NBA Executive & Former Player</p>
                <p className="text-lg text-muted-foreground">Strategic Advisor</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Roger Mason Jr. is an accomplished NBA executive and former professional basketball player who 
                      brings a unique perspective combining on-court experience with business leadership. During his 
                      ten-season NBA career, Mason played for multiple franchises including the Washington Wizards, 
                      San Antonio Spurs, and New Orleans Hornets.
                    </p>
                    <p>
                      Following his playing career, Mason transitioned into executive roles within the NBA, where he 
                      has demonstrated strong leadership in sports business operations, player relations, and strategic 
                      partnerships. His understanding of both the athletic and business sides of professional sports 
                      provides valuable insights for organizational development and growth strategies.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Mason leverages his experience in high-performance 
                      environments, team dynamics, and business operations to provide guidance on organizational 
                      strategy, partnership development, and competitive positioning.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Ten-season NBA career with multiple franchises
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Played for Washington Wizards, San Antonio Spurs, and New Orleans Hornets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Transitioned to NBA executive roles after playing career
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Sports business acumen and strategic partnership development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Leadership experience in professional sports business operations
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Sports Business</h3>
                      <p className="text-sm text-muted-foreground">
                        NBA executive operations
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        Business development and relationships
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Team Dynamics</h3>
                      <p className="text-sm text-muted-foreground">
                        High-performance environments
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Professional Athletics</h3>
                      <p className="text-sm text-muted-foreground">
                        Ten seasons of NBA experience
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

export default RogerMasonJr;
