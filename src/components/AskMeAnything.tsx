import React, { useState, useRef, useEffect } from 'react';
import { DAVID_DATA } from '../data/davidProfileData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'you';
  text: string;
}

interface AskMeAnythingProps {
  currentLang: 'en' | 'es';
}

const GREETINGS = [
  'hola', 'hello', 'hi', 'hey', 'buenos dias', 'buenas tardes', 'buenas noches',
  'saludos', 'que tal', 'como estas', 'como te va', 'buenas', 'greetings', 'good morning', 'good afternoon', 'buen dia'
];

interface KnowledgeItem {
  keys: string[];
  answer: string;
}

const KNOWLEDGE_BASE_EN: KnowledgeItem[] = [
  {
    keys: ['research', 'interests', 'agenda', 'topics', 'focus', 'field', 'investigation', 'entrepreneurship', 'ai', 'study'],
    answer:
      'David’s primary research interests and topics focus on institutional entrepreneurship and AI entrepreneurship.\n\nHe is a Predoctoral Researcher in the Entrepreneurship Department at IESE Business School, analyzing how governance quality, regulatory barriers, and institutional frameworks moderate the entrepreneurship-growth relationship, as well as the economics of technological scaling and artificial intelligence adoption.'
  },
  {
    keys: ['linkedin', 'profile', 'network', 'social'],
    answer:
      `David’s LinkedIn profile is:\nhttps://www.linkedin.com/in/davidricardogp`
  },
  {
    keys: ['github', 'code', 'repository', 'repositories', 'repo', 'repos', 'git'],
    answer:
      `David’s GitHub profile is:\nhttps://github.com/davidricardogp\n\nCode repositories for his empirical research and papers:\n• Unpacking Institutions: https://github.com/davidricardogp/Unpacking-Institutions\n• Fuel Demand (Lima & Callao): https://github.com/davidricardogp/fuel-demand-lima-callao\n• Bartik Elasticity GIS Approach: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps`
  },
  {
    keys: ['scholar', 'google scholar', 'citations', 'metrics'],
    answer:
      `David’s Google Scholar profile is:\nhttps://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en`
  },
  {
    keys: ['orcid', 'identifier', 'id'],
    answer:
      `David’s ORCID identifier is 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`
  },
  {
    keys: ['papers', 'publications', 'working paper', 'published', 'articles', 'reports', 'doi', 'ssrn', 'unpacking', 'fuel', 'bartik'],
    answer:
      'David’s research publications and working papers with links:\n\n• Working Papers:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship"\n     Paper: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     GitHub: https://github.com/davidricardogp/Unpacking-Institutions\n\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao"\n     Paper: https://doi.org/10.21203/rs.3.rs-10995861/v1\n     GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao\n\n  3. "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru"\n     SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n     GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps\n\n• Policy Reports (EIC Scaling Club & IESE):\n  1. Corporate Venturing Ecosystem: https://doi.org/10.15581/018/79057\n  2. Scaleup Financing: https://doi.org/10.15581/018/79055'
  },
  {
    keys: ['book', 'monograph', 'dynamic', 'stochastic', 'optimization', 'amazon', 'kdp', 'julia', 'python'],
    answer:
      'David is the author of the academic monograph:\n\n"Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, 2026).\nBased on course lecture notes and theoretical problem sets, accompanied by computational replication algorithms in Python and Julia.\n\nAmazon link: https://www.amazon.com/dp/B0H7RQ2HCB'
  },
  {
    keys: ['public writing', 'essays', 'blog', 'writing', 'opinion', 'ipe', 'gobierno', 'formalizar', 'diario'],
    answer:
      'David’s public essays and analytical writing (in chronological order):\n\n1. "Scaling Deep Tech in Europe: Where Do Priorities Diverge?" (IESE Blog, Jul. 2026):\n   https://blog.iese.edu/entrepreneurship/2026/07/27/scaling-deep-tech-in-europe-where-do-priorities-diverge/\n2. "Formalizar no puede ser una carrera de obstáculos" (Peruvian Institute of Economics - IPE, Jun. 2026):\n   https://ipe.org.pe/\n3. "Perú innova, pero todavía le cuesta convertir conocimiento en resultados" (Diario El Gobierno, Jun. 2026):\n   https://diarioelgobierno.com/peru-innova-pero-todavia-le-cuesta-convertir-conocimiento-en-resultados-por-david-ricardo-gonzales-pena/\n4. "SDG 4: Quality Education | Match-A-Buddy" (University of Oxford: The Oxford Character Project, Jan. 2025):\n   https://oxfordcharacter.org/\n5. "Transformar las Instituciones: el camino hacia un Perú próspero" (Peruvian Institute of Economics - IPE, Dec. 2024):\n   https://ipe.org.pe/'
  },
  {
    keys: ['affiliations', 'community', 'wapor', 'cohort', 'member', 'network', 'fellow'],
    answer:
      'David’s professional affiliations and community memberships:\n\n• Peruvian Institute of Economics (IPE) — Ambassador, Young Leaders Network (2024–Present): https://ipe.org.pe/\n• Global Leaders Cohort (2024–Present, Oxford, UK): https://www.leadership-challenge.org/past-glc-2024\n• WAPOR Latinoamérica — Chapter Member (2024–2025): https://waporlatinoamerica.org/'
  },
  {
    keys: ['experience', 'work', 'worked', 'job', 'career', 'employment', 'roles', 'history', 'beder', 'bullard'],
    answer:
      'David’s professional trajectory:\n• Predoctoral Researcher at IESE Business School (since Jul. 2026).\n• Research Assistant at IESE’s Entrepreneurship & Innovation Center (2025–2026).\n• Head of Fundraising at beder (2023–2025, managing up to €0.5M in funding): https://beder.app/\n• Undergraduate Teaching Assistant at University of Piura (2023).\n• Undergraduate Research Assistant with Dr. Miguel Carpio (2023).\n• Economic Consulting Intern at Bullard Falla Ezcurra+ (2022): https://bullardfallaezcurra.com/\n• Finance Intern at Windham Mountain Club (New York, 2021–2022).'
  },
  {
    keys: ['teaching', 'ta', 'assistant', 'yuliya', 'snihur', 'liechtenstein', 'courses', 'classes'],
    answer:
      'At IESE Business School, David provides teaching assistance for:\n• Business Model Innovation and Fundamentals of Entrepreneurial Management (Prof. Yuliya Snihur, Ph.D.)\n• Entrepreneurial Finance (Prof. Heinrich Liechtenstein, Ph.D.).\n\nPreviously, he served as Teaching Assistant for Political and Economic Thought at the University of Piura.'
  },
  {
    keys: ['education', 'degree', 'university', 'study', 'studied', 'piura', 'udep', 'upf', 'pompeu', 'portales', 'udp', 'exchange', 'school'],
    answer:
      'Education and academic credentials:\n• B.Sc. in Economics from University of Piura (Peru, 2019–2024), University Cloister member and student delegate.\n• International academic exchanges at Diego Portales University (Chile) and Universitat Pompeu Fabra (Barcelona).\n• Complementary Education:\n  - IESE Business School (Predoctoral coursework, Barcelona, Spain, 2026)\n  - CAF & Complutense University of Madrid (Diploma in Governance and Public Innovation, 2026)\n  - EuroTeQ Ignite Bootcamp (IESE, 2026)\n  - World Bank Group Youth Summit (Behavioral Science in Public Policy, 2025)\n  - Oxford University — The Oxford Character Project (Leading with Character, 2025)\n  - Barcelona School of Economics (Energy Economics, 2024)\n  - Pompeu Fabra University (Measuring Citizen’s Digital Behaviours, 2024)\n  - The Catholic University of America (Law and Politics, 2023)\n  - Center for Research in Experimental Economics - CREE (2023): https://www.udep.edu.pe/cree/\n  - UNAM (Anthony Thirlwall Development Economics, 2021): https://res.org.uk/newsletter/obituary-tony-thirlwall/'
  },
  {
    keys: ['awards', 'fellowship', 'recognition', 'scholarship', 'prize', 'silver', 'honors', 'competition', 'thesis award'],
    answer:
      'Key honors and awards:\n• Silver Award at the China International College Students’ Innovation Competition 2026 (Spain Division)\n• CAF Scholarship for Diploma in Governance and Public Innovation (Complutense University of Madrid)\n• Global Leaders Cohort 2024 (Oxford & St. Gallen, top 1.82%)\n• Ambassador for the IPE Young Leaders Network\n• 2nd Place Ashok Kotwal Best Thesis Award (2024)\n• 2nd Place CFA Institute Ethics Challenge Peru (2022)\n• Fellowships from BSE, UPF, and The Catholic University of America.'
  },
  {
    keys: ['talk', 'talks', 'presentation', 'conference', 'forum', 'speech', 'speaker', 'host'],
    answer:
      'Academic talks and presentations:\n• Guest Lecture on Entrepreneurship Fundamentals at National University of Piura (Sept. 2026)\n• Host of the IESE Entrepreneurship & Innovation Center meeting on living labs with Dr. Fernando Fernandez (May 2026)\n• Speaker at XIX Investment Forum (PAD & Hub UDEP) on European startup policymaking (Aug. 2025)\n• Speaker at Hub UDEP on smarter startup ecosystems (Aug. 2025).'
  },
  {
    keys: ['cv', 'resume', 'curriculum', 'download'],
    answer:
      'You can inspect or download his Curriculum Vitae by clicking the "Curriculum Vitae" button in the navigation bar or header.'
  },
  {
    keys: ['peru', 'piura', 'born', 'grew up', 'from', 'origin'],
    answer:
      'David grew up in Piura, Peru, and earned a Bachelor of Science in Economics from the University of Piura. He worked on building and raising funds for a startup before joining IESE Business School in Barcelona, Spain.'
  },
  {
    keys: ['languages', 'spanish', 'english', 'speak'],
    answer:
      'David has native or bilingual proficiency in Spanish and full professional proficiency in English.'
  }
];

