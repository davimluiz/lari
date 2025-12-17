import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TypewriterTitle: React.FC = () => {
  const textLine1 = "Deixe seu sorriso florescer,";
  const textLine2 = "mesmo nos dias nublados";
  
  const [display1, setDisplay1] = useState('');
  const [display2, setDisplay2] = useState('');

  useEffect(() => {
    let i = 0;
    const type1 = setInterval(() => {
      if (i <= textLine1.length) {
        setDisplay1(textLine1.slice(0, i));
        i++;
      } else {
        clearInterval(type1);
        let j = 0;
        const type2 = setInterval(() => {
          if (j <= textLine2.length) {
            setDisplay2(textLine2.slice(0, j));
            j++;
          } else {
            clearInterval(type2);
          }
        }, 50);
      }
    }, 50); 

    return () => clearInterval(type1);
  }, []);

  return (
    <div className="relative z-20 text-center max-w-4xl flex flex-col justify-center items-center">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-display text-3xl md:text-6xl text-sunflower-100/90 leading-tight tracking-tight px-4"
      >
        <span className="block mb-2 italic font-light">{display1}</span>
        <span className="block font-normal text-sunflower-200/80">{display2}</span>
      </motion.h1>
    </div>
  );
};