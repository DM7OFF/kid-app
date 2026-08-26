import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { triggerConfetti } from '../common/ConfettiEffect';

export const CustomizeModal: React.FC = () => {
  const { isCustomizeModalOpen, setIsCustomizeModalOpen, userStats, updateUserStats, playSuccessSound } = useApp();
  const [tab, setTab] = useState<'outfits' | 'colors'>('outfits');

  if (!isCustomizeModalOpen) return null;

  const outfits = [
    { id: 'Superhero Cape', icon: '🦸‍♂️', desc: 'Hero Outfit' },
    { id: 'Astronaut Suit', icon: '👨‍🚀', desc: 'Space Explorer' },
    { id: 'Wizard Robe', icon: '🧙‍♂️', desc: 'Magic Cloak' },
    { id: 'Detective Hat', icon: '🕵️', desc: 'Super Sleuth' },
  ];

  const colors = [
    { id: '#00658d', name: 'Sky Blue', hex: '#00658d' },
    { id: '#fdd029', name: 'Sun Yellow', hex: '#fdd029' },
    { id: '#9f4119', name: 'Warm Orange', hex: '#9f4119' },
    { id: '#10b981', name: 'Forest Green', hex: '#10b981' },
    { id: '#ec4899', name: 'Bright Pink', hex: '#ec4899' },
    { id: '#8b5cf6', name: 'Magic Purple', hex: '#8b5cf6' },
  ];

  const handleSelectOutfit = (outfitId: string) => {
    updateUserStats({ outfit: outfitId });
    playSuccessSound();
    triggerConfetti(0.4);
  };

  const handleSelectColor = (colorHex: string) => {
    updateUserStats({ favoriteColor: colorHex });
    playSuccessSound();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/50 backdrop-blur-sm">
      <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 max-w-xl w-full border-4 border-primary shadow-2xl relative flex flex-col gap-6">
        {/* Close Button */}
        <button
          onClick={() => setIsCustomizeModalOpen(false)}
          className="absolute -top-4 -right-4 w-12 h-12 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center font-bold text-2xl border-4 border-surface-container-lowest shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center">
          <h2 className="font-display-hero text-headline-lg text-primary">Customize Léo</h2>
          <p className="font-body-lg text-on-surface-variant">Pick your favorite style and colors!</p>
        </div>

        {/* Tab switch */}
        <div className="flex gap-2 bg-surface-container-low p-2 rounded-2xl">
          <button
            onClick={() => setTab('outfits')}
            className={`flex-1 py-3 rounded-xl font-label-bold transition-all ${
              tab === 'outfits'
                ? 'bg-primary text-on-primary shadow-md border-b-4 border-on-primary-container'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            👕 Outfits
          </button>
          <button
            onClick={() => setTab('colors')}
            className={`flex-1 py-3 rounded-xl font-label-bold transition-all ${
              tab === 'colors'
                ? 'bg-primary text-on-primary shadow-md border-b-4 border-on-primary-container'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            🎨 Colors
          </button>
        </div>

        {/* Outfits selection */}
        {tab === 'outfits' && (
          <div className="grid grid-cols-2 gap-4">
            {outfits.map(item => {
              const isSelected = userStats.outfit === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectOutfit(item.id)}
                  className={`p-4 rounded-2xl border-4 flex flex-col items-center gap-2 transition-all ${
                    isSelected
                      ? 'border-primary bg-primary-fixed shadow-md scale-105'
                      : 'border-surface-variant bg-surface-container hover:bg-surface-container-high'
                  }`}
                >
                  <span className="text-5xl">{item.icon}</span>
                  <span className="font-label-bold text-on-surface text-sm md:text-base">
                    {item.desc}
                  </span>
                  {isSelected && (
                    <span className="text-xs bg-primary text-on-primary px-2 py-0.5 rounded-full font-bold">
                      Equipped
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Colors selection */}
        {tab === 'colors' && (
          <div className="grid grid-cols-3 gap-4">
            {colors.map(col => {
              const isSelected = userStats.favoriteColor === col.hex;
              return (
                <button
                  key={col.id}
                  onClick={() => handleSelectColor(col.hex)}
                  className={`p-4 rounded-2xl border-4 flex flex-col items-center gap-2 transition-all ${
                    isSelected ? 'border-primary shadow-lg scale-105' : 'border-surface-variant'
                  }`}
                  style={{ backgroundColor: `${col.hex}15` }}
                >
                  <div
                    className="w-12 h-12 rounded-full shadow-inner border-2 border-white"
                    style={{ backgroundColor: col.hex }}
                  ></div>
                  <span className="font-label-bold text-xs md:text-sm text-on-surface">
                    {col.name}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Save / Close */}
        <button
          onClick={() => setIsCustomizeModalOpen(false)}
          className="w-full bg-primary text-on-primary font-label-bold py-4 rounded-2xl btn-3d border-b-4 border-on-primary-container hover:bg-on-primary-fixed-variant text-lg"
        >
          Done Customizing
        </button>
      </div>
    </div>
  );
};
