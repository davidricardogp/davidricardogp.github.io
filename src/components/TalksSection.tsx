import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DAVID_DATA } from '../data/davidProfileData';

interface TalksSectionProps {
  currentLang: 'en' | 'es';
}

export const TalksSection: React.FC<TalksSectionProps> = ({ currentLang }) => {
  return (
    <section className="py-12 border-b border-[var(--rule)]" id="talks">
      <div className="space-y-8">
        <div>
          <h2 className="sec-heading">
            <span className="n">04</span>
            <span>{currentLang === 'en' ? 'Talks & community' : 'Charlas y comunidad'}</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Guest Lecture — Entrepreneurship Fundamentals */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://drive.google.com/file/d/1iqG5qutOfN3_9ogD79fvOBFgavIRWwZC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Guest Lecture — Entrepreneurship Fundamentals'
                    : 'Clase Magistral — Fundamentos del Emprendimiento'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.unp.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'National University of Piura' : 'Universidad Nacional de Piura'}
              </a>{' '}
              · {currentLang === 'en' ? 'Faculty of Economics · Sept. 29, 2026' : 'Facultad de Economía · 29 Sep. 2026'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en' ? 'Invited by ' : 'Invitado por '}
              <a
                href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=105036"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Moisés Domínguez Morante
              </a>
              {currentLang === 'en'
                ? ', Ph.D., to give a guest lecture on entrepreneurship to undergraduate students.'
                : ', Ph.D., para impartir una clase magistral sobre emprendimiento a estudiantes de pregrado.'}
            </p>
          </article>

          {/* Host — Entrepreneurship & Innovation Center Meeting */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.linkedin.com/posts/davidricardogp_today-i-had-the-opportunity-to-host-the-share-7457823660742074368-0rr1/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Host — Entrepreneurship & Innovation Center Meeting'
                    : 'Anfitrión — Encuentro del Centro de Emprendimiento e Innovación'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://www.iese.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                IESE Business School
              </a>
              {', '}
              <a
                href="https://www.iese.edu/entrepreneurship/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Entrepreneurship & Innovation Center' : 'Centro de Emprendimiento e Innovación'}
              </a>{' '}
              · {currentLang === 'en' ? 'Barcelona, Spain · May 6, 2026' : 'Barcelona, España · 6 May. 2026'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Hosted the Entrepreneurship & Innovation Center meeting featuring a guest lecture by '
                : 'Anfitrión del encuentro del Centro de Emprendimiento e Innovación con la ponencia invitada del Dr. '}
              <a
                href="https://sites.google.com/site/ffernandezbazan/home"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Fernando Fernandez
              </a>
              {currentLang === 'en'
                ? ', Ph.D., on building living labs ecosystems for innovation.'
                : ' sobre ecosistemas de living labs para la innovación.'}
            </p>
          </article>

          {/* Speaker — XIX Investment Forum */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://drive.google.com/file/d/12CLcknYh1GFRzonKzdjrqnSI0cFovHrP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Speaker — XIX Investment Forum'
                    : 'Ponente — XIX Foro de Inversión'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://pad.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'PAD - School of Management' : 'PAD - Escuela de Dirección'}
              </a>{' '}
              · {currentLang === 'en' ? 'Lima, Peru · Aug. 22, 2025' : 'Lima, Perú · 22 Ago. 2025'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Speaker at the XIX Investment Forum, organized by the Business Angels Network at '
                : 'Ponente en el XIX Foro de Inversión, organizado por la Red de Inversionistas Ángeles de '}
              <a
                href="https://pad.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'PAD - School of Management' : 'PAD - Escuela de Dirección'}
              </a>{' '}
              {currentLang === 'en' ? 'and' : 'y'}{' '}
              <a
                href="https://hub.udep.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Hub UDEP
              </a>
              {currentLang === 'en'
                ? ', presenting on European policymaking for startup ecosystems.'
                : ', presentando sobre diseño de políticas europeas para ecosistemas de startups.'}
            </p>
          </article>

          {/* Speaker — Building Smarter Startup Ecosystems */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.facebook.com/antonio.mabres/posts/pfbid0Age3mo88wVZkzPxxwC6b5vC2uvVv4jYe2o37n2whJtXxft9fAe9mArvaZrc62w8El"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Speaker — Building Smarter Startup Ecosystems'
                    : 'Ponente — Construyendo Ecosistemas de Startups más Inteligentes'}
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
              </a>
              {', '}
              <a
                href="https://hub.udep.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                {currentLang === 'en' ? 'Center for Innovation & Entrepreneurship (Hub UDEP)' : 'Centro de Innovación y Emprendimiento (Hub UDEP)'}
              </a>{' '}
              · {currentLang === 'en' ? 'Piura, Peru · Aug. 5, 2025' : 'Piura, Perú · 5 Ago. 2025'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en' ? 'Invited by ' : 'Invitado por '}
              <a
                href="https://www.udep.edu.pe/hoy/profesores/carlos-rodrich/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Carlos Rodrich Portugal
              </a>
              {currentLang === 'en'
                ? ', director of the center, to give a talk on international policy lessons with the challenges faced by entrepreneurial ecosystems in Peru and Latin America.'
                : ', director del centro, para ofrecer una charla sobre lecciones de política internacional y los retos de los ecosistemas emprendedores en Perú y América Latina.'}
            </p>
          </article>

          {/* Interviewer — XL Encuentro de Economistas del BCRP */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://www.udep.edu.pe/hoy/2022/11/campus-lima-y-casona-pardo-albergaron-xl-encuentro-de-economistas-de-bcrp/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en'
                    ? 'Interviewer — XL Encuentro de Economistas del BCRP'
                    : 'Entrevistador — XL Encuentro de Economistas del BCRP'}
                </span>
                <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
              </a>
            </div>
            <div className="text-xs font-label text-[var(--ink-3)] font-mono">
              <a
                href="https://es.wikipedia.org/wiki/Casona_Pardo"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Casona Pardo
              </a>{' '}
              · {currentLang === 'en' ? 'Lima, Peru · Oct. 25, 2022' : 'Lima, Perú · 25 Oct. 2022'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en' ? 'Interviewed ' : 'Entrevistó al '}
              <a
                href="https://www.bcrp.gob.pe/sobre-el-bcrp/organizacion/directorio/julio-velarde.html"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Julio Velarde
              </a>
              {currentLang === 'en'
                ? ', Ph.D., President of the Central Reserve Bank of Peru (BCRP), about inflation in Peru.'
                : ', Ph.D., Presidente del Banco Central de Reserva del Perú (BCRP), sobre la inflación en el Perú.'}
            </p>
          </article>

          {/* Speaker — EcoTalks */}
          <article className="space-y-1 text-[17px] font-prose leading-relaxed">
            <div className="font-semibold text-[18px]">
              <a
                href="https://drive.google.com/file/d/1k7CIEhFWrfKKa_q03IHGvuCvUoma_ZoV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-1"
              >
                <span>
                  {currentLang === 'en' ? 'Speaker — EcoTalks' : 'Ponente — EcoTalks (Entre Economistas)'}
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
              · {currentLang === 'en' ? 'Los Andes University Cultural Center · Lima, Peru · May 7, 2022' : 'Centro Cultural Universitario Los Andes · Lima, Perú · 7 May. 2022'}
            </div>
            <p className="text-[17px] text-[var(--ink-2)] font-prose">
              {currentLang === 'en'
                ? 'Discussed fundamental economic principles and key economic issues with economics students, alongside '
                : 'Conversatorio sobre principios económicos fundamentales y coyuntura económica con estudiantes de economía, junto al Dr. '}
              <a
                href="https://www.udep.edu.pe/perfil/miguel-carpio/"
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link"
              >
                Miguel Ángel Carpio
              </a>
              {currentLang === 'en' ? ', Ph.D.' : ', Ph.D.'}
            </p>
          </article>
        </div>

        {/* Congress / Congresos */}
        <div className="pt-8 border-t border-[var(--rule)] space-y-6">
          <h3 className="font-label text-xs uppercase tracking-wider text-[var(--ink-3)] font-mono">
            {currentLang === 'en' ? 'Congress' : 'Congresos'}
          </h3>
          <div className="space-y-6">
            {DAVID_DATA.congresses.map((cong) => (
              <article key={cong.id} className="space-y-1 text-[17px] font-prose leading-relaxed">
                <div className="font-semibold text-[18px]">
                  <a
                    href={cong.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="academic-link inline-flex items-baseline gap-1"
                  >
                    <span>{currentLang === 'en' ? cong.title : cong.titleEs}</span>
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
                  </a>
                </div>
                <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                  {currentLang === 'en' ? cong.meta : cong.metaEs}
                </div>
                {(cong.session || cong.sessionEs) && (
                  <p className="text-[15px] text-[var(--ink-2)] font-prose pt-0.5">
                    {currentLang === 'en' ? cong.session : cong.sessionEs}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Community & Professional Affiliations (formatted exactly like complementary education) */}
        <div className="pt-8 border-t border-[var(--rule)] space-y-6">
          <h3 className="font-label text-xs uppercase tracking-wider text-[var(--ink-3)] font-mono">
            {currentLang === 'en' ? 'Community & affiliations' : 'Comunidad y afiliaciones'}
          </h3>
          <div className="space-y-6">
            {DAVID_DATA.affiliations.map((aff) => (
              <div key={aff.id} className="space-y-1 text-[17px] font-prose leading-relaxed">
                <div className="font-semibold text-[18px] text-[var(--ink)]">
                  {aff.url ? (
                    <a
                      href={aff.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="academic-link inline-flex items-baseline gap-1"
                    >
                      <span>{currentLang === 'en' ? aff.title : aff.titleEs}</span>
                      <ExternalLink className="h-3 w-3 opacity-60 shrink-0 self-center" />
                    </a>
                  ) : (
                    <span>{currentLang === 'en' ? aff.title : aff.titleEs}</span>
                  )}
                </div>
                <div className="text-xs font-label text-[var(--ink-3)] font-mono">
                  {currentLang === 'en' ? aff.meta : aff.metaEs}
                </div>
                {(currentLang === 'en' ? aff.details : aff.detailsEs).length > 0 && (
                  <ul className="text-sm font-prose text-[var(--ink-2)] space-y-0.5 pt-0.5">
                    {(currentLang === 'en' ? aff.details : aff.detailsEs).map((detail, idx) => (
                      <li key={idx} className="relative pl-4">
                        <span className="absolute left-0 top-[0.68em] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--ink-3)]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
