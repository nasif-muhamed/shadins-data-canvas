const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shadin K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