const KNOWLEDGE_BASE_ES: KnowledgeItem[] = [
  {
    keys: ['investigacion', 'investiga', 'intereses', 'temas', 'interesan', 'lineas', 'agenda', 'emprendimiento', 'institucional', 'ai', 'ia'],
    answer:
      'Los principales temas de investigación e intereses de David son institutional entrepreneurship y AI entrepreneurship.\n\nEs investigador predoctoral en el Departamento de Emprendimiento de IESE Business School, donde examina cómo la calidad de las instituciones, la gobernanza y las barreras regulatorias moderan la relación entre emprendimiento y crecimiento económico, así como la economía del escalamiento tecnológico y la adopción de inteligencia artificial.'
  },
  {
    keys: ['linkedin', 'perfil', 'red', 'contacto profesional'],
    answer:
      `El perfil de LinkedIn de David es:\nhttps://www.linkedin.com/in/davidricardogp`
  },
  {
    keys: ['github', 'codigo', 'repositorio', 'repositorios', 'repo', 'repos', 'git'],
    answer:
      `El GitHub de David es:\nhttps://github.com/davidricardogp\n\nRepositorios de código de sus investigaciones:\n• Unpacking Institutions: https://github.com/davidricardogp/Unpacking-Institutions\n• Fuel Demand (Lima y Callao): https://github.com/davidricardogp/fuel-demand-lima-callao\n• Bartik Elasticity GIS Approach: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps`
  },
  {
    keys: ['scholar', 'google scholar', 'citas', 'metricas'],
    answer:
      `El perfil de Google Scholar de David es:\nhttps://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en`
  },
  {
    keys: ['orcid', 'identificador', 'id'],
    answer:
      `El identificador ORCID de David es 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`
  },
  {
    keys: ['papers', 'publicaciones', 'working paper', 'articulos', 'informes', 'doi', 'ssrn', 'unpacking', 'fuel', 'bartik'],
    answer:
      'Publicaciones de investigación y working papers de David con enlaces:\n\n• Documentos de Trabajo:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship"\n     Paper: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     GitHub: https://github.com/davidricardogp/Unpacking-Institutions\n\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao"\n     Paper: https://doi.org/10.21203/rs.3.rs-10995861/v1\n     GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao\n\n  3. "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru"\n     SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n     GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps\n\n• Informes de Política (EIC Scaling Club e IESE):\n  1. Corporate Venturing Ecosystem: https://doi.org/10.15581/018/79057\n  2. Scaleup Financing: https://doi.org/10.15581/018/79055'
  },
  {
    keys: ['libro', 'libros', 'monografia', 'optimizacion', 'dinamica', 'estocastica', 'amazon', 'kdp', 'julia', 'python'],
    answer:
      'David es autor de la monografía académica:\n\n"Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, 2026).\nBasada en apuntes de clase y ejercicios teóricos, acompañada de algoritmos de replicación computacional en Python y Julia.\n\nEnlace en Amazon: https://www.amazon.com/dp/B0H7RQ2HCB'
  },
  {
    keys: ['articulos', 'ensayos', 'opinion', 'ipe', 'gobierno', 'formalizar', 'blog', 'escritos', 'public writing'],
    answer:
      'Ensayos y artículos de divulgación de David (orden cronológico):\n\n1. "Scaling Deep Tech in Europe: Where Do Priorities Diverge?" (Blog de IESE, jul. 2026):\n   https://blog.iese.edu/entrepreneurship/2026/07/27/scaling-deep-tech-in-europe-where-do-priorities-diverge/\n2. "Formalizar no puede ser una carrera de obstáculos" (Instituto Peruano de Economía - IPE, jun. 2026):\n   https://ipe.org.pe/\n3. "Perú innova, pero todavía le cuesta convertir conocimiento en resultados" (Diario El Gobierno, jun. 2026):\n   https://diarioelgobierno.com/peru-innova-pero-todavia-le-cuesta-convertir-conocimiento-en-resultados-por-david-ricardo-gonzales-pena/\n4. "SDG 4: Quality Education | Match-A-Buddy" (Universidad de Oxford: The Oxford Character Project, ene. 2025):\n   https://oxfordcharacter.org/\n5. "Transformar las Instituciones: el camino hacia un Perú próspero" (Instituto Peruano de Economía - IPE, dic. 2024):\n   https://ipe.org.pe/'
  },
  {
    keys: ['afiliado', 'afiliaciones', 'comunidad', 'organizaciones', 'ipe', 'wapor', 'oxford', 'miembro', 'red'],
    answer:
      'Afiliaciones y membresías profesionales de David:\n\n• Instituto Peruano de Economía (IPE) — Embajador de la Red de Jóvenes Líderes (2024–Actualidad): https://ipe.org.pe/\n• Global Leaders Cohort (2024–Actualidad, Oxford, UK): https://www.leadership-challenge.org/past-glc-2024\n• WAPOR Latinoamérica — Miembro del capítulo regional (2024–2025): https://waporlatinoamerica.org/'
  },
  {
    keys: ['experiencia', 'trabajo', 'carrera', 'roles', 'beder', 'bullard', 'trayectoria', 'empleo'],
    answer:
      'Trayectoria profesional de David:\n• Investigador Predoctoral en IESE Business School (desde jul. 2026).\n• Asistente de Investigación en el Centro de Emprendimiento e Innovación de IESE (2025–2026).\n• Head of Fundraising en beder (2023–2025, gestionando hasta 0,5M€ en fondos): https://beder.app/\n• Asistente de Docencia en la Universidad de Piura (2023).\n• Asistente de Investigación con el Dr. Miguel Carpio (2023).\n• Practicante de Consultoría Económica en Bullard Falla Ezcurra+ (2022): https://bullardfallaezcurra.com/\n• Practicante de Finanzas en Windham Mountain Club (Nueva York, 2021–2022).'
  },
  {
    keys: ['docencia', 'asistencia', 'profesor', 'yuliya', 'snihur', 'liechtenstein', 'clases', 'cursos'],
    answer:
      'En IESE Business School, David es asistente de docencia en:\n• Business Model Innovation y Fundamentals of Entrepreneurial Management (Dra. Yuliya Snihur, Ph.D.)\n• Entrepreneurial Finance (Dr. Heinrich Liechtenstein, Ph.D.).\n\nAnteriormente fue asistente de docencia en Pensamiento Político y Económico en la Universidad de Piura.'
  },
  {
    keys: ['educacion', 'estudio', 'universidad', 'grado', 'piura', 'udep', 'upf', 'portales', 'udp', 'intercambio', 'licenciatura'],
    answer:
      'Formación académica y credenciales:\n• Licenciado en Economía por la Universidad de Piura (Perú, 2019–2024), miembro del Claustro Universitario y delegado estudiantil.\n• Intercambios académicos en la Universidad Diego Portales (Chile) y en la Universitat Pompeu Fabra (Barcelona).\n• Formación complementaria:\n  - IESE Business School (Cursos predoctorales, Barcelona, España, 2026)\n  - CAF y Universidad Complutense de Madrid (Diplomado en Gobernabilidad e Innovación Pública, 2026)\n  - EuroTeQ Ignite Bootcamp (IESE, 2026)\n  - Cumbre de la Juventud del Banco Mundial (2025)\n  - Universidad de Oxford — The Oxford Character Project (2025)\n  - Barcelona School of Economics (Economía de la Energía, 2024)\n  - Universitat Pompeu Fabra (Medición de Comportamientos Digitales, 2024)\n  - The Catholic University of America (Derecho y Política, 2023)\n  - Center for Research in Experimental Economics - CREE (2023): https://www.udep.edu.pe/cree/\n  - UNAM (Anthony Thirlwall, 2021): https://res.org.uk/newsletter/obituary-tony-thirlwall/'
  },
  {
    keys: ['premios', 'becas', 'reconocimientos', 'plata', 'concursos', 'tesis', 'honor'],
    answer:
      'Premios y reconocimientos:\n• Premio de Plata en la Competición de Innovación de Estudiantes Universitarios de China 2026 (División España)\n• Beca CAF para el Diplomado en Gobernabilidad e Innovación Pública en la Universidad Complutense de Madrid\n• Global Leaders Cohort 2024 (Oxford y St. Gallen, top 1,82%)\n• Embajador de la Red de Jóvenes Líderes IPE\n• 2º puesto en el Premio Ashok Kotwal a la Mejor Tesis (2024)\n• 2º puesto en el CFA Institute Ethics Challenge Perú (2022)\n• Becas de BSE, UPF y The Catholic University of America.'
  },
  {
    keys: ['charlas', 'conferencias', 'ponencias', 'presentacion', 'foro'],
    answer:
      'Charlas y ponencias académicas:\n• Clase magistral sobre fundamentos de emprendimiento en la Universidad Nacional de Piura (sep. 2026)\n• Anfitrión del encuentro de IESE con el Dr. Fernando Fernandez sobre living labs (may. 2026)\n• Ponente en el XIX Foro de Inversión (PAD y Hub UDEP) sobre diseño de políticas europeas para startups (ago. 2025)\n• Ponente en Hub UDEP sobre ecosistemas de startups más inteligentes (ago. 2025).'
  },
  {
    keys: ['cv', 'curriculum', 'descargar'],
    answer:
      'Puedes consultar o descargar su Curriculum Vitae pulsando el botón "Curriculum Vitae" situado en la barra superior o cabecera de la web.'
  },
  {
    keys: ['peru', 'piura', 'origen', 'nacido', 'donde nacio'],
    answer:
      'David creció en Piura, Perú, y se graduó en Economía por la Universidad de Piura. Trabajó creando y captando fondos para una startup antes de incorporarse como investigador predoctoral a IESE Business School en Barcelona, España.'
  },
  {
    keys: ['idiomas', 'espanol', 'ingles', 'habla'],
    answer:
      'David cuenta con dominio nativo o bilingüe en español y competencia profesional completa en inglés.'
  }
];

