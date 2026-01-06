import { useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CitiesSection } from "@/components/sections/CitiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { cn } from "@/lib/utils";

const Index = () => {
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
