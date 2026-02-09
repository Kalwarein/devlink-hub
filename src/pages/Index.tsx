import { useState, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CitiesSection } from "@/components/sections/CitiesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { BlogSection } from "@/components/sections/BlogSection";
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
        <AboutSection />
        <ServicesSection />
        <CitiesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AppDownloadSection />
        <WhyChooseSection />
        <BlogSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
