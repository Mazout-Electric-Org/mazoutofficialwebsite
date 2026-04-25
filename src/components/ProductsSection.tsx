import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  name: string;
  category: string;
  description: string;
  links: { label: string; href: string }[];
}

const products: Product[] = [
  {
    name: "Zooty Platform",
    category: "Micro-Mobility",
    description:
      "A software-defined micro-mobility platform combining modular hardware, real-time control systems, and AI-ready architecture — built for fleet-scale urban deployments.",
    links: [
      { label: "Learn More", href: "#platform" },
      { label: "Enquire", href: "#contact" },
    ],
  },
  {
    name: "Zooty Patrolling Demonstration",
    category: "Utility",
    description:
      "Collaborating with YSC Delhi to showcase autonomous patrolling and utility movement. Featuring real-time sensor fusion and adaptive campus navigation.",
    links: [
      { label: "Learn More", href: "/blog/patrolling-demonstration" },
      { label: "Inquire", href: "#contact" },
    ],
  },
  {
    name: "Logistics Deployment",
    category: "Last Mile",
    description:
      "Purpose-built configurations for hyperlocal and e-commerce fulfilment. Optimised for payload, range, and route density in congested urban corridors.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Enquire", href: "#contact" },
    ],
  },
  {
    name: "Urban Patrol Systems",
    category: "Security",
    description:
      "Campus, industrial, and municipal surveillance deployments. Connected fleet intelligence for real-time coverage mapping and incident response.",
    links: [
      { label: "Specifications", href: "#" },
      { label: "Enquire", href: "#contact" },
    ],
  },
  {
    name: "Ride Platform",
    category: "Transport",
    description:
      "Urban ride-hailing with connected fleet management, dynamic pricing, and rider analytics. Designed for bike taxi operators scaling across cities.",
    links: [
      { label: "Partner Program", href: "#" },
      { label: "Enquire", href: "#contact" },
    ],
  },
  {
    name: "Modular Hardware",
    category: "Engineering",
    description:
      "Swappable battery systems, high-efficiency motors, and ruggedised chassis. Every component is designed for independent upgrade and replacement without system downtime.",
    links: [
      { label: "Technical Specs", href: "#" },
      { label: "Buy Now", href: "#" },
    ],
  },
  {
    name: "Autonomous Systems",
    category: "R&D",
    description:
      "Edge computing for on-vehicle decision-making. Building towards autonomous navigation with sensor fusion, path planning, and V2X communication protocols.",
    links: [
      { label: "Research", href: "#" },
      { label: "Careers", href: "#careers" },
    ],
  },
];

const ProductsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-foreground font-semibold text-lg font-medium">Products</h2>
          <span className="text-muted-foreground text-sm">
            {String(products.length).padStart(2, "0")}
          </span>
        </div>

        {/* Product cards */}
        <div className="space-y-0">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-t border-border"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
                className="w-full py-8 flex items-start justify-between text-left group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <h3 className="text-foreground text-xl lg:text-2xl font-light group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="text-muted-foreground text-xs tracking-wider uppercase">
                    {product.category}
                  </span>
                </div>
                <span className="text-muted-foreground text-2xl leading-none mt-1 group-hover:text-primary transition-colors duration-300">
                  {expandedIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 max-w-2xl">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-6">
                        {product.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="text-primary text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
                          >
                            {link.label}
                            <span>→</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
