import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, Star, ArrowRight, Phone, Briefcase, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import CourseCard from "@/components/CourseCard";
import { HeroDecoration, QuoteIcon, WaveDivider } from "@/components/SvgElements";
import heroImg from "@/assets/hero-teacher.jpg";
import successImg from "@/assets/success-students.jpg";

const courses = [
  {
    title: "NTT",
    shortTitle: "Nursery Teacher Training",
    description: "Prepare yourself to become an exceptional preschool educator with hands-on training in early childhood teaching methods.",
    benefits: ["Practical classroom training", "Child psychology fundamentals", "Creative teaching techniques"],
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "PTT / PPT",
    shortTitle: "Primary Teacher Training",
    description: "Develop the skills needed to teach primary school students with confidence and modern pedagogical approaches.",
    benefits: ["Subject-wise teaching methods", "Classroom management skills", "Assessment & evaluation"],
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "ECCE",
    shortTitle: "Early Childhood Care & Education",
    description: "Master child development principles and early education techniques to nurture young learners effectively.",
    benefits: ["Child development theory", "Activity-based learning", "Health & nutrition awareness"],
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Spoken English",
    shortTitle: "Communication Skills",
    description: "Build fluent English communication skills essential for a successful teaching career in modern schools.",
    benefits: ["Fluency & pronunciation", "Grammar & vocabulary building", "Confidence in public speaking"],
    icon: <Users className="w-6 h-6" />,
  },
];

const testimonials = [
  { name: "Priya Sharma", text: "Shreya Institute helped me transition from a homemaker to a confident preschool teacher. The practical training was invaluable!", role: "NTT Graduate", stars: 5 },
  { name: "Anita Verma", text: "The placement support was amazing. I got placed in a reputed school within a month of completing my course.", role: "PTT Graduate", stars: 5 },
  { name: "Kavitha R.", text: "The Spoken English course boosted my confidence tremendously. I now teach with authority and clarity.", role: "Spoken English Graduate", stars: 5 },
];

const stats = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 100, suffix: "%", label: "Job Support" },
  { value: 4, suffix: "", label: "Professional Courses" },
  { value: 50, suffix: "+", label: "Partner Schools" },
];

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroScrollProgress, [0, 1], ["0%", "20%"]);
  const heroTextY = useTransform(heroScrollProgress, [0, 1], ["0%", "10%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* ===== HERO — Sticky parallax ===== */}
      <section ref={heroRef} className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
        <HeroDecoration />
        <div className="container py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
              <AnimatedSection variant="fadeLeft">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  100% Job Support
                </motion.span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                  Empowering Women Through{" "}
                  <span className="text-accent relative">
                    Teacher Training
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0 8C50 0 150 0 200 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                  Build a rewarding career in education with Shreya Institute's practical training programs. Designed for housewives, women, and freshers ready to make a difference.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-8 py-6 text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all">
                      <Phone className="w-4 h-4 mr-2" /> Enquire Now
                    </Button>
                  </Link>
                  <Link to="/courses">
                    <Button variant="outline" className="font-display font-semibold px-8 py-6 text-base border-white/30 text-black hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                      View Courses <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </motion.div>

            <motion.div style={{ y: heroImgY }}>
              <AnimatedSection variant="fadeRight" delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl gradient-accent opacity-20 blur-2xl" />
                  <img
                    src={heroImg}
                    alt="Confident teacher at Shreya Institute"
                    className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10 border-2 border-white/10"
                  />
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -bottom-4 -left-4 md:-left-8 z-20 bg-white rounded-xl shadow-xl px-5 py-3 flex items-center gap-3"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  >
                    <div className="w-10 h-10 rounded-full gradient-secondary flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground text-sm">Certified</p>
                      <p className="text-xs text-muted-foreground">Training Programs</p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS — sticky scroll counter ===== */}
      <section className="relative z-10 -mt-8 mb-8">
        <div className="container">
          <AnimatedSection variant="scaleIn">
            <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl md:text-4xl font-display font-bold gradient-text"
                    duration={2.5}
                  />
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== COURSES OVERVIEW ===== */}
      <section className="section-alt py-16 md:py-24">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional teacher training programs designed to launch your career in education
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <AnimatedSection key={course.title} variant="fadeUp" delay={i * 0.1}>
                <CourseCard {...course} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US — Sticky section ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose Shreya Institute?</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase className="w-7 h-7" />, title: "100% Job Support", desc: "We provide complete placement assistance to help you start your teaching career immediately after course completion.", gradient: "from-primary/10 to-primary/5" },
              { icon: <Award className="w-7 h-7" />, title: "Practical Training", desc: "Hands-on classroom experience with real teaching scenarios ensures you're job-ready from day one.", gradient: "from-secondary/10 to-secondary/5" },
              { icon: <Users className="w-7 h-7" />, title: "Women Empowerment", desc: "Specially designed for housewives and women looking to build independent, fulfilling careers in education.", gradient: "from-accent/10 to-accent/5" },
              { icon: <Star className="w-7 h-7" />, title: "Expert Faculty", desc: "Learn from experienced educators who bring years of practical teaching knowledge to every session.", gradient: "from-primary/10 to-primary/5" },
              { icon: <BookOpen className="w-7 h-7" />, title: "Updated Curriculum", desc: "Our courses are regularly updated to match current educational standards and school requirements.", gradient: "from-secondary/10 to-secondary/5" },
              { icon: <GraduationCap className="w-7 h-7" />, title: "Recognized Certification", desc: "Receive industry-recognized certificates that open doors to teaching positions across schools.", gradient: "from-accent/10 to-accent/5" },
            ].map((item, i) => (
              <AnimatedSection key={i} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative p-7 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-lg transition-shadow group overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="section-alt py-16 md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection variant="fadeLeft">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
                <img src={successImg} alt="Successful graduates of Shreya Institute" className="rounded-2xl shadow-xl w-full object-cover aspect-video relative z-10" />
                {/* Stats badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 md:-right-8 z-20 bg-white rounded-xl shadow-xl px-5 py-3"
                  style={{ animation: "float 5s ease-in-out infinite 1s" }}
                >
                  <p className="font-display font-bold text-2xl gradient-text">500+</p>
                  <p className="text-xs text-muted-foreground">Students Placed</p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Student Success Stories</h2>
              <div className="space-y-5">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative bg-white rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <QuoteIcon className="absolute top-3 right-4 w-10 h-10 text-primary" />
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-secondary">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" style={{ animation: "float 7s ease-in-out infinite" }} />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl" style={{ animation: "float 9s ease-in-out infinite 2s" }} />
        </div>

        <div className="container text-center relative z-10">
          <AnimatedSection variant="scaleIn">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5">
              Ready to Start Your Teaching Career?
            </h2>
            <p className="text-white/75 mb-10 max-w-xl mx-auto text-lg">
              Join hundreds of women who have transformed their lives through our training programs. Enquire today!
            </p>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-12 py-7 text-lg shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/35 transition-all hover:scale-105">
                <Phone className="w-5 h-5 mr-2" /> Enquire Now
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
