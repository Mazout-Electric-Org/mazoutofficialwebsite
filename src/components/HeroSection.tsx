import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Abstract atom cross shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mb-16"
      >
        <div className="grid grid-cols-2 gap-3 w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]">
          {/* Top-left */}
          <div className="rounded-[20px] lg:rounded-[28px] bg-primary/80 self-end justify-self-end w-[85px] h-[85px] lg:w-[120px] lg:h-[120px]" />
          {/* Top-right */}
          <div className="rounded-[20px] lg:rounded-[28px] bg-primary/60 self-end justify-self-start w-[85px] h-[85px] lg:w-[120px] lg:h-[120px]" />
          {/* Bottom-left */}
          <div className="rounded-[20px] lg:rounded-[28px] bg-primary/70 self-start justify-self-end w-[85px] h-[85px] lg:w-[120px] lg:h-[120px]" />
          {/* Bottom-right */}
          <div className="rounded-[20px] lg:rounded-[28px] bg-primary/50 self-start justify-self-start w-[85px] h-[85px] lg:w-[120px] lg:h-[120px]" />
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-[1.3] max-w-3xl"
      >
        Software-defined mobility
        <br />
        to transform cities
        <br />
        and{" "}
        <span className="text-primary">move the world.</span>
      </motion.h1>

      {/* Link */}
      <motion.a
        href="#vision"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 text-primary text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
      >
        Read vision <span className="text-lg">→</span>
      </motion.a>
    </section>
  );
};

export default HeroSection;
