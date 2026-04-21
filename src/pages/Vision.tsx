import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors mb-12 inline-flex items-center gap-2"
            >
              ← Back
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-12"
          >
            Vision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <h1 className="text-foreground text-3xl lg:text-5xl font-light leading-[1.15] tracking-tight">
                Building the <span className="text-primary">Rails</span> for Autonomous Commerce
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Commerce is entering a new era—one defined by intelligence, autonomy, and seamless orchestration. The future will not be built on isolated innovations, but on deeply integrated systems where every layer of fulfillment communicates, learns, and optimizes in real time.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                AI will move beyond incremental efficiency gains to become the backbone of revenue generation. Companies that embrace end-to-end automation will scale faster, operate leaner, and unlock entirely new business models.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-border">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">The Problem</p>
              <h2 className="text-foreground text-2xl lg:text-4xl font-light leading-tight tracking-tight">
                Today's delivery ecosystem is fragmented
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Warehousing, transportation, and last-mile delivery operate as disconnected systems, leading to inefficiencies, delays, and limited scalability.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Even with advancements in autonomous vehicles, most solutions address only a single layer of the problem. This partial automation creates bottlenecks instead of eliminating them.
              </p>
              <p className="text-foreground text-lg leading-relaxed font-light">
                The future demands a unified approach.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-border">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">Our Approach</p>
              <h2 className="text-foreground text-2xl lg:text-4xl font-light leading-tight tracking-tight">
                Full-stack automation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are building a complete infrastructure layer for autonomous commerce—integrating every stage of the fulfillment chain into a single intelligent system.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">Our platform enables:</p>
              <ul className="space-y-4">
                {[
                  { title: "Automated Dark Stores", desc: "Powered by robotics for rapid, error-free fulfillment." },
                  { title: "Autonomous Road Delivery", desc: "Systems operating continuously across cities." },
                  { title: "Last-Meter Robotics", desc: "Seamless indoor delivery in homes, hotels, and offices." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4 border-l border-primary/40 pl-4">
                    <div>
                      <p className="text-foreground text-lg font-light">{item.title}</p>
                      <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-foreground text-lg leading-relaxed font-light pt-2">
                This is not just automation—it is <span className="text-primary">orchestration</span>.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-border">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">Exponential Scale</p>
              <h2 className="text-foreground text-2xl lg:text-4xl font-light leading-tight tracking-tight">
                Capabilities traditional systems cannot achieve
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {[
                  { k: "24×7", v: "Operations without human constraints" },
                  { k: "City-agnostic", v: "Deployment with scalable infrastructure" },
                  { k: "All-weather", v: "Reliability powered by intelligent systems" },
                ].map((s) => (
                  <div key={s.k} className="p-6 rounded-lg border border-border bg-card/40">
                    <p className="text-primary text-xl font-light mb-2">{s.k}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.v}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                The result is not linear improvement—but exponential growth in efficiency, throughput, and revenue.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-border">
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">The Future</p>
              <h2 className="text-foreground text-2xl lg:text-4xl font-light leading-tight tracking-tight">
                A platform for the next generation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The next generation of e-commerce leaders will not just deliver faster—they will operate on entirely new infrastructure.
              </p>
              <p className="text-foreground text-2xl lg:text-3xl font-light leading-relaxed">
                We are building the <span className="text-primary">rails</span> for that future.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A world where commerce moves autonomously, scales effortlessly, and serves humanity with precision, speed, and intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Vision;
