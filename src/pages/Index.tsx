import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
