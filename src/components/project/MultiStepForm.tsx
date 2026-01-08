import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProjectForm, ProjectFormProvider } from "./ProjectFormContext";
import { StepPlanSelection } from "./steps/StepPlanSelection";
import { StepAccountInfo } from "./steps/StepAccountInfo";
import { StepCompanyDetails } from "./steps/StepCompanyDetails";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, title: "Select Plan" },
  { number: 2, title: "Account Info" },
  { number: 3, title: "Company Details" },
];

function FormContent() {
  const { currentStep, selectPlanById, formData } = useProjectForm();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const planId = searchParams.get("plan");
    if (planId && !formData.selectedPlan) {
      selectPlanById(planId);
    }
  }, [searchParams, selectPlanById, formData.selectedPlan]);

  return (
    <div className="space-y-12">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
                currentStep >= step.number
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step.number}
            </div>
            <span
              className={cn(
                "ml-2 text-sm font-medium hidden sm:inline",
                currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 sm:w-16 h-0.5 mx-2 sm:mx-4",
                  currentStep > step.number ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {currentStep === 1 && <StepPlanSelection />}
      {currentStep === 2 && <StepAccountInfo />}
      {currentStep === 3 && <StepCompanyDetails />}
    </div>
  );
}

export function MultiStepForm() {
  return (
    <ProjectFormProvider>
      <FormContent />
    </ProjectFormProvider>
  );
}
