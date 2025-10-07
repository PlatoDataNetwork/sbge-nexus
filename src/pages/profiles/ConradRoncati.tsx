import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import conradRoncatiImage from '@/assets/conrad-roncati.jpg';

const ConradRoncati = () => {
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
                src={conradRoncatiImage} 
                alt="Conrad Roncati" 
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Conrad Roncati
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Chief Operating Officer</p>
                <p className="text-lg text-muted-foreground">Partner</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Conrad Roncati is an architect and developer with over 40 years of comprehensive experience 
                      in real estate development. As the founder of Architectura, he has built a multi-regional 
                      practice with headquarters in NYC and New Jersey, and satellite offices in California, 
                      Florida, and Connecticut.
                    </p>
                    <p>
                      As Chief Operating Officer, Conrad oversees all aspects of StorageBlue's operational 
                      development, from land and building acquisition through entitlements, design, engineering, 
                      and construction. His integrated approach ensures seamless execution of development projects 
                      from concept to completion.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Over 40 years of experience in architecture and real estate development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Founder of Architectura, a multi-regional architecture and development firm
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Oversees comprehensive development process: acquisition, entitlements, design, 
                        engineering, and construction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Established offices across major US markets including NYC, NJ, CA, FL, and CT
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Architecture</h3>
                      <p className="text-sm text-muted-foreground">
                        Design and engineering excellence
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Ground-up and redevelopment projects
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Entitlements</h3>
                      <p className="text-sm text-muted-foreground">
                        Zoning and regulatory approvals
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Construction Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Project delivery and execution
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

export default ConradRoncati;
