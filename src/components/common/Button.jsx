import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20",
    secondary: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative px-8 py-4 rounded-xl font-bold transition-all shadow-lg overflow-hidden group ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>

      {/* Shimmer Effect */}
      <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent to-white/20 opacity-40 transform -skew-x-12 group-hover:animate-shine" />
    </motion.button>
  );
};

export default Button;
