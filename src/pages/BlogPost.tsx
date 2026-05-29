import { Fragment } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import patrollingCover from "@/assets/blog-patrolling-cover.png";
import patrollingRoute from "@/assets/blog-patrolling-route.png";
import patrollingCollage from "@/assets/blog-patrolling-collage.png";
import sdvArchitecture from "@/assets/sdv-architecture.png";
import autonomousCover from "@/assets/blog-autonomous-cover.png";
import protypingCover from "@/assets/Render1.png";
import zooty from "@/assets/Zooty.jpg"
import molecule from "@/assets/Molecule.jpeg";
import trainingPlatform from "@/assets/Zooty_render.jpeg"
import roboticsElement from "@/assets/Elements.png";
import teleoperate from "@/assets/Teleoperate.png"

type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: { text: string; bold?: string }[] }
  | { type: "divider" }
  | { type: "link"; href: string; label: string; description?: string }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string };

type BlogEntry = {
  title: string;
  date?: string;
  readTime?: string;
  hero?: { src: string; alt: string };
  body?: string[];
  blocks?: BlogBlock[];
};

const blogContent: Record<string, BlogEntry> = {
  "Hidden-challenges-of-building-a-teleop-robotic-vehicle": {
    title: "Hidden Challenges of building a Tele-operatable Robotic Vehicle",
    date: "2026-05-27",
    readTime: "5 min read",
    hero: { src: trainingPlatform, alt: "Robotic Module" },
    blocks: [
      { type: "h2", text: "Overview" },
      {
        type: "p",
        text: "Creating a tele-op robotic vehicle sounds straightforward on paper: mount a camera, add remote control, integrate actuators, and let an operator take command from afar. In practice, the path from prototype to reliable deployment is filled with subtle, expensive, and often frustrating challenges."
      },
      {
        type: "p",
        text: "As the embedded developer behind <strong>Zooty</strong> — a compact teleoperated utility vehicle designed for last-mile logistics and industrial logistics — I’ve faced these issues firsthand. Zooty is powered by an <strong>STM32 microcontroller</strong> and uses <strong>ST3215 serial bus servos</strong> and actuators to actuate custom mechanisms for throttle, brakes, steering, and compartments. What follows are the real hidden challenges we encountered, far beyond the glossy marketing renderings."
      },
      { type: "h2", text: "Real-Time Control vs Linux Comfort: The Dual-Core Dilemma" },
      {
        type: "p",
        text: "The STM32MP2 combines dual-core Cortex-A7 processors running Linux with a Cortex-M33 microcontroller optimized for real-time tasks. While this heterogeneous architecture is powerful, integrating it effectively is far from trivial."
      },
      {
        type: "p",
        text: "We required a deterministic, low-jitter response for throttle and brake actuation. Running the entire system on Linux introduced unacceptable latency spikes from the scheduler, networking stack, and user-space drivers. Our solution involved:"
      },
      {
        type: "ul",
        items: [
          { type: "li", text: "Running the safety-critical control loop on the M33 core using bare-metal firmware or a lightweight RTOS." },
          { type: "li", text: "Leveraging the Cortex-A7 cores for video streaming, 4G/5G telemetry, and the operator interface." }
        ]
      },
      {
        type: "p",
        text: "Prototyping was initially done entirely on the Cortex-A7 cores for faster development and maximum capability, while later transitioning to proper dual-core partitioning."
      },
      {
        type: "quote",
        text: "Lesson: Heterogeneous SoCs are excellent, but they demand expertise in both embedded Linux and real-time systems. Underestimating this split can derail timelines quickly."
      },
      {
        type: "image",
        src: roboticsElement,
        alt: "Robotics Module",
      },
      { type: "h2", text: "STM3215s Are Powerful but Demanding" },
      {
        type: "p",
        text: "The ST3215 serial servos offer impressive performance — up to 30kg·cm torque, metal gears, and daisy-chain capability over a single bus. Zooty currently uses four of them for:"
      },
      {
        type: "ul",
        items: [
          { type: "li", text: "Custom steering actuator (converted from a steering rack)" },
          { type: "li", text: "Electronic throttke body control" },
          { type: "li", text: "Dual braking calipers" },
          { type: "li", text: "Compartment control with position feedback" },
        ]
      },
      {
        type: "p",
        text: "However, several hidden issues emerged during development:"
      },
      {
        type: "ul",
        items: [
          { type: "li", bold: "Bus Contention and Timing", text: "Even with only four servos, command latency increases under load. A single servo timeout can momentarily freeze steering response." },
          { type: "li", bold: "Power Glitches", text: "Sudden high-torque movements (espically braking) caused voltage dips that reset servos mid-command. We solved this by providing the servo driver with a didicated, well-decoupled power rail." },
          { type: "li", bold: "Feedback Integrity", text: "Electromagnetic interference from the vehicle’s motors corrupted position feedback packets over UART. We switched to CAN bus for significantly improved reliability." }
        ]
      },
      {
        type: "quote",
        text: "Pro Tip: Always implement redundant mechanical limits and independent emergency stop circuits that completely bypass the servo bus."
      },
      { type: "h2", text: "Teleoperation Latency" },
      {
        type: "p",
        text: "Key challenges observed with Zooty include:"
      },
      {
        type: "ul",
        items: [
          { type: "li", text: "Video feed desynchronization from control commands." },
          { type: "li", text: "Operator disorientation when visual feedback lags behind actuator response." },
          { type: "li", text: "Packet loss during cellular tower handoffs." }
        ]
      },
      {
        type: "p",
        text: "Our mitigations include:"
      },
      {
        type: "ul",
        items: [
          { type: "li", text: "Multiple network path (primary 5G +  fallback 4G + local Wi-Fi)." },
          { type: "li", text: "Haptic feedback on the operator controller to signal rising latency." },
          { type: "li", text: "Predictive command extrapolation on the vehicle side using dead reckoning of the operator’s last known intent." }
        ]
      },
      {
        type: "image",
        src: teleoperate,
        alt: "Teleoperation"
      },
      { type: "h2", text: "Mechanical Integration and Custom Actuation Headaches" },
      {
        type: "p",
        text: "Building custom actuators quickly revealed the gap between hobby-grade components and true industrial reliability."
      },
      {
        type: "p",
        text: "The steering mechanism, in particular, demanded significantly more torque than a single ST3215 could deliver. This led us to develop a custom actuator using a <strong>BLDC motor (150KV)</strong> controlled by a custom PCB powered by the <strong>STSPIN3264</strong> microcontroller."
      },
      {
        type: "p",
        text: "Vibration, thermal expansion, dirt ingress, and cable fatigue caused repeated failures during extended field testing. Systems that performed flawlessly on the bench often broke down after long sessions of mixed-terrain driving."
      },
      { type: "h2", text: "Power Architecture and Thermal Management" },
      {
        type: "p",
        text: "The combination of the STM32MP2, high-torque servos, cameras, and cellular modem creates highly dynamic power demands. We learned the hard way that:"
      },
      {
        type: "ul",
        items: [
          { type: "li", text: "Peak currents during simultaneous brake and steering maneuvers could brown-out the system." },
          { type: "li", text: "Lithium battery voltage sag under load degraded servo performance." },
          { type: "li", text: "Heat generated by the STM32MP2 during video encoding required active cooling in enclosed compartments." }
        ]
      },
      {
        type: "p",
        text: "Our final design incorporates careful load balancing across multiple power domains and a dedicated monitoring system for temperature and voltage health."
      },
      { type: "h2", text: "Safety, Redundancy, and Regulatory Reality" },
      {
        type: "p",
        text: "Teleoperated vehicles still occupy a regulatory gray area in many regions. To address this, we implemented:"
      },
      {
        type: "ul",
        items: [
          { type: "li", text: "Manual override switches (both physical and remote)." },
          { type: "li", text: "Comprehensive real-time logging for post-incident analysis." },
          { type: "li", text: "Independent watchdog timers and fail-safe mechanisms." }
        ]
      },
      {
        type: "p",
        text: "Even with these measures, liability concerns remain significant. Every teleoperated vehicle must undergo rigorous auditing and validation to meet acceptable safety standards."
      },
      { type: "h2", text: "Final Thoughts for someone building in this space" },
      {
        type: "p",
        text: "Building Zooty has shown that a successful teleoperated vehicle is far more than bolting servos onto a chassis and adding a camera. It demands deep integration across mechanical, electrical, firmware, and software domains."
      },
      {
        type: "p",
        text: "The STM32MP2’s dual-core flexibility and the ST3215 servos provided a strong foundation, but the real differentiator was relentless attention to edge cases, redundancy, and real-world testing."
      },
      {
        type: "p",
        text: "If you’re starting your own robotic vehicle project, here’s my strongest advice: <strong>prototype the worst-case scenarios first</strong> — maximum load, minimum signal strength, highest vibration, and longest latency. Everything looks easy until you test those conditions."
      },
      {
        type: "p",
        text: "Zooty is now ready to be deployed in pilot programs, successfully handling repetitive and hazardous tasks that humans prefer to avoid. The hidden challenges were numerous, but solving them has been deeply rewarding."
      }
    ]
  },
  "Building-autonomous-vehicles-with-Zooty-Platform": {
    title: "Building autonomous vehicles with Zooty Platform",
    date: "2026-05-26",
    readTime: "3 min read",
    hero: { src: protypingCover, alt: "Zooty : Tele-op vehicle platform" },
    blocks: [
      { type: "h2", text: "Overview" },
      {
        type: "p",
        text: "In the fast-paced automotive industry, software features act as the primary driver of innovation. Major automakers are aggressively focusing on decoupling hardware from software, paving the way for the <strong>Software-Defined Vehicle (SDV)</strong>.",
      },
      {
        type: "p",
        text: "To innovate at the speed of software, developers need to be able to write code for a vehicle feature—like a battery optimization algorithm—without needing to know exactly which wire, CAN bus, or microcontroller is physically executing the command. They need an abstraction layer that lets them forget the lower levels and focus entirely on the high-level logic.",
      },
      {
        type: "image",
        src: zooty,
        alt: "Zooty",
        caption: "Zooty autonomous vehicle",
      },
      {
        type: "h3",
        text: "That’s where Zooty comes in:",
      },
      {
        type: "p",
        text: "Zooty platform is the foundational SDK for SDVs and Autonomous vehicles. The technology inside, called Molecule, acts as a robust base for developers to innovate in the growing fields of robotics and automotive engineering.",
      },
      {
        type: "image",
        src: molecule,
        alt: "Molecule",
        caption: "Molecule — Development kit for robotics",
      },
      {
        type: "p",
        text: "In the highly regulated automotive space, jumping straight into a production Adaptive AUTOSAR environment to test a new idea is expensive, slow, and requires massive overhead. <strong>Molecule acts as a high-speed prototyping abstraction layer</strong>.",
      },
      {
        type: "p",
        text: "Built on standard POSIX-compliant Linux, and utilizing lightweight, real-time, industry standard protocols, MOLECULE mimics the design patterns of a production Service-Oriented Architecture. It handles the translation between high-level application logic and low-level hardware components.",
      },
      {
        type: "p",
        text: "By providing this abstraction layer, Zooty and Molecule, together, allow developers to test the math, logic, and behavior of SDV applications in a forgiving sandbox. Because it aligns with the POSIX and SOA prerequisites of modern vehicle architectures, the logic built on the platform is highly transferable to formal production environments.",
      },
      { type: "h2", text: "What Can Developers Build on Zooty as a Platform?" },
      {
        type: "p",
        text: "By sitting securely on top of the deterministic systems, it allows developers to treat a vehicle like a highly advanced edge-computing device. Because the hardware is abstracted, developers can rapidly build smart applications and features.",
      },
      { type: "p", text: "Using the open-source SDK, developers can build:" },
      {
        type: "ul",
        items: [
          { type: "li", bold: "Real Time Fleet Telemetry", text: "Developers can easily build applications that package vehicle data into secure payloads, sending them to cloud dashboards. This allows for advanced battery analytics, geo-fencing for fleet managers, and test temporary performance boosts." },
          { type: "li", bold: "Autonomous Vehicle Systems", text: "With growing interest in autonomous vehicles, developers can build Computer vision applications which bridge the gap between high level artificial intelligence applications running on servers ( eg. VLA models, YOLO models ) to low level physical hardware execution." },
          { type: "li", bold: "Adaptive Cruise Control", text: "Developers can write Adaptive Cruise Control algorithms using the data coming from various sensors ( cameras, IMU, GPS etc. ) to trigger the physical hardware ensuring complete end to end implementation." },
          { type: "li", bold: "Lane following Algorithms", text: "Developers can build lane-following algorithms using OpenCV, AI models to detect lane boundaries using the camera streams." },
        ],
      },
      { type: "h2", text: "Conclusion:" },
      {
        type: "p",
        text: "As the automotive industry transitions from hardware-centric manufacturing to software-first ecosystems, the barrier to entry for innovation has never been higher. Zooty platform lowers that barrier, providing developers with the abstraction layer they need to build the next generation of Autonomous Vehicles.",
      },
    ],
  },
  "autonomous-navigation": {
    title: "The Compression of the Last Leg: The Autonomous Imperative in Hyper-Local Logistics",
    date: "2026-04-05",
    readTime: "6 min read",
    blocks: [
      {
        type: "image",
        src: autonomousCover,
        alt: "Zooty autonomous vehicle navigating a residential campus",
      },
      { type: "h2", text: "Overview" },
      {
        type: "p",
        text: "In the evolving landscape of global commerce, we are witnessing a fundamental shift in the \"Last Mile\" logistics framework. The traditional model, predicated on massive regional hubs and human-centric delivery routes, is being disrupted by a phenomenon we define as Hyper-Local Compression. As consumer expectations shift from \"next day\" to \"next minute,\" the logistics industry is hitting a ceiling of human efficiency and security.",
      },
      {
        type: "p",
        text: "The resolution to this friction lies not in more labor, but in the autonomous compartmentalization of the final 500 meters. This is the \"Last Leg\"—the most time consuming and sensitive segment of the supply chain.",
      },
      { type: "h2", text: "The Macro Trend: The Rise of the Dark Store Economy" },
      {
        type: "p",
        text: "The traditional retail footprint is being replaced by \"Dark Stores\"—micro-fulfillment centers strategically positioned in high-density urban areas. In India, the surge of Quick Commerce (Q-Commerce) has set a global benchmark for frequency and speed.",
      },
      { type: "h3", text: "The Data of Hyper-Local Delivery (India Market)" },
      {
        type: "table",
        headers: [
          "Provider",
          "Estimated Dark Stores (2021)",
          "Estimated Dark Stores (2026)",
          "Avg. Delivery Time (Min)",
          "Order Frequency Increase",
        ],
        rows: [
          ["Blinkit", "~150", "1800+", "12", "4.2x"],
          ["Zepto", "~40", "1000+", "10", "5.8x"],
          ["Instamart", "~180", "1000+", "15", "3.5x"],
          ["Amazon Fresh", "~50", "250+", "120", "2.1x"],
        ],
      },
      {
        type: "p",
        text: "This trend is not isolated to emerging markets. In the United States, the infrastructure is pivoting. DoorDash's \"DashMart\" and Uber's integration with autonomous robot fleets in cities like Jersey City indicate a global realization: human-driven delivery for a $5 latte or a single bag of chips is economically and logistically unsustainable.",
      },
      { type: "h2", text: "The Friction Point: Security, Privacy, and the Human Variable" },
      {
        type: "p",
        text: "As the frequency of deliveries increases, so does the \"surface area\" for security vulnerabilities. In high-density residential societies and corporate tech parks, the constant influx of external personnel poses a non-trivial risk to privacy and safety.",
      },
      {
        type: "p",
        text: "Recent discourse on social media platforms like X (formerly Twitter) highlights a growing concern regarding delivery-related security breaches. Reports of unauthorized access, harassment, and data privacy concerns are no longer outliers; they are systemic risks of a human-reliant last-mile system. For an individual, the convenience of a 10-minute delivery is increasingly weighed against the discomfort of an unknown person reaching their doorstep multiple times a day.",
      },
      { type: "h2", text: "Solving the Final 500 Meters: Enter Zooty" },
      {
        type: "p",
        text: "To bridge the gap between the dark store and the doorstep without compromising security, we must decouple the \"transport\" from the \"human.\"",
      },
      {
        type: "p",
        text: "Zooty is an autonomous micro-mobility robot engineered specifically for this \"Last Leg.\" Unlike long-range delivery drones or road-heavy vehicles, Zooty is optimized for the in-premise environment.",
      },
      { type: "h3", text: "The Engineering Core: The Molecule Board" },
      {
        type: "p",
        text: "At the heart of Zooty's autonomy is Molecule, a custom-built hardware development board. Molecule serves as the central nervous system, performing real-time sensor fusion from multiple depth cameras and inertial measurement units (IMUs).",
      },
      {
        type: "ul",
        items: [
          {
            bold: "Edge Computing",
            text: "Molecule processes navigation and AI decision-making locally, ensuring millisecond-level response times for obstacle avoidance.",
          },
          {
            bold: "Machine Learning",
            text: "The system utilizes a hybrid learning model, evolving through a combination of autonomous exploration and human-in-the-loop tele-operation.",
          },
        ],
      },
      { type: "h2", text: "The Economic Case Study: NIT Rourkela and the Campus Economy" },
      {
        type: "p",
        text: "The viability of this model is best demonstrated by the informal logistics economies emerging in closed campuses. At NIT Rourkela—a campus housing thousands of students—a significant logistical friction point existed: students were forced to walk to the main gate to collect parcels and food.",
      },
      {
        type: "p",
        text: "Enterprising students identified this \"Last Leg\" gap and began offering internal delivery services. In over a month, this peer-to-peer delivery network generated over 50,000 INR in revenue. This is a micro-market proof of concept. If a manual internal delivery system can generate such value in a single campus, an autonomous fleet like Zooty—operating 24/7 with zero labor cost—represents a massive untapped utility for the millions of people living in gated communities and tech parks.",
      },
      { type: "h2", text: "The Scale of Opportunity" },
      {
        type: "p",
        text: "The market for in-premise autonomous delivery is vast. India alone possesses:",
      },
      {
        type: "ul",
        items: [
          { bold: "2,500+", text: "Large-scale gated residential societies." },
          { bold: "1000+", text: "Integrated Tech Parks and SEZs." },
          { bold: "1,000+", text: "University and Institutional campuses." },
        ],
      },
      {
        type: "p",
        text: "By restricting outside personnel movement at the perimeter and allowing Zooty to handle the internal distribution, facilities can simultaneously enhance security and improve delivery speed.",
      },
      { type: "h2", text: "Conclusion: The Autonomous Inevitability" },
      {
        type: "p",
        text: "The transition from human-delivered parcels to autonomous last-leg fulfillment is not a matter of \"if,\" but \"when.\" As the cost of Molecule-based hardware continues to drop and AI navigation matures, the economic argument becomes undeniable.",
      },
      {
        type: "p",
        text: "The future of logistics is not just about moving goods from Point A to Point B; it is about the \"Last Leg\"—the invisible, autonomous, and secure movement of essentials right to your doorstep. Zooty is the physical manifestation of this logical evolution.",
      },
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
        src: sdvArchitecture,
        alt: "iCommuteX Visualized",
        caption: "Figure 2: X1 Visualized",
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
      <SEO
        title={`${blog.title} | Mazout Electric`}
        description={
          (blog.blocks?.find((b) => b.type === "p") as { text?: string } | undefined)?.text?.slice(0, 155) ||
          blog.body?.[0]?.slice(0, 155) ||
          "Insights from Mazout Electric on autonomous vehicles, EVs, and mobility."
        }
        path={`/blog/${slug}`}
        type="article"
        keywords="mazout, zooty, autonomous vehicle, electric vehicle, EV, mobility, logistics, ADAS"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog.title,
          datePublished: blog.date,
          author: { "@type": "Organization", name: "Mazout Electric" },
          publisher: { "@type": "Organization", name: "Mazout Electric" },
        }}
      />
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
                        dangerouslySetInnerHTML={{ __html: block.text }}
                      />
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
                  case "table":
                    return (
                      <figure key={i} className="my-8 overflow-x-auto rounded-xl border border-border">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-muted/20">
                              {block.headers.map((h, j) => (
                                <th
                                  key={j}
                                  className="text-left text-foreground font-medium px-4 py-3 border-b border-border"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, r) => (
                              <tr key={r} className="border-b border-border last:border-b-0">
                                {row.map((cell, c) => (
                                  <td
                                    key={c}
                                    className="text-muted-foreground px-4 py-3 align-top"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {block.caption && (
                          <figcaption className="text-muted-foreground text-sm italic px-4 py-2 text-center">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  default:
                    return null;
                }
              })
              : blog.body?.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
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
