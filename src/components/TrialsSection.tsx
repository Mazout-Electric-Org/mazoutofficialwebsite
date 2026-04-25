import { motion } from "framer-motion";

const milestones = [
  { metric: "50,000+", label: "Kilometres Tested", period: "2023–2025" },
  { metric: "12", label: "Pilot Deployments", period: "Across 4 cities" },
  { metric: "99.2%", label: "System Uptime", period: "Production fleet" },
  { metric: "40+", label: "Enterprise Enquiries", period: "Since launch" },
];

const TrialsSection = () => {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Validation</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Proven in the Field
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real-world pilots. Measured outcomes. Regulatory compliance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-xl border border-border bg-card/40 backdrop-blur-sm"
            >
              <span className="text-3xl lg:text-4xl font-bold text-gradient-cyan block mb-2">
                {m.metric}
              </span>
              <span className="text-foreground font-semibold font-medium text-sm block mb-1">{m.label}</span>
              <span className="text-muted-foreground text-xs">{m.period}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <div className="glow-line w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrialsSection;
