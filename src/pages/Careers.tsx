import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: Globe, title: "Remote First", description: "Work from anywhere in the world" },
  { icon: Zap, title: "Growth", description: "Continuous learning and development" },
  { icon: Heart, title: "Health", description: "Comprehensive health coverage" },
  { icon: Users, title: "Team", description: "Collaborative, inclusive culture" },
];

const openPositions = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Build cutting-edge web applications using React, TypeScript, and modern tooling."
  },
  {
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Remote (Africa)",
    type: "Full-time",
    description: "Create beautiful, performant mobile applications for iOS and Android."
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Design intuitive interfaces and experiences for web and mobile products."
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Build and maintain cloud infrastructure, CI/CD pipelines, and monitoring systems."
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "Freetown, Sierra Leone",
    type: "Full-time",
    description: "Lead projects from conception to delivery, ensuring quality and client satisfaction."
  },
];

export default function Careers() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Build Your Career at <span className="gradient-text">DevLink</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join a team of passionate developers, designers, and problem-solvers building 
              world-class digital products from Africa for the world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where talented people can do their best work.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Find your next opportunity with us.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-4">
            {openPositions.map((position) => (
              <StaggerItem key={position.title}>
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{position.department}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button className="btn-primary self-start lg:self-center flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Don't See a Fit?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll reach out 
              when we have a role that matches your skills.
            </p>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
