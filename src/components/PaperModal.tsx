import React, { useState, useEffect } from 'react';
import { X, ExternalLink, GitBranch, Copy, Check, BookOpen, Building2, FileText, Bookmark } from 'lucide-react';
import { PaperItem } from '../data/davidProfileData';

interface PaperModalProps {
  paper: PaperItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'en' | 'es';
}

export const PaperModal: React.FC<PaperModalProps> = ({
  paper,
  isOpen,
  onClose,
  currentLang
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !paper) return null;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(paper.citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const badgeText = currentLang === 'en'
    ? (paper.badge || (paper.type === 'book' ? 'Book' : 'Paper'))
    : (paper.badgeEs || (paper.type === 'book' ? 'Libro' : 'Documento'));

  const originText = currentLang === 'en' ? paper.origin : paper.originEs;
  const summaryText = currentLang === 'en' ? paper.summary : paper.summaryEs;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="paper-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--paper)] border border-[var(--rule-strong)] shadow-2xl rounded-sm p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label={currentLang === 'en' ? 'Close dialog' : 'Cerrar diálogo'}
          className="absolute top-5 right-5 p-1.5 text-[var(--ink-3)] hover:text-[var(--ink)] hover:bg-[var(--paper-sunk)] transition-colors rounded cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-5 border-b border-[var(--rule)] pr-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--paper-sunk)] border border-[var(--rule)] text-[var(--ink-2)]">
              {badgeText}
            </span>
            <span className="text-xs font-mono text-[var(--ink-3)]">
              {paper.meta}
            </span>
          </div>

          <h2 id="paper-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-[var(--ink)] leading-snug">
            {paper.title}
          </h2>

          <p className="text-sm font-sans text-[var(--ink-2)]">
            {paper.authors}
          </p>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-6">
          {/* Origin */}
          {originText && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--signal)] font-semibold">
                <Building2 className="h-3.5 w-3.5" />
                <span>{currentLang === 'en' ? 'Origin' : 'Origen'}</span>
              </div>
              <div className="p-3.5 rounded bg-[var(--paper-raised)] border border-[var(--rule)] text-sm font-sans text-[var(--ink-2)] leading-relaxed">
                {originText}
              </div>
            </div>
          )}

          {/* Summary */}
          {summaryText && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--signal)] font-semibold">
                <FileText className="h-3.5 w-3.5" />
                <span>{currentLang === 'en' ? 'Summary' : 'Resumen'}</span>
              </div>
              <p className="font-prose text-[16px] text-[var(--ink)] leading-relaxed whitespace-pre-line">
                {summaryText}
              </p>
            </div>
          )}

          {/* JEL Classification */}
          {paper.jel && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--signal)] font-semibold">
                <Bookmark className="h-3.5 w-3.5" />
                <span>{currentLang === 'en' ? 'JEL Classification' : 'Clasificación JEL'}</span>
              </div>
              <div className="p-2.5 rounded bg-[var(--paper-sunk)] border border-[var(--rule)] font-mono text-xs text-[var(--ink)]">
                {paper.jel}
              </div>
            </div>
          )}

          {/* GitHub Repository Box */}
          {paper.githubUrl && (
            <div className="p-4 rounded bg-[var(--paper-sunk)] border border-[var(--rule-strong)] space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--ink)] font-semibold">
                  <GitBranch className="h-4 w-4 text-[var(--signal)]" />
                  <span>{currentLang === 'en' ? 'GitHub Code & Replication Repository' : 'Repositorio de GitHub & Código'}</span>
                </div>
                <a
                  href={paper.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signal-link text-xs font-mono font-medium inline-flex items-center gap-1"
                >
                  <span>{currentLang === 'en' ? 'Open Repo' : 'Abrir Repo'}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <p className="text-xs font-sans text-[var(--ink-3)]">
                {currentLang === 'en'
                  ? 'Access open-source econometric scripts, replication routines, datasets, and computational models.'
                  : 'Accede a los scripts econométricos de código abierto, rutinas de replicación, conjuntos de datos y modelos computacionales.'}
              </p>
              <div className="pt-1">
                <a
                  href={paper.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[var(--signal)] hover:underline break-all"
                >
                  {paper.githubUrl}
                </a>
              </div>
            </div>
          )}

          {/* Full Citation Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--ink-3)]">
                {currentLang === 'en' ? 'Citation' : 'Cita Bibliográfica'}
              </span>
              <button
                type="button"
                onClick={handleCopyCitation}
                className="text-xs font-mono inline-flex items-center gap-1 text-[var(--ink-2)] hover:text-[var(--signal)] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {currentLang === 'en' ? 'Copied' : 'Copiado'}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>{currentLang === 'en' ? 'Copy Citation' : 'Copiar Cita'}</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3 rounded bg-[var(--paper-raised)] border border-[var(--rule)] text-xs font-mono text-[var(--ink-2)] leading-relaxed select-all">
              {paper.citation}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {paper.url && (
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold bg-[var(--signal)] text-white hover:bg-[var(--signal-lift)] transition-colors rounded-xs"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>
                  {paper.type === 'book'
                    ? (currentLang === 'en' ? 'View Book (Amazon)' : 'Ver Libro (Amazon)')
                    : (currentLang === 'en' ? 'Read Paper / Publication' : 'Leer Publicación / DOI')}
                </span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}

            {paper.githubUrl && (
              <a
                href={paper.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider text-[var(--ink)] hover:text-[var(--signal)] border border-[var(--rule-strong)] hover:border-[var(--signal)] transition-colors rounded-xs"
              >
                <GitBranch className="h-3.5 w-3.5" />
                <span>{currentLang === 'en' ? 'GitHub' : 'GitHub'}</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-[var(--ink-3)] hover:text-[var(--ink)] px-3 py-1.5 cursor-pointer"
          >
            {currentLang === 'en' ? 'Close' : 'Cerrar'}
          </button>
        </div>
      </div>
    </div>
  );
};
