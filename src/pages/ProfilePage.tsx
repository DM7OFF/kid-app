import React from 'react';
import { useApp } from '../context/AppContext';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';
import { CustomizeModal } from '../components/modals/CustomizeModal';
import { triggerConfetti } from '../components/common/ConfettiEffect';

export const ProfilePage: React.FC = () => {
  const { userStats, setIsCustomizeModalOpen, navigateTo, playSuccessSound } = useApp();

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col pb-28 md:pb-12 overflow-x-hidden">
      {/* Top App Bar */}
      <TopAppBar showNavigationLinks activeNav="profile" />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row gap-6 md:gap-stack-gap">
        {/* Left Column: Avatar & Personalization */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Avatar Card */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 flex flex-col items-center tactile-card border-4 border-surface-container">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4">
              <div className="absolute inset-0 bg-secondary-container rounded-full animate-pulse opacity-50"></div>
              <img
                alt={`${userStats.name}'s Avatar`}
                className="w-full h-full object-cover rounded-full border-8 border-surface-container-lowest relative z-10 shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBruBjcreTEk6PhPCMnzbzNEBSDveS4T48LtZRMt0h8mWhJ_c9tx68U4Bp8Su0zJ1kJBDgLkYOW6A7ZGXMtffZOoPlH6Tohu4t_Kqj1qIMzK34KR73_eTG3l1JJQhLsNx7KsM_NQjvIxAIMYK0ujn6LwauyfxbF8tIjTU7HD6J44srx25uaaJGilVnSAT9JnidvIljbdqNrH0_hrxIwArBVPp1PGbZ9HJTF3udmesZ8AJhuA1BKAu9o"
              />
              <button
                onClick={() => setIsCustomizeModalOpen(true)}
                className="absolute bottom-0 right-0 w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center border-4 border-surface-container-lowest z-20 hover:scale-110 active:scale-95 transition-transform shadow-md"
                title="Edit avatar"
              >
                <span className="material-symbols-outlined text-2xl">edit</span>
              </button>
            </div>

            <h1 className="font-display-hero text-headline-lg sm:text-display-hero text-on-surface mb-2">
              {userStats.name}
            </h1>
            <div className="bg-tertiary-container text-on-tertiary-container font-label-bold text-label-bold px-6 py-2 rounded-full border-4 border-tertiary shadow-sm">
              Level {userStats.level + 2}
            </div>
          </div>

          {/* Personalization Card */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 tactile-card border-4 border-surface-container">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-on-surface">
              Customize
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setIsCustomizeModalOpen(true)}
                className="bg-surface-container-low hover:bg-surface-container-high rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border-4 border-transparent hover:border-primary transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-4xl text-primary material-symbols-fill">
                  apparel
                </span>
                <span className="font-label-bold text-label-bold text-sm">Outfits</span>
              </button>
              <button
                onClick={() => setIsCustomizeModalOpen(true)}
                className="bg-surface-container-low hover:bg-surface-container-high rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border-4 border-transparent hover:border-primary transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-4xl text-tertiary material-symbols-fill">
                  palette
                </span>
                <span className="font-label-bold text-label-bold text-sm">Colors</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Progress */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Streak Stat */}
            <div className="bg-tertiary-fixed text-on-tertiary-fixed rounded-3xl p-6 flex items-center gap-6 border-b-[8px] border-tertiary card-depth">
              <div className="w-18 h-18 bg-surface-container-lowest rounded-2xl p-3 flex items-center justify-center shadow-inner text-4xl">
                🔥
              </div>
              <div>
                <div className="font-display-hero text-headline-lg mb-0.5">
                  {userStats.streak + 2} Day
                </div>
                <div className="font-label-bold text-label-bold opacity-80 text-sm">
                  streak!
                </div>
              </div>
            </div>

            {/* Stars Stat */}
            <div className="bg-secondary-fixed text-on-secondary-fixed rounded-3xl p-6 flex items-center gap-6 border-b-[8px] border-secondary card-depth">
              <div className="w-18 h-18 bg-surface-container-lowest rounded-2xl p-3 flex items-center justify-center shadow-inner text-4xl">
                ⭐
              </div>
              <div>
                <div className="font-display-hero text-headline-lg mb-0.5">
                  250
                </div>
                <div className="font-label-bold text-label-bold opacity-80 text-sm">
                  Stars earned
                </div>
              </div>
            </div>
          </div>

          {/* Progress Map ("My Adventure") */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 flex-grow tactile-card border-4 border-surface-container flex flex-col relative overflow-hidden min-h-[420px]">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface z-10 font-bold">
              My Adventure
            </h2>
            <div className="relative w-full h-full min-h-[350px] flex items-center justify-center bg-surface-container-low rounded-2xl border-4 border-surface-variant overflow-hidden">
              {/* Map Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIk9vjyO_Ju_GdMJMkTowyXcg4Abl8qBUMAjlqYZF9brnBsmEQ2PYGswkgd5gtkpx3rYJHe9sG5xF9xZ4bq1g3k2c-SP_nM2m4A3vPzDVNTduQdBHleuwQZbIBSkaSwN7FFyXoLuA3zo27JASyi5bpjfO5ysfDKZ_iEDlB-IRdugHSfoVgCIuIIjwQ1HRz5KVsgIb4mvizyVnWcee0Ho2CE2b_YihOmJERQmg9pBkaWBz-GP5NquIA')`,
                }}
              ></div>

              {/* Decorative SVG Path */}
              <svg
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 10,90 Q 30,50 50,70 T 90,10"
                  fill="none"
                  opacity="0.6"
                  stroke="#47c1ff"
                  strokeLinecap="round"
                  strokeWidth="8"
                ></path>
              </svg>

              {/* Path Node 1 (Completed) */}
              <div
                onClick={() => {
                  playSuccessSound();
                  triggerConfetti(0.6);
                }}
                className="absolute w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center border-4 border-[#004c6b] shadow-lg z-10 squishy-btn cursor-pointer hover:scale-110"
                style={{ bottom: '15%', left: '15%' }}
              >
                <span className="material-symbols-outlined text-2xl material-symbols-fill">
                  check
                </span>
              </div>

              {/* Path Node 2 (Completed) */}
              <div
                onClick={() => {
                  playSuccessSound();
                  triggerConfetti(0.4);
                }}
                className="absolute w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center border-4 border-[#004c6b] shadow-lg z-10 squishy-btn cursor-pointer hover:scale-110"
                style={{ bottom: '40%', left: '45%' }}
              >
                <span className="material-symbols-outlined text-2xl material-symbols-fill">
                  check
                </span>
              </div>

              {/* Current Level Node (Active) */}
              <div
                onClick={() => navigateTo('map')}
                className="absolute w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center border-4 border-[#6f5900] shadow-2xl z-20 squishy-btn animate-bounce cursor-pointer hover:scale-110"
                style={{ top: '22%', right: '18%' }}
              >
                <span className="material-symbols-outlined text-4xl material-symbols-fill">
                  star
                </span>
                <div className="absolute -top-3 -right-3 bg-tertiary text-on-tertiary font-label-bold text-xs px-2.5 py-0.5 rounded-full shadow-md">
                  Here!
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Customization Modal */}
      <CustomizeModal />

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};
