import { useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, Building2, User, Mail, Globe, MapPin, FileText } from "lucide-react";
import { useProjectForm } from "../ProjectFormContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { z } from "zod";

const formSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  companyEmail: z.string().email("Valid email is required"),
  projectDescription: z.string().min(10, "Please describe your project"),
});

const businessTypes = [
  "Startup",
  "Small Business",
  "Medium Enterprise",
  "Large Corporation",
  "Non-Profit",
  "Government",
  "Educational",
  "Other",
];

const timelines = [
  "ASAP",
  "1-2 months",
  "2-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
];

export function StepCompanyDetails() {
  const { formData, updateFormData, setCurrentStep, resetForm } = useProjectForm();
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState<string | null>(null);

  const isAdvancedPlan = formData.selectedPlan?.isAdvanced ?? false;

  const handleSubmit = async () => {
    setErrors({});

    const result = formSchema.safeParse({
      companyName: formData.companyName,
      companyEmail: formData.companyEmail,
      projectDescription: formData.projectDescription,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("project_requests")
        .insert({
          user_id: user?.id || null,
          plan: formData.selectedPlan?.id as any,
          email: formData.email || formData.companyEmail,
          phone: formData.phone || null,
          company_name: formData.companyName,
          company_email: formData.companyEmail,
          ceo_name: formData.ceoName || null,
          business_type: formData.businessType || null,
          country: formData.country || null,
          city: formData.city || null,
          project_description: formData.projectDescription,
          needs_website: formData.needsWebsite,
          needs_mobile_app: formData.needsMobileApp,
          mobile_platforms: formData.mobilePlatforms.length > 0 ? formData.mobilePlatforms : null,
          needs_branding: formData.needsBranding,
          expected_timeline: formData.expectedTimeline || null,
          budget_confirmed: formData.budgetConfirmed,
        })
        .select("request_id")
        .single();

      if (error) throw error;

      setRequestId(data.request_id);
      setSubmitted(true);
      toast({
        title: "Project Request Submitted!",
        description: "We'll review your request and get back to you soon.",
      });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted && requestId) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 max-w-md mx-auto py-12"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <FileText className="w-10 h-10 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Request Submitted!</h2>
          <p className="text-muted-foreground">
            Thank you for your interest. Your request ID is:
          </p>
          <p className="text-xl font-mono font-bold text-primary mt-2">{requestId}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          We'll review your project details and contact you within 24-48 hours.
        </p>
        <Button onClick={resetForm} variant="outline">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8 max-w-2xl mx-auto"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Company Details</h2>
        <p className="text-muted-foreground">
          Tell us about your company and project requirements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <Label className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4" />
            Company Name *
          </Label>
          <Input
            placeholder="Acme Inc."
            value={formData.companyName}
            onChange={(e) => updateFormData({ companyName: e.target.value })}
          />
          {errors.companyName && (
            <p className="text-sm text-destructive mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Company Email */}
        <div>
          <Label className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4" />
            Company Email *
          </Label>
          <Input
            type="email"
            placeholder="contact@company.com"
            value={formData.companyEmail}
            onChange={(e) => updateFormData({ companyEmail: e.target.value })}
          />
          {errors.companyEmail && (
            <p className="text-sm text-destructive mt-1">{errors.companyEmail}</p>
          )}
        </div>

        {/* CEO / Founder Name */}
        <div>
          <Label className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4" />
            CEO / Founder Name
          </Label>
          <Input
            placeholder="John Doe"
            value={formData.ceoName}
            onChange={(e) => updateFormData({ ceoName: e.target.value })}
          />
        </div>

        {/* Business Type */}
        <div>
          <Label className="mb-2 block">Business Type</Label>
          <Select
            value={formData.businessType}
            onValueChange={(value) => updateFormData({ businessType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Country */}
        <div>
          <Label className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4" />
            Country
          </Label>
          <Input
            placeholder="United States"
            value={formData.country}
            onChange={(e) => updateFormData({ country: e.target.value })}
          />
        </div>

        {/* City */}
        <div>
          <Label className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4" />
            City
          </Label>
          <Input
            placeholder="New York"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
          />
        </div>
      </div>

      {/* Project Description */}
      <div>
        <Label className="mb-2 block">Project Description *</Label>
        <Textarea
          placeholder="Tell us about your project, goals, and any specific requirements..."
          rows={4}
          value={formData.projectDescription}
          onChange={(e) => updateFormData({ projectDescription: e.target.value })}
        />
        {errors.projectDescription && (
          <p className="text-sm text-destructive mt-1">{errors.projectDescription}</p>
        )}
      </div>

      {/* Advanced Plan Fields */}
      {isAdvancedPlan && (
        <div className="space-y-6 p-6 bg-muted/30 rounded-2xl">
          <h3 className="font-semibold text-foreground">Additional Requirements</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Website Needed */}
            <div className="flex items-center gap-3">
              <Checkbox
                id="needsWebsite"
                checked={formData.needsWebsite}
                onCheckedChange={(checked) =>
                  updateFormData({ needsWebsite: checked === true })
                }
              />
              <Label htmlFor="needsWebsite" className="cursor-pointer">
                Website Development Needed
              </Label>
            </div>

            {/* Mobile App Needed */}
            <div className="flex items-center gap-3">
              <Checkbox
                id="needsMobileApp"
                checked={formData.needsMobileApp}
                onCheckedChange={(checked) =>
                  updateFormData({ needsMobileApp: checked === true })
                }
              />
              <Label htmlFor="needsMobileApp" className="cursor-pointer">
                Mobile App Development Needed
              </Label>
            </div>

            {/* Branding Needed */}
            <div className="flex items-center gap-3">
              <Checkbox
                id="needsBranding"
                checked={formData.needsBranding}
                onCheckedChange={(checked) =>
                  updateFormData({ needsBranding: checked === true })
                }
              />
              <Label htmlFor="needsBranding" className="cursor-pointer">
                Branding Required (Logo, Colors, Typography)
              </Label>
            </div>

            {/* Budget Confirmed */}
            <div className="flex items-center gap-3">
              <Checkbox
                id="budgetConfirmed"
                checked={formData.budgetConfirmed}
                onCheckedChange={(checked) =>
                  updateFormData({ budgetConfirmed: checked === true })
                }
              />
              <Label htmlFor="budgetConfirmed" className="cursor-pointer">
                Budget Confirmed for {formData.selectedPlan?.price}
              </Label>
            </div>
          </div>

          {/* Mobile Platforms */}
          {formData.needsMobileApp && (
            <div>
              <Label className="mb-2 block">Mobile Platforms</Label>
              <div className="flex gap-4">
                {["Android", "iOS"].map((platform) => (
                  <label key={platform} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={formData.mobilePlatforms.includes(platform.toLowerCase())}
                      onCheckedChange={(checked) => {
                        const platforms = checked
                          ? [...formData.mobilePlatforms, platform.toLowerCase()]
                          : formData.mobilePlatforms.filter((p) => p !== platform.toLowerCase());
                        updateFormData({ mobilePlatforms: platforms });
                      }}
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Expected Timeline */}
          <div>
            <Label className="mb-2 block">Expected Timeline</Label>
            <Select
              value={formData.expectedTimeline}
              onValueChange={(value) => updateFormData({ expectedTimeline: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((timeline) => (
                  <SelectItem key={timeline} value={timeline}>
                    {timeline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={loading} className="flex-1">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Request
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
