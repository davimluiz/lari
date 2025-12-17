
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Added explicit Variants type and as const for string literals to fix TS errors
const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 3, 
      ease: "easeInOut" as const
    }
  }
};

// Added explicit Variants type and as const for string literals to fix TS errors
const leafVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 0.8,
    transition: { 
      delay: 2, 
      duration: 1, 
      type: "spring" as const
    }
  }
};

export const SunflowerArt: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60 md:opacity-80 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {/* Left Branch */}
        <motion.path
          d="M200 350 C 150 300, 100 200, 150 100"
          stroke="#ca8a04"
          strokeWidth="1.5"
          variants={pathVariants}
        />
        <motion.path
          d="M150 100 C 180 80, 220 120, 250 100"
          stroke="#ca8a04"
          strokeWidth="1"
          variants={pathVariants}
        />
        
        {/* Right Branch */}
        <motion.path
          d="M600 350 C 650 300, 700 200, 650 100"
          stroke="#ca8a04"
          strokeWidth="1.5"
          variants={pathVariants}
        />
         <motion.path
          d="M650 100 C 620 80, 580 120, 550 100"
          stroke="#ca8a04"
          strokeWidth="1"
          variants={pathVariants}
        />

        {/* Abstract Flowers - Left */}
        <motion.circle cx="150" cy="100" r="15" fill="#fcd34d" variants={leafVariants} />
        <motion.circle cx="150" cy="100" r="6" fill="#713f12" variants={leafVariants} />
        
        {/* Abstract Flowers - Right */}
        <motion.circle cx="650" cy="100" r="15" fill="#fcd34d" variants={leafVariants} />
        <motion.circle cx="650" cy="100" r="6" fill="#713f12" variants={leafVariants} />

        {/* Leaves */}
        <motion.path d="M180 250 Q 150 240 160 270 Z" fill="#65a30d" variants={leafVariants} />
        <motion.path d="M620 250 Q 650 240 640 270 Z" fill="#65a30d" variants={leafVariants} />

      </motion.svg>
    </div>
  );
};
