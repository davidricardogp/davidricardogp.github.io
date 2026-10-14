import React from 'react';
import { Maximize2, BookOpen } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';
import webEngraving from '../assets/images/gustave_dore_inferno_canto4_web.jpg';

interface EngravingPlateProps {
  currentLang: 'en' | 'es';
  onOpenArtworkModal: () => void;
}

export const EngravingPlate: React.FC<EngravingPlateProps> = ({ currentLang, onOpenArtworkModal }) => {
  const artwork = DAVID_DATA.artwork;

  return (
    <figure
      className="mb-8 space-y-3"
      aria-labelledby="engraving-plate-caption"
    >
      {/* Plate Header Label */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--ink-3)] flex-wrap gap-y-1">
        <span className="uppercase tracking-widest text-[var(--signal)] font-semibold flex items-center gap-1.5 text-[10.5px] sm:text-xs">
          <BookOpen className="h-3.5 w-3.5 shrink-0" />
          <span>{currentLang === 'en' ? 'Plate XII · Academic Ex Libris' : 'Lámina XII · Ex Libris Académico'}</span>
        </span>
        <span className="text-[10px] sm:text-[11px]">
          {artwork.year} &middot; {currentLang === 'en' ? 'Paris, Hachette' : 'París, Hachette'}
        </span>
      </div>

      {/* Engraving Artwork Display */}
      <div
        onClick={onOpenArtworkModal}
        className="group relative cursor-pointer overflow-hidden rounded border border-[var(--rule)] bg-[var(--paper-2)] shadow-xs hover:border-[var(--signal)] transition-all"
        title={currentLang === 'en' ? 'Click to inspect engraving in high resolution' : 'Haz clic para ampliar el grabado en alta resolución'}
      >
        <img
          src={webEngraving}
          alt={currentLang === 'en' ? artwork.title : artwork.titleEs}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          loading="eager"
        />

        {/* Hover zoom badge */}
        <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm pointer-events-none">
          <Maximize2 className="h-3 w-3" />
          <span>{currentLang === 'en' ? 'Expand' : 'Ampliar'}</span>
        </div>
      </div>

      {/* Clean Scholarly Caption: Title, Artist, Engraver & Edition */}
      <figcaption id="engraving-plate-caption" className="space-y-1 text-xs leading-relaxed text-[var(--ink-2)]">
        <p className="font-serif italic text-sm text-[var(--ink)] font-semibold">
          {currentLang === 'en' ? artwork.title : artwork.titleEs}
        </p>
        <p className="font-mono text-[11px] text-[var(--ink-2)] mt-0.5">
          <span className="font-semibold text-[var(--ink)]">{artwork.artist}</span> ({artwork.artistLifespan}),{' '}
          {currentLang === 'en' ? 'engraved by ' : 'grabado en madera por '}
          <span className="font-medium text-[var(--ink)]">{artwork.engraver}</span>.{' '}
          {currentLang === 'en'
            ? 'Published in Dante Alighieri, L’Enfer (Paris: Librairie de L. Hachette et Cie, 1861).'
            : 'Publicado en Dante Alighieri, L’Enfer (París: Librairie de L. Hachette et Cie, 1861).'}
        </p>
      </figcaption>
    </figure>
  );
};
