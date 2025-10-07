import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import nawafAlthariImage from '@/assets/nawaf-althari.png';

const NawafAlthari = () => {
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
                src={nawafAlthariImage} 
                alt="Nawaf Althari" 
                className="w-full h-full object-cover object-[center_65%]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Nawaf Althari
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Founding Partner</p>
                <p className="text-lg text-muted-foreground">The Althari Group • Strategic Advisors</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Nawaf Althari is a Founding Partner at The Althari Group (TAG), bringing over 15 years of 
                      experience as an experienced leader at the intersection of international policy-making, foreign 
                      affairs, and technology management. His unique expertise bridges the public and private sectors, 
                      enabling strategic guidance on complex international business initiatives and cross-border 
                      partnerships.
                    </p>
                    <p>
                      Throughout his career, Nawaf has held senior political and economic advisory roles across both 
                      the public and private sectors, developing a sophisticated understanding of how international 
                      relations, technology innovation, and business strategy converge to create opportunities in the 
                      global marketplace. His work focuses on facilitating strategic partnerships and investments that 
                      leverage international networks and policy expertise.
                    </p>
                    <p>
                      The Althari Group, which Nawaf co-founded, operates at the intersection of international business, 
                      technology, and strategic investment. Through TAG Capital, the firm's investment arm, Nawaf works 
                      with visionary entrepreneurs building next-generation businesses with the potential to disrupt 
                      their industries. His experience in navigating complex international regulatory environments and 
                      building strategic partnerships across borders makes him a valuable advisor for businesses with 
                      global ambitions.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Nawaf provides counsel on international expansion 
                      opportunities, strategic partnerships, technology integration, and navigating complex regulatory 
                      environments. His global perspective and experience in both public policy and private sector 
                      strategy enable him to identify opportunities and develop strategies that transcend traditional 
                      market boundaries.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Founding Partner at The Althari Group (TAG)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        15+ years of experience in international policy-making and foreign affairs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Senior advisory roles across public and private sectors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Technology management and strategic investment expertise
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Co-founder of TAG Capital investment platform
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">International Policy</h3>
                      <p className="text-sm text-muted-foreground">
                        Policy-making and foreign affairs expertise
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Technology Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic technology integration and innovation
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Investment</h3>
                      <p className="text-sm text-muted-foreground">
                        Venture capital and disruptive business models
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Cross-Border Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        International business development and strategy
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

export default NawafAlthari;
