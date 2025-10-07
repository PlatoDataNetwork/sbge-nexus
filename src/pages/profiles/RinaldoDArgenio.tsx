import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import rinaldoDArgenioImage from '@/assets/rinaldo-dargenio.jpg';

const RinaldoDArgenio = () => {
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
                src={rinaldoDArgenioImage} 
                alt="Rinaldo D'Argenio" 
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Rinaldo M. D'Argenio
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Attorney</p>
                <p className="text-lg text-muted-foreground">Board of Governmental Affairs</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Rinaldo M. D'Argenio is one of New Jersey's most influential attorneys, specializing in complex 
                      regulatory matters that impact businesses and development projects throughout the state. With decades 
                      of experience in utilities law, environmental regulations, and government affairs, he brings invaluable 
                      expertise to navigating the intricate regulatory landscape of New Jersey.
                    </p>
                    <p>
                      As a consultant at Weiner Law Group LLP in Parsippany, New Jersey, Rinaldo has developed a reputation 
                      for his sophisticated understanding of utility regulations, environmental compliance, and the complex 
                      interplay between state and local regulatory frameworks. His practice focuses on helping clients 
                      successfully navigate regulatory challenges while maintaining compliance with evolving legal requirements.
                    </p>
                    <p>
                      Throughout his distinguished career, Rinaldo has been instrumental in shaping regulatory strategies 
                      for major development projects, utility matters, and environmental compliance initiatives. His deep 
                      knowledge of New Jersey's regulatory agencies and his established relationships with key decision-makers 
                      make him an essential advisor for businesses operating in regulated industries.
                    </p>
                    <p>
                      On StorageBlue's Board of Governmental Affairs, Rinaldo provides strategic counsel on regulatory 
                      compliance, utilities matters, environmental issues, and government relations. His expertise ensures 
                      that the company's development and operational activities meet all regulatory requirements while 
                      maintaining positive relationships with regulatory authorities.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        One of New Jersey's most influential attorneys in regulatory matters
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Extensive expertise in utilities law and environmental regulations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Consultant at Weiner Law Group LLP specializing in complex regulatory matters
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Decades of experience in government relations and regulatory strategy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Strategic advisor on environmental compliance and utilities matters
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Utilities Law</h3>
                      <p className="text-sm text-muted-foreground">
                        Complex regulatory matters and compliance
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Environmental Regulations</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive environmental compliance strategies
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Government Relations</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic regulatory agency relationships
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Regulatory Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Navigating complex state and local frameworks
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

export default RinaldoDArgenio;
