const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Shadin K</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
