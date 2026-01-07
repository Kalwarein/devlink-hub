import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroMobile from "@/assets/hero-mobile.png";

const typewriterWords = [
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "Scalable Systems",
];

// Tech icons as SVG components for floating effect
const TechIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* JavaScript */}
    <motion.div
      className="absolute top-20 right-16 w-14 h-14 bg-yellow-400/90 rounded-xl flex items-center justify-center shadow-lg"
      animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-xl font-bold text-yellow-900">JS</span>
    </motion.div>

    {/* Python */}
    <motion.div
      className="absolute top-40 right-8 w-12 h-12 bg-blue-500/90 rounded-xl flex items-center justify-center shadow-lg"
      animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <span className="text-lg font-bold text-primary-foreground">Py</span>
    </motion.div>

    {/* React */}
    <motion.div
      className="absolute top-32 right-40 w-16 h-16 bg-cyan-400/90 rounded-full flex items-center justify-center shadow-lg"
      animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <svg className="w-8 h-8 text-cyan-900" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    </motion.div>

    {/* TypeScript */}
    <motion.div
      className="absolute bottom-40 right-24 w-12 h-12 bg-blue-600/90 rounded-lg flex items-center justify-center shadow-lg"
      animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    >
      <span className="text-sm font-bold text-primary-foreground">TS</span>
    </motion.div>

    {/* Node */}
    <motion.div
      className="absolute bottom-28 right-48 w-14 h-14 bg-green-600/90 rounded-xl flex items-center justify-center shadow-lg"
      animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
    >
      <span className="text-xs font-bold text-primary-foreground">Node</span>
    </motion.div>

    {/* Abstract shapes */}
    <motion.div
      className="absolute top-60 right-4 w-3 h-3 bg-primary/60 rounded-full"
      animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-48 right-56 w-2 h-2 bg-primary/40 rounded-full"
      animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute bottom-52 right-12 w-4 h-4 bg-accent-foreground/30 rounded-full"
      animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    
    {/* Light paths / lines */}
    <motion.div
      className="absolute top-36 right-28 w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      animate={{ opacity: [0.2, 0.5, 0.2], scaleX: [0.8, 1.2, 0.8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-36 right-36 w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Trusted by 200+ Businesses Worldwide
            </motion.div>

            {/* Main headline with typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">Expert Solutions in</span>
                <br />
                <span className="gradient-text min-h-[1.2em] inline-block">
                  {displayText}
                  <motion.span 
                    className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              DevLink delivers scalable digital solutions that drive real business growth. 
              From concept to launch, we build software that performs.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/start-project" 
                className="btn-primary inline-flex items-center justify-center gap-2 group text-base"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/portfolio" 
                className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
              >
                <Play className="w-4 h-4" />
                View Portfolio
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-10 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "12+", label: "Cities Served" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
              <img 
                src={heroMobile} 
                alt="DevLink - Building Websites, Apps & Software That Scale"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>

          {/* Desktop Visual - Floating Tech Icons */}
          <motion.div 
            className="relative hidden lg:block h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <TechIcons />
            
            {/* Floating notification cards */}
            <motion.div 
              className="absolute top-8 right-8 bg-card rounded-2xl p-5 shadow-lg border border-border/50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Project Launched</p>
                  <p className="text-sm text-muted-foreground">E-commerce Platform</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-20 left-8 bg-card rounded-2xl p-5 shadow-lg border border-border/50"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">99.9% Uptime</p>
                  <p className="text-sm text-muted-foreground">All Projects</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}