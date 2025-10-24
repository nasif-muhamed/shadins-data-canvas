import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    BSc (Honours) in Statistics
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">
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
