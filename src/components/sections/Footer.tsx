import { Code2, MapPin, Mail, Phone, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "UI/UX Design",
  "API Integration",
  "Maintenance & Support",
];

const cities = [
  "Freetown",
  "London",
  "New York",
  "Lagos",
  "Dubai",
  "Toronto",
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">DevLink</span>
            </div>
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold mb-4">Cities We Serve</h4>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city}>
                  <a
                    href="#cities"
                    className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sidebar-border pt-8">
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
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-sidebar-accent flex items-center justify-center text-sidebar-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
