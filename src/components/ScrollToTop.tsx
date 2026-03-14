import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollUp}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full gradient-primary text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
