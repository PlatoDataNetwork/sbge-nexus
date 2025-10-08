import { Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PaulWeiner = () => {
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
                  Paul M. Weiner
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Attorney</p>
                <p className="text-lg text-muted-foreground">Board of Governmental Affairs</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Paul M. Weiner is a master strategist with diverse expertise spanning corporate law, real estate 
                      development, land use, and municipal government law. As a consultant at Weiner Law Group LLP in 
                      Parsippany, New Jersey, Paul has built an exceptional reputation for his sophisticated approach 
                      to complex legal and regulatory challenges facing developers and businesses throughout the state.
                    </p>
                    <p>
                      With decades of experience in land use and zoning law, Paul has become one of New Jersey's most 
                      sought-after advisors for development projects requiring municipal approvals, variance applications, 
                      and site plan approvals. His deep understanding of municipal government operations, combined with 
                      his extensive experience in real estate transactions, allows him to navigate even the most challenging 
                      regulatory environments with strategic precision.
                    </p>
                    <p>
                      Paul's practice encompasses the full spectrum of land use and development matters, from initial site 
                      acquisition and due diligence through zoning approvals, environmental permits, and project completion. 
                      His ability to anticipate regulatory challenges and develop proactive solutions has made him an 
                      invaluable resource for developers seeking to maximize the value of their real estate investments 
                      while maintaining compliance with all applicable regulations.
                    </p>
                    <p>
                      As a member of StorageBlue's Board of Governmental Affairs, Paul provides strategic guidance on 
                      land use approvals, municipal government relations, zoning matters, and development strategy. His 
                      expertise ensures that the company's acquisition and development initiatives proceed efficiently 
                      through the regulatory approval process while building strong relationships with local officials 
                      and community stakeholders.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Master strategist in land use and municipal government law
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Consultant at Weiner Law Group LLP specializing in real estate development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Extensive expertise in zoning, variances, and site plan approvals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Decades of experience navigating New Jersey municipal regulations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Strategic advisor on corporate law and real estate transactions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Proven track record in complex development project approvals
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Land Use & Zoning</h3>
                      <p className="text-sm text-muted-foreground">
                        Municipal approvals and variance applications
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Real Estate Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Site acquisition through project completion
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Municipal Government Law</h3>
                      <p className="text-sm text-muted-foreground">
                        Government relations and regulatory strategy
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Corporate Law</h3>
                      <p className="text-sm text-muted-foreground">
                        Business transactions and strategic counsel
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Site Plan Approvals</h3>
                      <p className="text-sm text-muted-foreground">
                        Development project approvals and permitting
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Due Diligence</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive regulatory and legal review
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

export default PaulWeiner;
