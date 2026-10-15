import React, { useState } from 'react';
import { FileText, ArrowDown, MapPin, Phone, Download, Copy, Check } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';
import { EngravingPlate } from './EngravingPlate';

interface HeroProps {
  currentLang: 'en' | 'es';
  onOpenCvModal: () => void;
  onOpenArtworkModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenCvModal, onOpenArtworkModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(DAVID_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <header
      className="min-h-auto lg:min-h-[calc(100vh-3.5rem)] flex flex-col justify-between py-6 sm:py-8 md:py-10 lg:py-14 border-b border-[var(--rule)]"
      id="intro"
    >
      {/* Top / Main Hero Content */}
      <div className="hero max-w-2xl my-auto">
        {/* Gustave Doré Engraving Plate — Placed above BIO */}
        <EngravingPlate
          currentLang={currentLang}
          onOpenArtworkModal={onOpenArtworkModal}
        />

        {/* Eyebrow */}
        <p className="eyebrow mb-4 sm:mb-6 mt-6 sm:mt-10 text-[10.5px] sm:text-[11px] leading-relaxed">
          <span>{currentLang === 'en' ? DAVID_DATA.affiliation : DAVID_DATA.affiliationEs}</span>
          <span className="eyebrow-sep" aria-hidden="true">/</span>
          <span>{currentLang === 'en' ? DAVID_DATA.department : DAVID_DATA.departmentEs}</span>
        </p>

        {/* BIO heading */}
        <h1 className="sec-h mb-4 sm:mb-6 text-xl sm:text-2xl">
          <span className="n">00</span>
          <span>BIO</span>
        </h1>

        {/* Bio Paragraphs - Exact user text */}
        <div className="space-y-4 mb-8">
          <p className="lede">
            {currentLang === 'en' ? (
              <>
                I am currently a predoctoral researcher in the Entrepreneurship Department at{' '}
                <a
                  href="https://www.iese.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  IESE Business School
                </a>
                .
              </>
            ) : (
              <>
                Actualmente soy investigador predoctoral en el Departamento de Emprendimiento de{' '}
                <a
                  href="https://www.iese.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  IESE Business School
                </a>
                .
              </>
            )}
          </p>

          <p className="hero-more">
            {currentLang === 'en'
              ? 'My work focuses on applied research in institutional entrepreneurship.'
              : 'Mi trabajo se centra en la investigación aplicada sobre emprendimiento institucional.'}
          </p>

          <p className="hero-more">
            {currentLang === 'en' ? (
              <>
                Prior to joining IESE, I earned a Bachelor of Science in Economics from{' '}
                <a
                  href="https://www.udep.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  University of Piura
                </a>
                . I worked on building and raising funds for a startup. I grew up in Piura, Peru.
              </>
            ) : (
              <>
                Antes de incorporarme a IESE, obtuve una licenciatura en Economía por la{' '}
                <a
                  href="https://www.udep.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  Universidad de Piura
                </a>
                . Trabajé en el desarrollo y levantamiento de fondos para una startup. Crecí en Piura, Perú.
              </>
            )}
          </p>
        </div>

        {/* Utility links row: Curriculum Vitae, ORCID, LinkedIn, Google Scholar, GitHub (No email in BIO) */}
        <div className="utility flex flex-wrap gap-x-3.5 sm:gap-x-5 gap-y-2 text-[13.5px] sm:text-[15px]">
          <button
            type="button"
            onClick={onOpenCvModal}
            className="signal-link cursor-pointer inline-flex items-center gap-1.5"
          >
            <FileText className="h-3.5 w-3.5 inline" />
            <span>Curriculum Vitae</span>
          </button>
          <a
            href={DAVID_DATA.contact.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ext"
          >
            ORCID
          </a>
          <a
            href={DAVID_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ext"
          >
            LinkedIn
          </a>
          <a
            href={DAVID_DATA.contact.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ext"
          >
            Google Scholar
          </a>
          <a
            href={DAVID_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link ext"
          >
            GitHub
          </a>
        </div>

        {/* Contact Details placed directly beneath curriculum & utility links — Clean editorial style without a box ("sin caja") and without repeating GitHub, LinkedIn, Google Scholar */}
        <div id="contact" className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--rule)]">
          <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--ink)] mb-4">
            {currentLang === 'en' ? 'Contact' : 'Contacto'}
          </h2>

          <div className="space-y-4 text-[14px] font-prose leading-relaxed text-[var(--ink-2)]">
            {/* Institution & Department */}
            <div>
              <p className="font-semibold text-[var(--ink)] font-label">
                IESE Business School
              </p>
              <p className="text-[var(--ink-2)]">
                {currentLang === 'en' ? 'Entrepreneurship Department' : 'Departamento de Emprendimiento'}
              </p>
              <p className="text-[var(--ink-3)] text-xs">
                {currentLang === 'en' ? 'Entrepreneurship & Innovation Center' : 'Centro de Emprendimiento e Innovación'}
              </p>
            </div>

            {/* Address */}
            <div className="text-xs font-mono text-[var(--ink-2)] space-y-0.5">
              <p>Av. de Pearson, 21, Les Corts</p>
              <p>08034 Barcelona</p>
              <p>{currentLang === 'en' ? 'Office E119, South Campus' : 'Despacho E119, Campus Sur'}</p>
            </div>

            {/* Direct Contact (Email, Tel, CV) */}
            <div className="space-y-2 text-xs font-mono pt-1 text-[var(--ink-2)]">
              {/* Email with mailto + one-click copy feedback */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[var(--ink-3)]">Email:</span>
                <a
                  href={`mailto:${DAVID_DATA.contact.email}`}
                  className="academic-link text-[var(--ink)] hover:text-[var(--signal)] font-semibold break-all"
                >
                  {DAVID_DATA.contact.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] text-[var(--ink-3)] hover:text-[var(--signal)] px-1.5 py-0.5 rounded cursor-pointer transition-colors"
                  title={currentLang === 'en' ? 'Copy email address' : 'Copiar correo'}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {currentLang === 'en' ? 'Copied' : 'Copiado'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>{currentLang === 'en' ? 'Copy' : 'Copiar'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tel */}
              <p className="break-words">
                <span className="text-[var(--ink-3)]">Tel: </span>
                <a
                  href={`tel:${DAVID_DATA.contact.tel.replace(/\s+/g, '')}`}
                  className="text-[var(--ink)] hover:text-[var(--signal)]"
                >
                  {DAVID_DATA.contact.tel} ({DAVID_DATA.contact.ext})
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen bottom subtle cue matching Louis Zhu */}
      <div className="pt-6 sm:pt-8">
        <a
          href="#research"
          className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--ink-3)] hover:text-[var(--signal)] transition-colors"
        >
          <span>{currentLang === 'en' ? 'Scroll down' : 'Desplázate'}</span>
          <span className="hidden sm:inline">
            {currentLang === 'en' ? ', or press 1–6' : ', o presiona 1–6'}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[var(--ink-3)]">
            <kbd className="px-1.5 py-0.5 rounded bg-[var(--paper-sunk)] border border-[var(--rule)] font-mono text-[10px] text-[var(--ink-2)] shadow-xs">1</kbd>
            <span>–</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[var(--paper-sunk)] border border-[var(--rule)] font-mono text-[10px] text-[var(--ink-2)] shadow-xs">6</kbd>
          </span>
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 text-[var(--signal)]" />
        </a>
      </div>
    </header>
  );
};
