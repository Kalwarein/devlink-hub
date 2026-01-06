import { Code2, Shield, Zap, HeartHandshake, Lightbulb, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Experienced Developers",
    description: "Our team brings years of expertise across diverse technologies and industries.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "We build architecture that grows with your business, from startup to enterprise.",
  },
  {
    icon: Shield,
    title: "Clean Code & Best Practices",
    description: "Maintainable, well-documented code following industry standards and conventions.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Continuous maintenance and support included.",
  },
  {
    icon: Lightbulb,
    title: "Business-Focused Mindset",
    description: "We understand your goals and align technology decisions with business outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Partnership",
    description: "Clear communication, honest timelines, and no surprises throughout the project.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="about" className="py-24 bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Why DevLink
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sidebar-foreground">
              Why Businesses Choose DevLink
            </h2>
            <p className="text-lg text-sidebar-foreground/70 mb-8 leading-relaxed">
              We're not just developers – we're partners in your digital transformation. 
              Our approach combines technical excellence with a deep understanding of 
              business challenges to deliver solutions that truly make an impact.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-sidebar-foreground/60">Client Satisfaction</p>
              </div>
              <div className="w-px h-12 bg-sidebar-border" />
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">5+</p>
                <p className="text-sm text-sidebar-foreground/60">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-sidebar-border" />
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">24/7</p>
                <p className="text-sm text-sidebar-foreground/60">Support Available</p>
              </div>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-sidebar-accent rounded-xl p-5 hover:bg-sidebar-accent/80 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sidebar-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-sidebar-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
