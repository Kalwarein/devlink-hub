import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Lock, Mail, Shield } from "lucide-react";

export default function AdminSetup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setupKey, setSetupKey] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await supabase.functions.invoke("setup-admin", {
        body: { email, password, setupKey },
      });

      if (response.error) {
        toast.error(response.error.message || "Setup failed");
        return;
      }

      if (response.data?.error) {
        toast.error(response.data.error);
        return;
      }

      toast.success("Admin account created! You can now login.");
      navigate("/admin");
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Setup</h1>
            <p className="text-muted-foreground mt-2">
              Create the initial admin account
            </p>
          </div>

          <form onSubmit={handleSetup} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Admin Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@devlink.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Admin Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Choose a strong password"
                  className="pl-10"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="setupKey">Setup Key</Label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="setupKey"
                  type="password"
                  value={setupKey}
                  onChange={(e) => setSetupKey(e.target.value)}
                  placeholder="Enter the setup key"
                  className="pl-10"
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Enter the setup key provided by the owner
              </p>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? "Creating Admin..." : "Create Admin Account"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an admin account?{" "}
            <a href="/admin" className="text-primary hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
