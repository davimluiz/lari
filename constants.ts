import { Memory } from './types';

export const MEMORIES: Memory[] = [
  // --- CAMADA DE TRÁS (Top Row) ---
  
  // Foto 1: Colete vermelho
  {
    id: '1',
    url: '/foto1.jpg', 
    caption: 'Sorriso',
    poem: "Talvez alguém esteja precisando exatamente do seu sorriso hoje.",
    rotation: -12,
    zIndex: 1,
    xOffset: 25, // Afastado para a esquerda (era 30)
    yOffset: 20  // Subiu um pouco (era 25)
  },
  // Foto 2: No campo/cama
  {
    id: '2',
    url: '/foto2.jpg', 
    caption: 'Motivo',
    poem: "Seu sorriso pode ser o motivo de alguém não desistir.",
    rotation: 2,
    zIndex: 2,
    xOffset: 50, // Centro
    yOffset: 15  // Mais alto para dar ar (era 20)
  },
  // Foto 3: No carro
  {
    id: '3',
    url: '/foto3.jpg', 
    caption: 'Essência',
    poem: "Mesmo sem perceber, seu sorriso faz falta para alguém.",
    rotation: 12,
    zIndex: 1,
    xOffset: 75, // Afastado para a direita (era 70)
    yOffset: 20  // Subiu um pouco (era 25)
  },
  
  // --- CAMADA DA FRENTE (Bottom Row) ---

  // Foto 4: Com a criança (fundo azul)
  {
    id: '4',
    url: '/foto4.jpg', 
    caption: 'Força',
    poem: "Há pessoas que encontram força quando veem você sorrir.",
    rotation: -6,
    zIndex: 3,
    xOffset: 22, // Mais para a esquerda (era 28)
    yOffset: 72  // Mais para baixo (era 68)
  },
  // Foto 5: Com a criança (camisa rosa)
  {
    id: '5',
    url: '/foto5.jpg', 
    caption: 'Leveza',
    poem: "O mundo fica mais leve quando você escolhe sorrir.",
    rotation: -3,
    zIndex: 4,
    xOffset: 50, // Centro
    yOffset: 80  // Mais para baixo (era 75)
  },
  // Foto 6: Fazendo careta
  {
    id: '6',
    url: '/foto6.jpg', 
    caption: 'Seguir em frente',
    poem: "Alguém pode estar esperando apenas o seu sorriso para seguir em frente.",
    rotation: 8,
    zIndex: 3,
    xOffset: 78, // Mais para a direita (era 72)
    yOffset: 72  // Mais para baixo (era 68)
  }
];