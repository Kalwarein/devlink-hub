import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/pricing/PricingCard";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your <span className="gradient-text">Perfect Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From startup launches to enterprise solutions, we have a plan that fits your needs and budget.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you choose the perfect solution for your business needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Get a Free Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
