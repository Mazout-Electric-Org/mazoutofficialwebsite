import { motion } from "framer-motion";
import heroImage from "@/assets/zooty-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zooty platform vehicle"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>

      {/* Left-aligned content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-20 w-full">
        {/* Massive ZOOTY wordmark */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-bold uppercase tracking-tight leading-[0.95] text-foreground text-5xl sm:text-6xl lg:text-8xl xl:text-9xl mb-6 lg:mb-8"
        >
          ZOOTY
        </motion.h2>

        {/* Original headline */}
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

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 lg:mt-12 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          Autonomous vehicles, intelligent fleets, and seamless orchestration —
          building the rails for the future of campus and last-mile mobility.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#meet-zooty"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors"
          >
            See what we're building
          </a>
          <a
            href="#vision"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-foreground/30 text-foreground text-xs tracking-[0.2em] uppercase font-medium hover:border-foreground/70 transition-colors"
          >
            Read vision
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
