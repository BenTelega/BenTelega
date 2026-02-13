import type { Prize } from '../types';
import { CrystalIcon } from './CrystalIcon';
import { Info } from 'lucide-react';

interface PossiblePrizesProps {
  prizes: Prize[];
}

export function PossiblePrizes({ prizes }: PossiblePrizesProps) {
  // Sort by probability (rarest first)
  const sortedPrizes = [...prizes].sort((a, b) => a.probability - b.probability);
  
  return (
    <div className="bg-white rounded-2xl shadow-card p-4">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-base font-semibold text-gray-900">Вы можете выиграть...</h3>
        <Info className="w-4 h-4 text-tg-gray" />
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {sortedPrizes.slice(0, 6).map((prize, index) => (
          <div
            key={prize.id}
            className="flex-shrink-0 w-[100px] bg-tg-gray-bg rounded-xl p-3 flex flex-col items-center
                       transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Prize image */}
            <div className="w-14 h-14 mb-2">
              <img 
                src={prize.image} 
                alt={prize.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Probability */}
            <span className="text-xs font-medium text-tg-gray mb-1">
              {prize.probability}%
            </span>
            
            {/* Cost */}
            <div className="flex items-center gap-1 text-sm font-semibold text-tg-blue bg-white px-2 py-0.5 rounded-full">
              <span>{prize.cost}</span>
              <CrystalIcon className="w-3 h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
