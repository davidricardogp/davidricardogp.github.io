import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';

export type SectionId = '00' | '01' | '02' | '03' | '04' | '05';

interface TopbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  currentLang: 'en' | 'es';
  onToggleLang: () => void;
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  isDark,
  onToggleTheme,
  currentLang,
  onToggleLang,
  activeSection,
  onSelectSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId; label: string; n: string }[] =
    currentLang === 'en'
      ? [
          { id: '00', label: 'bio', n: '00' },
          { id: '01', label: 'research', n: '01' },
          { id: '02', label: 'experience', n: '02' },
          { id: '03', label: 'education', n: '03' },
          { id: '04', label: 'talks', n: '04' },
          { id: '05', label: 'recognition', n: '05' },
        ]
      : [
          { id: '00', label: 'bio', n: '00' },
          { id: '01', label: 'investigación', n: '01' },
          { id: '02', label: 'experiencia', n: '02' },
          { id: '03', label: 'educación', n: '03' },
          { id: '04', label: 'charlas', n: '04' },
          { id: '05', label: 'premios', n: '05' },
        ];

  const handleNavClick = (id: SectionId) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur-md transition-colors font-data text-[11px] tracking-[0.08em] uppercase">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-3.5 sm:px-8">
        {/* Wordmark: Click to return to 00 Bio */}
        <p className="m-0 font-semibold text-[var(--ink)] tracking-[0.08em] uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-[50vw] sm:max-w-none">
          <button
            type="button"
            onClick={() => handleNavClick('00')}
            className="hover:text-[var(--signal)] transition-colors text-left cursor-pointer"
          >
            <span className="hidden sm:inline">{DAVID_DATA.name}</span>
            <span className="sm:hidden text-[12px] tracking-normal font-semibold">
              David Ricardo Gonzales
            </span>
          </button>
        </p>

        {/* Desktop & Tablet Navigation tabs (md: and up) */}
        <nav
          className="hidden md:flex items-center gap-1.5 lg:gap-3 xl:gap-4 text-[10.5px] lg:text-[11px] font-data tracking-[0.08em] uppercase"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`pb-1 border-b-2 transition-colors cursor-pointer inline-flex items-center px-1.5 py-1 ${
                  isActive
                    ? 'border-[var(--signal)] text-[var(--signal)] font-semibold'
                    : 'border-transparent text-[var(--ink-2)] hover:text-[var(--ink)] hover:border-[var(--rule-strong)]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Explicit Language Segmented Toggle EN / ES */}
          <div className="flex items-center rounded border border-[var(--rule)] p-0.5 text-[10px] font-data ml-1 tracking-normal">
            <button
              type="button"
              onClick={() => {
                if (currentLang !== 'en') onToggleLang();
              }}
              className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[var(--ink)] text-[var(--paper)]'
                  : 'text-[var(--ink-3)] hover:text-[var(--ink)]'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentLang !== 'es') onToggleLang();
              }}
              className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-colors cursor-pointer ${
                currentLang === 'es'
                  ? 'bg-[var(--ink)] text-[var(--paper)]'
                  : 'text-[var(--ink-3)] hover:text-[var(--ink)]'
              }`}
              title="Español"
            >
              ES
            </button>
          </div>

          {/* Theme Invert Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-1 rounded border border-[var(--rule)] text-[var(--ink-2)] hover:text-[var(--signal)] hover:border-[var(--signal)] transition-colors cursor-pointer ml-0.5"
            aria-label="Invert colours"
          >
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
        </nav>

        {/* Mobile controls: Language, Theme, and Menu Drawer Button (shown only on mobile <md) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile/Tablet Language Toggle */}
          <div className="flex items-center rounded border border-[var(--rule)] p-0.5 text-[10px] font-data">
            <button
              type="button"
              onClick={() => {
                if (currentLang !== 'en') onToggleLang();
              }}
              className={`px-2 py-1 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[var(--ink)] text-[var(--paper)]'
                  : 'text-[var(--ink-3)] hover:text-[var(--ink)]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentLang !== 'es') onToggleLang();
              }}
              className={`px-2 py-1 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                currentLang === 'es'
                  ? 'bg-[var(--ink)] text-[var(--paper)]'
                  : 'text-[var(--ink-3)] hover:text-[var(--ink)]'
              }`}
            >
              ES
            </button>
          </div>

          {/* Mobile/Tablet Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-1.5 rounded border border-[var(--rule)] text-[var(--ink)] hover:text-[var(--signal)] transition-colors cursor-pointer"
            aria-label="Invert colours"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile/Tablet Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded border border-[var(--rule)] text-[var(--ink)] hover:text-[var(--signal)] transition-colors cursor-pointer flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--rule)] bg-[var(--paper)] px-4 py-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1 font-data text-xs tracking-wider" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center py-2.5 px-3 rounded text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[var(--paper-sunk)] text-[var(--signal)] font-semibold'
                      : 'text-[var(--ink)] hover:bg-[var(--paper-sunk)]'
                  }`}
                >
                  <span className="font-medium uppercase">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
