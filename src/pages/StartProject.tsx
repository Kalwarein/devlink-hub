import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Rocket, CheckCircle, ArrowRight, Globe, Smartphone, Settings, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const projectTypes = [
  { id: "website", icon: Globe, label: "Website" },
  { id: "mobile-app", icon: Smartphone, label: "Mobile App" },
  { id: "software", icon: Settings, label: "Custom Software" },
  { id: "design", icon: Palette, label: "UI/UX Design" },
];

const budgetRanges = [
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
];

const timelines = [
  "1-2 months",
  "2-3 months",
  "3-6 months",
  "6+ months",
  "Flexible"
];

export default function StartProject() {
  const { toast } = useToast();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    description: "",
    budget: "",
    timeline: ""
  });

  const toggleProjectType = (id: string) => {
    setSelectedTypes(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project Request Submitted!",
      description: "We'll review your project and get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", description: "", budget: "", timeline: "" });
    setSelectedTypes([]);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Start Your <span className="gradient-text">Project</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tell us about your project and we'll get back to you with a proposal within 24 hours. 
              No obligation, just a conversation about how we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Project Type */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">What type of project?</h2>
                <p className="text-muted-foreground mb-4">Select all that apply</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => toggleProjectType(type.id)}
                      className={cn(
                        "p-6 rounded-2xl border-2 transition-all duration-300 text-center",
                        selectedTypes.includes(type.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <type.icon className={cn(
                        "w-8 h-8 mx-auto mb-3 transition-colors",
                        selectedTypes.includes(type.id) ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "font-medium transition-colors",
                        selectedTypes.includes(type.id) ? "text-primary" : "text-foreground"
                      )}>
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <Input
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 234 567 890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Tell us about your project</h2>
                <Textarea
                  placeholder="Describe your project, goals, and any specific requirements..."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              {/* Budget */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Estimated Budget</h2>
                <div className="flex flex-wrap gap-3">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget })}
                      className={cn(
                        "px-4 py-2 rounded-full border-2 transition-all duration-300",
                        formData.budget === budget
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Desired Timeline</h2>
                <div className="flex flex-wrap gap-3">
                  {timelines.map((timeline) => (
                    <button
                      key={timeline}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline })}
                      className={cn(
                        "px-4 py-2 rounded-full border-2 transition-all duration-300",
                        formData.timeline === timeline
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full btn-primary py-6 text-lg">
                Submit Project Request
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </AnimatedSection>

          {/* Trust Badges */}
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {["No obligation", "Free consultation", "Response within 24 hours", "100% confidential"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
