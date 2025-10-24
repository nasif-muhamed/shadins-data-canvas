import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import DataNetwork from "./DataNetwork";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Data Network Animation */}
      <DataNetwork />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-6xl md:text-9xl font-display font-bold mb-6 tracking-tight bg-gradient-hero bg-clip-text text-transparent">
          Shadin K
        </h1>
        <p className="text-2xl md:text-4xl mb-12 text-foreground/90 font-medium">
          Data Analyst
        </p>
        <Button 
          variant="default" 
          size="lg"
          className="rounded-full px-12 py-7 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105"
          asChild
        >
          <a href="https://drive.google.com/file/d/1fHOojSHNG70lYBqFYl-s78fYMmaDNsq0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
