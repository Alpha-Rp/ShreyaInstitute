import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "rotateIn";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -5, scale: 0.95 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={variants[variant]}
    transition={{
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
