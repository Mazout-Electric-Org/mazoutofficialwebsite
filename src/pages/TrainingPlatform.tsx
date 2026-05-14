import { useEffect, useState } from "react";
import { Minus, Plus, ArrowUpRight, Github, BookOpen, ShieldCheck, Cpu, Wrench, GraduationCap, FileText, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import zootyHero from "@/assets/zooty-hero.png";
import zootyRender from "@/assets/zooty-render-hero.png";
import zootyLanding from "@/assets/zooty-landing-vehicle.png";
import render1 from "@/assets/Render1.png";

const gallery = [
  { src: zootyRender, alt: "Zooty training platform — front render" },
  { src: zootyHero, alt: "Zooty platform — hero view" },
  { src: zootyLanding, alt: "Zooty platform — landing view" },
  { src: render1, alt: "Zooty platform — alternate render" },
];

const applications = [
  { title: "Adaptive Cruise Control", desc: "Maintain safe following distance and target speed using radar and vision fusion for longitudinal control." },
  { title: "Indicator-on-Steering", desc: "Auto-trigger turn indicators based on steering angle thresholds." },
  { title: "Lane Keep Assist", desc: "Build and deploy LKA pipelines with HD perception data." },
  { title: "Autonomous Parking", desc: "Develop parking maneuvers with low-speed control and ultrasonic sensing." },
  { title: "Obstacle Avoidance", desc: "Reactive planning with LiDAR + camera sensor fusion." },
  { title: "Tele-operation", desc: "Remote drive over 4G/5G with sub-200ms control loop." },
   { title: "Fleet Telemetry", desc: "Stream CAN, GPS, IMU, and battery data to the cloud dashboard." },
   { title: "Remote Control", desc: "In-cabin computer vision for attention and fatigue detection." },
];

const peripherals = [
  "Stereo Cameras (640×480p, 15fps)",
  "360° camera coverage",
  "GNSS module and IMU",
  "MYIR Myd-ld25x SOM",
  "Drive-by-wire steering, throttle, brake",
  "CAN-FD + OBD harness",
  "4G/5G modem with dual-SIM failover",
  "Tele-operation dashboard access",
];

const included = [
  { icon: GraduationCap, title: "Hands-on Training", desc: "2-day onboarding with our engineers — hardware, SDK, and your first deployment." },
  { icon: FileText, title: "Operating Manual", desc: "Full printed + digital manual covering safety, maintenance, and APIs." },
  { icon: ShieldCheck, title: "1-Year Warranty", desc: "Hardware warranty with on-site replacement for critical components." },
  { icon: Wrench, title: "Spares Kit", desc: "Starter spares: fuses, harnesses, mounts, and a backup compute module." },
];

const faqs = [
  { q: "Who is the Zooty platform for?", a: "Universities, R&D labs, OEMs, and startups building autonomy, ADAS, or robotics applications who need a road-ready vehicle platform out of the box." },
  { q: "Is it road-legal?", a: "Zooty is delivered as a research and training platform. Public-road operation depends on your jurisdiction; we support homologation paperwork for partners." },
  { q: "What software stack is supported?", a: "ROS 2 Humble, Autoware, CARLA bridge, Python and C++ SDKs, and a REST/MQTT cloud API." },
  { q: "What's the lead time?", a: "Next batch ships in June. Order now to reserve a unit." },
  { q: "Do you offer custom configurations?", a: "Yes — sensor stack, compute, and drive-by-wire options can be tailored. Talk to sales." },
];

const TrainingPlatform = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Zooty — Training and Development Platform | Mazout Electric";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Zooty is a road-ready EV platform for ADAS, autonomy, and robotics training. Sensors, compute, drive-by-wire, SDK, training, and manuals included. Made in India.";
    document.head.appendChild(meta);
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify(productJsonLd);
    document.head.appendChild(ld);
    return () => {
      document.title = prevTitle;
      meta.remove();
      ld.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Zooty — Training and Development Platform",
    description: "Road-ready electric vehicle platform for ADAS, autonomy, and robotics R&D. Made in India.",
    brand: { "@type": "Brand", name: "Mazout Electric" },
    image: gallery.map((g) => g.src),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "INR",
      url: "https://zootyweb.lovable.app/training-platform",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 lg:pt-32">
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-card">
                <img
                  key={activeImage}
                  src={gallery[activeImage].src}
                  alt={gallery[activeImage].alt}
                  className="h-full w-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show ${img.alt}`}
                    className={`aspect-square overflow-hidden rounded-md border bg-card transition-all ${
                      activeImage === i ? "border-primary ring-1 ring-primary" : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 text-xs uppercase tracking-[0.2em] border border-primary/40 text-primary rounded-full">
                  New stock — June
                </span>
                <span className="px-3 py-1 text-xs uppercase tracking-[0.2em] border border-border text-muted-foreground rounded-full inline-flex items-center gap-1">
                  <MapPin size={12} /> Made in India
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.24em] text-primary mb-3">Product</p>
              <h1 className="font-serif text-4xl lg:text-6xl leading-tight mb-6">
                Zooty — Training and Development Platform
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                Zooty is a compact, road-ready electric vehicle engineered as a full-stack
                research and training platform. Drive-by-wire chassis, sensor suite,
                and an open SDK let teams move from idea to on-road
                deployment in weeks — not years. Built for institutes, OEM R&D groups,
                and autonomy startups.
              </p>

              {/* Quantity + CTA */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
                <div className="inline-flex items-center border border-border rounded-md">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="p-3 text-muted-foreground hover:text-foreground"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="min-w-12 text-center font-medium">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="p-3 text-muted-foreground hover:text-foreground"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <Button size="lg" onClick={() => setContactOpen(true)} className="flex-1 sm:flex-initial">
                  Sales Enquiry
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mb-8">
                Tap <span className="text-foreground">Sales Enquiry</span> to open a short form — our team responds within 24 hours.
              </p>

              {/* Quick links */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                <a
                  href="https://github.com/Mazout-Electric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Github size={16} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://github.com/Mazout-Electric/Documentation/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <BookOpen size={16} /> Documentation <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <p className="text-xs uppercase tracking-[0.24em] text-primary mb-3">Build with Zooty</p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight mb-12 max-w-3xl">
              Applications you can develop on day one
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {applications.map((app) => (
                <div key={app.title} className="bg-background p-6 hover:bg-card transition-colors">
                  <Cpu size={20} className="text-primary mb-4" />
                  <h3 className="font-medium text-foreground mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Peripherals */}
        <section className="border-t border-border bg-card/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-primary mb-3">In the box</p>
                <h2 className="font-serif text-3xl lg:text-5xl leading-tight">
                  Peripherals & accessories
                </h2>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Every Zooty unit ships fully integrated and bench-tested with the
                  sensors, compute, and tooling listed here.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {peripherals.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground border-b border-border pb-3">
                    <span className="text-primary mt-0.5">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <p className="text-xs uppercase tracking-[0.24em] text-primary mb-3">Support</p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight mb-12 max-w-3xl">
              Training, manuals, and support — included
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {included.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="border border-border p-6 rounded-lg">
                  <Icon size={22} className="text-primary mb-4" />
                  <h3 className="font-medium mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs strip */}
        <section className="border-t border-border bg-card/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: "60 km", l: "Range per charge" },
              { v: "25 km/h", l: "Top speed" },
              { v: "275 kg", l: "Payload" },
              { v: "Linux", l: "Native SDK" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl lg:text-5xl font-serif text-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <p className="text-xs uppercase tracking-[0.24em] text-primary mb-3">FAQ</p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight mb-12 max-w-3xl">
              Questions, answered
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-lg font-medium">{f.q}</span>
                    <Plus size={18} className="text-primary transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 text-center">
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-6">
              Ready to build with <span className="text-primary">Zooty</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Reserve a unit from the June batch. Our team will walk you through specs,
              configurations, and lead times.
            </p>
            <Button size="lg" onClick={() => setContactOpen(true)}>Talk to Sales</Button>
          </div>
        </section>
      </main>

      <Footer />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default TrainingPlatform;