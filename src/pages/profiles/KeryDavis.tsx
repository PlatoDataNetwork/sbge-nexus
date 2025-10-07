import { Building2, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import keryDavisImage from '@/assets/kery-davis.jpg';

const KeryDavis = () => {
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
                src={keryDavisImage} 
                alt="Kery Davis" 
                className="w-full h-full object-cover object-[55%_center]"
              />
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  Kery Davis
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Vice President of Athletics</p>
                <p className="text-lg text-muted-foreground">Howard University • Strategic Advisors</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Kery Davis serves as Vice President of Athletics at Howard University, a historic first for the 
                      institution. Promoted from Athletics Director in 2025, this elevation reflects his exceptional 
                      leadership, unwavering commitment to the academic success of student-athletes, and transformative 
                      vision for the university's athletic programs. Under his leadership, Howard has experienced a 
                      renaissance, establishing itself as an innovative force in collegiate athletics.
                    </p>
                    <p>
                      A highly respected figure with over 25 years of experience in collegiate athletics, television, 
                      and entertainment, Kery brings a unique perspective that bridges sports management with media and 
                      business strategy. Appointed as Director of Intercollegiate Athletics in 2015, he has chartered 
                      a course that has elevated Howard's athletic programs while maintaining the institution's commitment 
                      to academic excellence and student-athlete development.
                    </p>
                    <p>
                      Throughout his tenure at Howard, Kery has demonstrated visionary leadership in modernizing athletic 
                      facilities, expanding media partnerships, and enhancing the student-athlete experience. His background 
                      in sports media and entertainment has enabled him to build strategic partnerships that have increased 
                      visibility and resources for Howard athletics, positioning the university as a leader among HBCUs 
                      and beyond.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Kery provides insights on organizational leadership, brand 
                      development, strategic partnerships, and stakeholder engagement. His experience leading complex 
                      organizations, building high-performing teams, and creating strategic alliances across multiple 
                      industries brings valuable perspective to the company's growth initiatives and partnership strategies.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Vice President of Athletics at Howard University (historic first)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        25+ years of experience in collegiate athletics, television, and entertainment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Led athletic renaissance at Howard University since 2015
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Established innovative partnerships and media strategies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Senior network executive with documented success in sports, TV and entertainment
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Athletic Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Strategic management of collegiate athletics
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Media & Entertainment</h3>
                      <p className="text-sm text-muted-foreground">
                        Sports television and entertainment strategy
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Strategic Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        Building alliances and expanding visibility
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Organizational Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Transformative vision and team development
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

export default KeryDavis;
