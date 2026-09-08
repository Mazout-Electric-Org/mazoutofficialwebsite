import { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
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
    Bot,
    Car,
    PawPrint,
    Factory,
    type LucideIcon,
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
import humanoidImg from "@/assets/humanoid.png";
import roboDogImg from "@/assets/robo-dog.png";
import roboticArmImg from "@/assets/robotic-arm.png";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    { src: img1, alt: "Mazout robotic actuator - compact BLDC unit" },
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
        desc: "Brushless DC (BLDC) motor delivers smooth, precise, and reliable motion with low maintenance and high efficiency - making it ideal for demanding robotic applications.",
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

const specHighlights: Array<{ value: string; label: string }> = [
    { value: "0.9kg", label: "Self-Weight" },
    { value: "62mm", label: "Minimum Diameter" },
    { value: "557N.m", label: "Maximum Average Load Torque" },
    { value: "<60 arcsec", label: "Repeatability" },
    { value: "5000+", label: "Shipping Volume" },
];

const applications: Array<{
    title: string;
    desc: string;
    icon: LucideIcon;
    image: string;
}> = [
    {
        title: "Humanoids",
        desc: "Industrial and home applications, with smooth human-like motions and intelligent interaction.",
        icon: Bot,
        image: humanoidImg,
    },
    {
        title: "Autonomous vehicles",
        desc: "Controlling vehicle movements with enhanced precision for on-road safety.",
        icon: Car,
        image: img2,
    },
    {
        title: "Robot dogs",
        desc: "Surveillance applications in high risk areas, adaptive to different terrains. Rugged for repetitive use.",
        icon: PawPrint,
        image: roboDogImg,
    },
    {
        title: "Robotic arms",
        desc: "Factory applications, beyond just pick and place, learns from training data to automate assembly lines.",
        icon: Factory,
        image: roboticArmImg,
    },
];

const customers = ["Starforge", "ETA"];

const faqs = [
    { q: "Is the actuator plug and play?", a: "Yes. Every unit ships pre-tuned with FOC firmware and a default CAN ID map. Power it, connect CAN, and it responds to standard position, velocity, and torque commands out of the box." },
    { q: "Is the firmware programmable?", a: "Yes. The controller supports OTA firmware updates and exposes tunable parameters (PID gains, current limits, CAN IDs) over CAN. Advanced users can request the SDK for custom control loops." },
    { q: "Can I customize the actuator?", a: "Absolutely. Reduction ratio, motor winding, connector type, housing, and controller peripherals can all be tailored to your robot. Use the Enquire form to share your requirements." },
    { q: "What is the control loop latency?", a: "Torque loop runs at 20 kHz internally. Over CAN at 1 Mbps, host-to-actuator command latency is under 1 ms per frame, suitable for high-bandwidth robotics control." },
    { q: "What is the lead time and warranty?", a: "35 units are in stock for immediate dispatch. The next production batch has a 4-week lead time. All actuators ship with a 1-year manufacturer warranty." },
    { q: "Which communication protocols are supported?", a: "Learn about supported interfaces such as CAN, UART, EtherCAT, or RS485 for seamless system integration." },
    { q: "What robots can these actuators be used in?", a: "Suitable for robotic arms, humanoids, quadrupeds, mobile robots, exoskeletons, and custom robotic platforms." },
    { q: "Do you provide SDKs and software examples?", a: "Access APIs, documentation, sample code, and development tools to accelerate integration." },
    { q: "Can multiple actuators be synchronized?", a: "Yes, multiple actuators can operate together for coordinated multi-axis motion and complex robotic systems." },
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

type FeatureCardProps = { icon: LucideIcon; title: string; desc: string };

// Tilts toward whichever edge the cursor is nearest — that side presses in,
// the opposite side pops forward — and follows continuously as the cursor moves.
const FeatureCard = ({ icon: Icon, title, desc }: FeatureCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springConfig = { stiffness: 220, damping: 18, mass: 0.4 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * 16);
        rotateX.set(-py * 16);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            style={{ perspective: 800 }}
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX: springRotateX, rotateY: springRotateY }}
                className="p-8 border border-border rounded-xl bg-background/60 hover:border-primary/50 transition-colors will-change-transform"
            >
                <Icon className="text-primary mb-4" size={22} />
                <div className="text-lg font-medium mb-2">{title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
        </motion.div>
    );
};

