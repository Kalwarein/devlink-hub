import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cities = [
  { id: "freetown", name: "Freetown", country: "Sierra Leone", featured: true },
  { id: "bo", name: "Bo", country: "Sierra Leone", featured: false },
  { id: "kenema", name: "Kenema", country: "Sierra Leone", featured: false },
  { id: "makeni", name: "Makeni", country: "Sierra Leone", featured: false },
  { id: "london", name: "London", country: "United Kingdom", featured: true },
  { id: "new-york", name: "New York", country: "USA", featured: true },
  { id: "lagos", name: "Lagos", country: "Nigeria", featured: true },
  { id: "accra", name: "Accra", country: "Ghana", featured: false },
  { id: "nairobi", name: "Nairobi", country: "Kenya", featured: false },
  { id: "dubai", name: "Dubai", country: "UAE", featured: true },
  { id: "toronto", name: "Toronto", country: "Canada", featured: false },
  { id: "berlin", name: "Berlin", country: "Germany", featured: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function CitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cities" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Global Reach
          </span>
          <h2 className="section-title">Cities We Serve</h2>
          <p className="section-subtitle mx-auto">
            From local startups to international enterprises, we deliver exceptional 
            digital solutions across 12+ cities worldwide.
          </p>
        </motion.div>

        {/* Cities Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cities.map((city) => (
            <motion.div key={city.id} variants={itemVariants}>
              <Link
                to={`/cities/${city.id}`}
                className="card-city group block"
              >
                <motion.div 
                  className="flex items-start justify-between mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </motion.div>
                  {city.featured && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </motion.div>
                <h3 className="font-semibold text-foreground mb-1">{city.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{city.country}</p>
                <p className="text-xs text-muted-foreground">
                  Web & App Development in {city.name}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            Don't see your city? We work remotely with clients worldwide.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
