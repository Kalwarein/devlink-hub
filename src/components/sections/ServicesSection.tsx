import { Link } from "react-router-dom";
import { Globe, Smartphone, Settings, Rocket, Layers, Palette, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    description: "From simple landing pages to complex web apps — responsive, SEO-ready, and lightning fast.",
    features: ["React & Next.js", "E-commerce", "CMS Integration"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Android and iOS apps your users will love. Built with React Native or Flutter for maximum reach.",
    features: ["React Native", "Flutter", "Cross-Platform"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "custom-software-solutions",
    icon: Settings,
    title: "Business Software",
    description: "Custom ERP, CRM, and automation tools built to streamline your operations and save money.",
    features: ["CRM Systems", "ERP Solutions", "Automation"],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "startup-mvps",
    icon: Rocket,
    title: "Startup MVPs",
    description: "Validate your idea fast with a polished MVP. We build, you launch, investors notice.",
    features: ["Fast Delivery", "Scalable", "Cost-Effective"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "api-integrations",
    icon: Layers,
    title: "API & Integrations",
    description: "Connect your systems with seamless APIs and third-party integrations that just work.",
    features: ["REST APIs", "GraphQL", "Payment Gateways"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces designed to convert. Beautiful, intuitive, and backed by research.",
    features: ["User Research", "Prototyping", "Design Systems"],
    color: "from-rose-500 to-pink-600",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-28 section-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6 border border-border/50">
            What We Build
          </span>
          <h2 className="section-title">
            Everything Your Business Needs,{" "}
            <span className="gradient-text">Built Locally</span>
          </h2>
          <p className="section-subtitle mx-auto">
            End-to-end digital solutions from Sierra Leone's premier software team. 
            Plans start at just $50.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-service group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span key={feature} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border/50">
                    {feature}
                  </span>
                ))}
              </div>

              <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary font-medium group/link">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pricing CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link to="/pricing" className="btn-primary inline-flex items-center gap-2">
            See All Plans & Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
