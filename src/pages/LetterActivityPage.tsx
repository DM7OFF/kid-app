import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { triggerConfetti } from '../components/common/ConfettiEffect';

const LETTER_WORDS: Record<string, { word: string; emoji: string }> = {
  A: { word: 'Airplane', emoji: '✈️' },
  B: { word: 'Butterfly', emoji: '🦋' },
  C: { word: 'Cat', emoji: '🐱' },
  D: { word: 'Dolphin', emoji: '🐬' },
  E: { word: 'Elephant', emoji: '🐘' },
  F: { word: 'Frog', emoji: '🐸' },
  G: { word: 'Guitar', emoji: '🎸' },
  H: { word: 'Heart', emoji: '❤️' },
  I: { word: 'Ice Cream', emoji: '🍦' },
  J: { word: 'Jellyfish', emoji: '🪼' },
  K: { word: 'Kite', emoji: '🪁' },
  L: { word: 'Lion', emoji: '🦁' },
  M: { word: 'Moon', emoji: '🌙' },
  N: { word: 'Nest', emoji: '🪺' },
  O: { word: 'Owl', emoji: '🦉' },
  P: { word: 'Panda', emoji: '🐼' },
  Q: { word: 'Queen', emoji: '👑' },
  R: { word: 'Rainbow', emoji: '🌈' },
  S: { word: 'Star', emoji: '⭐' },
  T: { word: 'Tiger', emoji: '🐯' },
  U: { word: 'Umbrella', emoji: '☂️' },
  V: { word: 'Violin', emoji: '🎻' },
  W: { word: 'Whale', emoji: '🐋' },
  X: { word: 'Xylophone', emoji: '🎵' },
  Y: { word: 'Yo-yo', emoji: '🪀' },
  Z: { word: 'Zebra', emoji: '🦓' },
};

