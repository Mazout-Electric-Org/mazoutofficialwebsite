import { useMemo, useState } from "react";
import { Minus, Plus, Trash2, Github, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

import img1 from "@/assets/Render1.png";
import img2 from "@/assets/zooty-render-hero.png";
import img3 from "@/assets/zooty-hero.png";
import img4 from "@/assets/actuator_mechnical_drawing.png";

const slides = [
    { src: img1, alt: "Mazout robotic actuator — compact BLDC unit" },
    { src: img2, alt: "Robotic actuator sizes and variants" },
    { src: img3, alt: "Actuator with harmonic gear attachment" },
    { src: img4, alt: "Mechanical drawing of the actuator with dimensions" },
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

const Shop = () => {
    const [actuatorQty, setActuatorQty] = useState(1);
    const [cart, setCart] = useState<Record<string, number>>({});
    const [popupItem, setPopupItem] = useState<(typeof upsells)[number] | null>(null);
    const [mechOpen, setMechOpen] = useState(false);
    const { toast } = useToast();

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

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Shop | Mazout Robotic Actuator — Buy Now"
                description="Buy Mazout's custom BLDC robotic actuator. In-stock units, 1-year warranty, full SDK access. Plus accessories: CAN adapters, tool kits, and diagnostic gear."
                path="/shop"
                keywords="buy robotic actuator, BLDC actuator price, robotic actuator India, actuator accessories"
                type="product"
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
                                    {Object.keys(cart).length > 0 && ` + ${Object.values(cart).reduce((a, b) => a + b, 0)} accessor${Object.values(cart).reduce((a, b) => a + b, 0) > 1 ? "ies" : "y"}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 relative z-20 bg-background">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Also useful</p>
                    <h2 className="text-4xl lg:text-5xl font-light mb-12">Accessories & tools.</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {upsells.map((u) => {
                            const qty = cart[u.name] || 0;
                            return (
                                <div key={u.name} className="border border-border rounded-xl overflow-hidden bg-card/40 hover:border-primary/50 transition-colors flex flex-col">
                                    <button
                                        onClick={() => setPopupItem(u)}
                                        className="aspect-square bg-background/60 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest hover:text-primary transition-colors"
                                        aria-label={`View details of ${u.name}`}
                                    >
                                        {u.name}
                                    </button>
                                    <div className="p-4 flex flex-col gap-3 flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="text-sm font-medium leading-tight">{u.name}</div>
                                            <div className="text-sm text-primary whitespace-nowrap">${u.price}</div>
                                        </div>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center border border-border rounded-full">
                                                <button aria-label={`Remove ${u.name}`} onClick={() => removeFromCart(u.name)} className="p-2 hover:text-primary transition-colors disabled:opacity-40" disabled={qty === 0}>
                                                    {qty <= 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                                                </button>
                                                <span className="w-8 text-center text-sm">{qty}</span>
                                                <button aria-label={`Add ${u.name}`} onClick={() => addToCart(u.name)} className="p-2 hover:text-primary transition-colors">
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="border-t border-border py-24 lg:py-32 bg-card/30 relative z-20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
                    <div className="p-10 border border-border rounded-2xl bg-background/60">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary mb-4">Documentation</p>
                        <h3 className="text-3xl font-light mb-4">Everything you need.</h3>
                        <p className="text-muted-foreground mb-8">
                            API reference, examples, firmware notes, and integration guides — open source.
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
                            <img src={slides[3].src} alt="Robotic actuator mechanical drawing" className="w-full h-64 object-cover" />
                        </button>
                    </div>
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
        </div>
    );
};

export default Shop;