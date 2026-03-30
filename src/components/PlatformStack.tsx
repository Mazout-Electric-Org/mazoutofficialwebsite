import { motion } from "framer-motion";
import { Cpu, Code, Database, Brain } from "lucide-react";

const layers = [
  {
    icon: Brain,
    label: "Intelligence",
    desc: "AI-ready architecture for predictive routing, demand forecasting, and autonomous operation",
    color: "from-purple-500/20 to-primary/20",
  },
  {
    icon: Database,
    label: "Data",
    desc: "Real-time telemetry, fleet analytics, and geospatial monitoring at scale",
    color: "from-primary/20 to-blue-500/20",
  },
  {
    icon: Code,
    label: "Software",
    desc: "Over-the-air updates, control systems, and fleet management platform",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Cpu,
    label: "Hardware",
    desc: "Modular battery systems, high-efficiency motors, and ruggedised chassis",
    color: "from-cyan-500/20 to-teal-500/20",
  },
];

const PlatformStack = () => {
  return (
    <section id="platform" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Platform</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Zooty System Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four integrated layers. One unified platform.
            Every layer is software-defined, modular, and upgradeable.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative"
            >
              <div className={`absolute -inset-px rounded-xl bg-gradient-to-r ${layer.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              <div className="relative flex items-start gap-5 p-6 lg:p-8 rounded-xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <layer.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {layer.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{layer.desc}</p>
                </div>
                <span className="hidden lg:block ml-auto text-muted-foreground/30 text-xs tracking-widest self-center">
                  L{4 - i}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStack;
