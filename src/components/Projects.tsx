import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Saudi Vision 2030 Project Progress Analysis",
      tool: "Tableau",
      description: "Monitored 15+ national projects across sectors; visualized <b>66%</b> on-track progress. Highlighted budget utilization and sector-level risk areas.",
      image: "/placeholder.svg"
    },
    {
      title: "Healthcare Provider Billing & Cost Analysis",
      tool: "Power BI",
      description: "Modeled patient billing data and built financial dashboards identifying cost drivers. Found <b>50%</b> out-of-pocket payments and trends by department.",
      image: "/placeholder.svg"
    },
    {
      title: "E-commerce Customer Sales Analysis",
      tool: "SQL + Dashboard",
      description: "Cleaned <b>30K+</b> sales records; revealed top-performing categories and revenue insights. Supported marketing spend optimization through campaign analysis.",
      image: "/placeholder.svg"
    },
    {
      title: "HR Attrition Analysis",
      tool: "Excel",
      description: "Identified high-risk age group and major attrition causes like salary stagnation. Delivered actionable retention insights via an interactive Excel dashboard.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-shadow group overflow-hidden">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-primary">{project.tool}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
