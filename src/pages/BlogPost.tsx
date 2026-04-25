import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string };

type BlogEntry = {
  title: string;
  date?: string;
  readTime?: string;
  hero?: { src: string; alt: string };
  body?: string[];
  blocks?: BlogBlock[];
};

const blogContent: Record<string, BlogEntry> = {
  "autonomous-navigation": {
    title: "The Future of Autonomous Navigation in Dense Urban Environments",
    body: [
      "Urban environments in emerging markets present a uniquely complex challenge for autonomous systems. Unlike structured Western cities, roads in India are shared by pedestrians, animals, two-wheelers, auto-rickshaws, and heavy vehicles — often without lane markings.",
      "Zooty's perception stack is built ground-up for this chaos. Using a fusion of LiDAR, camera, and ultrasonic sensors processed through custom neural networks, the system achieves real-time object detection and path planning at the edge.",
      "The result is a vehicle that doesn't just navigate — it understands context, predicts behavior, and adapts in milliseconds.",
    ],
  },
  "patrolling-demonstration": {
    title: "Zooty with YSC, Delhi for Patrolling & Utility Demonstration",
    body: [
      "Zooty's recent collaboration with YSC, Delhi showcases the practical application of autonomous mobility in high-security environments. By integrating advanced sensors and AI-driven navigation, we've demonstrated a robust solution for continuous patrolling and utility support.",
      "The demonstration highlights how autonomous systems can operate reliably within complex campus settings, providing 24x7 vigilance while reducing manual overhead. This represents a significant step towards more efficient and automated facility management.",
      "With every mile covered, Zooty continues to refine its ability to navigate and respond to dynamic environments, ensuring safety and utility are never compromised.",
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
    title: "Why could EVs be the next big computing platform?",
    date: "2025-12-12",
    readTime: "3 min read",
    blocks: [
      { type: "h2", text: "Overview" },
      {
        type: "image",
        src: "https://zooty.mazoutelectric.com/assets/fig1.1-CQoUQqo1.webp",
        alt: "Why could EVs be the next big computing platform?",
      },
      {
        type: "p",
        text: "Electric Vehicle's numbers have been strongly growing year-on-year in India with over a 1.2 million sales crossing in FY23 and is expected to cross 1.5 million in FY24. Coupled with the infrastructure to make it the next big computing platform, the potential of EVs would not be restricted just to hardware sales.",
      },
      {
        type: "p",
        text: "Just as the app ecosystem, enabled through iOS and Android, has created a community of app developers and software programmers to build something on top of the hardware in smartphones, EVs can be the next platform with such an ecosystem.",
      },
      {
        type: "p",
        text: "We see a bulk of EVs potentially replacing the ICE powered vehicles by 2030, giving us a projection of a number bigger than 10 million just for the two-wheelers category.",
      },
      {
        type: "p",
        text: "Much like smartphones and personal computers, electric vehicles can constitute all the ingredients needed to support a platform with Embedded Intelligence, Operating System customized for EVs, App Ecosystem and Security Features. It will enable some exciting set of features and applications as described below, which will truly revolutionize the way we commute:",
      },
      { type: "h3", text: "1. Upgradable feature" },
      {
        type: "p",
        text: "Vehicle's software can be upgraded post-purchase ensuring that the vehicle has the latest technology and optimized algorithms through its life cycle.",
      },
      { type: "h3", text: "2. Bi-directional charging" },
      {
        type: "p",
        text: "Drivers are often left stranded when they run out of charge before reaching the nearest charging station. Bi-directional charging feature allows drivers to get to the charge from nearby riders, enough to get them to the nearest charge point.",
      },
      { type: "h3", text: "3. Portable data center" },
      {
        type: "p",
        text: "Geeks who want excess data storage that is away from cloud, but still readily accessible, can turn their vehicle into a portable data center, and connect with it 24x7.",
      },
      { type: "h3", text: "4. In-built apps like Rapido/Porter" },
      {
        type: "p",
        text: "Applications for commercial usage of vehicles would be swiftly installable on the dashboard itself, adding to the rider's convenience. Many more applications could be built for the E2W ecosystem once the developer ecosystem gets kicked in. Its potential can be realized from the earnings of Apple through their app ecosystem in 2022 alone.",
      },
      { type: "h2", text: "What will power your EV with this next generation platform?" },
      {
        type: "p",
        text: "Electric Vehicles are currently being powered by legacy architectures which apart from powering up the drivetrain, does not allow for smart features to be enabled. To move to an upgradable system and provide it with the required computing capabilities, we need to move on from legacy architecture, to something called software-defined architecture.",
      },
      {
        type: "image",
        src: "https://zooty.mazoutelectric.com/assets/fig1.2-DCV912O2.webp",
        alt: "iCommuteX Visualized",
        caption: "Figure 2: iCommuteX Visualized",
      },
      {
        type: "p",
        text: "A Software-Defined Vehicle is any vehicle that manages its operations, adds functionality, and enables new features primarily or entirely through software.",
      },
      {
        type: "p",
        text: "Mazout is leading this major transition and redefining the vehicle development process. To include numerous technologies tied to the concept of connected, autonomous, shared, and electric (CASE) mobility, Mazout has chosen to adopt the software-defined vehicle (SDV) development approach. To achieve an SDV, we are redesigning vehicle electrical/electronic (EE) architecture by consolidating functions in a single zone.",
      },
      {
        type: "p",
        text: "To achieve an SDV, we are redesigning vehicle electrical/electronic (EE) architecture by consolidating functions in a single zone. We are focusing on software development, and specifically in a base software platform, that will enable them to extend software-driven features and functions called the vehicle operating system (OS).",
      },
      {
        type: "p",
        text: "Together, let us embark on this electrifying journey, where innovation knows no bounds, and the wheels of progress never cease to turn. Whether you're a vehicle manufacturer, technologist, retrofitter, software developer, or simply passionate about groundbreaking technology, we welcome you to join the discussion by emailing info@mazoutelectric.com.",
      },
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

          {(blog.date || blog.readTime) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-12 flex items-center gap-4 text-sm text-muted-foreground"
            >
              {blog.date && <span>{blog.date}</span>}
              {blog.date && blog.readTime && <span className="opacity-50">•</span>}
              {blog.readTime && <span>{blog.readTime}</span>}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-foreground text-3xl lg:text-5xl font-light leading-tight mt-6 mb-12"
          >
            {blog.title}
          </motion.h1>

          {blog.hero && (
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16 overflow-hidden rounded-xl border border-border"
            >
              <img
                src={blog.hero.src}
                alt={blog.hero.alt}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </motion.figure>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {blog.blocks
              ? blog.blocks.map((block, i) => {
                  switch (block.type) {
                    case "h2":
                      return (
                        <h2
                          key={i}
                          className="text-foreground text-2xl lg:text-3xl font-light mt-12 mb-2"
                        >
                          {block.text}
                        </h2>
                      );
                    case "h3":
                      return (
                        <h3
                          key={i}
                          className="text-foreground text-xl lg:text-2xl font-light mt-8 mb-1"
                        >
                          {block.text}
                        </h3>
                      );
                    case "p":
                      return (
                        <p
                          key={i}
                          className="text-muted-foreground text-lg leading-relaxed"
                        >
                          {block.text}
                        </p>
                      );
                    case "image":
                      return (
                        <figure key={i} className="my-10">
                          <div className="overflow-hidden rounded-xl border border-border">
                            <img
                              src={block.src}
                              alt={block.alt}
                              loading="lazy"
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          {block.caption && (
                            <figcaption className="text-muted-foreground text-sm italic mt-3 text-center">
                              {block.caption}
                            </figcaption>
                          )}
                        </figure>
                      );
                    case "quote":
                      return (
                        <blockquote
                          key={i}
                          className="border-l-2 border-border pl-6 italic text-muted-foreground text-lg"
                        >
                          {block.text}
                        </blockquote>
                      );
                    default:
                      return null;
                  }
                })
              : blog.body?.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}

            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to="/blogs"
                className="text-muted-foreground text-sm uppercase tracking-[0.22em] hover:text-foreground transition-colors"
              >
                ← All Blogs
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
