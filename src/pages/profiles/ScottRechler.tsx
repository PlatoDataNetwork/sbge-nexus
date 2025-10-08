import { Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ScottRechler = () => {
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
                  Scott Rechler
                </h1>
                <p className="text-2xl text-accent font-medium">Chairman & CEO, RXR Realty</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Scott Rechler is the Chairman and Chief Executive Officer of RXR, a fully integrated real estate 
                      company and investment manager that owns and manages over 30 million square feet of commercial 
                      properties and more than 9,600 multifamily units. Under his leadership, RXR has become one of 
                      the region's premier real estate development and investment firms.
                    </p>
                    <p>
                      Rechler specializes in public-private partnerships and master developments, including landmark 
                      projects such as the $4 billion development of Terminal 6 at JFK International Airport and 
                      comprehensive mixed-use developments. His innovative approach to real estate development has 
                      positioned RXR as a leader in transformative urban projects.
                    </p>
                    <p>
                      Before founding RXR, Rechler served as Chairman and CEO of Reckson Associates, which he helped 
                      take public in 1995. He also served on the board of American Campus Communities, the largest 
                      student housing company in the United States, from 2004 to 2008. His leadership extends beyond 
                      business, having served as Chairman of the Regional Plan Association, a nonprofit focused on 
                      sustainable development.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Chairman and CEO of RXR, managing over 30M sqft and 9,600+ multifamily units
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Led $4 billion development of Terminal 6 at JFK International Airport
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Former Chairman and CEO of Reckson Associates (took public in 1995)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Board member of American Campus Communities (2004-2008)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Former Chairman of Regional Plan Association
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Development Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Master development and PPP expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Real Estate Innovation</h3>
                      <p className="text-sm text-muted-foreground">
                        Transformative urban projects
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Portfolio Management</h3>
                      <p className="text-sm text-muted-foreground">
                        30M+ sqft across multiple asset classes
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Public-Private Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        Infrastructure and mixed-use development
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

export default ScottRechler;
