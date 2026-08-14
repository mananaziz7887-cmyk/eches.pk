import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/collection';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'collection', label: 'COLLECTION' },
    { id: 'about', label: 'ABOUT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-40 flex justify-center px-4 sm:px-6 pointer-events-none">
      <motion.nav
        id="main-navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-4xl rounded-full px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'liquid-glass-nav scrolled' : 'liquid-glass-nav'
        }`}
      >
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('hero')}
          className="group flex flex-col items-start text-left focus:outline-none"
        >
          <span className="font-display text-base sm:text-lg tracking-[0.2em] font-semibold text-brown-beige-gradient group-hover:opacity-90 transition-opacity">
            ECHOES.PK
          </span>
          <span className="text-[7.5px] sm:text-[8px] tracking-[0.3em] uppercase text-[#E2C9B8]/60 font-light -mt-0.5">
            Hannan Aziz Atelier
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="relative py-1 text-xs tracking-[0.25em] font-medium text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E2C9B8] to-transparent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Direct WhatsApp Concierge CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            id="nav-whatsapp-cta"
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
              "Hello, I would like to inquire about private atelier fittings at ECHOES.PK."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-button px-4 py-2 rounded-full flex items-center space-x-2 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium text-[#F7F4F2] hover:text-white"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E2C9B8]" />
            <span>Concierge</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto absolute top-20 inset-x-4 max-w-sm mx-auto liquid-glass-nav rounded-3xl p-6 flex flex-col space-y-5 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-sm tracking-[0.25em] font-medium py-2 px-3 rounded-xl transition-all ${
                    activeSection === link.id
                      ? 'bg-white/10 text-[#E2C9B8]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <a
                id="mobile-nav-whatsapp-cta"
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hello, I would like to inquire about private atelier fittings at ECHOES.PK."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-button w-full py-3 rounded-full flex items-center justify-center space-x-2 text-xs tracking-[0.2em] uppercase font-medium text-white"
              >
                <MessageCircle className="w-4 h-4 text-[#E2C9B8]" />
                <span>WhatsApp Atelier</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
