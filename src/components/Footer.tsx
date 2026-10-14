import React from 'react';
import { ArrowUp } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';

interface FooterProps {
  currentLang: 'en' | 'es';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 space-y-8">
      {/* Literary Colophon / Alan Turing Closing Quotation — Center quote, right-aligned citation */}
      <div className="pt-6 border-t border-[var(--rule)] max-w-2xl mx-auto space-y-3">
        <p className="font-serif italic text-[16px] sm:text-[17px] text-[var(--ink)] leading-relaxed text-center">
          {currentLang === 'en'
            ? '“I propose to consider the question: Can machines think?”'
            : '«Propongo considerar la pregunta: ¿Pueden pensar las máquinas?»'}
        </p>
        <div className="text-right">
          <p className="font-mono text-xs text-[var(--ink-3)] tracking-wide leading-relaxed">
            — Alan Turing, <span className="italic">Computing Machinery and Intelligence</span>,
            <br />
            {currentLang === 'en'
              ? 'Mind, vol. 59, no. 236, 1950, p. 433.'
              : 'Mind, vol. 59, n.º 236, 1950, p. 433.'}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-label text-[var(--ink-3)] pt-4 border-t border-[var(--rule)]">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>&copy; 2026 {DAVID_DATA.name}</span>
          <span className="text-[var(--rule-strong)]" aria-hidden="true">&middot;</span>
          <span>{currentLang === 'en' ? 'Powered by GitHub Pages' : 'Alojado en GitHub Pages'}</span>
          <span className="text-[var(--rule-strong)]" aria-hidden="true">&middot;</span>
          <span>{currentLang === 'en' ? 'Site last updated Oct. 2026' : 'Actualizado en oct. 2026'}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-[var(--ink-2)] hover:text-[var(--signal)] transition-colors cursor-pointer"
          aria-label={currentLang === 'en' ? 'Back to top' : 'Volver arriba'}
        >
          <span>{currentLang === 'en' ? 'Back to top' : 'Volver arriba'}</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};
