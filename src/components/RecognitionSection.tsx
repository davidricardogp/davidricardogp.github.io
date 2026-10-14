import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';

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
            <span>{currentLang === 'en' ? 'Recognition & Awards' : 'Reconocimiento y Premios'}</span>
          </h2>
        </div>

        <ul className="space-y-4 text-[17px] font-prose text-[var(--ink-2)] leading-relaxed">
          {/* aw-1: China International College Students’ Innovation Competition 2026 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <a
              href="https://drive.google.com/file/d/1I6QwwILjX89qICHph4B0TOW6vkhy13Me/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link font-medium text-[var(--ink)] inline-flex items-baseline gap-1"
            >
              <span>
                {currentLang === 'en'
                  ? 'Silver Award - China International College Students’ Innovation Competition 2026 (Spain Division)'
                  : 'Premio de Plata - China International College Students’ Innovation Competition 2026 (División España)'}
              </span>
              <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
            </a>
            <span>
              {' '}—{' '}
              {currentLang === 'en' ? 'Organized by ' : 'Organizado por '}
              <a href="https://en.tongji.edu.cn/" target="_blank" rel="noopener noreferrer" className="academic-link">Tongji University</a>,{' '}
              <a href="https://en.njupt.edu.cn/" target="_blank" rel="noopener noreferrer" className="academic-link">Nanjing University of Posts and Telecommunications</a>,{' '}
              <a href="https://en.shnu.edu.cn/" target="_blank" rel="noopener noreferrer" className="academic-link">Shanghai Normal University</a>{' '}
              {currentLang === 'en' ? 'and' : 'y'}{' '}
              <a href="https://www.upm.es/" target="_blank" rel="noopener noreferrer" className="academic-link">Polytechnic University of Madrid</a>.
            </span>
          </li>

          {/* aw-2: CAF Scholarship */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <strong className="font-medium text-[var(--ink)]">
              {currentLang === 'en'
                ? 'Development Bank of Latin America and the Caribbean (CAF) Scholarship for the Diploma in Governance and Public Innovation 2026'
                : 'Beca CAF - Banco de Desarrollo de América Latina y el Caribe para el Diplomado en Gobernabilidad e Innovación Pública 2026'}
            </strong>
            <span>
              {' '}—{' '}
              <a href="https://www.ucm.es/" target="_blank" rel="noopener noreferrer" className="academic-link">
                {currentLang === 'en' ? 'Complutense University of Madrid' : 'Universidad Complutense de Madrid'}
              </a>.
            </span>
          </li>

          {/* aw-3: Global Leaders Cohort 2024 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <a
              href="https://www.leadership-challenge.org/past-glc-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link font-medium text-[var(--ink)] inline-flex items-baseline gap-1"
            >
              <span>Global Leaders Cohort 2024</span>
              <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
            </a>
            <span>
              {' '}—{' '}
              {currentLang === 'en'
                ? 'Selected among the top 1.82% of candidates by the Social Sciences Division at '
                : 'Seleccionado entre el 1,82% superior de candidatos por la División de Ciencias Sociales de la '}
              <a href="https://www.ox.ac.uk/" target="_blank" rel="noopener noreferrer" className="academic-link">
                {currentLang === 'en' ? 'Oxford University' : 'Universidad de Oxford'}
              </a>{' '}
              {currentLang === 'en' ? 'and the' : 'y la'}{' '}
              <a href="https://www.unisg.ch/" target="_blank" rel="noopener noreferrer" className="academic-link">
                {currentLang === 'en' ? 'University of St. Gallen' : 'Universidad de St. Gallen'}
              </a>.
            </span>
          </li>

          {/* aw-4: IPE Young Leaders Network */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <a
              href="https://ipe.org.pe/presentamos-a-los-embajadores-de-la-red-de-jovenes-lideres-ipe-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link font-medium text-[var(--ink)] inline-flex items-baseline gap-1"
            >
              <span>
                {currentLang === 'en'
                  ? 'Selected as an ambassador for the fourth cohort of the IPE Young Leaders Network'
                  : 'Seleccionado como embajador de la cuarta edición de la Red de Jóvenes Líderes IPE'}
              </span>
              <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
            </a>
            <span>
              {' '}—{' '}
              <a href="https://ipe.org.pe/" target="_blank" rel="noopener noreferrer" className="academic-link">
                {currentLang === 'en' ? 'Peruvian Institute of Economics' : 'Instituto Peruano de Economía (IPE)'}
              </a>.
            </span>
          </li>

          {/* aw-5: Fellowship Energy Economics Summer School 2024 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <strong className="font-medium text-[var(--ink)]">
              {currentLang === 'en'
                ? 'Fellowship for the Energy Economics Summer School 2024'
                : 'Beca para la Escuela de Verano de Economía de la Energía 2024'}
            </strong>
            <span>
              {' '}—{' '}
              <a href="https://bse.eu/" target="_blank" rel="noopener noreferrer" className="academic-link">
                Barcelona School of Economics
              </a>.
            </span>
          </li>

          {/* aw-6: Fellowship Winter Methods School 2024 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <strong className="font-medium text-[var(--ink)]">
              {currentLang === 'en'
                ? 'Fellowship for the Winter Methods School 2024: Measuring Citizen’s Digital Behaviours'
                : 'Beca para la Escuela de Métodos de Invierno 2024: Medición de Comportamientos Digitales de la Ciudadanía'}
            </strong>
            <span>
              {' '}—{' '}
              <a href="https://www.upf.edu/" target="_blank" rel="noopener noreferrer" className="academic-link">
                Universitat Pompeu Fabra
              </a>.
            </span>
          </li>

          {/* aw-7: In Altum Scholarship 2023 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <a
              href="https://drive.google.com/file/d/1Uc3w0yB-_MBynU5pIP_Tdy3nQMgDLV4P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link font-medium text-[var(--ink)] inline-flex items-baseline gap-1"
            >
              <span>
                {currentLang === 'en'
                  ? 'In Altum Scholarship for the Law and Politics Summer School 2023'
                  : 'Beca In Altum para la Escuela de Verano de Derecho y Política 2023'}
              </span>
              <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
            </a>
            <span>
              {' '}—{' '}
              {currentLang === 'en' ? 'Organized by ' : 'Organizado por '}
              <a href="https://business.catholic.edu/" target="_blank" rel="noopener noreferrer" className="academic-link">
                The Busch School of Business, The Catholic University of America
              </a>.
            </span>
          </li>

          {/* aw-8: Academic Performance Scholarship in 2023 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <strong className="font-medium text-[var(--ink)]">
              {currentLang === 'en'
                ? 'Academic Performance Scholarship in 2023'
                : 'Beca por Rendimiento Académico 2023'}
            </strong>
            <span>
              {' '}—{' '}
              <a href="https://www.udep.edu.pe/" target="_blank" rel="noopener noreferrer" className="academic-link">
                {currentLang === 'en' ? 'University of Piura' : 'Universidad de Piura'}
              </a>.
            </span>
          </li>

          {/* aw-9: Second Place Ashok Kotwal Best Thesis Award (2024) */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <strong className="font-medium text-[var(--ink)]">
              {currentLang === 'en'
                ? 'Second Place — University of Piura Ashok Kotwal Best Thesis Award (2024)'
                : 'Segundo Puesto — Premio Ashok Kotwal a la Mejor Tesis de la Universidad de Piura (2024)'}
            </strong>
            <span>
              {' '}—{' '}
              {currentLang === 'en'
                ? 'For the thesis "A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru."'
                : 'Por la tesis "A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru."'}
            </span>
          </li>

          {/* aw-10: Second Place CFA Institute Ethics Challenge Peru 2022 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <a
              href="https://www.udep.edu.pe/hoy/2022/09/alumnos-de-economia-obtienen-el-2do-puesto-en-el-cfa-institute-ethics-challenge/"
              target="_blank"
              rel="noopener noreferrer"
              className="academic-link font-medium text-[var(--ink)] inline-flex items-baseline gap-1"
            >
              <span>
                {currentLang === 'en'
                  ? 'Second Place — CFA Institute Ethics Challenge Peru 2022'
                  : 'Segundo Puesto — CFA Institute Ethics Challenge Perú 2022'}
              </span>
              <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
            </a>
            <span>
              {' '}—{' '}
              {currentLang === 'en'
                ? 'Represented University of Piura for the national competition organized by '
                : 'Representó a la Universidad de Piura en la competencia nacional organizada por '}
              <a href="https://www.cfainstitute.org/" target="_blank" rel="noopener noreferrer" className="academic-link">
                CFA Institute
              </a>.
            </span>
          </li>

          {/* aw-11: E-Moot Libre Competencia 2022 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <strong className="font-medium text-[var(--ink)]">E-Moot Libre Competencia 2022</strong>
            <span>
              {' '}—{' '}
              {currentLang === 'en'
                ? 'Semifinalist in the competition law moot organized by '
                : 'Semifinalista en el moot de derecho de la competencia organizado por '}
              <a href="https://www.up.edu.pe/" target="_blank" rel="noopener noreferrer" className="academic-link">
                {currentLang === 'en' ? 'University of the Pacific' : 'Universidad del Pacífico'}
              </a>{' '}
              {currentLang === 'en' ? 'and' : 'y'}{' '}
              <a href="https://bfe.com.pe/" target="_blank" rel="noopener noreferrer" className="academic-link">
                Bullard Falla Ezcurra+
              </a>.
            </span>
          </li>

          {/* aw-12: Youth Parliamentarian 2019 */}
          <li className="relative pl-5 leading-relaxed">
            <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink)]" aria-hidden="true" />
            <strong className="font-medium text-[var(--ink)]">
              {currentLang === 'en'
                ? 'Youth Parliamentarian 2019 representing the region of Piura'
                : 'Parlamentario Joven 2019 en representación de la región Piura'}
            </strong>
            <span>
              {' '}—{' '}
              <a href="https://www.congreso.gob.pe/" target="_blank" rel="noopener noreferrer" className="academic-link">
                {currentLang === 'en' ? 'Congress of the Republic of Peru' : 'Congreso de la República del Perú'}
              </a>.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
