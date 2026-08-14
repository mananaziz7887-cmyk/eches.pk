import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover and doesn't prefer reduced motion
    const checkIsTouch = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsTouchDevice(!hasFinePointer || prefersReducedMotion);
    };

    checkIsTouch();
    window.addEventListener('resize', checkIsTouch);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isButton = target.closest('button, a, .liquid-glass-button');
      const isImage = target.closest('img, .aspect-\\[3\\/4\\]');

      if (isButton) {
        setCursorState('button');
      } else if (isImage) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkIsTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      id="custom-luxury-cursor"
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - (cursorState === 'button' ? 18 : cursorState === 'hover' ? 24 : 6),
        y: position.y - (cursorState === 'button' ? 18 : cursorState === 'hover' ? 24 : 6),
        width: cursorState === 'button' ? 36 : cursorState === 'hover' ? 48 : 12,
        height: cursorState === 'button' ? 36 : cursorState === 'hover' ? 48 : 12,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div
        className={`w-full h-full rounded-full transition-all duration-300 ${
          cursorState === 'button'
            ? 'bg-[#E2C9B8]/80 scale-100 backdrop-invert'
            : cursorState === 'hover'
            ? 'border-2 border-[#E2C9B8] bg-[#E2C9B8]/20'
            : 'bg-[#E2C9B8] shadow-sm'
        }`}
      />
    </motion.div>
  );
};
