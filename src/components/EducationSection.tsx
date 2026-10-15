import React from 'react';
import { DAVID_DATA } from '../data/davidProfileData';

interface EducationSectionProps {
  currentLang: 'en' | 'es';
}

export const EducationSection: React.FC<EducationSectionProps> = ({ currentLang }) => {
  return (
    <section className="py-12 border-b border-[var(--rule)]" id="education">
      <div className="space-y-10">
        <div>
          <h2 className="sec-heading">
            <span className="n">03</span>
            <span>{currentLang === 'en' ? 'Education' : 'Educación'}</span>
          </h2>
        </div>

        {/* Degrees & Academic Exchanges */}
        <div className="space-y-6">
          <h3 className="sub-h">
            {currentLang === 'en' ? 'Degrees & Academic Exchanges' : 'Títulos e Intercambios Académicos'}
          </h3>
          <div className="space-y-6">
            {/* University of Piura */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'B.Sc. Economics — ' : 'Licenciatura en Economía — '}
                <a
                  href="https://www.udep.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'University of Piura' : 'Universidad de Piura'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Lima, Peru · Mar. 2019 – Jan 2024' : 'Lima, Perú · Mar. 2019 – Ene. 2024'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Member of the University Cloister, Delegate of the Faculty of Economics.'
                    : 'Miembro del Claustro Universitario, Delegado de la Facultad de Ciencias Económicas y Empresariales.'}
                </li>
              </ul>
            </div>

            {/* Diego Portales University */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'Bachelor’s Exchange, Commercial Engineering — ' : 'Intercambio Académico, Ingeniería Comercial — '}
                <a
                  href="https://www.udp.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'Diego Portales University' : 'Universidad Diego Portales'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Santiago, Chile · Mar. 2023 – Jul. 2023' : 'Santiago, Chile · Mar. 2023 – Jul. 2023'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Exchange coursework in labour economics and environmental economics.'
                    : 'Cursos de intercambio en economía laboral y economía ambiental.'}
                </li>
              </ul>
            </div>

            {/* Pompeu Fabra University */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'Bachelor’s Exchange, Economics — ' : 'Intercambio Académico, Economía — '}
                <a
                  href="https://www.upf.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'Pompeu Fabra University' : 'Universitat Pompeu Fabra'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Barcelona, Spain · Sep. 2023 – Dec. 2023' : 'Barcelona, España · Sep. 2023 – Dic. 2023'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Exchange coursework in Organizational Behaviour, Business Games, and Science and Globalization.'
                    : 'Cursos de intercambio en Comportamiento Organizacional, Juegos de Empresa, y Ciencia y Globalización.'}
                </li>
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Member of UPF E-Society: Entrepreneurship, Innovation & Startups.'
                    : 'Miembro de UPF E-Society: Emprendimiento, Innovación y Startups.'}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Complementary Education */}
        <div className="space-y-6">
          <h3 className="sub-h">
            {currentLang === 'en' ? 'Complementary Education' : 'Formación Complementaria'}
          </h3>
          <div className="space-y-6">
            {/* IESE Madrid */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                <a
                  href="https://www.iese.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  IESE Business School
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Barcelona, Spain · Sep. 2026 – Dec. 2026' : 'Barcelona, España · Sep. 2026 – Dic. 2026'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Predoctoral coursework in Contemporary Entrepreneurship Topics, Research Design and Econometrics II.'
                    : 'Cursos predoctorales en Temas Contemporáneos de Emprendimiento, Diseño de Investigación y Econometría II.'}
                </li>
              </ul>
            </div>

            {/* CAF & Complutense */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                <a
                  href="https://www.caf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en'
                    ? 'CAF — Development Bank of Latin America and the Caribbean'
                    : 'CAF — Banco de Desarrollo de América Latina y el Caribe'}
                </a>{' '}
                {currentLang === 'en' ? 'and' : 'y'}{' '}
                <a
                  href="https://www.ucm.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'Complutense University of Madrid' : 'Universidad Complutense de Madrid'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Madrid, Spain · Jun. 2026 – Dec. 2026' : 'Madrid, España · Jun. 2026 – Dic. 2026'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Diploma in Governance and Public Innovation.'
                    : 'Diplomado en Gobernabilidad e Innovación Pública.'}
                </li>
              </ul>
            </div>

            {/* EuroTeQ Ignite Bootcamp — IESE */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                <a
                  href="https://euroteq.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  EuroTeQ
                </a>{' '}
                Ignite Bootcamp —{' '}
                <a
                  href="https://www.iese.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  IESE Business School
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Barcelona, Spain · Jul. 2026' : 'Barcelona, España · Jul. 2026'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Participant in the European entrepreneurship and technology innovation program organized by IESE Business School within the EuroTeQ university alliance.'
                    : 'Participante en el programa europeo de emprendimiento e innovación tecnológica organizado por IESE Business School dentro de la alianza EuroTeQ.'}
                </li>
              </ul>
            </div>

            {/* World Bank */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                <a
                  href="https://www.worldbank.org/en/events/2025/05/19/new-horizons-youth-led-innovation-for-a-livable-planet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'World Bank Group Youth Summit' : 'Cumbre de la Juventud del Grupo Banco Mundial'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Issued Jun. 2025' : 'Emitido Jun. 2025'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en' ? 'Behavioral Science in Public Policy.' : 'Ciencias del Comportamiento en Políticas Públicas.'}
                </li>
              </ul>
            </div>

            {/* Oxford University */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                <a
                  href="https://www.ox.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'Oxford University' : 'Universidad de Oxford'}
                </a>
                {' — '}
                <a
                  href="https://oxfordcharacter.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  The Oxford Character Project
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Issued Mar. 2025' : 'Emitido Mar. 2025'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en' ? 'Leading with Character.' : 'Liderazgo con Carácter.'}
                </li>
              </ul>
            </div>

            {/* BSE */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'Summer School — ' : 'Escuela de Verano — '}
                <a
                  href="https://bse.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  Barcelona School of Economics
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Barcelona, Spain · Jun. 2024' : 'Barcelona, España · Jun. 2024'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en' ? 'Energy Economics.' : 'Economía de la Energía.'}
                </li>
              </ul>
            </div>

            {/* Winter Methods UPF */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'Winter Methods School — ' : 'Escuela de Métodos de Invierno — '}
                <a
                  href="https://www.upf.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'Pompeu Fabra University' : 'Universitat Pompeu Fabra'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Barcelona, Spain · Mar. 2024' : 'Barcelona, España · Mar. 2024'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Measuring Citizen’s Digital Behaviours.'
                    : 'Medición de Comportamientos Digitales de la Ciudadanía.'}
                </li>
              </ul>
            </div>

            {/* The Catholic University of America */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'Summer School — ' : 'Escuela de Verano — '}
                <a
                  href="https://business.catholic.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  The Catholic University of America
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Washington, D.C., United States · Jul. 2023' : 'Washington, D.C., Estados Unidos · Jul. 2023'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en' ? 'Law and Politics.' : 'Derecho y Política.'}
                </li>
              </ul>
            </div>

            {/* CIEX */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'Crash Course — ' : 'Curso Intensivo — '}
                <a
                  href="https://www.udep.edu.pe/cree/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en'
                    ? 'Center for Research in Experimental Economics (CREE)'
                    : 'Centro de Investigación en Economía Experimental (CREE)'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Lima, Peru · Feb. 2023 – Mar. 2023' : 'Lima, Perú · Feb. 2023 – Mar. 2023'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en' ? 'Experimental Economics Programming.' : 'Programación en Economía Experimental.'}
                </li>
              </ul>
            </div>

            {/* CAF */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                <a
                  href="https://www.caf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en'
                    ? 'CAF — Development Bank of Latin America and the Caribbean'
                    : 'CAF — Banco de Desarrollo de América Latina y el Caribe'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Issued Jun. 2022' : 'Emitido Jun. 2022'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en' ? 'Public Economy.' : 'Economía Pública.'}
                </li>
              </ul>
            </div>

            {/* UNAM */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                {currentLang === 'en' ? 'Development Economics — ' : 'Economía del Desarrollo — '}
                <a
                  href="https://www.unam.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en'
                    ? 'National Autonomous University of Mexico'
                    : 'Universidad Nacional Autónoma de México (UNAM)'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Mexico City, Mexico · Mar. 2021 – Jun. 2021' : 'Ciudad de México, México · Mar. 2021 – Jun. 2021'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Philosophical and analytical problems in the economic development of structurally restricted economies by '
                    : 'Problemas analíticos y filosóficos del desarrollo económico en economías con restricción estructural por el Dr. '}
                  <a
                    href="https://res.org.uk/newsletter/obituary-tony-thirlwall/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="academic-link"
                  >
                    Anthony Thirlwall
                  </a>
                  {', Ph.D.'}
                </li>
              </ul>
            </div>

            {/* IDB */}
            <div className="space-y-1 text-[17px] font-prose leading-relaxed">
              <div className="font-semibold text-[18px] text-[var(--ink)]">
                <a
                  href="https://www.iadb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link"
                >
                  {currentLang === 'en' ? 'Inter-American Development Bank' : 'Banco Interamericano de Desarrollo (BID)'}
                </a>
              </div>
              <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                {currentLang === 'en' ? 'Issued May 2021' : 'Emitido May. 2021'}
              </div>
              <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                <li className="relative pl-4">
                  <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                  {currentLang === 'en'
                    ? 'Behavioral Economics for Better Public Policies, Issue 9.'
                    : 'Economía del Comportamiento para Mejores Políticas Públicas, Edición 9.'}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-3">
          <h3 className="sub-h">{currentLang === 'en' ? 'Languages' : 'Idiomas'}</h3>
          <ul className="text-sm sm:text-[16px] font-prose text-[var(--ink-2)] space-y-1">
            {DAVID_DATA.languages.map((lang, idx) => (
              <li key={idx} className="relative pl-4">
                <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                <strong className="text-[var(--ink)]">{currentLang === 'en' ? lang.name : lang.nameEs}</strong> — {currentLang === 'en' ? lang.level : lang.levelEs}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
