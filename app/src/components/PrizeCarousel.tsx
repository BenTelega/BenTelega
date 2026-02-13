import { useRef, useEffect, useState } from 'react';
import type { Prize } from '../types';
import { CrystalIcon } from './CrystalIcon';

interface PrizeCarouselProps {
  prizes: Prize[];
  position: number;
  isSpinning: boolean;
  winningPrize: Prize | null;
}

const ITEM_WIDTH = 120;
const ITEM_GAP = 16;

export function PrizeCarousel({ prizes, position, isSpinning, winningPrize }: PrizeCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);
  
  // Create extended array for infinite scroll effect
  const extendedPrizes = [...prizes, ...prizes, ...prizes, ...prizes, ...prizes];
  
  const centerOffset = containerWidth / 2 - ITEM_WIDTH / 2;
  const translateX = centerOffset - (position % (prizes.length * (ITEM_WIDTH + ITEM_GAP)));
  
  return (
    <div 
      ref={containerRef}
      className="relative h-[200px] overflow-hidden bg-white rounded-2xl shadow-card"
    >
      {/* Center indicator line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-tg-blue z-10 transform -translate-x-1/2">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-tg-blue rounded-full" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-tg-blue rounded-full" />
      </div>
      
      {/* Prize items */}
      <div 
        className="flex items-center h-full absolute transition-transform will-change-transform"
        style={{ 
          transform: `translateX(${translateX}px)`,
          gap: `${ITEM_GAP}px`,
        }}
      >
        {extendedPrizes.map((prize, index) => (
          <div
            key={`${prize.id}-${index}`}
            className={`
              flex-shrink-0 w-[${ITEM_WIDTH}px] flex flex-col items-center justify-center
              transition-all duration-300
              ${winningPrize?.id === prize.id && !isSpinning ? 'animate-winner-pulse' : ''}
            `}
            style={{ width: ITEM_WIDTH }}
          >
            <div className={`
              relative w-20 h-20 mb-2
              ${winningPrize?.id === prize.id && !isSpinning ? 'drop-shadow-[0_0_15px_rgba(0,122,255,0.6)]' : ''}
            `}>
              <img 
                src={prize.image} 
                alt={prize.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
              <span>{prize.cost}</span>
              <CrystalIcon className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-[5]" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-[5]" />
    </div>
  );
}
