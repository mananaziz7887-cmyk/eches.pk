import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScrollObserver = () => {
      const sections = ['hero', 'collection', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#12100F] text-[#F7F4F2] selection:bg-[#E2C9B8]/30 selection:text-white overflow-x-hidden">
      {/* Film Grain Atmosphere Overlay */}
      <div className="fixed inset-0 film-grain pointer-events-none z-30 opacity-40" />

      {/* Luxury Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Preloader Experience */}
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Liquid Glass Floating Navigation */}
          <Navbar
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />

          <main>
            {/* Hero Section */}
            <Hero onExploreClick={() => scrollToSection('collection')} />

            {/* Collection Section */}
            <Collection />

            {/* About Section */}
            <About />
          </main>

          {/* Editorial Atelier Footer */}
          <Footer onScrollToTop={() => scrollToSection('hero')} />
        </>
      )}
    </div>
  );
}
