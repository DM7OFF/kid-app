import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ScreenType, UserStats, BadgeItem } from '../types';

interface AppContextType {
  currentScreen: ScreenType;
  navigateTo: (screen: ScreenType, params?: { letter?: string; number?: number }) => void;
  userStats: UserStats;
  addStars: (count: number) => void;
  updateUserStats: (updates: Partial<UserStats>) => void;
  currentLetter: string;
  setCurrentLetter: (letter: string) => void;
  playLetterAudio: (letter?: string) => Promise<void>;
  playSuccessSound: () => void;
  playCheerSound: () => void;
  isStickerModalOpen: boolean;
  setIsStickerModalOpen: (open: boolean) => void;
  isCustomizeModalOpen: boolean;
  setIsCustomizeModalOpen: (open: boolean) => void;
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (open: boolean) => void;
  badges: BadgeItem[];
  unlockBadge: (badgeId: string) => void;
}

const defaultStats: UserStats = {
  stars: 124,
  streak: 5,
  level: 3,
  levelProgress: 65,
  name: 'Leo',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH_L36rxJBqEj7G7SeMik8uQh0DZkDAc2KqBe8mifC6viYumi-eEKJJAn92K3rL0Erk30Gwd64cT9C6rlQCqBKWy06dwj-7a3l28vhYC_HqOhA1wGX09RAwIqQ6PsnPJ6zYdjwcongGGxTvdfQBNhFktvhNxiix0w6scagK1uu-tr1AfhYq1U8UDP0jLQagKfIGlWcHE5XzWa8Ne5n9JJOhHUmJ74Eki72mm7Rxjx5uH2kTQgjhmXL',
  favoriteColor: '#00658d',
  outfit: 'Superhero Cape',
};

const initialBadges: BadgeItem[] = [
  {
    id: 'artist',
    name: 'Artist',
    icon: 'palette',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVmWpaMhRQGxger9yvnxe00Tz8vAcdlYE0LSybACZ-08FIXEF-YG_KUQk7jn-VyJ-oTB52cJw8j7vGYT2raXMTrD-6wwFhXvcF9eRgTOBLmC-1YqBSZ1YW6e0T6faNPHuGfA6Fz0el-iZbVCYGH6fe6FrlbrYazRolO83ozfVHdo6zzcTJeC9hL0_ExoB2dEq_xhjzEIfsNhEwzZmu08YhutgRvyGCeGpxMwVvoFaQEaLdjeIL9eb4',
    isUnlocked: true,
    floatClass: 'badge-float',
  },
  {
    id: 'alphabet',
    name: 'The Alphabet',
    icon: 'abc',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGkcjaKQylZOSkq7FDL1OJh1N6iwPmd-vXxLPAanLCtnFKQcQHJvLKAlwSfqStvdRULBZl38OFHKPSVOotA476UaF-ncA8yYEIQPuKLbg-OqeViK2KPhLqBmIA-8U0fopp5e43h_-frO864Z_E33Cpqd8K8YCdBzmHdJR-MI_eE0OutEoIP19tUR8kkcZOT1ULUsYbepjdCV5f4DzmMNDY_iaJzM6Ztvm_6aUoYtUqAnoqaymhNeJh',
    isUnlocked: true,
    floatClass: 'badge-float-delayed',
  },
  {
    id: 'animals',
    name: 'Animals',
    icon: 'pets',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgG_tzOOJArsKUnYUPL610WhTvyD3DzWwHuXl7l3fdoUL1ll5kUUsTspJiqobwbr1EHE1CIG7frvb5Vn_lhfNsH5o6SR3YaYQvlWx-rphYyQEAUTM5Je6usJzhUzZn97oiDR0hOVUIelCtC2drLJ6VjJJk6RzuS9Ujc5_KCJR2k_SUl2i1KwP7Y4kGRd0Qo04os5Z30AoD7TRAWVBpGhfSOzF1tznNY-1C_dlQL8jHSukrF7k8WcG5',
    isUnlocked: true,
    floatClass: 'badge-float-delayed-2',
  },
  {
    id: 'puzzles',
    name: 'Puzzles',
    icon: 'extension',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn-s01RX2UoL6zwEXhNS4NAWmNVm7uXREN32y-sI8ZNPmzD1Nugf2h7-NCfdDZE9To-A_O2M7rJNLaMuXI2d-wIX5Ol8MYogEaojJjmcz_49qM_aauZDKeYBqL-85n8JkO0WD7hHRUKcPjQMzGekqazdlX3cNwnKh20l2VGIovGI3NhUJHfBXS1JWYNBWZ4wYTpM_vf-7e7DQr9C7fXYJJ7uEp1KrRvqwMimtrXDXuLikihdpNnzrj',
    isUnlocked: true,
    floatClass: 'badge-float',
  },
  {
    id: 'mystery1',
    name: 'Mystery',
    icon: 'lock',
    isUnlocked: false,
  },
  {
    id: 'mystery2',
    name: 'Mystery',
    icon: 'lock',
    isUnlocked: false,
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [userStats, setUserStats] = useState<UserStats>(defaultStats);
  const [currentLetter, setCurrentLetter] = useState<string>('A');
  const [badges, setBadges] = useState<BadgeItem[]>(initialBadges);
  const [isStickerModalOpen, setIsStickerModalOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const navigateTo = (screen: ScreenType, params?: { letter?: string; number?: number }) => {
    if (params?.letter) {
      setCurrentLetter(params.letter.toUpperCase());
    }
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addStars = (count: number) => {
    setUserStats(prev => {
      const newStars = prev.stars + count;
      const newProgress = Math.min(100, (newStars % 50) * 2);
      const newLevel = Math.floor(newStars / 50) + 1;
      return {
        ...prev,
        stars: newStars,
        level: Math.max(prev.level, newLevel),
        levelProgress: newProgress,
      };
    });
  };

  const updateUserStats = (updates: Partial<UserStats>) => {
    setUserStats(prev => ({ ...prev, ...updates }));
  };

  const unlockBadge = (badgeId: string) => {
    setBadges(prev =>
      prev.map(b => (b.id === badgeId ? { ...b, isUnlocked: true } : b))
    );
  };

  // Synthesize or play Letter audio from existing audio files
  const playLetterAudio = async (letterToPlay?: string) => {
    const letter = (letterToPlay || currentLetter).toUpperCase();
    const primaryAudioPath = `/assets/audio/alphabet/${letter}.mp3`;
    const fallbackAudioPath = `/assets/audio/${letter}.mp3`;

    try {
      const audio = new Audio(primaryAudioPath);
      await audio.play().catch(async () => {
        const fallbackAudio = new Audio(fallbackAudioPath);
        await fallbackAudio.play();
      });
    } catch (e) {
      console.warn(`Could not play letter audio for ${letter}:`, e);
      // Fallback: SpeechSynthesis if browser allows
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(letter);
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Audio chimes using Web Audio API for playful feedback
  const playSuccessSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.3, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.35);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const playCheerSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880, 1108.73]; // A major fanfare
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.25, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.45);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        navigateTo,
        userStats,
        addStars,
        updateUserStats,
        currentLetter,
        setCurrentLetter,
        playLetterAudio,
        playSuccessSound,
        playCheerSound,
        isStickerModalOpen,
        setIsStickerModalOpen,
        isCustomizeModalOpen,
        setIsCustomizeModalOpen,
        isSettingsModalOpen,
        setIsSettingsModalOpen,
        badges,
        unlockBadge,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
