import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  shortTitle: string;
  description: string;
  benefits: string[];
  icon: ReactNode;
}

const CourseCard = ({ title, shortTitle, description, benefits, icon }: CourseCardProps) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="relative bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-xl transition-shadow group overflow-hidden"
  >
    {/* Gradient accent bar at top */}
    <div className="absolute top-0 left-0 right-0 h-1 gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Icon with gradient bg */}
    <motion.div
      className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300"
      whileHover={{ rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>

    <h3 className="text-lg font-display font-bold text-foreground mb-1">{title}</h3>
    <p className="text-xs font-medium text-secondary mb-3">{shortTitle}</p>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

    <ul className="text-sm text-muted-foreground space-y-1.5 mb-5">
      {benefits.map((b, i) => (
        <li key={i} className="flex items-start gap-2">
          <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {b}
        </li>
      ))}
    </ul>

    <Link
      to="/contact"
      className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors"
    >
      Enquire Now
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
    </Link>

    {/* Decorative corner circle */}
    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/[0.03] group-hover:bg-primary/[0.06] transition-colors" />
  </motion.div>
);

export default CourseCard;
