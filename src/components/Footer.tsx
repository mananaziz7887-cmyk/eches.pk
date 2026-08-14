import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/collection';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#12100F] pt-16 pb-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between space-y-10">
        {/* Top row: Brand & Quote */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left border-b border-white/5 pb-10">
          <div>
            <span className="font-display text-2xl tracking-[0.2em] font-semibold text-brown-beige-gradient">
              ECHOES.PK
            </span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#E2C9B8]/70 mt-1 font-light">
              Haute Couture Atelier &bull; Hannan Aziz
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              id="footer-whatsapp-link"
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                "Hello, I would like to inquire with ECHOES.PK Atelier concierge."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-[#E2C9B8] hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +92 309 0312505</span>
            </a>

            <button
              id="footer-scroll-top-btn"
              onClick={onScrollToTop}
              className="p-2.5 rounded-full liquid-glass-card hover:border-[#E2C9B8]/50 text-white/70 hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row: Copyright */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/30 space-y-3 sm:space-y-0">
          <span>&copy; 2026 Echoes.pk. All Rights Reserved.</span>
          <span className="text-white/20">Designed &amp; Directed by Hannan Aziz</span>
        </div>
      </div>
    </footer>
  );
};
