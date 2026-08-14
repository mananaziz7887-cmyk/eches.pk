import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, ShieldCheck, Gem, Package, Scissors } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/collection';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-36 px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-center z-10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#E2C9B8]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Creative Director Editorial Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#E2C9B8]/20">
            <Sparkles className="w-3 h-3 text-[#E2C9B8]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#E2C9B8] font-medium">
              The Creative Director
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.08em] font-semibold leading-[1.12] uppercase">
            DESIGNER : <br />
            <span className="text-brown-beige-gradient font-normal italic">
              HANNAN AZIZ
            </span>
          </h2>

          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#E2C9B8] via-[#8C654D] to-transparent mx-auto lg:mx-0" />

          <p className="text-xs sm:text-sm md:text-base font-light text-white/75 leading-relaxed max-w-xl tracking-wide mx-auto lg:mx-0">
            Hannan Aziz conceptualizes garments that serve as armor and art for the contemporary woman. Melding traditional heritage techniques with architectural modern deconstruction, the atelier delivers unmatched elegance and timeless presence.
          </p>

          <blockquote className="border-l-0 lg:border-l-2 border-[#E2C9B8]/40 pl-0 lg:pl-4 py-1">
            <p className="font-display text-sm sm:text-base md:text-lg text-[#E2C9B8] font-normal italic tracking-wider">
              &ldquo;We do not create fashion; we design legacy.&rdquo;
            </p>
            <cite className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/40 not-italic block mt-1">
              — Atelier Philosophy
            </cite>
          </blockquote>

          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center space-x-2 text-xs text-white/60 tracking-wider">
              <Gem className="w-4 h-4 text-[#E2C9B8]" />
              <span>Haute Couture</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div className="flex items-center space-x-2 text-xs text-white/60 tracking-wider">
              <Scissors className="w-4 h-4 text-[#E2C9B8]" />
              <span>Made to Measure</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div className="flex items-center space-x-2 text-xs text-white/60 tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#E2C9B8]" />
              <span>Worldwide White-Glove Courier</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Physical Liquid Glass Atelier Policy Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div
            id="atelier-policy-card"
            className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-[#E2C9B8]/25 text-center space-y-6 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient specular highlight reflection */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E2C9B8]/50 to-transparent" />

            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.3em] text-[#E2C9B8] uppercase font-semibold">
                Atelier Policy
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-wider text-white uppercase mt-2">
                Elite Quality
              </h3>
            </div>

            <div className="w-12 h-[1px] bg-[#E2C9B8]/30 mx-auto" />

            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                <Scissors className="w-4 h-4 text-[#E2C9B8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-medium text-white tracking-wide block">
                    1-on-1 Fitting Sessions
                  </span>
                  <span className="text-[10px] text-white/50 leading-relaxed font-light">
                    Direct private consultation with our master couturiers.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                <Gem className="w-4 h-4 text-[#E2C9B8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-medium text-white tracking-wide block">
                    Custom Size Tailoring
                  </span>
                  <span className="text-[10px] text-white/50 leading-relaxed font-light">
                    Precision draping tailored precisely to your silhouette.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                <Package className="w-4 h-4 text-[#E2C9B8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-medium text-white tracking-wide block">
                    Premium Packaging Included
                  </span>
                  <span className="text-[10px] text-white/50 leading-relaxed font-light">
                    Signature luxury garment boxes with protective silk covers.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="atelier-book-appointment-btn"
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hello, I would like to schedule a private 1-on-1 Atelier fitting appointment with Hannan Aziz."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-button w-full py-3.5 px-6 rounded-full flex items-center justify-center space-x-2 text-xs tracking-[0.2em] uppercase font-semibold text-white group shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-[#E2C9B8] group-hover:scale-110 transition-transform" />
                <span>Book An Appointment →</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
