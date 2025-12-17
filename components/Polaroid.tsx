import React from 'react';
import { motion } from 'framer-motion';
import { Memory } from '../types';

interface PolaroidProps {
  memory: Memory;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

export const Polaroid: React.FC<PolaroidProps> = ({ memory, isSelected, onClick, index }) => {
  return (
    <motion.div
      layoutId={`card-${memory.id}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        rotate: isSelected ? 0 : memory.rotation,
        zIndex: isSelected ? 50 : memory.zIndex
      }}
      whileHover={{ 
        scale: isSelected ? 1 : 1.05, 
        zIndex: 50,
        rotate: 0,
        transition: { duration: 0.3 } 
      }}
      transition={{ 
        duration: 0.8, 
        // Enhanced staggered delay calculation for explicit "one by one" feel
        delay: 0.2 + (index * 0.25),
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      className={`
        relative bg-paper p-2 shadow-xl cursor-pointer
        aspect-[3.5/4.2] w-full md:w-64
        flex flex-col items-center
        transform-gpu
        ${isSelected ? 'cursor-default' : 'cursor-pointer hover:shadow-sunflower-500/20'}
      `}
    >
      {/* Increased padding-bottom only slightly to resemble classic polaroid, but removed text space */}
      <div className="relative w-full h-[85%] overflow-hidden bg-gray-200 shadow-inner mb-4">
        <motion.img 
          layoutId={`img-${memory.id}`}
          src={memory.url} 
          alt={memory.caption}
          className="w-full h-full object-cover grayscale-[20%] sepia-[15%] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50" />
      </div>
      
      {/* Texto removido conforme solicitado para deixar a polaroid limpa */}
    </motion.div>
  );
};