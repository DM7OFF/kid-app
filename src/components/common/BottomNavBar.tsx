import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScreenType } from '../../types';

export const BottomNavBar: React.FC = () => {
  const { currentScreen, navigateTo } = useApp();

  const navItems: { id: ScreenType; label: string; icon: string; matchScreens: ScreenType[] }[] = [
    { id: 'home', label: 'Home', icon: 'home', matchScreens: ['home'] },
    { id: 'worlds', label: 'Learn', icon: 'school', matchScreens: ['worlds', 'letter-activity', 'number-activity'] },
    { id: 'map', label: 'Play', icon: 'videogame_asset', matchScreens: ['map'] },
    { id: 'rewards', label: 'Rewards', icon: 'military_tech', matchScreens: ['rewards', 'progress', 'victory'] },
    { id: 'profile', label: 'Profile', icon: 'face', matchScreens: ['profile'] },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 py-2 bg-surface-container-lowest shadow-lg rounded-t-2xl border-t-4 border-surface-container-high pb-safe">
      {navItems.map(item => {
        const isActive = item.matchScreens.includes(currentScreen);
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            className={`flex flex-col items-center justify-center min-w-[60px] min-h-[60px] p-2 rounded-xl transition-all duration-150 ${
              isActive
                ? 'bg-secondary-container text-on-secondary-container border-b-4 border-secondary translate-y-0.5 shadow-sm'
                : 'text-on-surface-variant hover:bg-surface-container-high active:scale-95'
            }`}
          >
            <span
              className={`material-symbols-outlined text-2xl ${
                isActive ? 'material-symbols-fill' : ''
              }`}
            >
              {item.icon}
            </span>
            <span className="font-label-bold text-xs mt-1 leading-none">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
