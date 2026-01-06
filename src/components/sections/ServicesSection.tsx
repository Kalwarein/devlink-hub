import { Link } from "react-router-dom";
import { Globe, Smartphone, Settings, Rocket, Layers, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    id: "website-development",
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and SEO.",
    features: ["React & Next.js", "E-commerce", "CMS Integration"],
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
  },
  {
    id: "custom-software-solutions",
    icon: Settings,
    title: "Business Software",
    description: "Custom enterprise solutions tailored to streamline your business operations and boost productivity.",
    features: ["CRM Systems", "ERP Solutions", "Automation"],
  },
  {
    id: "startup-mvps",
    icon: Rocket,
    title: "Startup MVPs",
    description: "Rapid prototyping and MVP development to validate your ideas and get to market quickly.",
    features: ["Fast Delivery", "Scalable Architecture", "Cost-Effective"],
  },
  {
    id: "api-integrations",
    icon: Layers,
    title: "API & Integrations",
    description: "Seamless third-party integrations and custom API development to connect your systems.",
    features: ["REST APIs", "GraphQL", "Payment Gateways"],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to delight users and drive conversions.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            End-to-end digital solutions to transform your business and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center text-primary font-medium group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
