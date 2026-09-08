import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ContactDialog from "./ContactDialog";
import bgImage from "@/assets/robotic-arm.png";

const words = [
  { text: "The" },
  { text: "future" },
  { text: "beyond" },
  { text: "human", primary: true },
  { text: "intelligence", primary: true },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -bottom-32 -right-16 w-[32rem] h-[32rem] rounded-full bg-secondary/10 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.32em] text-primary mb-8"
        >
          Mazout Electric
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-balance mb-8"
        >
          {words.map((word) => (
            <motion.span
              key={word.text}
              variants={wordVariant}
              className={`inline-block mr-[0.28em] ${word.primary ? "text-primary" : ""}`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
        >
          We believe the coming decade belongs to Physical AI - robots capable of
          perceiving, deciding, and acting autonomously in the real world. Just as
          electricity amplified human muscle during the Industrial Revolution, Physical
          AI will amplify human productivity by automating physical work across every
          industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild className="uppercase tracking-[0.18em]">
            <a href="#products">Solutions</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="uppercase tracking-[0.18em]"
            onClick={() => setContactOpen(true)}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#physical-ai-thesis"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-primary"
      >
        <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Scroll down
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.a>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default HeroSection;
