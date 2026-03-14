import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/placements", label: "Placements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-card/95 backdrop-blur border-b border-border"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-primary leading-tight group-hover:text-primary/80 transition-colors">
              Shreya
            </span>
            <span className="text-[10px] font-display font-medium text-secondary tracking-wider uppercase leading-none">
              Institute
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative px-3 py-2 rounded-md text-sm font-medium transition-colors group"
            >
              <span
                className={
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground/70 group-hover:text-primary"
                }
              >
                {link.label}
              </span>
              {location.pathname === link.to && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full gradient-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="ml-3 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-all">
              <Phone className="w-4 h-4 mr-1" /> Enquire Now
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav with animation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3.5 text-sm font-medium transition-colors border-l-2 ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/5 border-primary"
                      : "text-foreground/70 hover:text-primary border-transparent hover:border-primary/30"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="px-6 py-4">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold shadow-md">
                  <Phone className="w-4 h-4 mr-1" /> Enquire Now
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
