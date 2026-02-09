import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sierraLeoneCities = [
  { 
    id: "freetown", 
    name: "Freetown", 
    description: "Capital city — Our headquarters and main hub for all operations.",
    clients: "30+",
    featured: true,
  },
  { 
    id: "bo", 
    name: "Bo", 
    description: "Second-largest city — Growing tech adoption and business digitization.",
    clients: "10+",
    featured: false,
  },
  { 
    id: "kenema", 
    name: "Kenema", 
    description: "Eastern hub — Connecting businesses with modern digital tools.",
    clients: "8+",
    featured: false,
  },
  { 
    id: "makeni", 
    name: "Makeni", 
    description: "Northern capital — Empowering commerce through technology.",
    clients: "6+",
    featured: false,
  },
  { 
    id: "koidu", 
    name: "Koidu", 
    description: "Diamond city — Bringing digital transformation to the east.",
    clients: "4+",
    featured: false,
  },
  { 
    id: "port-loko", 
    name: "Port Loko", 
    description: "Northwestern gateway — Expanding digital infrastructure.",
    clients: "3+",
    featured: false,
  },
];

export function CitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6 border border-border/50">
            <MapPin className="w-3 h-3 inline mr-1" />
            Only in Sierra Leone
          </span>
          <h2 className="section-title">
            Serving Every Corner of{" "}
            <span className="gradient-text">Sierra Leone</span>
          </h2>
          <p className="section-subtitle mx-auto">
            You can't find DevLink anywhere else in the world. We're proudly Sierra Leonean — 
            building technology for businesses across every major city in the country.
          </p>
        </motion.div>

        {/* Cities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sierraLeoneCities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.08 }}
            >
              <Link
                to={`/cities/${city.id}`}
                className="block bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group h-full"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  {city.featured && (
                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      HQ
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{city.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{city.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    {city.clients} clients
                  </div>
                  <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Exclusive note */}
        <motion.div
          className="mt-16 text-center bg-accent/50 rounded-2xl p-8 border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg font-semibold text-foreground mb-2">
            🇸🇱 Exclusively Sierra Leonean
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DevLink is the only professional software development agency in Sierra Leone. 
            We don't operate from London, Lagos, or New York — we build right here, for businesses right here. 
            That's what makes us different.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
