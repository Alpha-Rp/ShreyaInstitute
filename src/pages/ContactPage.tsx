import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import EnquiryForm from "@/components/EnquiryForm";
import { HeroDecoration } from "@/components/SvgElements";

const ContactPage = () => (
  <div>
    {/* Hero Header */}
    <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
      <HeroDecoration />
      <div className="container text-center relative z-10">
        <AnimatedSection variant="fadeUp">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5">Contact Us</h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Have questions about our courses? Fill in the enquiry form and we'll get back to you shortly.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <AnimatedSection variant="fadeLeft">
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-2xl border border-border/50 p-7 md:p-9 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-accent" />
                <h2 className="text-2xl font-display font-bold text-foreground mb-7">Student Enquiry Form</h2>
                <EnquiryForm />
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div>
            <AnimatedSection variant="fadeRight">
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-2">Reach Us</span>
                  <h3 className="text-xl font-display font-bold text-foreground">Get in Touch</h3>
                </div>

                {[
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: <Phone className="w-5 h-5" />, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@shreyainstitute.com", href: "mailto:info@shreyainstitute.com" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  </motion.a>
                ))}

                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p>Shreya Institute, Main Road, City, India - 000000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Map */}
        <AnimatedSection className="mt-14" variant="scaleIn">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <iframe
              title="Shreya Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default ContactPage;
