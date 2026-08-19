import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor = ({ cursorState }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const wrapperRef = useRef(null);

  // Smooth position tracking target & current values for lerp
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Detect touch / mobile device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth <= 768
      );
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const onMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Smooth 60-120fps hardware-accelerated animation loop
  useEffect(() => {
    const animateCursor = () => {
      const ease = 0.22; // Lerp smoothing factor
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  const isBadge = cursorState && cursorState.active;
  const badgeText = (cursorState && cursorState.text) || 'VIEW';

  return (
    <div
      ref={wrapperRef}
      className={`custom-cursor-wrapper ${!isVisible ? 'is-hidden' : ''}`}
      style={{
        transform: `translate3d(${current.current.x}px, ${current.current.y}px, 0)`,
      }}
    >
      <div className={`custom-cursor ${isBadge ? 'cursor-badge' : ''}`}>
        <span className="cursor-badge-text">
          {badgeText}
        </span>
      </div>
    </div>
  );
};
