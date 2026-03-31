import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Taxi = () => (
  <div className="min-h-screen bg-background text-foreground">
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
