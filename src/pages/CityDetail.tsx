import { useParams, Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cities } from "@/data/cities";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function CityDetail() {
  const { cityId } = useParams();
  const city = cities.find(c => c.id === cityId);

  if (!city) {
    return <PageLayout><div className="py-20 text-center">City not found</div></PageLayout>;
  }

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <Link to="/cities" className="text-primary hover:underline mb-4 inline-block">← Back to Cities</Link>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-lg text-muted-foreground">{city.country}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">DevLink in <span className="gradient-text">{city.name}</span></h1>
            <p className="text-xl text-muted-foreground">{city.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Services Available in {city.name}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {city.services.map((service) => (
                <div key={service} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-card">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Work With DevLink in {city.name}</h2>
          <Link to="/start-project" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg">
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
