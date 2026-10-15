import React, { useState, useEffect } from 'react';
import { Topbar } from './components/Topbar';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { TalksSection } from './components/TalksSection';
import { RecognitionSection } from './components/RecognitionSection';
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

      const keyToSection: Record<string, string> = {
        '0': 'intro',
        '1': 'research',
        '2': 'experience',
        '3': 'education',
        '4': 'talks',
        '5': 'recognition',
        '6': 'ask'
      };

      const sectionId = keyToSection[e.key];
      if (sectionId) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
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
      {/* Topbar navigation matching Louis Zhu */}
      <Topbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentLang={currentLang}
        onToggleLang={toggleLang}
      />

      {/* Main Container on 42rem / max-w-3xl rhythm */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
        {/* 00 Who am I + contact info directly beneath utility links + Doré Engraving */}
        <Hero
          currentLang={currentLang}
          onOpenCvModal={() => setIsCvOpen(true)}
          onOpenArtworkModal={() => setIsArtworkOpen(true)}
        />

        {/* 01 Research & Publications */}
        <ResearchSection currentLang={currentLang} />

        {/* 02 Experience */}
        <ExperienceSection currentLang={currentLang} />

        {/* 03 Education */}
        <EducationSection currentLang={currentLang} />

        {/* 04 Talks & community */}
        <TalksSection currentLang={currentLang} />

        {/* 05 Recognition & Awards */}
        <RecognitionSection currentLang={currentLang} />

        {/* 06 Ask me anything */}
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
