import { motion } from "framer-motion";

const stats = [
  { value: "68%", label: "of urban trips under 5 km remain unoptimised" },
  { value: "3.2B", label: "hours lost to last-mile inefficiency annually" },
  { value: "47%", label: "of fleet vehicles idle during peak demand" },
];

const ProblemSection = () => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Problem</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Fragmented. Inefficient.
            <br />
            <span className="text-muted-foreground">Unsustainable.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                <span className="text-4xl lg:text-5xl font-bold text-gradient-cyan block mb-3">
                  {stat.value}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
              </div>
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

export default ProblemSection;
