import { motion } from "framer-motion";
import { Package, Shield, Bike, Settings } from "lucide-react";

const cases = [
  { icon: Package, title: "Logistics", desc: "Last-mile delivery for hyperlocal and e-commerce fulfilment" },
  { icon: Shield, title: "Patrolling", desc: "Campus, industrial, and municipal surveillance deployments" },
  { icon: Bike, title: "Bike Taxi", desc: "Urban ride-hailing with connected fleet intelligence" },
  { icon: Settings, title: "Custom", desc: "Configurable platform for specialised mobility use cases" },
];

const UseCases = () => {
  return (
    <section id="applications" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Applications</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            One Platform. Many Deployments.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The same modular architecture, configured for different urban realities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-8 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
