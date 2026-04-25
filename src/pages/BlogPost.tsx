import { Fragment } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import patrollingCover from "@/assets/blog-patrolling-cover.png";
import patrollingRoute from "@/assets/blog-patrolling-route.png";
import patrollingCollage from "@/assets/blog-patrolling-collage.png";

type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: { text: string; bold?: string }[] }
  | { type: "divider" }
  | { type: "link"; href: string; label: string; description?: string };

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
    title: "Zooty with YSC, Delhi for Patrolling & Utility",
    date: "2026-02-08",
    readTime: "4 min read",
    hero: { src: patrollingCover, alt: "Zooty x Daud-è-Dilli — Smart patrolling assistant for your facility" },
    blocks: [
      { type: "h2", text: "Overview" },
      {
        type: "p",
        text: "Large public gatherings demand more than planning—they require real-time adaptability, mobility, and control.",
      },
      {
        type: "p",
        text: "On 8th February 2026, 6:00 AM, Mazout Electric deployed Zooty at the Super Hero Run, a community-driven event organized at Yamuna Sports Complex, one of the premier facilities managed by the Delhi Development Authority.",
      },
      {
        type: "p",
        text: "The event, hosted by Daud-è-Dilli, brought together 300+ participants to promote Clean Air and Drug-Free Living. With roads sealed and a defined event perimeter in place, the challenge was clear: ensure seamless monitoring, crowd management, and security—without disrupting the environment or experience.",
      },
      {
        type: "image",
        src: patrollingRoute,
        alt: "Route map for the 10 KM Super Hero Run around Yamuna Sports Complex",
        caption: "Route map for the 10 KM Super Hero Run — the perimeter Zooty patrolled.",
      },
      { type: "divider" },
      { type: "h2", text: "Deployment Objective" },
      {
        type: "p",
        text: "Mazout Electric partnered with the organizers to demonstrate Zooty as a real-world patrolling and utility solution, purpose-built for controlled environments like campuses, societies, and event zones.",
      },
      {
        type: "p",
        text: "This was not a pilot in isolation—it was a live operational deployment under real conditions.",
      },
      { type: "divider" },
      { type: "h2", text: "On-Ground Impact with Zooty" },
      {
        type: "image",
        src: patrollingCollage,
        alt: "Zooty deployed on-ground at the Super Hero Run with participants and organizers",
        caption: "Zooty on-ground at the Super Hero Run — start/finish line, perimeter patrols, and participant interactions.",
      },
      {
        type: "p",
        text: "Zooty enabled security teams to operate with greater efficiency and presence:",
      },
      {
        type: "ul",
        items: [
          {
            bold: "Active perimeter control",
            text: "Guards could quickly identify and alert unauthorized individuals attempting to enter the restricted zone.",
          },
          {
            bold: "High-frequency coverage",
            text: "The entire perimeter was patrolled multiple times, significantly improving monitoring compared to static guarding.",
          },
          {
            bold: "Reduced manpower dependency",
            text: "A single Zooty replaced the need for multiple guards covering the same area manually.",
          },
          {
            bold: "Enhanced authority & visibility",
            text: "The upright, standing design gave personnel a commanding field of view—improving both awareness and perception.",
          },
          {
            bold: "Zero-emission operation",
            text: "Fully electric mobility ensured no pollution, aligning perfectly with the event's Clean Air mission.",
          },
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Data-Driven Operations" },
      {
        type: "p",
        text: "Throughout the deployment, vehicle performance, usage patterns, and control data were continuously monitored using Mazout's proprietary IoT system, MZ-01.",
      },
      { type: "p", text: "This allowed:" },
      {
        type: "ul",
        items: [
          { text: "Real-time insights into operational efficiency" },
          { text: "Post-event analysis for product optimization" },
          { text: "Continuous improvement of Zooty's capabilities for similar use cases" },
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Scalability Insights" },
      {
        type: "p",
        text: "The deployment validated Zooty's effectiveness in real-world crowd management:",
      },
      {
        type: "ul",
        items: [
          { text: "1 Zooty effectively supported an event of 300+ participants within a controlled perimeter" },
          { text: "For larger or more distributed environments, 2–3 units can be deployed for optimal coverage" },
        ],
      },
      {
        type: "p",
        text: "This demonstrates a clear, scalable model for security mobility across events, campuses, and public infrastructure.",
      },
      { type: "divider" },
      { type: "h2", text: "Proof Through Demonstration" },
      {
        type: "p",
        text: "This event served as a live proof of concept—showing that Zooty is not just a product, but a practical solution for patrolling, monitoring, and utility operations in dynamic environments.",
      },
      {
        type: "link",
        href: "https://youtu.be/FDfa2Gtp64M",
        label: "🎥 Watch the deployment in action",
        description: "https://youtu.be/FDfa2Gtp64M",
      },
      { type: "divider" },
      { type: "h2", text: "Looking Ahead" },
      {
        type: "p",
        text: "Mazout Electric is building technology for use cases of national importance—where mobility, efficiency, and sustainability intersect.",
      },
      { type: "p", text: "Zooty is already transforming how patrolling is done." },
      { type: "p", text: "The next step is inevitable: Autonomous patrolling." },
      {
        type: "p",
        text: "Imagine Zooty performing perimeter monitoring, anomaly detection, and crowd management—without human intervention.",
      },
    ],
  },
  "last-mile-logistics": {
    title: "Effective fleet management with IOT in Q-commerce era",
    date: "2025-07-23",
    readTime: "5 min read",
    blocks: [
      {
        type: "image",
        src: "https://zooty.mazoutelectric.com/assets/blogs-2B_OONlg.jpg",
        alt: "Effective fleet management with IOT in Q-commerce era",
      },
      { type: "h2", text: "Overview" },
      {
        type: "p",
        text: "The Q-commerce or quick commerce field has grown significantly in recent years as it, in effect, favors the entire ecosystem. Brands get faster insights on better product propositions as D2C, stores have to maintain less inventory with faster movement of goods, aggregators and dark stores creating profitable hubs closer to consumers and end consumers getting products faster (as fast as within 10 minutes) at the comfort of their home/office. The market is already worth more than $5 billion in India and poised to grow to $10 billion by 2029.",
      },
      {
        type: "p",
        text: "Fleet managers play an important role in bridging the gap between dark stores/warehouses and the end consumers. Their reliability and efficiency determine the value an end consumer gets out of the Q-commerce ecosystem. Fleet of electric vehicles keeps the unit economics favorable for the ecosystem.",
      },
      {
        type: "p",
        text: "Currently, fleet managers face challenges in optimizing usage of vehicles, vehicle tamper on field, thefts, and breakdown of vehicles due to rugged use. All these eventually hurt their hub-to-hub profitability and growth.",
      },
      { type: "h2", text: "What is effective fleet management?" },
      {
        type: "p",
        text: "As a fleet manager, playing in the stringent unit economics field, you have to ensure efficient operations of your fleet. Effective fleet management is all about efficiently managing your riders, vehicles and operations to optimize efficiency, reduce downtime and avoid vehicle tamper/thefts. Enabling tech is the next right step you need to take to manage your fleet effectively. Key areas of your interest:",
      },
      { type: "h3", text: "1. Rider management" },
      {
        type: "p",
        text: "Monitoring riding behavior of each driver by observing their acceleration/deceleration patterns, sharp turns, work timings and mapping with their KYC/user ID. Ensuring they follow the compliance of regulations maximizes rider safety and minimizes negative marketing of your brand.",
      },
      { type: "h3", text: "2. Vehicle management" },
      {
        type: "p",
        text: "The data collected with respect to vehicle usage and service history provides deeper insights to provide predictive maintenance. On-road failure/ stoppage of vehicles often leads to frustration to riders, leading them to tamper/break the vehicle. Fleet managers on average lose 10-20 vehicles a month, which are then to be located and recovered by their vehicle recovery teams. Tamper-proofing is equally important to ensure detection and prevention of intended theft attempts.",
      },
      { type: "h3", text: "3. Operations management" },
      {
        type: "p",
        text: "Remote monitoring and control via dashboard application is crucial to enhance backend operations. Features like remote locking/unlocking, tow detection, real-time location tracking, and more are crucial in ensuring your vehicles are generating revenues for you maximum amount of time and not being misused.",
      },
      { type: "h3", text: "4. Data, data, data!" },
      {
        type: "p",
        text: "Each vehicle is like a data mine. Data about vehicle performance characteristics, data about the environment the vehicle is being ridden and riding behavior would be crucial for vehicle and component manufacturers, rider behavior mapping and understanding foreign geographies, respectively.",
      },
      {
        type: "quote",
        text: "Investing in the right kind of IOT is important to grow from a fleet size of a few 100s to 1000s and to multiple geographies.",
      },
      {
        type: "image",
        src: "https://zooty.mazoutelectric.com/assets/blogEcoSysImg-CeDz9ZNR.jpeg",
        alt: "IoT Fleet Management",
      },
      {
        type: "p",
        text: "Solutions like MZ01 by Mazout provides you the autonomy as an end-to-end solution to manage your fleet with monitoring and control via Mazout's dashboard application. In addition to the above features, MZ01 also takes care of security of firmware, tamper-proofing and future-proofing your vehicle. What are they and why they are important:",
      },
      { type: "h3", text: "1. Tamper-proof" },
      {
        type: "p",
        text: "The vehicle is as smart as the IOT device it contains. Removing it makes the vehicle vulnerable and theft prone, making it prone to unlicensed use cases. The IOT device detects when its being tampered with, and triggers actions such as motor lock, SMS commands to fleet manager with last known location to ensure the vehicle strictly cannot be dragged, let alone ridden. A consolidated single unit IOT device ensures there are minimum possible failure points and maximum tamper-proofing.",
      },
      { type: "h3", text: "2. Future-proof" },
      {
        type: "p",
        text: "Vehicles and use cases keep evolving, so your IOT device should keep updating itself, without requiring costly hardware upgrades. This can happen entirely through software via over-the-air (OTA) upgrades, just like in your smartphones.",
      },
      {
        type: "p",
        text: "• More information can be extracted from the vehicle as the sensors and technology evolves, generating valuable insights with sensor fusion\n• Main battery's power usage for IOT can be reduced with efficient software and algorithms\n• New features can be passed to the vehicles, benefiting management and/or the rider",
      },
      { type: "h3", text: "3. Firmware security" },
      {
        type: "p",
        text: "Your, now tech-enabled, vehicles are streaming data for monitoring and receiving data for control continuously as part of daily operations. Hence, it's important to ensure no one is able to tamper with the software and get remote access. Ensuring only authenticated hardware IOT is being used in the vehicle is also important to protect data privacy and control over your assets. To ensure this, cybersecurity measures are important. It also ensures seamless OTA, FOTA upgrades to the IOT device.",
      },
      {
        type: "quote",
        text: "Vehicles become a liability for a fleet manager as soon as they are taken off the road for any reason",
      },
      {
        type: "p",
        text: "As a fleet manager, investing in a good IOT device not only safeguards your assets but also gives you the leverage to grow beyond certain regions, with your tech handling the unknowns seamlessly, adapting itself to the new conditions. Talking about more futuristic stuff, IOT would create a pathway to achieve autonomous fleet management operations, through AI, with decision making happening on real-time data, cutting down on costs and increasing hub-to-hub profits.",
      },
      {
        type: "p",
        text: "Interested to take your fleet management to the next level? Apply now for a demo of MZ01 on your electric vehicles and transform your fleet management. Drop a line on akhil@mazoutelectric.com",
      },
    ],
  },
  "software-defined-vehicles": {
    title: "Why could EVs be the next big computing platform?",
    date: "2025-12-12",
    readTime: "3 min read",
    blocks: [
      {
        type: "image",
        src: "https://zooty.mazoutelectric.com/assets/fig1.1-CQoUQqo1.webp",
        alt: "Why could EVs be the next big computing platform?",
      },
      { type: "h2", text: "Overview" },
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
            className="text-foreground text-3xl lg:text-5xl leading-tight mt-6 mb-12 font-medium"
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
                  const autoDivider =
                    block.type === "h2" && i > 0 && blog.blocks![i - 1].type !== "divider" ? (
                      <hr key={`div-${i}`} className="my-12 border-t border-border" />
                    ) : null;
                  switch (block.type) {
                    case "h2":
                      return (
                        <Fragment key={i}>
                          {autoDivider}
                          <h2
                            className="text-foreground text-2xl lg:text-3xl mt-12 mb-2 font-normal"
                          >
                            {block.text}
                          </h2>
                        </Fragment>
                      );
                    case "h3":
                      return (
                        <h3
                          key={i}
                          className="text-foreground text-xl lg:text-2xl mt-8 mb-1 font-normal"
                        >
                          {block.text}
                        </h3>
                      );
                    case "p":
                      return (
                        <p
                          key={i}
                          className="text-muted-foreground leading-relaxed text-sm"
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
                    case "ul":
                      return (
                        <ul key={i} className="space-y-3 pl-6 list-disc marker:text-muted-foreground/60">
                          {block.items.map((item, j) => (
                            <li key={j} className="text-muted-foreground leading-relaxed text-sm">
                              {item.bold && (
                                <span className="text-foreground font-medium">{item.bold}. </span>
                              )}
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      );
                    case "divider":
                      return <hr key={i} className="my-12 border-t border-border" />;
                    case "link":
                      return (
                        <a
                          key={i}
                          href={block.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-xl border border-border bg-muted/10 px-6 py-5 hover:bg-muted/20 transition-colors"
                        >
                          <div className="text-foreground text-lg font-medium group-hover:text-secondary-foreground transition-colors">
                            {block.label} →
                          </div>
                          {block.description && (
                            <div className="text-muted-foreground text-sm mt-1">
                              {block.description}
                            </div>
                          )}
                        </a>
                      );
                    default:
                      return null;
                  }
                })
              : blog.body?.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-sm">
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
