import React, { useEffect } from 'react';

export const StarBurstEffect: React.FC = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't trigger if clicked on an interactive button to avoid clutter
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('input')) {
        return;
      }

      const star = document.createElement('span');
      star.className = 'material-symbols-outlined star-burst text-secondary-container material-symbols-fill pointer-events-none fixed z-50 text-4xl';
      star.textContent = 'star';
      star.style.left = `${e.clientX - 16}px`;
      star.style.top = `${e.clientY - 16}px`;
      star.style.animation = 'starPop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 800);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};
