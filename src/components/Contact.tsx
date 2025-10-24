import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold">
              Contact
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground mb-8">
              Feel free to contact me for any question
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:shadink.work@gmail.com"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>shadink.work@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/shadin-karangadan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>in/shadin-karangadan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
