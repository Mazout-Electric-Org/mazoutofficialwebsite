import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div>
            <h4 className="text-foreground text-sm font-medium mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Vision", href: "/vision" },
                { label: "Careers", href: "#" },
                { label: "Blogs", href: "#blogs" },
                { label: "Gallery", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground text-sm font-medium mb-5">Product</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Zooty Platform", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Dashboard", href: "#" },
                { label: "Buy Now", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground text-sm font-medium mb-5">Applications</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Zooty for Logistics", href: "/logistics" },
                { label: "Zooty for Patrolling", href: "/patrolling" },
                { label: "Zooty as Taxi", href: "/taxi" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground text-sm font-medium mb-5">Legal</h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Mazout Electric. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="mailto:info@mazoutelectric.com"
              className="text-primary text-sm hover:text-foreground transition-colors duration-300"
            >
              info@mazoutelectric.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
