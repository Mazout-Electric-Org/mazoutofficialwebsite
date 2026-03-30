import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section id="vision" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      {/* Orbital network visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-[600px] h-[600px]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary/10 animate-orbit"
              style={{
                inset: `${i * 50}px`,
                animationDuration: `${25 + i * 8}s`,
                animationDirection: i % 2 === 0 ? "normal" : "reverse",
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-2 h-2 rounded-full bg-primary/40 animate-pulse-glow"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-8"
        >
          The Vision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          Autonomous.
          <br />
          Networked.
          <br />
          <span className="text-gradient-cyan">Global.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto"
        >
          Every Zooty is a node. Every fleet is a network. Every city is an ecosystem.
          We're building the infrastructure layer for the next era of movement.
        </motion.p>
      </div>
    </section>
  );
};

export default VisionSection;
