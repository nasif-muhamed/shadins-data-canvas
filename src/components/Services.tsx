import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-0 shadow-card">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Data Analysis Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              I help businesses transform raw data into meaningful insights through analysis, visualization, and predictive modeling. From data cleaning to dashboard creation, I deliver clear, actionable results.
            </p>
            <Button size="lg" className="rounded-full px-8">
              Hire Me
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
