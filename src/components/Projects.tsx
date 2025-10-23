import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Property Management Analysis",
      tool: "Power BI",
      description: "Comprehensive BI dashboard analyzing multi-national property management operations. Tracked financial performance, sales channels, and client demographics across global markets to drive data-driven strategic planning.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/Property-management-analysis-power-bi-/blob/main/README.md"
    },
    {
      title: "Healthcare Analysis",
      tool: "Power BI",
      description: "Hospital performance dashboard providing insights into patient demographics, treatment effectiveness, and resource utilization. Analyzed emergency visits, discharge rates, and revenue metrics across departments.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/Healthcare-Analysis-power-bi-/blob/main/README.md"
    },
    {
      title: "Saudi Vision 2030 Analysis",
      tool: "Tableau",
      description: "Interactive dashboard monitoring 15+ national Vision 2030 initiatives. Provided real-time visibility into project status, spending trends, and risk factors to enable data-driven governance and strategic alignment.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/tableau-project/blob/main/README.md"
    },
    {
      title: "HR Attrition Analysis",
      tool: "Excel",
      description: "Dynamic Excel dashboard analyzing employee turnover across job roles, departments, and demographics. Identified key attrition drivers and provided actionable insights for improving retention and workforce stability.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/Hr-Attrition-Analysis-excel-dashboard-/blob/main/README.md"
    },
    {
      title: "E-commerce Sales Analysis",
      tool: "SQL",
      description: "Complete data pipeline transforming <b>30K+</b> e-commerce records into a normalized 3NF database. Performed advanced analytical queries revealing top products, customer behavior patterns, and marketing campaign performance.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/SQL-PROJECT/blob/main/README.md"
    },
    {
      title: "Airbnb Analysis",
      tool: "Python (EDA)",
      description: "Exploratory data analysis of 20,765 New York Airbnb listings using Pandas, Numpy, Matplotlib, and Seaborn. Uncovered pricing trends, room type distribution, and neighborhood patterns to provide insights for guests and hosts.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/Airbnb-analysis-Python-EDA-/blob/main/README.md"
    },
    {
      title: "Medical Insurance Prediction",
      tool: "Python (ML)",
      description: "End-to-end machine learning project predicting insurance premiums based on demographics and health factors. Built and compared regression models, achieving high accuracy through feature engineering and model optimization.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/Medical-insurance-prediction-PYTHON-/blob/main/README.md"
    },
    {
      title: "Web Scraping Project",
      tool: "Python (BeautifulSoup)",
      description: "Market intelligence pipeline scraping Flipkart mobile data across 10 pages. Performed ETL, data cleaning, and visualization to analyze pricing trends, customer ratings, and competitive positioning in the e-commerce sector.",
      image: "/placeholder.svg",
      link: "https://github.com/Shaadink/web-scrapping-project-using-python/blob/main/README.md"
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
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="border-0 shadow-card hover:shadow-glow transition-all group overflow-hidden h-full">
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
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p 
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
