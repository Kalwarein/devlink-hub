import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Users, Target, Award, Heart, Globe, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for good enough. Every project we deliver meets the highest standards of quality and performance."
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our success. We work as true partners, understanding your business and delivering solutions that matter."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "With teams and clients across multiple continents, we bring diverse perspectives to every challenge."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay at the forefront of technology, constantly learning and adopting new tools to deliver better solutions."
  }
];

const team = [
  { name: "Aminata Sesay", role: "CEO & Co-Founder", description: "15+ years in tech leadership" },
  { name: "Mohamed Kamara", role: "CTO & Co-Founder", description: "Former Google engineer" },
  { name: "Fatmata Koroma", role: "Head of Design", description: "Award-winning UX designer" },
  { name: "Ibrahim Bangura", role: "Lead Engineer", description: "Full-stack expert" },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About DevLink
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Digital Products That <span className="gradient-text">Transform Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in Freetown, Sierra Leone, DevLink has grown into a global software agency serving clients 
              from startups to Fortune 500 companies across 12+ countries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe great software can come from anywhere. Our mission is to build world-class digital 
                products while proving that Africa has the talent to compete on the global stage.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every project we take on is an opportunity to demonstrate excellence, solve real problems, 
                and create lasting value for our clients and their users.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">12+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-card rounded-2xl h-32 flex items-center justify-center shadow-card">
                      <Users className="w-12 h-12 text-primary/40" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle mx-auto">
              These core values guide every decision we make and every line of code we write.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-card rounded-2xl p-6 shadow-card h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              Experienced leaders passionate about technology and building great products.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-card group hover:shadow-card-hover transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Award className="w-16 h-16 text-primary/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with powerful digital solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
