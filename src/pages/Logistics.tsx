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
    { "@type": "ListItem", position: 2, name: "Logistics", item: "https://mazoutelectric.com/logistics" },
  ],
};

const Logistics = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Zooty for Logistics - Last-Mile Delivery EV | Mazout Electric"
      description="Zooty for logistics: a purpose-built electric vehicle for hyperlocal and e-commerce last-mile fulfilment, optimised for payload, range, and route density in congested urban corridors."
      path="/logistics"
      keywords="zooty logistics, last mile delivery EV, e-commerce delivery vehicle, hyperlocal delivery EV, electric logistics vehicle India, last mile fulfilment EV"
      jsonLd={breadcrumbJsonLd}
    />
    <Navbar />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20">
      <Link to="/" className="text-primary text-sm flex items-center gap-2 mb-12 hover:gap-3 transition-all duration-300">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      <h1 className="text-4xl lg:text-5xl font-light mb-6">Zooty for Logistics</h1>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        Purpose-built for hyperlocal and e-commerce last-mile fulfilment. Optimised for payload, range, and route density in congested urban corridors.
      </p>
    </div>
    <Footer />
  </div>
);

export default Logistics;
