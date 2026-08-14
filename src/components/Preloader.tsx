import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#12100F] text-[#F7F4F2]"
        >
          {/* Subtle ambient light glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#E2C9B8]/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#E2C9B8]/60 font-light block mb-2">
                Atelier Couture
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] text-brown-beige-gradient font-medium">
                ECHOES.PK
              </h1>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#F7F4F2]/40 mt-1">
                Hannan Aziz
              </p>
            </motion.div>

            {/* Minimal Liquid Glass Progress Track */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8C654D] via-[#E2C9B8] to-[#FAF4F0] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <span className="text-[9px] tracking-widest text-[#F7F4F2]/30 font-light tabular-nums">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
