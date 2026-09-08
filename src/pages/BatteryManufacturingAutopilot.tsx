import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import buildoCells from "@/assets/buildo-cells.jpg";

const FORMSPREE_CONTACT = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT as string;

const marketStats = [
  { v: "60 GWh", l: "Assembled in India each year" },
  { v: "20%", l: "Annual growth in that market" },
  { v: "80%", l: "Of output is semi-organized or fully manual" },
  { v: "300+", l: "Workshops building packs entirely by hand" },
];

const problemStats = [
  { v: "60–90 min", l: "Cycle time to build one 3 kWh pack" },
  { v: "₹3,000–₹4,000+", l: "Conversion cost per pack" },
  { v: "≤ 5 kWh", l: "The pack sizes we target - E2Ws, robots, drones" },
];

const painPoints = [
  "Inconsistent quality and rework between operators",
  "Deviation from the standard process and inspection steps",
  "Fire and injury exposure at welding and end-of-line testing",
  "Compliance risk against AIS 156 Phase 2 and AIS 038 Rev 2",
];

const processSteps = [
  { n: "01", title: "Cell arrangement", desc: "Arranges sorted cells into cell holders." },
  { n: "02", title: "Spot welding", desc: "Nickel strip and busbar placement, precision spot welding." },
  { n: "03", title: "Inspection on the go", desc: "Checks visually between steps - no separate inspection station." },
  { n: "04", title: "BMS assembly", desc: "Wiring harness routing, BMS mounting and connector sealing." },
  { n: "05", title: "Packaging", desc: "Heat-shrink wrap, metal enclosure and sealing." },
];

const comparisonRows = [
  { label: "Cycle time", manual: "60–90 minutes", buildo: "12 minutes" },
  { label: "Conversion cost", manual: "₹3,000–₹4,000+", buildo: "₹900" },
  { label: "Operating hours", manual: "One or two shifts", buildo: "24 × 7" },
];

const benefits = [
  { title: "Standardization", desc: "The same motion, torque and weld profile on every pack." },
  { title: "Form-factor agility", desc: "Switch pack format by updating the task model, not the tooling." },
  { title: "No lapse risk", desc: "No fatigue-driven polarity errors or over-torqued terminals." },
  { title: "Inspection built in", desc: "Skips a standalone pre-weld vision machine at around $50K." },
];

const roadmap = [
  { phase: "MONTHS 1–6", title: "Partner data collection", desc: "Live video capture on working lines. Target: 2,000 packs of assembly data." },
  { phase: "MONTHS 7–9", title: "Model training", desc: "A custom vision-language-action model trained on that data plus simulation." },
  { phase: "MONTHS 10–12", title: "Tele-operated deployment", desc: "Buildo works the real line under operator control; every correction feeds training." },
  { phase: "MONTH 13 ONWARD", title: "Full deployment", desc: "Autonomous operation, with people supervising rather than assembling." },
];

const partnerPoints = [
  { title: "WHAT WE DO ON SITE", desc: "Set up cameras around your assembly bench and capture normal production. No process changes, no downtime." },
  { title: "WHAT YOU GET", desc: "Early access to tele-operated capacity, priority on the first Buildo deployments, and a written process report on your own line." },
  { title: "WHAT WE NEED", desc: "Roughly 2,000 packs of recorded assembly across our partner lines, over about six months." },
  { title: "YOUR DATA", desc: "Used to train our assembly models. Covered by a written agreement before any recording starts." },
];

const packsPerMonthOptions = ["Under 50", "50–200", "200–500", "Over 500"];
const packSizeOptions = ["Under 1 kWh", "1–3 kWh", "3–5 kWh", "Over 5 kWh"];
const assemblySetupOptions = ["Fully manual", "Semi-automated", "Mix of both", "Fully automated"];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Buildo - Battery Manufacturing Autopilot",
  description:
    "Buildo automates battery pack assembly up to 5 kWh - a wheeled humanoid with dexterous hands, trained on real production line data and corrected live by tele-operation.",
  brand: { "@type": "Brand", name: "Mazout Electric" },
  image: [buildoCells],
};

