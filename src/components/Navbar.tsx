import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import ContactDialog from "./ContactDialog";
import ComLogo1 from "@/assets/ComLogo1.png";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Blogs", href: "/blogs" },
];

import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" aria-label="Go to homepage">
          <img
            src={ComLogo1}
            alt="Mazout Logo"
            className="h-10 w-auto [.light_&]:invert"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            )
          )}
          <Button size="sm" variant="ghost" onClick={() => setContactOpen(true)} className="text-muted-foreground hover:text-foreground text-sm">Contact</Button>
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button asChild size="sm" className="bg-primary border border-input hover:text-primary-foreground opacity-100">
            <a href="https://dashboard.mazoutelectric.com/" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="text-foreground font-semibold"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground font-semibold"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-muted-foreground hover:text-foreground text-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-muted-foreground hover:text-foreground text-lg transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={() => { setContactOpen(true); setMobileOpen(false); }}
                className="text-muted-foreground hover:text-foreground text-lg transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="https://dashboard.mazoutelectric.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-primary text-lg transition-colors"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </nav>
  );
};

export default Navbar;
