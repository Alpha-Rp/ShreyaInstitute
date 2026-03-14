import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { HeroDecoration } from "@/components/SvgElements";
import heroImg from "@/assets/gallery-2.jpg";

const milestones = [
  { year: "Founded", title: "Institute Established", desc: "Shreya Institute was founded with a vision to empower women through education." },
  { year: "100+", title: "First Batch Graduated", desc: "Our first batch of trained teachers entered the workforce with 100% placement support." },
  { year: "500+", title: "Students Trained", desc: "Crossed the milestone of training 500+ women across multiple courses." },
  { year: "50+", title: "Partner Schools", desc: "Built partnerships with 50+ schools and educational institutions for placements." },
];

const AboutPage = () => (
  <div>
    {/* Hero Header */}
    <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
      <HeroDecoration />
      <div className="container text-center relative z-10">
        <AnimatedSection variant="fadeUp">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Who We Are</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5">About Shreya Institute</h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Empowering women and freshers to build fulfilling careers in education since our founding.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <AnimatedSection variant="fadeLeft">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <img src={heroImg} alt="Training session at Shreya Institute" className="rounded-2xl shadow-xl w-full object-cover aspect-video relative z-10" />
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeRight">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Our Story</span>
            <h2 className="text-3xl font-display font-bold text-foreground mb-5">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shreya Institute is a premier teacher training centre dedicated to empowering women — especially housewives and freshers — with the skills, confidence, and certification needed to build successful teaching careers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our practical, hands-on training programs are designed to bridge the gap between aspiration and employment. With 100% job support and placement assistance, we ensure every graduate is career-ready.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-display font-bold gradient-text">500+</p>
                <p className="text-xs text-muted-foreground">Graduates</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold gradient-text">100%</p>
                <p className="text-xs text-muted-foreground">Job Support</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold gradient-text">50+</p>
                <p className="text-xs text-muted-foreground">Partners</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission, Vision, Values */}
    <section className="section-alt py-16 md:py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Our Foundation</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What Drives Us</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <Target className="w-7 h-7" />, title: "Our Mission", desc: "To provide accessible, high-quality teacher training that empowers women to achieve financial independence and professional fulfillment through education careers.", color: "primary" },
            { icon: <Eye className="w-7 h-7" />, title: "Our Vision", desc: "To become the leading teacher training institute that transforms the lives of women across India by making quality education training accessible to all.", color: "secondary" },
            { icon: <Heart className="w-7 h-7" />, title: "Women Empowerment", desc: "We believe every woman deserves the opportunity to build a career. Our programs are specifically designed to accommodate women re-entering the workforce.", color: "accent" },
            { icon: <Users className="w-7 h-7" />, title: "Career-Focused Approach", desc: "Every aspect of our curriculum is designed with employability in mind — from practical classroom experience to interview preparation and school placements.", color: "primary" },
          ].map((item, i) => (
            <AnimatedSection key={i} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white p-7 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 gradient-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 text-${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline / Milestones */}
    <section className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Key Milestones</h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {milestones.map((m, i) => (
            <AnimatedSection key={i} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.15}>
              <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 shadow-md" />

                <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:mr-auto md:pr-14 md:text-right md:w-1/2" : "md:ml-auto md:pl-14 md:w-1/2"}`}>
                  <div className="bg-white rounded-xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block text-sm font-bold text-accent mb-1">{m.year}</span>
                    <h3 className="font-display font-semibold text-foreground mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" style={{ animation: "float 7s ease-in-out infinite" }} />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl" style={{ animation: "float 9s ease-in-out infinite 2s" }} />
      </div>
      <div className="container text-center relative z-10">
        <AnimatedSection variant="scaleIn">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">Join Shreya Institute Today</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">Take the first step towards a rewarding teaching career.</p>
          <Link to="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-10 py-7 text-lg shadow-xl shadow-accent/25 hover:scale-105 transition-all">
              <Phone className="w-5 h-5 mr-2" /> Enquire Now
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default AboutPage;
