import { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Minus,
    Plus,
    Trash2,
    Github,
    X,
    Cpu,
    Zap,
    Radio,
    Battery,
    CircuitBoard,
    Gauge,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Dialog,
    DialogContent,
    DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import ActuatorScene from "@/components/actuator/ActuatorScene";
import type { ActuatorHandle } from "@/components/actuator/ActuatorModel";
import { useProgress } from "@react-three/drei";

import img1 from "@/assets/Render1.png";
import img2 from "@/assets/zooty-render-hero.png";
import img3 from "@/assets/zooty-hero.png";
import img4 from "@/assets/actuator_mechnical_drawing.png";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    { src: img1, alt: "Mazout robotic actuator — compact BLDC unit" },
    { src: img2, alt: "Robotic actuator sizes and variants" },
    { src: img3, alt: "Actuator with harmonic gear attachment" },
    { src: img4, alt: "Mechanical drawing of the actuator with dimensions" },
];

const features = [
    { icon: Cpu, title: "FOC firmware", desc: "Field-oriented control for smooth torque and high efficiency." },
    { icon: Zap, title: "Tailored power", desc: "Sized to your payload, torque, and duty-cycle requirements." },
    { icon: Radio, title: "CAN bus control", desc: "Monitor and command every parameter over CAN in real time." },
    { icon: Battery, title: "Low power draw", desc: "Optimized standby and active current for long-run robotics." },
    { icon: CircuitBoard, title: "Custom controller", desc: "Powerful in-house driver board built for precise motion." },
    { icon: Gauge, title: "High torque", desc: "Designed for demanding humanoid and heavy-load applications." },
];

const breakdownData = [
    {
        title: "BLDC Motor",
        desc: "Brushless DC (BLDC) motor delivers smooth, precise, and reliable motion with low maintenance and high efficiency — making it ideal for demanding robotic applications.",
        bullets: ["Efficiency: Up to 90–95%", "High torque-to-weight ratio", "Voltage range: 24–54V"],
    },
    {
        title: "Cycloidal Reducer",
        desc: "Cycloidal reducer provides high torque multiplication, exceptional positioning accuracy, and excellent shock resistance in a compact, lightweight transmission system.",
        bullets: ["Reduction ratio: 50:1", "Backlash: As low as <1 arc-min", "High shock load capacity", "Compact, high torque density"],
    },
    {
        title: "FOC Controller Board",
        desc: "Field-Oriented Control (FOC) delivers precise torque regulation, smooth low-speed operation, and high efficiency for responsive robotic motion and accurate position control.",
        bullets: ["Current loop frequency: Up to 20–40 kHz", "High torque accuracy", "Low acoustic noise", "Fast dynamic response"],
    },
    {
        title: "Magnetic Encoder",
        desc: "A high-resolution magnetic encoder provides accurate position and velocity feedback for precise motion control.",
        bullets: ["Resolution: Up to 16–20 bits", "Absolute or incremental sensing", "Contactless operation"],
    },
    {
        title: "CAN Control",
        desc: "CAN communication enables reliable, real-time control of multiple robotic actuators with deterministic performance and robust noise immunity.",
        bullets: ["Bus speed: Up to 1 Mbps (Classical CAN)", "Multi-node communication", "High EMI immunity", "Low-latency real-time control"],
    },
    {
        title: "Compact Housing",
        desc: "An integrated housing combines the motor, gearbox, encoder, and controller into a single compact 3D-printed package, simplifying installation and improving overall system reliability.",
        bullets: ["All-in-one integrated design", "Reduced wiring complexity", "Faster prototyping", "Easy mechanical integration"],
    },
];

const specs: Array<[string, string]> = [
    ["Motor type", "BLDC, sensored, FOC"],
    ["Rated voltage", "24 – 48 V DC"],
    ["Rated torque", "12 Nm (peak 36 Nm)"],
    ["Reduction ratio", "1:50 harmonic"],
    ["Encoder", "17-bit absolute magnetic"],
    ["Communication", "CAN 2.0B, up to 1 Mbps"],
    ["Control modes", "Position / Velocity / Torque"],
    ["Weight", "~750 g"],
    ["Diameter × Height", "Ø90 mm × 40 mm"],
    ["Operating temp.", "-10 °C to +60 °C"],
    ["Protection", "IP54"],
    ["Firmware", "FOC, CAN, OTA capable"],
];

