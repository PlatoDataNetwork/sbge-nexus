import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import barryGosinImage from '@/assets/barry-gosin.png';

const BarryGosin = () => {
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
                src={barryGosinImage} 
                alt="Barry Gosin" 
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Barry M. Gosin
                </h1>
                <p className="text-2xl text-accent font-medium">CEO, Newmark</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Barry M. Gosin serves as Chief Executive Officer and Chairman of Newmark Group, Inc. (Nasdaq: NMRK), 
                      one of the world's leading commercial real estate advisory and services firms. Under his leadership, 
                      Newmark provides comprehensive services to large institutional investors, global corporations, and 
                      property owners and occupiers worldwide.
                    </p>
                    <p>
                      With extensive expertise spanning capital markets, investment sales, agency leasing, property and 
                      facilities management, and corporate advisory services, Gosin has established Newmark as a dominant 
                      force in the commercial real estate industry. His strategic vision and operational excellence have 
                      driven the company's growth and market leadership.
                    </p>
                    <p>
                      As a strategic advisor to StorageBlue, Gosin brings his deep understanding of institutional real 
                      estate investment, capital markets, and operational best practices to guide the fund's growth and 
                      market positioning.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Chief Executive Officer and Chairman of Newmark Group, Inc.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Leadership of a publicly-traded commercial real estate services firm (Nasdaq: NMRK)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Extensive experience serving institutional investors and global corporations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Expert in capital markets, investment sales, and property management
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Strategic advisor with deep hospitality and real estate sector expertise
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Capital Markets</h3>
                      <p className="text-sm text-muted-foreground">
                        Investment sales and financing strategies
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Institutional Services</h3>
                      <p className="text-sm text-muted-foreground">
                        Serving global investors and corporations
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Property Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Facilities and asset management excellence
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Public company executive management
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

export default BarryGosin;
