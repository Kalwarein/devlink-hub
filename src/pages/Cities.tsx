import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { cities } from "@/data/cities";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

export default function Cities() {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Global Reach</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cities We <span className="gradient-text">Serve</span></h1>
            <p className="text-xl text-muted-foreground">From local startups to international enterprises, we deliver exceptional digital solutions across 12+ cities worldwide.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <StaggerItem key={city.id}>
                <Link to={`/cities/${city.id}`} className="card-city group block">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    {city.featured && <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">Popular</span>}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{city.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{city.country}</p>
                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
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
