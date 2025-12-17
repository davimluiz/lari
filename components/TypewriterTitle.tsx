import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TypewriterTitle: React.FC = () => {
  const textLine1 = "Deixe seu sorriso florescer,";
  const textLine2 = "mesmo nos dias nublados";
  
  const [display1, setDisplay1] = useState('');
  const [display2, setDisplay2] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    let i = 0;
    const type1 = setInterval(() => {
      if (i <= textLine1.length) {
        setDisplay1(textLine1.slice(0, i));
        i++;
      } else {
        clearInterval(type1);
        // Start second line
        let j = 0;
        const type2 = setInterval(() => {
          if (j <= textLine2.length) {
            setDisplay2(textLine2.slice(0, j));
            j++;
          } else {
            clearInterval(type2);
            setTimeout(() => {
                setShowCursor(false);
                setShowSubtitle(true);
            }, 1000);
          }
        }, 60); // Slightly faster typing
      }
    }, 60); 

    return () => {
      clearInterval(type1);
    };
  }, []);

  return (
    <div className="relative z-20 text-center max-w-4xl min-h-[140px] flex flex-col justify-center items-center">
      <h1 className="font-display text-2xl md:text-5xl lg:text-6xl text-sunflower-100/95 leading-snug drop-shadow-2xl tracking-wide">
        {display1}
        <br className="md:hidden" />
        <span className="block md:inline md:ml-2">
          {display2}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} inline-block w-0.5 h-6 md:h-10 ml-1 align-middle bg-sunflower-300 animate-blink transition-opacity duration-300`}></span>
        </span>
      </h1>
      
      {/* Subtitle - Para a Larissa */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showSubtitle ? 1 : 0, y: showSubtitle ? 0 : 10 }}
        transition={{ duration: 1.5 }}
        className="mt-4 md:mt-6"
      >
        <p className="font-script text-xl md:text-3xl text-sunflower-300/80 tracking-widest border-t border-sunflower-800/30 pt-3 px-8">
          Para a Larissa
        </p>
      </motion.div>
    </div>
  );
};