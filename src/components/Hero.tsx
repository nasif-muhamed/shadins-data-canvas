import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import DataNetwork from "./DataNetwork";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Data Network Animation */}
      <DataNetwork />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          Shadin k
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Data Analyst
        </p>
        <Button 
          variant="default" 
          size="lg"
          className="rounded-full px-8"
        >
          Resume
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
