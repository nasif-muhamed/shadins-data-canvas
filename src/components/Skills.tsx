import { Card, CardContent } from "@/components/ui/card";
import { Eraser, Database, BarChart3, LineChart, Brain, Lightbulb } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Eraser,
      title: "Data Cleaning",
      description: "Ensuring data accuracy and readiness by transforming raw data into clean and structured formats."
    },
    {
      icon: Database,
      title: "Data Modeling",
      description: "Developing and implementing data models to represent and analyze complex data structures and relationships."
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Applying statistical techniques and analytical methods to draw meaningful conclusions and inform decision-making."
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      description: "Designing and creating dynamic visualizations to present data insights in an accessible and impactful way."
    },
    {
      icon: Brain,
      title: "Predictive Modeling & ML",
      description: "Developing and validating machine learning models (Classification, Regression) using Python (Scikit-learn, XGBoost) to forecast outcomes, identify key drivers, and solve complex business problems like customer attrition or sales prediction."
    },
    {
      icon: Lightbulb,
      title: "Actionable Insights & Strategy",
      description: "Translating complex data analysis into clear, compelling narratives and actionable recommendations for stakeholders, driving data-driven policy monitoring (like your Saudi Vision 2030 project) and business strategies."
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-gradient-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-7xl font-display font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent">
          What I Can Do
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="border border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-hero group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
