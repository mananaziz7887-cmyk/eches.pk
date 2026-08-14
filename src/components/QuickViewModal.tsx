import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Sparkles, Check, Scissors } from 'lucide-react';
import { DressItem } from '../types';
import { getWhatsAppBookingUrl } from '../data/collection';

interface QuickViewModalProps {
  dress: DressItem | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ dress, onClose }) => {
  if (!dress) return null;

  return (
    <AnimatePresence>
      <div
        id="quick-view-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="quick-view-modal-content"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl liquid-glass-card bg-[#12100F]/90 rounded-3xl p-5 sm:p-8 border border-[#E2C9B8]/25 shadow-2xl overflow-hidden my-auto"
        >
          {/* Close button */}
          <button
            id="close-quick-view-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all"
            aria-label="Close Atelier Details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Garment Image */}
            <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
              <img
                src={dress.image}
                alt={dress.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#E2C9B8]/30">
                <span className="font-display text-xs tracking-widest text-[#E2C9B8] font-semibold">
                  № {dress.number}
                </span>
              </div>
            </div>

            {/* Right: Garment Specifications & WhatsApp Booking */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-[#E2C9B8] text-[10px] tracking-[0.3em] uppercase font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>Haute Couture Collection</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-white font-medium tracking-wide uppercase mt-1">
                  {dress.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#E2C9B8]/90 font-light tracking-wider mt-1">
                  {dress.silhouette}
                </p>
              </div>

              {/* Garment Description */}
              <p className="text-xs text-white/70 font-light leading-relaxed tracking-wide">
                {dress.description}
              </p>

              {/* Craftsmanship Details */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#E2C9B8] font-medium block">
                  Atelier Craftsmanship
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dress.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[11px] text-white/80 font-light">
                      <Check className="w-3.5 h-3.5 text-[#E2C9B8] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy Notes */}
              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center space-x-3">
                <Scissors className="w-4 h-4 text-[#E2C9B8] shrink-0" />
                <p className="text-[10px] text-white/60 uppercase tracking-widest leading-normal">
                  Custom Size Tailoring & 1-on-1 Fitting Included
                </p>
              </div>

              {/* Direct WhatsApp Booking CTA */}
              <div className="pt-2">
                <a
                  id="quick-view-whatsapp-book-btn"
                  href={getWhatsAppBookingUrl(dress)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass-button w-full py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-3 text-xs tracking-[0.25em] uppercase font-semibold text-white shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 text-[#E2C9B8]" />
                  <span>BOOK DRESS {dress.number} VIA WHATSAPP →</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
