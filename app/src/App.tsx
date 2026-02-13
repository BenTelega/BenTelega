import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { Header } from './components/Header';
import { BetSelector } from './components/BetSelector';
import { PrizeCarousel } from './components/PrizeCarousel';
import { PlayButton } from './components/PlayButton';
import { PossiblePrizes } from './components/PossiblePrizes';
import { BottomNav } from './components/BottomNav';
import { LeaderboardScreen } from './screens/LeaderboardScreen';
import { TasksScreen } from './screens/TasksScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { DrawsScreen } from './screens/DrawsScreen';
import { WinModal } from './components/WinModal';
import { useTelegram } from './hooks/useTelegram';
import type { Prize, User, Screen } from './types';
import { Bug } from 'lucide-react';

// Define prizes with probabilities
const PRIZES: Prize[] = [
  { id: 'crystals_250', name: 'Кристаллы ×250', image: '/prizes/crystal.png', cost: 250, probability: 0.37, type: 'crystals', value: 250 },
  { id: 'trophy', name: 'Кубок', image: '/prizes/trophy.png', cost: 100, probability: 1.26, type: 'item' },
  { id: 'diamond', name: 'Бриллиант', image: '/prizes/diamond.png', cost: 100, probability: 1.26, type: 'item' },
  { id: 'ring', name: 'Кольцо', image: '/prizes/ring.png', cost: 100, probability: 1.2, type: 'item' },
  { id: 'energy', name: 'Энергия', image: '/prizes/energy.png', cost: 250, probability: 2.5, type: 'boost' },
  { id: 'rocket', name: 'Ракета', image: '/prizes/rocket.png', cost: 50, probability: 5.0, type: 'item' },
  { id: 'flowers', name: 'Цветы', image: '/prizes/flowers.png', cost: 50, probability: 8.0, type: 'item' },
  { id: 'crystals_50', name: 'Кристаллы ×50', image: '/prizes/crystal.png', cost: 50, probability: 15.0, type: 'crystals', value: 50 },
  { id: 'crystals_25', name: 'Кристаллы ×25', image: '/prizes/crystal.png', cost: 25, probability: 25.0, type: 'crystals', value: 25 },
  { id: 'crystals_10', name: 'Кристаллы ×10', image: '/prizes/crystal.png', cost: 10, probability: 40.41, type: 'crystals', value: 10 },
];

// Carousel display prizes (subset for visual)
const CAROUSEL_PRIZES: Prize[] = [
  PRIZES[5], // rocket
  PRIZES[0], // crystals_250
  PRIZES[6], // flowers
  PRIZES[1], // trophy
  PRIZES[2], // diamond
  PRIZES[3], // ring
  PRIZES[4], // energy
];

// Generate avatar URL from Telegram user or fallback
function getAvatarUrl(tgUser: { photo_url?: string; username?: string; first_name: string } | null): string {
  if (tgUser?.photo_url) {
    return tgUser.photo_url;
  }
  if (tgUser?.username) {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${tgUser.username}`;
  }
  if (tgUser?.first_name) {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${tgUser.first_name}`;
  }
  return 'https://api.dicebear.com/7.x/avataaars/svg?seed=default';
}

