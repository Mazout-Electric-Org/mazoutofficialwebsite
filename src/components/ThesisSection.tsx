import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Home, GraduationCap } from "lucide-react";
import presentationsBg from "@/assets/presentations.jpg";
import architectureBg from "@/assets/architure-diagram.png";
import iptifBg from "@/assets/IIT-ACB_IPTIF_Exhibition.jpg";
import humanoidBg from "@/assets/humanoid.png";
import moleculeBg from "@/assets/Molecule.jpeg";

gsap.registerPlugin(ScrollTrigger);

const N = 5;
const CROSSFADE_SCROLL_PER_STEP = 900; // px of scroll per panel transition
const TOTAL_SCROLL = CROSSFADE_SCROLL_PER_STEP * (N - 1);
const PLATEAU = 0.22; // |localPos| below this: fully settled, opaque
const FADE_EDGE = 0.78; // |localPos| above this: fully hidden — kept > 0.5 so neighbors overlap and crossfade instead of cutting to black at the midpoint

const panelBackgrounds = [presentationsBg, architectureBg, iptifBg, humanoidBg, moleculeBg];

const stackItems = [
  "Intelligent robotic actuators",
  "Autonomous mobile robot platforms",
  "Robot controllers and embedded electronics",
  "Open robotics SDKs",
  "AI-ready hardware platforms",
  "Drive-by-wire mobility systems",
  "Development and education platforms",
];

const focusAreas = [
  {
    icon: Factory,
    title: "Industrial Automation",
    desc: "Factories worldwide face labor shortages while productivity demand rises. Physical AI enables autonomous inspection, material handling, machine tending, warehouse automation, assembly, and collaborative manufacturing.",
    link: { label: "Check robotic actuators", href: "/robotic-actuators" },
  },
  {
    icon: Home,
    title: "Home Automation",
    desc: "As populations age and urbanization increases, intelligent robots will become everyday assistants — from household chores and elderly care to indoor logistics and home maintenance.",
  },
  {
    icon: GraduationCap,
    title: "Education & Research",
    desc: "Students, researchers, startups, and universities should be able to experiment with production-grade robotics without building everything from scratch.",
    link: { label: "Check Zooty", href: "/training-platform" },
  },
];

const amplifiers = [
  "Steam engines amplified strength.",
  "Computers amplified calculation.",
  "The internet amplified communication.",
  "Artificial Intelligence amplifies cognition.",
];

