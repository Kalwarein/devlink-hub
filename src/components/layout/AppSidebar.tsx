import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  Globe,
  Image,
  MapPin,
  BookOpen,
  UserPlus,
  Mail,
  ChevronDown,
  ChevronRight,
  X,
  Code2,
  Smartphone,
  Settings,
  Palette,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  { title: "Website Development", icon: Globe, href: "/services/website-development" },
  { title: "Mobile App Development", icon: Smartphone, href: "/services/mobile-app-development" },
  { title: "Custom Software Solutions", icon: Settings, href: "/services/custom-software-solutions" },
  { title: "UI/UX Design", icon: Palette, href: "/services/ui-ux-design" },
  { title: "Maintenance & Support", icon: Wrench, href: "/services/maintenance-support" },
];

const mainNavItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "About DevLink", icon: Users, href: "/about" },
  { title: "Services", icon: Briefcase, href: "/services", hasSubmenu: true },
  { title: "Portfolio", icon: Image, href: "/portfolio" },
  { title: "Cities We Serve", icon: MapPin, href: "/cities" },
  { title: "Blog & Insights", icon: BookOpen, href: "/blog" },
  { title: "Careers", icon: UserPlus, href: "/careers" },
  { title: "Contact", icon: Mail, href: "/contact" },
];

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(
    location.pathname.startsWith("/services")
  );

  // Close sidebar on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar - Right Side */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-sidebar text-sidebar-foreground z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3" onClick={onClose}>
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-sidebar-foreground">DevLink</h1>
                  <p className="text-xs text-sidebar-foreground/60">Building Digital Products</p>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-3">
                {mainNavItems.map((item, index) => (
                  <motion.li 
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200",
                            (servicesOpen || isActive("/services")) && "bg-sidebar-accent text-sidebar-foreground"
                          )}
                        >
                          <item.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="flex-1 text-left text-sm font-medium">{item.title}</span>
                          {servicesOpen ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden mt-1 ml-4 space-y-1"
                            >
                              <li>
                                <Link
                                  to="/services"
                                  onClick={onClose}
                                  className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 text-sm",
                                    location.pathname === "/services" && "bg-sidebar-accent text-sidebar-foreground"
                                  )}
                                >
                                  <Briefcase className="w-4 h-4" />
                                  <span>All Services</span>
                                </Link>
                              </li>
                              {services.map((service) => (
                                <li key={service.title}>
                                  <Link
                                    to={service.href}
                                    onClick={onClose}
                                    className={cn(
                                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 text-sm",
                                      location.pathname === service.href && "bg-sidebar-accent text-sidebar-foreground"
                                    )}
                                  >
                                    <service.icon className="w-4 h-4" />
                                    <span>{service.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200",
                          isActive(item.href) && "bg-sidebar-accent text-sidebar-foreground"
                        )}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="p-4 border-t border-sidebar-border">
              <Link
                to="/start-project"
                onClick={onClose}
                className="block w-full btn-primary text-center rounded-xl"
              >
                Start a Project
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
