import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Let's collaborate to turn your data into decisions.
        </p>
        
        <Card className="border-0 shadow-card mb-12">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input placeholder="Your Name" className="h-12" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="h-12" />
                </div>
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={6} />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/shadin-karangadan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Shaadink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="mailto:shadink.work@gmail.com"
            className="p-4 rounded-full bg-card hover:bg-accent transition-colors shadow-card"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
