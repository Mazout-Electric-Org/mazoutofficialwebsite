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

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Zooty Electric Vehicle",
  brand: { "@type": "Brand", name: "Mazout Electric" },
  description:
    "Zooty is a multi-purpose electric vehicle by Mazout Electric — purpose-built for last-mile logistics, campus and security patrolling, and bike taxi operations. 50km range, rapid charging, zero emissions.",
  image: "https://mazoutelectric.com/og-image.jpg",
  url: "https://mazoutelectric.com/",
  manufacturer: {
    "@type": "Organization",
    name: "Mazout Electric",
    url: "https://mazoutelectric.com/",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://zooty.mazoutelectric.com/",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mazout Electric | Zooty — Autonomous EV & Training Platform"
        description="Mazout Electric builds Zooty — an autonomous electric vehicle and full-stack training platform for logistics, patrolling, bike taxi and ADAS / autonomy R&D in India."
        path="/"
        keywords="mazout, mazout electric, zooty, zooty EV, electric vehicle, EV, autonomous vehicle, autonomous EV, training platform, ADAS platform, autonomy research vehicle, drive by wire EV, last mile delivery EV, electric bike taxi, patrolling EV, fleet electric vehicle India"

        jsonLd={productJsonLd}
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
