import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const courses = [
  "NTT – Nursery Teacher Training",
  "PTT/PPT – Primary Teacher Training",
  "ECCE – Early Childhood Care & Education",
  "Spoken English",
];

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", whatsapp: "", email: "", course: "", city: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">Your enquiry has been submitted successfully. We'll contact you soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          placeholder="Full Name *"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Phone Number *"
          required
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <Input
          placeholder="WhatsApp Number *"
          required
          type="tel"
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
        />
        <Input
          placeholder="Email (Optional)"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Select onValueChange={(v) => setForm({ ...form, course: v })}>
          <SelectTrigger>
            <SelectValue placeholder="Course Interested In *" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="City *"
          required
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
      </div>
      <Textarea
        placeholder="Your Message (Optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={3}
      />
      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-base py-6">
        Submit Enquiry
      </Button>
    </form>
  );
};

export default EnquiryForm;
