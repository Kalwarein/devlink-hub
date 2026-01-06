import { useParams, Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/portfolio";
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <PageLayout><div className="py-20 text-center">Project not found</div></PageLayout>;
  }

  return (
    <PageLayout>
      <section className={cn("py-20 bg-gradient-to-br", project.color, "bg-opacity-10")}>
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:underline mb-6"><ArrowLeft className="w-4 h-4" /> Back to Portfolio</Link>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.fullDescription}</p>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{project.year}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{project.duration}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground mb-8">{project.challenge}</p>
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-muted-foreground">{project.solution}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <ul className="space-y-3 mb-8">
              {project.results.map((result) => (<li key={result} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>{result}</span></li>))}
            </ul>
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (<span key={tech} className="px-4 py-2 bg-secondary rounded-full text-sm">{tech}</span>))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Want Similar Results?</h2>
          <Link to="/start-project" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg">Start Your Project <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </PageLayout>
  );
}
