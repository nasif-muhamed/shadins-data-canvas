import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/40 rounded-full blur-3xl animate-float" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl md:text-9xl font-display font-bold bg-gradient-accent bg-clip-text text-transparent">
              Contact
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-foreground/80 mb-8 font-medium">
              Feel free to contact me for any question
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:shadink.work@gmail.com"
                className="flex items-center gap-4 text-lg group transition-all duration-300 hover:translate-x-2"
              >
                <div className="p-3 rounded-full bg-gradient-hero group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors font-medium">shadink.work@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/shadin-karangadan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg group transition-all duration-300 hover:translate-x-2"
              >
                <div className="p-3 rounded-full bg-gradient-hero group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-background" />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors font-medium">in/shadin-karangadan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
