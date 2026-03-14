import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="flex min-h-[85vh] items-center justify-center relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" style={{ animation: "float 6s ease-in-out infinite 2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
    </div>

    <div className="text-center relative z-10 px-6">
      {/* 404 SVG illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <svg className="w-64 h-48 mx-auto" viewBox="0 0 300 200" fill="none">
          {/* Left "4" */}
          <motion.text
            x="30" y="130"
            fontSize="100"
            fontWeight="800"
            fill="url(#grad404)"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            4
          </motion.text>

          {/* Center circle / magnifying glass */}
          <motion.circle
            cx="150" cy="100" r="45"
            stroke="url(#grad404)" strokeWidth="8" fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          />
          <motion.line
            x1="183" y1="133" x2="210" y2="160"
            stroke="url(#grad404)" strokeWidth="8" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          />
          <motion.text
            x="137" y="110"
            fontSize="28"
            fontWeight="700"
            fill="url(#grad404)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            ?
          </motion.text>

          {/* Right "4" */}
          <motion.text
            x="220" y="130"
            fontSize="100"
            fontWeight="800"
            fill="url(#grad404)"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            4
          </motion.text>

          {/* Floating particles */}
          {[
            { cx: 50, cy: 30, r: 3, delay: 1 },
            { cx: 250, cy: 40, r: 4, delay: 1.2 },
            { cx: 100, cy: 170, r: 3, delay: 1.4 },
            { cx: 200, cy: 25, r: 2.5, delay: 1.1 },
            { cx: 270, cy: 150, r: 3.5, delay: 1.3 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.cx} cy={p.cy} r={p.r}
              fill="hsl(222 72% 40%)"
              opacity="0.3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{ delay: p.delay, duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            />
          ))}

          <defs>
            <linearGradient id="grad404" x1="0" y1="0" x2="300" y2="200">
              <stop offset="0%" stopColor="hsl(222 72% 40%)" />
              <stop offset="50%" stopColor="hsl(174 84% 32%)" />
              <stop offset="100%" stopColor="hsl(38 92% 50%)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3"
      >
        Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground mb-8 max-w-md mx-auto"
      >
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center gap-4"
      >
        <Link to="/">
          <Button className="gradient-primary text-white font-display font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-6 py-5">
            <Home className="w-4 h-4 mr-2" /> Go Home
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="font-display font-semibold px-6 py-5 border-primary text-primary hover:bg-primary hover:text-white">
            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </div>
);

export default NotFound;
