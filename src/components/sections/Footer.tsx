import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import devlinkLogo from "@/assets/devlink-logo.jpg";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const serviceLinks = [
  { title: "Website Development", href: "/services/website-development" },
  { title: "Mobile App Development", href: "/services/mobile-app-development" },
  { title: "Custom Software", href: "/services/custom-software-solutions" },
  { title: "UI/UX Design", href: "/services/ui-ux-design" },
  { title: "Maintenance & Support", href: "/services/maintenance-support" },
];

const cityLinks = [
  { title: "Freetown", href: "/cities/freetown" },
  { title: "Bo", href: "/cities/bo" },
  { title: "Kenema", href: "/cities/kenema" },
  { title: "Makeni", href: "/cities/makeni" },
  { title: "Koidu", href: "/cities/koidu" },
  { title: "Port Loko", href: "/cities/port-loko" },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-sidebar text-sidebar-foreground pt-20 pb-8" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={devlinkLogo} alt="DevLink" className="w-10 h-10 rounded-xl object-cover" />
              <span className="text-xl font-bold">DevLink</span>
            </Link>
            <p className="text-sidebar-foreground/70 mb-6 max-w-sm leading-relaxed">
              Sierra Leone's first and only professional software agency. 
              Building world-class websites, apps, and software for businesses 
              that dare to grow. You can't find us anywhere else.
            </p>
            <div className="space-y-3 text-sm text-sidebar-foreground/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Freetown, Sierra Leone 🇸🇱</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hello@devlink.sl" className="hover:text-primary transition-colors">
                  hello@devlink.sl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+23276123456" className="hover:text-primary transition-colors">
                  +232 76 123 456
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.title}>
                  <Link to={service.href} className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold mb-4">Cities We Serve</h4>
            <ul className="space-y-3">
              {cityLinks.map((city) => (
                <li key={city.title}>
                  <Link to={city.href} className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">
                    {city.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-sidebar-border pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-sidebar-foreground/60">
              © {new Date().getFullYear()} DevLink. All rights reserved. Made with ❤️ in Sierra Leone.
            </div>

            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-sidebar-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-sidebar-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-sidebar-accent flex items-center justify-center text-sidebar-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
