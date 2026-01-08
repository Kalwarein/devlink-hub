import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MultiStepForm } from "@/components/project/MultiStepForm";
import { Rocket, CheckCircle } from "lucide-react";

export default function StartProject() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Select a plan and tell us about your project. We'll get back to you with a proposal within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <MultiStepForm />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["No obligation", "Free consultation", "Response within 24 hours", "100% confidential"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
