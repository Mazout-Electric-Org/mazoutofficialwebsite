import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MeetZootySection from "@/components/MeetZootySection";
import HeroVideoSection from "@/components/HeroVideoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BlogsSection from "@/components/BlogsSection";
import RevolutionSection from "@/components/RevolutionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import TrainingPlatformPopup from "@/components/TrainingPlatformPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MeetZootySection />
      <HeroVideoSection />
      <HowItWorksSection />
      <BlogsSection />
      <RevolutionSection />
      <FAQSection />
      <Footer />
      <TrainingPlatformPopup />
    </div>
  );
};

export default Index;
