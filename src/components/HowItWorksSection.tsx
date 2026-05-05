import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Smartphone, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Order via Blinkit / Instamart",
    description: "Use any of your favorite quick commerce apps to place your order as you normally would.",
  },
  {
    icon: MessageCircle,
    title: "Share details on Zooty WhatsApp bot",
    description: "Send your order number and pick-up point to our WhatsApp chatbot and complete the payment. We then assign a Zooty for your order.",
  },
  {
    icon: PackageCheck,
    title: "Delivery partner drops parcel into Zooty",
    description: "The delivery partner arrives at your society or campus gate and drops your order into the assigned Zooty's compartment.",
  },
  {
    icon: Smartphone,
    title: "Unlock securely via phone",
    description: "Zooty drives autonomously and arrives at your doorstep. Unlock the compartment from your phone and collect your order.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">How it works</p>
          <h2 className="text-4xl lg:text-6xl font-light leading-tight">
            From one tap to your <span className="text-primary">doorstep</span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group grid grid-cols-12 gap-4 lg:gap-8 items-start py-10 lg:py-14 border-t border-border last:border-b"
              >
                {/* Number */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="text-5xl lg:text-7xl font-light text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className="col-span-10 lg:col-span-4 flex items-center">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <div className="col-span-12 lg:col-span-4">
                  <h3 className="text-2xl lg:text-3xl font-light leading-snug">{step.title}</h3>
                </div>

                {/* Description */}
                <div className="col-span-12 lg:col-span-3">
                  <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;