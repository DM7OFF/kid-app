import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { triggerConfetti } from '../components/common/ConfettiEffect';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';

interface NumberChallenge {
  number: number;
  word: string;
  question: string;
  emoji: string;
  imageAlt: string;
  options: number[];
  correct: number;
}

const CHALLENGES: NumberChallenge[] = [
  {
    number: 1,
    word: 'One!',
    question: 'How many do you see?',
    emoji: '🐶',
    imageAlt: 'One cute puppy icon',
    options: [3, 1, 2],
    correct: 1,
  },
  {
    number: 2,
    word: 'Two!',
    question: 'How many apples are there?',
    emoji: '🍎🍎',
    imageAlt: 'Two shiny red apples',
    options: [1, 2, 4],
    correct: 2,
  },
  {
    number: 3,
    word: 'Three!',
    question: 'Count the happy stars!',
    emoji: '⭐⭐⭐',
    imageAlt: 'Three bright yellow stars',
    options: [3, 2, 5],
    correct: 3,
  },
];

export const NumberActivityPage: React.FC = () => {
  const { navigateTo, playSuccessSound, playNumberAudio, addStars } = useApp();
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongOption, setWrongOption] = useState<number | null>(null);

  const currentChallenge = CHALLENGES[challengeIndex];

  // Auto-play number audio when challenge changes
  React.useEffect(() => {
    playNumberAudio(currentChallenge.number);
  }, [challengeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOptionClick = (num: number) => {
    if (num === currentChallenge.correct) {
      setSelectedOption(num);
      setIsCorrect(true);
      setWrongOption(null);
      playSuccessSound();
      triggerConfetti(0.5);
      addStars(5);
    } else {
      setWrongOption(num);
      setTimeout(() => setWrongOption(null), 600);
    }
  };

  const handleNextChallenge = () => {
    if (challengeIndex < CHALLENGES.length - 1) {
      setChallengeIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(false);
    } else {
      navigateTo('victory');
    }
  };

  return (
    <div className="bg-secondary-fixed text-on-background font-body-xl min-h-screen flex flex-col pb-24 md:pb-12 overflow-x-hidden selection:bg-primary selection:text-on-primary">
      {/* Top Navigation */}
      <TopAppBar />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Main Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center p-gutter w-full max-w-screen-xl mx-auto gap-6 sm:gap-stack-gap pt-2">
        {/* Progress Bar */}
        <div className="w-full max-w-md bg-surface-container rounded-full h-6 shadow-inner relative overflow-hidden border-2 border-outline-variant">
          <div
            className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full relative shadow-sm transition-all duration-500"
            style={{ width: `${((challengeIndex + 1) / CHALLENGES.length) * 100}%` }}
          >
            <span className="material-symbols-outlined absolute right-0 -top-0.5 text-secondary-container material-symbols-fill text-2xl">
              star
            </span>
          </div>
        </div>

        {/* Activity Header */}
        <div className="text-center animate-bounceIn flex flex-col items-center gap-3">
          <h1 className="font-display-hero text-[70px] sm:text-[90px] md:text-[120px] text-primary drop-shadow-md leading-none">
            {currentChallenge.number}
          </h1>
          <h2 className="font-headline-lg text-primary-fixed-variant mt-1 font-bold">
            {currentChallenge.word}
          </h2>
          <button
            onClick={() => playNumberAudio(currentChallenge.number)}
            className="flex items-center gap-2 bg-secondary-container text-on-secondary-container font-label-bold px-5 py-2.5 rounded-full btn-3d border-b-4 border-secondary hover:bg-secondary hover:text-on-secondary transition-all active:translate-y-1 shadow-md"
          >
            <span className="material-symbols-outlined text-2xl material-symbols-fill">volume_up</span>
            Listen
          </button>
        </div>

        {/* Central Interactive Area */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-stack-gap w-full">
          {/* Character Area */}
          <div className="w-48 sm:w-56 md:w-64 relative animate-bounceIn">
            <img
              alt="Singer character encouraging the child"
              className="w-full h-auto drop-shadow-xl animate-wiggle"
              src="/assets/character/character-dance.gif"
            />
            {/* Speech Bubble */}
            <div className="absolute -top-10 -right-6 md:-right-14 bg-surface p-3.5 sm:p-4 rounded-2xl shadow-lg border-2 border-primary-container z-10 before:content-[''] before:absolute before:bottom-[-10px] before:left-8 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-surface">
              <p className="font-label-bold text-on-surface text-center text-xs sm:text-sm">
                {currentChallenge.question}
              </p>
            </div>
          </div>

          {/* Subject Area */}
          <div className="bg-surface rounded-3xl p-8 shadow-xl border-4 border-surface-container-high flex flex-col items-center justify-center relative animate-bounceIn w-[230px] h-[230px] sm:w-[260px] sm:h-[260px]">
            <div className="w-36 h-36 rounded-full bg-primary-container opacity-20 absolute animate-pulse"></div>
            {currentChallenge.number === 1 ? (
              <img
                alt={currentChallenge.imageAlt}
                className="w-36 h-36 object-cover rounded-full z-10 shadow-md border-4 border-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDneEINIjoi21WI7vTM7zyReQ1y2YqlB0eTUgMxshIWF7FGiMmp47T3N4TAICqoCaIbimupU2vrs0CY5ffFcHRfaeWiwHDX92rO3PWHHV5ktqmktkcaZO2lpiPcJ0jBtILCw9yGob0O89Wp32JMmhT8g2yjr1fcbNLOzQhAyznCteNBj2_jvL3E9szh9qqZ-To4TSaL69DUcPItHUC4-Umr6c-KQxRT9qXYgAbE7ufNf6_lZP76Ppvf"
              />
            ) : (
              <div className="text-6xl sm:text-7xl z-10 filter drop-shadow-md flex items-center justify-center">
                {currentChallenge.emoji}
              </div>
            )}
          </div>
        </div>

        {/* Interactive Choices (Large Touch Buttons) */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 w-full max-w-lg animate-bounceIn">
          {currentChallenge.options.map(num => {
            const isSelectedCorrect = selectedOption === num;
            const isSelectedWrong = wrongOption === num;

            return (
              <button
                key={num}
                onClick={() => handleOptionClick(num)}
                className={`squishy-button rounded-2xl h-touch-target-min text-headline-lg font-bold shadow-md flex items-center justify-center transition-all ${
                  isSelectedCorrect
                    ? 'bg-secondary-container border-b-6 border-secondary text-on-secondary-container scale-105 shadow-xl'
                    : isSelectedWrong
                    ? 'bg-error-container border-b-6 border-error text-on-error-container animate-pulse'
                    : 'bg-surface border-b-6 border-outline-variant text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>

        {/* Success Action / Next button */}
        {isCorrect && (
          <div className="w-full max-w-lg mt-4 animate-bounceIn">
            <button
              onClick={handleNextChallenge}
              className="w-full bg-primary text-on-primary font-headline-lg py-4 px-8 rounded-full btn-3d border-b-6 border-on-primary-container shadow-xl flex items-center justify-center gap-3 hover:bg-on-primary-fixed-variant"
            >
              <span>{challengeIndex < CHALLENGES.length - 1 ? 'Next Number!' : 'Victory! 🏆'}</span>
              <span className="material-symbols-outlined text-4xl">arrow_forward</span>
            </button>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};
