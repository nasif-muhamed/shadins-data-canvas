import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/20 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold text-lg mb-1">Shadin K</p>
            <p className="text-sm text-muted-foreground">
              Data Analyst | Transforming Data into Insights
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="mailto:contact@shadink.com"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shadin K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
