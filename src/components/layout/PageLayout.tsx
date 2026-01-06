import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Footer } from "@/components/sections/Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <main
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "lg:ml-72" : "lg:ml-20"
        )}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
