import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { projects, categories } from "@/data/portfolio";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our <span className="gradient-text">Work</span></h1>
            <p className="text-xl text-muted-foreground">Explore our portfolio of successful digital products we've built for clients worldwide.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full text-sm font-medium transition-all", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-secondary")}>{category}</button>
            ))}
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <Link to={`/portfolio/${project.id}`} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all block">
                  <div className={cn("h-48 bg-gradient-to-br flex items-center justify-center", project.color)}>
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase">{project.category}</span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (<span key={tech} className="px-2 py-1 bg-secondary text-xs rounded">{tech}</span>))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
