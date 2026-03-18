import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center"
    >
      <div className="relative w-32 h-32">
        {/* Blueprint SVG Animation */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full stroke-blue-500"
        >
          <motion.path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Scanning Light Effect */}
<motion.div
  initial={{ top: "-10%" }}
  animate={{ top: "110%" }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  className="absolute left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-10"
/>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-8 text-center"
>
  <h1 className="text-white tracking-[0.5em] font-light text-sm mb-2">
    FIXIFY
  </h1>

  <div className="flex gap-1 justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          delay: i * 0.2,
        }}
        className="w-1.5 h-1.5 bg-blue-500 rounded-full"
      />
    ))}
  </div>
</motion.div>

      </div>
    </motion.div>
  );
};

export default Loader;

