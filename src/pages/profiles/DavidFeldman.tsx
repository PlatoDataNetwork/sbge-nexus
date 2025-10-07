import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import davidFeldmanImage from '@/assets/david-feldman.png';

const DavidFeldman = () => {
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
                src={davidFeldmanImage} 
                alt="David Feldman" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  David Feldman
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Co-Founding Partner</p>
                <p className="text-lg text-muted-foreground">BFBST LLP • Strategic Advisors</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      David "Dave" Feldman is a Co-Founding Partner at Brecheen, Feldman, Breimer, Silver & Thompson 
                      (BFBST LLP), one of Los Angeles's premier entertainment law firms. Founded in 2020 after the 
                      partners departed from the storied Bloom Hergott firm, BFBST has quickly established itself as 
                      a powerhouse in entertainment law, representing some of the industry's most prominent talent and 
                      production companies.
                    </p>
                    <p>
                      With offices in the penthouse of the Watt Plaza Building in Century City, the firm has become 
                      known for its sophisticated approach to entertainment transactions, intellectual property matters, 
                      and complex negotiations. Dave's practice focuses on representing high-profile clients across film, 
                      television, music, and digital media, providing strategic counsel on deals, contracts, and business 
                      affairs that shape the entertainment landscape.
                    </p>
                    <p>
                      Before co-founding BFBST, Dave built an impressive career working with top entertainment industry 
                      clients, developing expertise in the complex financial and legal structures that underpin successful 
                      entertainment ventures. His experience spans deal structuring, rights negotiations, production 
                      agreements, talent representation, and strategic business advisory services for some of the 
                      entertainment industry's most successful projects and personalities.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Dave brings sophisticated expertise in complex transactions, 
                      contract negotiations, intellectual property protection, and business structure optimization. His 
                      experience navigating high-stakes deals and building successful business partnerships provides 
                      valuable insights for the company's strategic initiatives, partnerships, and corporate development 
                      activities.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Co-Founding Partner at BFBST LLP, leading entertainment law firm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Represents prominent talent and production companies in entertainment industry
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Expertise in complex entertainment transactions and deal structuring
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Specialist in intellectual property and rights negotiations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Strategic advisor on film, television, music, and digital media matters
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Entertainment Law</h3>
                      <p className="text-sm text-muted-foreground">
                        Film, television, music, and digital media
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Complex Transactions</h3>
                      <p className="text-sm text-muted-foreground">
                        Deal structuring and contract negotiations
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Intellectual Property</h3>
                      <p className="text-sm text-muted-foreground">
                        Rights management and IP protection
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Business Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic advisory and business development
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

export default DavidFeldman;
