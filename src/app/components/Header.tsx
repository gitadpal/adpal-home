import { motion } from "motion/react";
import { Link } from "react-router";
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
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="AdPal Logo" className="adpal-logo-img h-10 w-auto object-contain drop-shadow-lg" />
            <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-white drop-shadow-lg">
              AdPal
            </span>
          </Link>
          <Link
            to="/download"
            className="group relative overflow-hidden font-['Inter'] text-sm font-semibold text-white/80 hover:text-[#00FFC2] active:text-[#00FFC2] transition-colors px-4 py-2 rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-700" />
            <span className="relative">Get the App</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}