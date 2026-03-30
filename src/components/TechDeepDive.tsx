import { motion } from "framer-motion";

const features = [
  { title: "Modular Architecture", desc: "Swap, upgrade, and scale components independently without system downtime." },
  { title: "Data + Control Loops", desc: "Closed-loop telemetry from vehicle to cloud and back in under 200ms." },
  { title: "OTA Updates", desc: "Push firmware and software updates to entire fleets simultaneously." },
  { title: "Edge Computing", desc: "On-vehicle processing for safety-critical decisions with zero latency." },
  { title: "API-First Design", desc: "Every system function exposed via REST and MQTT for ecosystem integration." },
  { title: "Scalable Infra", desc: "From 10 vehicles to 10,000 — the platform scales linearly with demand." },
];

const TechDeepDive = () => {
  return (
    <section id="technology" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Technology</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Engineered for Scale
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Deep-tech infrastructure designed from first principles.
            Every component is built for reliability, modularity, and global deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-2 h-2 rounded-full bg-primary mb-4 group-hover:shadow-[0_0_12px_hsl(190,90%,55%,0.5)] transition-shadow duration-300" />
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechDeepDive;
