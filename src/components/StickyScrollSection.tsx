import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyScrollSectionProps {
  children: ReactNode;
  className?: string;
  bgClassName?: string;
}

/**
 * A section where the background stays fixed/sticky
 * and content scrolls over it with a parallax effect.
 */
const StickyScrollSection = ({
  children,
  className = "",
  bgClassName = "",
}: StickyScrollSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 ${bgClassName}`}
        style={{ y, opacity }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default StickyScrollSection;
