import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary text-lg font-semibold">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Shadin K
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Data Analyst | Business Intelligence | Dashboard Expert
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Turning complex data into actionable business insights through advanced analytics, 
              machine learning, and interactive visualizations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-6"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="mailto:contact@shadink.com"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Shadin K - Data Analyst" 
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-card px-6 py-3 rounded-full shadow-card border border-primary/20">
                <p className="text-primary font-bold text-lg">8+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
