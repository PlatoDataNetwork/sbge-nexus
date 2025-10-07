import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RaymondLesniak = () => {
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
                  Raymond J. Lesniak
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Former NJ State Senator</p>
                <p className="text-lg text-muted-foreground">Board of Governmental Affairs</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Raymond J. Lesniak is an accomplished attorney and former Democratic Party politician who served 
                      in the New Jersey State Senate from 1983 to 2018, representing the 20th Legislative District for 
                      35 years. His remarkable tenure in the State Senate made him one of New Jersey's longest-serving 
                      and most influential legislators.
                    </p>
                    <p>
                      Throughout his distinguished career, Senator Lesniak was known for his legislative expertise, 
                      strategic thinking, and ability to build coalitions to advance important policy initiatives. His 
                      work spanned economic development, regulatory reform, animal welfare, and numerous other areas 
                      affecting New Jersey residents and businesses.
                    </p>
                    <p>
                      On StorageBlue's Board of Governmental Affairs, Senator Lesniak provides strategic guidance on 
                      legislative matters, regulatory affairs, and government relations. His deep understanding of the 
                      legislative process and extensive network throughout New Jersey government makes him an invaluable 
                      advisor on public policy and regulatory issues.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        35 years in New Jersey State Senate (1983-2018)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Represented 20th Legislative District throughout career
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        One of New Jersey's longest-serving and most influential legislators
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Extensive legislative expertise across multiple policy areas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Strong network throughout New Jersey government
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Legislative Affairs</h3>
                      <p className="text-sm text-muted-foreground">
                        35 years of Senate experience
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Government Relations</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep understanding of state government
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Policy Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic legislative initiatives
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Coalition Building</h3>
                      <p className="text-sm text-muted-foreground">
                        Building consensus for policy advancement
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

export default RaymondLesniak;
