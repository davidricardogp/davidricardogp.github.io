import React from 'react';
import { Moon, Sun } from 'lucide-react';
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
  const navItems = currentLang === 'en'
    ? [
        { href: '#research', label: 'research' },
        { href: '#experience', label: 'experience' },
        { href: '#education', label: 'education' },
        { href: '#talks', label: 'talks', hideOnMobile: true },
        { href: '#recognition', label: 'recognition', hideOnMobile: true },
        { href: '#ask', label: 'ask' },
        { href: '#contact', label: 'contact' },
      ]
    : [
        { href: '#research', label: 'investigación' },
        { href: '#experience', label: 'experiencia' },
        { href: '#education', label: 'educación' },
        { href: '#talks', label: 'charlas', hideOnMobile: true },
        { href: '#recognition', label: 'premios', hideOnMobile: true },
        { href: '#ask', label: 'pregúntame' },
        { href: '#contact', label: 'contacto' },
      ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur-xs transition-colors font-data text-[11px] tracking-[0.08em] uppercase">
      <div className="mx-auto flex h-13 max-w-5xl items-center justify-between px-4 sm:px-8">
        {/* Wordmark matching Louis Yiven Zhu: font-data uppercase, 600 weight */}
        <p className="m-0 font-semibold text-[var(--ink)] tracking-[0.08em] uppercase whitespace-nowrap">
          <a href="#top" className="hover:text-[var(--signal)] transition-colors">
            {DAVID_DATA.name}
          </a>
        </p>

        {/* Navigation links matching Louis Zhu uppercase font-data */}
        <nav className="flex items-center gap-3 sm:gap-5 text-[11px] font-data tracking-[0.08em] uppercase text-[var(--ink-2)]" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-[var(--signal)] pb-0.5 border-b border-transparent hover:border-[var(--signal)] transition-colors ${item.hideOnMobile ? 'hidden md:inline' : ''}`}
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

          {/* Theme Invert Button matching Louis Zhu icon-btn */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-1 rounded border border-[var(--rule)] text-[var(--ink-2)] hover:text-[var(--signal)] hover:border-[var(--signal)] transition-colors cursor-pointer ml-0.5"
            aria-label="Invert colours"
          >
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
        </nav>
      </div>
    </header>
  );
};
