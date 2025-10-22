import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Services", href: "services" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold text-primary">Shadin K</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
