import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// More artistic and detailed Sunflower Icon
const SunflowerIcon = ({ size, color }: { size: number; color: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-md"
    style={{ overflow: 'visible' }}
  >
    {/* Outer Petals */}
    <path 
      d="M50 15 C54 2, 62 2, 66 15 C70 8, 78 12, 78 20 C85 16, 92 22, 88 30 C96 30, 98 40, 92 46 C100 50, 96 60, 88 64 C92 72, 85 80, 78 78 C76 88, 66 90, 62 84 C56 94, 44 94, 38 84 C34 90, 24 88, 22 78 C15 80, 8 72, 12 64 C4 60, 0 50, 8 46 C2 40, 4 30, 12 30 C8 22, 15 16, 22 20 C22 12, 30 8, 34 15 C38 2, 46 2, 50 15 Z" 
      fill={color} 
      stroke="#ca8a04"
      strokeWidth="1"
      opacity="0.95"
    />
    {/* Inner Petals Detail */}
    <path
       d="M50 25 L53 35 M65 28 L62 38 M78 40 L68 45 M80 55 L70 55 M75 70 L65 62 M60 80 L55 68 M40 80 L45 68 M25 70 L35 62 M20 55 L30 55 M22 40 L32 45 M35 28 L38 38"
       stroke="#b45309"
       strokeWidth="1.5"
       strokeLinecap="round"
       opacity="0.6"
    />
    
    {/* Center - Dark Brown */}
    <circle cx="50" cy="50" r="16" fill="#451a03" />
    {/* Seeds texture */}
    <circle cx="50" cy="50" r="14" fill="url(#seedPattern)" fillOpacity="0.5"/>
    <defs>
      <pattern id="seedPattern" width="4" height="4" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#78350f" />
      </pattern>
    </defs>
  </svg>
);

export const FlowerRainBackground: React.FC = () => {
  // Generate flowers
  const flowers = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, 
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 20, 
      size: 24 + Math.random() * 36, // Slightly larger
      rotationStart: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4, // More visible
      type: Math.random() > 0.6 ? '#fcd34d' : '#fbbf24' 
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute top-[-100px]"
          style={{
            left: `${f.x}%`,
            opacity: f.opacity,
            zIndex: 0
          }}
          initial={{ y: -100, rotate: f.rotationStart }}
          animate={{
            y: ['-10vh', '110vh'],
            rotate: [f.rotationStart, f.rotationStart + 180],
            x: [0, (Math.random() - 0.5) * 50] 
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            ease: "linear",
            delay: f.delay
          }}
        >
          <SunflowerIcon size={f.size} color={f.type} />
        </motion.div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sunflower-900/10 to-transparent pointer-events-none" />
    </div>
  );
};