import { Clock, Users, Trophy } from 'lucide-react';
import { CrystalIcon } from '../components/CrystalIcon';

interface Draw {
  id: string;
  name: string;
  prize: string;
  prizeImage: string;
  endTime: string;
  participants: number;
  entryCost: number;
  isJoined: boolean;
}

const DRAWS_DATA: Draw[] = [
  {
    id: '1',
    name: 'Ежедневный розыгрыш',
    prize: '1000 кристаллов',
    prizeImage: '/prizes/crystal.png',
    endTime: '23:59',
    participants: 156,
    entryCost: 50,
    isJoined: true,
  },
  {
    id: '2',
    name: 'VIP Розыгрыш',
    prize: 'Золотой кубок',
    prizeImage: '/prizes/trophy.png',
    endTime: '2 дня',
    participants: 42,
    entryCost: 200,
    isJoined: false,
  },
  {
    id: '3',
    name: 'Недельный джекпот',
    prize: '5000 кристаллов',
    prizeImage: '/prizes/diamond.png',
    endTime: '5 дней',
    participants: 289,
    entryCost: 100,
    isJoined: false,
  },
];

export function DrawsScreen() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <h2 className="text-xl font-bold text-gray-900">Розыгрыши</h2>
      <p className="text-sm text-tg-gray">
        Участвуйте в розыгрышах и выигрывайте призы!
      </p>
      
      <div className="flex flex-col gap-3">
        {DRAWS_DATA.map((draw, index) => (
          <div
            key={draw.id}
            className="bg-white rounded-2xl shadow-card p-4 animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-4">
              {/* Prize image */}
              <div className="w-16 h-16 bg-tg-gray-bg rounded-xl p-2 flex-shrink-0">
                <img 
                  src={draw.prizeImage} 
                  alt={draw.prize}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900">{draw.name}</h3>
                <p className="text-sm text-tg-blue font-medium">{draw.prize}</p>
                
                {/* Meta info */}
                <div className="flex items-center gap-3 mt-2 text-xs text-tg-gray">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{draw.endTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{draw.participants}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-tg-gray-lighter">
              <div className="flex items-center gap-1 text-sm">
                <span className="text-tg-gray">Вход:</span>
                <span className="font-semibold text-gray-900">{draw.entryCost}</span>
                <CrystalIcon className="w-3.5 h-3.5" />
              </div>
              
              <button
                className={`
                  px-4 py-2 rounded-xl text-sm font-semibold transition-all
                  ${draw.isJoined 
                    ? 'bg-tg-green/10 text-tg-green cursor-default' 
                    : 'bg-tg-blue text-white hover:brightness-105 active:scale-95'
                  }
                `}
                disabled={draw.isJoined}
              >
                {draw.isJoined ? 'Участвуете' : 'Участвовать'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Create draw card */}
      <div className="bg-gradient-to-r from-tg-orange to-tg-red rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Создать розыгрыш</h3>
            <p className="text-xs opacity-80">Создайте свой розыгрыш для друзей</p>
          </div>
          <button className="px-4 py-2 bg-white text-tg-orange rounded-xl text-sm font-semibold
                           transition-transform active:scale-95 hover:bg-white/90">
            Создать
          </button>
        </div>
      </div>
    </div>
  );
}
