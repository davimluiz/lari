import { Memory } from './types';

// Função auxiliar para garantir que a imagem carregue
const getImagePath = (name: string) => {
  // Tenta carregar da pasta public, se falhar o navegador mostra o erro mas o JS continua
  return `/${name}`;
};

export const MEMORIES: Memory[] = [
  {
    id: '1',
    url: getImagePath('foto1.jpg'), 
    caption: 'Sorriso',
    poem: "Talvez alguém esteja precisando exatamente do seu sorriso hoje.",
    rotation: -12,
    zIndex: 1,
    xOffset: 25,
    yOffset: 20
  },
  {
    id: '2',
    url: getImagePath('foto2.jpg'), 
    caption: 'Motivo',
    poem: "Seu sorriso pode ser o motivo de alguém não desistir.",
    rotation: 2,
    zIndex: 2,
    xOffset: 50,
    yOffset: 15
  },
  {
    id: '3',
    url: getImagePath('foto3.jpg'), 
    caption: 'Essência',
    poem: "Mesmo sem perceber, seu sorriso faz falta para alguém.",
    rotation: 12,
    zIndex: 1,
    xOffset: 75,
    yOffset: 20
  },
  {
    id: '4',
    url: getImagePath('foto4.jpg'), 
    caption: 'Força',
    poem: "Há pessoas que encontram força quando veem você sorrir.",
    rotation: -6,
    zIndex: 3,
    xOffset: 22,
    yOffset: 72
  },
  {
    id: '5',
    url: getImagePath('foto5.jpg'), 
    caption: 'Leveza',
    poem: "O mundo fica mais leve quando você escolhe sorrir.",
    rotation: -3,
    zIndex: 4,
    xOffset: 50,
    yOffset: 80
  },
  {
    id: '6',
    url: getImagePath('foto6.jpg'), 
    caption: 'Seguir em frente',
    poem: "Alguém pode estar esperando apenas o seu sorriso para seguir em frente.",
    rotation: 8,
    zIndex: 3,
    xOffset: 78,
    yOffset: 72
  }
];