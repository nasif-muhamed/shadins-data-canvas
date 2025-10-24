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
    <section id="experience" className="py-20 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-hero"></div>

            <Card className="bg-gradient-card border border-primary/20 p-8 hover:shadow-glow transition-all duration-500 animate-fade-in relative hover:scale-105">
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                <div className="w-4 h-4 rounded-full bg-gradient-hero shadow-glow"></div>
              </div>

              <div className="md:ml-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground">Data Analyst</h3>
                      <p className="text-lg text-primary font-semibold">Bridgeon Solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">April 2025 - Present</span>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <p className="text-foreground font-semibold mb-4">Key Achievements:</p>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3 group">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      <p className="text-foreground/90 leading-relaxed group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: achievement }} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Technologies used:</span> Python, SQL, 
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
