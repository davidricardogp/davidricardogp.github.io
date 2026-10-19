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

interface EntityItem {
  keys: string[];
  answerEn: string;
  answerEs: string;
}

const ENTITIES_KB: EntityItem[] = [
  {
    keys: ['diego portales', 'portales', 'udp'],
    answerEn:
      'Diego Portales University (UDP) is a prestigious private research university located in Santiago, Chile, founded in 1982.\n\nDavid Ricardo completed an undergraduate academic exchange in Commercial Engineering here (March – July 2023), taking coursework in labour economics and environmental economics.\n\nOfficial website: https://www.udp.cl/',
    answerEs:
      'La Universidad Diego Portales (UDP) es una prestigiosa universidad privada chilena fundada en 1982 en Santiago de Chile.\n\nDavid Ricardo realizó allí un intercambio académico en Ingeniería Comercial (marzo – julio de 2023), cursando materias de economía laboral y economía ambiental.\n\nSitio web oficial: https://www.udp.cl/'
  },
  {
    keys: ['universidad de piura', 'udep'],
    answerEn:
      'University of Piura (UDEP) is a premier private university in Peru with main campuses in Piura and Lima, founded in 1969.\n\nIt is David Ricardo’s alma mater, where he earned his Bachelor of Science in Economics (2019–2024). During his studies, he served as a member of the University Cloister, Delegate of the Faculty of Economics, Undergraduate Teaching Assistant, and Undergraduate Research Assistant. He was also awarded 2nd Place in the Ashok Kotwal Best Thesis Award (2024).\n\nOfficial website: https://www.udep.edu.pe/',
    answerEs:
      'La Universidad de Piura (UDEP) es una destacada universidad privada peruana con campus en Piura y Lima, fundada en 1969.\n\nEs el alma mater de David Ricardo, donde obtuvo su Licenciatura en Economía (2019–2024). Durante sus estudios, fue miembro del Claustro Universitario, Delegado de la Facultad de Ciencias Económicas y Empresariales, asistente de docencia e investigación, y recibió el 2º puesto del Premio Ashok Kotwal a la Mejor Tesis (2024).\n\nSitio web oficial: https://www.udep.edu.pe/'
  },
  {
    keys: ['pompeu fabra', 'pompeu', 'upf'],
    answerEn:
      'Universitat Pompeu Fabra (UPF) is a prestigious public research university in Barcelona, Spain, internationally renowned for its leadership in economics and social sciences.\n\nDavid Ricardo completed an undergraduate academic exchange in Economics here (Sep. – Dec. 2023), was a member of the UPF E-Society (Entrepreneurship, Innovation & Startups), and completed the Winter Methods School 2024 on measuring citizens’ digital behaviours with an academic fellowship.\n\nOfficial website: https://www.upf.edu/',
    answerEs:
      'La Universitat Pompeu Fabra (UPF) es una universidad pública de Barcelona, España, de alto prestigio internacional en economía y ciencias sociales.\n\nDavid Ricardo realizó allí un intercambio académico en Economía (sep. – dic. de 2023), fue miembro de UPF E-Society (Emprendimiento, Innovación y Startups) y completó la Escuela de Métodos de Invierno 2024 en medición de comportamientos digitales de la ciudadanía con una beca académica.\n\nSitio web oficial: https://www.upf.edu/'
  },
  {
    keys: ['iese', 'iese business school'],
    answerEn:
      'IESE Business School is the graduate business school of the University of Navarra, with world-class campuses in Barcelona, Madrid, Munich, New York, and São Paulo, consistently ranked among the world’s top business schools by the Financial Times.\n\nDavid Ricardo is currently a Predoctoral Researcher in the Entrepreneurship Department and Research Assistant at the Entrepreneurship and Innovation Center (EIC), conducting applied research on institutional entrepreneurship and assisting Prof. Yuliya Snihur, Ph.D., and Prof. Heinrich Liechtenstein, Ph.D.\n\nOfficial website: https://www.iese.edu/',
    answerEs:
      'IESE Business School es la escuela de posgrado en dirección de empresas de la Universidad de Navarra, con campus en Barcelona, Madrid, Múnich, Nueva York y São Paulo, clasificada sistemáticamente entre las mejores escuelas de negocios del mundo por el Financial Times.\n\nDavid Ricardo es actualmente Investigador Predoctoral en el Departamento de Emprendimiento y Asistente de Investigación en el Centro de Emprendimiento e Innovación (EIC), desarrollando investigación aplicada sobre emprendimiento institucional y brindando asistencia docente a la Dra. Yuliya Snihur y al Dr. Heinrich Liechtenstein.\n\nSitio web oficial: https://www.iese.edu/'
  },
  {
    keys: ['complutense', 'ucm', 'universidad complutense'],
    answerEn:
      'Complutense University of Madrid (UCM) is one of the oldest and largest public research universities in Spain, founded in 1293.\n\nDavid Ricardo completed the Diploma in Governance and Public Innovation (2026) here under a full scholarship granted by CAF – Development Bank of Latin America and the Caribbean.\n\nOfficial website: https://www.ucm.es/',
    answerEs:
      'La Universidad Complutense de Madrid (UCM) es una de las universidades públicas más antiguas e importantes de España, fundada en 1293.\n\nDavid Ricardo cursó en la UCM el Diplomado en Gobernabilidad e Innovación Pública (2026) bajo una beca completa otorgada por la CAF – Banco de Desarrollo de América Latina y el Caribe.\n\nSitio web oficial: https://www.ucm.es/'
  },
  {
    keys: ['oxford', 'oxford university', 'universidad de oxford'],
    answerEn:
      'The University of Oxford is the oldest university in the English-speaking world, located in Oxford, United Kingdom.\n\nDavid Ricardo was selected for the Global Leaders Cohort 2024 by Oxford’s Social Sciences Division (in collaboration with the University of St. Gallen, among the top 1.82% of candidates globally) and completed the "Leading with Character" leadership development program with The Oxford Character Project (2025).\n\nOfficial website: https://www.ox.ac.uk/\nOxford Character Project: https://oxfordcharacter.org/\nGlobal Leaders Cohort: https://www.leadership-challenge.org/about-glc',
    answerEs:
      'La Universidad de Oxford es la universidad más antigua del mundo de habla inglesa, ubicada en Oxford, Reino Unido.\n\nDavid Ricardo fue seleccionado para el Global Leaders Cohort 2024 por la División de Ciencias Sociales de la Universidad de Oxford (en colaboración con la Universidad de St. Gallen, entre el 1,82% superior de candidatos a nivel global) y completó el programa "Leading with Character" con The Oxford Character Project (2025).\n\nSitio web oficial: https://www.ox.ac.uk/\nOxford Character Project: https://oxfordcharacter.org/\nGlobal Leaders Cohort: https://www.leadership-challenge.org/about-glc'
  },
  {
    keys: ['st gallen', 'sant gallen', 'saint gallen', 'san galo', 'unisg'],
    answerEn:
      'The University of St. Gallen (HSG) is a premier public research university in St. Gallen, Switzerland, renowned for business administration, economics, and international management.\n\nIt co-organizes the Global Leaders Cohort 2024 alongside the Social Sciences Division at the University of Oxford, in which David Ricardo participates.\n\nOfficial website: https://www.unisg.ch/\nGlobal Leaders Cohort: https://www.leadership-challenge.org/about-glc',
    answerEs:
      'La Universidad de St. Gallen (HSG) es una prestigiosa universidad pública de investigación en San Galo, Suiza, referente europeo en administración de empresas, economía y finanzas.\n\nEs coorganizadora del Global Leaders Cohort 2024 junto a la División de Ciencias Sociales de la Universidad de Oxford, programa del cual David Ricardo es miembro.\n\nSitio web oficial: https://www.unisg.ch/\nGlobal Leaders Cohort: https://www.leadership-challenge.org/about-glc'
  },
  {
    keys: ['bse', 'barcelona school of economics'],
    answerEn:
      'The Barcelona School of Economics (BSE) is an institution for scientific cooperation and premier graduate research in economics, finance, and data science based in Barcelona, Spain.\n\nDavid Ricardo was awarded an academic fellowship for the Energy Economics Summer School 2024 at BSE.\n\nOfficial website: https://bse.eu/',
    answerEs:
      'La Barcelona School of Economics (BSE) es una institución científica de referencia internacional para la investigación y posgrados en economía y ciencia de datos en Barcelona, España.\n\nDavid Ricardo fue beneficiario de una beca académica para la Escuela de Verano de Economía de la Energía 2024 en BSE.\n\nSitio web oficial: https://bse.eu/'
  },
  {
    keys: ['catholic university of america', 'busch school', 'catholic university', 'universidad catolica de america'],
    answerEn:
      'The Catholic University of America (CUA) is a private pontifical university in Washington, D.C., United States.\n\nDavid Ricardo attended the Law and Politics Summer School 2023 at The Busch School of Business through an In Altum Scholarship.\n\nOfficial website: https://business.catholic.edu/',
    answerEs:
      'The Catholic University of America (CUA) es una universidad pontificia privada ubicada en Washington, D.C., Estados Unidos.\n\nDavid Ricardo cursó la Escuela de Verano de Derecho y Política 2023 en The Busch School of Business mediante una beca del programa In Altum.\n\nSitio web oficial: https://business.catholic.edu/'
  },
  {
    keys: ['unam', 'universidad nacional autonoma de mexico'],
    answerEn:
      'The National Autonomous University of Mexico (UNAM) is Mexico’s premier public research university.\n\nDavid Ricardo completed coursework in Development Economics regarding structural balance-of-payments restrictions taught by the celebrated British economist Anthony Thirlwall, Ph.D. (2021).\n\nOfficial website: https://www.unam.mx/',
    answerEs:
      'La Universidad Nacional Autónoma de México (UNAM) es la mayor y más prestigiosa universidad pública de investigación de México.\n\nDavid Ricardo cursó allí estudios en Economía del Desarrollo sobre problemas analíticos y restricciones de balanza de pagos impartidos por el célebre economista británico Anthony Thirlwall, Ph.D. (2021).\n\nSitio web oficial: https://www.unam.mx/'
  },
  {
    keys: ['nacional de piura', 'unp'],
    answerEn:
      'The National University of Piura (UNP) is the leading public research university in Piura, Peru.\n\nDavid Ricardo delivered a guest lecture on Entrepreneurship Fundamentals here (2026) and collaborates on economic research with UNP professors Dr. Jorge Ricardo Gonzales Castillo and Dr. Luis Varona Castillo.\n\nOfficial website: https://www.unp.edu.pe/',
    answerEs:
      'La Universidad Nacional de Piura (UNP) es la principal universidad pública de la región Piura en Perú.\n\nDavid Ricardo dictó allí una clase magistral sobre Fundamentos del Emprendimiento (2026) y colabora en proyectos de investigación con los profesores e investigadores de la UNP Dr. Jorge Ricardo Gonzales Castillo y Dr. Luis Varona Castillo.\n\nSitio web oficial: https://www.unp.edu.pe/'
  },
  {
    keys: ['tongji', 'upm', 'politecnica de madrid', 'shanghai normal', 'njupt'],
    answerEn:
      'Polytechnic University of Madrid (UPM) and Tongji University are leading engineering institutions in Spain and China. Together with Nanjing University of Posts and Telecommunications and Shanghai Normal University, they organized the China International College Students’ Innovation Competition 2026 (Spain Division), where David Ricardo won the Silver Award.\n\nUPM: https://www.upm.es/\nTongji: https://en.tongji.edu.cn/',
    answerEs:
      'La Universidad Politécnica de Madrid (UPM) y Tongji University son universidades tecnológicas líderes en España y China. Coorganizaron la China International College Students’ Innovation Competition 2026 (División España), donde David Ricardo obtuvo el Premio de Plata (Silver Award).\n\nUPM: https://www.upm.es/\nTongji: https://en.tongji.edu.cn/'
  },
  {
    keys: ['universidad del pacifico', 'pacifico'],
    answerEn:
      'University of the Pacific (Universidad del Pacífico) is a premier private university in Lima, Peru, known for its leadership in economics and finance. It co-organized the E-Moot Libre Competencia 2022 where David Ricardo was a national semifinalist.\n\nOfficial website: https://www.up.edu.pe/',
    answerEs:
      'La Universidad del Pacífico (UP) es una prestigiosa universidad privada en Lima, Perú, referente en economía y finanzas. Coorganizó el E-Moot Libre Competencia 2022 con Bullard Falla Ezcurra+, donde David Ricardo fue semifinalista nacional.\n\nSitio web oficial: https://www.up.edu.pe/'
  },
  {
    keys: ['pad', 'pad escuela de direccion', 'pad school of management'],
    answerEn:
      'PAD - School of Management is the graduate business school of the University of Piura, located in Lima, Peru. David Ricardo was a featured speaker at the XIX Investment Forum organized by PAD and Hub UDEP, presenting on European policymaking for startups.\n\nOfficial website: https://pad.edu/',
    answerEs:
      'PAD - Escuela de Dirección es la escuela de posgrado en negocios de la Universidad de Piura en Lima, Perú. David Ricardo fue ponente en el XIX Foro de Inversión organizado por el PAD y Hub UDEP, presentando sobre diseño de políticas europeas para startups.\n\nSitio web oficial: https://pad.edu/'
  },
  {
    keys: ['caf', 'banco de desarrollo de america latina'],
    answerEn:
      'CAF – Development Bank of Latin America and the Caribbean is a multilateral development institution promoting sustainable development and regional integration. David Ricardo was awarded a full scholarship for the Diploma in Governance and Public Innovation at UCM (2026) and completed public economics training.\n\nOfficial website: https://www.caf.com/',
    answerEs:
      'CAF – Banco de Desarrollo de América Latina y el Caribe es una institución financiera multilateral que promueve la integración y el desarrollo sostenible. David Ricardo obtuvo la Beca CAF para el Diplomado en Gobernabilidad e Innovación Pública en la UCM (2026).\n\nSitio web oficial: https://www.caf.com/'
  },
  {
    keys: ['world bank', 'banco mundial'],
    answerEn:
      'The World Bank Group is an international financial institution providing development financing. David Ricardo participated in the World Bank Group Youth Summit (2025) in Behavioral Science in Public Policy.\n\nOfficial website: https://www.worldbank.org/',
    answerEs:
      'El Grupo Banco Mundial es una institución financiera internacional. David Ricardo participó en la Cumbre de la Juventud (Youth Summit 2025) en el área de Ciencias del Comportamiento en Políticas Públicas.\n\nSitio web oficial: https://www.worldbank.org/'
  },
  {
    keys: ['bid', 'iadb', 'banco interamericano'],
    answerEn:
      'The Inter-American Development Bank (IDB) is the main source of long-term development financing for Latin America and the Caribbean. David Ricardo completed its certification in Behavioral Economics for Better Public Policies (2021).\n\nOfficial website: https://www.iadb.org/',
    answerEs:
      'El Banco Interamericano de Desarrollo (BID) es la principal fuente de financiamiento para América Latina y el Caribe. David Ricardo completó su certificación en Economía del Comportamiento para Mejores Políticas Públicas (2021).\n\nSitio web oficial: https://www.iadb.org/'
  },
  {
    keys: ['ipe', 'instituto peruano de economia'],
    answerEn:
      'The Peruvian Institute of Economics (IPE) is Peru’s foremost private economic research think tank. David Ricardo is an Ambassador for the IPE Young Leaders Network (2024–Present) and writes opinion columns on institutional economics.\n\nOfficial website: https://ipe.org.pe/',
    answerEs:
      'El Instituto Peruano de Economía (IPE) es el principal centro de pensamiento económico privado del Perú. David Ricardo es Embajador de la Red de Jóvenes Líderes IPE (2024–Actualidad) y escribe columnas de análisis económico e institucional.\n\nSitio web oficial: https://ipe.org.pe/'
  },
  {
    keys: ['wapor', 'wapor latinoamerica'],
    answerEn:
      'WAPOR (World Association for Public Opinion Research) Latin America is the professional and scientific association for public opinion research across Latin America. David Ricardo is an active chapter member (2024–Present).\n\nOfficial website: https://waporlatinoamerica.org/',
    answerEs:
      'WAPOR (World Association for Public Opinion Research) Latinoamérica es la asociación científica dedicada al estudio de la opinión pública en la región. David Ricardo es miembro del capítulo regional (2024–Actualidad).\n\nSitio web oficial: https://waporlatinoamerica.org/'
  },
  {
    keys: ['global leaders cohort', 'glc'],
    answerEn:
      'The Global Leaders Cohort is an exclusive international leadership cohort (Oxford, UK · 2024–Present) organized by the Social Sciences Division at Oxford University and the University of St. Gallen, selecting candidates among the top 1.82% globally. David Ricardo is a member of the cohort.\n\nOfficial website: https://www.leadership-challenge.org/about-glc',
    answerEs:
      'El Global Leaders Cohort es un selecto programa internacional de liderazgo (Oxford, UK · 2024–Actualidad) organizado por la División de Ciencias Sociales de la Universidad de Oxford y la Universidad de St. Gallen (seleccionando al 1,82% superior de candidatos a nivel global). David Ricardo es miembro de la cohorte.\n\nSitio web oficial: https://www.leadership-challenge.org/about-glc'
  },
  {
    keys: ['beder'],
    answerEn:
      'beder is a travel-tech startup based in Barcelona. David Ricardo served as Head of Fundraising (2023–2025), working alongside the founder to manage public funding applications and fundraising rounds of up to €0.5M.\n\nOfficial website: https://beder.app/',
    answerEs:
      'beder es una startup de viajes y tecnología fundada en Barcelona. David Ricardo se desempeñó como Head of Fundraising (2023–2025), apoyando al fundador en el escalamiento y gestionando convocatorias públicas y rondas de financiación de hasta 0,5M€.\n\nSitio web oficial: https://beder.app/'
  },
  {
    keys: ['bullard', 'bfe', 'bullard falla ezcurra'],
    answerEn:
      'Bullard Falla Ezcurra+ is a leading economic and legal consulting and arbitration firm in Lima, Peru. David Ricardo was an Economic Consulting Intern (2022), focusing on market competition, antitrust investigations, and M&A.\n\nOfficial website: https://bullardfallaezcurra.com/',
    answerEs:
      'Bullard Falla Ezcurra+ (BFE+) es una de las firmas de consultoría económica y arbitraje más prestigiosas de Lima, Perú. David Ricardo realizó prácticas de consultoría económica (2022) en dinámicas de mercado y derecho de la competencia.\n\nSitio web oficial: https://bullardfallaezcurra.com/'
  },
  {
    keys: ['windham', 'windham mountain'],
    answerEn:
      'Windham Mountain Club is a four-season mountain resort in New York, United States. David Ricardo completed a Finance Internship here (2021–2022), supporting financial administration and operational management.\n\nOfficial website: https://www.windhammountainclub.com/',
    answerEs:
      'Windham Mountain Club es un resort de montaña en Nueva York, Estados Unidos. David Ricardo realizó prácticas de finanzas allí (2021–2022), apoyando en la administración financiera y reportes de gestión.\n\nSitio web oficial: https://www.windhammountainclub.com/'
  },
  {
    keys: ['winter methods school', 'winter methods', 'methods school', 'escuela de metodos de invierno', 'escuela de metodos', 'digital behaviours', 'comportamientos digitales'],
    answerEn:
      'Winter Methods School 2024: Measuring Citizen’s Digital Behaviours (Universitat Pompeu Fabra, Barcelona · Jan.–Feb. 2024):\n\n• Academic Fellowship: David Ricardo was awarded a competitive academic fellowship by Universitat Pompeu Fabra for this specialized winter methods program.\n• Curriculum & Focus: Advanced computational social science, web tracking, digital trace data methodologies, and quantitative measurement of citizens’ online political and economic behaviours.\n• Department: Department of Political and Social Sciences, Universitat Pompeu Fabra.\n\nOfficial website: https://www.upf.edu/',
    answerEs:
      'Escuela de Métodos de Invierno 2024: Medición de Comportamientos Digitales de la Ciudadanía (Universitat Pompeu Fabra, Barcelona · Ene.–Feb. 2024):\n\n• Beca académica: David Ricardo obtuvo una beca académica competitiva (fellowship) concedida por la Universitat Pompeu Fabra.\n• Contenido y enfoque: Métodos cuantitativos avanzados en ciencias sociales computacionales, recolección de microdatos de rastro digital (digital trace data), web tracking y medición empírica de conductas ciudadanas digitales en política y economía.\n• Departamento: Departamento de Ciencias Políticas y Sociales, Universitat Pompeu Fabra.\n\nSitio web oficial: https://www.upf.edu/'
  },
  {
    keys: ['euroteq ignite bootcamp', 'euroteq ignite', 'euroteq', 'ignite bootcamp', 'bootcamp'],
    answerEn:
      'EuroTeQ Ignite Bootcamp — IESE Business School (EuroTeQ Engineering University Alliance · Feb. 2026):\n\n• Overview: High-intensity European entrepreneurship, technology transfer, and venture creation program organized by IESE Business School within the EuroTeQ university alliance (TUM, École Polytechnique, Eindhoven TU/e, DTU, Czech Technical University CTU, TalTech, and IESE Business School).\n• Participation: Selected participant representing IESE Business School, focusing on deep-tech commercialization, university spin-outs, and European collaborative scaling.\n\nOfficial website: https://euroteq.eu/',
    answerEs:
      'EuroTeQ Ignite Bootcamp — IESE Business School (Alianza Universitaria Europea EuroTeQ · Feb. 2026):\n\n• Programa: Bootcamp intensivo de emprendimiento, transferencia de tecnología y creación de empresas organizado por IESE Business School dentro de la alianza universitaria europea EuroTeQ (TUM, École Polytechnique, Eindhoven TU/e, DTU, Universidad Técnica de Praga CTU, TalTech y como escuela socia, IESE Business School).\n• Participación: Seleccionado como participante representando a IESE Business School, orientado a la comercialización de tecnologías deep-tech, spin-offs científicas y creación colaborativa de ventures en Europa.\n\nSitio web oficial: https://euroteq.eu/'
  },
  {
    keys: [
      'fernando fernandez',
      'fernando fernandez bazan',
      'fernando fernandez bazán',
      'dr fernando fernandez',
      'dr fernando',
      'dr fernandez',
      'profesor fernando fernandez',
      'profesor fernando',
      'profesor fernandez',
      'fernando',
      'living labs',
      'laboratorios vivos'
    ],
    answerEn:
      'Dr. Fernando Fernández Bazán (Fernando Fernandez, Ph.D.):\n\n• Profile: Ph.D. in Business & Economics, researcher and academic specializing in living labs ecosystems, collaborative innovation, and regional entrepreneurial systems.\n• Event with David: On May 6, 2026, David Ricardo had the honour of hosting the IESE Entrepreneurship & Innovation Center meeting in Barcelona, which featured a guest lecture by Dr. Fernando Fernandez on building living labs ecosystems for innovation.\n\nDr. Fernando Fernandez Academic Site: https://sites.google.com/site/ffernandezbazan/home\nEvent Post on LinkedIn: https://www.linkedin.com/posts/davidricardogp_today-i-had-the-opportunity-to-host-the-share-7457823660742074368-0rr1/',
    answerEs:
      'Dr. Fernando Fernández Bazán (Fernando Fernandez, Ph.D.):\n\n• Perfil: Doctor en Economía y Dirección de Empresas, investigador y profesor especialista en ecosistemas de living labs, innovación abierta y colaborativa y políticas de desarrollo territorial.\n• Trabajo con David: El 6 de mayo de 2026, David Ricardo fue el anfitrión del encuentro del Centro de Emprendimiento e Innovación (EIC) de IESE Business School en Barcelona, que contó con la ponencia magistral invitada del Dr. Fernando Fernandez sobre el diseño e implementación de living labs para la innovación.\n\nWeb académica del Dr. Fernando Fernandez: https://sites.google.com/site/ffernandezbazan/home\nPublicación del evento en LinkedIn: https://www.linkedin.com/posts/davidricardogp_today-i-had-the-opportunity-to-host-the-share-7457823660742074368-0rr1/'
  },
  {
    keys: [
      'jorge gonzales',
      'jorge gonzalez',
      'jorge ricardo gonzales',
      'jorge ricardo gonzalez',
      'jorge gonzales castillo',
      'jorge gonzalez castillo',
      'dr jorge gonzales',
      'dr jorge gonzalez',
      'dr gonzales castillo',
      'profesor jorge gonzales',
      'profesor jorge gonzalez',
      'profesor jorge',
      'dr jorge',
      'jorge ricardo',
      'jorge',
      'gonzales castillo',
      'gonzalez castillo',
      'papa',
      'padre',
      'father',
      'dad'
    ],
    answerEn:
      'Dr. Jorge Ricardo Gonzales Castillo, Ph.D. (David’s Father & Research Mentor):\n\n• Profile: Doctor in Economics, Senior Professor and Principal Researcher at the Faculty of Economics, National University of Piura (UNP) in Peru.\n• Collaborative Research Papers:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n     Dr. Gonzales Castillo augmented the theoretical Ramsey-Cass-Koopmans growth framework by incorporating entrepreneurship as an endogenous factor to study its effects on economic growth.\n     Paper DOI: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     GitHub Repository: https://github.com/davidricardogp/Unpacking-Institutions\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao" (Sept. 2026)\n     Co-authored empirical industrial organization study using OSINERGMIN microdata to estimate fuel demand price elasticities and spatial competition.\n     Paper DOI: https://www.researchsquare.com/article/rs-10995861/v2\n     GitHub Repository: https://github.com/davidricardogp/fuel-demand-lima-callao',
    answerEs:
      'Dr. Jorge Ricardo Gonzales Castillo, Ph.D. (Padre de David Ricardo y Mentor de Investigación):\n\n• Perfil: Doctor en Economía, Profesor Principal e Investigador en la Facultad de Ciencias Económicas de la Universidad Nacional de Piura (UNP), Perú.\n• Papers e Investigaciones en coautoría:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n     El Dr. Gonzales Castillo amplió el modelo teórico de crecimiento de Ramsey-Cass-Koopmans incorporando el emprendimiento como factor endógeno para examinar sus efectos en el crecimiento económico.\n     Paper DOI: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     Repositorio GitHub: https://github.com/davidricardogp/Unpacking-Institutions\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao" (Sept. 2026)\n     Estudio microeconométrico en organización industrial que estima elasticidades precio de la demanda y competencia espacial entre estaciones de servicio en Lima y Callao con microdatos de OSINERGMIN.\n     Paper DOI: https://www.researchsquare.com/article/rs-10995861/v2\n     Repositorio GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao'
  },
  {
    keys: [
      'luis varona',
      'luis varona castillo',
      'dr luis varona',
      'dr luis',
      'dr varona',
      'profesor luis varona',
      'profesor luis',
      'profesor varona',
      'luis',
      'varona castillo',
      'varona',
      'tio',
      'uncle'
    ],
    answerEn:
      'Dr. Luis Varona Castillo, Ph.D. (David’s Uncle & Research Coauthor):\n\n• Profile: Doctor in Economics, Professor and Senior Researcher at the Faculty of Economics, National University of Piura (UNP) in Peru.\n• Collaborative Research Paper:\n  "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n  Dr. Varona Castillo contributed the theoretical modeling of institutional informality, shadow economy dynamics, and governance dimensions to the augmented Ramsey-Cass-Koopmans growth framework with Dr. Jorge Ricardo Gonzales Castillo and David Ricardo.\n  Paper DOI: https://doi.org/10.21203/rs.3.rs-10995280/v1\n  GitHub Repository: https://github.com/davidricardogp/Unpacking-Institutions',
    answerEs:
      'Dr. Luis Varona Castillo, Ph.D. (Tío de David Ricardo y Coautor de Investigación):\n\n• Perfil: Doctor en Economía, Profesor e Investigador en la Facultad de Ciencias Económicas de la Universidad Nacional de Piura (UNP), Perú.\n• Investigación y Paper en coautoría:\n  "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n  El Dr. Varona Castillo aportó la modelación analítica de la informalidad institucional, la economía sumergida y las dimensiones de gobernanza en el modelo teórico de crecimiento de Ramsey-Cass-Koopmans junto al Dr. Jorge Ricardo Gonzales Castillo y David Ricardo.\n  Paper DOI: https://doi.org/10.21203/rs.3.rs-10995280/v1\n  Repositorio GitHub: https://github.com/davidricardogp/Unpacking-Institutions'
  },
  {
    keys: [
      'david ricardo',
      'david gonzales',
      'david gonzalez',
      'david ricardo gonzales',
      'david ricardo gonzalez',
      'david ricardo gonzales pena',
      'david ricardo gonzalez pena',
      'quien es david',
      'who is david',
      'quien eres',
      'who are you',
      'sobre david',
      'acerca de david',
      'about david'
    ],
    answerEn:
      'David Ricardo Gonzales Peña is a Predoctoral Researcher in the Entrepreneurship Department at IESE Business School (Barcelona, Spain) and Research Assistant at the Entrepreneurship and Innovation Center (EIC).\n\n• Primary Research: Institutional entrepreneurship and AI entrepreneurship, analyzing how governance quality, regulatory frameworks, technological scaling, and venture creation moderate economic growth in Latin America and Europe.\n• Education: B.Sc. in Economics from University of Piura (UDEP, Peru) with academic exchanges at Diego Portales University (Chile) and Universitat Pompeu Fabra (Barcelona), and diploma studies at Complutense University of Madrid / CAF.\n• Teaching: Teaching Assistant for MBA courses at IESE with Prof. Yuliya Snihur, Ph.D., and Prof. Heinrich Liechtenstein, Ph.D.\n\nLinkedIn: https://www.linkedin.com/in/davidricardogp\nGitHub: https://github.com/davidricardogp\nGoogle Scholar: https://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en\nContact: DRGonzales@iese.edu | +34 613 889 969 (ext. 504719)',
    answerEs:
      'David Ricardo Gonzales Peña es Investigador Predoctoral en el Departamento de Emprendimiento de IESE Business School (Barcelona, España) y Asistente de Investigación en el Centro de Emprendimiento e Innovación (EIC).\n\n• Temas de investigación: Institutional entrepreneurship y AI entrepreneurship, examinando cómo la calidad de la gobernanza, las barreras institucionales, el escalamiento tecnológico y la adopción de inteligencia artificial inciden en el crecimiento económico.\n• Educación: Licenciado en Economía por la Universidad de Piura (UDEP, Perú) con intercambios académicos en la Universidad Diego Portales (Chile) y la Universitat Pompeu Fabra (Barcelona), y diplomado en UCM / CAF.\n• Asistencia docente: Cursos de MBA en IESE con la Dra. Yuliya Snihur y el Dr. Heinrich Liechtenstein.\n\nLinkedIn: https://www.linkedin.com/in/davidricardogp\nGitHub: https://github.com/davidricardogp\nGoogle Scholar: https://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en\nContacto: DRGonzales@iese.edu | +34 613 889 969 (ext. 504719)'
  },
  {
    keys: ['familia', 'family', 'padres', 'parents', 'gonzales pena', 'gonzalez pena'],
    answerEn:
      'David Ricardo Gonzales Peña comes from an academic family in Piura, Peru.\n\n• Father: Dr. Jorge Ricardo Gonzales Castillo (Ph.D. in Economics, Senior Professor and Principal Researcher at the National University of Piura - UNP).\n• Uncle: Dr. Luis Varona Castillo (Ph.D. in Economics, Senior Professor and Researcher at UNP).\n\nDavid has co-authored two major economic research papers with his father and uncle: "Unpacking Institutions" (augmented Ramsey-Cass-Koopmans growth model) and "Fuel Demand" (spatial competition in Lima and Callao).',
    answerEs:
      'David Ricardo Gonzales Peña proviene de una destacada familia académica en Piura, Perú.\n\n• Padre: Dr. Jorge Ricardo Gonzales Castillo (Doctor en Economía, Profesor Principal e Investigador en la Universidad Nacional de Piura - UNP).\n• Tío: Dr. Luis Varona Castillo (Doctor en Economía, Profesor Principal e Investigador en la UNP).\n\nDavid ha coescrito con su padre y su tío dos importantes investigaciones económicas: "Unpacking Institutions" (modelo de crecimiento ampliado de Ramsey-Cass-Koopmans) y "Fuel Demand" (competencia espacial de estaciones de combustible en Lima y Callao).'
  },
  {
    keys: [
      'todos los profesores',
      'lista de profesores',
      'con que profesores trabajo',
      'con que profesores ha trabajado',
      'con quien trabajo',
      'profesores con los que trabaje',
      'profesores con los que ha trabajado',
      'quienes son sus profesores',
      'professors worked with',
      'all professors',
      'list of professors',
      'who did he work with'
    ],
    answerEn:
      'Professors, mentors, and academic coauthors David Ricardo has worked with:\n\n1. Dr. Jorge Ricardo Gonzales Castillo (Father & Professor at UNP) — Coauthor on the Ramsey-Cass-Koopmans growth model ("Unpacking Institutions") and fuel demand econometrics.\n2. Dr. Luis Varona Castillo (Uncle & Professor at UNP) — Coauthor on institutional informality and growth modeling in "Unpacking Institutions".\n3. Prof. Yuliya Snihur, Ph.D. (IESE Business School) — David serves as her teaching assistant for MBA courses in Business Model Innovation and Fundamentals of Entrepreneurial Management.\n4. Prof. Heinrich Liechtenstein, Ph.D. (IESE Business School) — David is his teaching assistant for Entrepreneurial Finance.\n5. Dr. Josemaria Siota (IESE Business School / EIC) — Coauthor on policy reports for the European Commission / EIC Scaling Club.\n6. Dr. Fernando Fernández Bazán (Fernando Fernandez, Ph.D.) — Living labs specialist; David hosted his guest lecture at the IESE EIC meeting.\n7. Dr. Ignacio Soto Llosa (Universidad de Piura - UDEP) — David served as his undergraduate teaching assistant for Political and Economic Thought.\n8. Dr. Miguel Carpio (Universidad de Piura - UDEP) — David served as his undergraduate research assistant in development economics, education, and banking.\n9. Dr. Moisés Domínguez Morante (Universidad Nacional de Piura - UNP) — Invited David to deliver a guest lecture on Entrepreneurship Fundamentals.\n10. Anthony Thirlwall, Ph.D. (UNAM) — Renowned British post-Keynesian economist who taught Development Economics.\n11. Carlos Rodrich Portugal (Hub UDEP) — Director of Hub UDEP, who invited David to lecture at the XIX Investment Forum.',
    answerEs:
      'Profesores, mentores y coautores académicos con los que ha trabajado David Ricardo:\n\n1. Dr. Jorge Ricardo Gonzales Castillo (Padre y Profesor Principal en UNP) — Coautor en el modelo de crecimiento ampliado de Ramsey-Cass-Koopmans ("Unpacking Institutions") y en microeconometría de combustibles.\n2. Dr. Luis Varona Castillo (Tío y Profesor Investigador en UNP) — Coautor en modelación de informalidad institucional y gobernanza en "Unpacking Institutions".\n3. Dra. Yuliya Snihur, Ph.D. (IESE Business School) — Asistente de docencia en Business Model Innovation y Fundamentals of Entrepreneurial Management.\n4. Dr. Heinrich Liechtenstein, Ph.D. (IESE Business School) — Asistente de docencia en Entrepreneurial Finance.\n5. Dr. Josemaria Siota (IESE Business School / EIC) — Coautor en los informes de política pública de la Comisión Europea / EIC Scaling Club.\n6. Dr. Fernando Fernández Bazán (Fernando Fernandez, Ph.D.) — Especialista en living labs; David fue anfitrión de su ponencia magistral en IESE EIC.\n7. Dr. Ignacio Soto Llosa (Universidad de Piura - UDEP) — Asistente de docencia en el curso de Pensamiento Político y Económico.\n8. Dr. Miguel Carpio (Universidad de Piura - UDEP) — Asistente de investigación en proyectos sobre economía de la educación, desarrollo y banca.\n9. Dr. Moisés Domínguez Morante (Universidad Nacional de Piura - UNP) — Quien invitó a David a dictar una clase magistral sobre Fundamentos del Emprendimiento.\n10. Dr. Anthony Thirlwall (UNAM) — Célebre economista británico que impartió la cátedra de Economía del Desarrollo y restricciones estructurales.\n11. Carlos Rodrich Portugal (Hub UDEP) — Director de Hub UDEP, quien invitó a David como ponente en el XIX Foro de Inversión (PAD & Hub UDEP).'
  },
  {
    keys: ['snihur', 'yuliya snihur', 'yuliya'],
    answerEn:
      'Prof. Yuliya Snihur, Ph.D., is Professor of Entrepreneurship at IESE Business School and an internationally recognized scholar in business model design and innovation.\n\nDavid Ricardo serves as her teaching assistant for the MBA courses "Business Model Innovation" and "Fundamentals of Entrepreneurial Management".\n\nOfficial profile: https://www.iese.edu/',
    answerEs:
      'La Dra. Yuliya Snihur, Ph.D., es profesora del Departamento de Emprendimiento en IESE Business School y una investigadora referente mundial en diseño e innovación de modelos de negocio.\n\nDavid Ricardo se desempeña como su asistente de docencia en los cursos de MBA "Business Model Innovation" y "Fundamentals of Entrepreneurial Management".\n\nPerfil oficial: https://www.iese.edu/'
  },
  {
    keys: ['liechtenstein', 'heinrich liechtenstein', 'heinrich'],
    answerEn:
      'Prof. Heinrich Liechtenstein, Ph.D., is Professor of Financial Management and Entrepreneurship at IESE Business School, specializing in entrepreneurial finance, venture capital, and private equity.\n\nDavid Ricardo provides teaching assistance for his MBA course "Entrepreneurial Finance".\n\nOfficial profile: https://www.iese.edu/',
    answerEs:
      'El Dr. Heinrich Liechtenstein, Ph.D., es profesor de Gestión Financiera y Emprendimiento en IESE Business School, especialista en finanzas para emprendedores, venture capital y private equity.\n\nDavid Ricardo brinda asistencia de docencia en su curso de MBA "Entrepreneurial Finance".\n\nPerfil oficial: https://www.iese.edu/'
  },
  {
    keys: ['siota', 'josemaria siota', 'jose maria siota'],
    answerEn:
      'Dr. Josemaria Siota is the Executive Director of the Entrepreneurship and Innovation Center (EIC) at IESE Business School.\n\nDavid Ricardo co-authored two major policy research reports with him for the European Commission / EIC Scaling Club on Corporate Venturing and Scaleup Financing in European Deep-Tech, and attended his featured sessions at TEDxIESE 2026 and Mobile World Congress 2026.\n\nEIC: https://www.iese.edu/entrepreneurship/',
    answerEs:
      'El Dr. Josemaria Siota es el Director Ejecutivo del Centro de Emprendimiento e Innovación (EIC) de IESE Business School.\n\nDavid Ricardo coescribió con él dos informes de política pública para la Comisión Europea / EIC Scaling Club sobre Corporate Venturing y Scaleup Financing en Deep-Tech europeo, y asistió a sus sesiones en TEDxIESE 2026 y Mobile World Congress 2026.\n\nEIC: https://www.iese.edu/entrepreneurship/'
  },
  {
    keys: ['soto llosa', 'ignacio soto llosa', 'ignacio soto', 'profesor soto', 'dr soto', 'soto', 'ignacio'],
    answerEn:
      'Dr. Ignacio Soto Llosa is Professor of Economics at Universidad de Piura (UDEP).\n\nDavid Ricardo served as his Undergraduate Teaching Assistant for the course Political and Economic Thought (Pensamiento Político y Económico) during March – July 2023, supporting lecture preparation and academic tutoring.\n\nUDEP: https://www.udep.edu.pe/',
    answerEs:
      'El Dr. Ignacio Soto Llosa es profesor de Economía en la Universidad de Piura (UDEP).\n\nDavid Ricardo fue su Asistente de Docencia en el curso de Pensamiento Político y Económico (marzo – julio de 2023), apoyando en la preparación de clases, materiales y asesoría a estudiantes.\n\nUDEP: https://www.udep.edu.pe/'
  },
  {
    keys: ['miguel carpio', 'dr carpio', 'profesor carpio', 'carpio', 'miguel'],
    answerEn:
      'Dr. Miguel Carpio is Professor and Researcher of Development Economics and Applied Microeconomics at Universidad de Piura (UDEP).\n\nDavid Ricardo was his Undergraduate Research Assistant (Jan. – May 2023), collaborating on empirical research projects in education, development economics, and banking.\n\nUDEP: https://www.udep.edu.pe/',
    answerEs:
      'El Dr. Miguel Carpio es profesor e investigador de Economía del Desarrollo y Microeconomía Aplicada en la Universidad de Piura (UDEP).\n\nDavid Ricardo fue su Asistente de Investigación (enero – mayo de 2023), colaborando en proyectos empíricos de economía de la educación, desarrollo y banca.\n\nUDEP: https://www.udep.edu.pe/'
  },
  {
    keys: ['moises dominguez', 'dominguez morante', 'dr dominguez', 'profesor dominguez', 'moises', 'dominguez'],
    answerEn:
      'Dr. Moisés Domínguez Morante is Professor and Academic Leader at the Faculty of Economics, National University of Piura (UNP).\n\nHe invited David Ricardo to deliver a guest lecture on Entrepreneurship Fundamentals to undergraduate economics students on Sept. 29, 2026.\n\nLecture video / drive: https://drive.google.com/file/d/1iqG5qutOfN3_9ogD79fvOBFgavIRWwZC/view?usp=sharing',
    answerEs:
      'El Dr. Moisés Domínguez Morante es profesor y directivo académico en la Facultad de Ciencias Económicas de la Universidad Nacional de Piura (UNP).\n\nInvitó a David Ricardo a impartir una clase magistral sobre Fundamentos del Emprendimiento para estudiantes de economía el 29 de septiembre de 2026.\n\nGrabación de la clase magistral: https://drive.google.com/file/d/1iqG5qutOfN3_9ogD79fvOBFgavIRWwZC/view?usp=sharing'
  },
  {
    keys: ['anthony thirlwall', 'thirlwall', 'tony thirlwall', 'profesor thirlwall'],
    answerEn:
      'Anthony Thirlwall, Ph.D. (1941–2023), was a renowned British post-Keynesian economist and Professor of Applied Economics at the University of Kent, world-famous for Thirlwall’s Law on balance-of-payments-constrained growth.\n\nDavid Ricardo completed coursework in Development Economics taught by Prof. Thirlwall through UNAM (2021).\n\nMemorial / Obituary: https://res.org.uk/newsletter/obituary-tony-thirlwall/',
    answerEs:
      'Anthony Thirlwall, Ph.D. (1941–2023), fue un célebre economista poskeynesiano británico y profesor de Economía Aplicada en la Universidad de Kent, mundialmente reconocido por la Ley de Thirlwall sobre crecimiento restringido por balanza de pagos.\n\nDavid Ricardo cursó la cátedra de Economía del Desarrollo dictada por el Dr. Thirlwall a través de la UNAM (2021).\n\nObituario / Reseña: https://res.org.uk/newsletter/obituary-tony-thirlwall/'
  },
  {
    keys: ['carlos rodrich', 'rodrich', 'rodrich portugal', 'hub udep'],
    answerEn:
      'Carlos Rodrich Portugal is Director of Hub UDEP, the innovation and entrepreneurship incubator of the University of Piura.\n\nHe invited David Ricardo as a featured speaker at the XIX Investment Forum (PAD & Hub UDEP) and for conferences on startup ecosystems and European policy design.\n\nHub UDEP: https://hub.udep.pe/',
    answerEs:
      'Carlos Rodrich Portugal es Director de Hub UDEP, la incubadora de innovación y emprendimiento de la Universidad de Piura.\n\nInvitó a David Ricardo como ponente en el XIX Foro de Inversión (PAD & Hub UDEP) y en conferencias sobre ecosistemas de startups y formulación de políticas europeas.\n\nHub UDEP: https://hub.udep.pe/'
  },
  {
    keys: ['solari', 'y solari', 'yamir solari'],
    answerEn:
      'Y. Solari is David Ricardo’s academic research coauthor on the empirical fuel econometrics thesis "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru" (2024), which won 2nd Place in the Ashok Kotwal Best Thesis Award.\n\nSSRN Paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\nGitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps',
    answerEs:
      'Y. Solari es coautor de investigación académica de David Ricardo en la tesis de microeconometría de combustibles "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru" (2024), galardonada con el 2º puesto del Premio Ashok Kotwal a la Mejor Tesis.\n\nPaper en SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\nGitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps'
  },
  {
    keys: ['china', 'silver award', 'premio de plata', 'concurso de china', 'competencia de china'],
    answerEn:
      'Silver Award — China International College Students’ Innovation Competition 2026 (Spain Division):\n\n• Co-organized by Tongji University, Nanjing University of Posts and Telecommunications, Shanghai Normal University, and the Polytechnic University of Madrid (UPM).\n• Awarded to David Ricardo for outstanding technological innovation and venture proposition.\n• Certificate: https://drive.google.com/file/d/1I6QwwILjX89qICHph4B0TOW6vkhy13Me/view?usp=sharing',
    answerEs:
      'Premio de Plata — China International College Students’ Innovation Competition 2026 (División España):\n\n• Coorganizado por Tongji University, Nanjing University of Posts and Telecommunications, Shanghai Normal University y la Universidad Politécnica de Madrid (UPM).\n• Otorgado a David Ricardo por innovación tecnológica y propuesta emprendedora.\n• Certificado: https://drive.google.com/file/d/1I6QwwILjX89qICHph4B0TOW6vkhy13Me/view?usp=sharing'
  },
  {
    keys: ['cfa', 'cfa institute', 'ethics challenge', 'desafio de etica'],
    answerEn:
      'Second Place — CFA Institute Ethics Challenge Peru 2022:\n\n• Represented University of Piura in the national ethics competition analyzing complex business ethics dilemmas under the CFA Institute Code of Ethics and Standards of Professional Conduct.\n• News article: https://www.udep.edu.pe/hoy/2022/09/alumnos-de-economia-obtienen-el-2do-puesto-en-el-cfa-institute-ethics-challenge/',
    answerEs:
      'Segundo Puesto — CFA Institute Ethics Challenge Perú 2022:\n\n• Representó a la Universidad de Piura en la competencia nacional de ética empresarial bajo el Código de Ética y Normas de Conducta Profesional de CFA Institute.\n• Reseña periodística: https://www.udep.edu.pe/hoy/2022/09/alumnos-de-economia-obtienen-el-2do-puesto-en-el-cfa-institute-ethics-challenge/'
  },
  {
    keys: ['ashok kotwal', 'mejor tesis', 'best thesis', 'premio tesis'],
    answerEn:
      'Second Place — Ashok Kotwal Best Thesis Award (2024, University of Piura):\n\n• Awarded for David Ricardo’s undergraduate thesis: "A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru."\n• SSRN Paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n• GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps',
    answerEs:
      'Segundo Puesto — Premio Ashok Kotwal a la Mejor Tesis 2024 (Universidad de Piura):\n\n• Otorgado por su tesis de licenciatura: "A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru."\n• Paper en SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n• Repositorio GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps'
  },
  {
    keys: ['in altum', 'inaltum', 'altum', 'beca in altum', 'in altum scholarship', 'in altum summer school', 'law and politics summer school', 'busch school', 'the busch school'],
    answerEn:
      'In Altum Scholarship for the Law and Politics Summer School 2023:\n\n• Program: Prestigious international scholarship initiative associated with The Busch School of Business at The Catholic University of America (Washington, D.C.).\n• Focus: Law, political economy, institutional frameworks, and public leadership.\n• Certificate: https://drive.google.com/file/d/1Uc3w0yB-_MBynU5pIP_Tdy3nQMgDLV4P/view?usp=sharing',
    answerEs:
      'Beca In Altum para la Escuela de Verano de Derecho y Política 2023:\n\n• Programa: Convocatoria internacional de becas de excelencia académica organizada por The Busch School of Business en The Catholic University of America (Washington, D.C.).\n• Enfoque: Derecho, economía política, instituciones públicas y liderazgo cívico.\n• Certificado: https://drive.google.com/file/d/1Uc3w0yB-_MBynU5pIP_Tdy3nQMgDLV4P/view?usp=sharing'
  },
  {
    keys: ['slush', 'slush 2024', 'helsinki', 'slush helsinki'],
    answerEn:
      'Slush 2024 (Helsinki, Finland · Nov. 20–21, 2024):\n\n• Overview: Slush is the world’s leading startup and technology gathering, bringing together 13,000+ founders, venture capitalists, and operators annually in Helsinki.\n• Participation: David Ricardo attended Slush 2024, connecting with European deep-tech founders and venture capital networks.\n• Official website: https://slush.org/',
    answerEs:
      'Slush 2024 (Helsinki, Finlandia · 20–21 de noviembre de 2024):\n\n• Descripción: Slush es el mayor evento mundial de startups e innovación tecnológica, congregando a más de 13.000 fundadores, fondos de capital de riesgo e inversores en Helsinki.\n• Participación: David Ricardo participó en Slush 2024, dialogando con fundadores de deep-tech y redes de venture capital europeas.\n• Sitio web oficial: https://slush.org/'
  },
  {
    keys: ['ted', 'tedx', 'tedxiese', 'tedx iese', 'tedx iese 2026', 'charla ted'],
    answerEn:
      'TEDxIESE 2026 (Barcelona, Spain · Feb. 6, 2026):\n\n• Session: "Do successful companies quietly kill innovation?" by Dr. Josemaria Siota.\n• Focus: Innovation dynamics, corporate inertia, and mechanisms for structural renewal in incumbent firms.\n• Official website: https://www.tedxiese.com/',
    answerEs:
      'TEDxIESE 2026 (Barcelona, España · 6 de febrero de 2026):\n\n• Sesión: "Do successful companies quietly kill innovation?" ("¿Matan silenciosamente la innovación las empresas exitosas?") impartida por el Dr. Josemaria Siota.\n• Enfoque: Dinámicas de innovación, inercia corporativa y renovación estratégica en organizaciones consolidadas.\n• Sitio web oficial: https://www.tedxiese.com/'
  },
  {
    keys: ['mobile world congress', 'mobile world congres', 'mwc', 'mwc 2026', 'mwc barcelona', 'the sovereignty frontier'],
    answerEn:
      'Mobile World Congress 2026 (MWC Barcelona · Mar. 3, 2026):\n\n• Overview: The largest and most influential connectivity, mobile, and digital ecosystem congress globally, organized by GSMA in Barcelona.\n• Session: "The Sovereignty Frontier: Scaling Europe’s Strategic Tech" by Dr. Josemaria Siota (IESE Business School).\n• Session agenda: https://www.mwcbarcelona.com/agenda/sessions/5845-the-sovereignty-frontier-scaling-europes-strategic-tech',
    answerEs:
      'Mobile World Congress 2026 (MWC Barcelona · 3 de marzo de 2026):\n\n• Descripción: El mayor congreso del mundo sobre telecomunicaciones, conectividad e innovación tecnológica, organizado anualmente por la GSMA en Barcelona.\n• Sesión: "The Sovereignty Frontier: Scaling Europe’s Strategic Tech" a cargo del Dr. Josemaria Siota (IESE Business School).\n• Enlace de la sesión: https://www.mwcbarcelona.com/agenda/sessions/5845-the-sovereignty-frontier-scaling-europes-strategic-tech'
  },
  {
    keys: ['4yfn', '4yfn barcelona', '4yfn 2024', 'four years from now'],
    answerEn:
      '4YFN Barcelona 2024 (Barcelona, Spain · Feb. 26–29, 2024):\n\n• Overview: Four Years From Now (4YFN) is the premier global startup platform of GSMA Mobile World Congress (MWC) Barcelona, showcasing breakthrough digital ventures.\n• Official link: https://emprenedoria.barcelonactiva.cat/es/4yfn24',
    answerEs:
      '4YFN Barcelona 2024 (Barcelona, España · 26–29 de febrero de 2024):\n\n• Descripción: 4YFN (Four Years From Now) es la plataforma de startups e innovación del Mobile World Congress en Barcelona, dedicada a conectar emprendimientos deep-tech con inversores globales.\n• Enlace oficial: https://emprenedoria.barcelonactiva.cat/es/4yfn24'
  },
  {
    keys: ['hangar 51', 'hangar 51 accelerator', 'hangar51', 'iag accelerator', 'iag'],
    answerEn:
      'Hangar 51 Accelerator 2024 (London, UK · Nov. 27, 2024):\n\n• Overview: The global corporate innovation accelerator program created by International Airlines Group (IAG — British Airways, Iberia, Vueling, Aer Lingus) to scale aviation and logistics tech.\n• Event Link: https://www.linkedin.com/posts/plug-and-play-uk_the-8th-edition-of-iags-hangar-51-accelerator-activity-7270767020621578240-BkvC',
    answerEs:
      'Hangar 51 Accelerator 2024 (Londres, Reino Unido · 27 de noviembre de 2024):\n\n• Descripción: Aceleradora global de innovación del International Airlines Group (IAG — British Airways, Iberia, Vueling, Aer Lingus), que colabora con scaleups disruptivas en aviación y sostenibilidad.\n• Enlace del evento: https://www.linkedin.com/posts/plug-and-play-uk_the-8th-edition-of-iags-hangar-51-accelerator-activity-7270767020621578240-BkvC'
  },
  {
    keys: ['github universe', 'github universe 2026'],
    answerEn:
      'GitHub Universe 2026 (Online · Oct. 28–29, 2026):\n\n• Overview: GitHub’s annual flagship developer and AI conference, presenting breakthroughs in AI tools, software engineering, and open source.\n• Official website: https://githubuniverse.com/',
    answerEs:
      'GitHub Universe 2026 (Online · 28–29 de octubre de 2026):\n\n• Descripción: Encuentro global insignia de GitHub enfocado en herramientas de desarrollo con inteligencia artificial, ingeniería de software y open source.\n• Sitio web oficial: https://githubuniverse.com/'
  },
  {
    keys: ['ae global summit', 'algopreneurship', 'open problems in ai', 'ae summit'],
    answerEn:
      'The AE Global Summit 2026: Open Problems in AI (London, United Kingdom · Wed. 25 – Fri. 27 Nov. 2026):\n\n• Overview: International AI and entrepreneurship summit organized by Algopreneurship in London, UK.\n• Sessions: "AI Research Breakthroughs", "AI × Enterprise", and "AI × Entrepreneurship".\n• Official website: https://www.algopreneurship.org/',
    answerEs:
      'The AE Global Summit 2026: Open Problems in AI (Londres, Reino Unido · Mié. 25 – Vie. 27 de noviembre de 2026):\n\n• Descripción: Cumbre internacional sobre problemas abiertos en inteligencia artificial y emprendimiento organizada por Algopreneurship en Londres, Reino Unido.\n• Sesiones: "AI Research Breakthroughs", "AI × Enterprise" y "AI × Entrepreneurship".\n• Sitio web oficial: https://www.algopreneurship.org/'
  },
  {
    keys: ['thinking about thinking', 'that', 'that fellowship'],
    answerEn:
      'Thinking About Thinking (ThAT) — Fellow (Princeton, NJ · 2026–Present):\n\n• Overview: ThAT is a nonprofit organisation that brings together a global community working across AI, entrepreneurship, neuroscience, mathematics, and scientific discovery.\n• Award: David was awarded the Thinking About Thinking cohort fellowship 2026.\n• Official website: https://www.thinkingaboutthinking.org/',
    answerEs:
      'Thinking About Thinking (ThAT) — Fellow (Princeton, NJ · 2026–Actualidad):\n\n• Descripción: ThAT es una organización sin fines de lucro que reúne a una comunidad global interdisciplinaria en inteligencia artificial, emprendimiento, neurociencia, matemáticas y descubrimiento científico.\n• Beca: David obtuvo la beca de la cohorte Thinking About Thinking 2026 (ThAT cohort fellowship).\n• Sitio web oficial: https://www.thinkingaboutthinking.org/'
  },
  {
    keys: ['julio velarde', 'velarde', 'casona pardo', 'encuentro de economistas', 'encuentro bcrp', 'xl encuentro', 'entrevista julio velarde', 'bcrp inflacion'],
    answerEn:
      'Interviewer — XL Encuentro de Economistas del BCRP (Oct. 25, 2022):\n\n• Venue: Casona Pardo (Historic landmark in Lima, Peru: https://es.wikipedia.org/wiki/Casona_Pardo).\n• Role: Interviewed Julio Velarde, Ph.D. (President of the Central Reserve Bank of Peru, BCRP: https://www.bcrp.gob.pe/sobre-el-bcrp/organizacion/directorio/julio-velarde.html), focusing on inflation dynamics and macroeconomic stabilization in Peru.\n• UDEP News Coverage: https://www.udep.edu.pe/hoy/2022/11/campus-lima-y-casona-pardo-albergaron-xl-encuentro-de-economistas-de-bcrp/',
    answerEs:
      'Entrevistador — XL Encuentro de Economistas del BCRP (25 de octubre de 2022):\n\n• Lugar: Casona Pardo (Monumento histórico en Lima, Perú: https://es.wikipedia.org/wiki/Casona_Pardo).\n• Rol: Entrevistó al Dr. Julio Velarde (Presidente del Banco Central de Reserva del Perú, BCRP: https://www.bcrp.gob.pe/sobre-el-bcrp/organizacion/directorio/julio-velarde.html), abordando la inflación en el Perú y la política monetaria.\n• Noticia oficial en UDEP: https://www.udep.edu.pe/hoy/2022/11/campus-lima-y-casona-pardo-albergaron-xl-encuentro-de-economistas-de-bcrp/'
  },
  {
    keys: ['ecotalks', 'eco talks', 'entre economistas', 'centro cultural los andes', 'conversatorio carpio'],
    answerEn:
      'Speaker — EcoTalks (Entre Economistas · May 7, 2022):\n\n• Venue: University of Piura · Los Andes University Cultural Center (Lima, Peru).\n• Role: Speaker discussing fundamental economic principles, market institutions, and economic challenges with economics students, alongside Miguel Ángel Carpio, Ph.D.\n• Event Link / Drive: https://drive.google.com/file/d/1k7CIEhFWrfKKa_q03IHGvuCvUoma_ZoV/view?usp=drive_link',
    answerEs:
      'Ponente — EcoTalks (Entre Economistas · 7 de mayo de 2022):\n\n• Lugar: Universidad de Piura · Centro Cultural Universitario Los Andes (Lima, Perú).\n• Rol: Ponente en conversatorio sobre principios económicos fundamentales, instituciones de mercado y coyuntura económica con estudiantes de economía, junto al Dr. Miguel Ángel Carpio.\n• Enlace del evento / Drive: https://drive.google.com/file/d/1k7CIEhFWrfKKa_q03IHGvuCvUoma_ZoV/view?usp=drive_link'
  },
  {
    keys: ['substack', 'blog personal', 'personal blog', 'davidricardogp substack'],
    answerEn:
      'David’s personal blog is on Substack:\nhttps://davidricardogp.substack.com/\n\nWhere he writes analytical essays on institutional economics, technology transfer, and startup policy.',
    answerEs:
      'El blog personal de David está en Substack:\nhttps://davidricardogp.substack.com/\n\nDonde publica ensayos de divulgación y análisis sobre economía institucional, transferencia tecnológica y políticas de emprendimiento.'
  },
  {
    keys: ['parlamentario joven', 'parlamento joven', 'youth parliamentarian', 'hanns seidel'],
    answerEn:
      'Youth Parliamentarian 2019 representing the region of Piura (Congress of the Republic of Peru):\n\n• Participation as Youth Parliamentarian for the Regional Plenary of Piura (August 22–23, 2019), organized by the First Vice-Presidency of the Congress of the Republic of Peru and Hanns Seidel Foundation.\n• Congress of Peru: https://www.congreso.gob.pe/\n• Hanns Seidel Foundation: https://www.hss.de/en/',
    answerEs:
      'Parlamentario Joven 2019 en representación de la región Piura (Congreso de la República del Perú):\n\n• Participación como Parlamentario Joven en el Plenario Regional de Piura (22 y 23 de agosto de 2019), organizado por la Primera Vicepresidencia del Congreso de la República del Perú y la Fundación Hanns Seidel.\n• Congreso de la República: https://www.congreso.gob.pe/\n• Fundación Hanns Seidel: https://www.hss.de/en/'
  }
];

