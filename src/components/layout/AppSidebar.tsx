import { useState } from "react";
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
  Menu,
  X,
  Code2,
  Smartphone,
  Settings,
  Palette,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { title: "Website Development", icon: Globe, href: "#services" },
  { title: "Mobile App Development", icon: Smartphone, href: "#services" },
  { title: "Custom Software Solutions", icon: Settings, href: "#services" },
  { title: "UI/UX Design", icon: Palette, href: "#services" },
  { title: "Maintenance & Support", icon: Wrench, href: "#services" },
];

const mainNavItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "About DevLink", icon: Users, href: "#about" },
  { title: "Services", icon: Briefcase, href: "#services", hasSubmenu: true },
  { title: "Portfolio", icon: Image, href: "#portfolio" },
  { title: "Cities We Serve", icon: MapPin, href: "#cities" },
  { title: "Blog & Insights", icon: BookOpen, href: "#blog" },
  { title: "Careers", icon: UserPlus, href: "#careers" },
  { title: "Contact", icon: Mail, href: "#contact" },
];

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AppSidebar({ isOpen, onToggle }: AppSidebarProps) {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-sidebar text-sidebar-foreground z-50 transition-all duration-300 ease-in-out flex flex-col",
          isOpen ? "w-72 translate-x-0" : "w-72 -translate-x-full lg:w-20 lg:translate-x-0"
        )}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className={cn("transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 lg:hidden")}>
              <h1 className="text-xl font-bold text-sidebar-foreground">DevLink</h1>
              <p className="text-xs text-sidebar-foreground/60">Building Digital Products</p>
            </div>
          </div>
          {isOpen && (
            <p className="mt-4 text-sm text-sidebar-foreground/70 leading-relaxed">
              Building Digital Products That Scale
            </p>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {mainNavItems.map((item) => (
              <li key={item.title}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200",
                        servicesOpen && "bg-sidebar-accent text-sidebar-foreground"
                      )}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {isOpen && (
                        <>
                          <span className="flex-1 text-left text-sm font-medium">{item.title}</span>
                          {servicesOpen ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </>
                      )}
                    </button>
                    {isOpen && servicesOpen && (
                      <ul className="mt-1 ml-4 space-y-1 animate-fade-in">
                        {services.map((service) => (
                          <li key={service.title}>
                            <a
                              href={service.href}
                              onClick={() => handleNavClick(service.href)}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 text-sm"
                            >
                              <service.icon className="w-4 h-4" />
                              <span>{service.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200",
                      location.pathname === item.href && "bg-sidebar-accent text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {isOpen && <span className="text-sm font-medium">{item.title}</span>}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        {isOpen && (
          <div className="p-4 border-t border-sidebar-border">
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="block w-full btn-primary text-center rounded-xl"
            >
              Start a Project
            </a>
          </div>
        )}
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-sidebar text-sidebar-foreground shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Toggle Button */}
      <button
        onClick={onToggle}
        className={cn(
          "hidden lg:flex fixed top-4 z-50 p-2 rounded-lg bg-card text-foreground shadow-card items-center justify-center transition-all duration-300",
          isOpen ? "left-[304px]" : "left-24"
        )}
      >
        {isOpen ? <ChevronRight className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </>
  );
}
