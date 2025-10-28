import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksGallery } from "@/components/WorksGallery";
import { GallerySlider } from "@/components/GallerySlider";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{ backgroundImage: "url('https://cdn.poehali.dev/files/f10f6f99-7a9c-4bc7-a6da-40ce12959391.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      <Header />
      <HeroSection />
      <ServicesSection />
      <WorksGallery />
      <GallerySlider />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
