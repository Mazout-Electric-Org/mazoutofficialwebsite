import { motion } from "framer-motion";
import { Bike, Package, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "last-mile-logistics",
    title: "Reinventing Last-Mile Logistics for Indian Cities",
    description:
      "India's last-mile problem is unique. Here's how software-defined micro-mobility can cut delivery costs by 40% while improving reliability.",
  },
  {
    id: "patrolling-demonstration",
    title: "Zooty with YSC, Delhi for Patrolling & Utility Demonstration",
    description:
      "Experience how Zooty is transforming safety and utility at YSC Delhi with autonomous patrolling and real-time responsiveness.",
  },
];

const applications = [
  {
    icon: Package,
    title: "Logistics",
    description: "Purpose-built autonomous movement for last leg of the last-mile logistics for population dense premises",
    href: "/logistics",
  },
  {
    icon: Shield,
    title: "Patrolling",
    description: "Safeguarding the facility with in-campus mobility, enhancing vigilance with 24x7 automated operation",
    href: "/patrolling",
  },
  {
    icon: Bike,
    title: "Taxi",
    description: "Automated summoning of vehicle at the pick up location, giving complete freedom from fixed pick up and drop locations",
    href: "/taxi",
  },
];

const BlogsSection = () => {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-foreground font-sans font-medium text-5xl">Blogs</h2>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] gap-16 lg:gap-20 items-start">
          <div className="grid grid-cols-2 gap-6">
            {caseStudies.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-square border border-border rounded-xl mb-6 flex items-center justify-center bg-muted/20">
                  <span className="text-foreground/10 font-sans text-6xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-foreground font-sans font-light text-lg mb-4 leading-snug">
                  {blog.title}
                </h3>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-secondary-foreground font-sans text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-300 mt-auto"
                >
                  Read more <span className="text-lg">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border-y border-border"
          >
            {applications.map((app, i) => (
              <Link
                key={app.title}
                to={app.href}
                className="group grid grid-cols-[84px_1fr] gap-8 border-b border-border py-10 last:border-b-0"
              >
                <div className="flex h-[84px] w-[84px] items-center justify-center border border-border text-secondary-foreground transition-colors duration-300 group-hover:border-secondary-foreground">
                  <app.icon className="h-8 w-8" strokeWidth={1.4} />
                </div>
                <div className="pt-1">
                  <h3 className="text-foreground font-sans text-2xl font-medium uppercase tracking-[0.22em] leading-none mb-5">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-lg leading-loose max-w-[720px]">
                    {app.description}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
