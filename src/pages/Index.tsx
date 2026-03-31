import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ApplicationsSection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
