import { useState } from "react";
import PageBackground from "@/components/layout/PageBackground";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorksSection from "@/components/sections/WorksSection";
import GallerySlider from "@/components/sections/GallerySlider";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactsSection from "@/components/sections/ContactsSection";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <PageBackground />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <GallerySlider />
      <TestimonialsSection />
      <ContactsSection />
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
