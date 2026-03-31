import { motion } from "framer-motion";
import { Package, Shield, Bike } from "lucide-react";
import { Link } from "react-router-dom";

const applications = [
  {
    icon: Package,
    title: "Zooty for Logistics",
    description:
      "Purpose-built for hyperlocal and e-commerce last-mile fulfilment. Optimised for payload, range, and route density in congested urban corridors.",
    href: "/logistics",
  },
  {
    icon: Shield,
    title: "Zooty for Patrolling",
    description:
      "Campus, industrial, and municipal surveillance deployments. Connected fleet intelligence for real-time coverage mapping and incident response.",
    href: "/patrolling",
  },
  {
    icon: Bike,
    title: "Zooty as Taxi",
    description:
      "Urban ride-hailing with connected fleet management, dynamic pricing, and rider analytics. Designed for bike taxi operators scaling across cities.",
    href: "/taxi",
  },
];

const ApplicationsSection = () => {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-foreground text-lg font-medium">Applications</h2>
          <span className="text-muted-foreground text-sm">03</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border rounded-xl p-8 flex flex-col hover:border-primary/30 transition-colors duration-300"
            >
              <app.icon className="w-6 h-6 text-primary mb-6" />
              <h3 className="text-foreground text-xl font-light mb-3">
                {app.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {app.description}
              </p>
              <Link
                to={app.href}
                className="text-primary text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
              >
                Read more <span className="text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