// Mock leaderboard data
const LEADERBOARD_DATA = [
  { id: '1', name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', balance: 5420, level: 12 },
  { id: '2', name: 'Maria', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria', balance: 4890, level: 10 },
  { id: '3', name: 'John', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', balance: 3650, level: 9 },
  { id: '4', name: 'Ben', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ben', balance: 1250, level: 6 },
  { id: '5', name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', balance: 980, level: 5 },
  { id: '6', name: 'Mike', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike', balance: 750, level: 4 },
  { id: '7', name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', balance: 620, level: 4 },
  { id: '8', name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom', balance: 480, level: 3 },
];

// Mock tasks data
const TASKS_DATA = [
  { id: '1', title: 'Играй 5 раз', description: 'Сыграйте 5 игр', reward: 50, progress: 3, total: 5, completed: false },
  { id: '2', title: 'Пригласи друга', description: 'Поделитесь ссылкой с другом', reward: 100, progress: 1, total: 1, completed: true },
  { id: '3', title: 'Достигни 5 уровня', description: 'Накопите достаточно опыта', reward: 200, progress: 6, total: 5, completed: true },
  { id: '4', title: 'Выиграй кубок', description: 'Выиграйте кубок в розыгрыше', reward: 150, progress: 0, total: 1, completed: false },
  { id: '5', title: 'Потрать 500 кристаллов', description: 'Сделайте ставки на 500 кристаллов', reward: 75, progress: 325, total: 500, completed: false },
];

// Debug panel component
function DebugPanel({ 
  tgUser, 
  initData, 
  isReady, 
  platform 
}: { 
  tgUser: ReturnType<typeof useTelegram>['user'];
  initData: string;
  isReady: boolean;
  platform: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-16 right-2 z-50 p-2 bg-gray-800/80 text-white rounded-lg text-xs
                   flex items-center gap-1 hover:bg-gray-800 transition-colors"
      >
        <Bug className="w-3 h-3" />
        Debug
      </button>
    );
  }

  return (
    <div className="fixed top-16 right-2 z-50 w-80 max-h-[70vh] overflow-auto bg-gray-900 text-white 
                    rounded-xl p-4 text-xs font-mono shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-yellow-400">Debug Info</span>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2">
        <div>
          <span className="text-gray-400">isReady:</span>{' '}
          <span className={isReady ? 'text-green-400' : 'text-red-400'}>
            {isReady ? 'true' : 'false'}
          </span>
        </div>
        
        <div>
          <span className="text-gray-400">Platform:</span> {platform}
        </div>
        
        <div>
          <span className="text-gray-400">User:</span>
          {tgUser ? (
            <pre className="mt-1 p-2 bg-gray-800 rounded overflow-x-auto">
              {JSON.stringify(tgUser, null, 2)}
            </pre>
          ) : (
            <span className="text-red-400"> null</span>
          )}
        </div>
        
        <div>
          <span className="text-gray-400">initData:</span>
          {initData ? (
            <div className="mt-1 p-2 bg-gray-800 rounded break-all">
              {initData.substring(0, 200)}{initData.length > 200 ? '...' : ''}
            </div>
          ) : (
            <span className="text-red-400"> empty</span>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const { 
    isReady, 
    user: tgUser, 
    initData,
    hapticImpact, 
    hapticNotification, 
    closeApp,
    setHeaderColor,
    setBackgroundColor,
    platform,
  } = useTelegram();
  
  const [currentScreen, setCurrentScreen] = useState<Screen>('play');
  const [user, setUser] = useState<User>({
    id: tgUser?.id?.toString() || '1',
    name: tgUser?.first_name || 'Player',
    avatar: getAvatarUrl(tgUser),
    level: 6,
    xp: 450,
    xpToNext: 1000,
    balance: 1250,
    gamesPlayed: 47,
    gamesWon: 12,
    referrals: 3,
  });
  const [selectedBet, setSelectedBet] = useState<number>(25);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningPrize, setWinningPrize] = useState<Prize | null>(null);
  const [showWinModal, setShowWinModal] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [inventory, setInventory] = useState<string[]>([]);
  
  const animationRef = useRef<number | null>(null);
  const spinStartTimeRef = useRef<number>(0);

  // Update user when Telegram user data is available
  useEffect(() => {
    if (tgUser) {
      console.log('👤 Telegram user updated:', tgUser);
      setUser(prev => ({
        ...prev,
        id: tgUser.id?.toString() || prev.id,
        name: tgUser.first_name || prev.name,
        avatar: getAvatarUrl(tgUser),
      }));
    }
  }, [tgUser]);

  // Set Telegram header and background colors
  useEffect(() => {
    if (isReady) {
      setHeaderColor('#F5F5F7');
      setBackgroundColor('#F5F5F7');
    }
  }, [isReady, setHeaderColor, setBackgroundColor]);

  // Determine winner based on probabilities
  const determineWinner = useCallback((): Prize => {
    const random = Math.random() * 100;
    let cumulative = 0;
    
    for (const prize of PRIZES) {
      cumulative += prize.probability;
      if (random <= cumulative) {
        return prize;
      }
    }
    return PRIZES[PRIZES.length - 1];
  }, []);

  // Handle play button click
  const handlePlay = useCallback(() => {
    if (isSpinning || user.balance < selectedBet) {
      hapticImpact('rigid');
      return;
    }
    
    hapticImpact('medium');
    
    if (!demoMode) {
      setUser(prev => ({ ...prev, balance: prev.balance - selectedBet }));
    }
    
    setIsSpinning(true);
    spinStartTimeRef.current = Date.now();
    
    const winner = determineWinner();
    setWinningPrize(winner);
    
    const spinDuration = 2500;
    const startPosition = carouselPosition;
    
    const animate = () => {
      const elapsed = Date.now() - spinStartTimeRef.current;
      const progress = Math.min(elapsed / spinDuration, 1);
      const easeOutQuint = 1 - Math.pow(1 - progress, 5);
      const totalDistance = 2000 + Math.random() * 500;
      const newPosition = startPosition + totalDistance * easeOutQuint;
      
      setCarouselPosition(newPosition);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setShowWinModal(true);
        hapticNotification('success');
        
        if (!demoMode) {
          if (winner.type === 'crystals' && winner.value) {
            setUser(prev => ({ 
              ...prev, 
              balance: prev.balance + winner.value!,
              gamesPlayed: prev.gamesPlayed + 1,
              gamesWon: prev.gamesWon + 1,
            }));
          } else {
            setInventory(prev => [...prev, winner.id]);
            setUser(prev => ({ 
              ...prev, 
              gamesPlayed: prev.gamesPlayed + 1,
              gamesWon: prev.gamesWon + 1,
            }));
          }
        }
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isSpinning, user.balance, selectedBet, demoMode, carouselPosition, determineWinner, hapticImpact, hapticNotification]);

  const handleBetSelect = useCallback((bet: number) => {
    hapticImpact('light');
    setSelectedBet(bet);
  }, [hapticImpact]);

  const handleScreenChange = useCallback((screen: Screen) => {
    hapticImpact('light');
    setCurrentScreen(screen);
  }, [hapticImpact]);

  const handleDemoToggle = useCallback(() => {
    hapticImpact('light');
    setDemoMode(prev => !prev);
  }, [hapticImpact]);

  const handleCloseWinModal = useCallback(() => {
    hapticImpact('light');
    setShowWinModal(false);
  }, [hapticImpact]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'leaderboard':
        return <LeaderboardScreen data={LEADERBOARD_DATA} currentUserId={user.id} />;
      case 'draws':
        return <DrawsScreen />;
      case 'tasks':
        return <TasksScreen tasks={TASKS_DATA} />;
      case 'profile':
        return <ProfileScreen user={user} inventory={inventory.map(id => PRIZES.find(p => p.id === id)!).filter(Boolean)} />;
      case 'play':
      default:
        return (
          <div className="flex flex-col gap-4 pb-24">
            <BetSelector 
              selectedBet={selectedBet} 
              onSelectBet={handleBetSelect}
              disabled={isSpinning}
            />
            <PrizeCarousel 
              prizes={CAROUSEL_PRIZES}
              position={carouselPosition}
              isSpinning={isSpinning}
              winningPrize={winningPrize}
            />
            <PlayButton 
              bet={selectedBet}
              onClick={handlePlay}
              disabled={isSpinning || user.balance < selectedBet}
              isLoading={isSpinning}
              demoMode={demoMode}
              onToggleDemo={handleDemoToggle}
            />
            <PossiblePrizes prizes={PRIZES} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-tg-gray-bg telegram-webapp">
      {/* Debug panel - only shown in development */}
      {import.meta.env.DEV && (
        <DebugPanel 
          tgUser={tgUser} 
          initData={initData} 
          isReady={isReady}
          platform={platform}
        />
      )}
      
      <Header 
        user={user} 
        onClose={closeApp}
        showClose={true}
      />
      
      <main className="px-4 pt-4">
        {renderScreen()}
      </main>
      
      <BottomNav 
        currentScreen={currentScreen}
        onScreenChange={handleScreenChange}
        hasTaskNotification={true}
      />
      
      {showWinModal && winningPrize && (
        <WinModal 
          prize={winningPrize}
          onClose={handleCloseWinModal}
          demoMode={demoMode}
        />
      )}
    </div>
  );
}

export default App;
