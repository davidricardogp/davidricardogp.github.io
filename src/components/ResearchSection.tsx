import React, { useState } from 'react';
import { ExternalLink, GitBranch, Info } from 'lucide-react';
import { DAVID_DATA, PaperItem } from '../data/davidProfileData';
import { PaperModal } from './PaperModal';

interface ResearchSectionProps {
  currentLang: 'en' | 'es';
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ currentLang }) => {
  const [selectedPaper, setSelectedPaper] = useState<PaperItem | null>(null);

  const handleOpenPaper = (paper: PaperItem) => {
    setSelectedPaper(paper);
  };

  return (
    <section className="py-12 border-b border-[var(--rule)]" id="research">
      <div className="space-y-10">
        <div>
          <h2 className="sec-heading">
            <span className="n">01</span>
            <span>{currentLang === 'en' ? 'Research & Publications' : 'Investigación y Publicaciones'}</span>
          </h2>
          <p className="mt-2 text-xs font-mono text-[var(--ink-3)]">
            {currentLang === 'en'
              ? 'Click any paper or book to inspect its summary, origin, and replication repository.'
              : 'Haz clic en cualquier documento o libro para ver su resumen, origen y repositorio de replicación.'}
          </p>
        </div>

        {/* Working Papers */}
        <div className="space-y-6">
          <h3 className="sub-h">
            {currentLang === 'en' ? 'Working Papers' : 'Documentos de Trabajo'}
          </h3>
          <div className="space-y-6">
            {DAVID_DATA.workingPapers.map((paper) => (
              <article
                key={paper.id}
                className="group p-3 -mx-3 rounded transition-colors hover:bg-[var(--paper-sunk)] space-y-1.5 text-[17px] font-prose leading-relaxed cursor-pointer"
                onClick={() => handleOpenPaper(paper)}
              >
                <div className="font-semibold text-[18px]">
                  <span className="academic-link inline-flex items-baseline gap-1 group-hover:text-[var(--signal)]">
                    <span>{paper.title}</span>
                    <Info className="h-3.5 w-3.5 text-[var(--signal)] opacity-80 shrink-0 self-center" />
                  </span>
                </div>
                <div className="text-xs font-label text-[var(--ink-3)] font-mono flex flex-wrap items-center gap-3">
                  <span>{paper.meta}</span>
                  {paper.githubUrl && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(paper.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center gap-1 text-[var(--signal)] hover:underline cursor-pointer"
                    >
                      <GitBranch className="h-3 w-3" />
                      <span>GitHub</span>
                    </span>
                  )}
                </div>
                <p className="text-sm font-prose text-[var(--ink-2)] italic">
                  {paper.citation}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Books */}
        <div className="space-y-6">
          <h3 className="sub-h">
            {currentLang === 'en' ? 'Books' : 'Libros'}
          </h3>
          <div className="space-y-6">
            {DAVID_DATA.books.map((book) => (
              <article
                key={book.id}
                className="group p-3 -mx-3 rounded transition-colors hover:bg-[var(--paper-sunk)] space-y-1.5 text-[17px] font-prose leading-relaxed cursor-pointer"
                onClick={() => handleOpenPaper(book)}
              >
                <div className="font-semibold text-[18px]">
                  <span className="academic-link inline-flex items-baseline gap-1 group-hover:text-[var(--signal)]">
                    <span>{book.title}</span>
                    <Info className="h-3.5 w-3.5 text-[var(--signal)] opacity-80 shrink-0 self-center" />
                  </span>
                </div>
                <div className="text-xs font-label text-[var(--ink-3)] font-mono flex flex-wrap items-center gap-3">
                  <span>{book.meta}</span>
                  {book.githubUrl && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(book.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center gap-1 text-[var(--signal)] hover:underline cursor-pointer"
                    >
                      <GitBranch className="h-3 w-3" />
                      <span>GitHub</span>
                    </span>
                  )}
                </div>
                <p className="text-sm font-prose text-[var(--ink-2)] italic">
                  {book.citation}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Research & Policy Reports */}
        <div className="space-y-6">
          <h3 className="sub-h">
            {currentLang === 'en' ? 'Research and Policy Reports' : 'Informes de Investigación y Políticas'}
          </h3>
          <div className="space-y-6">
            {DAVID_DATA.policyReports.map((report) => (
              <article
                key={report.id}
                className="group p-3 -mx-3 rounded transition-colors hover:bg-[var(--paper-sunk)] space-y-1.5 text-[17px] font-prose leading-relaxed cursor-pointer"
                onClick={() => handleOpenPaper(report)}
              >
                <div className="font-semibold text-[18px]">
                  <span className="academic-link inline-flex items-baseline gap-1 group-hover:text-[var(--signal)]">
                    <span>{report.title}</span>
                    <Info className="h-3.5 w-3.5 text-[var(--signal)] opacity-80 shrink-0 self-center" />
                  </span>
                </div>
                <div className="text-xs font-label text-[var(--ink-3)] font-mono flex flex-wrap items-center gap-3">
                  <span>{report.meta}</span>
                  {report.githubUrl && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(report.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center gap-1 text-[var(--signal)] hover:underline cursor-pointer"
                    >
                      <GitBranch className="h-3 w-3" />
                      <span>GitHub</span>
                    </span>
                  )}
                </div>
                <p className="text-sm font-prose text-[var(--ink-2)] italic">
                  {report.citation}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Public Writing */}
        <div className="space-y-6">
          <h3 className="sub-h">
            {currentLang === 'en' ? 'Public Writing & Commentary' : 'Artículos y Opinión Pública'}
          </h3>
          <div className="space-y-6">
            {DAVID_DATA.publicWriting.map((item) => (
              <article key={item.id} className="space-y-1 text-[17px] font-prose leading-relaxed">
                <div className="font-semibold text-[18px]">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="academic-link inline-flex items-baseline gap-1"
                  >
                    <span>{item.title}</span>
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
                  </a>
                </div>
                <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                  {item.meta}
                </div>
                <p className="text-[17px] font-prose text-[var(--ink-2)]">
                  {currentLang === 'en' ? item.desc : item.descEs}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Paper / Book Modal */}
      <PaperModal
        paper={selectedPaper}
        isOpen={Boolean(selectedPaper)}
        onClose={() => setSelectedPaper(null)}
        currentLang={currentLang}
      />
    </section>
  );
};
