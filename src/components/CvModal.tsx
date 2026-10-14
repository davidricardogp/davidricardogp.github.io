import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'en' | 'es';
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, currentLang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150 no-print"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl my-6 rounded-xl bg-[var(--paper)] border border-[var(--rule)] shadow-2xl p-6 sm:p-10 relative text-[var(--ink)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--rule)]">
          <div className="text-xs font-mono text-[var(--ink-3)] uppercase tracking-wider">
            Curriculum Vitae · {DAVID_DATA.name}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-label font-medium rounded border border-[var(--rule)] hover:bg-[var(--paper-sunk)] transition-colors cursor-pointer text-[var(--ink)]"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>{currentLang === 'en' ? 'Print / Save PDF' : 'Imprimir / Guardar PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[var(--ink-3)] hover:text-[var(--ink)] hover:bg-[var(--paper-sunk)] transition-colors cursor-pointer"
              aria-label={currentLang === 'en' ? 'Close CV modal' : 'Cerrar ventana de CV'}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document */}
        <div className="space-y-8 font-prose">
          {/* Header */}
          <div className="text-center pb-6 border-b border-[var(--rule)]">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-[var(--ink)]">
              {DAVID_DATA.name}
            </h1>
            <p className="mt-1 text-base text-[var(--ink)] font-label font-medium">
              {currentLang === 'en'
                ? 'Predoctoral Researcher in Entrepreneurship'
                : 'Investigador Predoctoral en Emprendimiento'}
            </p>
            <p className="text-sm text-[var(--ink-2)] mt-0.5">
              {DAVID_DATA.contact.institution} · {currentLang === 'en' ? DAVID_DATA.contact.department : DAVID_DATA.contact.departmentEs}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[var(--ink-3)] font-mono">
              <a
                href={`mailto:${DAVID_DATA.contact.email}`}
                className="text-[var(--ink)] hover:text-[var(--signal)] hover:underline"
              >
                {DAVID_DATA.contact.email}
              </a>
              <span aria-hidden="true">&middot;</span>
              <span>{DAVID_DATA.contact.tel}</span>
              <span aria-hidden="true">&middot;</span>
              <a
                href={DAVID_DATA.contact.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--signal)] hover:underline inline-flex items-center gap-1"
              >
                <span>ORCID: {DAVID_DATA.contact.orcidId}</span>
              </a>
              <span aria-hidden="true">&middot;</span>
              <span>{currentLang === 'en' ? 'Barcelona, Spain' : 'Barcelona, España'}</span>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-label font-bold uppercase tracking-widest text-[var(--ink)] border-b border-[var(--rule)] pb-1">
              {currentLang === 'en' ? 'Education' : 'Educación'}
            </h2>
            <div className="space-y-4 text-sm">
              {DAVID_DATA.degrees.map((deg) => (
                <div key={deg.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-semibold text-[var(--ink)]">
                    <span>{currentLang === 'en' ? deg.title : deg.titleEs}</span>
                    <span className="text-xs font-mono text-[var(--ink-3)]">
                      {currentLang === 'en' ? deg.meta.split('·')[1] : deg.metaEs.split('·')[1]}
                    </span>
                  </div>
                  <ul className="text-xs text-[var(--ink-2)] space-y-0.5">
                    {(currentLang === 'en' ? deg.details : deg.detailsEs).map((d, i) => (
                      <li key={i} className="relative pl-3.5">
                        <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-3">
            <h2 className="text-xs font-label font-bold uppercase tracking-widest text-[var(--ink)] border-b border-[var(--rule)] pb-1">
              {currentLang === 'en' ? 'Experience' : 'Experiencia'}
            </h2>
            <div className="space-y-4 text-sm">
              {DAVID_DATA.experience.map((exp) => (
                <div key={exp.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-semibold text-[var(--ink)]">
                    <span>{currentLang === 'en' ? exp.title : exp.titleEs}</span>
                  </div>
                  <div className="text-xs font-mono text-[var(--ink-3)]">
                    {currentLang === 'en' ? exp.meta : exp.metaEs}
                  </div>
                  <p className="text-xs text-[var(--ink-2)]">
                    {currentLang === 'en' ? exp.description : exp.descriptionEs}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Publications */}
          <section className="space-y-3">
            <h2 className="text-xs font-label font-bold uppercase tracking-widest text-[var(--ink)] border-b border-[var(--rule)] pb-1">
              {currentLang === 'en' ? 'Publications & Working Papers' : 'Publicaciones y Documentos de Trabajo'}
            </h2>
            <div className="space-y-3 text-xs text-[var(--ink-2)]">
              {DAVID_DATA.workingPapers.map((p) => (
                <p key={p.id}>{p.citation}</p>
              ))}
              {DAVID_DATA.policyReports.map((p) => (
                <p key={p.id}>{p.citation}</p>
              ))}
              {DAVID_DATA.books.map((p) => (
                <p key={p.id}>{p.citation}</p>
              ))}
            </div>
          </section>

          {/* Recognition */}
          <section className="space-y-3">
            <h2 className="text-xs font-label font-bold uppercase tracking-widest text-[var(--ink)] border-b border-[var(--rule)] pb-1">
              {currentLang === 'en' ? 'Awards & Fellowships' : 'Premios y Becas'}
            </h2>
            <ul className="text-xs text-[var(--ink-2)] space-y-1">
              {DAVID_DATA.awards.map((a) => (
                <li key={a.id} className="relative pl-3.5">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  <strong className="text-[var(--ink)]">{currentLang === 'en' ? a.title : a.titleEs}</strong>
                  {(currentLang === 'en' ? a.description : a.descriptionEs) && (
                    <span> — {currentLang === 'en' ? a.description : a.descriptionEs}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Modal Bottom Actions */}
        <div className="mt-8 pt-4 border-t border-[var(--rule)] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-label font-medium rounded text-[var(--ink-2)] hover:bg-[var(--paper-sunk)] transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Close' : 'Cerrar'}
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-label font-medium rounded bg-[var(--ink)] text-[var(--paper)] hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{currentLang === 'en' ? 'Download PDF' : 'Descargar PDF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
