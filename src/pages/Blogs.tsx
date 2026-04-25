import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import patrollingCover from "@/assets/blog-patrolling-cover.png";
import autonomousCover from "@/assets/blog-autonomous-cover.png";

const blogs = [
  {
    id: "autonomous-navigation",
    date: "2026-04-05",
    title: "The Future of Autonomous Navigation in Dense Urban Environments",
    cover: autonomousCover,
  },
  {
    id: "patrolling-demonstration",
    date: "2026-02-17",
    title: "Safeguarding Your Facility With in-Campus Mobility",
    cover: patrollingCover,
  },
  {
    id: "last-mile-logistics",
    date: "2025-07-23",
    title: "Effective fleet management with IOT in Q-commerce era",
    cover: "https://zooty.mazoutelectric.com/assets/blogs-2B_OONlg.jpg",
  },
  {
    id: "software-defined-vehicles",
    date: "2023-12-12",
    title: "Why could EVs be the next big computing platform?",
    cover: "https://zooty.mazoutelectric.com/assets/fig1.1-CQoUQqo1.webp",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-baseline justify-between border-b border-border pb-8 mb-16">
            <h1 className="text-foreground font-sans text-5xl font-light lg:text-6xl">
              Blogs
            </h1>
            <span className="text-secondary-foreground font-semibold font-sans text-2xl lg:text-3xl">
              {String(blogs.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col"
              >
                <Link to={`/blog/${blog.id}`} className="flex flex-col">
                  <div className="aspect-[4/3] border border-border rounded-xl mb-6 flex items-center justify-center bg-muted/20 overflow-hidden">
                    {blog.cover ? (
                      <img
                        src={blog.cover}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-foreground/10 font-sans text-7xl font-bold transition-transform duration-500 group-hover:scale-110">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <span className="text-muted-foreground font-sans text-sm mb-3">
                    {blog.date}
                  </span>
                  <h2 className="text-foreground font-sans text-xl leading-snug group-hover:text-secondary-foreground transition-colors duration-300 font-normal">
                    {blog.title}
                  </h2>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border mt-24 pt-8">
            <button className="text-muted-foreground font-sans text-sm uppercase tracking-[0.22em] hover:text-foreground transition-colors">
              ← Prev
            </button>
            <button className="text-muted-foreground font-sans text-sm uppercase tracking-[0.22em] hover:text-foreground transition-colors">
              Next →
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;