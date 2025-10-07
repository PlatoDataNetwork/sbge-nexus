import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DonaldDiFrancesco = () => {
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
            <div className="h-96 bg-gradient-primary relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 className="h-32 w-32 text-primary-foreground/20" />
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Donald T. DiFrancesco
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Former Governor of New Jersey</p>
                <p className="text-lg text-muted-foreground">Board of Governmental Affairs</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Donald T. DiFrancesco served as the 51st Governor of New Jersey and was a distinguished member 
                      of the State Senate for over 25 years. His extensive public service career has made him one of 
                      New Jersey's most respected political leaders, with deep knowledge of state government, regulatory 
                      affairs, and public policy.
                    </p>
                    <p>
                      Throughout his career, Governor DiFrancesco served the citizens of New Jersey with distinction, 
                      building strong relationships across party lines and demonstrating effective leadership during 
                      critical periods in the state's history. His experience spans legislative leadership, executive 
                      governance, and strategic policy development.
                    </p>
                    <p>
                      On StorageBlue's Board of Governmental Affairs, Governor DiFrancesco provides invaluable guidance 
                      on regulatory matters, government relations, and public policy issues affecting real estate 
                      development and business operations in New Jersey and the broader region.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        51st Governor of New Jersey
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Over 25 years serving in the New Jersey State Senate
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Distinguished record of public service and bipartisan leadership
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Extensive knowledge of state government and regulatory affairs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Strategic advisor on government relations and public policy
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Government Relations</h3>
                      <p className="text-sm text-muted-foreground">
                        Executive and legislative leadership
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Regulatory Affairs</h3>
                      <p className="text-sm text-muted-foreground">
                        State policy and compliance expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Public Policy</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic policy development
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Bipartisan Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Building consensus and coalitions
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

export default DonaldDiFrancesco;
