import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isInteractive = target.closest('a, button, input, textarea, select');
        if (isInteractive) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor pointer-events-none fixed z-50 transition-transform duration-100 ease-out will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
      aria-hidden="true"
    >
      {cursorText ? (
        <div
          className="flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#11110F] text-[#F4F1EA] px-3.5 py-2 text-[10px] tracking-[0.2em] font-sans font-medium uppercase shadow-lg border border-[#A88C62]/40 transition-all duration-200"
          style={{ transform: `scale(${isClicking ? 0.92 : 1}) translate(-50%, -50%)` }}
        >
          {cursorText}
        </div>
      ) : (
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
            isHovered
              ? 'w-8 h-8 bg-[#A88C62]/20 border border-[#A88C62]'
              : 'w-2.5 h-2.5 bg-[#A88C62]'
          }`}
          style={{ transform: `scale(${isClicking ? 0.8 : 1}) translate(-50%, -50%)` }}
        />
      )}
    </div>
  );
};
