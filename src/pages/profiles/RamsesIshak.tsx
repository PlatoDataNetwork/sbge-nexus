import { Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RamsesIshak = () => {
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
                  Ramses Ishak
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Partner</p>
                <p className="text-lg text-muted-foreground">United Talent Agency • Strategic Advisors</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Ramses Ishak is a Partner at United Talent Agency (UTA), one of the world's leading talent and 
                      entertainment companies. Promoted to partner in 2015, Ramses has built an exceptional reputation 
                      as a talent agent representing some of the best talent in the entertainment business. His roster 
                      of clients and his influence in Hollywood demonstrate his sophisticated understanding of the 
                      entertainment industry and his ability to identify and develop exceptional opportunities.
                    </p>
                    <p>
                      For over 20 years, Ramses has been business partners with Michael Sheresky, forming one of 
                      Hollywood's most successful talent representation partnerships. Together, they have demonstrated 
                      an uncanny ability to seek out opportunities in the creative marketplace, representing talent 
                      behind some of Hollywood's most memorable and commercially successful projects. Their partnership 
                      has been recognized as a driving force behind unlikely hits such as "Straight Outta Compton" and 
                      "Hidden Figures," demonstrating their ability to identify culturally significant projects with 
                      both artistic merit and commercial potential.
                    </p>
                    <p>
                      Ramses's approach to talent representation combines deep industry relationships with strategic 
                      thinking about career development, project selection, and brand building. His expertise extends 
                      beyond traditional talent representation to encompass strategic partnerships, brand development, 
                      and identifying opportunities that transcend conventional entertainment business models. This 
                      forward-thinking approach has positioned his clients for sustained success across multiple platforms 
                      and media channels.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Ramses brings expertise in talent relations, strategic 
                      partnerships, brand development, and identifying unique market opportunities. His experience 
                      building successful partnerships, negotiating complex agreements, and creating innovative 
                      collaborations provides valuable insights for the company's marketing strategies, partnership 
                      development, and brand positioning initiatives.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Partner at United Talent Agency (UTA), promoted 2015
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        20-year business partnership with Michael Sheresky
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Represents top-tier talent in entertainment business
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Driving force behind hits including "Straight Outta Compton" and "Hidden Figures"
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Recognized for identifying unique creative marketplace opportunities
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Talent Representation</h3>
                      <p className="text-sm text-muted-foreground">
                        Top-tier talent management and career development
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        Building innovative collaborations and alliances
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Brand Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Talent brand building and positioning
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Market Opportunities</h3>
                      <p className="text-sm text-muted-foreground">
                        Identifying unique creative marketplace opportunities
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

export default RamsesIshak;
