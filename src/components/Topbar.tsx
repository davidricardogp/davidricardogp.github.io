import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';

interface TopbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  currentLang: 'en' | 'es';
  onToggleLang: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  isDark,
  onToggleTheme,
  currentLang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = currentLang === 'en'
    ? [
        { href: '#research', label: 'research', n: '01' },
        { href: '#experience', label: 'experience', n: '02' },
        { href: '#education', label: 'education', n: '03' },
        { href: '#talks', label: 'talks', n: '04' },
        { href: '#recognition', label: 'recognition', n: '05' },
        { href: '#ask', label: 'ask', n: '06' },
        { href: '#contact', label: 'contact', n: '' },
      ]
    : [
        { href: '#research', label: 'investigación', n: '01' },
        { href: '#experience', label: 'experiencia', n: '02' },
        { href: '#education', label: 'educación', n: '03' },
        { href: '#talks', label: 'charlas', n: '04' },
        { href: '#recognition', label: 'premios', n: '05' },
        { href: '#ask', label: 'pregúntame', n: '06' },
        { href: '#contact', label: 'contacto', n: '' },
      ];

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur-md transition-colors font-data text-[11px] tracking-[0.08em] uppercase">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-3.5 sm:px-8">
        {/* Wordmark: Compact on mobile to avoid overflow, full on tablet/desktop */}
        <p className="m-0 font-semibold text-[var(--ink)] tracking-[0.08em] uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-[55vw] sm:max-w-none">
          <a href="#top" className="hover:text-[var(--signal)] transition-colors">
            <span className="hidden sm:inline">{DAVID_DATA.name}</span>
            <span className="sm:hidden text-[12px] tracking-normal font-semibold">David Ricardo Gonzales</span>
          </a>
        </p>

        {/* Desktop & Tablet Navigation links (md: and up) */}
        <nav className="hidden md:flex items-center gap-2.5 lg:gap-4 xl:gap-5 text-[10.5px] lg:text-[11px] font-data tracking-[0.08em] uppercase text-[var(--ink-2)]" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[var(--signal)] pb-0.5 border-b border-transparent hover:border-[var(--signal)] transition-colors"
            >
              {item.label}
            </a>
          ))}

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
        <div className="lg:hidden border-b border-[var(--rule)] bg-[var(--paper)] px-4 py-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1 font-data text-xs tracking-wider" aria-label="Mobile Navigation">
            <button
              type="button"
              onClick={() => handleMobileNavClick('#intro')}
              className="flex items-center gap-2.5 py-2.5 px-3 rounded text-left text-[var(--ink)] hover:bg-[var(--paper-sunk)] transition-colors cursor-pointer"
            >
              <span className="text-[var(--signal)] font-mono text-[10px]">00</span>
              <span className="font-medium uppercase">BIO</span>
            </button>
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleMobileNavClick(item.href)}
                className="flex items-center gap-2.5 py-2.5 px-3 rounded text-left text-[var(--ink)] hover:bg-[var(--paper-sunk)] transition-colors cursor-pointer"
              >
                {item.n && <span className="text-[var(--signal)] font-mono text-[10px]">{item.n}</span>}
                <span className="font-medium uppercase">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
