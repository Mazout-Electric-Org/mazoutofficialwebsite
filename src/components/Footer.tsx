import { useState } from 'react';
import { Linkedin, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Subscribed!", description: "You'll receive updates at " + email });
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <div>
            <h4 className="text-foreground font-medium mb-6 text-base">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Vision", href: "#", external: false },
                { label: "Careers", href: "https://wellfound.com/company/mazout-electric/jobs", external: true },
                { label: "Blogs", href: "#", external: false },
                { label: "Gallery", href: "#", external: false },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a href={href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {label}
                    {external && <ArrowUpRight size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-medium mb-6 text-base">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "Zooty for Logistics", href: "/logistics", external: false },
                { label: "Zooty for Patrolling", href: "/patrolling", external: false },
                { label: "Zooty as Taxi", href: "/taxi", external: false },
                { label: "Documentation", href: "https://github.com/Mazout-Electric/Documentation/blob/main/README.md", external: true },
                { label: "Dashboard", href: "https://dashboard.mazoutelectric.com/", external: true },
                { label: "Buy Now", href: "#", external: false },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a href={href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {label}
                    {external && <ArrowUpRight size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-medium mb-6 text-base">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-medium mb-6 text-base">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/mazout-electric/posts/?feedView=all" },
                { icon: Twitter, label: "Twitter", href: "https://x.com/ElectricMazout/" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/zootyev/" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@mazoutelectric2117" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="text-muted-foreground hover:text-foreground transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <form onSubmit={handleSubscribe} className="mt-6">
              <h4 className="text-foreground font-medium mb-3 text-base">Subscribe for Updates</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-9 text-sm"
                />
                <Button type="submit" size="sm" className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Mazout Electric. All rights reserved.
          </p>
          <a
            href="mailto:info@mazoutelectric.com"
            className="text-primary text-sm hover:text-foreground transition-colors duration-300"
          >
            info@mazoutelectric.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
