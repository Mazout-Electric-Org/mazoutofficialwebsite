import { motion } from "framer-motion";
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
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl lg:text-5xl font-light leading-[1.3] max-w-2xl sm:text-4xl"
        >
          Rails for the future
          <br />
          of{" "}
          <span className="text-primary">e-commerce</span>
        </motion.h1>

        <motion.a
          href="#vision"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 inline-flex text-primary text-sm items-center gap-1.5 hover:gap-3 transition-all duration-300"
        >
          Read vision <span className="text-lg">→</span>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
