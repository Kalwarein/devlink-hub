import { useParams, Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <PageLayout><div className="py-20 text-center">Service not found</div></PageLayout>;
  }

  return (
    <PageLayout>
      <section className={`py-20 bg-gradient-to-br ${service.color} bg-opacity-10`}>
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <Link to="/services" className="text-primary hover:underline mb-4 inline-block">← Back to Services</Link>
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.fullDescription}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3"><CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /><span>{benefit}</span></li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-secondary rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Get Started?</h2>
          <Link to="/start-project" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg">
            Get a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
