import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BarChart, TrendingUp, Users, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Saudi Vision 2030 Project Progress Analysis",
      description: "Monitored 15+ national projects across sectors; visualized on-track progress. Highlighted budget utilization and sector-level risk areas.",
      icon: TrendingUp,
      tools: ["Tableau", "Data Visualization", "KPI Tracking"],
      insights: "<b>66%</b> projects on track | Budget efficiency analysis",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Healthcare Provider Billing & Cost Analysis",
      description: "Modeled patient billing data and built financial dashboards identifying cost drivers. Revealed payment trends by department.",
      icon: BarChart,
      tools: ["Power BI", "Financial Modeling", "SQL"],
      insights: "<b>50%</b> out-of-pocket payments | Department cost trends",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "E-commerce Customer Sales Analysis",
      description: "Cleaned sales records revealing top-performing categories and revenue insights. Supported marketing spend optimization through campaign analysis.",
      icon: ShoppingCart,
      tools: ["SQL", "Python", "Dashboard Design"],
      insights: "<b>30K+</b> records analyzed | Revenue optimization",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "HR Attrition Analysis",
      description: "Identified high-risk age group and major attrition causes like salary stagnation. Delivered actionable retention insights via interactive dashboard.",
      icon: Users,
      tools: ["Excel", "Statistical Analysis", "HR Analytics"],
      insights: "Retention strategies | <b>Interactive</b> dashboard",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world data analysis projects delivering measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-primary/20 overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-muted/30 rounded-lg p-3 mb-4 border border-primary/10">
                  <p className="text-sm font-semibold text-primary" dangerouslySetInnerHTML={{ __html: project.insights }} />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <Badge 
                      key={tool}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group-hover:gap-3 duration-300">
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
