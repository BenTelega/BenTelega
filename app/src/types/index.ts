export interface Prize {
  id: string;
  name: string;
  image: string;
  cost: number;
  probability: number;
  type: 'crystals' | 'item' | 'boost';
  value?: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNext: number;
  balance: number;
  gamesPlayed: number;
  gamesWon: number;
  referrals: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  balance: number;
  level: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
  completed: boolean;
}

export type GameState = 'idle' | 'spinning' | 'won';
export type Screen = 'play' | 'leaderboard' | 'draws' | 'tasks' | 'profile';
