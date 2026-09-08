import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, GraduationCap, BatteryCharging } from "lucide-react";
import { Link } from "react-router-dom";
import ContactDialog from "./ContactDialog";
import ComLogo1 from "@/assets/ComLogo1.png";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const productLinks = [
  {
    label: "Battery Manufacturing Autopilot",
    href: "/battery-manufacturing-autopilot",
    description: "Autonomous battery production line",
    icon: BatteryCharging,
  },
  {
    label: "SDV Training Platform",
    href: "/training-platform",
    description: "Hands-on robotics learning",
    icon: GraduationCap,
  },
];

const navLinks = [{ label: "Blogs", href: "/blogs" }];

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
          {navLinks.map((link, i) => (
            <Fragment key={link.label}>
              {link.href.startsWith("/") ? (
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
              )}
              {i === 0 && (
                <DropdownMenu key="products">
                  <DropdownMenuTrigger className="group flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm transition-colors duration-300 outline-none">
                    Solutions
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={16}
                    className="w-80 rounded-xl border border-border bg-popover/95 backdrop-blur-md p-2 shadow-xl"
                  >
                    {productLinks.map((product) => (
                      <DropdownMenuItem key={product.label} asChild className="rounded-none p-0 focus:bg-transparent">
                        <Link
                          to={product.href}
                          className="group/item flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground group-hover/item:text-primary group-hover/item:border-primary/40 transition-colors duration-200">
                            <product.icon size={16} />
                          </span>
                          <span className="flex flex-col gap-0.5">
                            <span className="text-foreground text-sm font-medium group-hover/item:text-primary transition-colors duration-200">
                              {product.label}
                            </span>
                            <span className="text-muted-foreground text-xs leading-snug">
                              {product.description}
                            </span>
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </Fragment>
          ))}
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
              {navLinks.map((link, i) => (
                <Fragment key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-muted-foreground hover:text-foreground text-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-muted-foreground hover:text-foreground text-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                  {i === 0 && (
                    <div className="flex flex-col gap-3 border-t border-border pt-4">
                      <span className="text-muted-foreground text-xs uppercase tracking-wider">
                        Solutions
                      </span>
                      <div className="flex flex-col gap-1 -mx-2">
                        {productLinks.map((product) => (
                          <Link
                            key={product.label}
                            to={product.href}
                            onClick={() => setMobileOpen(false)}
                            className="group/item flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-accent transition-colors"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground group-hover/item:text-primary group-hover/item:border-primary/40 transition-colors">
                              <product.icon size={16} />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-foreground text-base font-medium">
                                {product.label}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {product.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-b border-border pt-1" />
                    </div>
                  )}
                </Fragment>
              ))}
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
