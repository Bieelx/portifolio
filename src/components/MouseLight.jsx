import React, { useEffect, useRef } from 'react';

// Soft glow that follows the cursor (desktop only).
const MouseLight = () => {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    let x = 0, y = 0, ticking = false;
    const paint = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${x - 160}px, ${y - 160}px)`;
      el.style.opacity = '1';
    };
    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', top: 0, left: 0, width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,247,245,0.045) 0%, rgba(251,247,245,0) 62%)',
        pointerEvents: 'none', zIndex: 1500, opacity: 0, transition: 'opacity 0.5s ease',
      }}
    />
  );
};

export default MouseLight;
