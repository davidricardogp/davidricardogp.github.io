import React, { useState, useEffect } from 'react';
import { Topbar, SectionId } from './components/Topbar';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { TalksSection } from './components/TalksSection';
import { RecognitionSection } from './components/RecognitionSection';
import { SectionNavPager } from './components/SectionNavPager';
import { AskMeAnything } from './components/AskMeAnything';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ArtworkModal } from './components/ArtworkModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang');
      if (stored === 'es' || stored === 'en') return stored;
    }
    return 'en';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<SectionId>('00');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isArtworkOpen, setIsArtworkOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', currentLang);
    document.documentElement.setAttribute('lang', currentLang);
  }, [currentLang]);

  const handleSelectSection = (section: SectionId) => {
    setActiveSection(section);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }
      if (isCvOpen || isArtworkOpen) return;

      const keyToSection: Record<string, SectionId> = {
        '0': '00',
        '1': '01',
        '2': '02',
        '3': '03',
        '4': '04',
        '5': '05'
      };

      const targetSection = keyToSection[e.key];
      if (targetSection) {
        e.preventDefault();
        handleSelectSection(targetSection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCvOpen, isArtworkOpen]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const toggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] transition-colors">
      {/* Topbar navigation: clean tab switcher between 00 and 05 */}
      <Topbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentLang={currentLang}
        onToggleLang={toggleLang}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Main Container on 42rem / max-w-3xl rhythm */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
        {/* Render each section separately as its own page tab */}
        {activeSection === '00' && (
          <Hero
            currentLang={currentLang}
            onOpenCvModal={() => setIsCvOpen(true)}
            onOpenArtworkModal={() => setIsArtworkOpen(true)}
            onNavigateNext={() => handleSelectSection('01')}
          />
        )}

        {activeSection === '01' && (
          <ResearchSection currentLang={currentLang} />
        )}

        {activeSection === '02' && (
          <ExperienceSection currentLang={currentLang} />
        )}

        {activeSection === '03' && (
          <EducationSection currentLang={currentLang} />
        )}

        {activeSection === '04' && (
          <TalksSection currentLang={currentLang} />
        )}

        {activeSection === '05' && (
          <RecognitionSection currentLang={currentLang} />
        )}

        {/* Section Step Pager between tabs (with keyboard shortcuts) for non-hero tabs */}
        {activeSection !== '00' && (
          <SectionNavPager
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            currentLang={currentLang}
          />
        )}

        {/* Ask about David Ricardo — persistent at bottom of every section (without 06 index) */}
        <AskMeAnything currentLang={currentLang} />

        {/* Footer */}
        <Footer currentLang={currentLang} />
      </main>

      {/* Clean Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        currentLang={currentLang}
      />

      {/* Gustave Doré Engraving High-Resolution & Archival Modal */}
      <ArtworkModal
        isOpen={isArtworkOpen}
        onClose={() => setIsArtworkOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