const applications = ["Humanoid robots", "Autonomous vehicles", "Robotic arms", "Robot dogs"];
const customers = ["Starforge", "ETA"];

const faqs = [
    { q: "Is the actuator plug and play?", a: "Yes. Every unit ships pre-tuned with FOC firmware and a default CAN ID map. Power it, connect CAN, and it responds to standard position, velocity, and torque commands out of the box." },
    { q: "Is the firmware programmable?", a: "Yes. The controller supports OTA firmware updates and exposes tunable parameters (PID gains, current limits, CAN IDs) over CAN. Advanced users can request the SDK for custom control loops." },
    { q: "Can I customize the actuator?", a: "Absolutely. Reduction ratio, motor winding, connector type, housing, and controller peripherals can all be tailored to your robot. Use the Enquire form to share your requirements." },
    { q: "What is the control loop latency?", a: "Torque loop runs at 20 kHz internally. Over CAN at 1 Mbps, host-to-actuator command latency is under 1 ms per frame, suitable for high-bandwidth robotics control." },
    { q: "What is the lead time and warranty?", a: "35 units are in stock for immediate dispatch. The next production batch has a 4-week lead time. All actuators ship with a 1-year manufacturer warranty." },
];

const upsells = [
    { name: "ST-Link Programmer", price: 25, desc: "In-circuit debugger/programmer for STM32-based controllers.", specs: "USB 2.0, SWD/JTAG, compatible with STM32CubeIDE." },
    { name: "Mechanical Tool Set", price: 40, desc: "Precision hex, torx, and screwdriver kit for actuator assembly.", specs: "38-piece set, CRV steel, magnetic tips." },
    { name: "CAN Transceiver", price: 18, desc: "USB-to-CAN adapter for host monitoring and control.", specs: "CAN 2.0B, up to 1 Mbps, isolated." },
    { name: "Metal Gears 3:1", price: 30, desc: "Additional 3:1 metal gear stage for extended reduction.", specs: "Hardened steel, 3:1 ratio, direct-fit." },
    { name: "Jumper Wires Set", price: 8, desc: "Assorted M-M, M-F, F-F silicone jumper wires.", specs: "120 pcs, 20 cm, 24 AWG." },
    { name: "Temperature Gun", price: 35, desc: "Non-contact IR thermometer for thermal validation.", specs: "-50 to 550 °C, 12:1 D:S ratio." },
    { name: "Digital Multimeter", price: 45, desc: "True-RMS DMM for electrical bring-up and debugging.", specs: "6000 count, TRMS, CAT III 600V." },
    { name: "Soldering Kit", price: 55, desc: "Temperature-controlled iron with tips, solder and flux.", specs: "60W, 200–450 °C, ESD safe." },
];

const ACTUATOR_PRICE = 500;

