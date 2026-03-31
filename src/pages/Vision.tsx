import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors mb-12 inline-flex items-center gap-2"
            >
              ← Back
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-12"
          >
            Vision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-foreground text-2xl lg:text-3xl font-light leading-relaxed">
              We are building the operating system of urban movement — not vehicles, but the intelligence layer that connects them.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every Zooty is a node. Every fleet is a network. Every city is an ecosystem.
              From autonomous navigation to networked fleet intelligence, we're designing
              infrastructure for the next era of mobility.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our platform scales from 10 vehicles to 10,000. From one city to every city.
              Software-defined, modular, and built from first principles.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Vision;
