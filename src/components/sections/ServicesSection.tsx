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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end digital solutions to transform your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-service group"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
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
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
