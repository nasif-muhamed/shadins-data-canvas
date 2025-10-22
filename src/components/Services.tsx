import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, LineChart, Brain, FileBarChart, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Cleaning & Preparation",
      description: "Transform messy data into structured, analysis-ready datasets"
    },
    {
      icon: LineChart,
      title: "Dashboard Development",
      description: "Build interactive, visual dashboards in Power BI and Tableau"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Apply machine learning for forecasting and trend prediction"
    },
    {
      icon: FileBarChart,
      title: "Business Intelligence",
      description: "Deliver actionable insights to support strategic decisions"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Data Analysis Services
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I help businesses transform raw data into meaningful insights through analysis, 
            visualization, and predictive modeling. From data cleaning to dashboard creation, 
            I deliver clear, actionable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card border-primary/20 p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-accent p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-full h-full text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 p-8 lg:p-12 shadow-card animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Turn Your Data into Decisions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to unlock insights from your data. Whether you need dashboards, 
                predictive models, or comprehensive data analysis, I'm here to help drive your 
                business forward.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Custom dashboard solutions",
                  "In-depth statistical analysis",
                  "Machine learning implementation",
                  "Clear, actionable recommendations"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-6"
              >
                Get in Touch
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-lg blur-xl opacity-20"></div>
              <div className="relative bg-muted/30 rounded-lg p-8 border border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="text-2xl font-bold text-primary">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Data Records Analyzed</span>
                    <span className="text-2xl font-bold text-primary">30K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Dashboards Built</span>
                    <span className="text-2xl font-bold text-primary">20+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-primary">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;
