import React from 'react';

interface ExperienceSectionProps {
  currentLang: 'en' | 'es';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  return (
    <section className="py-12 border-b border-[var(--rule)]" id="experience">
      <div className="space-y-8">
        <div>
          <h2 className="sec-heading">
            <span className="n">02</span>
            <span>{currentLang === 'en' ? 'Experience' : 'Experiencia'}</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Predoctoral Researcher — IESE */}
          <div className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px] text-[var(--ink)]">
              {currentLang === 'en' ? 'Predoctoral Researcher — ' : 'Investigador Predoctoral — '}
              <a
                href="https://www.iese.edu/faculty-research/departments/entrepreneurship/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Entrepreneurship Department' : 'Departamento de Emprendimiento'}
              </a>
              {', '}
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
              {currentLang === 'en' ? 'Barcelona, Spain · Jul. 2026 – Present' : 'Barcelona, España · Jul. 2026 – Actualidad'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Teaching assistance for Business Model Innovation and Fundamentals of Entrepreneurial Management ('
                : 'Asistencia docente en Business Model Innovation y Fundamentals of Entrepreneurial Management ('}
              <a
                href="https://www.iese.edu/es/claustro-investigacion/claustro/yuliya-snihur/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Yuliya Snihur
              </a>
              {currentLang === 'en' ? ', Ph.D.) and Entrepreneurial Finance (' : ', Ph.D.) y Finanzas para Emprendedores ('}
              <a
                href="https://www.iese.edu/es/claustro-investigacion/claustro/heinrich-liechtenstein/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Heinrich Liechtenstein
              </a>
              {currentLang === 'en'
                ? ', Ph.D.). Research at the '
                : ', Ph.D.). Investigación en el '}
              <a
                href="https://www.iese.edu/entrepreneurship/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Entrepreneurship and Innovation Center' : 'Centro de Emprendimiento e Innovación'}
              </a>
              {currentLang === 'en'
                ? '. Predoctoral coursework in Contemporary Entrepreneurship Topics, Research Design and Econometrics II.'
                : '. Cursos predoctorales en Temas Contemporáneos de Emprendimiento, Diseño de Investigación y Econometría II.'}
            </p>
          </div>

          {/* Research Assistant — IESE */}
          <div className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px] text-[var(--ink)]">
              {currentLang === 'en' ? 'Research Assistant — ' : 'Asistente de Investigación — '}
              <a
                href="https://www.iese.edu/entrepreneurship/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Entrepreneurship & Innovation Center' : 'Centro de Emprendimiento e Innovación'}
              </a>
              {', '}
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
              {currentLang === 'en' ? 'Barcelona, Spain · Jan. 2025 – Jul. 2026' : 'Barcelona, España · Ene. 2025 – Jul. 2026'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Focused on applied research in innovation, public policy, corporate venturing, and startup ecosystems.'
                : 'Investigación aplicada en innovación, políticas públicas, corporate venturing y ecosistemas de startups.'}
            </p>
          </div>

          {/* Head of Fundraising — beder */}
          <div className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px] text-[var(--ink)]">
              Head of Fundraising —{' '}
              <a
                href="https://beder.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                beder
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              {currentLang === 'en' ? 'Barcelona, Spain · Sep. 2023 – Jan. 2025' : 'Barcelona, España · Sep. 2023 – Ene. 2025'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Supported the startup’s launch and development alongside the founder, managing public funding applications and fundraising processes of up to €0.5M.'
                : 'Apoyo en el lanzamiento y escalamiento de la startup junto al fundador, gestionando convocatorias públicas y procesos de captación de capital de hasta 0,5M€.'}
            </p>
          </div>

          {/* Undergraduate Teaching Assistant — Universidad de Piura */}
          <div className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px] text-[var(--ink)]">
              {currentLang === 'en' ? 'Undergraduate Teaching Assistant — ' : 'Asistente de Docencia — '}
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
              {currentLang === 'en' ? 'Lima, Peru · Mar. 2023 – Jul. 2023' : 'Lima, Perú · Mar. 2023 – Jul. 2023'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en' ? 'Assisted ' : 'Asistencia al Dr. '}
              <a
                href="https://pe.linkedin.com/in/ignacio-soto-llosa-b1b70243"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Ignacio Soto Llosa
              </a>
              {currentLang === 'en'
                ? ', Ph.D., in the undergraduate course Political and Economic Thought, supporting lecture preparation, class materials, and student learning.'
                : ' en el curso de Pensamiento Político y Económico, apoyando la preparación de clases, materiales y tutorías.'}
            </p>
          </div>

          {/* Undergraduate Research Assistant — Universidad de Piura */}
          <div className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px] text-[var(--ink)]">
              {currentLang === 'en' ? 'Undergraduate Research Assistant — ' : 'Asistente de Investigación — '}
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
              {currentLang === 'en' ? 'Lima, Peru · Jan. 2023 – May 2023' : 'Lima, Perú · Ene. 2023 – May. 2023'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en' ? 'Assisted ' : 'Asistencia al Dr. '}
              <a
                href="https://sites.google.com/view/miguel-angel-carpio"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Miguel Carpio
              </a>
              {currentLang === 'en'
                ? ', Ph.D., with research projects related to education, development economics, and banking.'
                : ' en proyectos de investigación relacionados con educación, economía del desarrollo y banca.'}
            </p>
          </div>

          {/* Economic Consulting Intern — Bullard Falla Ezcurra+ */}
          <div className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px] text-[var(--ink)]">
              {currentLang === 'en' ? 'Economic Consulting Intern — ' : 'Practicante de Consultoría Económica — '}
              <a
                href="https://bullardfallaezcurra.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Bullard Falla Ezcurra+
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              {currentLang === 'en' ? 'Lima, Peru · Aug. 2022 – Dec. 2022' : 'Lima, Perú · Ago. 2022 – Dic. 2022'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Research on market dynamics, M&A, and competition authority investigations.'
                : 'Investigación sobre dinámicas de mercado, fusiones y adquisiciones e investigaciones de autoridades de competencia.'}
            </p>
          </div>

          {/* Finance Intern — Windham Mountain Club */}
          <div className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px] text-[var(--ink)]">
              {currentLang === 'en' ? 'Finance Intern — ' : 'Practicante de Finanzas — '}
              <a
                href="https://www.windhammountainclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Windham Mountain Club
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              {currentLang === 'en' ? 'New York, United States · May 2021 – Mar. 2022' : 'Nueva York, Estados Unidos · May. 2021 – Mar. 2022'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Financial administration and reporting.'
                : 'Administración financiera y reportes de gestión.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
