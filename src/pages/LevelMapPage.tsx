import React from 'react';
import { useApp } from '../context/AppContext';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';

export const LevelMapPage: React.FC = () => {
  const { navigateTo, playLetterAudio, playSuccessSound } = useApp();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-lg overflow-x-hidden">
      {/* Top App Bar */}
      <TopAppBar showNavigationLinks activeNav="play" />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Content Canvas (The Map) */}
      <main className="flex-grow relative overflow-hidden pb-32 md:pb-12 min-h-[700px]">
        {/* Whimsical Background Map */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-60"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9BhKtou8E0jm3pJiUW2PCq0bnyUSIPRFPwJIuX9Kkpw-DLJw7wLCEFtIbF0pjabeJ22AT7OLWaZcNDr00xPSxjcaD9vE7cyrsDgY4u_8UZPFaT406NshwA-GMGRqNDl27G-4WlXFkQRCZj_UxZQ76WfdP4XJYkYusZ_YLF_TCbdxnjOdWBCI8q6c1wcdXMg1dzUBiQ38nurghTwKSJCqZojbbHpVWsMNcBnh70vH5zQRoaSeTYlcf')`,
            }}
          ></div>
        </div>

        {/* Path connecting levels */}
        <svg
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1000 800"
        >
          <path
            className="svg-path"
            d="M 200,600 Q 400,300 500,400 T 800,200"
            fill="transparent"
            stroke="#00658d"
            strokeDasharray="20 20"
            strokeLinecap="round"
            strokeWidth="8"
          ></path>
        </svg>

        <div className="relative z-20 max-w-screen-xl mx-auto h-full min-h-[600px] p-margin-mobile">
          {/* Mascot Guide Character */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 animate-float w-28 h-28 md:w-36 md:h-36 bg-surface rounded-full shadow-xl flex items-center justify-center border-4 border-secondary-container z-20 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              playSuccessSound();
            }}
          >
            <img
              alt="Guide Character"
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS99AgqkJeE3R6qAQR07DnTLItN8xtX6q7mBobc9R1Vs26Gop8Rm-xWEgjvXf7bqWRzPQ0BZ7RrdDK0iVeaMqKE16ZrUhow8o5vEcc5h1fNOgXIUdqFALK76E0xQ8MZA_M8ix8e2tih0OOuwD5YFAEZs_PYU0km_9NtcqkXAP4Zwpuln8ULCdWi1o7hcos9kB-2jd2nfBQ1GdVKWpg5YgWpd48Z5v7sUUvmuGTTvPyWd5AK85_BORl"
            />
          </div>

          {/* Level 1: Island of Letters */}
          <button
            onClick={() => {
              playLetterAudio('A');
              navigateTo('letter-activity', { letter: 'A' });
            }}
            className="absolute bottom-16 left-[5%] md:left-[12%] group focus:outline-none z-20"
          >
            <div className="relative tactile-button border-b-[6px] border-primary-fixed-dim bg-primary rounded-3xl p-5 md:p-6 shadow-xl flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 group-hover:animate-wiggle group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-white mb-2 text-5xl md:text-6xl">
                abc
              </span>
              <span className="font-label-bold text-label-bold text-white text-center text-sm md:text-base">
                Letter Island
              </span>
              {/* Progress Star Badge */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-secondary-container rounded-full border-4 border-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-on-secondary-container material-symbols-fill text-xl md:text-2xl">
                  star
                </span>
              </div>
            </div>
          </button>

          {/* Level 2: Forest of Numbers */}
          <button
            onClick={() => navigateTo('number-activity')}
            className="absolute top-[35%] md:top-[40%] left-[35%] md:left-[42%] group focus:outline-none z-20"
          >
            <div className="relative tactile-button border-b-[6px] border-on-tertiary-fixed-variant bg-tertiary-container rounded-3xl p-5 md:p-6 shadow-xl flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 group-hover:animate-wiggle group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-on-tertiary-container mb-2 text-5xl md:text-6xl">
                123
              </span>
              <span className="font-label-bold text-label-bold text-on-tertiary-container text-center text-sm md:text-base">
                Number Forest
              </span>
              {/* Star Badge */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-secondary-container rounded-full border-4 border-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-on-secondary-container material-symbols-fill text-xl md:text-2xl">
                  star
                </span>
              </div>
            </div>
          </button>

          {/* Level 3: Ocean of Colors */}
          <button
            onClick={() => navigateTo('worlds')}
            className="absolute top-10 right-[5%] md:right-[15%] group focus:outline-none z-20"
          >
            <div className="relative tactile-button border-b-[6px] border-outline-variant bg-surface-container-highest rounded-3xl p-5 md:p-6 shadow-xl flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-on-surface-variant mb-2 text-5xl md:text-6xl">
                palette
              </span>
              <span className="font-label-bold text-label-bold text-on-surface-variant text-center text-sm md:text-base">
                Color Ocean
              </span>
            </div>
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};
