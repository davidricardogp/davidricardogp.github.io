import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, ZoomIn, ZoomOut, Maximize2, BookOpen, MapPin, Landmark, Quote } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';
import webEngraving from '../assets/images/gustave_dore_inferno_canto4_web.jpg';
import fullEngraving from '../assets/images/gustave_dore_inferno_canto4.jpg';

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'en' | 'es';
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [activeTab, setActiveTab] = useState<'view' | 'archives' | 'context'>('view');
  const [copiedApa, setCopiedApa] = useState(false);
  const [useFullRes, setUseFullRes] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const artwork = DAVID_DATA.artwork;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen) return null;

  const handleCopyApa = () => {
    navigator.clipboard.writeText(artwork.citations.apa);
    setCopiedApa(true);
    setTimeout(() => setCopiedApa(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="artwork-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[var(--paper)] text-[var(--ink)] border border-[var(--rule)] rounded-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-3.5 sm:p-5 border-b border-[var(--rule)] bg-[var(--paper-2)]">
          <div className="pr-4 sm:pr-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--signal)] font-medium mb-1">
              <span>{currentLang === 'en' ? artwork.plate : artwork.plateEs}</span>
              <span>&middot;</span>
              <span>{artwork.year}</span>
            </div>
            <h2 id="artwork-modal-title" className="text-base sm:text-lg font-serif font-semibold text-[var(--ink)] leading-snug">
              {currentLang === 'en' ? artwork.title : artwork.titleEs}
            </h2>
            <p className="text-xs font-mono text-[var(--ink-3)] mt-0.5">
              {artwork.artist} ({artwork.artistLifespan}) &middot; {currentLang === 'en' ? artwork.engraverRole : artwork.engraverRoleEs}: {artwork.engraver}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[var(--ink-3)] hover:text-[var(--ink)] hover:bg-[var(--rule)] transition-colors cursor-pointer shrink-0"
            aria-label={currentLang === 'en' ? 'Close modal' : 'Cerrar modal'}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs — Only Engraving Inspection, Archival Repositories, Literary Context */}
        <div className="flex border-b border-[var(--rule)] px-3 sm:px-4 bg-[var(--paper)] text-xs font-mono overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('view')}
            className={`py-2.5 px-3 border-b-2 font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'view'
                ? 'border-[var(--signal)] text-[var(--signal)] font-semibold'
                : 'border-transparent text-[var(--ink-2)] hover:text-[var(--ink)]'
            }`}
          >
            {currentLang === 'en' ? 'Engraving Inspection' : 'Inspección del Grabado'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('archives')}
            className={`py-2.5 px-3 border-b-2 font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'archives'
                ? 'border-[var(--signal)] text-[var(--signal)] font-semibold'
                : 'border-transparent text-[var(--ink-2)] hover:text-[var(--ink)]'
            }`}
          >
            {currentLang === 'en' ? 'Archival Repositories' : 'Repositorios de Archivo'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('context')}
            className={`py-2.5 px-3 border-b-2 font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'context'
                ? 'border-[var(--signal)] text-[var(--signal)] font-semibold'
                : 'border-transparent text-[var(--ink-2)] hover:text-[var(--ink)]'
            }`}
          >
            {currentLang === 'en' ? 'Literary Context' : 'Contexto Literario'}
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-3.5 sm:p-6 space-y-5">
          {activeTab === 'view' && (
            <div className="space-y-4">
              {/* Controls bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--ink-3)] bg-[var(--paper-2)] p-2.5 rounded border border-[var(--rule)]">
                <div className="flex items-center gap-2">
                  <span>Zoom:</span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
                    disabled={zoomLevel <= 1}
                    className="p-1 rounded hover:bg-[var(--paper)] disabled:opacity-40 cursor-pointer"
                    title={currentLang === 'en' ? 'Zoom out' : 'Alejar'}
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-[var(--ink)]">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                    disabled={zoomLevel >= 2.5}
                    className="p-1 rounded hover:bg-[var(--paper)] disabled:opacity-40 cursor-pointer"
                    title={currentLang === 'en' ? 'Zoom in' : 'Acercar'}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  {zoomLevel > 1 && (
                    <button
                      type="button"
                      onClick={() => setZoomLevel(1)}
                      className="ml-2 text-[11px] underline text-[var(--signal)] cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Reset' : 'Restablecer'}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setUseFullRes((prev) => !prev)}
                    className="text-[11px] text-[var(--ink)] hover:text-[var(--signal)] underline cursor-pointer"
                  >
                    {useFullRes
                      ? (currentLang === 'en' ? 'Using Master Scan (6.4 MB)' : 'Usando Escaneo Maestro (6.4 MB)')
                      : (currentLang === 'en' ? 'Load Master Scan (6.4 MB)' : 'Cargar Escaneo Maestro (6.4 MB)')}
                  </button>
                  <a
                    href={fullEngraving}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] text-[var(--signal)] hover:underline"
                  >
                    <Maximize2 className="h-3 w-3" />
                    <span>{currentLang === 'en' ? 'Full Image' : 'Imagen Completa'}</span>
                  </a>
                </div>
              </div>

              {/* Image Frame */}
              <div className="relative w-full max-h-[52vh] sm:max-h-[58vh] overflow-auto bg-black/90 rounded border border-[var(--rule)] flex items-center justify-center p-2">
                <img
                  src={useFullRes ? fullEngraving : webEngraving}
                  alt={currentLang === 'en' ? artwork.title : artwork.titleEs}
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
                  className="transition-transform duration-150 max-h-[48vh] sm:max-h-[54vh] w-auto object-contain mx-auto rounded-sm shadow-md"
                />
              </div>

              {/* Direct Caption & Primary Archive */}
              <div className="text-xs font-mono text-[var(--ink-2)] border-l-2 border-[var(--signal)] pl-3 py-1 space-y-1 bg-[var(--paper-2)]/60 rounded-r">
                <p className="font-serif italic text-sm text-[var(--ink)] font-semibold">
                  {currentLang === 'en' ? artwork.title : artwork.titleEs}
                </p>
                <p>
                  <span className="text-[var(--ink-3)]">{currentLang === 'en' ? 'Drawn by: ' : 'Dibujo: '}</span>
                  <span className="font-medium text-[var(--ink)]">{artwork.artist}</span>
                  <span className="text-[var(--ink-3)]"> &middot; {currentLang === 'en' ? 'Engraved by: ' : 'Grabado por: '}</span>
                  <span className="font-medium text-[var(--ink)]">{artwork.engraver}</span>
                  <span className="text-[var(--ink-3)]"> (1861)</span>
                </p>
                <p>
                  <span className="text-[var(--ink-3)]">{currentLang === 'en' ? 'Primary Archive: ' : 'Archivo Principal: '}</span>
                  <span className="font-semibold text-[var(--signal)]">
                    {currentLang === 'en' ? artwork.locationSummary : artwork.locationSummaryEs}
                  </span>
                </p>

                {/* Scholarly Citation (Single APA Citation placed directly below Primary Archive) */}
                <div className="mt-3 pt-2.5 border-t border-[var(--rule)] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--ink-3)] font-semibold">
                      {currentLang === 'en' ? 'Scholarly Citation (APA 7th):' : 'Cita Académica (APA 7.ª ed.):'}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyApa}
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--signal)] hover:underline cursor-pointer"
                    >
                      {copiedApa ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      <span>
                        {copiedApa
                          ? (currentLang === 'en' ? 'Copied' : 'Copiado')
                          : (currentLang === 'en' ? 'Copy APA' : 'Copiar APA')}
                      </span>
                    </button>
                  </div>
                  <p className="font-serif text-[12.5px] leading-relaxed text-[var(--ink)] bg-[var(--paper)] p-2 rounded border border-[var(--rule)]">
                    {artwork.citations.apa}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'archives' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-[var(--signal)]" />
                  <span>{currentLang === 'en' ? 'Archival Repositories' : 'Repositorios de Archivo'}</span>
                </h3>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  {currentLang === 'en'
                    ? 'Original impressions and high-resolution master records of Gustave Doré’s master wood engraving for Inferno Canto IV (1861 Hachette first edition folio) are permanently preserved in the following official public repositories and national collections:'
                    : 'Las impresiones originales y registros de alta resolución del grabado maestro en madera de testa para el Infierno Canto IV (primera edición folio de Hachette, 1861) se conservan de forma permanente en los siguientes repositorios de archivo y colecciones nacionales oficiales:'}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {artwork.locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[var(--paper-2)] border border-[var(--rule)] rounded text-xs space-y-2 hover:border-[var(--signal)] transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5 font-semibold text-[var(--ink)] font-label text-sm">
                          <MapPin className="h-3.5 w-3.5 text-[var(--signal)] shrink-0" />
                          <span>{currentLang === 'en' ? loc.institution : loc.institutionEs}</span>
                          <span className="text-xs text-[var(--ink-3)] font-normal font-mono">({loc.city})</span>
                        </div>
                        <p className="text-[var(--ink-2)] mt-0.5">
                          {currentLang === 'en' ? loc.department : loc.departmentEs}
                        </p>
                      </div>

                      {loc.url && (
                        <a
                          href={loc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--paper)] border border-[var(--rule)] font-mono text-[11px] text-[var(--signal)] hover:bg-[var(--signal)] hover:text-white transition-colors cursor-pointer w-fit"
                        >
                          <span>{currentLang === 'en' ? 'Open Archival Record' : 'Abrir Registro Oficial'}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>

                    <div className="bg-[var(--paper)] p-2 rounded border border-[var(--rule)] font-mono text-[11px] text-[var(--ink-2)]">
                      <span className="text-[var(--ink-3)] uppercase tracking-wider">{currentLang === 'en' ? 'Classification / Shelfmark: ' : 'Signatura / Registro: '}</span>
                      <span className="font-semibold text-[var(--ink)]">{loc.identifier}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Physical specifications */}
              <div className="p-3 bg-[var(--paper-2)] border border-[var(--rule)] rounded text-xs space-y-1.5 font-mono text-[var(--ink-2)]">
                <div className="font-semibold text-[var(--ink)] text-[11px] uppercase tracking-wider">
                  {currentLang === 'en' ? 'Physical Specifications & Plate Mark' : 'Especificaciones Físicas y Huella del Grabado'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-[var(--ink-3)]">{currentLang === 'en' ? 'Medium: ' : 'Técnica: '}</span>
                    <span>{currentLang === 'en' ? artwork.medium : artwork.mediumEs}</span>
                  </div>
                  <div>
                    <span className="text-[var(--ink-3)]">{currentLang === 'en' ? 'Dimensions: ' : 'Dimensiones: '}</span>
                    <span>{artwork.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-[var(--ink-3)]">{currentLang === 'en' ? 'Original Publication: ' : 'Publicación original: '}</span>
                    <span>{artwork.publisher} ({artwork.publicationPlace}, {artwork.year})</span>
                  </div>
                  <div>
                    <span className="text-[var(--ink-3)]">{currentLang === 'en' ? 'Signatures in plate: ' : 'Firmas en plancha: '}</span>
                    <span>G. Doré (inf. izq.), Pannemaker (inf. der.)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'context' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[var(--signal)]" />
                  <span>{currentLang === 'en' ? 'Intellectual & Literary Significance' : 'Significado Intelectual y Literario'}</span>
                </h3>
                <p className="text-sm font-prose leading-relaxed text-[var(--ink-2)]">
                  {currentLang === 'en' ? artwork.context : artwork.contextEs}
                </p>
              </div>

              {/* Poetic verse */}
              <div className="p-3.5 sm:p-4 bg-[var(--paper-2)] border border-[var(--rule)] rounded space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--signal)] font-medium">
                  <Quote className="h-3.5 w-3.5" />
                  <span>{artwork.literaryPassage.work} &middot; {artwork.literaryPassage.canto}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif italic">
                  <div className="space-y-1">
                    <span className="font-mono not-italic text-[10px] uppercase text-[var(--ink-3)] block mb-1">
                      Originale (Italiano):
                    </span>
                    <pre className="whitespace-pre-wrap font-serif text-[13px] leading-relaxed text-[var(--ink)]">
                      {artwork.literaryPassage.italian}
                    </pre>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono not-italic text-[10px] uppercase text-[var(--ink-3)] block mb-1">
                      {currentLang === 'en' ? 'Translation (English):' : 'Traducción (Español):'}
                    </span>
                    <pre className="whitespace-pre-wrap font-serif text-[13px] leading-relaxed text-[var(--ink-2)]">
                      {currentLang === 'en' ? artwork.literaryPassage.english : artwork.literaryPassage.spanish}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-[var(--rule)] bg-[var(--paper-2)] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="text-[var(--ink-3)] text-[11px]">
            {currentLang === 'en'
              ? 'Public domain work (1861). Master preservation scans in official national libraries.'
              : 'Obra en dominio público (1861). Preservación oficial en archivos y bibliotecas nacionales.'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 bg-[var(--ink)] text-[var(--paper)] rounded hover:opacity-90 transition-opacity cursor-pointer text-xs font-mono font-medium"
          >
            {currentLang === 'en' ? 'Close' : 'Cerrar'}
          </button>
        </div>
      </div>
    </div>
  );
};
