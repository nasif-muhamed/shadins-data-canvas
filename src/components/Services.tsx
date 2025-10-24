import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-gradient-subtle relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="border border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Data Analysis Services
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              I help businesses transform raw data into meaningful insights through analysis, visualization, and predictive modeling. From data cleaning to dashboard creation, I deliver clear, actionable results.
            </p>
            <Button size="lg" className="rounded-full px-12 py-6 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105">
              Hire Me
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
