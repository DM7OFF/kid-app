import React from 'react';
import { useApp } from '../../context/AppContext';
import { ScreenType } from '../../types';

export const DesktopSidebar: React.FC = () => {
  const { currentScreen, navigateTo } = useApp();

  const navItems: { id: ScreenType; label: string; icon: string; matchScreens: ScreenType[] }[] = [
    { id: 'home', label: 'Home', icon: 'home', matchScreens: ['home'] },
    { id: 'worlds', label: 'Learn', icon: 'school', matchScreens: ['worlds', 'letter-activity', 'number-activity'] },
    { id: 'map', label: 'Play', icon: 'videogame_asset', matchScreens: ['map'] },
    { id: 'rewards', label: 'Rewards', icon: 'military_tech', matchScreens: ['rewards', 'progress', 'victory'] },
    { id: 'profile', label: 'Profile', icon: 'face', matchScreens: ['profile'] },
  ];

  return (
    <aside className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 bg-surface-container-lowest p-3 rounded-3xl shadow-xl border-2 border-surface-variant z-40">
      {navItems.map(item => {
        const isActive = item.matchScreens.includes(currentScreen);
        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            title={item.label}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-150 ${
              isActive
                ? 'bg-secondary-container text-on-secondary-container border-b-4 border-secondary translate-y-1 shadow-md'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:scale-105 active:translate-y-0.5'
            }`}
          >
            <span
              className={`material-symbols-outlined text-3xl ${
                isActive ? 'material-symbols-fill' : ''
              }`}
            >
              {item.icon}
            </span>
            <span className="font-label-bold text-[11px] mt-0.5 font-bold tracking-tight">
              {item.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
};
