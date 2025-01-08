import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', service_wny424s
        'YOUR_TEMPLATE_ID', template_pkzmawe
        {
          to_email: 'jake@thetimhawkesteam.com', // Replace with your email
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: `New HELP Grant Inquiry from ${formData.name}`,
        },
        'YOUR_PUBLIC_KEY' Uj8SmT3R-w-OqNWQx
      );

      toast({
        title: "Thanks for your interest!",
        description: "A representative will contact you soon about the HELP Grant.",
      });
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="mt-1"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-help-blue hover:bg-help-navy"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Get Started Today"}
      </Button>
    </form>
  );
};
