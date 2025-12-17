import React from 'react';
import { motion } from 'framer-motion';
import { Memory } from '../types';
import { X } from 'lucide-react';

interface ExpandedViewProps {
  memory: Memory;
  onClose: () => void;
}

export const ExpandedView: React.FC<ExpandedViewProps> = ({ memory, onClose }) => {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Card Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-5xl w-full mx-auto md:space-x-16 z-10 pointer-events-none">
        
        {/* The Polaroid (Layout Shared) */}
        <motion.div
          layoutId={`card-${memory.id}`}
          className="bg-paper p-3 shadow-2xl pointer-events-auto shrink-0 w-72 md:w-[400px] aspect-[3.5/4.2] relative transform-gpu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[90%] overflow-hidden bg-gray-200">
            <motion.img 
              layoutId={`img-${memory.id}`}
              src={memory.url} 
              alt={memory.caption}
              className="w-full h-full object-cover grayscale-[0%] sepia-[0%]"
            />
          </div>
          {/* Empty bottom space typical of polaroids */}
          <div className="h-[10%] w-full"></div>
        </motion.div>

        {/* The Poetic Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 md:mt-0 text-center md:text-left max-w-md pointer-events-auto flex flex-col justify-center"
        >
          {/* Decorative decorative element */}
          <div className="hidden md:block w-12 h-1 bg-sunflower-500 mb-6 rounded-full opacity-70"></div>

          <p className="text-stone-100 font-display text-2xl md:text-4xl leading-relaxed tracking-wide drop-shadow-lg">
            "{memory.poem}"
          </p>
          
          <button 
            onClick={onClose}
            className="mt-10 self-center md:self-start px-8 py-3 border border-sunflower-500/30 rounded-full text-sunflower-200 hover:bg-sunflower-500/10 hover:border-sunflower-400 hover:text-sunflower-100 transition-all duration-300 font-serif text-sm tracking-[0.2em] uppercase"
          >
            Voltar
          </button>
        </motion.div>

      </div>

      {/* Close Icon for quick exit */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/50 hover:text-sunflower-300 transition-colors pointer-events-auto"
      >
        <X size={32} />
      </motion.button>
    </div>
  );
};