const ApplicationFlipCard = ({
    app,
    i,
}: {
    app: (typeof applications)[number];
    i: number;
}) => {
    const [hovered, setHovered] = useState(false);
    const Icon = app.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group aspect-[4/3] [perspective:1200px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out rounded-xl"
                style={{
                    transformStyle: "preserve-3d",
                    transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front — image */}
                <div
                    className="absolute inset-0 rounded-xl border border-border overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 flex items-center gap-3">
                        <Icon className="text-primary" size={22} strokeWidth={1.5} />
                        <span className="text-foreground text-lg font-light">{app.title}</span>
                    </div>
                </div>

                {/* Back — description */}
                <div
                    className="absolute inset-0 rounded-xl border border-primary/40 bg-background p-8 flex flex-col justify-center"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <h3 className="text-foreground text-xl font-light mb-3">{app.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {app.desc}
                    </p>
                    <Link
                        to="/blogs"
                        className="text-primary text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
                    >
                        Read more <span className="text-lg">→</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

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

    // The pinned 3D-model ScrollTrigger below measures element positions relative
    // to window.scrollY at setup time. Landing on this page mid-scroll (refresh,
    // back/forward nav) throws those measurements off and puts the model in a bad
    // state, so force it back to the hero before that setup runs.
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    useEffect(() => {
        // Safety net: never let a slow/failed model fetch hold the whole page behind
        // the loading overlay indefinitely. The 3D canvas has its own internal
        // spinner/error boundary, so it's fine for the model to keep loading in the
        // background after this fires.
        const t = setTimeout(() => setPageReady(true), 2500);
        return () => clearTimeout(t);
    }, []);

    // ------- Toggle this to true while testing to see exact trigger boundaries -------
    const DEBUG_MARKERS = false;
    const CROSSFADE_SCROLL_PER_STEP = 900; // single source of truth, used by BOTH triggers below
    const CROSSFADE_TOTAL_SCROLL = CROSSFADE_SCROLL_PER_STEP * (breakdownData.length - 1);
    const FADE_TAIL_SCROLL = 600; // extra px purely for the fade, AFTER the 6th item settles + explode completes
    const PIN_TOTAL_SCROLL = CROSSFADE_TOTAL_SCROLL + FADE_TAIL_SCROLL;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tryInit = () => {
                const group = modelRef.current?.group;
                if (
                    !group ||
                    !heroRef.current ||
                    !overviewRef.current ||
                    !breakdownRef.current ||
                    !breakdownPinRef.current ||
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
                            endTrigger: breakdownPinRef.current,
                            end: `top+=${PIN_TOTAL_SCROLL}`,
                            scrub: true,
                            markers: DEBUG_MARKERS,
                            invalidateOnRefresh: true,
                            onRefresh: (self) => {
                                const startPx = self.start;
                                const endPx = self.end;
                                const totalPx = endPx - startPx;
                                const pxOf = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

                                const fOverview = gsap.utils.clamp(0.02, 0.95, (pxOf(overviewRef.current!) - startPx) / totalPx);
                                // breakdown pin START as a fraction (used only to know where slide-back-right finishes)
                                const fBreakdownStart = gsap.utils.clamp(fOverview + 0.02, 0.9, (pxOf(breakdownPinRef.current!) - startPx) / totalPx);
                                // Fade must only begin once the 6th item has settled AND the explode has fully
                                // played out — i.e. right where the (un-extended) crossfade span would have ended.
                                const fFadeStart = fBreakdownStart + (CROSSFADE_TOTAL_SCROLL / totalPx);

                                master.clear();
                                master.to(canvasWrapRef.current, { xPercent: 0, ease: "none", duration: fOverview }, 0);
                                master.to(canvasWrapRef.current, { xPercent: 100, ease: "none", duration: fBreakdownStart - fOverview }, fOverview);
                                master.to(canvasWrapRef.current, { autoAlpha: 0, ease: "none", duration: 1 - fFadeStart }, fFadeStart);
                                master.to(clipProxy, {
                                    value: 1, ease: "none", duration: fFadeStart,
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
                        endTrigger: breakdownPinRef.current,
                        end: `top+=${PIN_TOTAL_SCROLL}`,
                        scrub: true,
                        markers: DEBUG_MARKERS,
                        invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            const crossfadeFraction = CROSSFADE_TOTAL_SCROLL / PIN_TOTAL_SCROLL;
                            modelRef.current?.setClipProgress(Math.min(1, self.progress / crossfadeFraction));
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

                // ~2 scroll-wheel pages per step. Tune this by actually scrolling — mice/trackpads vary.
                // const scrollDistancePerStep = 800;
                // const totalScroll = scrollDistancePerStep * (N - 1);

                // Each item owns an EXCLUSIVE window of localPos in [-0.5, +0.5] around its own index.
                // Windows never overlap — item i's window ends exactly where item i+1's begins.
                const plateau = 0.22;   // |localPos| below this: fully settled, sharp, opaque
                const driftPx = 40;     // how far the text travels while entering/exiting
                const maxBlur = 10;     // px, blur strength right as an item crosses out of view

                ScrollTrigger.create({
                    trigger: breakdownPinRef.current,
                    start: "top top",
                    end: `+=${PIN_TOTAL_SCROLL}`,
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        // The pin now stays alive through an extra tail (model fade-out, handled by the
                        // master ScrollTrigger above) after item 6 settles. Remap so the 6-item crossfade
                        // itself is bit-for-bit identical to before, then holds at N-1.
                        const crossfadeFraction = CROSSFADE_TOTAL_SCROLL / PIN_TOTAL_SCROLL;
                        const crossfadeProgress = Math.min(1, self.progress / crossfadeFraction);
                        const scaled = crossfadeProgress * (N - 1);

                        stepElsRef.current.forEach((el, i) => {
                            if (!el) return;

                            // Signed local position: negative = "not yet arrived" (below/incoming),
                            // positive = "already passed" (above/exiting). This sign is what makes
                            // the up/down direction — and its exact reversal on scroll-up — automatic.
                            const localPos = scaled - i;
                            const absPos = Math.abs(localPos);

                            let opacity: number;
                            let fadeFactor: number; // 0 at plateau, 1 at the outer edge - drives blur

                            if (absPos <= plateau) {
                                opacity = 1;
                                fadeFactor = 0;
                            } else if (absPos < 0.5) {
                                const t = (absPos - plateau) / (0.5 - plateau); // 0 -> 1
                                opacity = 1 - t;
                                fadeFactor = t;
                            } else {
                                opacity = 0;
                                fadeFactor = 1;
                            }

                            // y: comes from below while entering (localPos negative, moving toward 0),
                            // continues upward while exiting (localPos positive, moving away from 0).
                            // Sign flips automatically in reverse-scroll since localPos itself flips sign
                            // as scaled decreases — no separate "reverse" logic needed.
                            const y = -localPos * driftPx;
                            const blur = fadeFactor * maxBlur;

                            gsap.set(el, {
                                opacity,
                                y,
                                filter: `blur(${blur}px)`,
                                pointerEvents: opacity > 0.95 ? "auto" : "none",
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
        name: "Mazout Robotic Actuator - BLDC Integrated Unit",
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
                title="Robotic Actuators in India | Custom BLDC Actuators - Mazout"
                description="Mazout builds custom robotic actuators in India - compact BLDC motor + harmonic reducer + encoder + FOC controller in one unit. For humanoids, autonomous vehicles, robotic arms and quadrupeds."
                path="/robotic-actuators"
                keywords="robotic actuators in India, custom robotic actuators, BLDC actuator, robotic actuator, harmonic actuator, humanoid actuator, robot joint actuator, integrated servo actuator, Mazout actuator"

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
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs uppercase tracking-[0.28em] text-primary mb-5"
                    >
                        Physical AI Hardware
                    </motion.p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] max-w-4xl text-balance">
                        <motion.span
                            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="inline-block"
                        >
                            Robotic actuators{" "}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="inline-block text-muted-foreground"
                        >
                            Your Door To The World{" "}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, delay: 0.45 }}
                            className="inline-block text-primary"
                        >
                            of Physical AI
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-10"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut", delay: 1.2 }}
                            className="inline-block"
                        >
                            <Button asChild size="lg" className="uppercase tracking-[0.18em]">
                                <a href="/shop">Pre-order now</a>
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="ml-1 text-xs font-light tracking-[0.18em] inline-block"
                    >
                        next batch August 2026
                    </motion.span>

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
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-xs uppercase tracking-[0.28em] text-primary mb-6"
                    >
                        Overview
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-2xl lg:text-3xl font-light leading-snug text-foreground"
                    >
                        Get started on your robot building journey with{" "}
                        <span className="text-primary">back-drivable robotic actuators</span>. Designed for
                        precision, reliability, and easy integration, they simplify robot development while
                        delivering high efficiency, stable performance, and long-term durability across a
                        wide range of robotic applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        {["Back-drivable", "High torque", "FOC control", "Compact integrated design"].map((tag, i) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                                className="px-4 py-1.5 text-xs uppercase tracking-[0.14em] border border-primary/40 text-primary rounded-full"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 text-lg text-muted-foreground leading-relaxed"
                    >
                        Each actuator integrates a high-performance BLDC motor, precision cycloidal reducer,
                        high-resolution magnetic encoder, and advanced Field-Oriented Control (FOC)
                        electronics into a single compact module. This fully integrated design minimizes
                        wiring, reduces system complexity, and improves reliability while delivering stable,
                        responsive performance.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        By building robots with back-drivable motors (or simulating it via advanced
                        software), robotics completely changes physical safety around humans, proprioception
                        (feeling the world without sensors) and improved operation dynamics (like walking).
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 text-xl font-light text-foreground"
                    >
                        Go from idea to a functional prototype quickly with Mazout's best-in-class robotic
                        rotary actuators.
                    </motion.p>
                </div>
            </section>

            <section id="breakdown" ref={breakdownRef} className="border-t border-border py-24 lg:py-32 bg-transparent relative">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="mb-16 lg:pr-[52%]">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Breakdown</p>
                        <h2 className="text-5xl lg:text-7xl font-light leading-[1.05]">
                            Every layer
                            <br />
                            engineered.
                        </h2>
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
                            {features.map(({ icon, title, desc }) => (
                                <FeatureCard key={title} icon={icon} title={title} desc={desc} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-16 lg:py-20 relative z-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Specifications</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-12">Technical data.</h2>
                    <div className="flex flex-wrap justify-between gap-x-8 gap-y-10">
                        {specHighlights.map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="min-w-[140px] flex-1 text-center"
                            >
                                <div className="text-3xl lg:text-4xl font-light text-red-500">{value}</div>
                                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/90">{label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 bg-card/30 relative z-20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Applications</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-12">Wherever motion matters.</h2>

                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                        {applications.map((app, i) => (
                            <ApplicationFlipCard key={app.title} app={app} i={i} />
                        ))}
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-24 pt-16 border-t border-border">
                    <p className="text-center text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
                        Trusted by builders
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-5">
                        {customers.map((c) => (
                            <span
                                key={c}
                                className="text-muted-foreground/60 hover:text-foreground text-xl font-light tracking-wide transition-colors duration-300"
                            >
                                {c}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 relative z-20 bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center"
                >
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Integration</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-8">
                        Enabling fast robot integration.
                    </h2>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
                        Whether you're prototyping a new robot, developing a commercial product, or advancing robotics research, Mazout actuators provide the performance and durability needed for demanding applications. With high torque output, accurate position control, low maintenance requirements, and long operational life, they serve as a dependable foundation for next-generation robotic systems.
                    </p>
                    <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }}
                        className="inline-block"
                    >
                        <Button asChild size="lg" className="uppercase tracking-[0.18em]">
                            <Link to="/shop">Pre-order now</Link>
                        </Button>
                    </motion.div>
                </motion.div>
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