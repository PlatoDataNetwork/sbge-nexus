import { Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WarrenDiamond = () => {
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
                  Warren Diamond
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Senior Advisor</p>
                <p className="text-lg text-muted-foreground">Partner</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Warren Diamond is a self-storage industry pioneer with over 40 years of experience in the 
                      NY/NJ metropolitan markets. As CEO of American Real Estate Management, he has been at the 
                      forefront of self-storage development and operations in one of the nation's most competitive 
                      markets.
                    </p>
                    <p>
                      As Senior Advisor to StorageBlue, Warren provides strategic guidance based on decades of 
                      hands-on experience in self-storage development, operations, and investment. His deep 
                      understanding of the NY/NJ markets is invaluable to the fund's growth strategy.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        CEO of American Real Estate Management, leading self-storage operations and development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Over 40 years of pioneering experience in the self-storage industry
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Former partner for 25 years in American Self Storage, one of the region's leading operators
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Deep expertise and extensive network in NY/NJ self-storage markets
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Self-Storage Operations</h3>
                      <p className="text-sm text-muted-foreground">
                        Facility management and optimization
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Market Knowledge</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep NY/NJ market insights
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Site selection and facility development
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Advisory</h3>
                      <p className="text-sm text-muted-foreground">
                        Industry trends and growth opportunities
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

export default WarrenDiamond;