const ThesisSection = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP's color tween can't parse a raw `var()` inside hsl(), so resolve the
      // custom properties to concrete values once up front instead.
      const rootStyle = getComputedStyle(document.documentElement);
      const primaryColor = `hsl(${rootStyle.getPropertyValue("--primary")})`;
      const mutedColor = `hsl(${rootStyle.getPropertyValue("--muted-foreground")} / 0.4)`;

      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: `+=${TOTAL_SCROLL}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const scaled = self.progress * (N - 1);
          for (let i = 0; i < N; i++) {
            const localPos = scaled - i;
            const absPos = Math.abs(localPos);
            const falloff = (edge: number) =>
              absPos <= PLATEAU ? 1 : absPos < edge ? 1 - (absPos - PLATEAU) / (edge - PLATEAU) : 0;
            // Backgrounds use a wide overlap so they crossfade into each other instead of
            // both hitting 0 at the same instant at the midpoint. Text uses a tighter
            // overlap so two panels' copy is never both readable at once.
            const bgOpacity = falloff(FADE_EDGE);
            const contentOpacity = falloff(0.5);

            if (bgRefs.current[i]) gsap.set(bgRefs.current[i], { opacity: bgOpacity });
            if (contentRefs.current[i]) {
              gsap.set(contentRefs.current[i], {
                opacity: contentOpacity,
                pointerEvents: contentOpacity > 0.5 ? "auto" : "none",
              });
            }
            if (dotRefs.current[i]) {
              gsap.set(dotRefs.current[i], {
                backgroundColor: absPos < 0.5 ? primaryColor : mutedColor,
              });
            }
          }
        },
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="physical-ai-thesis" className="relative border-t border-border bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-12 lg:pb-16">
        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">
          The Physical AI Thesis
        </p>
        <h2 className="text-4xl lg:text-6xl font-light leading-[1.05]">
          Five ideas.
          <br />
          One future.
        </h2>
      </div>

      <div ref={pinRef} className="relative h-screen overflow-hidden">
        {panelBackgrounds.map((bg, i) => (
          <div
            key={i}
            ref={(el) => (bgRefs.current[i] = el)}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <img src={bg} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
          </div>
        ))}

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
          {panelBackgrounds.map((_, i) => (
            <div
              key={i}
              ref={(el) => (dotRefs.current[i] = el)}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"
            />
          ))}
        </div>

        <div className="relative z-10 h-full max-w-[1400px] mx-auto">
          {/* 01/05 — Why Physical AI Matters */}
          <div
            ref={(el) => (contentRefs.current[0] = el)}
            className="absolute inset-y-0 inset-x-6 lg:inset-x-12 flex flex-col justify-center"
            style={{ opacity: 1 }}
          >
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.28em] text-primary mb-3">01 / 05</div>
              <h3 className="text-3xl lg:text-4xl font-light mb-5">Why Physical AI Matters</h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-3">
                Today, more than 3.5 billion people participate in the global workforce,
                performing trillions of hours of physical labor every year. Manufacturing,
                logistics, agriculture, healthcare, construction, domestic services, and
                infrastructure all depend on human effort for repetitive, hazardous, or
                labor-intensive tasks.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-3">
                While software has automated information, physical work remains largely
                untouched.
              </p>
              <p className="text-sm lg:text-base text-foreground/90 leading-relaxed mb-3">
                This creates one of humanity's biggest bottlenecks—not intelligence, but
                execution.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Physical AI bridges this gap by allowing machines to perform real-world tasks
                safely, continuously, and at scale, enabling humans to focus on creativity,
                discovery, and higher-value decision making.
              </p>
            </div>
          </div>

          {/* 02/05 — Building the Physical AI Stack */}
          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className="absolute inset-y-0 inset-x-6 lg:inset-x-12 flex flex-col justify-center"
            style={{ opacity: 0 }}
          >
            <div className="max-w-3xl lg:max-w-5xl">
              <div className="text-xs uppercase tracking-[0.28em] text-primary mb-3">02 / 05</div>
              <h3 className="text-3xl lg:text-4xl font-light mb-5">
                Building the Physical AI Stack
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-2">
                Physical intelligence requires far more than software. It demands reliable
                hardware that can continuously sense, move, communicate, and interact with the
                physical world.
              </p>
              <p className="text-sm lg:text-base text-foreground/90 leading-relaxed mb-4">
                Mazout Electric is building the foundational technologies that enable this
                transition:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {stackItems.map((item) => (
                  <li key={item} className="text-sm text-foreground/85 flex items-start gap-2.5">
                    <span className="text-primary mt-1 text-xs">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 03/05 — Where We Focus */}
          <div
            ref={(el) => (contentRefs.current[2] = el)}
            className="absolute inset-y-0 inset-x-6 lg:inset-x-12 flex flex-col justify-center"
            style={{ opacity: 0 }}
          >
            <div className="max-w-3xl lg:max-w-5xl">
              <div className="text-xs uppercase tracking-[0.28em] text-primary mb-3">03 / 05</div>
              <h3 className="text-3xl lg:text-4xl font-light mb-6">Where We Focus</h3>
              <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-5 rounded-xl border border-border bg-background/40 backdrop-blur-sm"
                  >
                    <area.icon className="text-primary mb-3" size={20} />
                    <div className="text-base font-medium mb-2">{area.title}</div>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed mb-3">
                      {area.desc}
                    </p>
                    {area.link && (
                      <Link
                        to={area.link.href}
                        className="text-primary text-xs inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300"
                      >
                        {area.link.label} <span>→</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 04/05 — Intelligence Needs a Body */}
          <div
            ref={(el) => (contentRefs.current[3] = el)}
            className="absolute inset-y-0 inset-x-6 lg:inset-x-12 flex flex-col justify-center"
            style={{ opacity: 0 }}
          >
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.28em] text-primary mb-3">04 / 05</div>
              <h3 className="text-3xl lg:text-4xl font-light mb-5">Intelligence Needs a Body</h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
                Every major leap in civilization has been driven by tools that amplified human
                capability.
              </p>
              <ul className="space-y-1.5 mb-4">
                {amplifiers.map((line) => (
                  <li key={line} className="text-sm lg:text-base leading-relaxed text-foreground/80">
                    {line}
                  </li>
                ))}
                <li className="text-sm lg:text-base leading-relaxed text-primary font-medium">
                  Physical AI amplifies action.
                </li>
              </ul>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                When intelligence is combined with reliable robotic systems, machines become
                capable of executing work continuously across manufacturing floors, hospitals,
                farms, warehouses, homes, and cities.
              </p>
            </div>
          </div>

          {/* 05/05 — Toward an Age of Abundance */}
          <div
            ref={(el) => (contentRefs.current[4] = el)}
            className="absolute inset-y-0 inset-x-6 lg:inset-x-12 flex flex-col justify-center"
            style={{ opacity: 0 }}
          >
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.28em] text-primary mb-3">05 / 05</div>
              <h3 className="text-3xl lg:text-4xl font-light mb-5">Toward an Age of Abundance</h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-3">
                Human civilization has always been constrained by two fundamental resources:{" "}
                <span className="text-foreground/90">Energy</span> and{" "}
                <span className="text-foreground/90">Labor</span>.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-3">
                As clean energy becomes increasingly abundant and affordable, the remaining
                constraint becomes physical execution. Robots powered by abundant energy can
                operate continuously, increasing productivity without proportional increases in
                human labor.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-3">
                This transition has the potential to dramatically lower the cost of
                manufacturing, logistics, food production, healthcare, and infrastructure while
                improving quality of life across society.
              </p>
              <p className="text-sm lg:text-base text-primary font-medium">
                Abundance is created when intelligence, energy, and automation work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;
