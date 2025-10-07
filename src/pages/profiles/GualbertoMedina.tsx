import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import gualbertoMedinaImage from '@/assets/gualberto-medina.png';

const GualbertoMedina = () => {
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
                src={gualbertoMedinaImage} 
                alt="Gualberto Medina" 
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Gualberto "Gil" Medina
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Former Secretary of Commerce</p>
                <p className="text-lg text-muted-foreground">Board of Governmental Affairs</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Gualberto "Gil" Medina serves as Executive Vice President at CBRE, bringing a unique combination 
                      of legal expertise, financial acumen, and government experience. As both an attorney and Certified 
                      Public Accountant (CPA), Gil has developed extensive expertise across management, sales, business 
                      development, technology, and regulatory matters.
                    </p>
                    <p>
                      Gil previously served as Secretary of Commerce for the State of New Jersey under Governor Christine 
                      Todd Whitman, where he participated in the formulation of technology policy and economic development 
                      initiatives that shaped the state's business landscape. His tenure in this role provided him with 
                      deep insights into government operations, regulatory frameworks, and public-private partnerships.
                    </p>
                    <p>
                      Currently serving as Chair of the New Jersey Chamber of Commerce Board of Directors, Gil continues 
                      to be a leading voice in New Jersey's business community. He has served on numerous boards across 
                      various industry sectors including government, non-profits, health care, life sciences, medical 
                      devices, law, and accounting, demonstrating his versatility and commitment to advancing business 
                      interests across the state.
                    </p>
                    <p>
                      On StorageBlue's Board of Governmental Affairs, Gil provides strategic guidance on regulatory 
                      compliance, government relations, and business development initiatives, leveraging his extensive 
                      network and deep understanding of New Jersey's commercial real estate and regulatory environment.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Former Secretary of Commerce for the State of New Jersey
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Executive Vice President at CBRE, global leader in commercial real estate
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Chair of the New Jersey Chamber of Commerce Board of Directors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Licensed Attorney and Certified Public Accountant (CPA)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Board member across multiple industry sectors including healthcare, life sciences, and technology
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Key contributor to technology policy formulation in New Jersey
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
                        Former Commerce Secretary with deep government connections
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Legal & Financial</h3>
                      <p className="text-sm text-muted-foreground">
                        Attorney and CPA with comprehensive business expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Commercial Real Estate</h3>
                      <p className="text-sm text-muted-foreground">
                        Executive Vice President at CBRE
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Regulatory Affairs</h3>
                      <p className="text-sm text-muted-foreground">
                        Extensive experience in regulatory compliance and policy
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Business Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic growth and partnership expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Board Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Chair of NJ Chamber of Commerce, multiple board positions
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

export default GualbertoMedina;
