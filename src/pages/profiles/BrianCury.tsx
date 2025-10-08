import { Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BrianCury = () => {
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
                  Brian Cury
                </h1>
                <p className="text-2xl text-accent font-medium mb-1">Founder & CEO</p>
                <p className="text-lg text-muted-foreground">EarthCam • Strategic Advisors</p>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Biography</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Brian Cury is the visionary Founder and CEO of EarthCam, the global leader in construction 
                      monitoring, jobsite camera technology, and visual intelligence solutions. Under his leadership, 
                      EarthCam has revolutionized how construction projects are documented, monitored, and managed, 
                      pioneering the use of AI-powered analytics to transform raw visual data into actionable business 
                      intelligence.
                    </p>
                    <p>
                      What began as a mission to create beautiful construction photos has evolved into a comprehensive 
                      platform that extracts critical information from visual data. Brian has led EarthCam's transformation 
                      from a camera technology provider to an AI-powered analytics platform that automatically identifies 
                      materials, tracks installations, monitors safety compliance, and provides real-time project insights. 
                      EarthCam's technology now integrates seamlessly with major construction management platforms like 
                      Procore and Autodesk, enabling automated delivery logs and material tracking.
                    </p>
                    <p>
                      Brian's innovation extends beyond traditional construction monitoring. EarthCam has developed 
                      sophisticated AI capabilities including Material Analysis that can identify 35+ different materials, 
                      track their arrival and installation, and automatically sync data with project management systems. 
                      The company has also introduced jobsite air quality analytics and advanced safety monitoring 
                      features that help construction teams maintain compliance and prevent incidents.
                    </p>
                    <p>
                      As a Strategic Advisor to StorageBlue, Brian brings cutting-edge expertise in construction 
                      technology, visual intelligence, and AI-powered project management. His insights help the company 
                      leverage the latest monitoring and analytics technologies to optimize construction timelines, 
                      improve quality control, enhance safety protocols, and maximize operational efficiency across 
                      development projects.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Career Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Founder and CEO of EarthCam, global leader in construction monitoring
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Pioneer in AI-powered visual analytics for construction projects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Developer of Material Analysis technology identifying 35+ materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Integration partnerships with Procore and Autodesk platforms
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Innovator in jobsite safety monitoring and air quality analytics
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Construction Technology</h3>
                      <p className="text-sm text-muted-foreground">
                        Jobsite monitoring and camera systems
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">AI & Visual Analytics</h3>
                      <p className="text-sm text-muted-foreground">
                        AI-powered material tracking and insights
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Project Management Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Platform integration and workflow automation
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Safety & Compliance</h3>
                      <p className="text-sm text-muted-foreground">
                        Safety monitoring and environmental analytics
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

export default BrianCury;
