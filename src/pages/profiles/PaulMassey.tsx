import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import paulMasseyImage from '@/assets/paul-massey.png';

const PaulMassey = () => {
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
                src={paulMasseyImage} 
                alt="Paul Massey" 
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Paul J. Massey, Jr.
                </h1>
                <p className="text-2xl text-accent font-medium">CEO, Massey Knakal Realty Services</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Paul J. Massey, Jr. is a highly accomplished real estate executive and entrepreneur who founded 
                      Massey Knakal Realty Services, building it into one of New York City's premier investment sales 
                      brokerage firms. His deep market knowledge and extensive transaction experience have made him a 
                      leading authority on the New York real estate market.
                    </p>
                    <p>
                      Born in Boston, Massachusetts and educated at Roxbury Latin School, Massey graduated from Colgate 
                      University with a Bachelor of Arts degree in Economics in 1983. He began his career at CBRE, where 
                      he quickly rose to head the market research department in Midtown Manhattan before transitioning to 
                      investment sales.
                    </p>
                    <p>
                      Together with his colleague Robert A. Knakal, Massey founded Massey Knakal Realty Services, which 
                      became known for its comprehensive market knowledge and successful track record in investment sales 
                      across all five boroughs of New York City. His expertise spans market analysis, deal structuring, 
                      and transaction execution.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Founded Massey Knakal Realty Services, a leading NYC investment sales firm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Operations in all five boroughs of New York City
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Former head of market research at CBRE Midtown Manhattan
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Bachelor of Arts in Economics from Colgate University
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Proven track record as entrepreneur and market strategist
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Investment Sales</h3>
                      <p className="text-sm text-muted-foreground">
                        Property transaction expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Market Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep NYC market knowledge
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Transaction Advisory</h3>
                      <p className="text-sm text-muted-foreground">
                        Deal structuring and execution
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Entrepreneurship</h3>
                      <p className="text-sm text-muted-foreground">
                        Building successful brokerage firms
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

export default PaulMassey;
