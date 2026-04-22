import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/zooty-landing-vehicle.png";

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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 via-55% to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Left-aligned content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-5xl sm:text-6xl lg:text-[6.5rem] leading-[0.85] tracking-normal mb-7 lg:mb-10"
        >
          <span className="text-foreground">ZO</span>
          <span className="text-secondary-foreground">OTY</span>
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-5xl font-light leading-[1.08] max-w-4xl text-balance"
        >
          Redefining <span className="text-primary">campus mobility</span>
          <br />
          <span className="text-muted-foreground">autonomous vehicles to your doorstep</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/vision"
            className="mt-8 inline-flex text-primary text-sm uppercase tracking-[0.24em] items-center gap-2 hover:gap-4 transition-all duration-300"
          >
            Read vision <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
