import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-secondary/40 rounded-full blur-3xl animate-float" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-7xl font-display font-bold text-center mb-16 bg-gradient-accent bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-full bg-gradient-hero">
                  <GraduationCap className="w-8 h-8 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                    BSc (Honours) in Statistics
                  </h3>
                  <p className="text-lg text-primary mb-2 font-medium">
                    Hindu College, University of Delhi
                  </p>
                  <p className="text-muted-foreground">
                    2021 - 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
