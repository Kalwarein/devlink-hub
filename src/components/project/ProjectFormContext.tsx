import { createContext, useContext, useState, ReactNode } from "react";
import { PricingPlan, pricingPlans } from "@/data/pricing";

export interface ProjectFormData {
  // Step 1: Plan
  selectedPlan: PricingPlan | null;
  
  // Step 2: Account
  email: string;
  phone: string;
  
  // Step 3: Company Details
  companyName: string;
  companyEmail: string;
  ceoName: string;
  businessType: string;
  country: string;
  city: string;
  projectDescription: string;
  
  // Advanced fields
  needsWebsite: boolean;
  needsMobileApp: boolean;
  mobilePlatforms: string[];
  needsBranding: boolean;
  expectedTimeline: string;
  budgetConfirmed: boolean;
}

const initialFormData: ProjectFormData = {
  selectedPlan: null,
  email: "",
  phone: "",
  companyName: "",
  companyEmail: "",
  ceoName: "",
  businessType: "",
  country: "",
  city: "",
  projectDescription: "",
  needsWebsite: false,
  needsMobileApp: false,
  mobilePlatforms: [],
  needsBranding: false,
  expectedTimeline: "",
  budgetConfirmed: false,
};

interface ProjectFormContextType {
  formData: ProjectFormData;
  updateFormData: (data: Partial<ProjectFormData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
  selectPlanById: (planId: string) => void;
}

const ProjectFormContext = createContext<ProjectFormContextType | undefined>(undefined);

export function ProjectFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (data: Partial<ProjectFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
  };

  const selectPlanById = (planId: string) => {
    const plan = pricingPlans.find((p) => p.id === planId);
    if (plan) {
      updateFormData({ selectedPlan: plan });
    }
  };

  return (
    <ProjectFormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        setCurrentStep,
        resetForm,
        selectPlanById,
      }}
    >
      {children}
    </ProjectFormContext.Provider>
  );
}

export function useProjectForm() {
  const context = useContext(ProjectFormContext);
  if (context === undefined) {
    throw new Error("useProjectForm must be used within a ProjectFormProvider");
  }
  return context;
}
