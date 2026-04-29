import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who will monitor my parcel/conditions of goods and quantity etc.?",
    a: "The delivery person will show the parcel in the camera before dropping it in the compartment, which will be captured in our system. You can raise a request for the picture via Zooty's WhatsApp chatbot. You can also track the parcel using the bot.",
  },
  {
    q: "How big of a parcel can be delivered by Zooty?",
    a: "Zooty has 2 compartments —\n\nBox 1: 24 x 24 x 35 cm — 50kg capacity (can carry most of your daily use items)\n\nBox 2: 12 x 24 x 35 cm — 25kg capacity (specifically for pizza boxes)",
  },
  {
    q: "Why do I have to pay twice for doorstep delivery?",
    a: "If your society or campus doesn't allow for the entry of foreign vehicles, then the only alternative is that you have to walk to the gate, killing the purpose of quick deliveries itself. You are paying extra for the convenience of doorstep delivery and privacy!",
  },
  {
    q: "In case of returns, will the parcel be picked in similar fashion?",
    a: "Yes, you can register for a return pick-up under the returns option in the chatbot. A Zooty will be assigned to you to fulfill parcel delivery to the gate.",
  },
  {
    q: "Is the vehicle recording our faces and movements too?",
    a: "The footage is captured and stored after the faces are blurred at the edge (that is at vehicle level). We do track movements to avoid accidents and to train the vehicle.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24 text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-light leading-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-t border-border last:border-b group"
              >
                <AccordionTrigger className="py-8 lg:py-10 hover:no-underline group-hover:text-primary transition-colors duration-500 [&[data-state=open]]:text-primary">
                  <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center w-full text-left">
                    <span className="col-span-2 lg:col-span-1 text-2xl lg:text-3xl font-light text-muted-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 lg:col-span-11 text-xl lg:text-2xl font-light leading-snug">
                      {item.q}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-10">
                  <div className="grid grid-cols-12 gap-4 lg:gap-8">
                    <div className="hidden lg:block lg:col-span-1" />
                    <p className="col-span-12 lg:col-span-8 text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                      {item.a}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;