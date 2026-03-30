const footerLinks = {
  Company: ["About", "Careers", "Blog", "Gallery"],
  Product: ["Zooty Platform", "Documentation", "Dashboard", "Buy Now"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Connect: ["LinkedIn", "Twitter", "Instagram", "YouTube"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <span className="font-semibold tracking-tight">MAZOUT</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Redefining urban movement through software-defined micro-mobility.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold mb-4 tracking-wide">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line w-full mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Mazout Electric. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built for the future of mobility.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
