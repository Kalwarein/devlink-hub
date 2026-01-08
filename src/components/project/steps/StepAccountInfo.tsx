import { useState } from "react";
import { ArrowLeft, ArrowRight, Mail, Loader2, CheckCircle } from "lucide-react";
import { useProjectForm } from "../ProjectFormContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

export function StepAccountInfo() {
  const { formData, updateFormData, setCurrentStep } = useProjectForm();
  const { user, signInWithMagicLink } = useAuth();
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMagicLink = async () => {
    setError(null);
    
    const result = emailSchema.safeParse(formData.email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    const { error } = await signInWithMagicLink(formData.email);
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setMagicLinkSent(true);
    }
  };

  const handleContinue = () => {
    if (user || formData.email) {
      setCurrentStep(3);
    }
  };

  // If user is already logged in
  if (user) {
    return (
      <div className="space-y-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back!</h2>
          <p className="text-muted-foreground">
            You're signed in as <strong>{user.email}</strong>
          </p>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={handleContinue} className="flex-1">
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Magic link sent confirmation
  if (magicLinkSent) {
    return (
      <div className="space-y-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Check Your Email</h2>
          <p className="text-muted-foreground">
            We sent a magic link to <strong>{formData.email}</strong>. 
            Click the link in your email to sign in.
          </p>
        </div>

        <div className="p-4 bg-muted/50 rounded-xl text-center">
          <p className="text-sm text-muted-foreground mb-3">
            You can continue without signing in, but creating an account helps you track your project.
          </p>
          <Button variant="outline" onClick={handleContinue}>
            Continue Without Account
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <Button variant="ghost" onClick={() => setMagicLinkSent(false)} className="w-full">
          Use a different email
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8 max-w-md mx-auto"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Contact Info</h2>
        <p className="text-muted-foreground">
          We'll use this to create your account and contact you about your project
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => {
              updateFormData({ email: e.target.value });
              setError(null);
            }}
          />
          {error && <p className="text-sm text-destructive mt-1">{error}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone Number (Optional)
          </label>
          <Input
            type="tel"
            placeholder="+1 234 567 890"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
          />
        </div>

        <Button
          onClick={handleSendMagicLink}
          disabled={!formData.email || loading}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" />
              Send Magic Link
            </>
          )}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>

        <Button variant="outline" onClick={handleContinue} className="w-full">
          Continue as Guest
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="flex justify-center">
        <Button variant="ghost" onClick={() => setCurrentStep(1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Plans
        </Button>
      </div>
    </motion.div>
  );
}
