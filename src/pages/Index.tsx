import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MeetZootySection from "@/components/MeetZootySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BlogsSection from "@/components/BlogsSection";
import RevolutionSection from "@/components/RevolutionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MeetZootySection />
      <HowItWorksSection />
      <BlogsSection />
      <RevolutionSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