const RoboticActuators = () => {
    const [actuatorQty, setActuatorQty] = useState(1);
    const [cart, setCart] = useState<Record<string, number>>({});
    const [popupItem, setPopupItem] = useState<(typeof upsells)[number] | null>(null);
    const [mechOpen, setMechOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [enquiry, setEnquiry] = useState({ fullName: "", company: "", email: "", phone: "", query: "" });
    const [enquirySent, setEnquirySent] = useState(false);
    const { toast } = useToast();

    // --- Breakpoint tracking. Single source of truth for which layout mode we're in. ---
    // lg (1024px) matches the Tailwind `lg:` prefix used everywhere else in this file —
    // keep this in sync if you ever change the breakpoint elsewhere.
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : true
    );

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const update = () => setIsDesktop(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    const modelRef = useRef<ActuatorHandle>(null);
    const breakdownRef = useRef<HTMLElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const overviewRef = useRef<HTMLElement>(null);
    const canvasWrapRef = useRef<HTMLDivElement>(null);
    const mobileCanvasWrapRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const breakdownPinRef = useRef<HTMLDivElement>(null);
    const stepElsRef = useRef<(HTMLDivElement | null)[]>([]);

    const cartTotal = useMemo(() => {
        const upsellTotal = upsells.reduce((sum, u) => sum + (cart[u.name] || 0) * u.price, 0);
        return actuatorQty * ACTUATOR_PRICE + upsellTotal;
    }, [cart, actuatorQty]);

    const addToCart = (name: string) => setCart((c) => ({ ...c, [name]: (c[name] || 0) + 1 }));
    const removeFromCart = (name: string) =>
        setCart((c) => {
            const next = { ...c, [name]: Math.max(0, (c[name] || 0) - 1) };
            if (next[name] === 0) delete next[name];
            return next;
        });

    const handleEnquiry = (e: React.FormEvent) => {
        e.preventDefault();
        setEnquirySent(true);
        toast({ title: "Enquiry received", description: "We will get back to you in 24 hours." });
        setTimeout(() => {
            setEnquiry({ fullName: "", company: "", email: "", phone: "", query: "" });
            setEnquirySent(false);
        }, 4000);
    };

    const { progress, active } = useProgress();
    const [pageReady, setPageReady] = useState(false);

    useEffect(() => {
        // active goes true->false once all tracked loaders (incl. the GLB) finish.
        // Small delay avoids a flash-of-ready if progress hits 100 for one tick then rechecks.
        if (!active && progress >= 100) {
            const t = setTimeout(() => setPageReady(true), 200);
            return () => clearTimeout(t);
        }
    }, [active, progress]);

    // ------- Toggle this to true while testing to see exact trigger boundaries -------
    const DEBUG_MARKERS = false;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tryInit = () => {
                const group = modelRef.current?.group;
                if (
                    !group ||
                    !heroRef.current ||
                    !overviewRef.current ||
                    !breakdownRef.current ||
                    !featuresRef.current ||
                    !canvasWrapRef.current
                ) {
                    requestAnimationFrame(tryInit);
                    return;
                }

                modelRef.current!.setIdle(true);
                modelRef.current!.setClipProgress(0);

                let masterST: ScrollTrigger;

                if (isDesktop) {
                    gsap.set(canvasWrapRef.current, { autoAlpha: 1, xPercent: 100 });

                    const clipProxy = { value: 0 };
                    const master = gsap.timeline({ paused: true });

                    const buildTrigger = () => {
                        if (masterST) masterST.kill();
                        masterST = ScrollTrigger.create({
                            trigger: heroRef.current,
                            start: "top top",
                            endTrigger: featuresRef.current,
                            end: "top 70%",
                            scrub: true,
                            markers: DEBUG_MARKERS,
                            invalidateOnRefresh: true,
                            onRefresh: (self) => {
                                const startPx = self.start;
                                const endPx = self.end;
                                const totalPx = endPx - startPx;
                                const pxOf = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

                                const fOverview = gsap.utils.clamp(0.02, 0.95, (pxOf(overviewRef.current!) - startPx) / totalPx);
                                const fBreakdown = gsap.utils.clamp(fOverview + 0.02, 0.97, (pxOf(breakdownRef.current!) - startPx) / totalPx);
                                const fFadeStart = gsap.utils.clamp(fBreakdown + 0.02, 0.98, 0.88);

                                master.clear();
                                master.to(canvasWrapRef.current, { xPercent: 0, ease: "none", duration: fOverview }, 0);
                                master.to(canvasWrapRef.current, { xPercent: 100, ease: "none", duration: fBreakdown - fOverview }, fOverview);
                                master.to(canvasWrapRef.current, { autoAlpha: 0, ease: "none", duration: 1 - fFadeStart }, fFadeStart);
                                master.to(clipProxy, {
                                    value: 1, ease: "none", duration: 1,
                                    onUpdate: () => modelRef.current?.setClipProgress(clipProxy.value),
                                }, 0);
                                master.progress(self.progress);
                            },
                            onUpdate: (self) => master.progress(self.progress),
                        });
                    };
                    buildTrigger();
                } else {
                    // MOBILE/TABLET: canvas never moves, never fades. Only clipProgress
                    // animates, driven by the exact same scroll span as desktop (hero -> features),
                    // so it's the same single continuous cycle, just without the position/opacity tweens.
                    gsap.set(canvasWrapRef.current, { autoAlpha: 1 });

                    masterST = ScrollTrigger.create({
                        trigger: heroRef.current,
                        start: "top top",
                        endTrigger: featuresRef.current,
                        end: "top 70%",
                        scrub: true,
                        markers: DEBUG_MARKERS,
                        invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            modelRef.current?.setClipProgress(self.progress);
                        },
                    });
                }

                ScrollTrigger.refresh();
            };
            tryInit();
        });
        return () => ctx.revert();
    }, [isDesktop]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tryInit = () => {
                if (!breakdownPinRef.current || stepElsRef.current.filter(Boolean).length !== breakdownData.length) {
                    requestAnimationFrame(tryInit);
                    return;
                }

                const N = breakdownData.length;

                // Pin duration: how much scroll distance the whole cycle takes.
                // Bump the multiplier up for a slower, more deliberate crossfade; down for snappier.
                const scrollDistancePerStep = 450; // px, THE knob for pacing
                const totalScroll = scrollDistancePerStep * (N - 1);

                ScrollTrigger.create({
                    trigger: breakdownPinRef.current,
                    start: "top top",
                    end: `+=${totalScroll}`,
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const scaled = self.progress * (N - 1);

                        stepElsRef.current.forEach((el, i) => {
                            if (!el) return;
                            const distance = Math.abs(scaled - i);

                            // Plateau covers distance 0 -> plateauEdge, fully sharp/opaque.
                            // Transition covers plateauEdge -> 0.5 (the midpoint to the neighbor) — completes
                            // BEFORE reaching the neighbor's own plateau, so there's no window where both
                            // items are simultaneously above ~0 opacity.
                            const plateauEdge = 0.3; // portion of the half-gap that's a dead plateau
                            const transitionEnd = 0.5;

                            let opacity: number;
                            let blur: number;

                            if (distance <= plateauEdge) {
                                opacity = 1;
                                blur = 0;
                            } else if (distance < transitionEnd) {
                                const t = (distance - plateauEdge) / (transitionEnd - plateauEdge); // 0 -> 1
                                opacity = 1 - t;
                                blur = Math.sin(t * Math.PI) * maxBlur;
                            } else {
                                opacity = 0;
                                blur = 0;
                            }

                            const y = gsap.utils.clamp(-24, 24, (scaled - i) * 24);

                            gsap.set(el, {
                                opacity,
                                y,
                                filter: `blur(${blur}px)`,
                                pointerEvents: opacity > 0.5 ? "auto" : "none",
                            });
                        });
                    },
                });

                ScrollTrigger.refresh();
            };
            tryInit();
        });
        return () => ctx.revert();
    }, []);

    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Mazout Robotic Actuator — BLDC Integrated Unit",
        description: "Custom robotic actuator integrating a BLDC motor, harmonic reducer, encoder and FOC motor controller. Made in India by Mazout Electric.",
        brand: { "@type": "Brand", name: "Mazout Electric" },
        image: slides.map((s) => `https://mazoutelectric.com${s.src}`),
        offers: {
            "@type": "Offer",
            price: ACTUATOR_PRICE,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://mazoutelectric.com/robotic-actuators",
        },
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mazoutelectric.com/" },
            { "@type": "ListItem", position: 2, name: "Robotic Actuators", item: "https://mazoutelectric.com/robotic-actuators" },
        ],
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div
                className={
                    "fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 " +
                    (pageReady ? "opacity-0 pointer-events-none" : "opacity-100")
                }
            >
                <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-white/70 animate-spin mb-6" />
                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Loading {Math.round(progress)}%
                </div>
            </div>
            <SEO
                title="Robotic Actuators in India | Custom BLDC Actuators — Mazout"
                description="Mazout builds custom robotic actuators in India — compact BLDC motor + harmonic reducer + encoder + FOC controller in one unit. For humanoids, autonomous vehicles, robotic arms and quadrupeds."
                path="/robotic-actuators"
                keywords="robotic actuators in India, custom robotic actuators, BLDC actuator, robotic actuator, harmonic actuator, humanoid actuator, robot joint actuator, integrated servo actuator, Mazout actuator"
                type="product"
                jsonLd={[productJsonLd, faqJsonLd, breadcrumbJsonLd]}
            />
            <Navbar />

            <div
                ref={canvasWrapRef}
                id="actuator-canvas"
                className={
                    isDesktop
                        ? "hidden lg:block fixed inset-y-0 left-0 w-1/2 z-10 pointer-events-none"
                        : "block fixed inset-0 z-0 pointer-events-none opacity-[0.16]"
                }
            >
                <ActuatorScene ref={modelRef} isDesktop={isDesktop} />
            </div>

            <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden pt-16">
                <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full lg:pr-[52%]">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] max-w-4xl text-balance"
                    >
                        Robotic actuators <span className="text-muted-foreground">Your Door To The World</span>{" "}
                        <span className="text-primary">of Physical AI</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10"
                    >
                        <Button asChild size="lg" className="uppercase tracking-[0.18em]">
                            <a href="/shop">Pre-order now</a>
                        </Button>
                    </motion.div>
                    <span className="ml-1 text-sm font-light tracking-[0.18em]">next batch August 2026</span>

                    {/* Scroll-down indicator — pinned to bottom-center of the hero viewport. */}
                    <motion.a
                        href="#breakdown"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-primary"
                    >
                        <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Scroll down</span>
                        <motion.span
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                            className="text-lg"
                        >
                            ↓
                        </motion.span>
                    </motion.a>
                </div>

                {/* MOBILE/TABLET: model sits directly below the hero text, in normal flow.
                    Plays through its explode animation as this block scrolls through the viewport. */}
                {
                    !isDesktop && (
                        <div className="relative z-10 w-full px-4 sm:px-8 pb-12">
                            <div
                                ref={mobileCanvasWrapRef}
                                className="w-full h-[52vh] sm:h-[60vh] rounded-2xl overflow-hidden relative pointer-events-none"
                            >
                                <ActuatorScene ref={modelRef} className="!fixed-none !inset-auto !relative w-full h-full" />
                            </div>
                        </div>
                    )
                }
            </section >

            <section ref={overviewRef} className="border-t border-border py-24 lg:py-32 relative z-20 bg-transparent">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 lg:pl-[52%]">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-6">Overview</p>
                    <p className="text-2xl lg:text-3xl font-light leading-snug text-foreground">
                        Mazout's robotic actuators integrate a high-performance{" "}
                        <span className="text-primary">BLDC motor, harmonic reducer, encoder, and motor controller</span>{" "}
                        into a compact unit. Designed for precision, reliability, and easy integration, they
                        simplify robot development while delivering high efficiency, stable performance, and
                        long-term durability across a wide range of robotic applications.
                    </p>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        A reliable actuator is fundamental to the robot's overall performance.
                    </p>
                </div>
            </section>

            <section id="breakdown" ref={breakdownRef} className="border-t border-border py-24 lg:py-32 bg-transparent relative">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="mb-16 max-w-3xl lg:pr-[52%]">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">3D breakdown</p>
                        <h2 className="text-4xl lg:text-5xl font-light">Every layer, engineered.</h2>
                        <p className="mt-4 text-muted-foreground">
                            Scroll to explode the actuator into its subsystems — then watch it reassemble.
                        </p>
                    </div>

                    {/* Pinned crossfade container. Height matters only for pre-pin layout —
            once pinned, ScrollTrigger controls the actual scroll distance via `end`. */}
                    <div ref={breakdownPinRef} className="relative h-screen lg:pr-[52%]">
                        <div className="relative h-full flex items-center">
                            <div className="relative w-full max-w-xl">
                                {breakdownData.map((step, i) => (
                                    <div
                                        key={step.title}
                                        ref={(el) => (stepElsRef.current[i] = el)}
                                        className="absolute inset-0 flex flex-col justify-center"
                                        style={{ opacity: i === 0 ? 1 : 0 }} // initial state before JS runs
                                    >
                                        <div className="text-xs uppercase tracking-[0.28em] text-primary mb-3">
                                            {String(i + 1).padStart(2, "0")} / {String(breakdownData.length).padStart(2, "0")}
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-light mb-4">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{step.desc}</p>
                                        <ul className="space-y-2">
                                            {step.bullets.map((b) => (
                                                <li key={b} className="text-sm text-foreground/80 flex items-start gap-3">
                                                    <span className="text-primary mt-1">◆</span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Features grid — unchanged, still the endpoint anchor for the model's explode timeline. */}
                    <div ref={featuresRef} className="mt-32 relative z-20">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Features</p>
                        <h2 className="text-4xl lg:text-5xl font-light mb-12">Built for demanding robotics.</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map(({ icon: Icon, title, desc }) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5 }}
                                    className="p-8 border border-border rounded-xl bg-background/60 hover:border-primary/50 transition-colors"
                                >
                                    <Icon className="text-primary mb-4" size={22} />
                                    <div className="text-lg font-medium mb-2">{title}</div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 relative z-20 bg-background">
                <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Specifications</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-12">Technical data.</h2>
                    <div className="border border-border rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <tbody>
                                {specs.map(([k, v], i) => (
                                    <tr key={k} className={i % 2 === 0 ? "bg-card/40" : ""}>
                                        <td className="py-4 px-6 text-muted-foreground uppercase tracking-wider text-xs w-1/2">{k}</td>
                                        <td className="py-4 px-6 text-foreground font-medium">{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 bg-card/30 relative z-20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Applications</p>
                        <h2 className="text-4xl lg:text-5xl font-light mb-10">Wherever motion matters.</h2>
                        <ul className="space-y-4">
                            {applications.map((a) => (
                                <li key={a} className="text-2xl font-light border-b border-border pb-4 flex items-center gap-4">
                                    <span className="text-primary text-sm">◆</span>
                                    {a}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Customers</p>
                        <h2 className="text-4xl lg:text-5xl font-light mb-10">Trusted by builders.</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {customers.map((c) => (
                                <div key={c} className="border border-border rounded-xl p-10 text-center text-2xl font-light hover:border-primary/50 transition-colors">
                                    {c}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 relative z-20 bg-background">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">FAQ</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-12">Answers.</h2>
                    <Accordion type="single" collapsible>
                        {faqs.map((f, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-t border-border last:border-b">
                                <AccordionTrigger className="py-6 text-left text-lg font-light hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section id="enquire" className="border-t border-border py-24 lg:py-32 relative z-20 bg-background">
                <div className="max-w-3xl mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Enquire now</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-4">Custom requirements?</h2>
                    <p className="text-muted-foreground mb-10">
                        Tell us about your project. We will get back to you in 24 hours.
                    </p>

                    {enquirySent ? (
                        <div className="p-10 border border-primary/40 rounded-xl text-center">
                            <div className="text-2xl font-light text-primary mb-2">Thank you!</div>
                            <p className="text-muted-foreground">We will get back to you in 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleEnquiry} className="grid gap-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Input required placeholder="Full name" value={enquiry.fullName} onChange={(e) => setEnquiry({ ...enquiry, fullName: e.target.value })} />
                                <Input required placeholder="Company name" value={enquiry.company} onChange={(e) => setEnquiry({ ...enquiry, company: e.target.value })} />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Input required type="email" placeholder="Email address" value={enquiry.email} onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })} />
                                <Input required type="tel" placeholder="Phone number" value={enquiry.phone} onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })} />
                            </div>
                            <Textarea required rows={5} placeholder="Your query" value={enquiry.query} onChange={(e) => setEnquiry({ ...enquiry, query: e.target.value })} className="resize-none" />
                            <Button type="submit" size="lg" className="uppercase tracking-[0.18em] justify-self-start">Submit</Button>
                        </form>
                    )}
                </div>
            </section>

            <Footer />

            <Dialog open={!!popupItem} onOpenChange={(o) => !o && setPopupItem(null)}>
                <DialogContent className="bg-background border-border text-foreground sm:max-w-lg">
                    <DialogClose className="absolute right-4 top-4 z-50" />
                    {popupItem && (
                        <div className="space-y-4">
                            <div className="aspect-square bg-card/40 rounded-lg flex items-center justify-center text-muted-foreground text-sm uppercase tracking-widest">
                                {popupItem.name}
                            </div>
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-2xl font-light">{popupItem.name}</h3>
                                <div className="text-xl text-primary">${popupItem.price}</div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">{popupItem.desc}</p>
                            <div className="p-4 border border-border rounded-lg text-sm">
                                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">Specifications</div>
                                {popupItem.specs}
                            </div>
                            <Button onClick={() => { addToCart(popupItem.name); setPopupItem(null); }} className="w-full">
                                Add to cart · ${popupItem.price}
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <Dialog open={mechOpen} onOpenChange={setMechOpen}>
                <DialogContent className="bg-background border-border text-foreground sm:max-w-4xl p-2">
                    <DialogClose className="absolute right-4 top-4 z-50 bg-background/80 rounded-full p-1"><X size={16} /></DialogClose>
                    <img src={slides[3].src} alt="Robotic actuator mechanical drawing enlarged" className="w-full h-auto rounded-lg" />
                </DialogContent>
            </Dialog>

            <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
        </div >
    );
};

export default RoboticActuators;