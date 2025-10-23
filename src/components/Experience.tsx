import { Card } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Evaluated <b>30K+</b> e-commerce sales records, identifying top-performing products and optimizing revenue channels",
    "Designed healthcare dashboards revealing <b>57%</b> male patient visits, enabling targeted outreach strategies",
    "Assessed Saudi Vision 2030 portfolio showing <b>66%</b> of projects on track with budget efficiency insights",
    "Delivered HR attrition analysis identifying high-risk groups, providing actionable retention recommendations"
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-background mb-4">
            Work Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-background via-background/50 to-transparent"></div>

            <Card className="bg-foreground border-background/20 p-8 hover:shadow-glow transition-all duration-300 animate-fade-in relative">
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                <div className="w-4 h-4 rounded-full bg-background shadow-glow"></div>
              </div>

              <div className="md:ml-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-background">Data Analyst</h3>
                      <p className="text-lg text-background font-semibold">Bridgeon Solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-background/70">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">April 2025 - Present</span>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <p className="text-background/70 font-semibold mb-4">Key Achievements:</p>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3 group">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-background group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      <p className="text-background leading-relaxed group-hover:text-background/80 transition-colors" dangerouslySetInnerHTML={{ __html: achievement }} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-background/20">
                  <p className="text-sm text-background/70">
                    <span className="font-semibold text-background">Technologies used:</span> Python, SQL, 
                    Power BI, Tableau, Excel, Statistical Analysis, Machine Learning
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
