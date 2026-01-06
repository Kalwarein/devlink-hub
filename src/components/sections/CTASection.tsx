import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            Let's Build Together
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Build Something Powerful Together
          </motion.h2>

          <motion.p 
            className="text-xl text-primary-foreground/80 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your ideas into reality? Get in touch with our team 
            to discuss your project and receive a free consultation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/start-project"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8 mt-12 text-primary-foreground/60 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              "Free Consultation",
              "No Hidden Fees",
              "Response in 24 Hours"
            ].map((badge, index) => (
              <motion.div 
                key={badge}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
