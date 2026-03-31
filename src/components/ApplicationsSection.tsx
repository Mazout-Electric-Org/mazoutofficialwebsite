import { motion } from "framer-motion";
import { Package, Shield, Bike } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logisticsImg from "@/assets/logistics-app.jpg";
import patrollingImg from "@/assets/patrolling-app.jpg";
import taxiImg from "@/assets/taxi-app.jpg";

const applications = [
  {
    icon: Package,
    title: "Zooty for Logistics",
    description:
      "Purpose-built for hyperlocal and e-commerce last-mile fulfilment. Optimised for payload, range, and route density in congested urban corridors.",
    href: "/logistics",
    image: logisticsImg,
  },
  {
    icon: Shield,
    title: "Zooty for Patrolling",
    description:
      "Campus, industrial, and municipal surveillance deployments. Connected fleet intelligence for real-time coverage mapping and incident response.",
    href: "/patrolling",
    image: patrollingImg,
  },
  {
    icon: Bike,
    title: "Zooty as Taxi",
    description:
      "Urban ride-hailing with connected fleet management, dynamic pricing, and rider analytics. Designed for bike taxi operators scaling across cities.",
    href: "/taxi",
    image: taxiImg,
  },
];

const ApplicationCard = ({ app, i }: { app: typeof applications[0]; i: number }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      key={app.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group perspective-[1200px] min-h-[420px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 border border-border rounded-xl p-10 flex flex-col hover:border-primary/30 transition-colors duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <app.icon className="text-primary mb-6 w-[48px] h-[48px]" />
          <h3 className="text-foreground font-light mb-3 text-3xl">
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
        </div>

        {/* Back - Image */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={() => navigate(app.href)}
        >
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-background/40 flex items-end p-6">
            <span className="text-foreground font-medium text-lg">
              {app.title} →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ApplicationsSection = () => {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-foreground font-medium text-5xl">Applications</h2>
          <span className="text-muted-foreground text-sm">​</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <ApplicationCard key={app.title} app={app} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
