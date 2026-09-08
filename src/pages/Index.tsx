import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import ProductsSection from "@/components/ProductsSection";
import MissionSection from "@/components/MissionSection";
import GallerySection from "@/components/GallerySection";
import JoinUsSection from "@/components/JoinUsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mazout Electric",
  description:
    "Mazout Electric builds the hardware foundation for the Physical AI era - robotic actuators, autonomous mobile platforms, and developer tooling that bring intelligence into the physical world.",
  url: "https://mazoutelectric.com/",
  logo: "https://mazoutelectric.com/og-image.jpg",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Mazout Electric | Zooty - Autonomous EV & Training Platform"
        description="Mazout Electric builds the hardware foundation for the Physical AI era - robotic actuators, autonomous mobile platforms, and the Zooty training platform."
        path="/"
        keywords="mazout, mazout electric, physical ai, robotic actuators, zooty, zooty EV, autonomous vehicle, training platform, robotics hardware, drive by wire EV"
        jsonLd={organizationJsonLd}
      />
      <Navbar />
      <HeroSection />
      <ThesisSection />
      <ProductsSection />
      <MissionSection />
      <GallerySection />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default Index;
