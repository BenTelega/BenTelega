import { CrystalIcon } from './CrystalIcon';

interface BetSelectorProps {
  selectedBet: number;
  onSelectBet: (bet: number) => void;
  disabled?: boolean;
}

const BET_OPTIONS = [25, 50, 100, 250];

export function BetSelector({ selectedBet, onSelectBet, disabled = false }: BetSelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {BET_OPTIONS.map((bet) => (
        <button
          key={bet}
          onClick={() => !disabled && onSelectBet(bet)}
          disabled={disabled}
          className={`
            flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border-2 min-w-[80px]
            transition-all duration-200 active:scale-95
            ${selectedBet === bet 
              ? 'border-tg-blue bg-tg-blue/5 text-tg-blue' 
              : 'border-tg-gray-lighter bg-white text-gray-700 hover:border-tg-gray-light'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          <span className="font-semibold">{bet}</span>
          <CrystalIcon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
