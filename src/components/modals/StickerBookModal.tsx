import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { triggerConfetti } from '../common/ConfettiEffect';

export const StickerBookModal: React.FC = () => {
  const { isStickerModalOpen, setIsStickerModalOpen, playSuccessSound } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'animals' | 'space' | 'magic'>('animals');

  if (!isStickerModalOpen) return null;

  const stickers = {
    animals: [
      { id: '1', emoji: '🦁', name: 'Lion Cub', unlocked: true },
      { id: '2', emoji: '🐼', name: 'Panda Friend', unlocked: true },
      { id: '3', emoji: '🐬', name: 'Happy Dolphin', unlocked: true },
      { id: '4', emoji: '🦊', name: 'Clever Fox', unlocked: true },
      { id: '5', emoji: '🦄', name: 'Sparkle Unicorn', unlocked: true },
      { id: '6', emoji: '🐨', name: 'Koala Pal', unlocked: false },
    ],
    space: [
      { id: '7', emoji: '🚀', name: 'Rocket Ship', unlocked: true },
      { id: '8', emoji: '⭐', name: 'Super Star', unlocked: true },
      { id: '9', emoji: '🪐', name: 'Planet Saturn', unlocked: true },
      { id: '10', emoji: '🛸', name: 'Flying Saucer', unlocked: false },
      { id: '11', emoji: '🌙', name: 'Crescent Moon', unlocked: true },
      { id: '12', emoji: '☄️', name: 'Cosmic Comet', unlocked: false },
    ],
    magic: [
      { id: '13', emoji: '🪄', name: 'Magic Wand', unlocked: true },
      { id: '14', emoji: '👑', name: 'Golden Crown', unlocked: true },
      { id: '15', emoji: '💎', name: 'Shiny Gem', unlocked: true },
      { id: '16', emoji: '🏰', name: 'Castle', unlocked: false },
      { id: '17', emoji: '🌈', name: 'Magic Rainbow', unlocked: true },
      { id: '18', emoji: '🎁', name: 'Surprise Box', unlocked: false },
    ],
  };

  const handleStickerClick = (sticker: { name: string; unlocked: boolean }) => {
    if (sticker.unlocked) {
      playSuccessSound();
      triggerConfetti(0.5);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 max-w-2xl w-full border-4 border-primary shadow-2xl relative flex flex-col gap-6">
        {/* Close Button */}
        <button
          onClick={() => setIsStickerModalOpen(false)}
          className="absolute -top-4 -right-4 w-12 h-12 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center font-bold text-2xl border-4 border-surface-container-lowest shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b-2 border-surface-variant pb-4">
          <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-3xl shadow-sm">
            📖
          </div>
          <div>
            <h2 className="font-display-hero text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
              My Sticker Album
            </h2>
            <p className="font-body-lg text-on-surface-variant text-sm md:text-base">
              Collect stickers by completing activities and earning stars!
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 bg-surface-container-low p-2 rounded-2xl">
          {(['animals', 'space', 'magic'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-1 py-3 rounded-xl font-label-bold capitalize text-sm md:text-base transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary shadow-md border-b-4 border-on-primary-container'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat === 'animals' && '🐾 Animals'}
              {cat === 'space' && '🚀 Space'}
              {cat === 'magic' && '✨ Magic'}
            </button>
          ))}
        </div>

        {/* Stickers Grid */}
        <div className="grid grid-cols-3 gap-4 max-h-[360px] overflow-y-auto p-2">
          {stickers[selectedCategory].map(item => (
            <div
              key={item.id}
              onClick={() => handleStickerClick(item)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-4 transition-all duration-200 ${
                item.unlocked
                  ? 'bg-surface-container-lowest border-secondary-container hover:scale-105 hover:shadow-lg cursor-pointer active:scale-95'
                  : 'bg-surface-container-high border-outline-variant opacity-60'
              }`}
            >
              <div className="text-5xl mb-2 filter drop-shadow-md">
                {item.unlocked ? item.emoji : '🔒'}
              </div>
              <span className="font-label-bold text-xs md:text-sm text-center text-on-surface">
                {item.unlocked ? item.name : 'Locked'}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={() => setIsStickerModalOpen(false)}
            className="bg-primary text-on-primary font-label-bold text-label-bold py-3 px-8 rounded-full btn-3d border-b-4 border-on-primary-container hover:bg-on-primary-fixed-variant"
          >
            Awesome!
          </button>
        </div>
      </div>
    </div>
  );
};
