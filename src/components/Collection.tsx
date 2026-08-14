import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { COLLECTION_ITEMS } from '../data/collection';
import { DressItem } from '../types';
import { CollectionCard } from './CollectionCard';
import { QuickViewModal } from './QuickViewModal';

export const Collection: React.FC = () => {
  const [selectedDress, setSelectedDress] = useState<DressItem | null>(null);

  return (
    <section
      id="collection"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[#E2C9B8] font-medium mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Edition 2026</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.1em] font-medium uppercase leading-tight"
        >
          The <span className="text-brown-beige-gradient">Collection</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50 mt-4 max-w-xl mx-auto"
        >
          Exquisite Craftsmanship / Limited Drop / Made to Measure
        </motion.p>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#E2C9B8]/60 to-transparent mx-auto mt-6" />
      </div>

      {/* Editorial Grid: 4 cols on lg, 2 cols on sm/md, 1 col on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {COLLECTION_ITEMS.map((dress, index) => (
          <CollectionCard
            key={dress.id}
            dress={dress}
            index={index}
            onQuickView={(item) => setSelectedDress(item)}
          />
        ))}
      </div>

      {/* Atelier Consultation Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 p-6 sm:p-10 rounded-3xl liquid-glass-card border border-[#E2C9B8]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        <div className="space-y-2">
          <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#E2C9B8] font-medium">
            Custom Atelier Service
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-white font-medium tracking-wide">
            Looking for Bespoke Haute Couture?
          </h3>
          <p className="text-xs text-white/60 font-light max-w-lg leading-relaxed">
            Our master tailors and Creative Director Hannan Aziz craft personalized silhouettes customized to your individual measurements.
          </p>
        </div>

        <a
          id="collection-custom-inquiry-btn"
          href="https://wa.me/923090312505?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20custom%20bespoke%20couture%20order%20with%20Hannan%20Aziz."
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 liquid-glass-button px-8 py-3.5 rounded-full flex items-center space-x-3 text-xs tracking-[0.2em] uppercase font-semibold text-white shadow-xl"
        >
          <MessageSquare className="w-4 h-4 text-[#E2C9B8]" />
          <span>Inquire Custom Design</span>
        </a>
      </motion.div>

      {/* Quick View Couture Modal */}
      <QuickViewModal
        dress={selectedDress}
        onClose={() => setSelectedDress(null)}
      />
    </section>
  );
};
