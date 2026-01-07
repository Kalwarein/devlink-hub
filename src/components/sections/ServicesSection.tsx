import { Link } from "react-router-dom";
import { Globe, Smartphone, Settings, Rocket, Layers, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "website-development",
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and SEO.",
    features: ["React & Next.js", "E-commerce", "CMS Integration"],
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
  },
  {
    id: "custom-software-solutions",
    icon: Settings,
    title: "Business Software",
    description: "Custom enterprise solutions tailored to streamline your business operations and boost productivity.",
    features: ["CRM Systems", "ERP Solutions", "Automation"],
  },
  {
    id: "startup-mvps",
    icon: Rocket,
    title: "Startup MVPs",
    description: "Rapid prototyping and MVP development to validate your ideas and get to market quickly.",
    features: ["Fast Delivery", "Scalable Architecture", "Cost-Effective"],
  },
  {
    id: "api-integrations",
    icon: Layers,
    title: "API & Integrations",
    description: "Seamless third-party integrations and custom API development to connect your systems.",
    features: ["REST APIs", "GraphQL", "Payment Gateways"],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to delight users and drive conversions.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-28 section-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6 border border-border/50">
            What We Do
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end digital solutions to transform your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="card-service group"
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <service.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-500" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center text-primary font-medium group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}