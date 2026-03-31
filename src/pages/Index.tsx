import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import BlogsSection from "@/components/BlogsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ApplicationsSection />
      <BlogsSection />
      <Footer />
    </div>
  );
};

export default Index;
