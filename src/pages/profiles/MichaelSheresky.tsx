import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import michaelShereskyImage from '@/assets/michael-sheresky.png';

const MichaelSheresky = () => {
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
                src={michaelShereskyImage} 
                alt="Michael Sheresky" 
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Michael Sheresky
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Partner</p>
                <p className="text-lg text-muted-foreground">United Talent Agency • Strategic Advisors</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Michael Sheresky is a Partner at United Talent Agency (UTA), one of the world's leading talent 
                      and entertainment companies. A Harvard Business School graduate (MBA 1997) and Vassar College 
                      alumnus, Michael has built an exceptional career in talent representation, combining business 
                      acumen with creative vision. Promoted to partner in 2015, he has established himself as one of 
                      Hollywood's most influential agents, representing top-tier talent across film, television, and 
                      entertainment.
                    </p>
                    <p>
                      Michael's journey into entertainment began with a passion for cinema, sparked by seeing the 
                      re-release of "Lawrence of Arabia" in 70mm at the Ziegfeld movie palace. This early inspiration 
                      led him to pursue a career where business strategy meets creative excellence. For over 20 years, 
                      Michael has been business partners with Ramses Ishak, forming one of Hollywood's most successful 
                      talent representation partnerships. Together, they have demonstrated an uncanny ability to identify 
                      and develop opportunities in the creative marketplace.
                    </p>
                    <p>
                      Michael and Ramses have been recognized as driving forces behind some of Hollywood's most memorable 
                      and commercially successful films, including "Straight Outta Compton" and "Hidden Figures." Their 
                      ability to recognize culturally significant stories with both artistic merit and commercial 
                      potential has made them sought-after advisors for talent seeking to make meaningful contributions 
                      to the entertainment landscape. Michael's strategic approach combines sophisticated deal structuring 
                      with long-term career planning and brand development.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Michael brings expertise in strategic business development, 
                      partnership creation, brand positioning, and identifying unique market opportunities. His Harvard 
                      Business School education combined with decades of experience building successful partnerships and 
                      navigating complex entertainment deals provides valuable perspectives for the company's strategic 
                      initiatives, partnership development, and growth strategies.
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
                        Harvard Business School MBA 1997, Vassar College graduate
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        20-year business partnership with Ramses Ishak
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Helped develop hits including "Straight Outta Compton" and "Hidden Figures"
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Recognized for identifying culturally significant entertainment opportunities
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
                        Strategic career development and management
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Business Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Harvard MBA bringing business acumen to entertainment
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Partnership Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Creating strategic alliances and collaborations
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Market Opportunities</h3>
                      <p className="text-sm text-muted-foreground">
                        Identifying and developing unique opportunities
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

export default MichaelSheresky;
