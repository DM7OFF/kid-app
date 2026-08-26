import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';

export const ChooseWorldPage: React.FC = () => {
  const { navigateTo, playLetterAudio, playSuccessSound } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col overflow-x-hidden pb-28 md:pb-12">
      {/* TopAppBar */}
      <TopAppBar showNavigationLinks activeNav="learn" />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Content Canvas */}
      <main className="flex-1 w-full pt-6">
        <div className="px-margin-mobile md:px-margin-desktop mb-6 max-w-screen-xl mx-auto">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
            Choose your World!
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            Ready for a new adventure?
          </p>
        </div>

        {/* Horizontal Drag/Scroll Container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`w-full overflow-x-auto hide-scrollbar pl-margin-mobile md:pl-margin-desktop pr-8 pb-12 pt-2 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          <div className="flex gap-stack-gap w-max">
            {/* World of Letters */}
            <button
              onClick={() => {
                playLetterAudio('A');
                navigateTo('letter-activity', { letter: 'A' });
              }}
              className="bouncy-card group relative w-72 md:w-96 h-[420px] md:h-[500px] rounded-[3rem] bg-primary-container border-b-[8px] border-on-primary-container shadow-xl flex flex-col items-center justify-between p-8 overflow-hidden text-left focus:outline-none focus:ring-4 focus:ring-primary hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[130px] text-on-primary-container">
                  abc
                </span>
              </div>
              <div className="w-full z-10">
                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    auto_stories
                  </span>
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary-container mb-2">
                  World of Letters
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container/80 line-clamp-2">
                  Discover the magic alphabet!
                </p>
              </div>
              <div className="w-full flex justify-between items-end z-10">
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-on-primary-container/60 material-symbols-fill">
                    star
                  </span>
                  <span className="material-symbols-outlined text-on-primary-container/60 material-symbols-fill">
                    star
                  </span>
                </div>
                <div className="bg-on-primary-container text-surface-container-lowest rounded-full p-4 transform group-hover:scale-110 shadow-md transition-transform">
                  <span className="material-symbols-outlined text-3xl material-symbols-fill">
                    play_arrow
                  </span>
                </div>
              </div>
            </button>

            {/* World of Numbers */}
            <button
              onClick={() => navigateTo('number-activity')}
              className="bouncy-card group relative w-72 md:w-96 h-[420px] md:h-[500px] rounded-[3rem] bg-tertiary-container border-b-[8px] border-on-tertiary-container shadow-xl flex flex-col items-center justify-between p-8 overflow-hidden text-left focus:outline-none focus:ring-4 focus:ring-tertiary hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[130px] text-on-tertiary-container">
                  123
                </span>
              </div>
              <div className="w-full z-10">
                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-tertiary text-5xl">
                    calculate
                  </span>
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-tertiary-container mb-2">
                  World of Numbers
                </h2>
                <p className="font-body-lg text-body-lg text-on-tertiary-container/80 line-clamp-2">
                  Count with your friends!
                </p>
              </div>
              <div className="w-full flex justify-between items-end z-10">
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-on-tertiary-container/60 material-symbols-fill">
                    star
                  </span>
                </div>
                <div className="bg-on-tertiary-container text-surface-container-lowest rounded-full p-4 transform group-hover:scale-110 shadow-md transition-transform">
                  <span className="material-symbols-outlined text-3xl material-symbols-fill">
                    play_arrow
                  </span>
                </div>
              </div>
            </button>

            {/* World of Songs */}
            <button
              onClick={() => {
                playSuccessSound();
                navigateTo('victory');
              }}
              className="bouncy-card group relative w-72 md:w-96 h-[420px] md:h-[500px] rounded-[3rem] bg-secondary-container border-b-[8px] border-on-secondary-container shadow-xl flex flex-col items-center justify-between p-8 overflow-hidden text-left focus:outline-none focus:ring-4 focus:ring-secondary hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[130px] text-on-secondary-container">
                  music_note
                </span>
              </div>
              <div className="w-full z-10">
                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-5xl">
                    headphones
                  </span>
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-secondary-container mb-2">
                  World of Songs
                </h2>
                <p className="font-body-lg text-body-lg text-on-secondary-container/80 line-clamp-2">
                  Sing and dance!
                </p>
              </div>
              <div className="w-full flex justify-between items-end z-10">
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-on-secondary-container/60 material-symbols-fill">
                    star
                  </span>
                  <span className="material-symbols-outlined text-on-secondary-container/60 material-symbols-fill">
                    star
                  </span>
                  <span className="material-symbols-outlined text-on-secondary-container/60 material-symbols-fill">
                    star
                  </span>
                </div>
                <div className="bg-on-secondary-container text-surface-container-lowest rounded-full p-4 transform group-hover:scale-110 shadow-md transition-transform">
                  <span className="material-symbols-outlined text-3xl material-symbols-fill">
                    play_arrow
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};
