import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import ContactDialog from "./ContactDialog";

const JoinUsSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="careers" className="relative border-t border-border py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Join Us</p>
        <h2 className="text-3xl lg:text-5xl font-light mb-6">
          Help us build the physical world's operating system.
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto mb-10">
          We're looking for engineers, researchers, and builders who want to bring intelligence
          into the physical world — one actuator, one robot, one platform at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="uppercase tracking-[0.18em]">
            <a href="https://wellfound.com/company/mazout-electric/jobs" target="_blank" rel="noopener noreferrer">
              Careers <ArrowUpRight size={16} />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="uppercase tracking-[0.18em]"
            onClick={() => setContactOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default JoinUsSection;
