import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Websites", "Mobile Apps", "Dashboards", "Systems"];

const projects = [
  {
    id: "fintrack-dashboard",
    title: "FinTrack Dashboard",
    category: "Dashboards",
    description: "Real-time financial analytics platform with advanced charting",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "shopease-ecommerce",
    title: "ShopEase E-commerce",
    category: "Websites",
    description: "Full-featured online marketplace with 10k+ products",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "healthhub-mobile",
    title: "HealthHub Mobile",
    category: "Mobile Apps",
    description: "Healthcare appointment booking and telemedicine app",
    tech: ["React Native", "Firebase", "WebRTC"],
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "logiflow-erp",
    title: "LogiFlow ERP",
    category: "Systems",
    description: "Enterprise resource planning for logistics companies",
    tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "travelmate-app",
    title: "TravelMate App",
    category: "Mobile Apps",
    description: "AI-powered travel planning and booking companion",
    tech: ["Flutter", "OpenAI", "Maps API", "Supabase"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "newsportal-cms",
    title: "NewsPortal CMS",
    category: "Websites",
    description: "High-traffic news platform with custom CMS",
    tech: ["Next.js", "Sanity", "Vercel", "Cloudflare"],
    color: "from-violet-500 to-purple-600",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore our portfolio of successful digital products we've built for clients worldwide.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 block"
                >
                  {/* Project Image Placeholder */}
                  <motion.div 
                    className={cn(
                      "h-48 bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                      project.color
                    )}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-xs font-medium text-secondary-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
