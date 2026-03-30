import { motion } from "framer-motion";

const insights = [
  {
    year: "Now",
    title: "Urban density demands new systems",
    desc: "Cities are beyond the tipping point. Legacy transport can't scale.",
  },
  {
    year: "Shift",
    title: "Micro-mobility is infrastructure",
    desc: "Not recreation — the backbone of last-mile movement for people and goods.",
  },
  {
    year: "Edge",
    title: "Software-defined changes everything",
    desc: "When vehicles become data endpoints, fleets become intelligent systems.",
  },
];

const ThesisSection = () => {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Thesis</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Why Micro-Mobility.
            <br />
            Why Now.
          </h2>
          <p className="text-muted-foreground text-lg">
            The convergence of urbanisation, electrification, and connected intelligence
            creates a once-in-a-generation window.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-16">
            {insights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 lg:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 lg:left-6.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">
                  {item.year}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground max-w-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
