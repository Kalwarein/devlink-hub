import { useState, useCallback } from "react";
import { Header } from "./Header";
import { AppSidebar } from "./AppSidebar";
import { Footer } from "@/components/sections/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Scroll to top on route change
  useScrollToTop();

  const handleCloseSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={handleToggleSidebar} />
      <AppSidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
      
      <main className="pt-16">
        {children}
        <Footer />
      </main>
    </div>
  );
}
