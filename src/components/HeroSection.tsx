import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/zooty-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zooty platform vehicle"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      {/* Left-aligned content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-['DM_Serif_Display'] text-7xl sm:text-8xl lg:text-[10rem] leading-[0.95] tracking-tight mb-6 lg:mb-8"
        >
          <span className="text-foreground font-sans">ZO</span>
          <span className="text-secondary-foreground font-sans">OTY</span>
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl lg:text-5xl font-light leading-[1.3] max-w-3xl sm:text-4xl"
        >
          Redefining <span className="text-primary">campus mobility</span>:
          <br />
          Autonomous vehicles serving to your doorstep
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/vision"
            className="mt-6 inline-flex text-primary text-sm items-center gap-1.5 hover:gap-3 transition-all duration-300"
          >
            Read vision <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
