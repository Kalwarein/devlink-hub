import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Websites", "Mobile Apps", "Dashboards", "Systems"];

const projects = [
  {
    title: "FinTrack Dashboard",
    category: "Dashboards",
    description: "Real-time financial analytics platform with advanced charting",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "ShopEase E-commerce",
    category: "Websites",
    description: "Full-featured online marketplace with 10k+ products",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "HealthHub Mobile",
    category: "Mobile Apps",
    description: "Healthcare appointment booking and telemedicine app",
    tech: ["React Native", "Firebase", "WebRTC"],
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "LogiFlow ERP",
    category: "Systems",
    description: "Enterprise resource planning for logistics companies",
    tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "TravelMate App",
    category: "Mobile Apps",
    description: "AI-powered travel planning and booking companion",
    tech: ["Flutter", "OpenAI", "Maps API", "Supabase"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "NewsPortal CMS",
    category: "Websites",
    description: "High-traffic news platform with custom CMS",
    tech: ["Next.js", "Sanity", "Vercel", "Cloudflare"],
    color: "from-violet-500 to-purple-600",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore our portfolio of successful digital products we've built for clients worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className={cn(
                "h-48 bg-gradient-to-br flex items-center justify-center",
                project.color
              )}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
