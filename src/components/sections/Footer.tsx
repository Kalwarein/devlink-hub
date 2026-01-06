import { Link } from "react-router-dom";
import { Code2, MapPin, Mail, Phone, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const services = [
  { title: "Web Development", href: "/services/website-development" },
  { title: "Mobile App Development", href: "/services/mobile-app-development" },
  { title: "Custom Software", href: "/services/custom-software-solutions" },
  { title: "UI/UX Design", href: "/services/ui-ux-design" },
  { title: "Maintenance & Support", href: "/services/maintenance-support" },
];

const cities = [
  { title: "Freetown", href: "/cities/freetown" },
  { title: "London", href: "/cities/london" },
  { title: "New York", href: "/cities/new-york" },
  { title: "Lagos", href: "/cities/lagos" },
  { title: "Dubai", href: "/cities/dubai" },
  { title: "Toronto", href: "/cities/toronto" },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-sidebar text-sidebar-foreground pt-20 pb-8" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-bold">DevLink</span>
            </Link>
            <p className="text-sidebar-foreground/70 mb-6 max-w-sm leading-relaxed">
              Building digital products that scale. We help businesses transform 
              their ideas into powerful web and mobile solutions.
            </p>
            <div className="space-y-3 text-sm text-sidebar-foreground/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Tech Street, Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@devlink.io" className="hover:text-primary transition-colors">
                  hello@devlink.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+23276123456" className="hover:text-primary transition-colors">
                  +232 76 123 456
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={service.href}
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cities */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Cities We Serve</h4>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.title}>
                  <Link
                    to={city.href}
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {city.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-sidebar-border pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-sidebar-foreground/60">
              © {new Date().getFullYear()} DevLink. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-sidebar-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-sidebar-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
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
