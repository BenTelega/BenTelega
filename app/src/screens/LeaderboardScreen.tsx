import type { LeaderboardEntry } from '../types';
import { CrystalIcon } from '../components/CrystalIcon';
import { Medal } from 'lucide-react';

interface LeaderboardScreenProps {
  data: LeaderboardEntry[];
  currentUserId: string;
}

export function LeaderboardScreen({ data, currentUserId }: LeaderboardScreenProps) {
  const getMedalColor = (position: number) => {
    switch (position) {
      case 0: return 'text-yellow-500';
      case 1: return 'text-gray-400';
      case 2: return 'text-amber-600';
      default: return 'text-tg-gray-light';
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-24">
      <h2 className="text-xl font-bold text-gray-900">Топ игроков</h2>
      
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        {data.map((entry, index) => {
          const isCurrentUser = entry.id === currentUserId;
          const medalColor = getMedalColor(index);
          
          return (
            <div
              key={entry.id}
              className={`
                flex items-center gap-3 px-4 py-3
                ${index !== data.length - 1 ? 'border-b border-tg-gray-lighter' : ''}
                ${isCurrentUser ? 'bg-tg-blue/5' : ''}
                animate-slide-up
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Position */}
              <div className="flex items-center justify-center w-8">
                {index < 3 ? (
                  <Medal className={`w-6 h-6 ${medalColor}`} fill="currentColor" />
                ) : (
                  <span className="text-sm font-semibold text-tg-gray">{index + 1}</span>
                )}
              </div>
              
              {/* Avatar */}
              <img 
                src={entry.avatar} 
                alt={entry.name}
                className="w-10 h-10 rounded-full bg-tg-gray-bg"
              />
              
              {/* Name and level */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`font-semibold ${isCurrentUser ? 'text-tg-blue' : 'text-gray-900'}`}>
                    {entry.name}
                  </span>
                  {isCurrentUser && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-tg-blue text-white rounded-full">
                      Вы
                    </span>
                  )}
                </div>
                <span className="text-xs text-tg-gray">Ур. {entry.level}</span>
              </div>
              
              {/* Balance */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-gray-900">{entry.balance.toLocaleString()}</span>
                <CrystalIcon className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Stats card */}
      <div className="bg-gradient-to-r from-tg-blue to-tg-blue-light rounded-2xl p-4 text-white">
        <h3 className="text-sm font-medium opacity-80 mb-1">Ваша позиция</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">#{data.findIndex(e => e.id === currentUserId) + 1}</span>
          <span className="text-sm opacity-80">из {data.length}</span>
        </div>
        <p className="text-xs opacity-70 mt-2">
          Играйте больше, чтобы подняться в рейтинге!
        </p>
      </div>
    </div>
  );
}
