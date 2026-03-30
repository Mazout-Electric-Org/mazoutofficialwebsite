import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ThesisSection from "@/components/ThesisSection";
import PlatformStack from "@/components/PlatformStack";
import UseCases from "@/components/UseCases";
import TechDeepDive from "@/components/TechDeepDive";
import TrialsSection from "@/components/TrialsSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ThesisSection />
      <PlatformStack />
      <UseCases />
      <TechDeepDive />
      <TrialsSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
