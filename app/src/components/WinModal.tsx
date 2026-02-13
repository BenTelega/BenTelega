import { useEffect, useState } from 'react';
import type { Prize } from '../types';
import { CrystalIcon } from './CrystalIcon';
import { X, Sparkles } from 'lucide-react';

interface WinModalProps {
  prize: Prize;
  onClose: () => void;
  demoMode: boolean;
}

export function WinModal({ prize, onClose, demoMode }: WinModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              <Sparkles 
                className="text-yellow-400"
                style={{ 
                  width: `${10 + Math.random() * 20}px`,
                  height: `${10 + Math.random() * 20}px`,
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Modal content */}
      <div className="relative bg-white rounded-3xl p-6 w-full max-w-sm animate-bounce-in shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-tg-gray-bg transition-colors"
        >
          <X className="w-5 h-5 text-tg-gray" />
        </button>
        
        {/* Demo badge */}
        {demoMode && (
          <div className="absolute top-4 left-4 px-2 py-0.5 bg-tg-orange/10 text-tg-orange text-xs font-semibold rounded-full">
            DEMO
          </div>
        )}
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Поздравляем!
        </h2>
        <p className="text-center text-tg-gray mb-6">
          Вы выиграли:
        </p>
        
        {/* Prize image */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 animate-winner-pulse">
            <img 
              src={prize.image} 
              alt={prize.name}
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,122,255,0.4)]"
            />
          </div>
        </div>
        
        {/* Prize name */}
        <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
          {prize.name}
        </h3>
        
        {/* Prize value */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-4 py-2 bg-tg-blue/10 rounded-full">
            <span className="text-lg font-bold text-tg-blue">
              {prize.type === 'crystals' && prize.value 
                ? `+${prize.value}` 
                : `Стоимость: ${prize.cost}`
              }
            </span>
            <CrystalIcon className="w-5 h-5" />
          </div>
        </div>
        
        {/* Action button */}
        <button
          onClick={onClose}
          className="w-full h-12 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-tg-blue to-tg-blue-light
                     shadow-button transition-all duration-150
                     hover:shadow-lg hover:brightness-105 active:scale-[0.97]"
        >
          Отлично!
        </button>
      </div>
    </div>
  );
}
