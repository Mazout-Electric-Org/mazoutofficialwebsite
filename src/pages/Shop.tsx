import { useState } from "react";
import {
    Minus,
    Plus,
    Github,
    X,
    Cpu,
    Zap,
    Gauge,
    Cog,
    Radar,
    Radio,
    SlidersHorizontal,
    CircuitBoard,
    Weight,
    Ruler,
    Thermometer,
    Shield,
    type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

import elementsImg from "@/assets/Elements.png";
import humanoidImg from "@/assets/humanoid.png";
import mechDrawingImg from "@/assets/actuator_mechnical_drawing.png";
import zootyRenderHeroImg from "@/assets/zooty-render-hero.png";

const slides = [
    { src: elementsImg, alt: "Mazout robotic actuator - exploded components" },
    { src: humanoidImg, alt: "Robotic actuator in a humanoid application" },
    { src: mechDrawingImg, alt: "Mechanical drawing of the actuator with dimensions" },
    { src: zootyRenderHeroImg, alt: "Robotic actuator render" },
];

const heroSpecs: Array<{ value: string; label: string }> = [
    { value: "36 Nm", label: "Peak Torque" },
    { value: "750 g", label: "Weight" },
    { value: "17-bit", label: "Encoder Res." },
    { value: "IP54", label: "Protection" },
];

type SpecGroup = {
    title: string;
    items: Array<{ icon: LucideIcon; label: string; value: string }>;
};

const specGroups: SpecGroup[] = [
    {
        title: "Motor & drive",
        items: [
            { icon: Cpu, label: "Motor type", value: "BLDC, sensored, FOC" },
            { icon: Zap, label: "Rated voltage", value: "24 – 48 V DC" },
            { icon: Gauge, label: "Rated torque", value: "12 Nm (peak 36 Nm)" },
            { icon: Cog, label: "Reduction ratio", value: "1:50 harmonic" },
        ],
    },
    {
        title: "Sensing & control",
        items: [
            { icon: Radar, label: "Encoder", value: "17-bit absolute magnetic" },
            { icon: Radio, label: "Communication", value: "CAN 2.0B, up to 1 Mbps" },
            { icon: SlidersHorizontal, label: "Control modes", value: "Position / Velocity / Torque" },
            { icon: CircuitBoard, label: "Firmware", value: "FOC, CAN, OTA capable" },
        ],
    },
    {
        title: "Mechanical & environmental",
        items: [
            { icon: Weight, label: "Weight", value: "~750 g" },
            { icon: Ruler, label: "Diameter × Height", value: "Ø90 mm × 40 mm" },
            { icon: Thermometer, label: "Operating temp.", value: "-10 °C to +60 °C" },
            { icon: Shield, label: "Protection", value: "IP54" },
        ],
    },
];

const ACTUATOR_PRICE = 500;

const Shop = () => {
    const [actuatorQty, setActuatorQty] = useState(1);
    const [mechOpen, setMechOpen] = useState(false);
    const { toast } = useToast();

    const cartTotal = actuatorQty * ACTUATOR_PRICE;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Shop | Mazout Robotic Actuator - Buy Now"
                description="Buy Mazout's custom BLDC robotic actuator. In-stock units, 1-year warranty, full SDK access. Plus accessories: CAN adapters, tool kits, and diagnostic gear."
                path="/shop"
                keywords="buy robotic actuator, BLDC actuator price, robotic actuator India, actuator accessories"

            />
            <Navbar />

            <section id="buy-now" className="border-t border-border py-24 lg:py-32 bg-card/30 relative z-20 mt-16">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Buy now</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-12">Get your actuator.</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="border border-border rounded-2xl overflow-hidden bg-background/60">
                            <img src={slides[0].src} alt={slides[0].alt} className="w-full h-[420px] object-cover" />
                            <div className="p-6 grid grid-cols-3 gap-2">
                                {slides.map((s, i) => (
                                    <img key={i} src={s.src} alt={s.alt} className="h-24 w-full object-cover rounded-md border border-border" />
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-4xl font-light">${ACTUATOR_PRICE}</div>
                            <div className="mt-2 text-sm text-primary">35 units left · 4 weeks lead time for new batch</div>

                            <ul className="mt-8 space-y-3 text-muted-foreground">
                                <li className="flex gap-3"><span className="text-primary">✓</span> Full software support & SDK access</li>
                                <li className="flex gap-3"><span className="text-primary">✓</span> Integration support from our engineers</li>
                                <li className="flex gap-3"><span className="text-primary">✓</span> FOC firmware, CAN control, OTA updates</li>
                                <li className="flex gap-3"><span className="text-primary">✓</span> 1-year manufacturer warranty</li>
                            </ul>

                            <div className="mt-8 flex items-center gap-6">
                                <div className="flex items-center border border-border rounded-full">
                                    <button aria-label="Decrease quantity" onClick={() => setActuatorQty((q) => Math.max(1, q - 1))} className="p-3 hover:text-primary transition-colors">
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-10 text-center font-medium">{actuatorQty}</span>
                                    <button aria-label="Increase quantity" onClick={() => setActuatorQty((q) => q + 1)} className="p-3 hover:text-primary transition-colors">
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <Button size="lg" onClick={() => toast({ title: "Added to cart", description: `${actuatorQty} × Robotic Actuator` })} className="uppercase tracking-[0.18em]">
                                    Add to cart
                                </Button>
                            </div>

                            <div className="mt-10 p-6 border border-border rounded-xl bg-background/60">
                                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-3">Cart total</div>
                                <div className="text-3xl font-light">${cartTotal}</div>
                                <div className="text-xs text-muted-foreground mt-2">
                                    {actuatorQty} actuator{actuatorQty > 1 ? "s" : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 relative z-20 bg-background overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Specifications</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-12">Technical data.</h2>

                    {/* Headline numbers — the specs that sell the part at a glance. */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {heroSpecs.map(({ value, label }) => (
                            <div
                                key={label}
                                className="relative p-6 lg:p-8 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent text-center overflow-hidden"
                            >
                                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
                                <div className="relative text-3xl lg:text-4xl font-light text-primary">{value}</div>
                                <div className="relative mt-2 text-[11px] lg:text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Full breakdown, grouped by system, each spec paired with an icon. */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {specGroups.map((group) => (
                            <div key={group.title} className="rounded-2xl border border-border bg-card/30 overflow-hidden">
                                <div className="px-6 py-4 border-b border-border bg-background/40">
                                    <div className="text-xs uppercase tracking-[0.24em] text-primary">{group.title}</div>
                                </div>
                                <div className="divide-y divide-border">
                                    {group.items.map(({ icon: Icon, label, value }) => (
                                        <div key={label} className="group flex items-start gap-4 px-6 py-5 hover:bg-primary/5 transition-colors">
                                            <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg border border-border bg-background/60 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                                <Icon size={16} />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
                                                <div className="mt-1 text-sm font-medium text-foreground leading-snug">{value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 bg-card/30 relative z-20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
                    <div className="p-10 border border-border rounded-2xl bg-background/60">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Documentation</p>
                        <h3 className="text-3xl font-light mb-4">Everything you need.</h3>
                        <p className="text-muted-foreground mb-8">
                            API reference, examples, firmware notes, and integration guides - open source.
                        </p>
                        <Button asChild variant="outline" size="lg">
                            <a href="https://github.com/Mazout-Electric/Documentation/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                <Github size={18} /> View on GitHub
                            </a>
                        </Button>
                    </div>

                    <div className="p-10 border border-border rounded-2xl bg-background/60">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Mechanical drawings</p>
                        <h3 className="text-3xl font-light mb-4">Dimensions & mounting.</h3>
                        <p className="text-muted-foreground mb-6">
                            Click the image below to view full-size mechanical drawings.
                        </p>
                        <button onClick={() => setMechOpen(true)} className="w-full border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors" aria-label="Enlarge mechanical drawing">
                            <img src={mechDrawingImg} alt="Robotic actuator mechanical drawing" className="w-full h-64 object-cover" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />

            <Dialog open={mechOpen} onOpenChange={setMechOpen}>
                <DialogContent className="bg-background border-border text-foreground sm:max-w-4xl p-2">
                    <DialogClose className="absolute right-4 top-4 z-50 bg-background/80 rounded-full p-1"><X size={16} /></DialogClose>
                    <img src={mechDrawingImg} alt="Robotic actuator mechanical drawing enlarged" className="w-full h-auto rounded-lg" />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Shop;