const SPECIFIC_PAPERS_KB: EntityItem[] = [
  {
    keys: ['unpacking', 'unpacking institutions', 'ramsey'],
    answerEn:
      'Working Paper:\n"Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n• Authors: Jorge Ricardo Gonzales Castillo Ph.D., Luis Varona Castillo Ph.D., & David Ricardo Gonzales Peña\n• Summary: An augmented Ramsey–Cass–Koopmans growth framework modeling entrepreneurial knowledge as a Romer-style externality to examine how institutional quality and governance moderate the entrepreneurship-growth relationship in Latin America and the Caribbean.\n• JEL: O43, L26, D73, O17\n• Paper DOI: https://doi.org/10.21203/rs.3.rs-10995280/v1\n• GitHub Repository: https://github.com/davidricardogp/Unpacking-Institutions',
    answerEs:
      'Documento de Trabajo:\n"Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n• Autores: Dr. Jorge Ricardo Gonzales Castillo, Dr. Luis Varona Castillo y David Ricardo Gonzales Peña\n• Resumen: Emplea un modelo teórico ampliado de Ramsey–Cass–Koopmans donde el conocimiento emprendedor actúa como una externalidad tipo Romer para estudiar cómo la calidad institucional y la gobernanza moderan la relación entre emprendimiento formal y crecimiento económico en América Latina y el Caribe.\n• JEL: O43, L26, D73, O17\n• Paper DOI: https://doi.org/10.21203/rs.3.rs-10995280/v1\n• Repositorio GitHub: https://github.com/davidricardogp/Unpacking-Institutions'
  },
  {
    keys: ['fuel demand', 'gasohol retailing', 'spatial competition', 'osinergmin', 'demanda de gasohol', 'mercados minoristas de combustibles'],
    answerEn:
      'Working Paper:\n"Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao" (Sept. 2026)\n• Authors: David Ricardo Gonzales Peña & Jorge Ricardo Gonzales Castillo Ph.D.\n• Summary: A microeconometric empirical study of retail fuel markets analyzing the price elasticity of demand for 90- and 95-octane gasohol and local spatial competition in Lima and Callao using granular administrative transaction data from OSINERGMIN (-1.50 for 90-octane and -2.20 for 95-octane across the full sample).\n• JEL: L11, L81, D12, R41, Q41\n• Paper DOI: https://www.researchsquare.com/article/rs-10995861/v2\n• GitHub Repository: https://github.com/davidricardogp/fuel-demand-lima-callao',
    answerEs:
      'Documento de Trabajo:\n"Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao" (Sept. 2026)\n• Autores: David Ricardo Gonzales Peña y Dr. Jorge Ricardo Gonzales Castillo\n• Resumen: Investigación empírica microeconométrica en organización industrial sobre la elasticidad precio de la demanda de gasohol de 90 y 95 octanos y competencia espacial entre estaciones de servicio en Lima y Callao usando microdatos administrativos de OSINERGMIN (-1,50 para 90 octanos y -2,20 para 95 octanos).\n• JEL: L11, L81, D12, R41, Q41\n• Paper DOI: https://www.researchsquare.com/article/rs-10995861/v2\n• Repositorio GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao'
  },
  {
    keys: ['bartik', 'bartik approach', 'tesis', 'thesis', 'ashok kotwal', 'solari han', 'yuri solari'],
    answerEn:
      'Working Paper / Thesis:\n"Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru" (Apr. 2024)\n• Authors: David Ricardo Gonzales Peña & Yuri Solari Han\n• Honors: 2nd Place Ashok Kotwal Best Thesis Award (University of Piura, 2024)\n• Summary: Implements a novel Bartik shift-share instrumental-variable approach using spatial transaction data from OSINERGMIN to estimate price elasticity of demand while controlling for price endogeneity.\n• JEL: C26, D12, L71, Q41\n• SSRN Paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n• GitHub Repository: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps',
    answerEs:
      'Documento de Trabajo / Tesis:\n"Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru" (Abr. 2024)\n• Autores: David Ricardo Gonzales Peña y Yuri Solari Han\n• Reconocimiento: 2º puesto en el Premio Ashok Kotwal a la Mejor Tesis (Universidad de Piura, 2024)\n• Resumen: Aplica por primera vez variables instrumentales tipo Bartik con microdatos espaciales de OSINERGMIN para estimar la elasticidad precio de la demanda de combustible y corregir sesgos de endogeneidad.\n• JEL: C26, D12, L71, Q41\n• SSRN Paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n• Repositorio GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps'
  },
  {
    keys: ['dynamic and stochastic optimization', 'optimizacion dinamica', 'stochastic optimization', 'monografia', 'monograph', 'libro de optimizacion', 'kdp'],
    answerEn:
      'Academic Monograph / Book:\n"Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, Jul. 2026)\n• Author: David Ricardo Gonzales Peña (ISBN 979-8185981559)\n• Summary: A comprehensive treatise on continuous and discrete-time dynamic optimization methods in economics. Covers the calculus of variations, Euler-Lagrange equations, Pontryagin’s maximum principle, Bellman dynamic programming, Hamilton-Jacobi-Bellman (HJB) equations, and Itô stochastic calculus, accompanied by replication algorithms in Python and Julia.\n• JEL: C61, D90, E21, G11\n• Amazon Link: https://www.amazon.com/dp/B0H7RQ2HCB',
    answerEs:
      'Monografía Académica / Libro:\n"Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, Jul. 2026)\n• Autor: David Ricardo Gonzales Peña (ISBN 979-8185981559)\n• Resumen: Tratado riguroso sobre métodos de optimización dinámica en tiempo continuo y discreto aplicados a la economía (cálculo de variaciones, Euler-Lagrange, principio del máximo de Pontryagin, programación dinámica de Bellman, ecuaciones de Hamilton-Jacobi-Bellman y cálculo estocástico de Itô), con códigos en Python y Julia.\n• JEL: C61, D90, E21, G11\n• Enlace en Amazon: https://www.amazon.com/dp/B0H7RQ2HCB'
  },
  {
    keys: ['corporate venturing', 'scaling club report'],
    answerEn:
      'Policy Report:\n"The Corporate Venturing Ecosystem: A Taxonomy and European Benchmark" (EIC Scaling Club & IESE Business School, 2026)\n• Co-authored at IESE’s Entrepreneurship and Innovation Center.\n• Official DOI: https://doi.org/10.15581/018/79057',
    answerEs:
      'Informe de Política:\n"The Corporate Venturing Ecosystem: A Taxonomy and European Benchmark" (EIC Scaling Club e IESE Business School, 2026)\n• Coelaborado en el Centro de Emprendimiento e Innovación de IESE.\n• DOI Oficial: https://doi.org/10.15581/018/79057'
  },
  {
    keys: ['scaleup financing', 'deep tech capital', 'scaleup gap'],
    answerEn:
      'Policy Report:\n"Financing the Scaleup Gap: Deep-Tech Capital Allocation in the European Union" (EIC Scaling Club & IESE Business School, 2026)\n• Investigates the late-stage funding gap confronting European deep-tech scaleups compared to the US and Asia.\n• Official DOI: https://doi.org/10.15581/018/79055',
    answerEs:
      'Informe de Política:\n"Financing the Scaleup Gap: Deep-Tech Capital Allocation in the European Union" (EIC Scaling Club e IESE Business School, 2026)\n• Analiza el déficit de capital de crecimiento para scaleups deep-tech en Europa frente a Estados Unidos y Asia.\n• DOI Oficial: https://doi.org/10.15581/018/79055'
  }
];

