import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Heart, Users, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { HeroDecoration } from "@/components/SvgElements";

const courses = [
  {
    title: "NTT – Nursery Teacher Training",
    icon: <BookOpen className="w-8 h-8" />,
    overview: "Our NTT program prepares you to become an exceptional preschool and nursery teacher. Learn age-appropriate teaching methods, child psychology, and creative classroom techniques that make learning fun for young children.",
    benefits: ["Hands-on classroom training with real students", "Child psychology & behaviour management", "Creative teaching methods & activity planning", "Storytelling, rhymes & play-based learning", "Practical assessment & evaluation techniques"],
    careers: ["Nursery Teacher", "Preschool Educator", "Playschool Coordinator", "Home Tutor for young learners", "Daycare Centre Supervisor"],
    color: "primary",
  },
  {
    title: "PTT / PPT – Primary Teacher Training",
    icon: <GraduationCap className="w-8 h-8" />,
    overview: "The PTT/PPT program equips you with comprehensive skills to teach primary school students. Master subject-wise teaching methodologies, classroom management, and student assessment techniques.",
    benefits: ["Subject-specific teaching methodologies", "Classroom management & discipline strategies", "Lesson planning & curriculum development", "Student assessment & progress tracking", "Modern teaching aids & technology integration"],
    careers: ["Primary School Teacher", "Private Tutor", "Academic Coordinator", "Education Content Developer", "After-school Program Instructor"],
    color: "secondary",
  },
  {
    title: "ECCE – Early Childhood Care & Education",
    icon: <Heart className="w-8 h-8" />,
    overview: "The ECCE program focuses on holistic child development and early education. Understand the physical, cognitive, and emotional development stages of children and learn to create nurturing learning environments.",
    benefits: ["Child development theory & practice", "Activity-based & experiential learning", "Health, nutrition & safety awareness", "Special needs awareness & inclusive education", "Parent communication & involvement strategies"],
    careers: ["Early Childhood Educator", "Child Development Specialist", "Montessori Teacher", "Anganwadi Worker/Supervisor", "Child Care Centre Manager"],
    color: "accent",
  },
  {
    title: "Spoken English",
    icon: <Users className="w-8 h-8" />,
    overview: "Build confident English communication skills essential for a successful teaching career. Our Spoken English course focuses on fluency, pronunciation, grammar, and public speaking skills.",
    benefits: ["Fluency & pronunciation improvement", "Grammar & vocabulary building", "Public speaking & presentation skills", "Interview preparation & communication", "Confidence building exercises"],
    careers: ["English Language Tutor", "Communication Skills Trainer", "Customer Service Professional", "Front Office Executive", "Teaching in English-medium Schools"],
    color: "primary",
  },
];

const CoursesPage = () => (
  <div>
    {/* Hero Header */}
    <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
      <HeroDecoration />
      <div className="container text-center relative z-10">
        <AnimatedSection variant="fadeUp">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Programs</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5">Our Courses</h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Professional teacher training programs with practical approach and 100% job support
          </p>
        </AnimatedSection>
      </div>
    </section>

    <div className="py-16 md:py-24">
      <div className="container space-y-20">
        {courses.map((course, idx) => (
          <AnimatedSection key={idx} variant="fadeUp">
            <div className={`grid md:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? "md:[direction:rtl] md:*:[direction:ltr]" : ""}`}>
              {/* Course info card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-border/50 p-8 shadow-sm hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-accent" />
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-${course.color}/10 text-${course.color} flex items-center justify-center mb-5`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {course.icon}
                </motion.div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">{course.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{course.overview}</p>
                <Link to="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold shadow-md shadow-accent/20 hover:shadow-lg transition-all">
                    <Phone className="w-4 h-4 mr-2" /> Enquire Now
                  </Button>
                </Link>
              </motion.div>

              {/* Benefits & Careers */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg gradient-secondary flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    Course Benefits
                  </h3>
                  <ul className="space-y-2.5">
                    {course.benefits.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" /> {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    Career Opportunities
                  </h3>
                  <ul className="space-y-2.5">
                    {course.careers.map((c, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> {c}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {idx < courses.length - 1 && (
              <div className="flex justify-center mt-16">
                <div className="w-24 h-0.5 rounded-full bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            )}
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default CoursesPage;
