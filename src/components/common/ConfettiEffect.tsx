import confetti from 'canvas-confetti';

export const triggerConfetti = (originY = 0.6) => {
  const count = 60;
  const defaults = {
    origin: { y: originY },
    colors: ['#fdd029', '#47c1ff', '#ff9d78', '#00658d', '#eec215'],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const startVictoryConfettiShower = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ['#fdd029', '#47c1ff', '#ff9d78', '#00658d'];

  const frame = () => {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};
