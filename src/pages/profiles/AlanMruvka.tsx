import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AlanMruvka = () => {
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
                  Alan Mruvka
                </h1>
                <p className="text-2xl text-accent font-medium">Founder & CEO</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Alan Mruvka is the visionary founder and CEO of StorageBlue, bringing over 35 years of 
                      experience in self-storage, real estate development, and entertainment to the company. His 
                      entrepreneurial journey has been marked by revolutionary successes across multiple industries.
                    </p>
                    <p>
                      Mruvka's most distinguished achievement was co-founding E! Entertainment Television, which 
                      revolutionized celebrity-based television and is now an NBC/Comcast company valued at over 
                      $15 billion. This success demonstrated his ability to identify market opportunities and build 
                      industry-leading brands from the ground up.
                    </p>
                    <p>
                      As Founder and CEO of StorageBlue, Mruvka built a company that grew to seventeen buildings 
                      totaling almost three million square feet in the New Jersey/New York City metropolitan area. 
                      His leadership combines entrepreneurial vision with proven operational excellence, and his 
                      founder-driven approach ensures unmatched passion and alignment with investor success.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Co-Founder of E! Entertainment Television, now valued at over $15 billion
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Over 35 years of experience in self-storage and real estate development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Built StorageBlue to seventeen buildings totaling almost 3 million square feet
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Studied architecture and structural engineering at University of Miami and Pratt Institute
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Ownership in fifteen metropolitan area self-storage facilities (American Self Storage, 2.5M sqft)
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Real Estate Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Ground-up development and redevelopment
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Self-Storage Operations</h3>
                      <p className="text-sm text-muted-foreground">
                        Industry disruption and innovation
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Entrepreneurship</h3>
                      <p className="text-sm text-muted-foreground">
                        Building billion-dollar brands
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Vision</h3>
                      <p className="text-sm text-muted-foreground">
                        Market opportunity identification
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <blockquote className="text-xl md:text-2xl font-heading italic text-center text-foreground">
                    "You can't match the passion for success as in a Founder-driven company."
                  </blockquote>
                  <p className="text-center text-muted-foreground mt-4">- Alan Mruvka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlanMruvka;
