import { motion } from "framer-motion";
import render from "../assets/Render1.png";

const MeetZootySection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="lg:text-5xl leading-tight mb-8 font-light text-5xl">
            Meet <span className="text-primary">Zooty</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
            Facilities must balance the diverse needs of campus security and provide utmost residents convenience.
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            With the penetration of dark stores, and their doorstep promises, consumers' accessibility demands are changing irreversibly. That results in authorized/unauthorized entry of gig workers inside the premises, which the facility itself is not prepared for. Zooty offers an autonomous vehicle solution that serves you at the doorstep without compromising facility and residents' security.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card"
        >
          <img
            src={render}
            alt="Zooty Render"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MeetZootySection;