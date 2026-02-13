import type { User, Prize } from '../types';
import { CrystalIcon } from '../components/CrystalIcon';
import { Settings, LogOut, ChevronRight, Gamepad2, Trophy, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ProfileScreenProps {
  user: User;
  inventory: Prize[];
}

export function ProfileScreen({ user, inventory }: ProfileScreenProps) {
  const progressPercent = Math.min((user.xp / user.xpToNext) * 100, 100);
  
  const stats = [
    { label: 'Игры', value: user.gamesPlayed, icon: Gamepad2 },
    { label: 'Победы', value: user.gamesWon, icon: Trophy },
    { label: 'Рефералы', value: user.referrals, icon: Users },
    { label: 'Баланс', value: user.balance, icon: CrystalIcon, isCrystal: true },
  ];

  return (
    <div className="flex flex-col gap-4 pb-24">
      {/* Profile card */}
      <div className="bg-white rounded-2xl shadow-card p-6 text-center">
        <div className="relative inline-block mb-4">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-20 h-20 rounded-full bg-tg-gray-bg mx-auto"
          />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-tg-blue text-white rounded-full 
                          flex items-center justify-center text-sm font-bold border-2 border-white">
            {user.level}
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-sm text-tg-gray mt-1">Уровень {user.level}</p>
        
        {/* XP Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-tg-gray">Опыт</span>
            <span className="text-tg-blue font-medium">{user.xp} / {user.xpToNext} XP</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="bg-white rounded-xl shadow-card p-4 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-tg-blue/10 rounded-lg flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-tg-blue" />
              </div>
              <span className="text-xs text-tg-gray">{stat.label}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-gray-900">{stat.value}</span>
              {stat.isCrystal && <CrystalIcon className="w-4 h-4" />}
            </div>
          </div>
        ))}
      </div>
      
      {/* Inventory */}
      {inventory.length > 0 && (
        <div className="bg-white rounded-2xl shadow-card p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Инвентарь ({inventory.length})</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {inventory.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-tg-gray-bg rounded-xl p-2
                         flex items-center justify-center"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Action buttons */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-tg-gray-bg transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tg-green/10 rounded-xl flex items-center justify-center">
              <CrystalIcon className="w-5 h-5" />
            </div>
            <span className="font-medium text-gray-900">Пополнить баланс</span>
          </div>
          <ChevronRight className="w-5 h-5 text-tg-gray" />
        </button>
        
        <div className="h-px bg-tg-gray-lighter mx-4" />
        
        <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-tg-gray-bg transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tg-gray-bg rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-tg-gray" />
            </div>
            <span className="font-medium text-gray-900">Настройки</span>
          </div>
          <ChevronRight className="w-5 h-5 text-tg-gray" />
        </button>
        
        <div className="h-px bg-tg-gray-lighter mx-4" />
        
        <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-tg-gray-bg transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tg-red/10 rounded-xl flex items-center justify-center">
              <LogOut className="w-5 h-5 text-tg-red" />
            </div>
            <span className="font-medium text-tg-red">Выйти</span>
          </div>
          <ChevronRight className="w-5 h-5 text-tg-gray" />
        </button>
      </div>
      
      {/* Referral card */}
      <div className="bg-gradient-to-r from-tg-purple to-tg-blue rounded-2xl p-4 text-white">
        <h3 className="font-semibold mb-1">Пригласи друга</h3>
        <p className="text-xs opacity-80 mb-3">
          Получите 100 кристаллов за каждого приглашенного друга
        </p>
        <button className="w-full py-2.5 bg-white/20 rounded-xl text-sm font-semibold
                         transition-all hover:bg-white/30 active:scale-[0.98]">
          Поделиться ссылкой
        </button>
      </div>
    </div>
  );
}
