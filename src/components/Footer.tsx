import { useState } from 'react';
import { Linkedin, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          <div>
            <h4 className="text-foreground text-sm font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {["Vision", "Careers", "Blogs", "Gallery"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground text-sm font-medium mb-6">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "Zooty for Logistics", external: false },
                { label: "Zooty for Patrolling", external: false },
                { label: "Zooty as Taxi", external: false },
                { label: "Documentation", external: true },
                { label: "Dashboard", external: true },
                { label: "Buy Now", external: false },
              ].map(({ label, external }) => (
                <li key={label}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1">
                    {label}
                    {external && <ArrowUpRight size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground text-sm font-medium mb-6">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground text-sm font-medium mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
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
