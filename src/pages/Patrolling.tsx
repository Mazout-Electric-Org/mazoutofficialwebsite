import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Patrolling = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20">
      <Link to="/" className="text-primary text-sm flex items-center gap-2 mb-12 hover:gap-3 transition-all duration-300">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      <h1 className="text-4xl lg:text-5xl font-light mb-6">Zooty for Patrolling</h1>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        Campus, industrial, and municipal surveillance deployments. Connected fleet intelligence for real-time coverage mapping and incident response.
      </p>
    </div>
    <Footer />
  </div>
);

export default Patrolling;
