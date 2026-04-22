import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MeetZootySection from "@/components/MeetZootySection";
import BlogsSection from "@/components/BlogsSection";
import RevolutionSection from "@/components/RevolutionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MeetZootySection />
      <BlogsSection />
      <RevolutionSection />
      <Footer />
    </div>
  );
};

export default Index;
