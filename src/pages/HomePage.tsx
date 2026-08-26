import React from 'react';
import { useApp } from '../context/AppContext';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';

export const HomePage: React.FC = () => {
  const { navigateTo, playLetterAudio, playSuccessSound, playSong, stopSong } = useApp();

  return (
    <div className="bg-clouds min-h-screen text-on-background font-body-lg pb-[100px] md:pb-12 overflow-x-hidden">
      {/* Top App Bar */}
      <TopAppBar />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Content Canvas */}
      <main className="max-w-screen-xl mx-auto px-margin-mobile md:px-margin-desktop pt-6 flex flex-col gap-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-4">
          <h1 className="font-display-hero text-headline-lg md:text-display-hero text-primary drop-shadow-sm">
            Let's learn together!
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
            What do you want to discover today?
          </p>
        </section>

        {/* Bento Grid Activity Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Letters (In Progress) */}
          <div
            onClick={() => {
              playLetterAudio('A');
              navigateTo('letter-activity', { letter: 'A' });
            }}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-md border-b-[6px] border-primary-container cursor-pointer hover:translate-y-1 hover:border-b-4 transition-all flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start">
              <div className="bg-primary-container p-4 rounded-xl shadow-sm">
                <img
                  alt="ABC Icon"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv3Q_9WpxO0T_2paYLgVa-ciN1zEefkY8ewbBLlfct9D-f0JIiQ74wTMQ6gGWEX7lIK4i658w0HuxtYB_hTqQ7p8bbqqYk3GDreox4C_bYc-Boqr6b1VSjnencEdoRrR8qc38uz42mpQz4FJxxObvL1AgnVgBTU1HlgkFJSTkvexyRuMPqPQ1crZi54Brm1p5goWm_bKQ9cg5x-ieKK3g_hAP-KSCEa8ag2xuh4c_se4vZrX8IrJkp"
                />
              </div>
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">
                  star
                </span>
                <span className="font-label-bold text-label-bold text-on-surface">5</span>
              </div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
                Letters
              </h3>
              {/* Progress Bar */}
              <div className="w-full bg-surface-variant rounded-full h-4 relative overflow-hidden">
                <div
                  className="bg-primary h-4 rounded-full transition-all duration-1000"
                  style={{ width: '40%' }}
                ></div>
                <span
                  className="material-symbols-outlined text-secondary-container absolute top-1/2 -translate-y-1/2 text-sm material-symbols-fill"
                  style={{ left: 'calc(40% - 10px)' }}
                >
                  arrow_back_ios_new
                </span>
              </div>
            </div>
            <button
              onClick={e => {
                e.stopPropagation();
                playLetterAudio('A');
                navigateTo('letter-activity', { letter: 'A' });
              }}
              className="mt-auto bg-primary text-on-primary font-label-bold text-label-bold py-3 rounded-lg btn-3d border-b-4 border-on-primary-container hover:bg-on-primary-fixed-variant active:translate-y-1"
            >
              Continue
            </button>
          </div>

          {/* Card 2: Numbers (In Progress) */}
          <div
            onClick={() => navigateTo('number-activity')}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-md border-b-[6px] border-secondary-container cursor-pointer hover:translate-y-1 hover:border-b-4 transition-all flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start">
              <div className="bg-secondary-container p-4 rounded-xl shadow-sm">
                <img
                  alt="123 Icon"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR1K47gC61rnhWLZ6CAABUNVp78wNMRFAYUe2EONyhJGiOWNtBcbSOLEirsUhUH61wguWKgXr99dbT571OoJk2DT70Ey_sw7UQ6Wzn47YnXF6RKyMJY1LBb33-v2pS6dJwIdVBH6ilLhJimUdIZm4ZeB8meVHzTV8Bauv50tqTSvbtfqzk8Qc3jzYN6-OfLrVOi5Pvk9R1LxBIFOp4r0v0yPYDtLEvcZ30XCc2FUFsyVMJvn9HQVOn"
                />
              </div>
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-secondary-container material-symbols-fill text-xl">
                  star
                </span>
                <span className="font-label-bold text-label-bold text-on-surface">3</span>
              </div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
                Numbers
              </h3>
              {/* Progress Bar */}
              <div className="w-full bg-surface-variant rounded-full h-4 relative overflow-hidden">
                <div
                  className="bg-secondary h-4 rounded-full transition-all duration-1000"
                  style={{ width: '20%' }}
                ></div>
                <span
                  className="material-symbols-outlined text-primary-container absolute top-1/2 -translate-y-1/2 text-sm material-symbols-fill"
                  style={{ left: 'calc(20% - 10px)' }}
                >
                  arrow_back_ios_new
                </span>
              </div>
            </div>
            <button
              onClick={e => {
                e.stopPropagation();
                navigateTo('number-activity');
              }}
              className="mt-auto bg-secondary text-on-secondary font-label-bold text-label-bold py-3 rounded-lg btn-3d border-b-4 border-on-secondary-container hover:bg-on-secondary-fixed-variant active:translate-y-1"
            >
              Continue
            </button>
          </div>

          {/* Card 3: Colors */}
          <div
            onClick={() => navigateTo('map')}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-md border-b-[6px] border-tertiary-container cursor-pointer hover:translate-y-1 hover:border-b-4 transition-all flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start">
              <div className="bg-tertiary-container p-4 rounded-xl shadow-sm">
                <img
                  alt="Palette Icon"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcRHtzKF4c3kasO50bs7YHQbq0wtgHV6FchzdeVgBX3CcZse-FZ4QnL_tz7_eHdlAwoSFmxVxUecpJS-TY5kW8X2XG7gh9x6BWdo1qyealrU5mMdy0dSDZc-NDOl_0NOArft-aTfMFOBEUaB1nU3BoBWbolvYdzb-4zhBnVDHn2K4ty28Ju7cgYpoaxfzZk4_VcA5HBRCSGPxfFfwtpPeHr8WUm_7tczcx0VgbY1mqdNpL8kdhDPg7"
                />
              </div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
                Colors
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Discover the rainbow!
              </p>
            </div>
            <button
              onClick={e => {
                e.stopPropagation();
                navigateTo('map');
              }}
              className="mt-auto bg-tertiary text-on-tertiary font-label-bold text-label-bold py-3 rounded-lg btn-3d border-b-4 border-on-tertiary-container hover:bg-on-tertiary-fixed-variant active:translate-y-1"
            >
              Play
            </button>
          </div>

          {/* Card 4: Animals */}
          <div
            onClick={() => navigateTo('worlds')}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-md border-b-[6px] border-primary-fixed cursor-pointer hover:translate-y-1 hover:border-b-4 transition-all flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed/30 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start">
              <div className="bg-primary-fixed p-4 rounded-xl shadow-sm">
                <img
                  alt="Puppy Icon"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDneEINIjoi21WI7vTM7zyReQ1y2YqlB0eTUgMxshIWF7FGiMmp47T3N4TAICqoCaIbimupU2vrs0CY5ffFcHRfaeWiwHDX92rO3PWHHV5ktqmktkcaZO2lpiPcJ0jBtILCw9yGob0O89Wp32JMmhT8g2yjr1fcbNLOzQhAyznCteNBj2_jvL3E9szh9qqZ-To4TSaL69DUcPItHUC4-Umr6c-KQxRT9qXYgAbE7ufNf6_lZP76Ppvf"
                />
              </div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
                Animals
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Meow, Woof!</p>
            </div>
            <button
              onClick={e => {
                e.stopPropagation();
                navigateTo('worlds');
              }}
              className="mt-auto bg-primary-container text-on-primary-container font-label-bold text-label-bold py-3 rounded-lg btn-3d border-b-4 border-primary hover:bg-primary hover:text-on-primary transition-colors active:translate-y-1"
            >
              Play
            </button>
          </div>

          {/* Card 5: Songs */}
          <div
            className="bg-surface-container-lowest rounded-xl p-6 shadow-md border-b-[6px] border-secondary-fixed cursor-pointer hover:translate-y-1 hover:border-b-4 transition-all flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-fixed/30 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start">
              <div className="bg-secondary-fixed p-4 rounded-xl shadow-sm">
                <img
                  alt="Musical Note Icon"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7cA8qiLfU9jq4eHFGgGi8KNDKXdWvhVTM91Tcw_9M3pNjXNhG4v5aw2hCXV69KPShxZ4uqgxdfcG7JDEejCu4i8J7QDNMAyicuwa9CgMkjw-hyqvopY1RsMC-TnVZI7xx7pHLVJEQlI8gO0ocOa60Ckgrl0kdniqGfz63qKE-pdbAnDjkDka_5lAwmmmOJw9HRrT3Whu51oyYSazib7nFtGv0_33EsSgBxn5OIXleOZS2onX2mY-q"
                />
              </div>
              <button
                onClick={() => stopSong()}
                className="bg-error-container text-on-error-container p-2 rounded-full shadow hover:bg-error hover:text-on-error transition-colors"
                title="Stop song"
              >
                <span className="material-symbols-outlined text-xl">stop</span>
              </button>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
                Songs
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Let's sing together! 🎵
              </p>
            </div>
            <div className="flex gap-3 mt-auto">
              <button
                onClick={e => {
                  e.stopPropagation();
                  playSong('abc');
                }}
                className="flex-1 bg-secondary-container text-on-secondary-container font-label-bold text-label-bold py-3 rounded-lg btn-3d border-b-4 border-secondary hover:bg-secondary hover:text-on-secondary transition-colors active:translate-y-1 flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-base">music_note</span>
                ABC Song
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  playSong('counting');
                }}
                className="flex-1 bg-primary-container text-on-primary-container font-label-bold text-label-bold py-3 rounded-lg btn-3d border-b-4 border-primary hover:bg-primary hover:text-on-primary transition-colors active:translate-y-1 flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-base">123</span>
                1-10 Song
              </button>
            </div>
          </div>

          {/* Card 6: Games */}
          <div
            onClick={() => navigateTo('map')}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-md border-b-[6px] border-tertiary-fixed cursor-pointer hover:translate-y-1 hover:border-b-4 transition-all flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed/30 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start">
              <div className="bg-tertiary-fixed p-4 rounded-xl shadow-sm animate-wiggle">
                <img
                  alt="Puzzle Icon"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhadoNUHlNI_EKBaecOpVz4AZnx3alcbyUnBadMj7YxqmLOuGsfG2Ch7txL0rnxwEJGeM0l_gKJnc1GFnp13UvVSbh_lrQoFJIP8ZkZVQM3wRk6KoPai2hZ6XTVXAB-blgERD3YEFnJ1BFWOfIn0wz8r1SFTieDWnMRXOl6j5IoEG2HO9T8KNSRfSwmGa611nVVkT5RntHvX8vgNZ-bM8UkUcCVfmqMlrfbTiBtlG7sqbq85LMtf1_"
                />
              </div>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
                Games
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Have fun!</p>
            </div>
            <button
              onClick={e => {
                e.stopPropagation();
                navigateTo('map');
              }}
              className="mt-auto bg-tertiary-container text-on-tertiary-container font-label-bold text-label-bold py-3 rounded-lg btn-3d border-b-4 border-tertiary hover:bg-tertiary hover:text-on-tertiary transition-colors active:translate-y-1"
            >
              Play
            </button>
          </div>

          {/* Card 7: Stories (Wide Banner) */}
          <div
            onClick={() => {
              playSuccessSound();
              navigateTo('worlds');
            }}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-md border-b-[6px] border-outline-variant cursor-pointer hover:translate-y-1 hover:border-b-4 transition-all flex flex-col gap-4 relative overflow-hidden group md:col-span-2 lg:col-span-3"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-surface-variant/30 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-surface-variant p-4 rounded-xl shadow-sm shrink-0">
                <img
                  alt="Book Icon"
                  className="w-24 h-24 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsKmd-GX5NY8UI4xrMKh-uFFULdih0Vxr_9PI_XvRN6FIddKpQXDaRqdaXt6ek4ZiQu1Iqr04sdYoPvJHpU5aD_dYkZZTAn0fJb5VDfEomuIzOeT6_VxVlNSCXE5-LBNlkx76EmIICG1_hiufGi441lXH8E6nTe0JOK6huU-aCiEBcHA7sCsI6yLcD86YLJQONoJi2BJx1Nu5KNNH8hGARrx1bazIq4C6cr7OnqfBZebolmGCcITKC"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display-hero text-headline-lg text-on-surface mb-2">
                  Stories
                </h3>
                <p className="font-body-xl text-body-xl text-on-surface-variant mb-6">
                  Once upon a time... wonderful adventures await you!
                </p>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    playSuccessSound();
                    navigateTo('worlds');
                  }}
                  className="bg-primary text-on-primary font-label-bold text-label-bold py-4 px-8 rounded-full btn-3d border-b-[6px] border-on-primary-container hover:bg-on-primary-fixed-variant text-xl"
                >
                  Read a story
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};
