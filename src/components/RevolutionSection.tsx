import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactDialog from "./ContactDialog";

const RevolutionSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-32 lg:py-40 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8 leading-[1.1]">
            Be part of the <span className="text-primary">revolution</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-12">
            Combining micro-mobility with robotics, Zooty is on a mission to advance a smart city with micro-logistics. In future, you can expect Zooty to deliver to your doorstep end to end, ie, directly from dark stores to you, without human intervention. This is just the beginning. Be part of the revolution happening with Zooty.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)] group"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <ContactDialog open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default RevolutionSection;