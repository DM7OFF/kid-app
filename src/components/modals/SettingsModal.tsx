import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const SettingsModal: React.FC = () => {
  const { isSettingsModalOpen, setIsSettingsModalOpen } = useApp();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [parentGatePassed, setParentGatePassed] = useState(false);
  const [parentAnswer, setParentAnswer] = useState('');

  if (!isSettingsModalOpen) return null;

  const handleVerifyGate = (e: React.FormEvent) => {
    e.preventDefault();
    if (parentAnswer.trim() === '12') {
      setParentGatePassed(true);
    } else {
      alert('Oops! Ask a grown-up for help: 7 + 5 = 12');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/50 backdrop-blur-sm">
      <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 max-w-lg w-full border-4 border-primary shadow-2xl relative flex flex-col gap-6">
        {/* Close Button */}
        <button
          onClick={() => {
            setIsSettingsModalOpen(false);
            setParentGatePassed(false);
            setParentAnswer('');
          }}
          className="absolute -top-4 -right-4 w-12 h-12 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center font-bold text-2xl border-4 border-surface-container-lowest shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b-2 border-surface-variant pb-4">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-2xl shadow-sm text-on-primary-container">
            ⚙️
          </div>
          <div>
            <h2 className="font-display-hero text-headline-lg-mobile text-primary">Settings</h2>
            <p className="font-body-lg text-on-surface-variant text-sm">App audio and parent controls</p>
          </div>
        </div>

        {/* Quick Audio Controls */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-4 bg-surface-container rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔊</span>
              <div>
                <div className="font-label-bold text-on-surface">Sound Effects</div>
                <div className="text-xs text-on-surface-variant">Letter pronunciations and rewards</div>
              </div>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-14 h-8 rounded-full transition-colors relative p-1 ${
                soundEnabled ? 'bg-primary' : 'bg-surface-variant'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white transition-transform ${
                  soundEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface-container rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎵</span>
              <div>
                <div className="font-label-bold text-on-surface">Background Music</div>
                <div className="text-xs text-on-surface-variant">Cheerful play vibes</div>
              </div>
            </div>
            <button
              onClick={() => setMusicEnabled(!musicEnabled)}
              className={`w-14 h-8 rounded-full transition-colors relative p-1 ${
                musicEnabled ? 'bg-primary' : 'bg-surface-variant'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white transition-transform ${
                  musicEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Grown-up section / Parent Zone */}
        <div className="border-t-2 border-surface-variant pt-4">
          <h3 className="font-label-bold text-on-surface mb-2 flex items-center gap-2">
            <span>🛡️</span> Grown-ups Area
          </h3>
          {!parentGatePassed ? (
            <form onSubmit={handleVerifyGate} className="bg-surface-container-low p-4 rounded-2xl flex flex-col gap-3">
              <p className="text-xs md:text-sm text-on-surface-variant font-medium">
                To access screen time limits and progress reports, solve this math question:
              </p>
              <div className="font-headline-lg text-primary text-center">7 + 5 = ?</div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={parentAnswer}
                  onChange={e => setParentAnswer(e.target.value)}
                  placeholder="Answer"
                  className="flex-1 px-4 py-2 rounded-xl border-2 border-outline text-center text-lg font-bold"
                />
                <button
                  type="submit"
                  className="bg-primary text-on-primary font-label-bold px-6 py-2 rounded-xl btn-3d"
                >
                  Enter
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-primary-fixed p-4 rounded-2xl flex flex-col gap-2">
              <div className="text-sm font-label-bold text-on-primary-fixed">Parent Dashboard Active</div>
              <p className="text-xs text-on-primary-fixed-variant">
                Daily learning limit: 30 minutes. Today's learning time: 14 minutes.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <button
          onClick={() => {
            setIsSettingsModalOpen(false);
            setParentGatePassed(false);
            setParentAnswer('');
          }}
          className="w-full bg-primary text-on-primary font-label-bold py-3.5 rounded-2xl btn-3d border-b-4 border-on-primary-container hover:bg-on-primary-fixed-variant"
        >
          Save & Close
        </button>
      </div>
    </div>
  );
};
