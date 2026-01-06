import { MapPin, ArrowRight } from "lucide-react";

const cities = [
  { name: "Freetown", country: "Sierra Leone", featured: true },
  { name: "Bo", country: "Sierra Leone", featured: false },
  { name: "Kenema", country: "Sierra Leone", featured: false },
  { name: "Makeni", country: "Sierra Leone", featured: false },
  { name: "London", country: "United Kingdom", featured: true },
  { name: "New York", country: "USA", featured: true },
  { name: "Lagos", country: "Nigeria", featured: true },
  { name: "Accra", country: "Ghana", featured: false },
  { name: "Nairobi", country: "Kenya", featured: false },
  { name: "Dubai", country: "UAE", featured: true },
  { name: "Toronto", country: "Canada", featured: false },
  { name: "Berlin", country: "Germany", featured: false },
];

export function CitiesSection() {
  return (
    <section id="cities" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Global Reach
          </span>
          <h2 className="section-title">Cities We Serve</h2>
          <p className="section-subtitle mx-auto">
            From local startups to international enterprises, we deliver exceptional 
            digital solutions across 12+ cities worldwide.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <a
              key={city.name}
              href={`#city-${city.name.toLowerCase()}`}
              className="card-city group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                {city.featured && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{city.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{city.country}</p>
              <p className="text-xs text-muted-foreground">
                Web & App Development in {city.name}
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your city? We work remotely with clients worldwide.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
