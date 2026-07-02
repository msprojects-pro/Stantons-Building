import React from "react";
import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";
import { COMPANY_DETAILS } from "../data";

export const FloatingCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 sm:hidden">
      <motion.a
        href={`tel:${COMPANY_DETAILS.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-brand-brown to-brand-green text-white shadow-2xl border border-white/20"
        aria-label="Call Stantons Now"
      >
        <PhoneCall className="w-6 h-6 animate-pulse" />
      </motion.a>
    </div>
  );
};
