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
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mazout Electric | Zooty — Autonomous EV & Training Platform"
        description="Mazout Electric builds Zooty — an autonomous electric vehicle and full-stack training platform for logistics, patrolling, bike taxi and ADAS / autonomy R&D in India."
        path="/"
        keywords="mazout, mazout electric, zooty, zooty EV, electric vehicle, EV, autonomous vehicle, autonomous EV, training platform, ADAS platform, autonomy research vehicle, drive by wire EV, last mile delivery EV, electric bike taxi, patrolling EV, fleet electric vehicle India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mazout Electric",
          url: "https://mazoutelectric.com/",
          logo: "https://mazoutelectric.com/og-image.jpg",
          description:
            "Mazout Electric builds Zooty — an autonomous electric vehicle and training platform for logistics, patrolling, bike taxi and ADAS / autonomy R&D in India.",
        }}
      />
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
