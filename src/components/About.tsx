import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Data Analyst with expertise in transforming raw data into meaningful 
              insights that drive business decisions. With a strong foundation in statistics and 
              hands-on experience in Python, SQL, and modern BI tools, I specialize in building 
              interactive dashboards and applying machine learning techniques to solve complex 
              business challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical proficiency with business acumen, ensuring that data 
              analysis translates into actionable strategies. I excel at identifying trends, 
              visualizing large datasets, and communicating insights effectively to stakeholders.
            </p>

            <div className="bg-card p-6 rounded-lg border border-primary/20">
              <p className="text-primary font-semibold italic text-lg">
                "I believe data tells stories — my job is to translate them into business impact."
              </p>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-in-up">
            <Card className="bg-card border-primary/20 p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">B.Sc. (Honours) in Statistics</span>
                  </p>
                  <p className="text-sm text-muted-foreground">Class of 2024</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-primary/20 p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Data Analyst</span> at Bridgeon Solutions
                  </p>
                  <p className="text-sm text-muted-foreground">April 2025 - Present</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-primary/20 p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expertise</h3>
                  <p className="text-muted-foreground">
                    Machine Learning, Statistical Analysis, Business Intelligence, 
                    Data Storytelling & Visualization
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
