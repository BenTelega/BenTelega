import { X } from 'lucide-react';
import type { User } from '../types';
import { CrystalIcon } from './CrystalIcon';

interface HeaderProps {
  user: User;
  onClose?: () => void;
  showClose?: boolean;
}

export function Header({ user, onClose, showClose = true }: HeaderProps) {
  const progressPercent = Math.min((user.xp / user.xpToNext) * 100, 100);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-tg-gray-lighter">
      <div className="flex items-center justify-between px-4 h-[60px]">
        {/* Close button */}
        {showClose && (
          <button 
            onClick={onClose}
            className="flex items-center gap-1 text-tg-gray hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
            <span className="text-sm font-medium">Закрыть</span>
          </button>
        )}
        
        {/* User info */}
        <div className="flex items-center gap-3">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-9 h-9 rounded-full bg-tg-gray-bg"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">{user.name}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-tg-gray">Ур. {user.level}</span>
              <div className="w-12 h-1.5 bg-tg-gray-lighter rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-tg-blue to-tg-blue-light rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Balance */}
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-bold text-gray-900">{user.balance.toLocaleString()}</span>
          <CrystalIcon className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
