import React from 'react';
import { SectionId } from './Topbar';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

interface SectionNavPagerProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  currentLang: 'en' | 'es';
}

interface SectionMeta {
  id: SectionId;
  num: string;
  labelEn: string;
  labelEs: string;
}

const SECTIONS: SectionMeta[] = [
  { id: '00', num: '0', labelEn: '00 Bio & Contact', labelEs: '00 Bio y Contacto' },
  { id: '01', num: '1', labelEn: '01 Research & Publications', labelEs: '01 Investigación y Publicaciones' },
  { id: '02', num: '2', labelEn: '02 Experience', labelEs: '02 Experiencia' },
  { id: '03', num: '3', labelEn: '03 Education', labelEs: '03 Educación' },
  { id: '04', num: '4', labelEn: '04 Talks & Community', labelEs: '04 Charlas y Comunidad' },
  { id: '05', num: '5', labelEn: '05 Recognition & Awards', labelEs: '05 Reconocimiento y Premios' }
];

export const SectionNavPager: React.FC<SectionNavPagerProps> = ({
  activeSection,
  onSelectSection,
  currentLang
}) => {
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : SECTIONS[0];

  return (
    <nav
      aria-label="Section Pagination"
      className="py-6 sm:py-8 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-[var(--ink-2)]"
    >
      {/* Previous Section */}
      <div>
        {prevSection ? (
          <button
            type="button"
            onClick={() => onSelectSection(prevSection.id)}
            className="group inline-flex items-center gap-2 hover:text-[var(--signal)] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-[var(--ink-3)] group-hover:text-[var(--signal)] transition-transform group-hover:-translate-x-0.5" />
            <span className="font-semibold">
              {currentLang === 'en' ? `← ${prevSection.labelEn}` : `← ${prevSection.labelEs}`}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[var(--ink-3)]">
              <span>{currentLang === 'en' ? '(press' : '(presiona'}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--paper-sunk)] border border-[var(--rule)] font-mono text-[10px] text-[var(--ink-2)] shadow-xs">
                {prevSection.num}
              </kbd>
              <span>)</span>
            </span>
          </button>
        ) : (
          <span className="text-[10px] text-[var(--ink-3)] tracking-normal">
            {currentLang === 'en' ? 'Section 00 of 05' : 'Sección 00 de 05'}
          </span>
        )}
      </div>

      {/* Next Section or Return to Bio */}
      <div>
        {nextSection && (
          <button
            type="button"
            onClick={() => onSelectSection(nextSection.id)}
            className="group inline-flex items-center gap-2 hover:text-[var(--signal)] transition-colors cursor-pointer"
          >
            <span className="font-semibold">
              {currentIndex === SECTIONS.length - 1
                ? (currentLang === 'en' ? 'Return to 00 Bio →' : 'Volver a 00 Bio →')
                : (currentLang === 'en' ? `Next: ${nextSection.labelEn} →` : `Siguiente: ${nextSection.labelEs} →`)}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[var(--ink-3)]">
              <span>{currentLang === 'en' ? '(or press' : '(o presiona'}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--paper-sunk)] border border-[var(--rule)] font-mono text-[10px] text-[var(--ink-2)] shadow-xs">
                {nextSection.num}
              </kbd>
              <span>)</span>
            </span>
            {currentIndex === SECTIONS.length - 1 ? (
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--ink-3)] group-hover:text-[var(--signal)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            ) : (
              <ArrowRight className="h-3.5 w-3.5 text-[var(--ink-3)] group-hover:text-[var(--signal)] transition-transform group-hover:translate-x-0.5" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
};
