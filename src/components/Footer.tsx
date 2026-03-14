import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { WaveDivider, FacebookIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from "@/components/SvgElements";
import AnimatedSection from "@/components/AnimatedSection";

const Footer = () => (
  <footer className="relative">
    {/* Wave separator */}
    <WaveDivider className="text-primary -mb-1" />

    <div className="gradient-hero text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <AnimatedSection variant="fadeUp" className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-display font-bold leading-tight">Shreya</span>
                <span className="text-xs font-display font-medium text-white/70 ml-1">Institute</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering women and freshers through professional teacher training programs with 100% job support.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FacebookIcon, href: "#", label: "Facebook" },
                { Icon: InstagramIcon, href: "#", label: "Instagram" },
                { Icon: YoutubeIcon, href: "#", label: "YouTube" },
                { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <h4 className="font-display font-semibold mb-5 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full bg-accent" />
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/70">
              {[
                { to: "/about", label: "About Us" },
                { to: "/courses", label: "Courses" },
                { to: "/placements", label: "Placements" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-accent hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5"
                >
                  <span className="text-accent/50">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* Courses */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <h4 className="font-display font-semibold mb-5 text-white relative inline-block">
              Our Courses
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full bg-accent" />
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/70">
              {["NTT – Nursery Teacher Training", "PTT – Primary Teacher Training", "ECCE – Early Childhood Care", "Spoken English"].map((course) => (
                <Link
                  key={course}
                  to="/courses"
                  className="hover:text-accent hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5"
                >
                  <span className="text-accent/50">›</span>
                  {course}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection variant="fadeUp" delay={0.3}>
            <h4 className="font-display font-semibold mb-5 text-white relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full bg-accent" />
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/70">
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-accent transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                +91 98765 43210
              </a>
              <a href="mailto:info@shreyainstitute.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                info@shreyainstitute.com
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                Shreya Institute, Main Road, City, India
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Shreya Institute. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white/80 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/80 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
