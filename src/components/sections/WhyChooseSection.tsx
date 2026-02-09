import { Code2, Shield, Zap, HeartHandshake, Lightbulb, Headphones, Target, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: Code2,
    title: "Expert Developers",
    description: "Skilled engineers with deep expertise in React, Flutter, Node.js, and more — delivering production-grade code.",
  },
  {
    icon: Target,
    title: "Sierra Leone Focused",
    description: "We understand the local market, challenges, and opportunities like no one else. Built here, for here.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "We move quickly. Most projects launch within 2–8 weeks depending on complexity.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security, clean code practices, and reliable hosting for peace of mind.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We don't disappear after launch. Ongoing maintenance and support is part of every plan.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. Clear pricing from $50 to $690 to fit every budget.",
  },
  {
    icon: Lightbulb,
    title: "Business-First Approach",
    description: "We don't just write code — we align every decision with your business goals and growth.",
  },
  {
    icon: Clock,
    title: "Long-Term Partnership",
    description: "From MVP to scale-up, we grow with you. Most clients stay with us for years.",
  },
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-sidebar text-sidebar-foreground" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            Why DevLink
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Why Businesses Choose{" "}
            <span className="text-primary">DevLink</span>
          </h2>
          <p className="text-lg text-sidebar-foreground/70 max-w-2xl mx-auto leading-relaxed">
            We're Sierra Leone's only professional software agency — and we bring 
            world-class quality to every project we touch.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-sidebar-accent rounded-2xl p-6 hover:bg-sidebar-accent/80 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.15 + index * 0.08 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sidebar-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-sidebar-foreground/70 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-sidebar-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "5+", label: "Years Experience" },
            { value: "200+", label: "Projects Completed" },
            { value: "6+", label: "Cities Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-sidebar-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
