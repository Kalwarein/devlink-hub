import { Link } from "react-router-dom";
import { MapPin, Globe, Heart, Award, ArrowRight, Shield, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroTeam from "@/assets/hero-team.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Subtle blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 -z-10"
        style={{ background: "radial-gradient(circle, hsl(217 91% 55%), transparent 70%)" }} />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={heroTeam}
                alt="DevLink team in Sierra Leone"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            {/* Accent badge */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:right-8 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6 border border-border/50">
              About DevLink
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Sierra Leone's First & Only{" "}
              <span className="gradient-text">Software Agency</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              DevLink was founded with a bold vision — to put Sierra Leone on the global tech map. 
              We are the <strong className="text-foreground">first and only professional software agency</strong> in 
              Sierra Leone, building world-class digital products for businesses across the country and beyond.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From Freetown to Bo, Kenema to Makeni — wherever your business is in Sierra Leone, 
              we bring enterprise-grade technology to your doorstep. Our team of skilled developers, 
              designers, and strategists work relentlessly to transform your ideas into powerful digital solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: MapPin, label: "Based in Freetown, SL" },
                { icon: Globe, label: "Serving All of Sierra Leone" },
                { icon: Shield, label: "Secure & Reliable" },
                { icon: Zap, label: "Fast Delivery" },
                { icon: Heart, label: "Community-Driven" },
                { icon: Award, label: "Quality Guaranteed" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
