import React from 'react';
import { useApp } from '../../context/AppContext';

interface TopAppBarProps {
  showNavigationLinks?: boolean;
  activeNav?: string;
  variant?: 'default' | 'transparent' | 'simple';
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  showNavigationLinks = false,
  activeNav,
  variant = 'default',
}) => {
  const { userStats, navigateTo, setIsSettingsModalOpen } = useApp();

  return (
    <header className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-touch-target-min w-full max-w-screen-xl mx-auto pt-4 pb-4 sticky top-0 z-40 bg-background/90 backdrop-blur-sm">
      {/* Brand / Logo */}
      <div
        onClick={() => navigateTo('home')}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shadow-sm text-on-primary-container font-display-hero text-2xl group-hover:scale-105 transition-transform">
          🎨
        </div>
        <span className="font-display-hero text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
          JoyLearn
        </span>
      </div>

      {/* Optional Desktop Nav Links (like on Choose World & Profile screens) */}
      {showNavigationLinks && (
        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => navigateTo('worlds')}
            className={`font-label-bold text-label-bold transition-all ${
              activeNav === 'learn'
                ? 'text-primary border-b-4 border-primary pb-1'
                : 'text-on-surface-variant hover:scale-105'
            }`}
          >
            Learn
          </button>
          <button
            onClick={() => navigateTo('map')}
            className={`font-label-bold text-label-bold transition-all ${
              activeNav === 'play'
                ? 'text-primary border-b-4 border-primary pb-1'
                : 'text-on-surface-variant hover:scale-105'
            }`}
          >
            Play
          </button>
          <button
            onClick={() => navigateTo('rewards')}
            className={`font-label-bold text-label-bold transition-all ${
              activeNav === 'rewards'
                ? 'text-primary border-b-4 border-primary pb-1'
                : 'text-on-surface-variant hover:scale-105'
            }`}
          >
            Rewards
          </button>
        </nav>
      )}

      {/* Header Stats & Quick Actions */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Stars, Streak & Mini Progress pill */}
        <div className="flex items-center gap-3 bg-surface-container-lowest rounded-full px-4 py-2 shadow-sm border border-surface-container-high">
          {/* Stars */}
          <button
            onClick={() => navigateTo('rewards')}
            className="flex items-center gap-1.5 hover:scale-105 transition-transform"
            title="My Stars"
          >
            <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-2xl">
              star
            </span>
            <span className="font-label-bold text-label-bold text-on-surface">
              {userStats.stars}
            </span>
          </button>

          {/* Streak */}
          <div className="flex items-center gap-1.5 border-l border-outline-variant pl-3">
            <span className="material-symbols-outlined text-tertiary material-symbols-fill text-2xl">
              local_fire_department
            </span>
            <span className="font-label-bold text-label-bold text-on-surface">
              {userStats.streak}
            </span>
          </div>

          {/* Progress Bar Mini (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 border-l border-outline-variant pl-3 w-28">
            <div className="w-full bg-surface-variant rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary-container to-secondary-container h-3 rounded-full transition-all duration-500"
                style={{ width: `${userStats.levelProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Settings button */}
        <button
          onClick={() => setIsSettingsModalOpen(true)}
          className="p-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-full transition-all hidden sm:flex items-center justify-center"
          aria-label="Settings"
        >
          <span className="material-symbols-outlined text-3xl">settings</span>
        </button>

        {/* Profile Avatar */}
        <button
          onClick={() => navigateTo('profile')}
          className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden shadow-sm hover:scale-105 transition-transform relative group focus:outline-none focus:ring-4 focus:ring-primary/20"
          title="Go to Profile"
        >
          <img
            alt={`${userStats.name}'s profile avatar`}
            className="w-full h-full object-cover"
            src={userStats.avatarUrl}
          />
        </button>
      </div>
    </header>
  );
};
