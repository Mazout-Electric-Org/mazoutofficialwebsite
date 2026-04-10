import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FORMSPREE_CONTACT = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT as string;

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
      <DialogContent className="bg-[#0a0a0a] border-[#222] text-[#f0f0f0] sm:max-w-md">
        <DialogClose className="absolute right-4 top-4 z-50" />
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-[#f0f0f0]">Get in Touch</h2>
          <p className="text-sm text-[#888] mt-1">
            Fill in your details and we'll get back to you shortly.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <Input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Input
            name="mobile"
            type="tel"
            placeholder="Phone Number"
            value={formData.mobile}
            onChange={handleChange}
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary resize-none"
          />
          <Button type="submit" className="w-full mt-2" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Message"}
          </Button>
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;