interface KnowledgeItem {
  keys: string[];
  answer: string;
}

const KNOWLEDGE_BASE_EN: KnowledgeItem[] = [
  {
    keys: ['research', 'interests', 'agenda', 'topics', 'focus', 'field', 'investigation', 'entrepreneurship', 'ai'],
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
    keys: ['orcid', 'orcid id', 'identificador orcid'],
    answer:
      `David’s ORCID identifier is 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`
  },
  {
    keys: ['papers', 'publications', 'working paper', 'published', 'articles', 'reports', 'doi', 'ssrn', 'publicaciones'],
    answer:
      'David’s research publications and working papers with links:\n\n• Working Papers:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship"\n     Paper: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     GitHub: https://github.com/davidricardogp/Unpacking-Institutions\n\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao"\n     Paper: https://www.researchsquare.com/article/rs-10995861/v2\n     GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao\n\n  3. "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru"\n     SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n     GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps\n\n• Academic Monograph:\n  "Dynamic and Stochastic Optimization in Economics" (KDP, 2026): https://www.amazon.com/dp/B0H7RQ2HCB\n\n• Policy Reports (EIC Scaling Club & IESE):\n  1. Corporate Venturing Ecosystem: https://doi.org/10.15581/018/79057\n  2. Scaleup Financing: https://doi.org/10.15581/018/79055'
  },
  {
    keys: ['book', 'monograph', 'dynamic', 'stochastic', 'optimization', 'amazon', 'kdp', 'julia', 'python'],
    answer:
      'David is the author of the academic monograph:\n\n"Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, 2026).\nBased on course lecture notes and theoretical problem sets, accompanied by computational replication algorithms in Python and Julia.\n\nAmazon link: https://www.amazon.com/dp/B0H7RQ2HCB'
  },
  {
    keys: ['substack', 'personal blog', 'blog personal', 'substack blog'],
    answer:
      'David’s personal blog on Substack is:\nhttps://davidricardogp.substack.com/\n\nWhere he writes analytical essays on institutional economics, technology transfer, and startup policy.'
  },
  {
    keys: ['public writing', 'essays', 'blog', 'writing', 'opinion', 'gobierno', 'formalizar', 'diario'],
    answer:
      'David’s public essays and analytical writing (in chronological order):\n\n1. "Scaling Deep Tech in Europe: Where Do Priorities Diverge?" (IESE Blog, Jul. 2026):\n   https://blog.iese.edu/entrepreneurship/2026/07/27/scaling-deep-tech-in-europe-where-do-priorities-diverge/\n2. "Formalizar no puede ser una carrera de obstáculos" (Peruvian Institute of Economics - IPE, Jun. 2026):\n   https://ipe.org.pe/\n3. "Perú innova, pero todavía le cuesta convertir conocimiento en resultados" (Diario El Gobierno, Jun. 2026):\n   https://diarioelgobierno.com/peru-innova-pero-todavia-le-cuesta-convertir-conocimiento-en-resultados-por-david-ricardo-gonzales-pena/\n4. "SDG 4: Quality Education | Match-A-Buddy" (University of Oxford: The Oxford Character Project, Jan. 2025):\n   https://oxfordcharacter.org/\n5. "Transformar las Instituciones: el camino hacia un Perú próspero" (Peruvian Institute of Economics - IPE, Dec. 2024):\n   https://ipe.org.pe/'
  },
  {
    keys: ['affiliations', 'community', 'cohort', 'member', 'network', 'fellow'],
    answer:
      'David’s professional affiliations and community memberships:\n\n• Thinking About Thinking (ThAT) — Fellow (2026–Present, Princeton, NJ): https://www.thinkingaboutthinking.org/\n• Peruvian Institute of Economics (IPE) — Ambassador, Young Leaders Network (2024–Present): https://ipe.org.pe/\n• Global Leaders Cohort 2024 (2024–Present, Oxford, UK) — Member of the cohort organized by Oxford University and University of St. Gallen: https://www.leadership-challenge.org/about-glc\n• WAPOR Latinoamérica — Chapter Member (2024–Present): https://waporlatinoamerica.org/'
  },
  {
    keys: ['experience', 'work', 'worked', 'job', 'career', 'employment', 'roles', 'history', 'trayectoria'],
    answer:
      'David’s professional trajectory:\n• Predoctoral Researcher at IESE Business School (since Jul. 2026).\n• Research Assistant at IESE’s Entrepreneurship & Innovation Center (2025–2026).\n• Head of Fundraising at beder (2023–2025, managing up to €0.5M in funding): https://beder.app/\n• Undergraduate Teaching Assistant at University of Piura (2023).\n• Undergraduate Research Assistant with Dr. Miguel Carpio (2023).\n• Economic Consulting Intern at Bullard Falla Ezcurra+ (2022): https://bullardfallaezcurra.com/\n• Finance Intern at Windham Mountain Club (New York, 2021–2022).'
  },
  {
    keys: ['teaching', 'ta', 'assistant', 'yuliya', 'snihur', 'liechtenstein', 'courses', 'classes'],
    answer:
      'At IESE Business School, David provides teaching assistance for:\n• Business Model Innovation and Fundamentals of Entrepreneurial Management (Prof. Yuliya Snihur, Ph.D.)\n• Entrepreneurial Finance (Prof. Heinrich Liechtenstein, Ph.D.).\n\nPreviously, he served as Teaching Assistant for Political and Economic Thought at the University of Piura.'
  },
  {
    keys: ['education', 'degree', 'degrees', 'academics', 'credentials', 'bachelor', 'undergraduate', 'school'],
    answer:
      'Education and academic credentials:\n• B.Sc. in Economics from University of Piura (Peru, 2019–2024), University Cloister member and student delegate.\n• International academic exchanges at Diego Portales University (Chile) and Universitat Pompeu Fabra (Barcelona).\n• Complementary Education:\n  - IESE Business School (Predoctoral coursework, Barcelona, Spain, 2026)\n  - CAF & Complutense University of Madrid (Diploma in Governance and Public Innovation, 2026)\n  - EuroTeQ Ignite Bootcamp (IESE, 2026)\n  - World Bank Group Youth Summit (Behavioral Science in Public Policy, 2025)\n  - Oxford University — The Oxford Character Project (Leading with Character, 2025)\n  - Barcelona School of Economics (Energy Economics Summer School 2024, Mar Reguant): https://bse.eu/\n  - Universitat Pompeu Fabra (5th RECSM Winter Methods School 2024, Mariano Torcal): https://www.upf.edu/web/recsm\n  - The Catholic University of America (Law and Politics, 2023)\n  - Center for Research in Experimental Economics - CREE (2023): https://www.udep.edu.pe/cree/\n  - UNAM (Anthony Thirlwall Development Economics, 2021): https://res.org.uk/newsletter/obituary-tony-thirlwall/'
  },
  {
    keys: ['awards', 'fellowship', 'recognition', 'scholarship', 'prize', 'silver', 'honors', 'competition', 'thesis award'],
    answer:
      'Key honors and awards:\n• Thinking About Thinking Cohort Fellowship 2026 (ThAT, Princeton, NJ): https://www.thinkingaboutthinking.org/\n• Silver Award at the China International College Students’ Innovation Competition 2026 (Spain Division)\n• CAF Scholarship for Diploma in Governance and Public Innovation (Complutense University of Madrid)\n• Global Leaders Cohort 2024 (Oxford & St. Gallen, top 1.82%)\n• Ambassador for the IPE Young Leaders Network\n• 2nd Place Ashok Kotwal Best Thesis Award (2024, University of Piura): https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n• 2nd Place CFA Institute Ethics Challenge Peru (2022)\n• Semifinalist E-Moot Libre Competencia 2022: https://www.instagram.com/p/Cg0YBo1LAQV/?img_index=1\n• Youth Parliamentarian 2019 representing Piura (Congress of Peru)\n• Fellowships from BSE (Energy Economics) and UPF / RECSM (Winter Methods School).'
  },
  {
    keys: ['talk', 'talks', 'presentation', 'conference', 'conferences', 'congress', 'congresses', 'forum', 'speech', 'speaker', 'host', '4yfn', 'slush', 'mwc', 'tedx', 'github universe', 'ae global summit'],
    answer:
      'Academic talks, congresses, and presentations:\n\n• Congresses & Conferences:\n  1. The AE Global Summit 2026: Open Problems in AI (London · Nov. 2026): https://www.algopreneurship.org/\n  2. GitHub Universe 2026 (Online · Oct. 2026): https://githubuniverse.com/\n  3. Mobile World Congress 2026 (Barcelona · Mar. 2026) — Session: The Sovereignty Frontier by Josemaria Siota: https://www.mwcbarcelona.com/agenda/sessions/5845-the-sovereignty-frontier-scaling-europes-strategic-tech\n  4. TEDxIESE 2026 (Barcelona · Feb. 2026) — Session: Do successful companies quietly kill innovation? by Josemaria Siota: https://www.tedxiese.com/\n  5. Hangar 51 Accelerator 2024 (London · Nov. 2024): https://www.linkedin.com/posts/plug-and-play-uk_the-8th-edition-of-iags-hangar-51-accelerator-activity-7270767020621578240-BkvC\n  6. Slush 2024 (Helsinki · Nov. 2024): https://slush.org/\n  7. 4YFN Barcelona 2024 (Barcelona · Feb. 2024): https://emprenedoria.barcelonactiva.cat/es/4yfn24\n\n• Talks & Guest Lectures:\n  • Guest Lecture on Entrepreneurship Fundamentals at National University of Piura (Sept. 2026)\n  • Host of the IESE Entrepreneurship & Innovation Center meeting on living labs with Dr. Fernando Fernandez (May 2026)\n  • Speaker at XIX Investment Forum (PAD & Hub UDEP) on European startup policymaking (Aug. 2025)\n  • Speaker at Hub UDEP on smarter startup ecosystems (Aug. 2025)\n  • Interviewer at XL Encuentro de Economistas del BCRP interviewing Dr. Julio Velarde on inflation (Casona Pardo, Oct. 2022)\n  • Speaker at EcoTalks (Entre Economistas) at University of Piura alongside Miguel Ángel Carpio, Ph.D. (May 2022).'
  },
  {
    keys: ['cv', 'resume', 'curriculum', 'download'],
    answer:
      'You can inspect or download his CV by clicking the "CV" button in the bio header.'
  },
  {
    keys: ['peru', 'born', 'grew up', 'from', 'origin'],
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
    keys: ['orcid', 'orcid id', 'identificador orcid'],
    answer:
      `El identificador ORCID de David es 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`
  },
  {
    keys: ['papers', 'publicaciones', 'working paper', 'articulos', 'informes', 'doi', 'ssrn', 'publicacion'],
    answer:
      'Publicaciones de investigación y working papers de David con enlaces:\n\n• Documentos de Trabajo:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship"\n     Paper: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     GitHub: https://github.com/davidricardogp/Unpacking-Institutions\n\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao"\n     Paper: https://www.researchsquare.com/article/rs-10995861/v2\n     GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao\n\n  3. "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru"\n     SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n     GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps\n\n• Monografía Académica:\n  "Dynamic and Stochastic Optimization in Economics" (KDP, 2026): https://www.amazon.com/dp/B0H7RQ2HCB\n\n• Informes de Política (EIC Scaling Club e IESE):\n  1. Corporate Venturing Ecosystem: https://doi.org/10.15581/018/79057\n  2. Scaleup Financing: https://doi.org/10.15581/018/79055'
  },
  {
    keys: ['libro', 'libros', 'monografia', 'optimizacion', 'dinamica', 'estocastica', 'amazon', 'kdp', 'julia', 'python'],
    answer:
      'David es autor de la monografía académica:\n\n"Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, 2026).\nBasada en apuntes de clase y ejercicios teóricos, acompañada de algoritmos de replicación computacional en Python y Julia.\n\nEnlace en Amazon: https://www.amazon.com/dp/B0H7RQ2HCB'
  },
  {
    keys: ['substack', 'blog personal', 'personal blog', 'blog de substack'],
    answer:
      'El blog personal de David en Substack es:\nhttps://davidricardogp.substack.com/\n\nDonde publica ensayos sobre economía institucional, transferencia tecnológica y diseño de políticas de emprendimiento.'
  },
  {
    keys: ['articulos', 'ensayos', 'opinion', 'gobierno', 'formalizar', 'blog', 'escritos', 'public writing'],
    answer:
      'Ensayos y artículos de divulgación de David (orden cronológico):\n\n1. "Scaling Deep Tech in Europe: Where Do Priorities Diverge?" (Blog de IESE, jul. 2026):\n   https://blog.iese.edu/entrepreneurship/2026/07/27/scaling-deep-tech-in-europe-where-do-priorities-diverge/\n2. "Formalizar no puede ser una carrera de obstáculos" (Instituto Peruano de Economía - IPE, jun. 2026):\n   https://ipe.org.pe/\n3. "Perú innova, pero todavía le cuesta convertir conocimiento en resultados" (Diario El Gobierno, jun. 2026):\n   https://diarioelgobierno.com/peru-innova-pero-todavia-le-cuesta-convertir-conocimiento-en-resultados-por-david-ricardo-gonzales-pena/\n4. "SDG 4: Quality Education | Match-A-Buddy" (Universidad de Oxford: The Oxford Character Project, ene. 2025):\n   https://oxfordcharacter.org/\n5. "Transformar las Instituciones: el camino hacia un Perú próspero" (Instituto Peruano de Economía - IPE, dic. 2024):\n   https://ipe.org.pe/'
  },
  {
    keys: ['afiliado', 'afiliaciones', 'comunidad', 'organizaciones', 'miembro', 'red'],
    answer:
      'Afiliaciones y membresías profesionales de David:\n\n• Thinking About Thinking (ThAT) — Fellow (2026–Actualidad, Princeton, NJ): https://www.thinkingaboutthinking.org/\n• Instituto Peruano de Economía (IPE) — Embajador de la Red de Jóvenes Líderes (2024–Actualidad): https://ipe.org.pe/\n• Global Leaders Cohort 2024 (2024–Actualidad, Oxford, UK) — Miembro del programa organizado por la Universidad de Oxford y la Universidad de St. Gallen: https://www.leadership-challenge.org/about-glc\n• WAPOR Latinoamérica — Miembro del capítulo regional (2024–Actualidad): https://waporlatinoamerica.org/'
  },
  {
    keys: ['experiencia', 'trabajo', 'carrera', 'roles', 'trayectoria', 'empleo'],
    answer:
      'Trayectoria profesional de David:\n• Investigador Predoctoral en IESE Business School (desde jul. 2026).\n• Asistente de Investigación en el Centro de Emprendimiento e Innovación de IESE (2025–2026).\n• Head of Fundraising en beder (2023–2025, gestionando hasta 0,5M€ en fondos): https://beder.app/\n• Asistente de Docencia en la Universidad de Piura (2023).\n• Asistente de Investigación con el Dr. Miguel Carpio (2023).\n• Practicante de Consultoría Económica en Bullard Falla Ezcurra+ (2022): https://bullardfallaezcurra.com/\n• Practicante de Finanzas en Windham Mountain Club (Nueva York, 2021–2022).'
  },
  {
    keys: ['docencia', 'asistencia', 'profesor', 'yuliya', 'snihur', 'liechtenstein', 'clases', 'cursos'],
    answer:
      'En IESE Business School, David es asistente de docencia en:\n• Business Model Innovation y Fundamentals of Entrepreneurial Management (Dra. Yuliya Snihur, Ph.D.)\n• Entrepreneurial Finance (Dr. Heinrich Liechtenstein, Ph.D.).\n\nAnteriormente fue asistente de docencia en Pensamiento Político y Económico en la Universidad de Piura.'
  },
  {
    keys: ['educacion', 'estudio', 'estudios', 'grado', 'grados', 'licenciatura', 'formacion', 'academica'],
    answer:
      'Formación académica y credenciales:\n• Licenciado en Economía por la Universidad de Piura (Perú, 2019–2024), miembro del Claustro Universitario y delegado estudiantil.\n• Intercambios académicos en la Universidad Diego Portales (Chile) y en la Universitat Pompeu Fabra (Barcelona).\n• Formación complementaria:\n  - IESE Business School (Cursos predoctorales, Barcelona, España, 2026)\n  - CAF y Universidad Complutense de Madrid (Diplomado en Gobernabilidad e Innovación Pública, 2026)\n  - EuroTeQ Ignite Bootcamp (IESE, 2026)\n  - Cumbre de la Juventud del Banco Mundial (2025)\n  - Universidad de Oxford — The Oxford Character Project (2025)\n  - Barcelona School of Economics (Escuela de Verano de Economía de la Energía 2024, Mar Reguant): https://bse.eu/\n  - Universitat Pompeu Fabra (5ª RECSM Winter Methods School 2024, Mariano Torcal): https://www.upf.edu/web/recsm\n  - The Catholic University of America (Derecho y Política, 2023)\n  - Center for Research in Experimental Economics - CREE (2023): https://www.udep.edu.pe/cree/\n  - UNAM (Anthony Thirlwall, 2021): https://res.org.uk/newsletter/obituary-tony-thirlwall/'
  },
  {
    keys: ['premios', 'becas', 'reconocimientos', 'plata', 'concursos', 'tesis', 'honor'],
    answer:
      'Premios y reconocimientos:\n• Beca de la cohorte Thinking About Thinking 2026 (ThAT, Princeton, NJ): https://www.thinkingaboutthinking.org/\n• Premio de Plata en la Competición de Innovación de Estudiantes Universitarios de China 2026 (División España)\n• Beca CAF para el Diplomado en Gobernabilidad e Innovación Pública en la Universidad Complutense de Madrid\n• Global Leaders Cohort 2024 (Oxford y St. Gallen, top 1,82%)\n• Embajador de la Red de Jóvenes Líderes IPE\n• 2º puesto en el Premio Ashok Kotwal a la Mejor Tesis (2024, Universidad de Piura): https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n• 2º puesto en el CFA Institute Ethics Challenge Perú (2022)\n• Semifinalista en el E-Moot Libre Competencia 2022: https://www.instagram.com/p/Cg0YBo1LAQV/?img_index=1\n• Parlamentario Joven 2019 en representación de Piura (Congreso de la República del Perú)\n• Becas de BSE (Economía de la Energía) y UPF / RECSM (Escuela de Métodos de Invierno).'
  },
  {
    keys: ['charlas', 'conferencias', 'congresos', 'congreso', 'ponencias', 'presentacion', 'foro', '4yfn', 'slush', 'mwc', 'tedx', 'github universe', 'ae global summit'],
    answer:
      'Congresos, conferencias y charlas académicas:\n\n• Congresos y Conferencias:\n  1. The AE Global Summit 2026: Open Problems in AI (Londres · nov. 2026): https://www.algopreneurship.org/\n  2. GitHub Universe 2026 (Online · 28–29 oct. 2026): https://githubuniverse.com/\n  3. Mobile World Congress 2026 (Barcelona · 3 mar. 2026) — Sesión: The Sovereignty Frontier por Josemaria Siota: https://www.mwcbarcelona.com/agenda/sessions/5845-the-sovereignty-frontier-scaling-europes-strategic-tech\n  4. TEDxIESE 2026 (Barcelona · 6 feb. 2026) — Sesión: Do successful companies quietly kill innovation? por Josemaria Siota: https://www.tedxiese.com/\n  5. Hangar 51 Accelerator 2024 (Londres · 27 nov. 2024): https://www.linkedin.com/posts/plug-and-play-uk_the-8th-edition-of-iags-hangar-51-accelerator-activity-7270767020621578240-BkvC\n  6. Slush 2024 (Helsinki · 20–21 nov. 2024): https://slush.org/\n  7. 4YFN Barcelona 2024 (Barcelona · feb. 2024): https://emprenedoria.barcelonactiva.cat/es/4yfn24\n\n• Charlas y Clases Magistrales:\n  • Clase magistral sobre fundamentos de emprendimiento en la Universidad Nacional de Piura (sep. 2026)\n  • Anfitrión del encuentro de IESE con el Dr. Fernando Fernandez sobre living labs (may. 2026)\n  • Ponente en el XIX Foro de Inversión (PAD y Hub UDEP) sobre diseño de políticas europeas para startups (ago. 2025)\n  • Ponente en Hub UDEP sobre ecosistemas de startups más inteligentes (ago. 2025)\n  • Entrevistador en el XL Encuentro de Economistas del BCRP al Dr. Julio Velarde sobre inflación en el Perú (Casona Pardo, oct. 2022)\n  • Ponente en EcoTalks (Entre Economistas) en la Universidad de Piura junto al Dr. Miguel Ángel Carpio (may. 2022).'
  },
  {
    keys: ['cv', 'curriculum', 'descargar'],
    answer:
      'Puedes consultar o descargar su CV pulsando el botón "CV" situado en la cabecera del perfil.'
  },
  {
    keys: ['peru', 'origen', 'nacido', 'donde nacio'],
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
          ? 'Hello! Ask about David Ricardo’s research topics, working papers, books, code repositories, affiliations, universities, or background.'
          : '¡Hola! Pregunta sobre los temas de investigación de David Ricardo, working papers, libros, repositorios de código, universidades, afiliaciones o trayectoria.'
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
                ? 'Hello! Ask about David Ricardo’s research topics, working papers, books, code repositories, affiliations, universities, or background.'
                : '¡Hola! Pregunta sobre los temas de investigación de David Ricardo, working papers, libros, repositorios de código, universidades, afiliaciones o trayectoria.'
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
          'Who is Dr. Jorge Gonzales?',
          'What is Diego Portales University?',
          'Tell me about his professors and mentors',
          'What was the Winter Methods School 2024?',
          'What is EuroTeQ Ignite Bootcamp?',
          'What is his telephone and contact info?'
        ]
      : [
          '¿Qué temas de investigación le interesan?',
          '¿Quién es el Dr. Jorge Gonzales?',
          '¿Qué es la Universidad Diego Portales?',
          'Cuéntame sobre sus profesores y mentores',
          '¿Qué fue la Winter Methods School 2024?',
          '¿Qué es el EuroTeQ Ignite Bootcamp?',
          '¿Cuál es su teléfono celular y contacto?'
        ];

  const getAnswer = (query: string): string => {
    const qTrimmed = query.trim().toLowerCase();
    const qClean = qTrimmed
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    // Strip greetings from the beginning/end to examine substantive query
    let strippedQuery = qClean;
    for (const g of GREETINGS) {
      const gNorm = g.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (strippedQuery === gNorm) {
        strippedQuery = '';
        break;
      }
      if (strippedQuery.startsWith(`${gNorm} `)) {
        strippedQuery = strippedQuery.slice(gNorm.length).trim();
      }
      if (strippedQuery.endsWith(` ${gNorm}`)) {
        strippedQuery = strippedQuery.slice(0, -gNorm.length).trim();
      }
    }
    const substantiveChars = strippedQuery.replace(/[^a-z0-9]/g, '').trim();

    // If query was purely a greeting, return warm welcome
    if (substantiveChars.length === 0) {
      if (currentLang === 'en') {
        return `Hello! It's great to connect with you. I can answer any questions about David Ricardo Gonzales Peña — Predoctoral Researcher in the Entrepreneurship Department at IESE Business School.\n\nHis primary research focuses on institutional entrepreneurship and AI entrepreneurship. You can ask about his specific papers, monograph, universities, professors and mentors (including his father Dr. Jorge Ricardo Gonzales Castillo and uncle Dr. Luis Varona Castillo), awards, GitHub repositories, LinkedIn, or direct contact details.`;
      }
      return `¡Hola! Un gusto saludarte. Puedo responder cualquier pregunta sobre David Ricardo Gonzales Peña — investigador predoctoral en el Departamento de Emprendimiento de IESE Business School.\n\nSus principales temas de investigación son institutional entrepreneurship y AI entrepreneurship. Puedes preguntarme sobre sus papers específicos, monografía, universidades, profesores y mentores (incluyendo a su papá el Dr. Jorge Ricardo Gonzales Castillo y su tío el Dr. Luis Varona Castillo), premios y logros, repositorios de GitHub, LinkedIn o datos de contacto.`;
    }

    const testMatch = (k: string) => qClean.includes(k) || strippedQuery.includes(k);

    // 1. Direct check for phone / celular / mobile / whatsapp / telephone / contact info (CRITICAL: never return ORCID for phone queries)
    if (
      testMatch('celular') ||
      testMatch('telefono') ||
      testMatch('phone') ||
      testMatch('telephone') ||
      testMatch('mobile') ||
      testMatch('movil') ||
      testMatch('whatsapp') ||
      testMatch('numero') ||
      testMatch('llamar') ||
      testMatch('call') ||
      testMatch('contacto') ||
      testMatch('contact')
    ) {
      return currentLang === 'en'
        ? `David's telephone and direct contact details:\n• Mobile / Telephone: ${DAVID_DATA.contact.tel} (${DAVID_DATA.contact.ext})\n• Email: ${DAVID_DATA.contact.email}\n• Office: Office E119, South Campus, IESE Business School, Barcelona\n• Address: ${DAVID_DATA.contact.address.replace(/\n/g, ', ')}\n• LinkedIn: ${DAVID_DATA.contact.linkedin}\n• ORCID: ${DAVID_DATA.contact.orcidId} (${DAVID_DATA.contact.orcid})`
        : `Teléfono celular y datos de contacto directo de David:\n• Celular / Teléfono: ${DAVID_DATA.contact.tel} (${DAVID_DATA.contact.ext})\n• Correo electrónico: ${DAVID_DATA.contact.email}\n• Despacho: Despacho E119, Campus Sur, IESE Business School, Barcelona\n• Dirección: ${DAVID_DATA.contact.addressEs.replace(/\n/g, ', ')}\n• LinkedIn: ${DAVID_DATA.contact.linkedin}\n• ORCID: ${DAVID_DATA.contact.orcidId} (${DAVID_DATA.contact.orcid})`;
    }

    // 2. Direct check for email / correo
    if (testMatch('email') || testMatch('correo')) {
      return currentLang === 'en'
        ? `David's official email address is:\n${DAVID_DATA.contact.email}\n\n• Telephone: ${DAVID_DATA.contact.tel} (${DAVID_DATA.contact.ext})\n• Office: Office E119, South Campus, IESE Business School, Barcelona`
        : `El correo electrónico oficial de David es:\n${DAVID_DATA.contact.email}\n\n• Celular / Teléfono: ${DAVID_DATA.contact.tel} (${DAVID_DATA.contact.ext})\n• Despacho: Despacho E119, Campus Sur, IESE Business School, Barcelona`;
    }

    // 3. Direct check for specific universities / institutions / organizations / people / awards (HIGH PRIORITY: individual people and specific entities match BEFORE general overviews)
    for (const ent of ENTITIES_KB) {
      if (ent.keys.some((k) => testMatch(k))) {
        return currentLang === 'en' ? ent.answerEn : ent.answerEs;
      }
    }

    // 4. Direct check for specific papers / publications
    for (const paper of SPECIFIC_PAPERS_KB) {
      if (paper.keys.some((k) => testMatch(k))) {
        return currentLang === 'en' ? paper.answerEn : paper.answerEs;
      }
    }

    // 5. Direct check for all professors / mentors / docentes overview (when no individual person was named)
    if (
      testMatch('profesor') ||
      testMatch('profesora') ||
      testMatch('profesores') ||
      testMatch('docente') ||
      testMatch('docentes') ||
      testMatch('mentor') ||
      testMatch('mentores') ||
      testMatch('profes') ||
      testMatch('con quien trabaj') ||
      testMatch('con que profesores') ||
      testMatch('who did he work with') ||
      testMatch('professors')
    ) {
      return currentLang === 'en'
        ? 'Professors, mentors, and academic coauthors David Ricardo has worked with:\n\n1. Dr. Jorge Ricardo Gonzales Castillo (Father & Professor at UNP) — Coauthor on the Ramsey-Cass-Koopmans growth model ("Unpacking Institutions") and fuel demand econometrics.\n2. Dr. Luis Varona Castillo (Uncle & Professor at UNP) — Coauthor on institutional informality and growth modeling in "Unpacking Institutions".\n3. Prof. Yuliya Snihur, Ph.D. (IESE Business School) — David serves as her teaching assistant for MBA courses in Business Model Innovation and Fundamentals of Entrepreneurial Management.\n4. Prof. Heinrich Liechtenstein, Ph.D. (IESE Business School) — David is his teaching assistant for Entrepreneurial Finance.\n5. Dr. Josemaria Siota (IESE Business School / EIC) — Coauthor on policy reports for the European Commission / EIC Scaling Club.\n6. Dr. Fernando Fernández Bazán (Fernando Fernandez, Ph.D.) — Living labs specialist; David hosted his guest lecture at the IESE EIC meeting.\n7. Dr. Ignacio Soto Llosa (Universidad de Piura - UDEP) — David served as his undergraduate teaching assistant for Political and Economic Thought.\n8. Dr. Miguel Carpio (Universidad de Piura - UDEP) — David served as his undergraduate research assistant in development economics, education, and banking.\n9. Dr. Moisés Domínguez Morante (Universidad Nacional de Piura - UNP) — Invited David to deliver a guest lecture on Entrepreneurship Fundamentals.\n10. Anthony Thirlwall, Ph.D. (UNAM) — Renowned British post-Keynesian economist who taught Development Economics.\n11. Carlos Rodrich Portugal (Hub UDEP) — Director of Hub UDEP, who invited David to lecture at the XIX Investment Forum.'
        : 'Profesores, mentores y coautores académicos con los que ha trabajado David Ricardo:\n\n1. Dr. Jorge Ricardo Gonzales Castillo (Padre y Profesor Principal en UNP) — Coautor en el modelo de crecimiento ampliado de Ramsey-Cass-Koopmans ("Unpacking Institutions") y en microeconometría de combustibles.\n2. Dr. Luis Varona Castillo (Tío y Profesor Investigador en UNP) — Coautor en modelación de informalidad institucional y gobernanza en "Unpacking Institutions".\n3. Dra. Yuliya Snihur, Ph.D. (IESE Business School) — Asistente de docencia en Business Model Innovation y Fundamentals of Entrepreneurial Management.\n4. Dr. Heinrich Liechtenstein, Ph.D. (IESE Business School) — Asistente de docencia en Entrepreneurial Finance.\n5. Dr. Josemaria Siota (IESE Business School / EIC) — Coautor en los informes de política pública de la Comisión Europea / EIC Scaling Club.\n6. Dr. Fernando Fernández Bazán (Fernando Fernandez, Ph.D.) — Especialista en living labs; David fue anfitrión de su ponencia magistral en IESE EIC.\n7. Dr. Ignacio Soto Llosa (Universidad de Piura - UDEP) — Asistente de docencia en el curso de Pensamiento Político y Económico.\n8. Dr. Miguel Carpio (Universidad de Piura - UDEP) — Asistente de investigación en proyectos sobre economía de la educación, desarrollo y banca.\n9. Dr. Moisés Domínguez Morante (Universidad Nacional de Piura - UNP) — Quien invitó a David a dictar una clase magistral sobre Fundamentos del Emprendimiento.\n10. Dr. Anthony Thirlwall (UNAM) — Célebre economista británico que impartió la cátedra de Economía del Desarrollo y restricciones estructurales.\n11. Carlos Rodrich Portugal (Hub UDEP) — Director de Hub UDEP, quien invitó a David como ponente en el XIX Foro de Inversión (PAD & Hub UDEP).';
    }

    // 6. Direct check for awards / logros / reconocimientos / becas overview (when no individual award was named)
    if (
      testMatch('logro') ||
      testMatch('premio') ||
      testMatch('reconocimiento') ||
      testMatch('award') ||
      testMatch('honor') ||
      testMatch('beca') ||
      testMatch('fellowship') ||
      testMatch('scholarship')
    ) {
      return currentLang === 'en'
        ? `All 12 awards, scholarships, fellowships, and honors awarded to David:\n\n1. Silver Award — China International College Students’ Innovation Competition 2026 (Spain Division; Tongji, UPM, Shanghai Normal, NJUPT). Certificate: https://drive.google.com/file/d/1I6QwwILjX89qICHph4B0TOW6vkhy13Me/view?usp=sharing\n2. CAF Scholarship for Diploma in Governance and Public Innovation 2026 (Complutense University of Madrid & CAF).\n3. Global Leaders Cohort 2024 (Oxford University & University of St. Gallen, top 1.82% globally): https://www.leadership-challenge.org/about-glc\n4. Ambassador for the IPE Young Leaders Network (Peruvian Institute of Economics, 2024): https://ipe.org.pe/presentamos-a-los-embajadores-de-la-red-de-jovenes-lideres-ipe-2024/\n5. Fellowship for Energy Economics Summer School 2024 (Barcelona School of Economics - BSE): https://bse.eu/\n6. Fellowship for Winter Methods School 2024: Measuring Citizen’s Digital Behaviours (Universitat Pompeu Fabra - UPF): https://www.upf.edu/\n7. In Altum Scholarship for Law and Politics Summer School 2023 (The Busch School of Business, The Catholic University of America): https://drive.google.com/file/d/1Uc3w0yB-_MBynU5pIP_Tdy3nQMgDLV4P/view?usp=sharing\n8. Academic Performance Scholarship in 2023 (University of Piura - UDEP): https://www.udep.edu.pe/\n9. Second Place — Ashok Kotwal Best Thesis Award (2024, University of Piura) for Bartik elasticity demand study.\n10. Second Place — CFA Institute Ethics Challenge Peru 2022 (representing UDEP): https://www.udep.edu.pe/hoy/2022/09/alumnos-de-economia-obtienen-el-2do-puesto-en-el-cfa-institute-ethics-challenge/\n11. Semifinalist — E-Moot Libre Competencia 2022 (University of the Pacific & Bullard Falla Ezcurra+): https://www.up.edu.pe/\n12. Youth Parliamentarian 2019 representing Piura (Congress of the Republic of Peru).`
        : `Los 12 premios, becas y reconocimientos obtenidos por David:\n\n1. Premio de Plata — China International College Students’ Innovation Competition 2026 (División España; Tongji, UPM, Shanghai Normal, NJUPT). Certificado: https://drive.google.com/file/d/1I6QwwILjX89qICHph4B0TOW6vkhy13Me/view?usp=sharing\n2. Beca CAF para el Diplomado en Gobernabilidad e Innovación Pública 2026 (Universidad Complutense de Madrid y CAF).\n3. Global Leaders Cohort 2024 (Universidad de Oxford y Universidad de St. Gallen, top 1,82%): https://www.leadership-challenge.org/about-glc\n4. Embajador de la Red de Jóvenes Líderes IPE (Instituto Peruano de Economía, 2024): https://ipe.org.pe/presentamos-a-los-embajadores-de-la-red-de-jovenes-lideres-ipe-2024/\n5. Beca para la Escuela de Verano de Economía de la Energía 2024 (Barcelona School of Economics - BSE): https://bse.eu/\n6. Beca para la Escuela de Métodos de Invierno 2024: Medición de Comportamientos Digitales de la Ciudadanía (Universitat Pompeu Fabra - UPF): https://www.upf.edu/\n7. Beca In Altum para la Escuela de Verano de Derecho y Política 2023 (The Busch School of Business, The Catholic University of America): https://drive.google.com/file/d/1Uc3w0yB-_MBynU5pIP_Tdy3nQMgDLV4P/view?usp=sharing\n8. Beca por Rendimiento Académico 2023 (Universidad de Piura - UDEP): https://www.udep.edu.pe/\n9. Segundo Puesto — Premio Ashok Kotwal a la Mejor Tesis 2024 (Universidad de Piura) por la estimación Bartik de demanda de combustible.\n10. Segundo Puesto — CFA Institute Ethics Challenge Perú 2022 (representando a la UDEP): https://www.udep.edu.pe/hoy/2022/09/alumnos-de-economia-obtienen-el-2do-puesto-en-el-cfa-institute-ethics-challenge/\n11. Semifinalista — E-Moot Libre Competencia 2022 (Universidad del Pacífico y Bullard Falla Ezcurra+): https://www.up.edu.pe/\n12. Parlamentario Joven 2019 en representación de la región Piura (Congreso de la República del Perú).`;
    }

    // 7. Direct check for papers / publicaciones / articulos / trabajos overview (when no individual paper was named)
    if (
      testMatch('paper') ||
      testMatch('publicacion') ||
      testMatch('trabajo') ||
      testMatch('articulo') ||
      testMatch('informe') ||
      testMatch('monografia') ||
      testMatch('libro')
    ) {
      return currentLang === 'en'
        ? 'David’s research publications, working papers, and books:\n\n• Working Papers:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n     Authors: Jorge Ricardo Gonzales Castillo Ph.D., Luis Varona Castillo Ph.D., & David Ricardo Gonzales Peña\n     Paper: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     GitHub: https://github.com/davidricardogp/Unpacking-Institutions\n\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao" (Sept. 2026)\n     Authors: David Ricardo Gonzales Peña & Jorge Ricardo Gonzales Castillo Ph.D.\n     Paper: https://doi.org/10.21203/rs.3.rs-10995861/v1\n     GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao\n\n  3. "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru" (Apr. 2024)\n     Authors: David Ricardo Gonzales Peña & Y. Solari\n     SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n     GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps\n\n• Academic Monograph / Book:\n  "Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, Jul. 2026, ISBN 979-8185981559)\n  Amazon Link: https://www.amazon.com/dp/B0H7RQ2HCB\n\n• Policy Reports (EIC Scaling Club & IESE Business School):\n  1. "Corporate Venturing Ecosystem: How Can Policymakers Better Support Corporate-Scaleup Collaborations in EU Deep-Tech?": https://doi.org/10.15581/018/79057\n  2. "Scaleup Financing: How Can Policymakers Better Address the Growth Capital Gap for EU Deep-Tech Scaleups?": https://doi.org/10.15581/018/79055'
        : 'Investigaciones, working papers y libros de David Ricardo:\n\n• Documentos de Trabajo:\n  1. "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship" (Sept. 2026)\n     Autores: Dr. Jorge Ricardo Gonzales Castillo, Dr. Luis Varona Castillo y David Ricardo Gonzales Peña\n     Paper: https://doi.org/10.21203/rs.3.rs-10995280/v1\n     GitHub: https://github.com/davidricardogp/Unpacking-Institutions\n\n  2. "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao" (Sept. 2026)\n     Autores: David Ricardo Gonzales Peña y Dr. Jorge Ricardo Gonzales Castillo\n     Paper: https://doi.org/10.21203/rs.3.rs-10995861/v1\n     GitHub: https://github.com/davidricardogp/fuel-demand-lima-callao\n\n  3. "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru" (Abr. 2024)\n     Autores: David Ricardo Gonzales Peña y Y. Solari\n     SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764\n     GitHub: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps\n\n• Monografía Académica / Libro:\n  "Dynamic and Stochastic Optimization in Economics" (Kindle Direct Publishing, Jul. 2026, ISBN 979-8185981559)\n  Enlace en Amazon: https://www.amazon.com/dp/B0H7RQ2HCB\n\n• Informes de Política Pública (EIC Scaling Club e IESE Business School):\n  1. "Corporate Venturing Ecosystem: How Can Policymakers Better Support Corporate-Scaleup Collaborations in EU Deep-Tech?": https://doi.org/10.15581/018/79057\n  2. "Scaleup Financing: How Can Policymakers Better Address the Growth Capital Gap for EU Deep-Tech Scaleups?": https://doi.org/10.15581/018/79055';
    }

    // 8. Direct checks for social & academic identifiers
    if (testMatch('linkedin')) {
      return currentLang === 'en'
        ? `David's LinkedIn profile is:\nhttps://www.linkedin.com/in/davidricardogp`
        : `El perfil de LinkedIn de David es:\nhttps://www.linkedin.com/in/davidricardogp`;
    }

    if (testMatch('github') || testMatch('repo') || testMatch('codigo')) {
      return currentLang === 'en'
        ? `David's GitHub profile is:\nhttps://github.com/davidricardogp\n\nCode repositories for his research:\n• Unpacking Institutions: https://github.com/davidricardogp/Unpacking-Institutions\n• Fuel Demand (Lima & Callao): https://github.com/davidricardogp/fuel-demand-lima-callao\n• Bartik Elasticity GIS Approach: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps`
        : `El GitHub de David es:\nhttps://github.com/davidricardogp\n\nRepositorios de código de sus investigaciones:\n• Unpacking Institutions: https://github.com/davidricardogp/Unpacking-Institutions\n• Fuel Demand (Lima y Callao): https://github.com/davidricardogp/fuel-demand-lima-callao\n• Bartik Elasticity GIS Approach: https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps`;
    }

    if (testMatch('scholar') || testMatch('cita')) {
      return currentLang === 'en'
        ? `David's Google Scholar profile is:\nhttps://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en`
        : `El perfil de Google Scholar de David es:\nhttps://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en`;
    }

    if (testMatch('orcid')) {
      return currentLang === 'en'
        ? `David's ORCID identifier is 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`
        : `El identificador ORCID de David es 0009-0008-2106-3728:\nhttps://orcid.org/0009-0008-2106-3728`;
    }

    if (
      testMatch('tema') ||
      testMatch('interes') ||
      testMatch('investig') ||
      testMatch('topic') ||
      testMatch('research') ||
      testMatch('agenda')
    ) {
      return currentLang === 'en'
        ? `David’s primary research interests and topics focus on institutional entrepreneurship and AI entrepreneurship.\n\nHe investigates how governance quality, regulatory barriers, and institutional frameworks moderate the entrepreneurship-growth relationship, as well as the economics of technological scaling and AI adoption.`
        : `Los principales temas de investigación e intereses de David son institutional entrepreneurship y AI entrepreneurship.\n\nInvestiga cómo la calidad institucional, las barreras regulatorias y los marcos de gobernanza condicionan la relación entre emprendimiento y crecimiento económico, así como la economía del escalamiento tecnológico y la adopción de inteligencia artificial.`;
    }

    // 5. Keyword scoring for general categories (overview of papers, education overview, talks, awards, etc.)
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
      return `I don't have that specific record on this page, as I only answer from verified academic information about David Ricardo recorded on this website.\n\nYou can ask about his specific papers, universities (e.g. Diego Portales, UDEP, UPF, IESE, Oxford), monograph, GitHub repositories, LinkedIn, or academic affiliations.`;
    }
    return `No dispongo de esa información específica en esta página, ya que solo respondo a partir de datos académicos verificados sobre David Ricardo registrados en este sitio web.\n\nPuedes preguntarme sobre sus papers específicos, universidades (p. ej. Diego Portales, UDEP, UPF, IESE, Oxford), monografía, repositorios de GitHub, LinkedIn o afiliaciones académicas.`;
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
          <h2 className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--ink-3)]">
            {currentLang === 'en' ? 'Ask about David Ricardo' : 'Pregunta sobre David Ricardo'}
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