const BatteryManufacturingAutopilot = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    role: "",
    workEmail: "",
    phone: "",
    city: "",
    packsPerMonth: "",
    packSize: "",
    assemblySetup: "",
    notes: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, consent, form: "battery-manufacturing-autopilot" }),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      toast({ title: "Enquiry sent", description: "We reply within two working days." });
      setFormData({
        companyName: "",
        yourName: "",
        role: "",
        workEmail: "",
        phone: "",
        city: "",
        packsPerMonth: "",
        packSize: "",
        assemblySetup: "",
        notes: "",
      });
      setConsent(false);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Battery Manufacturing Autopilot - Buildo | Mazout Electric"
        description="Buildo automates battery pack assembly up to 5 kWh - a wheeled humanoid with dexterous hands, trained on real production line data and corrected live by tele-operation."
        path="/battery-manufacturing-autopilot"
        keywords="battery manufacturing autopilot, buildo, mazout electric, battery pack assembly, physical ai manufacturing, humanoid robot, tele-operation, battery pack automation India"
        jsonLd={productJsonLd}
      />
      <Navbar />

      <main className="pt-24 lg:pt-32">
        {/* Hero */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-primary mb-4">
                Physical AI for manufacturing
              </p>
              <h1 className="font-light text-4xl lg:text-6xl leading-tight mb-6">
                Battery manufacturing autopilot.
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                We automate pack assembly up to 5 kWh with Buildo, a wheeled humanoid with
                dexterous hands - trained on data from real production lines and corrected
                live by tele-operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#partner-form">Become a data partner</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#demo-video">Watch Buildo work</a>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={buildoCells}
                alt="Buildo humanoid robot arms assembling a lithium-ion battery pack from cylindrical cells"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-sm text-foreground">Pack assembly line</span>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  Up to 5 kWh
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Market stats */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((s) => (
              <div key={s.l}>
                <div className="font-light text-3xl lg:text-5xl text-primary">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <h2 className="font-light text-3xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              Most packs in India are still built by hand.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-12 max-w-3xl">
              Small units win on flexibility and low upfront cost. What they cannot do is
              repeat the same pack, the same way, every time. That is the gap we close -
              without asking them to buy a fixed automation line.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                {problemStats.map((s) => (
                  <div key={s.l} className="flex items-baseline gap-6 border-t border-border py-4">
                    <span className="font-light text-2xl lg:text-3xl text-primary shrink-0 w-48">
                      {s.v}
                    </span>
                    <span className="text-sm text-muted-foreground">{s.l}</span>
                  </div>
                ))}
                <p className="mt-8 text-xl lg:text-2xl font-light text-foreground">
                  Flexible and cheap to run, but not repeatable.
                </p>
              </div>
              <ul className="space-y-4">
                {painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <h2 className="font-light text-3xl lg:text-5xl leading-tight mb-6 max-w-3xl">
              Buildo runs the whole pack, not one station.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-12 max-w-3xl">
              A wheeled humanoid with dexterous hands, spatial AI, touch and torque sensing,
              and stereo vision. It works in the footprint your line already has, using the
              tools already on the bench.
            </p>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {processSteps.map((step) => (
                <div key={step.n} className="bg-background p-8">
                  <span className="text-primary text-xs font-mono">{step.n}</span>
                  <h3 className="mt-4 text-lg text-foreground font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
              <div className="bg-background p-8" />
            </div>
          </div>
        </section>

        {/* Demo video */}
        <section id="demo-video" className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <h2 className="font-light text-3xl lg:text-5xl leading-tight mb-4">
              See a pack come together.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-3xl">
              An uncut cycle on a partner line - cells loaded, busbars placed, weld completed.
            </p>
            <div className="aspect-video w-full rounded-lg border border-border bg-background flex flex-col items-center justify-center gap-2">
              <p className="font-medium text-foreground">Watch Buildo complete a pack cycle</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Video coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <h2 className="font-light text-3xl lg:text-5xl leading-tight mb-4">
              Same shed. Different numbers.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-12 max-w-3xl">
              No new building, no fixed tooling, no line teardown. The robot works the bench
              your operators already work.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal pb-4">
                      Per 3 kWh pack
                    </th>
                    <th className="text-left text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal pb-4">
                      Manual line today
                    </th>
                    <th className="text-left text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal pb-4">
                      Target with Buildo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <td className="py-5 text-sm text-muted-foreground">{row.label}</td>
                      <td className="py-5 text-base text-foreground">{row.manual}</td>
                      <td className="py-5 font-light text-xl lg:text-2xl text-primary">{row.buildo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-6 max-w-2xl">
              Today's figures are measured on partner lines. The Buildo column is our
              engineering target, not a measured result - we will publish measured numbers
              once the first tele-operated deployments run.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {benefits.map((b) => (
                <div key={b.title}>
                  <h3 className="font-medium text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <h2 className="font-light text-3xl lg:text-5xl leading-tight mb-4">
              How we get there.
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-12 max-w-3xl">
              Data first, tele-operation second, autonomy third. Your line keeps running
              throughout - nothing waits on the model being finished.
            </p>

            <div className="divide-y divide-border border-t border-border">
              {roadmap.map((r) => (
                <div key={r.title} className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 py-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">
                    {r.phase}
                  </span>
                  <div>
                    <h3 className="text-lg lg:text-xl font-medium text-foreground mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section id="partner-form" className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-light text-3xl lg:text-5xl leading-tight mb-6">
                  Put your line in the training set.
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
                  We are looking for battery pack manufacturers to partner with us on data
                  collection. You keep building the way you build today. We record it, and
                  you get first access to what it produces.
                </p>

                <div className="space-y-8">
                  {partnerPoints.map((p) => (
                    <div key={p.title}>
                      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                        {p.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-border space-y-2 text-sm">
                  <a href="mailto:akhil@mazoutelectric.com" className="block text-primary hover:text-foreground transition-colors">
                    akhil@mazoutelectric.com
                  </a>
                  <a href="tel:+919354178340" className="block text-muted-foreground hover:text-foreground transition-colors">
                    +91 93541 78340
                  </a>
                  <a href="https://mazoutelectric.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">
                    mazoutelectric.com
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="border border-border rounded-lg p-6 lg:p-8 flex flex-col gap-4 bg-card/30">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="companyName"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="yourName"
                    placeholder="Your name"
                    value={formData.yourName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="role"
                    placeholder="Role (optional)"
                    value={formData.role}
                    onChange={handleChange}
                  />
                  <Input
                    name="workEmail"
                    type="email"
                    placeholder="Work email"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select
                    value={formData.packsPerMonth}
                    onValueChange={(v) => setFormData({ ...formData, packsPerMonth: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Packs per month" />
                    </SelectTrigger>
                    <SelectContent>
                      {packsPerMonthOptions.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={formData.packSize}
                    onValueChange={(v) => setFormData({ ...formData, packSize: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Typical pack size" />
                    </SelectTrigger>
                    <SelectContent>
                      {packSizeOptions.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Select
                  value={formData.assemblySetup}
                  onValueChange={(v) => setFormData({ ...formData, assemblySetup: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Assembly setup" />
                  </SelectTrigger>
                  <SelectContent>
                    {assemblySetupOptions.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  name="notes"
                  placeholder="Anything we should know (optional)"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none"
                />
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Checkbox
                    checked={consent}
                    onCheckedChange={(v) => setConsent(v === true)}
                    className="mt-0.5"
                  />
                  I'm happy for Mazout Electric to contact me about data collection and pilot deployment.
                </label>
                <Button type="submit" size="lg" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Send partnership enquiry"}
                </Button>
                {status === "success" && (
                  <p className="text-primary text-sm text-center">
                    Thanks - we've received your enquiry.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-destructive text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="text-xs text-muted-foreground text-center">
                  We reply within two working days. Prefer email? Write to{" "}
                  <a href="mailto:akhil@mazoutelectric.com" className="text-primary hover:text-foreground transition-colors">
                    akhil@mazoutelectric.com
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BatteryManufacturingAutopilot;
