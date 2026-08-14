import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';
import { DressItem } from '../types';
import { getWhatsAppBookingUrl } from '../data/collection';

interface CollectionCardProps {
  dress: DressItem;
  index: number;
  onQuickView: (dress: DressItem) => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ dress, index, onQuickView }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Gentle 1.5 degree tilt
    const rotateX = ((y - centerY) / centerY) * -1.5;
    const rotateY = ((x - centerX) / centerX) * 1.5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      id={`collection-card-${dress.number}`}
      initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 liquid-glass-card hover:-translate-y-2 transition-all duration-700"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-8px)`
          : 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fashion Image Container (3:4 ratio) */}
      <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950">
        <img
          src={dress.image}
          alt={`Echoes.pk Atelier — Dress ${dress.number} ${dress.name}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-106 transition-transform duration-700 ease-out"
        />

        {/* Cinematic dark subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100F]/80 via-transparent to-[#12100F]/20 opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges: Dress Number & Active Status */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          {/* Subtle Roman / Numeric Dress Identity */}
          <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
            <span className="font-display text-[10px] sm:text-[11px] tracking-widest text-[#E2C9B8] font-semibold">
              № {dress.number}
            </span>
          </div>

          {/* Couture Status Pill */}
          <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E2C9B8]/25 flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C9B8] animate-pulse" />
            <span className="text-[8px] sm:text-[9px] text-[#E2C9B8] tracking-[0.2em] uppercase font-medium">
              Active
            </span>
          </div>
        </div>

        {/* Quick View Interactive Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            id={`quick-view-btn-${dress.number}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(dress);
            }}
            className="pointer-events-auto liquid-glass-button px-4 py-2 rounded-full flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-white shadow-xl hover:scale-105 transition-transform"
          >
            <Eye className="w-3.5 h-3.5 text-[#E2C9B8]" />
            <span>Atelier View</span>
          </button>
        </div>
      </div>

      {/* Dress Identity Information */}
      <div className="mt-4 flex flex-col space-y-3 px-1">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#E2C9B8]/80 font-medium">
              Edition {dress.number}
            </span>
            <span className="text-[8px] tracking-[0.2em] uppercase text-white/40">
              Bespoke
            </span>
          </div>
          <h3 className="font-display text-sm sm:text-base text-white font-medium tracking-wide uppercase mt-1 line-clamp-1 group-hover:text-[#E2C9B8] transition-colors">
            {dress.name}
          </h3>
          <p className="text-[9.5px] sm:text-[10px] uppercase text-white/50 tracking-wider mt-0.5 font-light">
            {dress.fabric}
          </p>
        </div>

        {/* WhatsApp Book Now Action Button */}
        <div className="pt-1">
          <a
            id={`book-now-btn-${dress.number}`}
            href={getWhatsAppBookingUrl(dress)}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-button w-full py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-center space-x-2 group/btn text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-[#F7F4F2] hover:text-white"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E2C9B8] group-hover/btn:scale-110 transition-transform" />
            <span>BOOK NOW →</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
