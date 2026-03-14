import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, FileText, Handshake, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { HeroDecoration } from "@/components/SvgElements";
import successImg from "@/assets/success-students.jpg";

const features = [
  { icon: <Briefcase className="w-7 h-7" />, title: "Job Assistance", desc: "We actively connect our graduates with schools, preschools, and educational institutions looking for trained teachers.", color: "primary" },
  { icon: <Users className="w-7 h-7" />, title: "Career Guidance", desc: "Personalized career counselling to help you identify the right teaching path based on your strengths and interests.", color: "secondary" },
  { icon: <FileText className="w-7 h-7" />, title: "Interview Preparation", desc: "Mock interviews, resume building, and communication coaching to ensure you make a strong first impression.", color: "accent" },
  { icon: <Handshake className="w-7 h-7" />, title: "Partner Schools", desc: "We have tie-ups with numerous schools and educational institutions that actively recruit our graduates.", color: "primary" },
];

const steps = [
  "Complete your chosen training program",
  "Resume building & interview coaching sessions",
  "Receive job opportunities from our partner schools",
  "Attend interviews with placement cell support",
  "Get placed and begin your teaching career!",
];

const PlacementsPage = () => (
  <div>
    {/* Hero Header */}
    <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
      <HeroDecoration />
      <div className="container text-center relative z-10">
        <AnimatedSection variant="fadeUp">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Career Support</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5">100% Placement Support</h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            We don't just train you — we help you get placed. Our dedicated placement cell works tirelessly to connect graduates with the right opportunities.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {features.map((f, i) => (
            <AnimatedSection key={i} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white p-7 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all h-full group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-14 h-14 rounded-xl bg-${f.color}/10 text-${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Placement Process */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <img src={successImg} alt="Placed students" className="rounded-2xl shadow-xl w-full object-cover aspect-video relative z-10" />
            </div>

            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Step by Step</span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Our Placement Process</h2>

              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className="flex items-start gap-4 relative"
                    >
                      <div className="w-9 h-9 rounded-full gradient-primary text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-md z-10">
                        {i + 1}
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-border/50 shadow-sm flex-1 hover:shadow-md transition-shadow">
                        <p className="text-sm text-foreground font-medium">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">Start Your Journey Today</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">Join the hundreds of women who've built successful teaching careers through Shreya Institute.</p>
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

export default PlacementsPage;
