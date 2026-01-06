import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroMobile from "@/assets/hero-mobile.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 200+ Businesses Worldwide
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We Design & Build{" "}
              <span className="gradient-text">Websites, Apps & Software</span>{" "}
              for Modern Businesses
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              From concept to launch, we deliver scalable digital solutions that drive growth. 
              Fast development, clean code, and ongoing support – everything your business needs to succeed online.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Link to="/start-project" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "12+", label: "Cities Served" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Hero Image - Only visible on mobile/tablet */}
          <motion.div 
            className="lg:hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroMobile} 
                alt="DevLink SL - Building Websites, Apps & Software That Scale"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>

          {/* Desktop Visual - Code Window with Floating Cards */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Code Window */}
              <motion.div 
                className="bg-sidebar rounded-2xl p-6 shadow-2xl"
                initial={{ rotate: 2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-sm text-sidebar-foreground/90 space-y-2">
                  <p><span className="text-primary">const</span> devlink = {"{"}</p>
                  <p className="pl-4">mission: <span className="text-green-400">"Build products that scale"</span>,</p>
                  <p className="pl-4">services: [<span className="text-yellow-400">"Web"</span>, <span className="text-yellow-400">"Mobile"</span>, <span className="text-yellow-400">"Software"</span>],</p>
                  <p className="pl-4">quality: <span className="text-primary">Infinity</span>,</p>
                  <p>{"}"}</p>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-10 -right-10 bg-card rounded-xl p-4 shadow-card-hover"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Project Launched</p>
                    <p className="text-xs text-muted-foreground">E-commerce Platform</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-5 -left-10 bg-card rounded-xl p-4 shadow-card-hover"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">99.9% Uptime</p>
                    <p className="text-xs text-muted-foreground">All Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
