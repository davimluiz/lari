import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlowerRainBackground } from './components/FlowerRainBackground';
import { TypewriterTitle } from './components/TypewriterTitle';
import { Polaroid } from './components/Polaroid';
import { GrainOverlay } from './components/GrainOverlay';
import { ExpandedView } from './components/ExpandedView';
import { MEMORIES } from './constants';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const selectedMemory = MEMORIES.find(m => m.id === selectedId);

  return (
    <div className="min-h-screen bg-charcoal-900 text-stone-100 font-serif selection:bg-sunflower-500/30 selection:text-sunflower-100 overflow-x-hidden relative">
      
      {/* Fundo Ambiente & Chuva de Girassóis */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-charcoal-800 via-charcoal-900 to-black z-0 opacity-90" />
      <FlowerRainBackground />
      
      {/* Brilhos de Luz */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-sunflower-600/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-1" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-sunflower-800/5 rounded-full blur-[140px] mix-blend-screen pointer-events-none z-1" />
      
      <GrainOverlay />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center">
        
        {/* Seção Título */}
        <header className="relative w-full pt-16 pb-8 md:pt-32 md:pb-16 px-4 flex flex-col items-center justify-center text-center">
          <TypewriterTitle />
        </header>

        {/* Seção Galeria */}
        <section className="relative w-full max-w-7xl mx-auto px-4 pb-32 flex-grow flex flex-col items-center">
          
          {/* Layout Mobile: Grid Organizado */}
          <div className="md:hidden grid grid-cols-2 gap-4 place-items-center w-full max-w-sm mx-auto mt-4">
            {MEMORIES.map((memory, index) => (
              <div key={memory.id} className="w-full">
                <Polaroid 
                  memory={memory}
                  index={index}
                  isSelected={selectedId === memory.id}
                  onClick={() => setSelectedId(memory.id)}
                />
              </div>
            ))}
          </div>

          {/* Layout Desktop: Cluster (Pilha) mais afastado */}
          <div className="hidden md:block relative h-[750px] w-full max-w-6xl mx-auto">
            {MEMORIES.map((memory, index) => (
              <div
                key={memory.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out hover:z-[60]"
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

      {/* Visualização Expandida (Modal) */}
      <AnimatePresence>
        {selectedId && selectedMemory && (
          <ExpandedView 
            memory={selectedMemory} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>

      <footer className="relative z-10 w-full py-12 text-center text-stone-600/50 font-script text-lg md:text-2xl">
        <p className="animate-pulse">Cultive a luz dentro de você.</p>
      </footer>
    </div>
  );
}

export default App;