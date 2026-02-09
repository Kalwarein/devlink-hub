import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Alhaji Mohamed Kamara",
    role: "CEO, Freetown Trading Co.",
    location: "Freetown",
    text: "DevLink built our entire e-commerce platform from scratch. The quality of work is world-class — I couldn't believe this level of talent exists right here in Sierra Leone.",
    rating: 5,
  },
  {
    name: "Aminata Sesay",
    role: "Founder, EduSalone",
    location: "Bo",
    text: "Our education app has reached over 10,000 students across Sierra Leone thanks to DevLink's incredible mobile development team. They truly understand our market.",
    rating: 5,
  },
  {
    name: "Ibrahim Bangura",
    role: "Director, SL HealthTech",
    location: "Kenema",
    text: "From concept to launch in just 3 months. DevLink delivered a telemedicine platform that's now serving rural communities across the country. Outstanding work.",
    rating: 5,
  },
  {
    name: "Fatmata Koroma",
    role: "COO, Makeni Logistics",
    location: "Makeni",
    text: "The custom ERP system DevLink built has transformed our operations. We've cut costs by 40% and everything runs smoothly. Highly recommended.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6 border border-border/50">
            What Our Clients Say
          </span>
          <h2 className="section-title">
            Trusted Across <span className="gradient-text">Sierra Leone</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real stories from real businesses we've helped grow with technology.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border/50 relative group hover:border-primary/20 transition-colors duration-300"
              style={{ boxShadow: "var(--shadow-sm)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium mt-1">{testimonial.location}, Sierra Leone</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
