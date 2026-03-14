import { WhatsAppIcon } from "@/components/SvgElements";
import { motion } from "framer-motion";
import { useState } from "react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.9 }}
        animate={hovered ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 10, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap"
      >
        Chat with us!
      </motion.div>

      {/* Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20courses%20at%20Shreya%20Institute"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" style={{ animationDelay: "0.5s" }} />

        <WhatsAppIcon className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
