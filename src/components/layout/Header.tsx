import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import devlinkLogo from "@/assets/devlink-logo.jpg";

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsAtTop(currentScrollY < 10);
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isAtTop 
            ? "bg-transparent" 
            : "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <img 
                  src={devlinkLogo} 
                  alt="DevLink Logo" 
                  className="w-10 h-10 rounded-xl object-cover"
                />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  DevLink
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = item.href === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(item.href);
                
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.title}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Link
                to="/start-project"
                className="hidden sm:inline-flex btn-primary text-sm px-6 py-2.5"
              >
                Start a Project
              </Link>
              
              {/* Menu Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onMenuToggle}
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-foreground transition-all duration-300 border border-border/50 hover:border-primary/30"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}