export const LetterActivityPage: React.FC = () => {
  const { currentLetter, setCurrentLetter, navigateTo, playLetterAudio, playSuccessSound, addStars } = useApp();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [hasPracticed, setHasPracticed] = useState(false);

  const activeLetter = currentLetter || 'A';
  const letterData = LETTER_WORDS[activeLetter] || { word: 'Airplane', emoji: '✈️' };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const currentIndex = alphabet.indexOf(activeLetter);

  const handleListen = async () => {
    setIsPlayingAudio(true);
    await playLetterAudio(activeLetter);
    setIsPlayingAudio(false);
  };

  const handleYourTurn = () => {
    triggerConfetti(0.5);
    playSuccessSound();
    addStars(5);
    setHasPracticed(true);
  };

  const handleNextLetter = () => {
    if (currentIndex < alphabet.length - 1) {
      const nextL = alphabet[currentIndex + 1];
      setCurrentLetter(nextL);
      setHasPracticed(false);
      playLetterAudio(nextL);
    } else {
      navigateTo('victory');
    }
  };

  const handlePrevLetter = () => {
    if (currentIndex > 0) {
      const prevL = alphabet[currentIndex - 1];
      setCurrentLetter(prevL);
      setHasPracticed(false);
      playLetterAudio(prevL);
    }
  };

  return (
    <div className="bg-sky-gradient min-h-screen text-on-background overflow-x-hidden relative flex flex-col justify-between selection:bg-secondary-container">
      {/* Background polka dots / subtle confetti layer */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#00658d_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

      {/* Top Navigation & Progress */}
      <header className="w-full flex items-center justify-between px-margin-mobile md:px-margin-desktop py-4 relative z-20 max-w-screen-xl mx-auto">
        <button
          onClick={() => navigateTo('home')}
          aria-label="Back"
          className="w-touch-target-min h-touch-target-min bg-surface-container-lowest rounded-full shadow-md flex items-center justify-center text-primary squishy-btn border-b-4 border-outline-variant hover:bg-surface-container-low active:translate-y-1"
        >
          <span className="material-symbols-outlined text-4xl material-symbols-fill">
            arrow_back
          </span>
        </button>

        {/* Progress Bar */}
        <div className="flex-1 mx-gutter max-w-md">
          <div className="h-6 bg-surface-container-highest rounded-full overflow-hidden border-2 border-outline-variant shadow-inner">
            <div
              className="h-full bg-secondary-container rounded-full relative transition-all duration-500"
              style={{ width: `${Math.max(15, ((currentIndex + 1) / alphabet.length) * 100)}%` }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 material-symbols-outlined text-primary text-2xl material-symbols-fill">
                star
              </span>
            </div>
          </div>
        </div>

        {/* Next/Victory quick action */}
        <button
          onClick={() => navigateTo('victory')}
          className="w-touch-target-min h-touch-target-min bg-secondary-container rounded-full shadow-md flex items-center justify-center text-on-secondary-container squishy-btn border-b-4 border-secondary hover:bg-secondary-fixed active:translate-y-1"
          title="Finish activity"
        >
          <span className="material-symbols-outlined text-3xl material-symbols-fill">
            emoji_events
          </span>
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-screen-xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center px-margin-mobile md:px-margin-desktop gap-8 md:gap-12 relative z-10 py-6">
        {/* Character Column: Uses character-dance.gif faithfully */}
        <div className="flex-shrink-0 relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:order-2 animate-float">
          <img
            alt="Singing dancing guide character"
            className="w-full h-full object-contain filter drop-shadow-2xl"
            src="/assets/character/character-dance.gif"
          />
        </div>

        {/* Activity Column */}
        <div className="flex-1 flex flex-col items-center justify-center lg:order-1 text-center bg-surface-container-lowest/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl border-4 border-surface-container-lowest w-full max-w-xl">
          {/* Letter Navigator Buttons */}
          <div className="flex items-center justify-between w-full mb-2">
            <button
              onClick={handlePrevLetter}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full font-bold transition-all ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-outline'
                  : 'text-primary hover:bg-primary-fixed hover:scale-110 active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined text-3xl">chevron_left</span>
            </button>
            <span className="text-xs font-label-bold text-on-surface-variant uppercase tracking-wider">
              Letter {currentIndex + 1} of 26
            </span>
            <button
              onClick={handleNextLetter}
              className="p-2 rounded-full font-bold text-primary hover:bg-primary-fixed hover:scale-110 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-3xl">chevron_right</span>
            </button>
          </div>

          {/* The Big Letter */}
          <div
            onClick={handleListen}
            className="font-display-hero text-[130px] sm:text-[180px] md:text-[230px] leading-none text-primary mb-4 drop-shadow-lg cursor-pointer hover:scale-105 transition-transform select-none"
            title="Click to hear sound"
          >
            {activeLetter}
          </div>

          {/* Word Association */}
          <div className="bg-surface-container-lowest px-6 sm:px-8 py-3.5 rounded-full shadow-sm border-2 border-primary-fixed mb-8 sm:mb-10">
            <p className="font-headline-lg-mobile md:font-headline-lg text-on-primary-container font-bold">
              {activeLetter} is for {letterData.word} {letterData.emoji}
            </p>
          </div>

          {/* Interaction Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={handleListen}
              className={`flex-1 flex items-center justify-center gap-3 bg-primary text-on-primary font-label-bold text-label-bold py-5 px-6 rounded-2xl squishy-btn border-b-6 border-on-primary-fixed-variant shadow-md hover:bg-surface-tint active:translate-y-1 ${
                isPlayingAudio ? 'animate-pulse' : ''
              }`}
            >
              <span className="material-symbols-outlined text-3xl md:text-4xl material-symbols-fill">
                volume_up
              </span>
              Listen
            </button>

            <button
              onClick={handleYourTurn}
              className="flex-1 flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container font-label-bold text-label-bold py-5 px-6 rounded-2xl squishy-btn border-b-6 border-secondary shadow-md hover:bg-secondary-fixed active:translate-y-1"
            >
              <span className="material-symbols-outlined text-3xl md:text-4xl material-symbols-fill">
                mic
              </span>
              Your turn!
            </button>
          </div>

          {/* If practiced, show Next button */}
          {hasPracticed && (
            <div className="mt-6 w-full animate-bounceIn">
              <button
                onClick={handleNextLetter}
                className="w-full bg-tertiary-container text-on-tertiary-container font-headline-lg-mobile py-4 rounded-2xl squishy-btn border-b-4 border-tertiary shadow-lg flex items-center justify-center gap-3 hover:bg-tertiary hover:text-on-tertiary transition-colors"
              >
                <span>Next Letter!</span>
                <span className="material-symbols-outlined text-3xl">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer alphabet quick chips */}
      <footer className="w-full max-w-screen-xl mx-auto px-4 py-3 z-20 overflow-x-auto hide-scrollbar">
        <div className="flex gap-2 justify-start sm:justify-center w-max mx-auto">
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => {
                setCurrentLetter(letter);
                setHasPracticed(false);
                playLetterAudio(letter);
              }}
              className={`w-9 h-9 rounded-xl font-display-hero text-sm flex items-center justify-center transition-all ${
                letter === activeLetter
                  ? 'bg-primary text-on-primary scale-110 shadow-md border-b-2 border-on-primary-container'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-primary-fixed'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};
