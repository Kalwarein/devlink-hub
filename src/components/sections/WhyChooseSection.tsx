import { Code2, Shield, Zap, HeartHandshake, Lightbulb, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: Code2,
    title: "Experienced Developers",
    description: "Our team brings years of expertise across diverse technologies and industries.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "We build architecture that grows with your business, from startup to enterprise.",
  },
  {
    icon: Shield,
    title: "Clean Code & Best Practices",
    description: "Maintainable, well-documented code following industry standards and conventions.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Continuous maintenance and support included.",
  },
  {
    icon: Lightbulb,
    title: "Business-Focused Mindset",
    description: "We understand your goals and align technology decisions with business outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Partnership",
    description: "Clear communication, honest timelines, and no surprises throughout the project.",
  },
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-sidebar text-sidebar-foreground" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why DevLink
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-sidebar-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Why Businesses Choose DevLink
            </motion.h2>
            <motion.p 
              className="text-lg text-sidebar-foreground/70 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're not just developers – we're partners in your digital transformation. 
              Our approach combines technical excellence with a deep understanding of 
              business challenges to deliver solutions that truly make an impact.
            </motion.p>

            <motion.div 
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "5+", label: "Years Experience" },
                { value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-sidebar-foreground/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="bg-sidebar-accent rounded-xl p-5 hover:bg-sidebar-accent/80 transition-colors cursor-pointer"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <reason.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-sidebar-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-sidebar-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
