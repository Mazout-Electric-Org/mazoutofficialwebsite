import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mazoutelectric.com/" },
    { "@type": "ListItem", position: 2, name: "Taxi", item: "https://mazoutelectric.com/taxi" },
  ],
};

const Taxi = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Zooty as Bike Taxi — Electric Ride-Hailing Vehicle | Mazout Electric"
      description="Zooty as taxi: urban ride-hailing with connected fleet management, dynamic pricing, and rider analytics — designed for electric bike taxi operators scaling across cities."
      path="/taxi"
      keywords="zooty taxi, electric bike taxi, ride hailing EV, electric taxi India, bike taxi fleet management, EV ride hailing platform"
      jsonLd={breadcrumbJsonLd}
    />
    <Navbar />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20">
      <Link to="/" className="text-primary text-sm flex items-center gap-2 mb-12 hover:gap-3 transition-all duration-300">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      <h1 className="text-4xl lg:text-5xl font-light mb-6">Zooty as Taxi</h1>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        Urban ride-hailing with connected fleet management, dynamic pricing, and rider analytics. Designed for bike taxi operators scaling across cities.
      </p>
    </div>
    <Footer />
  </div>
);

export default Taxi;
