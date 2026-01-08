import { Check, Star, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import { useProjectForm } from "../ProjectFormContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function StepPlanSelection() {
  const { formData, updateFormData, setCurrentStep } = useProjectForm();

  const handleContinue = () => {
    if (formData.selectedPlan) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Select Your Plan</h2>
        <p className="text-muted-foreground">Choose the plan that best fits your project needs</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingPlans.map((plan, index) => (
          <motion.button
            key={plan.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => updateFormData({ selectedPlan: plan })}
            className={cn(
              "relative flex flex-col text-left p-5 rounded-2xl border-2 transition-all duration-300",
              formData.selectedPlan?.id === plan.id
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50 bg-card"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-2.5 right-4">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  <Star className="w-3 h-3" />
                  Popular
                </span>
              </div>
            )}

            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">{plan.name}</h3>
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                  formData.selectedPlan?.id === plan.id
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                )}
              >
                {formData.selectedPlan?.id === plan.id && (
                  <Check className="w-3 h-3 text-primary-foreground" />
                )}
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl font-bold text-foreground">{plan.price}</span>
              {plan.period && (
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              )}
            </div>

            <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

            <ul className="space-y-1.5 text-sm">
              {plan.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
              {plan.features.length > 4 && (
                <li className="text-xs text-muted-foreground pl-5">
                  +{plan.features.length - 4} more features
                </li>
              )}
            </ul>
          </motion.button>
        ))}
      </div>

      {formData.selectedPlan && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <Button onClick={handleContinue} size="lg" className="px-8">
            Continue with {formData.selectedPlan.name}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
