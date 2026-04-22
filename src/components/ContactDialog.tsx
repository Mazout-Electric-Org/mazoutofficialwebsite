import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const FORMSPREE_CONTACT = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT as string;

const contactInfo = [
  {
    icon: Phone,
    label: "Contact number",
    value: "+91 93541 78340",
    href: "tel:+919354178340",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mazoutelectric.com",
    href: "mailto:info@mazoutelectric.com",
  },
];

const addresses = [
  {
    label: "Registered office",
    value: "G-39, Cross River Mall, CBD Shahdara, Delhi - 110092, India",
  },
  {
    label: "OVERSEAS OFFICE",
    value: "8-111, 78 SW 7th Street, Brickell City Centre, Miami, Florida 33130, United States",
  },
];

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
  });
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
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      setTimeout(() => {
        setFormData({ fullName: "", email: "", company: "", mobile: "", message: "" });
        setStatus("idle");
        onOpenChange(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-[#0a0a0a] border-[#222] text-[#f0f0f0] sm:max-w-md">
          <div className="text-center space-y-4 py-8">
            <h2 className="text-3xl font-bold text-primary">Thank you!</h2>
            <p className="text-sm text-[#888]">
              We've received your message and will be in touch soon.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-border text-foreground sm:max-w-4xl">
        <DialogClose className="absolute right-4 top-4 z-50" />
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-8 border-b border-border pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <div>
              <p className="mb-3 font-sans text-xs uppercase tracking-[0.24em] text-primary">Contact</p>
              <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Reach out to us for demos, pilots, partnerships, and deployments.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex gap-4 text-sm transition-colors hover:text-primary">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="block font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
                    <span className="mt-1 block text-foreground">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="space-y-5">
              {addresses.map(({ label, value }) => (
                <div key={label} className="flex gap-4 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="block font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
                    <span className="mt-1 block leading-6 text-foreground">{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Input
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Input
              name="mobile"
              type="tel"
              placeholder="Phone Number"
              value={formData.mobile}
              onChange={handleChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary resize-none"
            />
            <Button type="submit" className="w-full mt-2" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send Message"}
            </Button>
            {status === "error" && (
              <p className="text-destructive text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;