import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import mollyFordImage from '@/assets/molly-ford.png';

const MollyFord = () => {
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
                src={mollyFordImage} 
                alt="Molly Ford" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Molly Ford
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Chief Strategy Officer</p>
                <p className="text-lg text-muted-foreground">Partner</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Molly Ford is an expert in financing acquisitions with a distinguished focus on sourcing, 
                      evaluation, and capitalization strategies. Her expertise spans single-asset transactions, 
                      complex portfolio deals, and comprehensive corporate transactions.
                    </p>
                    <p>
                      As Chief Strategy Officer, Molly leads the strategic planning and execution of StorageBlue's 
                      acquisition and growth initiatives. Her analytical approach and extensive network enable the 
                      fund to identify and capitalize on premium investment opportunities.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Specializes in sourcing and evaluating complex acquisition opportunities across 
                        multiple asset classes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Expert in single-asset and portfolio transaction structuring and execution
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Extensive experience in capitalization strategies and financing structures
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Degree from Brown University, one of the nation's leading institutions
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Acquisition Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Deal sourcing and evaluation
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Portfolio Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Multi-asset transaction execution
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Capital Structure</h3>
                      <p className="text-sm text-muted-foreground">
                        Financing and capitalization strategies
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Corporate Transactions</h3>
                      <p className="text-sm text-muted-foreground">
                        Complex deal structuring and negotiation
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

export default MollyFord;
