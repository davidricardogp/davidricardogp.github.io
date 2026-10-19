import React from 'react';
import { ExternalLink } from 'lucide-react';

interface RecognitionSectionProps {
  currentLang: 'en' | 'es';
}

export const RecognitionSection: React.FC<RecognitionSectionProps> = ({ currentLang }) => {
  return (
    <section className="py-12 border-b border-[var(--rule)]" id="recognition">
      <div className="space-y-8">
        <div>
          <h2 className="sec-heading">
            <span className="n">05</span>
            <span>
              {currentLang === 'en'
                ? 'Recognition, Scholarships & Fellowships'
                : 'Reconocimientos, Becas y Fellowships'}
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* ===================== 2026 ===================== */}

          {/* 1) CAF Scholarship — Diploma in Governance and Public Innovation (5th Edition) */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.caf.com/es/capacitaciones/diplomado-en-gobernabilidad-e-innovacion-publica-espana-5-ed/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'CAF Scholarship — Diploma in Governance and Public Innovation (5th Edition)'
                    : 'Beca CAF — Diplomado en Gobernabilidad e Innovación Pública (5.ª Edición)'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.ucm.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Complutense University of Madrid' : 'Universidad Complutense de Madrid'}
              </a>
              {', '}
              <a
                href="https://www.caf.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'CAF—Development Bank of Latin America and the Caribbean' : 'CAF—Banco de Desarrollo de América Latina y el Caribe'}
              </a>{' '}
              · {currentLang === 'en' ? 'Madrid, Spain · Dec. 30, 2026' : 'Madrid, España · 30 Dic. 2026'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Awarded a scholarship by '
                : 'Beneficiario de una beca otorgada por '}
              <a
                href="https://www.caf.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'CAF Development Bank of Latin America and the Caribbean' : 'CAF — Banco de Desarrollo de América Latina y el Caribe'}
              </a>
              {currentLang === 'en'
                ? ' to pursue the Diploma in Governance and Public Innovation at '
                : ' para cursar el Diplomado en Gobernabilidad e Innovación Pública en la '}
              <a
                href="https://www.ucm.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Complutense University of Madrid' : 'Universidad Complutense de Madrid'}
              </a>.
            </p>
          </article>

          {/* 2) Thinking About Thinking (ThAT) Cohort Fellowship */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.thinkingaboutthinking.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>Thinking About Thinking (ThAT) Cohort Fellowship</span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.thinkingaboutthinking.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Thinking About Thinking
              </a>{' '}
              · {currentLang === 'en' ? 'Princeton, NJ, United States · Oct. 18, 2026' : 'Princeton, NJ, Estados Unidos · 18 Oct. 2026'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Selected as a fellow of '
                : 'Seleccionado como fellow de '}
              <a
                href="https://www.thinkingaboutthinking.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Thinking About Thinking
              </a>
              {currentLang === 'en'
                ? ': a global community working across AI, neuroscience, mathematics, entrepreneurship and scientific discovery.'
                : ': una comunidad global que trabaja en IA, neurociencia, matemáticas, emprendimiento y descubrimiento científico.'}
            </p>
          </article>

          {/* 3) Silver Award — China International College Students’ Innovation Competition (Spain Division) */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://drive.google.com/file/d/1I6QwwILjX89qICHph4B0TOW6vkhy13Me/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Silver Award — China International College Students’ Innovation Competition (Spain Division)'
                    : 'Premio de Plata — China International College Students’ Innovation Competition (División España)'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://en.tongji.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Tongji University' : 'Universidad de Tongji'}
              </a>
              {', '}
              <a
                href="https://en.njupt.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Nanjing University of Posts and Telecommunications' : 'Universidad de Correos y Telecomunicaciones de Nanjing'}
              </a>
              {', '}
              <a
                href="https://en.shnu.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Shanghai Normal University' : 'Universidad Normal de Shanghái'}
              </a>
              {', '}
              <a
                href="https://www.upm.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Polytechnic University of Madrid' : 'Universidad Politécnica de Madrid'}
              </a>{' '}
              · {currentLang === 'en' ? 'Madrid, Spain · Jul. 2, 2026' : 'Madrid, España · 2 Jul. 2026'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Awarded in the Spain Division of the competition, organised by '
                : 'Galardonado en la División España del certamen, organizado por la '}
              <a
                href="https://en.tongji.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Tongji University' : 'Universidad de Tongji'}
              </a>
              {', '}
              <a
                href="https://en.njupt.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Nanjing University of Posts and Telecommunications' : 'Universidad de Correos y Telecomunicaciones de Nanjing'}
              </a>
              {', '}
              <a
                href="https://en.shnu.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Shanghai Normal University' : 'Universidad Normal de Shanghái'}
              </a>{' '}
              {currentLang === 'en' ? 'and the ' : 'y la '}
              <a
                href="https://www.upm.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Polytechnic University of Madrid' : 'Universidad Politécnica de Madrid'}
              </a>.
            </p>
          </article>

          {/* ===================== 2024 ===================== */}

          {/* 4) Fifth Global Leadership Challenge — 2024 */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.leadership-challenge.org/past-glc-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Fifth Global Leadership Challenge — 2024'
                    : 'Quinto Global Leadership Challenge — 2024'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.ox.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of Oxford' : 'Universidad de Oxford'}
              </a>
              {', '}
              <a
                href="https://symposium.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                St. Gallen Symposium
              </a>{' '}
              · {currentLang === 'en' ? 'Online · Dec. 12–16, 2024' : 'Online · 12–16 Dic. 2024'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Selected for a programme with an approximately 1.82% acceptance rate, jointly organised by the '
                : 'Seleccionado para un programa con una tasa de aceptación aproximada del 1,82%, organizado conjuntamente por la '}
              <a
                href="https://www.ox.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of Oxford' : 'Universidad de Oxford'}
              </a>{' '}
              {currentLang === 'en' ? 'and the ' : 'y el '}
              <a
                href="https://symposium.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                St. Gallen Symposium
              </a>.
            </p>
          </article>

          {/* 5) IPE Young Leaders Network — Fourth Cohort */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://ipe.org.pe/presentamos-a-los-embajadores-de-la-red-de-jovenes-lideres-ipe-2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'IPE Young Leaders Network — Fourth Cohort'
                    : 'Red de Jóvenes Líderes IPE — Cuarta Cohorte'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://ipe.org.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Peruvian Institute of Economics (IPE)' : 'Instituto Peruano de Economía (IPE)'}
              </a>{' '}
              · {currentLang === 'en' ? 'Lima, Peru · Jun. 26 – Nov. 29, 2024' : 'Lima, Perú · 26 Jun. – 29 Nov. 2024'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Selected as one of 55 ambassadors from over 540 applicants across Peru for a programme organised by the '
                : 'Seleccionado como uno de los 55 embajadores entre más de 540 postulantes de todo el Perú para el programa organizado por el '}
              <a
                href="https://ipe.org.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Peruvian Institute of Economics' : 'Instituto Peruano de Economía'}
              </a>.
            </p>
          </article>

          {/* 6) Energy Economics Summer School Fellowship - 2024 */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://drive.google.com/file/d/1HOjLc9DloJa2rKDLKKPRrQYgee_k9e31/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Energy Economics Summer School Fellowship — 2024'
                    : 'Beca Energy Economics Summer School — 2024'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://bse.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Barcelona School of Economics
              </a>{' '}
              · {currentLang === 'en' ? 'Barcelona, Spain · Jun. 17–21, 2024' : 'Barcelona, España · 17–21 Jun. 2024'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Awarded a fellowship by '
                : 'Beneficiario de una beca otorgada por la '}
              <a
                href="https://bse.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Barcelona School of Economics
              </a>
              {currentLang === 'en'
                ? ' for “Empirical Methods for the Analysis of the Energy Transition”, taught by '
                : ' para “Empirical Methods for the Analysis of the Energy Transition”, impartido por '}
              <a
                href="https://mreguant.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Mar Reguant
              </a>
              {currentLang === 'en' ? ', Ph.D.' : ', Ph.D.'}
            </p>
          </article>

          {/* 7) Fifth RECSM Winter Methods School Fellowship - 2024 */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.upf.edu/web/survey/recsm-winter-methods-school-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Fifth RECSM Winter Methods School Fellowship — 2024'
                    : 'Beca Quinta RECSM Winter Methods School — 2024'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.upf.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Universitat Pompeu Fabra
              </a>
              {', '}
              <a
                href="https://www.upf.edu/web/survey"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                RECSM
              </a>{' '}
              · {currentLang === 'en' ? 'Barcelona, Spain · Mar. 13–15, 2024' : 'Barcelona, España · 13–15 Mar. 2024'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Awarded a fellowship by '
                : 'Beneficiario de una beca concedida por la '}
              <a
                href="https://www.upf.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Universitat Pompeu Fabra
              </a>
              {' – '}
              <a
                href="https://www.upf.edu/web/survey"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Research and Expertise Centre for Survey Methodology (RECSM)
              </a>
              {currentLang === 'en'
                ? ' for “Measuring Citizen’s Digital Behaviours Using Web Trackers and Data Donations”, taught by '
                : ' para “Measuring Citizen’s Digital Behaviours Using Web Trackers and Data Donations”, impartido por '}
              <a
                href="https://www.demography.ox.ac.uk/people/oriol-bosch-jover"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Oriol Bosch
              </a>
              {currentLang === 'en' ? ', Ph.D.' : ', Ph.D.'}
            </p>
          </article>

          {/* 8) Second Place — Ashok Kotwal Best Thesis Award */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Second Place — Ashok Kotwal Best Thesis Award'
                    : 'Segundo Puesto — Premio Ashok Kotwal a la Mejor Tesis'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.udep.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of Piura' : 'Universidad de Piura'}
              </a>{' '}
              · {currentLang === 'en' ? 'Lima, Peru · May 24, 2024' : 'Lima, Perú · 24 May. 2024'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Recognised for the thesis “A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru”, co-authored with '
                : 'Reconocido por la tesis “A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru”, coescrita con '}
              <a
                href="https://grade.org.pe/en/investigadores/personal/yuri-solari/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Yuri Solari Han
              </a>.
            </p>
          </article>

          {/* ===================== 2023 ===================== */}

          {/* 9) In Altum Scholarship — Law and Politics Summer School */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://drive.google.com/file/d/1Uc3w0yB-_MBynU5pIP_Tdy3nQMgDLV4P/view"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'In Altum Scholarship — Law and Politics Summer School'
                    : 'Beca In Altum — Escuela de Verano de Derecho y Política'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://business.catholic.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Busch School of Business
              </a>
              {', '}
              <a
                href="https://www.catholic.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                The Catholic University of America
              </a>{' '}
              · {currentLang === 'en' ? 'Washington D.C., United States · Jul. 11–16, 2023' : 'Washington D.C., Estados Unidos · 11–16 Jul. 2023'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Awarded a scholarship to attend the Law and Politics Summer School, organised by the '
                : 'Beca concedida para asistir a la Escuela de Verano de Derecho y Política, organizada por la '}
              <a
                href="https://business.catholic.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Busch School of Business
              </a>
              {currentLang === 'en' ? ' at ' : ' en '}
              <a
                href="https://www.catholic.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                The Catholic University of America
              </a>.
            </p>
          </article>

          {/* 10) Academic Performance Scholarship 2023 */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.udep.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Academic Performance Scholarship 2023'
                    : 'Beca por Rendimiento Académico 2023'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.udep.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of Piura' : 'Universidad de Piura'}
              </a>{' '}
              · {currentLang === 'en' ? 'Lima, Peru · Mar.–Jul. 2023' : 'Lima, Perú · Mar.–Jul. 2023'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Awarded a scholarship by the '
                : 'Beneficiario de una beca otorgada por la '}
              <a
                href="https://www.udep.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of Piura' : 'Universidad de Piura'}
              </a>
              {currentLang === 'en'
                ? ' in recognition of academic performance.'
                : ' en reconocimiento al rendimiento académico.'}
            </p>
          </article>

          {/* ===================== 2022 ===================== */}

          {/* 11) Second Place — CFA Institute Ethics Challenge Peru */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.udep.edu.pe/hoy/2022/09/alumnos-de-economia-obtienen-el-2do-puesto-en-el-cfa-institute-ethics-challenge/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Second Place — CFA Institute Ethics Challenge Peru'
                    : 'Segundo Puesto — CFA Institute Ethics Challenge Perú'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.cfainstitute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                CFA Institute
              </a>
              {', '}
              <a
                href="https://www.udep.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of Piura' : 'Universidad de Piura'}
              </a>{' '}
              · {currentLang === 'en' ? 'Lima, Peru · Sept. 13, 2022' : 'Lima, Perú · 13 Sep. 2022'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Represented the '
                : 'Representó a la '}
              <a
                href="https://www.udep.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of Piura' : 'Universidad de Piura'}
              </a>
              {currentLang === 'en'
                ? ' in the national competition organised by the '
                : ' en el certamen nacional organizado por el '}
              <a
                href="https://www.cfainstitute.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                CFA Institute
              </a>.
            </p>
          </article>

          {/* 12) Semifinalist — E-Moot Libre Competencia */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.instagram.com/p/Cg0YBo1LAQV/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Semifinalist — E-Moot Libre Competencia'
                    : 'Semifinalista — E-Moot Libre Competencia'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.up.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of the Pacific' : 'Universidad del Pacífico'}
              </a>
              {', '}
              <a
                href="https://bfe.com.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Bullard Falla Ezcurra+
              </a>{' '}
              · {currentLang === 'en' ? 'Lima, Peru · Aug. 3–6, 2022' : 'Lima, Perú · 3–6 Ago. 2022'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Reached the semifinals of the competition law moot organised by the '
                : 'Alcanzó las semifinales del concurso de derecho de la competencia organizado por la '}
              <a
                href="https://www.up.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'University of the Pacific' : 'Universidad del Pacífico'}
              </a>
              {currentLang === 'en' ? ' and ' : ' y '}
              <a
                href="https://bfe.com.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Bullard Falla Ezcurra+
              </a>.
            </p>
          </article>

          {/* ===================== 2019 ===================== */}

          {/* 13) Youth Parliamentarian — Piura */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://drive.google.com/file/d/1cKGc20JYs-gAybYkZBbYzl_PfUyMfLHv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Youth Parliamentarian — Piura'
                    : 'Parlamentario Joven — Piura'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.congreso.gob.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Congress of the Republic of Peru' : 'Congreso de la República del Perú'}
              </a>
              {', '}
              <a
                href="https://www.hss.de/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Hanns Seidel Foundation' : 'Fundación Hanns Seidel'}
              </a>{' '}
              · {currentLang === 'en' ? 'Piura, Peru · Aug. 22–23, 2019' : 'Piura, Perú · 22–23 Ago. 2019'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Represented the region of Piura at the Regional Plenary, organised by the First Vice-Presidency of the '
                : 'Representó a la región Piura en el Plenario Regional, organizado por la Primera Vicepresidencia del '}
              <a
                href="https://www.congreso.gob.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Congress of the Republic of Peru' : 'Congreso de la República del Perú'}
              </a>
              {currentLang === 'en' ? ' and the ' : ' y la '}
              <a
                href="https://www.hss.de/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Hanns Seidel Foundation' : 'Fundación Hanns Seidel'}
              </a>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
