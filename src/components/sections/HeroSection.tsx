import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Users, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroTeam from "@/assets/hero-team.jpg";

const typewriterWords = [
  "Websites",
  "Mobile Apps",
  "Custom Software",
  "Digital Brands",
];

const FloatingBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    {/* Large purple/blue blob */}
    <motion.div
      className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-20"
      style={{ background: "radial-gradient(circle, hsl(260 80% 65%), transparent 70%)" }}
      animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Green blob */}
    <motion.div
      className="absolute top-1/3 -right-10 w-[300px] h-[300px] rounded-full opacity-15"
      style={{ background: "radial-gradient(circle, hsl(150 70% 50%), transparent 70%)" }}
      animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    {/* Pink/orange blob */}
    <motion.div
      className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
      style={{ background: "radial-gradient(circle, hsl(340 80% 60%), transparent 70%)" }}
      animate={{ x: [0, 20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    {/* Blue accent blob */}
    <motion.div
      className="absolute top-20 left-1/4 w-[200px] h-[200px] rounded-full opacity-10"
      style={{ background: "radial-gradient(circle, hsl(217 91% 55%), transparent 70%)" }}
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Small floating dots */}
    <motion.div
      className="absolute top-40 right-1/3 w-3 h-3 rounded-full bg-primary/40"
      animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-green-400/50"
      animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
    />
    <motion.div
      className="absolute top-1/2 right-20 w-4 h-4 rounded-full bg-purple-400/30"
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
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
      <FloatingBlobs />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <MapPin className="w-4 h-4 text-primary" />
              Sierra Leone's #1 Software Agency
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">We Build Stunning</span>
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
              Born in <strong className="text-foreground">Sierra Leone</strong>, built for the world. 
              DevLink is the only agency of its kind in the country — delivering world-class 
              websites, apps, and software to businesses that dare to grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/pricing"
                className="btn-primary inline-flex items-center justify-center gap-2 group text-base"
              >
                View Our Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
              >
                Explore Our Work
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap gap-6 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: CheckCircle, text: "100% Sierra Leonean" },
                { icon: Star, text: "Trusted by 50+ Businesses" },
                { icon: Users, text: "Expert Local Team" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — Hero Image with floating cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border/30">
              <img
                src={heroTeam}
                alt="DevLink team building software solutions in Freetown, Sierra Leone"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>

            {/* Floating card — project count */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-border/50 backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">200+</p>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — rating */}
            <motion.div
              className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-lg border border-border/50 backdrop-blur-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600 fill-yellow-500" />
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9/5</p>
                  <p className="text-xs text-muted-foreground">Client Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "6+", label: "Cities in Sierra Leone" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
