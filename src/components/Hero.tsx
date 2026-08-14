import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, MessageCircle } from 'lucide-react';
import { getGeneralConciergeWhatsAppUrl } from '../data/collection';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(hover: none)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // Subtle max 10px
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouch]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#12100F] px-4 sm:px-6"
    >
      {/* Parallax Background Container */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden scale-105"
        style={{
          x: isTouch ? 0 : mousePos.x * 0.4,
          y: isTouch ? 0 : mousePos.y * 0.4,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.8 }}
      >
        <img
          src="/background_image.jpg"
          alt="ECHOES.PK Haute Couture Atelier by Hannan Aziz"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />

        {/* Sophisticated Dark Espresso Luxury Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100F]/70 via-[#12100F]/45 to-[#12100F]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#12100F]/40 to-[#12100F]/90" />
      </motion.div>

      {/* Floating Ambient Atmosphere Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#E2C9B8]/5 blur-[120px] pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#8C654D]/8 blur-[140px] pointer-events-none animate-ambient-glow" />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center pt-24 sm:pt-28 pb-16">
        {/* Atelier Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full liquid-glass-card border border-[#E2C9B8]/20 mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E2C9B8]" />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#E2C9B8] font-medium">
            Autumn / Winter Couture Edition
          </span>
        </motion.div>

        {/* Brand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] font-semibold text-white uppercase leading-[1.08] mb-4 sm:mb-6"
        >
          ECHOES<span className="text-brown-beige-gradient">.PK</span>
        </motion.h1>

        {/* Subtitle & Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 max-w-2xl px-4 mb-8 sm:mb-12"
        >
          <p className="text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-[#E2C9B8]/90 font-light">
            Women&apos;s Atelier — Hannan Aziz
          </p>
          <p className="text-[11px] sm:text-xs md:text-sm text-white/60 font-light tracking-wide max-w-lg mx-auto leading-relaxed">
            Where architectural silhouettes meet handcrafted silken drapery. Bespoke made-to-measure couture for the discerning modern muse.
          </p>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md px-4"
        >
          <button
            id="hero-explore-collection-btn"
            onClick={onExploreClick}
            className="liquid-glass-button w-full sm:w-auto px-8 py-3.5 rounded-full text-xs tracking-[0.25em] uppercase font-medium text-white shadow-xl hover:text-white"
          >
            Explore Collection →
          </button>

          <a
            id="hero-whatsapp-booking-btn"
            href={getGeneralConciergeWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#E2C9B8]/30 hover:border-[#E2C9B8]/60 bg-black/30 hover:bg-black/50 backdrop-blur-md flex items-center justify-center space-x-2 text-xs tracking-[0.2em] uppercase font-medium text-[#E2C9B8] transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-[#E2C9B8]" />
            <span>Private Fitting</span>
          </a>
        </motion.div>

        {/* Animated Cinematic Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={onExploreClick}
        >
          <span className="text-[8.5px] uppercase tracking-[0.35em] text-[#E2C9B8]/70 font-light">
            Discover
          </span>
          <div className="w-5 h-8 rounded-full border border-[#E2C9B8]/30 flex items-start justify-center p-1">
            <ArrowDown className="w-3 h-3 text-[#E2C9B8] animate-scroll-indicator" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
