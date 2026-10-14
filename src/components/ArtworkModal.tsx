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
  const [activeTab, setActiveTab] = useState<'view' | 'citation' | 'context' | 'archives'>('view');
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
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

  const handleCopy = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
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
        <div className="flex items-start justify-between p-4 sm:p-5 border-b border-[var(--rule)] bg-[var(--paper-2)]">
          <div className="pr-6">
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
            className="p-1.5 rounded text-[var(--ink-3)] hover:text-[var(--ink)] hover:bg-[var(--rule)] transition-colors cursor-pointer"
            aria-label={currentLang === 'en' ? 'Close modal' : 'Cerrar modal'}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[var(--rule)] px-4 bg-[var(--paper)] text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('view')}
            className={`py-2.5 px-3 border-b-2 font-medium transition-colors cursor-pointer ${
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
            className={`py-2.5 px-3 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'archives'
                ? 'border-[var(--signal)] text-[var(--signal)] font-semibold'
                : 'border-transparent text-[var(--ink-2)] hover:text-[var(--ink)]'
            }`}
          >
            {currentLang === 'en' ? 'Where It Is Found (Archives)' : 'Dónde se encuentra (Archivos)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('citation')}
            className={`py-2.5 px-3 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'citation'
                ? 'border-[var(--signal)] text-[var(--signal)] font-semibold'
                : 'border-transparent text-[var(--ink-2)] hover:text-[var(--ink)]'
            }`}
          >
            {currentLang === 'en' ? 'Scholarly Citations' : 'Citas Académicas'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('context')}
            className={`py-2.5 px-3 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'context'
                ? 'border-[var(--signal)] text-[var(--signal)] font-semibold'
                : 'border-transparent text-[var(--ink-2)] hover:text-[var(--ink)]'
            }`}
          >
            {currentLang === 'en' ? 'Literary Context' : 'Contexto Literario'}
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          {activeTab === 'view' && (
            <div className="space-y-4">
              {/* Controls bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[var(--ink-3)] bg-[var(--paper-2)] p-2.5 rounded border border-[var(--rule)]">
                <div className="flex items-center gap-2">
                  <span>{currentLang === 'en' ? 'Zoom:' : 'Zoom:'}</span>
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
                    className="inline-flex items-center gap-1 text-[11px] text-[var(--signal)] hover:underline"
                  >
                    <Maximize2 className="h-3 w-3" />
                    <span>{currentLang === 'en' ? 'Full Image' : 'Imagen Completa'}</span>
                  </a>
                </div>
              </div>

              {/* Image Frame */}
              <div className="relative w-full max-h-[58vh] overflow-auto bg-black/90 rounded border border-[var(--rule)] flex items-center justify-center p-2">
                <img
                  src={useFullRes ? fullEngraving : webEngraving}
                  alt={currentLang === 'en' ? artwork.title : artwork.titleEs}
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
                  className="transition-transform duration-150 max-h-[54vh] w-auto object-contain mx-auto rounded-sm shadow-md"
                />
              </div>

              {/* Direct Museum Caption directly below view */}
              <div className="text-xs font-mono text-[var(--ink-2)] border-l-2 border-[var(--signal)] pl-3 py-1 space-y-1">
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
              </div>
            </div>
          )}

          {activeTab === 'archives' && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[var(--ink)] flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-[var(--signal)]" />
                  <span>{currentLang === 'en' ? 'Where It Is Located & Archival Repositories' : 'Dónde Se Encuentra y Archivos Oficiales'}</span>
                </h3>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  {currentLang === 'en'
                    ? 'Original impressions of Gustave Doré’s master wood engraving for Inferno Canto IV (1861 Hachette first edition folio) are permanently preserved in the print and rare-book cabinets of the following premier cultural institutions:'
                    : 'Las impresiones originales de este grabado maestro en madera de testa para el Infierno Canto IV (primera edición folio de Hachette, 1861) se conservan de forma permanente en los departamentos de estampas y fondos raros de las siguientes instituciones:'}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {artwork.locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[var(--paper-2)] border border-[var(--rule)] rounded text-xs space-y-2 hover:border-[var(--signal)] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
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
                          className="shrink-0 inline-flex items-center gap-1 font-mono text-[11px] text-[var(--signal)] hover:underline"
                        >
                          <span>{currentLang === 'en' ? 'Catalog / Digital Record' : 'Catálogo / Ficha'}</span>
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

          {activeTab === 'citation' && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[var(--ink)]">
                  {currentLang === 'en' ? 'Academic Citations Ready to Copy' : 'Citas Académicas Listas para Copiar'}
                </h3>
                <p className="text-xs text-[var(--ink-2)]">
                  {currentLang === 'en'
                    ? 'Formatted according to standard scholarly manuals (Chicago 17th, APA 7th, MLA 9th, and BibTeX):'
                    : 'Formateadas según las normas académicas estándar (Chicago 17.ª, APA 7.ª, MLA 9.ª y BibTeX):'}
                </p>
              </div>

              {/* Chicago */}
              <div className="p-3 bg-[var(--paper-2)] border border-[var(--rule)] rounded text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-semibold text-[var(--ink)] text-[11px] uppercase tracking-wider">
                    Chicago Manual of Style (17th ed., Notes & Bibliography)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(artwork.citations.chicago, 'chicago')}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--signal)] hover:underline cursor-pointer"
                  >
                    {copiedFormat === 'chicago' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedFormat === 'chicago' ? (currentLang === 'en' ? 'Copied' : 'Copiado') : (currentLang === 'en' ? 'Copy Chicago' : 'Copiar Chicago')}</span>
                  </button>
                </div>
                <p className="font-serif text-[13px] leading-relaxed text-[var(--ink)] pl-3 border-l-2 border-[var(--rule)]">
                  {artwork.citations.chicago}
                </p>
              </div>

              {/* APA */}
              <div className="p-3 bg-[var(--paper-2)] border border-[var(--rule)] rounded text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-semibold text-[var(--ink)] text-[11px] uppercase tracking-wider">
                    APA (7th ed.)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(artwork.citations.apa, 'apa')}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--signal)] hover:underline cursor-pointer"
                  >
                    {copiedFormat === 'apa' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedFormat === 'apa' ? (currentLang === 'en' ? 'Copied' : 'Copiado') : (currentLang === 'en' ? 'Copy APA' : 'Copiar APA')}</span>
                  </button>
                </div>
                <p className="font-serif text-[13px] leading-relaxed text-[var(--ink)] pl-3 border-l-2 border-[var(--rule)]">
                  {artwork.citations.apa}
                </p>
              </div>

              {/* MLA */}
              <div className="p-3 bg-[var(--paper-2)] border border-[var(--rule)] rounded text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-semibold text-[var(--ink)] text-[11px] uppercase tracking-wider">
                    MLA (9th ed.)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(artwork.citations.mla, 'mla')}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--signal)] hover:underline cursor-pointer"
                  >
                    {copiedFormat === 'mla' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedFormat === 'mla' ? (currentLang === 'en' ? 'Copied' : 'Copiado') : (currentLang === 'en' ? 'Copy MLA' : 'Copiar MLA')}</span>
                  </button>
                </div>
                <p className="font-serif text-[13px] leading-relaxed text-[var(--ink)] pl-3 border-l-2 border-[var(--rule)]">
                  {artwork.citations.mla}
                </p>
              </div>

              {/* BibTeX */}
              <div className="p-3 bg-[var(--paper-2)] border border-[var(--rule)] rounded text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-semibold text-[var(--ink)] text-[11px] uppercase tracking-wider">
                    BibTeX Entry
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(artwork.citations.bibtex, 'bibtex')}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--signal)] hover:underline cursor-pointer"
                  >
                    {copiedFormat === 'bibtex' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedFormat === 'bibtex' ? (currentLang === 'en' ? 'Copied' : 'Copiado') : (currentLang === 'en' ? 'Copy BibTeX' : 'Copiar BibTeX')}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] p-2 bg-[var(--paper)] rounded border border-[var(--rule)] overflow-x-auto text-[var(--ink-2)]">
                  {artwork.citations.bibtex}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'context' && (
            <div className="space-y-5">
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
              <div className="p-4 bg-[var(--paper-2)] border border-[var(--rule)] rounded space-y-3">
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
          <span className="text-[var(--ink-3)]">
            {currentLang === 'en'
              ? 'Public domain work (1861). Master scan preserved in national libraries.'
              : 'Obra en dominio público (1861). Registro y conservación en bibliotecas nacionales.'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 bg-[var(--ink)] text-[var(--paper)] rounded hover:opacity-90 transition-opacity cursor-pointer text-xs font-mono font-medium"
          >
            {currentLang === 'en' ? 'Close' : 'Cerrar'}
          </button>
        </div>
      </div>
    </div>
  );
};
