import React from 'react';
import { useApp } from '../context/AppContext';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';

export const ProgressPage: React.FC = () => {
  const { userStats, navigateTo, playLetterAudio, playSuccessSound } = useApp();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-lg pb-32 md:pb-12 overflow-x-hidden">
      {/* Top App Bar */}
      <TopAppBar showNavigationLinks activeNav="rewards" />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col gap-6 md:gap-stack-gap">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-low p-6 sm:p-8 rounded-3xl tactile-card relative overflow-hidden border-2 border-surface-container-high">
          {/* Decorative blur elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-container rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container rounded-full opacity-20 blur-xl"></div>

          <div className="z-10 text-center md:text-left">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="material-symbols-outlined text-4xl text-secondary-container material-symbols-fill">
                stars
              </span>
              Well done, {userStats.name}!
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              You earned 12 stars this week.
            </p>
          </div>

          <div className="z-10 flex flex-col items-center gap-2">
            <span className="font-label-bold text-label-bold text-tertiary">
              Level {userStats.level}
            </span>
            <div className="w-64 h-6 bg-surface-container-highest rounded-full overflow-hidden relative border-2 border-outline-variant shadow-inner">
              <div
                className="h-full progress-bar-fill rounded-full transition-all duration-500"
                style={{ width: `${userStats.levelProgress}%` }}
              >
                <span className="material-symbols-outlined progress-bar-sparkle">
                  auto_awesome
                </span>
              </div>
            </div>
            <span className="text-sm font-body-lg text-on-surface-variant">
              4 more stars for Level {userStats.level + 1}!
            </span>
          </div>
        </section>

        {/* Bento Grid Layout for Progression */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Skills Mastered (Large Span) */}
          <article className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-6 md:p-8 tactile-card flex flex-col gap-6 border-2 border-surface-container-high">
            <div className="flex items-center gap-3 border-b-2 border-surface-variant pb-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                <span className="material-symbols-outlined text-3xl material-symbols-fill">
                  school
                </span>
              </div>
              <h3 className="font-label-bold text-label-bold md:text-headline-lg-mobile text-on-surface">
                Skills Learned
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Letters A, B, C, D */}
              {(['A', 'B', 'C', 'D'] as const).map(letter => (
                <div
                  key={letter}
                  onClick={() => {
                    playLetterAudio(letter);
                    navigateTo('letter-activity', { letter });
                  }}
                  className="bg-primary-fixed flex flex-col items-center justify-center p-4 rounded-2xl border-b-4 border-primary-fixed-dim relative cursor-pointer hover:scale-105 transition-transform"
                >
                  <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-secondary-container rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-on-secondary-container text-sm material-symbols-fill">
                      check_circle
                    </span>
                  </div>
                  <span className="text-4xl sm:text-5xl font-display-hero text-on-primary-fixed mb-1">
                    {letter}
                  </span>
                  <span className="font-label-bold text-on-primary-fixed text-xs sm:text-sm">
                    Letter
                  </span>
                </div>
              ))}

              {/* Numbers 1-3 */}
              <div
                onClick={() => navigateTo('number-activity')}
                className="bg-tertiary-fixed flex flex-col items-center justify-center p-4 rounded-2xl border-b-4 border-tertiary-fixed-dim relative sm:col-span-2 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-secondary-container rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-on-secondary-container text-sm material-symbols-fill">
                    check_circle
                  </span>
                </div>
                <div className="flex gap-4 mb-1">
                  <span className="text-3xl sm:text-4xl font-display-hero text-on-tertiary-fixed">1</span>
                  <span className="text-3xl sm:text-4xl font-display-hero text-on-tertiary-fixed">2</span>
                  <span className="text-3xl sm:text-4xl font-display-hero text-on-tertiary-fixed">3</span>
                </div>
                <span className="font-label-bold text-on-tertiary-fixed text-xs sm:text-sm">
                  Numbers
                </span>
              </div>

              {/* Numbers 4-5 */}
              <div
                onClick={() => navigateTo('number-activity')}
                className="bg-tertiary-fixed flex flex-col items-center justify-center p-4 rounded-2xl border-b-4 border-tertiary-fixed-dim relative sm:col-span-2 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-secondary-container rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-on-secondary-container text-sm material-symbols-fill">
                    check_circle
                  </span>
                </div>
                <div className="flex gap-4 mb-1">
                  <span className="text-3xl sm:text-4xl font-display-hero text-on-tertiary-fixed">4</span>
                  <span className="text-3xl sm:text-4xl font-display-hero text-on-tertiary-fixed">5</span>
                </div>
                <span className="font-label-bold text-on-tertiary-fixed text-xs sm:text-sm">
                  Numbers
                </span>
              </div>
            </div>
          </article>

          {/* Star History (Smaller Span) */}
          <article className="md:col-span-4 bg-secondary-fixed rounded-3xl p-6 tactile-card flex flex-col border-2 border-secondary-fixed-dim relative overflow-hidden">
            <div className="flex items-center gap-3 border-b-2 border-secondary-fixed-dim pb-4 mb-4 relative z-10">
              <span className="material-symbols-outlined text-3xl text-on-secondary-fixed material-symbols-fill">
                star_rate
              </span>
              <h3 className="font-label-bold text-label-bold text-on-secondary-fixed">
                My Stars
              </h3>
            </div>
            <div className="flex-grow flex flex-col justify-end gap-2 relative z-10 h-48">
              {/* CSS Bar Chart representing star history */}
              <div className="flex justify-between items-end h-full px-2 gap-2">
                <div className="w-full bg-secondary-fixed-dim rounded-t-lg h-1/4 relative group hover:bg-secondary-container transition-colors">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-bold text-sm text-on-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                    2
                  </span>
                </div>
                <div className="w-full bg-secondary-fixed-dim rounded-t-lg h-2/4 relative group hover:bg-secondary-container transition-colors">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-bold text-sm text-on-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                    5
                  </span>
                </div>
                <div className="w-full bg-secondary-fixed-dim rounded-t-lg h-1/3 relative group hover:bg-secondary-container transition-colors">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-bold text-sm text-on-secondary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
                    3
                  </span>
                </div>
                <div className="w-full bg-secondary-container rounded-t-lg h-3/4 relative group border-t-2 border-l-2 border-r-2 border-on-secondary-fixed shadow-md">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-bold text-lg text-on-secondary-fixed">
                    12
                  </span>
                </div>
              </div>
              <div className="flex justify-between px-2 text-xs sm:text-sm font-label-bold text-on-secondary-fixed-variant mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Today</span>
              </div>
            </div>
          </article>

          {/* Next Goals */}
          <article className="md:col-span-6 bg-surface-container-lowest rounded-3xl p-6 tactile-card border-2 border-surface-container-high">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <h3 className="font-label-bold text-label-bold md:text-headline-lg-mobile text-on-surface">
                Next Challenges
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  playLetterAudio('E');
                  navigateTo('letter-activity', { letter: 'E' });
                }}
                className="w-full bg-surface-container p-4 rounded-2xl flex items-center justify-between border-2 border-surface-variant tactile-button hover:bg-surface-container-high text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center shadow-sm">
                    <span className="font-display-hero text-2xl text-on-primary-container">
                      E
                    </span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-on-surface text-base">Learn the letter E</h4>
                    <span className="text-xs text-on-surface-variant font-body-lg">
                      In progress (50%)
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl material-symbols-fill">
                  play_circle
                </span>
              </button>

              <button
                onClick={() => navigateTo('number-activity')}
                className="w-full bg-surface-container p-4 rounded-2xl flex items-center justify-between border-2 border-surface-variant tactile-button hover:bg-surface-container-high text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center shadow-sm">
                    <span className="font-display-hero text-2xl text-on-tertiary-container">
                      6
                    </span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-on-surface text-base">Count to 6</h4>
                    <span className="text-xs text-on-surface-variant font-body-lg">
                      New challenge
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-tertiary text-3xl">
                  lock
                </span>
              </button>
            </div>
          </article>

          {/* Friends List (Positive Leaderboard) */}
          <article className="md:col-span-6 bg-surface-container-lowest rounded-3xl p-6 tactile-card border-2 border-surface-container-high">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-3xl">group</span>
                </div>
                <h3 className="font-label-bold text-label-bold md:text-headline-lg-mobile text-on-surface">
                  My Friends
                </h3>
              </div>
              <button
                onClick={() => {
                  playSuccessSound();
                  alert('Invite a friend to play JoyLearn together!');
                }}
                className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center tactile-button shadow-sm"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {/* Friend 1 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-surface hover:bg-surface-container-low transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-outline-variant">
                    <img
                      alt="Friend Chloe"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBumfT3HetPXDpr22I9JCV34DlKKTS-SRhzB2HdV43bW0FUvTGf5qm8de1Ol6GfODxWSEbXNV5mR7KQhTcCQBfo7Z7VIhixfdLWXzoFOaA65YVZ343ugRaR3LVtapNRAWM-kbRU5GhP7j5hu3yGd38sYenO96Z-XuriWs0pHQ8rrpKfdYgy9BKTXKpRUdb5xw098aDZ37Mi3VjZMlN2dNnGxjvNJtbRXAWIm-AhXdztWEMZomcgPPyH"
                    />
                  </div>
                  <span className="font-label-bold text-on-surface text-sm">Chloe</span>
                </div>
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">star</span>
                  <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">star</span>
                  <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">star</span>
                </div>
              </div>

              {/* Current User */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-primary-fixed border-2 border-primary-fixed-dim">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary">
                    <img
                      alt="My avatar"
                      className="w-full h-full object-cover"
                      src={userStats.avatarUrl}
                    />
                  </div>
                  <span className="font-label-bold text-on-primary-fixed text-sm">
                    {userStats.name} (Me)
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">star</span>
                  <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">star</span>
                </div>
              </div>

              {/* Friend 2 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-surface hover:bg-surface-container-low transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-outline-variant">
                    <img
                      alt="Friend Hugo"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3RBndvnOw26-GGSYBniGF-pEygHIqvLPpjDRdODgtAVOzCm6gONcnSPAjiCoZ4ted_OTuQKWskTcsNjJG53oBYFI0WHNALLJUlFCsIDibVMV5CTEQqBk_L06RJVTgFt34yBhI7pqe1LM4ierR7NkWjg2z0fhzhASSLsLWEdmUvwsTAnTG-MTMjHClpEn_B2rBLeYBClBb1QiD7MX9t_d8E93dkX__CEOCm47eAPTryTxLjCULuy-n"
                    />
                  </div>
                  <span className="font-label-bold text-on-surface text-sm">Hugo</span>
                </div>
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">star</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Big Play Button for Main Action */}
        <div className="flex justify-center mt-2 mb-6">
          <button
            onClick={() => navigateTo('worlds')}
            className="bg-primary text-on-primary font-headline-lg-mobile px-12 py-5 rounded-full tactile-button animate-wiggle flex items-center gap-4 shadow-xl border-b-6 border-on-primary-container hover:bg-on-primary-fixed-variant"
          >
            <span className="material-symbols-outlined text-4xl material-symbols-fill">
              play_arrow
            </span>
            Keep Playing
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};
