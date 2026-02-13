import { Loader2 } from 'lucide-react';
import { CrystalIcon } from './CrystalIcon';
import { Switch } from '@/components/ui/switch';

interface PlayButtonProps {
  bet: number;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  demoMode: boolean;
  onToggleDemo: () => void;
}

export function PlayButton({ 
  bet, 
  onClick, 
  disabled = false, 
  isLoading = false,
  demoMode,
  onToggleDemo
}: PlayButtonProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          flex-1 h-[52px] rounded-xl font-semibold text-white text-lg
          bg-gradient-to-r from-tg-blue to-tg-blue-light
          shadow-button
          transition-all duration-150
          flex items-center justify-center gap-2
          ${disabled && !isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          ${isLoading ? 'cursor-wait' : 'active:scale-[0.97]'}
          ${!disabled && !isLoading ? 'hover:shadow-lg hover:brightness-105' : ''}
        `}
      >
        {isLoading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <>
            <span>Мне повезёт, Go!</span>
            <span className="flex items-center gap-1">
              {bet}
              <CrystalIcon className="w-5 h-5" />
            </span>
          </>
        )}
      </button>
      
      {/* Demo toggle */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium text-tg-gray uppercase tracking-wide">DEMO</span>
        <Switch 
          checked={demoMode}
          onCheckedChange={onToggleDemo}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
