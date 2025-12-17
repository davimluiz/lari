import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlowerRainBackground } from './components/FlowerRainBackground';
import { TypewriterTitle } from './components/TypewriterTitle';
import { Polaroid } from './components/Polaroid';
import { GrainOverlay } from './components/GrainOverlay';
import { ExpandedView } from './components/ExpandedView';
import { MEMORIES } from './constants';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedMemory = MEMORIES.find(m => m.id === selectedId);

  return (
    <div className="min-h-screen bg-black text-stone-100 font-serif selection:bg-sunflower-500/30 selection:text-sunflower-100 overflow-x-hidden relative">
      
      {/* Fundo Escuro Minimalista */}
      <div className="fixed inset-0 bg-black z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-charcoal-900/40 via-black to-black z-0" />
      
      {/* Chuva sutil de girassóis */}
      <FlowerRainBackground />
      
      {/* Granulação de filme para textura artística */}
      <GrainOverlay />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center">
        
        {/* Cabeçalho com Texto Limpo */}
        <header className="relative w-full pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
          <TypewriterTitle />
        </header>

        {/* Galeria de Fotos */}
        <section className="relative w-full max-w-7xl mx-auto px-4 pb-48 flex-grow">
          
          {/* Mobile: Lista vertical */}
          <div className="md:hidden flex flex-col items-center space-y-12">
            {MEMORIES.map((memory, index) => (
              <div key={memory.id} className="w-full max-w-[280px]">
                <Polaroid 
                  memory={memory}
                  index={index}
                  isSelected={selectedId === memory.id}
                  onClick={() => setSelectedId(memory.id)}
                />
              </div>
            ))}
          </div>

          {/* Desktop: Disposição Artística Afastada */}
          <div className="hidden md:block relative h-[700px] w-full">
            {MEMORIES.map((memory, index) => (
              <div
                key={memory.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
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

      {/* Visualização da Foto Expandida */}
      <AnimatePresence>
        {selectedId && selectedMemory && (
          <ExpandedView 
            memory={selectedMemory} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>

      <footer className="relative z-10 w-full py-20 text-center opacity-30">
        <p className="font-serif text-lg tracking-[0.3em] uppercase text-stone-500">
          Resiliência & Luz
        </p>
      </footer>
    </div>
  );
}

export default App;