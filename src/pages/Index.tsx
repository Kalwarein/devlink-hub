import { useState, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CitiesSection } from "@/components/sections/CitiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
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
        <HeroSection />
        <ServicesSection />
        <CitiesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <BlogSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
