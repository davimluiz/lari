import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlowerRainBackground } from './components/FlowerRainBackground';
import { RealSunflowerBackground } from './components/RealSunflowerBackground';
import { SunflowerArt } from './components/SunflowerArt';
import { TypewriterTitle } from './components/TypewriterTitle';
import { Polaroid } from './components/Polaroid';
import { GrainOverlay } from './components/GrainOverlay';
import { ExpandedView } from './components/ExpandedView';
import { MEMORIES } from './constants';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Garante que o componente montou antes de disparar animações complexas
    setIsLoaded(true);
  }, []);

  const selectedMemory = MEMORIES.find(m => m.id === selectedId);

  if (!isLoaded) return <div className="min-h-screen bg-charcoal-950" />;

  return (
    <div className="min-h-screen bg-charcoal-900 text-stone-100 font-serif selection:bg-sunflower-500/30 selection:text-sunflower-100 overflow-x-hidden relative">
      
      {/* Camadas de Fundo Imersivo */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-charcoal-800 via-charcoal-900 to-black z-0 opacity-95" />
      
      <RealSunflowerBackground />
      <FlowerRainBackground />
      
      {/* Brilhos de Luz Ambiente */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sunflower-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-1 animate-breathe" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-sunflower-800/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none z-1 animate-breathe" />
      
      <GrainOverlay />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center">
        
        {/* Seção Hero com Arte Orgânica */}
        <header className="relative w-full pt-20 pb-12 md:pt-40 md:pb-24 px-4 flex flex-col items-center justify-center text-center">
          <SunflowerArt />
          <TypewriterTitle />
        </header>

        {/* Seção Galeria de Memórias */}
        <section className="relative w-full max-w-7xl mx-auto px-4 pb-40 flex-grow flex flex-col items-center">
          
          {/* Mobile: Grid Simples e Elegante */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center w-full max-w-sm mx-auto">
            {MEMORIES.map((memory, index) => (
              <div key={memory.id} className="w-full flex justify-center">
                <Polaroid 
                  memory={memory}
                  index={index}
                  isSelected={selectedId === memory.id}
                  onClick={() => setSelectedId(memory.id)}
                />
              </div>
            ))}
          </div>

          {/* Desktop: Disposição Artística Espalhada */}
          <div className="hidden md:block relative h-[800px] w-full max-w-6xl mx-auto">
            {MEMORIES.map((memory, index) => (
              <div
                key={memory.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
                style={{
                  left: `${memory.xOffset}%`,
                  top: `${memory.yOffset}%`,
                  zIndex: memory.zIndex
                }}
              >
                <Polaroid 
                  memory={memory}
                  index={index}
                  isSelected={selectedId === memory.id}
                  onClick={() => setSelectedId(memory.id)}
                />
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {selectedId && selectedMemory && (
          <ExpandedView 
            memory={selectedMemory} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>

      <footer className="relative z-10 w-full py-16 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-stone-500 font-script text-2xl md:text-3xl tracking-widest opacity-60"
        >
          Onde há luz, há crescimento.
        </motion.p>
      </footer>
    </div>
  );
}

export default App;