import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Build the Future of
            <br />
            <span className="text-gradient-cyan">Urban Movement</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Whether you're a fleet operator, city authority, or mobility innovator —
            let's build together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@mazoutelectric.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(190,90%,55%,0.3)] group"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@mazoutelectric.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
