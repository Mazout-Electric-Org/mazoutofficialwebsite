import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section id="vision" className="relative py-32 lg:py-48">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-12"
        >
          Vision
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-foreground font-semibold text-2xl lg:text-3xl font-light leading-relaxed">
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
  );
};

export default VisionSection;
