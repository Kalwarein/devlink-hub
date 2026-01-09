import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PricingPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full p-6 bg-card rounded-2xl border transition-all duration-300 hover:shadow-lg",
        plan.popular ? "border-primary shadow-primary/10 shadow-lg" : "border-border"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            <Star className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-3xl font-bold text-foreground">{plan.price}</span>
          <span className="text-muted-foreground text-sm">one-time</span>
        </div>
        {plan.monthlyFee && (
          <p className="text-sm text-primary font-medium mb-3">{plan.monthlyFee}</p>
        )}
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/start-project?plan=${plan.id}`}
        className={cn(
          "w-full py-3 px-4 rounded-xl font-medium text-center transition-all duration-300",
          plan.popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-muted text-foreground hover:bg-muted/80"
        )}
      >
        Start a Project
      </Link>
    </div>
  );
}
