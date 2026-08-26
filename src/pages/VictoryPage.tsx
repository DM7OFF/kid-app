import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { startVictoryConfettiShower, triggerConfetti } from '../components/common/ConfettiEffect';

export const VictoryPage: React.FC = () => {
  const { navigateTo, playCheerSound, addStars, unlockBadge } = useApp();

  useEffect(() => {
    playCheerSound();
    triggerConfetti(0.4);
    startVictoryConfettiShower();
    addStars(10);
    unlockBadge('alphabet');
  }, []);

  return (
    <div className="bg-primary-fixed min-h-screen flex items-center justify-center overflow-x-hidden relative selection:bg-secondary-container selection:text-on-secondary-container p-4">
      {/* Victory Card */}
      <main className="relative z-10 w-full max-w-2xl bg-surface-container-lowest rounded-3xl p-6 sm:p-10 md:p-14 flex flex-col items-center justify-center text-center gap-8 card-depth border-4 border-surface-container-lowest my-12">
        {/* Cheering Dancing Character Asset */}
        <div className="absolute -top-24 sm:-top-32 -right-8 sm:-right-16 md:-right-24 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 z-20 animate-bounce pointer-events-none">
          <img
            alt="Cheering Character"
            className="w-full h-full object-contain filter drop-shadow-2xl"
            src="/assets/character/character-dance.gif"
          />
        </div>

        {/* Trophy / Main Icon */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 flex items-center justify-center bg-secondary-container rounded-full border-8 border-secondary-fixed-dim shadow-inner relative animate-wiggle">
          <span className="material-symbols-outlined text-8xl sm:text-9xl md:text-[120px] text-on-secondary-container material-symbols-fill">
            emoji_events
          </span>
          {/* Sparkles around trophy */}
          <span className="material-symbols-outlined absolute -top-3 -right-3 text-tertiary-container text-4xl animate-pulse">
            auto_awesome
          </span>
          <span
            className="material-symbols-outlined absolute bottom-3 -left-6 text-primary-container text-5xl animate-bounce"
            style={{ animationDelay: '0.5s' }}
          >
            stars
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-2">
          <h1 className="font-display-hero text-headline-lg md:text-display-hero text-primary drop-shadow-md">
            Well done!
          </h1>
          <p className="font-headline-lg text-headline-lg text-on-surface">
            You're a champion!
          </p>
        </div>

        {/* Rewards Section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {/* Stars Reward */}
          <div className="bg-secondary-fixed rounded-2xl p-4 border-4 border-secondary-container flex items-center gap-3 transform hover:scale-105 transition-transform cursor-default flex-1 justify-center sm:justify-start">
            <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-4xl text-secondary material-symbols-fill">
                star
              </span>
            </div>
            <div className="flex flex-col text-left pr-2">
              <span className="font-label-bold text-label-bold text-on-secondary-container text-xs">
                Reward
              </span>
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-secondary font-bold">
                +10 Stars
              </span>
            </div>
          </div>

          {/* Badge Reward */}
          <div className="bg-tertiary-fixed rounded-2xl p-4 border-4 border-tertiary-container flex items-center gap-3 transform hover:scale-105 transition-transform cursor-default flex-1 justify-center sm:justify-start">
            <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-4xl text-tertiary material-symbols-fill">
                military_tech
              </span>
            </div>
            <div className="flex flex-col text-left pr-2">
              <span className="font-label-bold text-label-bold text-on-tertiary-container text-xs">
                New Badge
              </span>
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-tertiary font-bold">
                Unlocked!
              </span>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={() => navigateTo('rewards')}
          className="bg-tertiary-container text-on-tertiary-container font-headline-lg text-headline-lg rounded-full px-10 h-[72px] sm:h-[80px] w-full max-w-sm mt-4 flex items-center justify-center gap-4 bouncy-button group shadow-xl border-b-6 border-tertiary hover:bg-tertiary hover:text-on-tertiary transition-colors active:translate-y-2"
        >
          <span>Next</span>
          <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">
            arrow_forward
          </span>
        </button>
      </main>
    </div>
  );
};
