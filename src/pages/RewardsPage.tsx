import React from 'react';
import { useApp } from '../context/AppContext';
import { triggerConfetti } from '../components/common/ConfettiEffect';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';
import { StickerBookModal } from '../components/modals/StickerBookModal';

export const RewardsPage: React.FC = () => {
  const { badges, setIsStickerModalOpen, playSuccessSound } = useApp();

  const handleBadgeClick = (badge: (typeof badges)[0]) => {
    if (badge.isUnlocked) {
      playSuccessSound();
      triggerConfetti(0.5);
    }
  };

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen pb-32 md:pb-12 overflow-x-hidden">
      {/* Top App Bar */}
      <TopAppBar showNavigationLinks activeNav="rewards" />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Content Canvas */}
      <main className="max-w-screen-xl mx-auto px-margin-mobile md:px-margin-desktop mt-4 flex flex-col gap-8">
        {/* Header & Progress Section */}
        <section className="flex flex-col gap-2 items-center text-center">
          <h1 className="font-display-hero text-headline-lg md:text-display-hero text-primary font-extrabold mb-1">
            Your Treasures!
          </h1>
          {/* Progress Bar */}
          <div className="w-full max-w-2xl bg-surface-container-high rounded-full h-12 p-1.5 border-4 border-outline-variant shadow-inner relative mt-2">
            <div className="bg-gradient-to-r from-secondary-container to-secondary-fixed h-full rounded-full w-3/4 relative border-b-4 border-secondary-container shadow-sm">
              {/* Sparkle Leading Edge */}
              <div className="absolute -right-4 -top-3 animate-pulse">
                <span className="material-symbols-outlined text-4xl text-primary drop-shadow-md material-symbols-fill">
                  star
                </span>
              </div>
            </div>
          </div>
          <p className="font-label-bold text-label-bold text-on-surface-variant mt-2 flex items-center justify-center gap-2">
            Next badge in{' '}
            <strong className="text-secondary font-extrabold text-2xl">50</strong>{' '}
            <span className="material-symbols-outlined text-secondary-container drop-shadow-sm material-symbols-fill text-2xl">
              star
            </span>
          </p>
        </section>

        {/* Main Rewards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-2">
          {/* Badges Earned (Featured Span) */}
          <section className="col-span-1 md:col-span-8 flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary-container font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl material-symbols-fill">
                military_tech
              </span>
              Badges earned
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-surface-container-low p-6 rounded-3xl border-4 border-surface-container-high shadow-lg">
              {badges.map(badge => {
                if (badge.isUnlocked) {
                  return (
                    <div
                      key={badge.id}
                      onClick={() => handleBadgeClick(badge)}
                      className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border-b-8 border-surface-container-highest tactile-button cursor-pointer hover:bg-surface-container transition-all group"
                    >
                      <div className={`w-24 h-24 relative ${badge.floatClass || 'badge-float'}`}>
                        {badge.imageUrl ? (
                          <img
                            alt={`${badge.name} Badge`}
                            className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform"
                            src={badge.imageUrl}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-5xl">
                            🏆
                          </div>
                        )}
                      </div>
                      <span className="font-label-bold text-label-bold text-on-surface text-center text-sm md:text-base">
                        {badge.name}
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={badge.id}
                      className="bg-surface-container rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border-b-4 border-surface-variant opacity-70"
                    >
                      <div className="w-24 h-24 bg-surface-dim rounded-full flex items-center justify-center shadow-inner">
                        <span className="material-symbols-outlined text-5xl text-on-surface-variant">
                          lock
                        </span>
                      </div>
                      <span className="font-label-bold text-label-bold text-on-surface-variant text-center text-sm md:text-base">
                        Mystery
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          </section>

          {/* Sticker Collection Book (Side Span) */}
          <section className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl material-symbols-fill">
                auto_awesome
              </span>
              Sticker Collection
            </h2>
            <div className="bg-tertiary-fixed rounded-3xl p-6 flex flex-col items-center justify-center gap-6 border-b-8 border-tertiary-fixed-dim shadow-md h-full min-h-[300px]">
              <div className="w-32 h-32 relative animate-wiggle cursor-pointer" onClick={() => setIsStickerModalOpen(true)}>
                {/* Simulated Sticker Book Stack */}
                <div className="absolute inset-0 bg-surface-container-lowest rounded-2xl border-2 border-outline-variant transform rotate-6"></div>
                <div className="absolute inset-0 bg-surface-container-highest rounded-2xl border-2 border-outline-variant transform -rotate-3"></div>
                <div className="absolute inset-0 bg-surface rounded-2xl border-4 border-primary flex items-center justify-center overflow-hidden shadow-inner">
                  <span className="material-symbols-outlined text-6xl text-primary material-symbols-fill">
                    menu_book
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsStickerModalOpen(true)}
                className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-2xl border-b-8 border-on-primary-container tactile-button shadow-md w-full hover:bg-on-primary-fixed-variant"
              >
                Open the book
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Sticker Album Modal */}
      <StickerBookModal />

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};
