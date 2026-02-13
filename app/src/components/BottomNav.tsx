import { Trophy, Users, Gamepad2, ClipboardList, User } from 'lucide-react';
import type { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
  hasTaskNotification?: boolean;
}

const NAV_ITEMS: { id: Screen; label: string; icon: typeof Trophy }[] = [
  { id: 'leaderboard', label: 'Лидеры', icon: Trophy },
  { id: 'draws', label: 'Розыгрыши', icon: Users },
  { id: 'play', label: 'Играть', icon: Gamepad2 },
  { id: 'tasks', label: 'Задания', icon: ClipboardList },
  { id: 'profile', label: 'Профиль', icon: User },
];

export function BottomNav({ currentScreen, onScreenChange, hasTaskNotification = false }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-tg-gray-lighter z-50 safe-area-pb">
      <div className="flex items-center justify-around h-16">
        {NAV_ITEMS.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={`
                flex flex-col items-center justify-center gap-1 flex-1 h-full
                transition-colors duration-200
                ${isActive ? 'text-tg-blue' : 'text-tg-gray hover:text-gray-600'}
              `}
            >
              <div className="relative">
                <Icon 
                  className={`w-6 h-6 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}
                  fill={isActive && item.id === 'play' ? 'currentColor' : 'none'}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {/* Notification badge for tasks */}
                {item.id === 'tasks' && hasTaskNotification && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-tg-red rounded-full animate-badge-pulse" />
                )}
              </div>
              <span className={`text-[11px] font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
