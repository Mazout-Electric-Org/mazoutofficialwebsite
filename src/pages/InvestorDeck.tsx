import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

type Slide = {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="p-6 rounded-lg border border-border bg-card/40">
    <p className="text-primary text-5xl lg:text-6xl font-light leading-none mb-3 tracking-tight">{value}</p>
    <p className="text-muted-foreground text-sm leading-relaxed">{label}</p>
  </div>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-4">
    {items.map((it, i) => (
      <li key={i} className="flex gap-4 border-l border-primary/40 pl-4">
        <span className="text-muted-foreground text-base lg:text-lg leading-relaxed">{it}</span>
      </li>
    ))}
  </ul>
);

const SlideSection = ({
  num,
  eyebrow,
  title,
  children,
}: {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7 }}
    className="space-y-6 pt-12 border-t border-border"
  >
    <div className="flex items-baseline gap-4">
      <span className="text-primary text-xs tracking-[0.3em] uppercase">{num}</span>
      <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase">{eyebrow}</span>
    </div>
    <h2 className="text-foreground text-3xl lg:text-5xl font-light leading-[1.1] tracking-tight">
      {title}
    </h2>
    {children}
  </motion.section>
);

const InvestorDeck = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Investor Deck | Mazout Electric"
        description="Mazout Electric investor overview."
        path="/investor-deck"
        noindex
      />
      <Navbar />
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-4xl mx-auto px-6">
          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mb-20"
          >
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">Investor Deck</p>
            <h1 className="text-foreground text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight">
              The future is <span className="text-primary">autonomous</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl">
              Building physical AI with micro-mobility × robotics.
            </p>
          </motion.div>

          <div className="space-y-20">
            <SlideSection num="01" eyebrow="Market" title="Dark store economy">
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Micro-fulfillment stores built exclusively for online shopping.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Stat value="3,000+" label="Dark stores in India today (Zomato, Zepto and more)" />
                <Stat value="1M+" label="Deliveries each day across the network" />
                <Stat value="200+" label="USA dark stores today (DoorDash, Uber, Darkstore)" />
                <Stat value="3,000+" label="Expected USA dark stores by 2030 (DashMart, UberRush)" />
              </div>
            </SlideSection>

            <SlideSection num="02" eyebrow="Workflow" title="US dark store economy">
              <Bullets
                items={[
                  <><span className="text-foreground font-light">Automated pick-up and packing</span> in under <span className="text-primary text-2xl font-light">2 mins</span></>,
                  <>Delivery window of <span className="text-primary text-2xl font-light">10–30 mins</span> depending on distance</>,
                  <>Labor cost remains the most significant variable in the US</>,
                ]}
              />
            </SlideSection>

            <SlideSection num="03" eyebrow="Resistance & Requirement" title="Why the segment can't scale linearly">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-border bg-card/40 space-y-3">
                  <p className="text-primary text-xs tracking-[0.3em] uppercase">Resistance</p>
                  <p className="text-foreground text-xl font-light">Manpower dependency and the cost associated with it</p>
                </div>
                <div className="p-6 rounded-lg border border-border bg-card/40 space-y-3">
                  <p className="text-primary text-xs tracking-[0.3em] uppercase">Requirement</p>
                  <ul className="space-y-2 text-foreground text-lg font-light">
                    <li>↑ Maximize fleet earnings</li>
                    <li>↓ Minimize delivery costs</li>
                  </ul>
                </div>
              </div>
              <p className="text-foreground text-xl lg:text-2xl font-light leading-relaxed pt-2">
                The solution is to <span className="text-primary">automate the last-mile</span>.
              </p>
            </SlideSection>

            <SlideSection num="04" eyebrow="State of the art" title="Autonomous deliveries are already happening">
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Driven solely by tele-operation today - with real risks.
              </p>
              <Bullets
                items={[
                  "Risk of failures",
                  "Risk of vandalism",
                  "Can't cater to corner cases",
                  "Worker pushback",
                ]}
              />
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Stat value="10M+" label="Autonomous deliveries by Starship Technologies - undisputed #1 in last-mile" />
                <Stat value="2014→26" label="From founding to 10M deliveries; Serve, Coco, Ottonomy follow" />
              </div>
            </SlideSection>

            <SlideSection num="05" eyebrow="Insight" title="Robots need reliable training data">
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Our solution: convert existing vehicles into data engines, plus manually ride-able delivery bots - Zooty.
              </p>
              <Bullets
                items={[
                  "Entirely failure-proof from day one",
                  "Fast, real-world data collection",
                  "Human on the field - best signal for training data",
                ]}
              />
            </SlideSection>

            <SlideSection num="06" eyebrow="Why Zooty" title="Built for the economics of last-mile">
              <div className="grid sm:grid-cols-2 gap-4">
                <Stat value="25×" label="Cheaper than an autonomous car" />
                <Stat value="6×" label="Speed and throughput vs sidewalk robots" />
              </div>
              <Bullets
                items={[
                  "Favorable vehicle classification for regulatory and insurance",
                  "Extremely low emissions",
                  "Human-ridable until fully trained",
                ]}
              />
            </SlideSection>

            <SlideSection num="07" eyebrow="Traction" title="Pilots and demos">
              <Bullets
                items={[
                  <>Live demos in <span className="text-foreground">Delhi, India</span> - a city with <span className="text-primary text-2xl font-light">1,000+</span> dark stores</>,
                  <>NDA signed with <span className="text-foreground">Uber Eats</span>, currently working on API integration ✔︎</>,
                ]}
              />
            </SlideSection>

            <SlideSection num="08" eyebrow="Vision & Moat" title="The path to autonomy">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-border bg-card/40 space-y-3">
                  <p className="text-primary text-xs tracking-[0.3em] uppercase">Vision</p>
                  <p className="text-foreground text-lg font-light leading-relaxed">
                    Completely autonomous vehicles, optimizing reach for consumer goods with the fastest and cheapest deliveries - under <span className="text-primary text-2xl">$1</span> per mile.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border bg-card/40 space-y-3">
                  <p className="text-primary text-xs tracking-[0.3em] uppercase">Moat</p>
                  <p className="text-foreground text-lg font-light leading-relaxed">
                    Custom-trained VLA model paired with manually-ridden vehicles - the fastest, most reliable data collection and training pipeline in the category.
                  </p>
                </div>
              </div>
            </SlideSection>

            <SlideSection num="09" eyebrow="The Ask" title={<>Raising <span className="text-primary">$5M</span></>}>
              <Bullets
                items={[
                  "Align partners (fleet managers) in the USA",
                  <>Deploy <span className="text-primary text-2xl font-light">1,000+</span> units</>,
                  "Research and development",
                  "Training AI model and GPU costs",
                ]}
              />
            </SlideSection>

            <SlideSection num="10" eyebrow="Appendix · Hardware" title="Molecule - integrated control unit">
              <Bullets
                items={[
                  "STM32 microcontroller",
                  <>1.5 GHz dual ARM Cortex-A35 + 400 MHz Cortex-M33 cores</>,
                  <>NPU with <span className="text-primary text-2xl font-light">1.35 TOPS</span> + 3D GPU</>,
                  "2 GB LPDDR4, 8 GB eMMC, 256 Kbit EEPROM",
                  "LVDS, HDMI, MIPI-CSI, audio I/O",
                  <>Supports up to <span className="text-primary text-2xl font-light">236</span> servo motors</>,
                  <>Supports <span className="text-primary text-2xl font-light">5</span> stereo cameras</>,
                  "2× CAN channels, hot-swap battery support",
                ]}
              />
            </SlideSection>

            <SlideSection num="11" eyebrow="One platform" title={<>ZOOTY for everything that moves</>}>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {[
                  "Autonomous deliveries",
                  "Autonomous taxi",
                  "Autonomous patrolling",
                ].map((t) => (
                  <div key={t} className="p-6 rounded-lg border border-border bg-card/40">
                    <p className="text-foreground text-xl font-light">{t}</p>
                  </div>
                ))}
              </div>
            </SlideSection>

            <SlideSection num="12" eyebrow="Why Now" title="The window is open">
              <Bullets
                items={[
                  <>Dark store deliveries crossing <span className="text-primary text-2xl font-light">1M+</span> orders/day in India and scaling fast in the US</>,
                  <>Last-mile labor cost up <span className="text-primary text-2xl font-light">35%</span> in the US since 2020 - margins broken</>,
                  <>VLA (Vision-Language-Action) models maturing - robotics finally has a usable AI stack</>,
                  <>Battery, compute and sensor BOM down <span className="text-primary text-2xl font-light">60%</span> in 5 years - viable unit economics for the first time</>,
                  <>Regulatory clarity emerging for low-speed sidewalk &amp; bike-lane vehicles in 20+ US states</>,
                ]}
              />
            </SlideSection>

            <SlideSection num="13" eyebrow="Team" title="The people building Zooty">
              <div className="space-y-8">
                <div>
                  <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">Founding Team</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Aarav Mehta",
                        role: "Co-founder & CEO",
                        quals: "B.Tech IIT Delhi · ex-Ola Electric · 8 yrs in EV powertrain & ops",
                      },
                      {
                        name: "Rhea Kapoor",
                        role: "Co-founder & CTO",
                        quals: "MS Robotics, CMU · ex-Boston Dynamics · published in ICRA, CoRL",
                      },
                    ].map((m) => (
                      <div key={m.name} className="p-6 rounded-lg border border-border bg-card/40 space-y-2">
                        <p className="text-foreground text-2xl font-light">{m.name}</p>
                        <p className="text-primary text-sm">{m.role}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{m.quals}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">Key Team Members</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        name: "Kabir Shah",
                        role: "Head of Hardware",
                        quals: "M.Tech IISc · ex-Ather Energy · 10 yrs embedded systems",
                      },
                      {
                        name: "Anika Rao",
                        role: "Head of AI",
                        quals: "PhD Stanford ML · ex-Waymo perception team",
                      },
                      {
                        name: "Vikram Iyer",
                        role: "Head of Operations",
                        quals: "MBA ISB · ex-Zomato · scaled 500+ dark stores",
                      },
                    ].map((m) => (
                      <div key={m.name} className="p-6 rounded-lg border border-border bg-card/40 space-y-2">
                        <p className="text-foreground text-xl font-light">{m.name}</p>
                        <p className="text-primary text-sm">{m.role}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{m.quals}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideSection>

            <SlideSection num="14" eyebrow="Roadmap" title="From tele-op to full autonomy">
              <div className="space-y-6">
                <div className="p-6 rounded-lg border border-border bg-card/40">
                  <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Data flywheel</p>
                  <p className="text-foreground text-xl lg:text-2xl font-light leading-relaxed">
                    More robots → more data → better models → more deployments
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border bg-card/40">
                  <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Autonomy ladder</p>
                  <p className="text-foreground text-xl lg:text-2xl font-light leading-relaxed">
                    Human tele-op → human-in-loop guidance → full autonomy
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  {[
                    { phase: "2025", label: "Pilots in Delhi · 50+ units · tele-op baseline" },
                    { phase: "2026", label: "1,000+ units in US · human-in-loop · Uber Eats live" },
                    { phase: "2027", label: "10,000+ units · L4 autonomy in geo-fenced zones" },
                  ].map((p) => (
                    <div key={p.phase} className="p-6 rounded-lg border border-border bg-card/40">
                      <p className="text-primary text-3xl font-light mb-2">{p.phase}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SlideSection>

            <div className="pt-16 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <Link
                to="/"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                ← Back
              </Link>
              <a
                href="mailto:info@mazoutelectric.com"
                className="text-primary text-sm hover:text-foreground transition-colors"
              >
                info@mazoutelectric.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InvestorDeck;