import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';

interface ContactSectionProps {
  currentLang: 'en' | 'es';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  return (
    <section className="py-12 border-b border-[var(--rule)]" id="contact">
      <div className="space-y-6">
        <div>
          <h2 className="sec-heading">
            <span className="n">07</span>
            <span>{currentLang === 'en' ? 'Contact' : 'Contacto'}</span>
          </h2>
        </div>

        <p className="text-[17px] font-prose text-[var(--ink-2)] leading-relaxed max-w-2xl">
          {currentLang === 'en'
            ? 'For academic inquiries, research collaboration, predoctoral seminars, or data exchange.'
            : 'Para consultas académicas, colaboración en investigación, seminarios predoctorales o intercambio de datos.'}
        </p>

        {/* Primary Action Cards matching Louis Zhu */}
        <div className="email-cards">
          <a
            className="email-card primary"
            href={`mailto:${DAVID_DATA.contact.email}`}
          >
            <Mail className="h-4 w-4" />
            <span>{currentLang === 'en' ? 'Email David' : 'Escribir a David'}</span>
          </a>
          <a
            className="email-card"
            href={DAVID_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>
          <a
            className="email-card"
            href={DAVID_DATA.contact.orcid}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-mono text-xs font-bold text-[#A6CE39]">ID</span>
            <span>ORCID: 0009-0008-2106-3728</span>
          </a>
        </div>

        {/* Office & Department Coordinates */}
        <div className="pt-6 border-t border-[var(--rule)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-label text-[var(--ink-2)]">
          <div className="space-y-1">
            <p className="font-medium text-[var(--ink)] flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[var(--signal)] shrink-0" />
              <span>{DAVID_DATA.contact.institution}</span>
            </p>
            <p className="text-[var(--ink-3)]">
              {currentLang === 'en' ? DAVID_DATA.contact.department : DAVID_DATA.contact.departmentEs}
            </p>
            <p className="text-[var(--ink-3)] font-mono text-xs">
              Av. de Pearson 21, 08034 Barcelona, Spain<br />
              {currentLang === 'en' ? 'Office E119, South Campus' : 'Despacho E119, Campus Sur'}
            </p>
          </div>

          <div className="space-y-1 sm:text-right">
            <p className="font-medium text-[var(--ink)] flex items-center gap-1.5 sm:justify-end">
              <Phone className="h-4 w-4 text-[var(--signal)] shrink-0" />
              <span>{currentLang === 'en' ? 'Direct Line' : 'Teléfono Directo'}</span>
            </p>
            <p className="font-mono text-xs text-[var(--ink-2)]">
              <a href={`tel:${DAVID_DATA.contact.tel.replace(/\s+/g, '')}`} className="academic-link">
                {DAVID_DATA.contact.tel}
              </a>{' '}
              <span className="text-[var(--ink-3)]">({DAVID_DATA.contact.ext})</span>
            </p>
            <p className="font-mono text-xs text-[var(--ink-3)]">
              {DAVID_DATA.contact.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