// Helper to render plain text with clickable URLs
const renderWithLinks = (content: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);

  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--signal)] underline hover:text-[var(--signal-lift)] break-all font-mono text-[13px] inline-flex items-center gap-0.5"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export const AskMeAnything: React.FC<AskMeAnythingProps> = ({ currentLang }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'init',
      sender: 'bot',
      text:
        currentLang === 'en'
          ? 'Hello! Ask about David Ricardo’s research topics (institutional entrepreneurship & AI entrepreneurship), working papers, books, code repositories, affiliations, or background.'
          : '¡Hola! Pregunta sobre los temas de investigación de David Ricardo (institutional entrepreneurship y AI entrepreneurship), working papers, libros, repositorios de código, afiliaciones o trayectoria.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [
          {
            id: 'init',
            sender: 'bot',
            text:
              currentLang === 'en'
                ? 'Hello! Ask about David Ricardo’s research topics (institutional entrepreneurship & AI entrepreneurship), working papers, books, code repositories, affiliations, or background.'
                : '¡Hola! Pregunta sobre los temas de investigación de David Ricardo (institutional entrepreneurship y AI entrepreneurship), working papers, libros, repositorios de código, afiliaciones o trayectoria.'
          }
        ];
      }
      return prev;
    });
  }, [currentLang]);

  const chips =
    currentLang === 'en'
      ? [
          'What are David’s research topics?',
          'Where is his LinkedIn profile?',
          'What are his GitHub repositories?',
          'What working papers and books has he published?',
          'Where has he worked?',
          'What are his community affiliations?'
        ]
      : [
          '¿Qué temas de investigación le interesan?',
          '¿Cuál es su perfil de LinkedIn?',
          '¿Cuáles son sus repositorios de GitHub?',
          '¿Qué papers y libros ha publicado?',
          '¿Dónde ha trabajado?',
          '¿Cuáles son sus afiliaciones y comunidad?'
        ];

  const getAnswer = (query: string): string => {
    const qTrimmed = query.trim().toLowerCase();
    const qClean = qTrimmed
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    // Check for greetings (hola, hello, hi, etc.)
    const isGreeting = GREETINGS.some((g) => {
      const gNorm = g.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return qClean === gNorm || qClean.startsWith(`${gNorm} `) || qClean.endsWith(` ${gNorm}`);
    });

    if (isGreeting) {
      if (currentLang === 'en') {
        return `Hello! It's great to connect with you. I can answer any questions about David Ricardo Gonzales Peña — Predoctoral Researcher in the Entrepreneurship Department at IESE Business School.\n\nHis primary research focuses on institutional entrepreneurship and AI entrepreneurship. You can ask about his papers, monograph, GitHub repositories, LinkedIn, affiliations, teaching, or education.`;
      }
      return `¡Hola! Un gusto saludarte. Puedo responder cualquier pregunta sobre David Ricardo Gonzales Peña — investigador predoctoral en el Departamento de Emprendimiento de IESE Business School.\n\nSus principales temas de investigación son institutional entrepreneurship y AI entrepreneurship. Puedes preguntarme sobre sus papers, libros, repositorios de GitHub, LinkedIn, afiliaciones, docencia o trayectoria.`;
    }

    // Direct checks for specific high-value questions
    if (qClean.includes('linkedin')) {
      return currentLang === 'en'
        ? `David's LinkedIn profile is:\nhttps://www.linkedin.com/in/davidricardogp`
        : `El perfil de LinkedIn de David es:\nhttps://www.linkedin.com/in/davidricardogp`;
    }

    if (qClean.includes('github') || qClean.includes('repo') || qClean.includes('codigo')) {
      return currentLang === 'en'
        ? `David's GitHub profile is:\nhttps://github.com/davidricardogp\n\nCode repositories for his research:\n• Unpacking Institutions: https://github.com/davidricardogp/Unpacking-Institutions\n• Fuel Demand (Lima & Callao): https://github.com/davidricardogp/fuel-demand-lima-callao\n• Bartik Elasticity GIS Approach: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps`
        : `El GitHub de David es:\nhttps://github.com/davidricardogp\n\nRepositorios de código de sus investigaciones:\n• Unpacking Institutions: https://github.com/davidricardogp/Unpacking-Institutions\n• Fuel Demand (Lima y Callao): https://github.com/davidricardogp/fuel-demand-lima-callao\n• Bartik Elasticity GIS Approach: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps`;
    }

    if (qClean.includes('scholar') || qClean.includes('cita')) {
      return currentLang === 'en'
        ? `David's Google Scholar profile is:\nhttps://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en`
        : `El perfil de Google Scholar de David es:\nhttps://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en`;
    }

    if (qClean.includes('orcid')) {
      return currentLang === 'en'
        ? `David's ORCID identifier is 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`
        : `El identificador ORCID de David es 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`;
    }

    // Direct check for research topics / interests
    if (
      qClean.includes('tema') ||
      qClean.includes('interes') ||
      qClean.includes('investig') ||
      qClean.includes('topic') ||
      qClean.includes('research') ||
      qClean.includes('agenda')
    ) {
      return currentLang === 'en'
        ? `David’s primary research interests and topics focus on institutional entrepreneurship and AI entrepreneurship.\n\nHe investigates how governance quality, regulatory barriers, and institutional frameworks moderate the entrepreneurship-growth relationship, as well as the economics of technological scaling and AI adoption.`
        : `Los principales temas de investigación e intereses de David son institutional entrepreneurship y AI entrepreneurship.\n\nInvestiga cómo la calidad institucional, las barreras regulatorias y los marcos de gobernanza condicionan la relación entre emprendimiento y crecimiento económico, así como la economía del escalamiento tecnológico y la adopción de inteligencia artificial.`;
    }

    const words = qClean
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 || w === 'cv' || w === 'ai' || w === 'ia');

    const kb = currentLang === 'en' ? KNOWLEDGE_BASE_EN : KNOWLEDGE_BASE_ES;
    let bestMatch: string | null = null;
    let maxScore = 0;

    for (const item of kb) {
      let score = 0;
      for (const word of words) {
        if (item.keys.includes(word)) {
          score += 3;
        } else if (item.keys.some((k) => k.includes(word) || word.includes(k))) {
          score += 1;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item.answer;
      }
    }

    if (bestMatch && maxScore > 0) {
      return bestMatch;
    }

    // Clean Fallback when query is beyond knowledge base (no email displayed)
    if (currentLang === 'en') {
      return `I don't have that specific record on this page, as I only answer from verified academic information about David Ricardo recorded on this website.\n\nYou can ask about his research topics (institutional entrepreneurship & AI entrepreneurship), working papers, monograph, GitHub repositories, LinkedIn, or academic affiliations.`;
    }
    return `No dispongo de esa información específica en esta página, ya que solo respondo a partir de datos académicos verificados sobre David Ricardo registrados en este sitio web.\n\nPuedes preguntarme sobre sus temas de investigación (institutional entrepreneurship y AI entrepreneurship), working papers, monografía, repositorios de GitHub, LinkedIn o afiliaciones académicas.`;
  };

  const handleAsk = (question: string) => {
    if (!question.trim()) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'you',
      text: question.trim()
    };

    const reply = getAnswer(question);
    const botMsg: ChatMessage = {
      id: String(Date.now() + 1),
      sender: 'bot',
      text: reply
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk(inputVal);
  };

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="py-12 border-b border-[var(--rule)]" id="ask">
      <div className="space-y-6">
        <div>
          <h2 className="sec-heading">
            <span className="n">06</span>
            <span>{currentLang === 'en' ? 'Ask me anything' : 'Pregúntame lo que quieras'}</span>
          </h2>
        </div>

        {/* Chat Card matching Louis Zhu .chat */}
        <div className="chat">
          <div className="chat-head">
            <div>
              <strong>{currentLang === 'en' ? 'Ask David Ricardo...' : 'Pregunta a David Ricardo...'}</strong>
            </div>
            <span className="chat-state">
              <i />
              {currentLang === 'en' ? 'ready' : 'activo'}
            </span>
          </div>

          <div className="chat-log" ref={logRef} aria-live="polite">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`msg ${m.sender === 'bot' ? 'is-bot' : 'is-you'}`}
              >
                <div className="msg-tag">
                  {m.sender === 'bot' ? 'DRG' : currentLang === 'en' ? 'YOU' : 'TÚ'}
                </div>
                <div className="msg-body whitespace-pre-line leading-relaxed">
                  {renderWithLinks(m.text)}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-chips">
            {chips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleAsk(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          <form className="chat-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={currentLang === 'en' ? 'Ask about David Ricardo…' : 'Pregunta sobre David Ricardo…'}
              autoComplete="off"
              aria-label={currentLang === 'en' ? 'Ask a question about David Ricardo' : 'Haz una pregunta sobre David Ricardo'}
            />
            <button type="submit">
              {currentLang === 'en' ? 'Ask' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
