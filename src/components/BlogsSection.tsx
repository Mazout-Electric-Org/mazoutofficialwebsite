import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "autonomous-navigation",
    title: "The Future of Autonomous Navigation in Dense Urban Environments",
    description:
      "How Zooty's perception stack handles chaotic traffic, narrow lanes, and unpredictable road users — without compromising safety or speed.",
  },
  {
    id: "fleet-intelligence",
    title: "Fleet Intelligence: From Vehicles to Networked Systems",
    description:
      "Why managing 10,000 vehicles requires more than dashboards. A deep dive into real-time orchestration, predictive routing, and edge computing.",
  },
  {
    id: "last-mile-logistics",
    title: "Reinventing Last-Mile Logistics for Indian Cities",
    description:
      "India's last-mile problem is unique. Here's how software-defined micro-mobility can cut delivery costs by 40% while improving reliability.",
  },
  {
    id: "software-defined-vehicles",
    title: "Software-Defined Vehicles: Why Hardware Alone Won't Win",
    description:
      "The shift from mechanical engineering to software platforms. How OTA updates, modular architecture, and data loops create compounding advantages.",
  },
];

const BlogsSection = () => {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-foreground font-medium text-5xl">Blogs</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-square border border-border rounded-xl mb-6 flex items-center justify-center bg-muted/20">
                <span className="text-foreground/10 text-6xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-foreground font-light text-lg mb-4 leading-snug">
                {blog.title}
              </h3>
              <Link
                to={`/blog/${blog.id}`}
                className="text-primary text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-300 mt-auto"
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

export default BlogsSection;
