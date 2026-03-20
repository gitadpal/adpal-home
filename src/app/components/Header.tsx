import { motion } from "motion/react";
import logoImage from "@/assets/89d014c4bbe5f9bfe9f2d34d3475fc63288a688a.png";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="AdPal Logo" className="adpal-logo-img h-10 w-auto object-contain drop-shadow-lg" />
            <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-white drop-shadow-lg">
              AdPal
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}