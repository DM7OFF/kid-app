import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { TopAppBar } from '../components/common/TopAppBar';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { DesktopSidebar } from '../components/common/DesktopSidebar';
import { triggerConfetti } from '../components/common/ConfettiEffect';

interface SongItem {
  id: 'abc' | 'counting';
  title: string;
  subtitle: string;
  emoji: string;
  path: string;
  color: string;
  bgColor: string;
  borderColor: string;
  duration: string;
}

const SONGS: SongItem[] = [
  {
    id: 'abc',
    title: 'ABC Song',
    subtitle: 'Learn the alphabet A to Z!',
    emoji: '🔤',
    path: '/assets/audio/songs/abc-song.mp3',
    color: 'text-on-primary',
    bgColor: 'bg-primary',
    borderColor: 'border-on-primary-container',
    duration: '~2 min',
  },
  {
    id: 'counting',
    title: 'Counting Song',
    subtitle: 'Count together from 1 to 10!',
    emoji: '🔢',
    path: '/assets/audio/songs/counting-song.mp3',
    color: 'text-on-secondary-container',
    bgColor: 'bg-secondary-container',
    borderColor: 'border-secondary',
    duration: '~3 min',
  },
];

export const SongsPage: React.FC = () => {
  const { navigateTo, addStars } = useApp();
  const [activeSong, setActiveSong] = useState<'abc' | 'counting' | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasEarnedStar, setHasEarnedStar] = useState<Record<string, boolean>>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentSongData = SONGS.find(s => s.id === activeSong) ?? null;

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (progressInterval.current) clearInterval(progressInterval.current);
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);
  };

  const startProgressTracker = (audio: HTMLAudioElement) => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      if (audio.duration) {
        setProgress(audio.currentTime);
        setDuration(audio.duration);
        // Award a star when 50% of song is listened to
        const pct = audio.currentTime / audio.duration;
        if (pct >= 0.5 && !hasEarnedStar[activeSong ?? '']) {
          addStars(5);
          setHasEarnedStar(prev => ({ ...prev, [activeSong ?? '']: true }));
          triggerConfetti(0.3);
        }
      }
    }, 300);
  };

  const playSong = (song: SongItem) => {
    stopAudio();
    setActiveSong(song.id);
    setHasEarnedStar(prev => ({ ...prev })); // keep history

    const audio = new Audio(song.path);
    audio.volume = 0.9;
    audioRef.current = audio;

    audio.addEventListener('canplaythrough', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
      if (progressInterval.current) clearInterval(progressInterval.current);
      triggerConfetti(0.5);
      addStars(3);
    });

    audio.play()
      .then(() => {
        setIsPlaying(true);
        startProgressTracker(audio);
      })
      .catch(err => console.warn('Audio play failed:', err));
  };

  const togglePause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      if (progressInterval.current) clearInterval(progressInterval.current);
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      startProgressTracker(audioRef.current);
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    stopAudio();
    setActiveSong(null);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPct = duration ? (progress / duration) * 100 : 0;

  return (
    <div className="bg-clouds min-h-screen text-on-background font-body-lg pb-[100px] md:pb-12 overflow-x-hidden">
      <TopAppBar />
      <DesktopSidebar />

      <main className="max-w-screen-md mx-auto px-4 pt-6 flex flex-col gap-8 items-center">

        {/* Page Header */}
        <section className="text-center">
          <h1 className="font-display-hero text-headline-lg md:text-display-hero text-primary drop-shadow-sm">
            🎵 Songs
          </h1>
          <p className="font-body-xl text-on-surface-variant mt-1">
            Tap a song to sing along!
          </p>
        </section>

        {/* Dancing Character — always visible, animates when playing */}
        <div className="relative flex flex-col items-center">
          <div
            className={`relative transition-all duration-500 ${
              isPlaying ? 'scale-110 drop-shadow-2xl' : 'scale-100'
            }`}
          >
            {/* Glow ring when playing */}
            {isPlaying && (
              <div className="absolute inset-0 rounded-full bg-primary-container/40 animate-ping scale-125 blur-md" />
            )}

            <img
              src="/assets/character/character-dance.gif"
              alt="Dancing character"
              className={`w-52 sm:w-64 md:w-72 h-auto drop-shadow-xl relative z-10 ${
                isPlaying ? 'animate-bounce' : ''
              }`}
              style={isPlaying ? { animationDuration: '0.6s' } : {}}
            />

            {/* Music notes floating when playing */}
            {isPlaying && (
              <>
                <span
                  className="absolute -top-4 -right-4 text-3xl animate-float z-20 select-none"
                  style={{ animationDelay: '0s' }}
                >
                  🎵
                </span>
                <span
                  className="absolute -top-2 -left-6 text-2xl animate-float z-20 select-none"
                  style={{ animationDelay: '0.4s' }}
                >
                  🎶
                </span>
                <span
                  className="absolute top-8 -right-8 text-xl animate-float z-20 select-none"
                  style={{ animationDelay: '0.8s' }}
                >
                  🎵
                </span>
              </>
            )}
          </div>

          {/* Status label */}
          <div
            className={`mt-3 px-5 py-2 rounded-full font-label-bold text-sm transition-all duration-300 ${
              isPlaying
                ? 'bg-primary text-on-primary shadow-lg scale-105'
                : 'bg-surface-container text-on-surface-variant'
            }`}
          >
            {isPlaying
              ? `🎵 Playing: ${currentSongData?.title ?? ''}`
              : activeSong
              ? '⏸ Paused'
              : '🎤 Choose a song below!'}
          </div>
        </div>

        {/* Progress bar (visible when a song is active) */}
        {activeSong && (
          <div className="w-full max-w-sm animate-bounceIn">
            <div className="flex justify-between text-xs text-on-surface-variant font-label-bold mb-1 px-1">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-5 shadow-inner border-2 border-outline-variant overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Playback controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={handleStop}
                className="bg-error-container text-on-error-container p-3 rounded-full shadow-md hover:bg-error hover:text-on-error transition-all active:scale-95 btn-3d border-b-4 border-error"
                title="Stop"
              >
                <span className="material-symbols-outlined text-3xl">stop</span>
              </button>

              <button
                onClick={togglePause}
                className="bg-primary text-on-primary p-5 rounded-full shadow-xl hover:bg-on-primary-fixed-variant transition-all active:scale-95 btn-3d border-b-6 border-on-primary-container"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                <span className="material-symbols-outlined text-4xl material-symbols-fill">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              {/* Switch song */}
              <button
                onClick={() => {
                  const other = SONGS.find(s => s.id !== activeSong);
                  if (other) playSong(other);
                }}
                className="bg-secondary-container text-on-secondary-container p-3 rounded-full shadow-md hover:bg-secondary hover:text-on-secondary transition-all active:scale-95 btn-3d border-b-4 border-secondary"
                title="Switch song"
              >
                <span className="material-symbols-outlined text-3xl">skip_next</span>
              </button>
            </div>
          </div>
        )}

        {/* Song cards */}
        <div className="w-full flex flex-col gap-4">
          {SONGS.map(song => {
            const isActive = activeSong === song.id;
            return (
              <button
                key={song.id}
                onClick={() => isActive && isPlaying ? togglePause() : playSong(song)}
                className={`w-full rounded-2xl p-5 shadow-md border-b-[6px] flex items-center gap-5 transition-all text-left group hover:translate-y-1 hover:border-b-4 active:scale-[0.98] ${
                  isActive
                    ? `${song.bgColor} ${song.borderColor} scale-[1.02] shadow-xl`
                    : 'bg-surface-container-lowest border-outline-variant hover:shadow-lg'
                }`}
              >
                {/* Song emoji icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center text-4xl shadow-sm flex-shrink-0 transition-all ${
                    isActive ? 'bg-white/30 scale-110' : 'bg-surface-container'
                  } ${isActive && isPlaying ? 'animate-wiggle' : ''}`}
                >
                  {song.emoji}
                </div>

                {/* Song info */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-headline-lg-mobile text-headline-lg-mobile font-bold truncate ${
                      isActive ? song.color : 'text-on-surface'
                    }`}
                  >
                    {song.title}
                  </h3>
                  <p
                    className={`font-body-lg text-sm mt-0.5 truncate ${
                      isActive ? `${song.color} opacity-80` : 'text-on-surface-variant'
                    }`}
                  >
                    {song.subtitle}
                  </p>
                  <span
                    className={`text-xs font-label-bold mt-1 inline-block ${
                      isActive ? `${song.color} opacity-60` : 'text-on-surface-variant/60'
                    }`}
                  >
                    ⏱ {song.duration}
                    {hasEarnedStar[song.id] ? '  ⭐ Stars earned!' : ''}
                  </span>
                </div>

                {/* Play indicator */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow transition-all ${
                    isActive
                      ? 'bg-white/30 scale-110'
                      : 'bg-primary-container group-hover:bg-primary group-hover:text-on-primary'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl material-symbols-fill ${
                      isActive ? song.color : 'text-primary'
                    } ${isActive && isPlaying ? 'animate-pulse' : ''}`}
                  >
                    {isActive && isPlaying ? 'equalizer' : 'play_arrow'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Back button */}
        <button
          onClick={() => { handleStop(); navigateTo('home'); }}
          className="flex items-center gap-2 text-on-surface-variant font-label-bold py-2 px-4 rounded-full hover:bg-surface-container transition-colors mt-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Home
        </button>
      </main>

      <BottomNavBar />
    </div>
  );
};
