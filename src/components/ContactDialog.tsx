import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    onOpenChange(false);
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0a0a0a] border-[#222] text-[#f0f0f0] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#f0f0f0]">
            Get in Touch
          </DialogTitle>
          <p className="text-sm text-[#888]">
            Fill in your details and we'll get back to you shortly.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Input
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary"
          />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            className="bg-[#111] border-[#333] text-[#f0f0f0] placeholder:text-[#555] focus-visible:ring-primary resize-none"
          />
          <Button type="submit" className="w-full mt-2">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
