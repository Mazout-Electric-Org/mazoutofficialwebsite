import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogContent: Record<string, { title: string; body: string[] }> = {
  "autonomous-navigation": {
    title: "The Future of Autonomous Navigation in Dense Urban Environments",
    body: [
      "Urban environments in emerging markets present a uniquely complex challenge for autonomous systems. Unlike structured Western cities, roads in India are shared by pedestrians, animals, two-wheelers, auto-rickshaws, and heavy vehicles — often without lane markings.",
      "Zooty's perception stack is built ground-up for this chaos. Using a fusion of LiDAR, camera, and ultrasonic sensors processed through custom neural networks, the system achieves real-time object detection and path planning at the edge.",
      "The result is a vehicle that doesn't just navigate — it understands context, predicts behavior, and adapts in milliseconds.",
    ],
  },
  "fleet-intelligence": {
    title: "Fleet Intelligence: From Vehicles to Networked Systems",
    body: [
      "Managing a fleet of autonomous vehicles is fundamentally different from managing individual units. It requires thinking in systems — where every vehicle is a data point, every route is an optimization problem, and every minute of downtime has a cascading cost.",
      "Mazout's fleet intelligence layer treats vehicles as nodes in a living network. Real-time telemetry, predictive maintenance alerts, and dynamic route optimization work together to maximize uptime and minimize operational cost.",
      "This is not fleet management software. This is fleet operating infrastructure.",
    ],
  },
  "last-mile-logistics": {
    title: "Reinventing Last-Mile Logistics for Indian Cities",
    body: [
      "India's e-commerce market is growing at 25% CAGR, but last-mile delivery remains its biggest bottleneck. Congested streets, unpredictable traffic, and rising fuel costs make traditional delivery models unsustainable.",
      "Zooty for Logistics is purpose-built for this problem. Electric, compact, and software-defined — it navigates dense urban corridors with precision while maintaining payload capacity for hyperlocal deliveries.",
      "Early pilots show a 40% reduction in per-delivery cost and a 60% improvement in route efficiency compared to traditional two-wheeler fleets.",
    ],
  },
  "software-defined-vehicles": {
    title: "Software-Defined Vehicles: Why Hardware Alone Won't Win",
    body: [
      "The automotive industry is undergoing its most significant transformation since the assembly line. The winner won't be the company with the best motor or chassis — it will be the one with the best software platform.",
      "Software-defined vehicles receive over-the-air updates that improve performance, add features, and fix issues — all without a single workshop visit. This fundamentally changes the economics of vehicle ownership and fleet operation.",
      "At Mazout, every Zooty ships with a modular software architecture that separates vehicle control, fleet management, and application layers. This means the same hardware can serve logistics today and ride-hailing tomorrow.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const blog = slug ? blogContent[slug] : null;

  if (!blog) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-muted-foreground">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors mb-12 inline-flex items-center gap-2"
            >
              ← Back
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-foreground text-3xl lg:text-4xl font-light leading-snug mt-12 mb-12"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {blog.body.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
