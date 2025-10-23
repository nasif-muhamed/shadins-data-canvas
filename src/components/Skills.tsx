import { Card, CardContent } from "@/components/ui/card";
import { Eraser, Database, BarChart3, LineChart, Palette, Zap } from "lucide-react";

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
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces while enhancing user experience through research-driven design solutions."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Enhancing efficiency by automating data processes and workflows, reducing manual effort and ensuring consistent results."
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-foreground">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-background">
          What I Can Do
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-shadow bg-foreground">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-background/10">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-background">{skill.title}</h3>
                  <p className="text-background/80 leading-relaxed">
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
