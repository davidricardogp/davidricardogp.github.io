export interface PaperItem {
  id: string;
  title: string;
  titleEs?: string;
  authors: string;
  meta: string;
  citation: string;
  url: string;
  type: 'report' | 'book' | 'working-paper' | 'essay';
  badge?: string;
  badgeEs?: string;
  desc?: string;
  descEs?: string;
  summary?: string;
  summaryEs?: string;
  origin?: string;
  originEs?: string;
  jel?: string;
  jelEs?: string;
  githubUrl?: string;
  doi?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  titleEs: string;
  meta: string;
  metaEs: string;
  description: string;
  descriptionEs: string;
  url?: string;
}

export interface EducationItem {
  id: string;
  title: string;
  titleEs: string;
  meta: string;
  metaEs: string;
  details: string[];
  detailsEs: string[];
  url?: string;
}

export interface TalkItem {
  id: string;
  title: string;
  titleEs: string;
  meta: string;
  metaEs: string;
  description: string;
  descriptionEs: string;
  url?: string;
}

export interface AffiliationItem {
  id: string;
  title: string;
  titleEs: string;
  meta: string;
  metaEs: string;
  details: string[];
  detailsEs: string[];
  url?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  titleEs: string;
  description?: string;
  descriptionEs?: string;
  url?: string;
}

export interface MuseumLocation {
  institution: string;
  institutionEs: string;
  city: string;
  department: string;
  departmentEs: string;
  identifier: string;
  url?: string;
}

export interface ArtworkItem {
  id: string;
  title: string;
  titleEs: string;
  series: string;
  seriesEs: string;
  plate: string;
  plateEs: string;
  artist: string;
  artistLifespan: string;
  artistNationality: string;
  artistNationalityEs: string;
  engraver: string;
  engraverRole: string;
  engraverRoleEs: string;
  year: string;
  originalPublication: string;
  originalPublicationEs: string;
  publisher: string;
  publicationPlace: string;
  medium: string;
  mediumEs: string;
  dimensions: string;
  locationSummary: string;
  locationSummaryEs: string;
  locations: MuseumLocation[];
  literaryPassage: {
    work: string;
    canto: string;
    verses: string;
    italian: string;
    spanish: string;
    english: string;
  };
  context: string;
  contextEs: string;
  citations: {
    chicago: string;
    apa: string;
    mla: string;
    bibtex: string;
  };
}

export const DAVID_DATA = {
  name: "David Ricardo Gonzales Peña",
  affiliation: "IESE Business School",
  affiliationEs: "IESE Business School",
  department: "Entrepreneurship Department",
  departmentEs: "Departamento de Emprendimiento",
  field: "Applied Institutional Entrepreneurship",
  fieldEs: "Emprendimiento Institucional Aplicado",
  location: "Barcelona, Spain",
  locationEs: "Barcelona, España",
  
  bio: {
    en: [
      "I am currently a predoctoral researcher in the Entrepreneurship Department at IESE Business School.",
      "My work focuses on applied research in institutional entrepreneurship.",
      "Prior to joining IESE, I earned a Bachelor of Science in Economics from University of Piura. I worked on building and raising funds for a startup. I grew up in Piura, Peru."
    ],
    es: [
      "Actualmente soy investigador predoctoral en el Departamento de Emprendimiento de IESE Business School.",
      "Mi trabajo se centra en la investigación aplicada sobre emprendimiento institucional.",
      "Antes de incorporarme a IESE, obtuve la Licenciatura en Economía por la Universidad de Piura. Trabajé en el desarrollo y levantamiento de capital para una startup. Crecí en Piura, Perú."
    ]
  },

  contact: {
    institution: "IESE Business School",
    department: "Entrepreneurship Department · Entrepreneurship & Innovation Center",
    departmentEs: "Departamento de Emprendimiento · Centro de Emprendimiento e Innovación",
    address: "Av. de Pearson, 21, Les Corts\n08034 Barcelona\nOffice E119, South Campus",
    addressEs: "Av. de Pearson, 21, Les Corts\n08034 Barcelona\nDespacho E119, Campus Sur",
    email: "DRGonzales@iese.edu",
    tel: "+34 613 889 969",
    ext: "ext. 504719",
    cvFilename: "David_Ricardo_Gonzales_Pena_CV.pdf",
    github: "https://github.com/davidricardogp",
    linkedin: "https://www.linkedin.com/in/davidricardogp",
    scholar: "https://scholar.google.com/citations?user=XrrBD8wAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0008-2106-3728",
    orcidId: "0009-0008-2106-3728"
  },

  artwork: {
    id: "dore-inferno-canto-4",
    title: "The Divine Comedy: Inferno, Canto IV — Homer, the Poets, and Heroes in Limbo",
    titleEs: "La Divina Comedia: Infierno, Canto IV — Homero, los poetas y los sabios en el Limbo",
    series: "Dante Alighieri's The Divine Comedy",
    seriesEs: "La Divina Comedia de Dante Alighieri",
    plate: "Plate XII (Planche 12)",
    plateEs: "Lámina XII (Planche 12)",
    artist: "Gustave Doré",
    artistLifespan: "1832–1883",
    artistNationality: "French painter, printmaker, and illustrator",
    artistNationalityEs: "Pintor, grabador e ilustrador francés",
    engraver: "Stéphane Pannemaker (1847–1930)",
    engraverRole: "Wood engraver (Atelier Doré)",
    engraverRoleEs: "Grabador en madera (Taller Doré)",
    year: "1861",
    originalPublication: "L'Enfer de Dante Alighieri, avec les dessins de Gustave Doré",
    originalPublicationEs: "L'Enfer de Dante Alighieri, con los grabados de Gustave Doré",
    publisher: "Librairie de L. Hachette et Cie",
    publicationPlace: "Paris, France",
    medium: "Wood engraving on paper (gravure sur bois de bout / xilografía)",
    mediumEs: "Grabado en madera de testa sobre papel (xilografía)",
    dimensions: "24.5 × 19.5 cm (plate mark); 43 × 31 cm (folio sheet)",
    locationSummary: "Département des Estampes et de la photographie, Bibliothèque nationale de France (BnF), Paris",
    locationSummaryEs: "Departamento de Grabados y Fotografía, Biblioteca Nacional de Francia (BnF), París",
    locations: [
      {
        institution: "Bibliothèque nationale de France (BnF)",
        institutionEs: "Biblioteca Nacional de Francia (BnF)",
        city: "Paris, France",
        department: "Département des Estampes et de la photographie & Réserve des livres rares",
        departmentEs: "Departamento de Grabados y Fotografía y Reserva de Libros Raros",
        identifier: "Réserve Ye-15-Fol. (Dépôt légal 1861) · ARK bpt6k10499645",
        url: "https://gallica.bnf.fr/ark:/12148/bpt6k10499645"
      },
      {
        institution: "The British Museum",
        institutionEs: "Museo Británico (The British Museum)",
        city: "London, United Kingdom",
        department: "Department of Prints and Drawings",
        departmentEs: "Departamento de Grabados y Dibujos",
        identifier: "Museum number 1878,0511.1278 (Plate XII)",
        url: "https://www.britishmuseum.org/collection/object/P_1878-0511-1278"
      },
      {
        institution: "The Metropolitan Museum of Art (The Met)",
        institutionEs: "Museo Metropolitano de Arte (The Met)",
        city: "New York, NY, United States",
        department: "Department of Drawings and Prints",
        departmentEs: "Departamento de Dibujos y Grabados",
        identifier: "Harris Brisbane Dick Fund, Accession 22.61.1",
        url: "https://www.metmuseum.org/art/collection"
      },
      {
        institution: "Library of Congress",
        institutionEs: "Biblioteca del Congreso de EE. UU.",
        city: "Washington, D.C., United States",
        department: "Rare Book and Special Collections Division",
        departmentEs: "División de Libros Raros y Colecciones Especiales",
        identifier: "Call Number: PQ4315.12 .D6 1861",
        url: "https://www.loc.gov/"
      }
    ],
    literaryPassage: {
      work: "Dante Alighieri, La Divina Commedia — Inferno",
      canto: "Canto IV, vv. 86–90",
      italian: "« Mira colui con quella spada in mano,\nche vien dinanzi ai tre sì come sire:\nquelli è Omero poeta sovrano;\nl'altro è Orazio satiro che viene;\nOvidio è 'l terzo, e l'ultimo Lucano. »",
      spanish: "« Mira a aquel con la espada en la mano,\nque viene delante de los tres como soberano:\nese es Homero, el poeta supremo;\nel otro es Horacio, el satírico, que le sigue;\nOvidio es el tercero, y el último Lucano. »",
      english: "\"Mark him with the sword in hand,\nwho comes before the other three like their lord:\nthat is Homer, sovereign poet;\nthe next who comes is Horace, the satirist;\nOvid is the third, and the last is Lucan.\""
    },
    context: "In Canto IV of the Inferno, Dante and Virgil reach Limbo, the first circle of Hell reserved for virtuous non-Christians and the noble thinkers of classical antiquity. Dante witnesses Virgil being welcomed back by Homer (holding a sword as master of the epic poem), Horace, Ovid, and Lucan. Together they comprise 'la bella scola' (the noble company) of supreme literary and philosophical intellect, embracing Dante as their sixth peer. This engraving stands as a quintessential emblem of classical scholarship, institutional memory, and intellectual lineage.",
    contextEs: "En el Canto IV del Infierno, Dante y Virgilio llegan al Limbo, el primer círculo reservado para las almas virtuosas y los insignes pensadores de la antigüedad clásica. Dante contempla cómo Virgilio es acogido fraternalmente por Homero (quien empuña una espada como maestro del poema épico), Horacio, Ovidio y Lucano. Juntos forman 'la bella scola' (la noble compañía) del intelecto supremo, invitando a Dante a unirse como el sexto de su estirpe. Esta lámina simboliza el tributo a la tradición clásica, el rigor académico y la continuidad del pensamiento humano.",
    citations: {
      chicago: "Doré, Gustave (artist), and Stéphane Pannemaker (engraver). 1861. The Divine Comedy: Inferno, Canto IV (Plate XII: Homer, the Poets, and Heroes in Limbo). Wood engraving, 24.5 × 19.5 cm. In Dante Alighieri, L'Enfer, translated by Pier-Angelo Fiorentino. Paris: Librairie de L. Hachette et Cie. Collection Bibliothèque nationale de France, Paris, Réserve Ye-15-Fol.",
      apa: "Doré, G. (Artist), & Pannemaker, S. (Engraver). (1861). Inferno, Canto IV: Homer, the poets, and heroes in Limbo [Wood engraving]. In D. Alighieri, L'Enfer. Paris: Librairie de L. Hachette et Cie. Preserved in Bibliothèque nationale de France, Paris (Réserve Ye-15-Fol.) and The British Museum (1878,0511.1278).",
      mla: "Doré, Gustave, and Stéphane Pannemaker. Inferno, Canto IV: Homer, the Poets, and Heroes in Limbo. 1861. Wood engraving. In Dante Alighieri, L'Enfer, Librairie de L. Hachette et Cie, Paris, 1861. Bibliothèque nationale de France, Paris.",
      bibtex: `@misc{dore1861inferno,\n  author       = {Doré, Gustave and Pannemaker, Stéphane},\n  title        = {The Divine Comedy: Inferno, Canto IV (Plate XII: Homer and the Poets in Limbo)},\n  year         = {1861},\n  howpublished = {Wood engraving in Dante Alighieri's \\textit{L'Enfer}, Paris: Librairie de L. Hachette et Cie},\n  note         = {Preserved at the Bibliothèque nationale de France (Réserve Ye-15-Fol.) and The British Museum (1878,0511.1278)},\n  url          = {https://gallica.bnf.fr/ark:/12148/bpt6k10499645}\n}`
    }
  } as ArtworkItem,

  policyReports: [
    {
      id: "report-1",
      title: "Corporate Venturing Ecosystem: How Can Policymakers Better Support Corporate-Scaleup Collaborations in EU Deep-Tech?",
      authors: "Siota, J., Singleton, R., Gonzales, D. R., & Yáñez, G. (2026)",
      meta: "Associated with IESE Business School · Jun. 2026",
      citation: "Siota, J., Singleton, R., Gonzales, D. R., & Yáñez, G. (2026). Corporate Venturing Ecosystem: How Can Policymakers Better Support Corporate-Scaleup Collaborations in EU Deep-Tech? Scaleup Series, Policy Report 1 out of 3. EIC Scaling Club. https://doi.org/10.15581/018/79057",
      url: "https://doi.org/10.15581/018/79057",
      type: "report",
      badge: "Policy Report",
      badgeEs: "Informe de Política",
      origin: "Produced at the Entrepreneurship and Innovation Center (EIC) at IESE Business School, in collaboration with the European Innovation Council (EIC) Scaling Club initiative.",
      originEs: "Elaborado en el Centro de Emprendimiento e Innovación (EIC) de IESE Business School, en colaboración con la iniciativa EIC Scaling Club del Consejo Europeo de Innovación.",
      summary: "This policy report examines structural bottlenecks hindering collaboration between European multinational corporations and deep-tech scaleups (artificial intelligence, quantum computing, biotechnology, and clean energy). Drawing on extensive empirical interviews and European market data, the report provides concrete policy frameworks to accelerate pilot programs, reduce intellectual property friction, and bridge corporate innovation timelines.",
      summaryEs: "Este informe de políticas examina los cuellos de botella estructurales que dificultan la colaboración entre corporaciones multinacionales europeas y scaleups deep-tech (inteligencia artificial, computación cuántica, biotecnología y energía limpia). A partir de entrevistas empíricas y datos de mercado europeos, proporciona marcos normativos concretos para agilizar pruebas de concepto, mitigar fricciones en propiedad intelectual y alinear horizontes temporales de innovación.",
      jel: "G24, O31, O38"
    },
    {
      id: "report-2",
      title: "Scaleup Financing: How Can Policymakers Better Address the Growth Capital Gap for EU Deep-Tech Scaleups?",
      authors: "Siota, J., Singleton, R., & Gonzales, D. R. (2026)",
      meta: "Associated with IESE Business School · Jun. 2026",
      citation: "Siota, J., Singleton, R., & Gonzales, D. R. (2026). Scaleup Financing: How Can Policymakers Better Address the Growth Capital Gap for EU Deep-Tech Scaleups? Scaleup Series, Policy Report 2 out of 3. EIC Scaling Club. https://doi.org/10.15581/018/79055",
      url: "https://doi.org/10.15581/018/79055",
      type: "report",
      badge: "Policy Report",
      badgeEs: "Informe de Política",
      origin: "Produced at the Entrepreneurship and Innovation Center (EIC) at IESE Business School, as part of the EU Deep-Tech Scaleup Policy Research Series.",
      originEs: "Elaborado en el Centro de Emprendimiento e Innovación (EIC) de IESE Business School, como parte de la Serie de Investigación en Políticas para Scaleups Deep-Tech de la UE.",
      summary: "An in-depth empirical investigation into the late-stage funding gap (Series B through pre-IPO) confronting European deep-tech scaleups compared to counterparts in the US and Asia. It analyzes capital allocation mechanics, private equity involvement, and designs public-private co-investment structures to prevent technology flight and brain drain across the European Union.",
      summaryEs: "Una investigación empírica en profundidad sobre el déficit de capital de crecimiento (desde Serie B hasta etapas previas a la salida a bolsa) que enfrentan las scaleups deep-tech en Europa frente a Estados Unidos y Asia. Analiza la mecánica de asignación de capital, la participación de capital riesgo y diseña esquemas de coinversión público-privados para frenar la fuga de propiedad intelectual y talento en la UE.",
      jel: "G24, G32, O38"
    }
  ] as PaperItem[],

  books: [
    {
      id: "book-1",
      title: "Dynamic and Stochastic Optimization in Economics",
      authors: "Gonzales, D. R. (2026)",
      meta: "Kindle Direct Publishing · Jul. 2026",
      citation: "Gonzales, D. R. (2026). Dynamic and Stochastic Optimization in Economics (1st ed.). Kindle Direct Publishing. ISBN 979-8185981559. https://www.amazon.com/dp/B0H7RQ2HCB",
      url: "https://www.amazon.com/dp/B0H7RQ2HCB",
      type: "book",
      badge: "Academic Monograph",
      badgeEs: "Monografía Académica",
      origin: "Academic monograph based on course lecture notes and theoretical problem sets, accompanied by Python and Julia computational replication algorithms.",
      originEs: "Monografía académica basada en mis apuntes de clase y ejercicios teóricos, acompañada de algoritmos de replicación computacional en Python y Julia.",
      summary: "A comprehensive treatise on continuous and discrete-time dynamic optimization methods in economics. Covers the calculus of variations, Euler-Lagrange equations, Pontryagin's maximum principle, Bellman dynamic programming, Hamilton-Jacobi-Bellman (HJB) equations, and stochastic differential equations with Itô calculus. Includes full computational implementations for consumption-smoothing, asset pricing, and real options valuation under uncertainty.",
      summaryEs: "Un tratado exhaustivo sobre métodos de optimización dinámica en tiempo discreto y continuo aplicados a la economía. Cubre cálculo de variaciones, ecuaciones de Euler-Lagrange, principio del máximo de Pontryagin, programación dinámica de Bellman, ecuaciones de Hamilton-Jacobi-Bellman (HJB) y ecuaciones diferenciales estocásticas con cálculo de Itô. Incluye implementaciones numéricas completas para suavización de consumo, valoración de activos y opciones reales bajo incertidumbre.",
      jel: "C61, D90, E21, G11"
    }
  ] as PaperItem[],

  workingPapers: [
    {
      id: "wp-1",
      title: "Unpacking Institutions: How Governance Quality Moderates the Entrepreneurship-Growth Relationship",
      authors: "Gonzales Castillo, J. R., Varona Castillo, L., & Gonzales Peña, D. R. (2026)",
      meta: "Research Square · Working paper · Sept. 2026",
      citation: "Gonzales Castillo, J. R., Varona Castillo, L., & Gonzales Peña, D. R. (2026). Unpacking institutions: How governance quality moderates the entrepreneurship-growth relationship. Research Square. https://doi.org/10.21203/rs.3.rs-10995280/v1",
      url: "https://doi.org/10.21203/rs.3.rs-10995280/v1",
      type: "working-paper",
      badge: "Working Paper",
      badgeEs: "Documento de Trabajo",
      origin: "This paper is a collaborative project with my father, Jorge Ricardo Gonzales Castillo Ph.D., who augmented the theoretical Ramsey-Cass-Koopmans growth model by incorporating entrepreneurship as an endogenous factor to examine its growth effects, and my uncle, Luis Varona Castillo Ph.D., who added institutional informality to the model. Both are researchers and professors at National Univesity of Piura. Together with me, we formulated this research question to investigate how institutional quality and governance moderate the entrepreneurship-growth relationship.",
      originEs: "Este documento es un proyecto colaborativo con mi padre, el Dr. Jorge Ricardo Gonzales Castillo, quien amplió el modelo teórico de crecimiento de Ramsey-Cass-Koopmans incorporando el emprendimiento como un factor endógeno para examinar sus efectos en el crecimiento, y mi tío, el Dr. Luis Varona Castillo, quien añadió la informalidad institucional al modelo. Ambos son investigadores y profesores de la Universidad Nacional de Piura. Junto conmigo, formulamos esta pregunta de investigación para estudiar cómo la calidad institucional y la gobernanza moderan la relación entre emprendimiento y crecimiento.",
      summary: "This research examines the relationship between entrepreneurship and economic performance in Latin America and the Caribbean, and how this relationship is shaped by the institutional and productive environment of the region. The article employs an augmented Ramsey–Cass–Koopmans framework, where entrepreneurial knowledge acts as a Romer-style externality that boosts productive capacity, with formal business entry serving as a key component. The findings suggest that while formal business creation can lead to stronger economic performance, its economic significance should be understood within the broader productive and institutional context in which firms operate. Therefore, entrepreneurship is better viewed as one element of a wider development process rather than an independent or automatic driver of economic growth.",
      summaryEs: "Esta investigación examina la relación entre el emprendimiento y el desempeño económico en América Latina y el Caribe, y cómo dicha relación está condicionada por el entorno institucional y productivo de la región. El artículo emplea un marco ampliado de Ramsey–Cass–Koopmans, donde el conocimiento emprendedor actúa como una externalidad tipo Romer que incrementa la capacidad productiva, teniendo a la creación formal de empresas como un componente clave. Los hallazgos sugieren que, si bien la creación de empresas formales puede propiciar un mayor desempeño económico, su relevancia económica debe entenderse dentro del contexto productivo e institucional más amplio en el que operan las empresas. Por consiguiente, el emprendimiento se concibe mejor como un elemento dentro de un proceso integral de desarrollo más que como un motor independiente o automático del crecimiento económico.",
      jel: "O43, L26, D73, O17",
      githubUrl: "https://github.com/davidricardogp/Unpacking-Institutions"
    },
    {
      id: "wp-2",
      title: "Fuel Demand, Spatial Competition, and Local Market Structure: Evidence from Gasohol Retailing in Lima and Callao",
      authors: "Gonzales Peña, D. R., & Gonzales Castillo, J. R. (2026)",
      meta: "Research Square · Working paper · Sept. 2026",
      citation: "Gonzales Peña, D. R., & Gonzales Castillo, J. R. (2026). Fuel demand, spatial competition, and local market structure: Evidence from gasohol retailing in Lima and Callao. Research Square. https://doi.org/10.21203/rs.3.rs-10995861/v1",
      url: "https://doi.org/10.21203/rs.3.rs-10995861/v1",
      type: "working-paper",
      badge: "Working Paper",
      badgeEs: "Documento de Trabajo",
      origin: "Microeconometric empirical research in industrial organization analyzing retail fuel markets and spatial competition using granular administrative transaction and pricing data from OSINERGMIN (Organismo Supervisor de la Inversión en Energía y Minería del Perú). This work is an extension of the Bartik approach, where we implement a log-log model.",
      originEs: "Investigación empírica microeconométrica en organización industrial analizando los mercados minoristas de combustibles y la competencia espacial a partir de microdatos administrativos de transacciones y precios de OSINERGMIN (Organismo Supervisor de la Inversión en Energía y Minería del Perú). Este trabajo es una extensión del enfoque de Bartik, en el que implementamos un modelo log-log.",
      summary: "This study estimates the price elasticity of demand for 90- and 95-octane gasohol in Metropolitan Lima and Callao, Peru, over the period from March 2020 to December 2022. Utilizing monthly district-level data on prices and quantities sold from Osinergmin, the analysis employs a log-log demand specification with district and month fixed effects, complemented by robustness checks and instrumental-variable exercises that incorporate fuel reference prices and local exposure to spatial competition among service stations. The findings demonstrate a negative relationship between real prices and gasohol demand, with estimated elasticities of -1.50 for 90-octane gasohol and -2.20 for 95-octane gasohol across the full period, increasing to -2.46 and -3.17 respectively for the 2021–2022 period.",
      summaryEs: "Este estudio estima la elasticidad precio de la demanda de gasohol de 90 y 95 octanos en Lima Metropolitana y el Callao (Perú) durante el período de marzo de 2020 a diciembre de 2022. A partir de datos mensuales distritales sobre precios y volúmenes vendidos provenientes de Osinergmin, el análisis utiliza una especificación de demanda log-log con efectos fijos por distrito y mes, complementada con pruebas de robustez y variables instrumentales que incorporan precios de referencia internacional y la exposición local a la competencia espacial entre estaciones de servicio. Los resultados confirman una relación negativa entre precios reales y demanda de gasohol, con elasticidades estimadas de -1,50 para gasohol de 90 octanos y -2,20 para gasohol de 95 octanos en todo el período, incrementándose a -2,46 y -3,17 en el subperíodo 2021–2022.",
      jel: "L11, L81, D12, R41, Q41",
      githubUrl: "https://github.com/davidricardogp/fuel-demand-lima-callao"
    },
    {
      id: "wp-3",
      title: "Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru",
      authors: "Gonzales Peña, D. R., & Solari, Y. (2024)",
      meta: "Social Science Research Network (SSRN) · Working paper · Apr. 2024",
      citation: "Gonzales Peña, D. R., & Solari, Y. (2024). Bartik Approach for Estimating the Price Elasticity of Demand for Gasohol: Lima, Peru. Social Science Research Network (SSRN). https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4791764",
      type: "working-paper",
      badge: "Working Paper",
      badgeEs: "Documento de Trabajo",
      origin: "This project originated as my final course thesis, where we aimed to apply Bartik instrumental variables to estimate the price elasticity of demand for a good — an approach that had previously been used to estimate the elasticity of labor.",
      originEs: "Este proyecto se originó como mi tesis de fin de carrera, donde nos propusimos aplicar variables instrumentales de Bartik para estimar la elasticidad precio de la demanda de un bien —un enfoque que previamente se había utilizado para estimar la elasticidad del trabajo.",
      summary: "The purpose of this study is to estimate the price elasticity of demand for 90 and 95 octane gasohol in Metropolitan Lima and Callao. To that aim, Osinergmin price and traded quantity data, as well as a Bartik instrumental variable estimate approach, are employed to prevent endogeneity biases, which is novel. Estimates show that demand is elastic, therefore tax policies are successful at reducing consumption. There is also evidence that 95 octane gasoline is regarded as a luxury good by consumers.",
      summaryEs: "El propósito de este estudio es estimar la elasticidad precio de la demanda de gasohol de 90 y 95 octanos en Lima Metropolitana y el Callao. Con ese fin, se emplean datos de precios y cantidades transadas de Osinergmin, así como una estimación por variables instrumentales tipo Bartik para prevenir sesgos de endogeneidad, lo cual resulta novedoso. Las estimaciones muestran que la demanda es elástica; por tanto, las políticas tributarias son exitosas en reducir el consumo. Asimismo, existe evidencia de que la gasolina de 95 octanos es considerada un bien de lujo por los consumidores.",
      jel: "C26, D12, L71, Q41",
      githubUrl: "https://github.com/davidricardogp/Bartik_Elasticity_of_Demand_Approach_GIS_API_GoogleMaps"
    }
  ] as PaperItem[],

  publicWriting: [
    {
      id: "essay-1",
      title: "Scaling Deep Tech in Europe: Where Do Priorities Diverge?",
      meta: "IESE Business School Entrepreneurship Blog Network · Jul. 2026",
      desc: "Essay on priority gaps in Europe’s deep-tech scaling ecosystem and how misalignments between scaleups and stakeholders shape growth decisions.",
      descEs: "Ensayo sobre brechas de prioridad en el ecosistema europeo de escalamiento deep-tech y cómo la falta de alineación entre scaleups y actores clave influye en las decisiones de crecimiento.",
      url: "https://blog.iese.edu/entrepreneurship/2026/07/27/scaling-deep-tech-in-europe-where-do-priorities-diverge/"
    },
    {
      id: "essay-2",
      title: "Formalizar no puede ser una carrera de obstáculos",
      meta: "Peruvian Institute of Economics · Jun. 2026",
      metaEs: "Instituto Peruano de Economía (IPE) · Jun. 2026",
      desc: "Essay on business formalization in Peru and how local regulatory barriers can discourage entrepreneurs from entering the formal economy.",
      descEs: "Ensayo sobre la formalización empresarial en el Perú y cómo las barreras regulatorias locales pueden desincentivar la entrada de emprendedores a la economía formal.",
      url: "https://ipe.org.pe/"
    },
    {
      id: "essay-5",
      title: "Perú innova, pero todavía le cuesta convertir conocimiento en resultados",
      meta: "Diario El Gobierno · Jun. 2026",
      metaEs: "Diario El Gobierno · Jun. 2026",
      desc: "Essay analyzing why innovation in emerging economies struggles to translate research into commercial outcomes due to institutional and coordination bottlenecks.",
      descEs: "Columna de opinión sobre los desafíos que enfrentan los ecosistemas de innovación en economías emergentes para convertir investigación en resultados tangibles debido a fricciones institucionales.",
      url: "https://diarioelgobierno.com/peru-innova-pero-todavia-le-cuesta-convertir-conocimiento-en-resultados-por-david-ricardo-gonzales-pena/"
    },
    {
      id: "essay-3",
      title: "SDG 4: Quality Education | Match-A-Buddy",
      meta: "University of Oxford: The Oxford Character Project · Jan. 2025",
      metaEs: "Universidad de Oxford: The Oxford Character Project · Ene. 2025",
      desc: "Project focused on reducing educational dropout and improving access to academic aspirations among vulnerable students.",
      descEs: "Proyecto centrado en reducir la deserción escolar y mejorar el acceso a aspiraciones académicas entre estudiantes vulnerables.",
      url: "https://oxfordcharacter.org/"
    },
    {
      id: "essay-4",
      title: "Transformar las Instituciones: el camino hacia un Perú próspero",
      meta: "Peruvian Institute of Economics · Dec. 2024",
      metaEs: "Instituto Peruano de Economía (IPE) · Dic. 2024",
      desc: "Essay on inclusive institutions, economic development, and the institutional challenges facing Peru.",
      descEs: "Ensayo sobre instituciones inclusivas, desarrollo económico y los desafíos institucionales que enfrenta el Perú.",
      url: "https://ipe.org.pe/"
    }
  ],

  experience: [
    {
      id: "exp-1",
      title: "Predoctoral Researcher — Entrepreneurship Department, IESE Business School",
      titleEs: "Investigador Predoctoral — Departamento de Emprendimiento, IESE Business School",
      meta: "Barcelona, Spain · Jul. 2026 – Present",
      metaEs: "Barcelona, España · Jul. 2026 – Actualidad",
      description: "Teaching assistance for Business Model Innovation and Fundamentals of Entrepreneurial Management (Prof. Yuliya Snihur, Ph.D.) and Entrepreneurial Finance (Heinrich Liechtenstein, Ph.D.). Research at the Entrepreneurship and Innovation Center. Predoctoral coursework in Contemporary Entrepreneurship Topics, Research Design and Econometrics II.",
      descriptionEs: "Asistencia de docencia en Business Model Innovation y Fundamentals of Entrepreneurial Management (Dra. Yuliya Snihur) y Entrepreneurial Finance (Dr. Heinrich Liechtenstein). Investigación en el Centro de Emprendimiento e Innovación. Cursos predoctorales en Temas Contemporáneos de Emprendimiento, Diseño de Investigación y Econometría II.",
      url: "https://www.iese.edu/"
    },
    {
      id: "exp-2",
      title: "Research Assistant — Entrepreneurship & Innovation Center, IESE Business School",
      titleEs: "Asistente de Investigación — Centro de Emprendimiento e Innovación, IESE Business School",
      meta: "Barcelona, Spain · Jan. 2025 – Jul. 2026",
      metaEs: "Barcelona, España · Ene. 2025 – Jul. 2026",
      description: "Focused on applied research in innovation, public policy, corporate venturing, and startup ecosystems.",
      descriptionEs: "Investigación aplicada en innovación, políticas públicas, corporate venturing y ecosistemas de startups.",
      url: "https://www.iese.edu/entrepreneurship/"
    },
    {
      id: "exp-3",
      title: "Head of Fundraising — beder",
      titleEs: "Head of Fundraising — beder",
      meta: "Barcelona, Spain · Sep. 2023 – Jan. 2025",
      metaEs: "Barcelona, España · Sep. 2023 – Ene. 2025",
      description: "Supported the startup’s launch and development alongside the founder, managing public funding applications and fundraising processes of up to €0.5M.",
      descriptionEs: "Apoyo en el lanzamiento y escalamiento de la startup junto al fundador, gestionando convocatorias públicas y procesos de captación de capital de hasta 0,5M€.",
      url: "https://beder.app/"
    },
    {
      id: "exp-4",
      title: "Undergraduate Teaching Assistant — Universidad de Piura",
      titleEs: "Asistente de Docencia — Universidad de Piura",
      meta: "Lima, Peru · Mar. 2023 – Jul. 2023",
      metaEs: "Lima, Perú · Mar. 2023 – Jul. 2023",
      description: "Assisted Ignacio Soto Llosa, Ph.D., in the undergraduate course Political and Economic Thought, supporting lecture preparation, class materials, and student learning.",
      descriptionEs: "Asistencia al Dr. Ignacio Soto Llosa en el curso de Pensamiento Político y Económico, apoyando la preparación de clases, materiales y tutorías.",
      url: "https://www.udep.edu.pe/"
    },
    {
      id: "exp-5",
      title: "Undergraduate Research Assistant — Universidad de Piura",
      titleEs: "Asistente de Investigación — Universidad de Piura",
      meta: "Lima, Peru · Jan. 2023 – May 2023",
      metaEs: "Lima, Perú · Ene. 2023 – May. 2023",
      description: "Assisted Miguel Carpio, Ph.D., with research projects related to education, development economics, and banking.",
      descriptionEs: "Asistencia al Dr. Miguel Carpio en proyectos de investigación relacionados con educación, economía del desarrollo y banca.",
      url: "https://www.udep.edu.pe/"
    },
    {
      id: "exp-6",
      title: "Economic Consulting Intern — Bullard Falla Ezcurra+",
      titleEs: "Practicante de Consultoría Económica — Bullard Falla Ezcurra+",
      meta: "Lima, Peru · Aug. 2022 – Dec. 2022",
      metaEs: "Lima, Perú · Ago. 2022 – Dic. 2022",
      description: "Research on market dynamics, M&A, and competition authority investigations.",
      descriptionEs: "Investigación sobre dinámicas de mercado, fusiones y adquisiciones e investigaciones de autoridades de competencia.",
      url: "https://bullardfallaezcurra.com/"
    },
    {
      id: "exp-7",
      title: "Finance Intern — Windham Mountain Club",
      titleEs: "Practicante de Finanzas — Windham Mountain Club",
      meta: "New York, United States · May 2021 – Mar. 2022",
      metaEs: "Nueva York, Estados Unidos · May. 2021 – Mar. 2022",
      description: "Financial administration and reporting.",
      descriptionEs: "Administración financiera y reportes de gestión.",
      url: "https://www.windhammountainclub.com/"
    }
  ] as ExperienceItem[],

  degrees: [
    {
      id: "deg-1",
      title: "B.Sc. Economics — University of Piura",
      titleEs: "Licenciatura en Economía — Universidad de Piura",
      meta: "Lima, Peru · Mar. 2019 – Jan 2024",
      metaEs: "Lima, Perú · Mar. 2019 – Ene. 2024",
      details: [
        "Member of the University Cloister, Delegate of the Faculty of Economics."
      ],
      detailsEs: [
        "Miembro del Claustro Universitario, Delegado de la Facultad de Ciencias Económicas y Empresariales."
      ]
    },
    {
      id: "deg-2",
      title: "Bachelor’s Exchange, Commercial Engineering — Diego Portales University",
      titleEs: "Intercambio Académico, Ingeniería Comercial — Universidad Diego Portales",
      meta: "Santiago, Chile · Mar. 2023 – Jul. 2023",
      metaEs: "Santiago, Chile · Mar. 2023 – Jul. 2023",
      details: [
        "Exchange coursework in labour economics and environmental economics."
      ],
      detailsEs: [
        "Cursos de intercambio en economía laboral y economía ambiental."
      ]
    },
    {
      id: "deg-3",
      title: "Bachelor’s Exchange, Economics — Pompeu Fabra University",
      titleEs: "Intercambio Académico, Economía — Universitat Pompeu Fabra",
      meta: "Barcelona, Spain · Sep. 2023 – Dec. 2023",
      metaEs: "Barcelona, España · Sep. 2023 – Dic. 2023",
      details: [
        "Exchange coursework in Organizational Behaviour, Business Games, and Science and Globalization.",
        "Member of UPF E-Society: Entrepreneurship, Innovation & Startups."
      ],
      detailsEs: [
        "Cursos de intercambio en Comportamiento Organizacional, Juegos de Empresa, y Ciencia y Globalización.",
        "Miembro de UPF E-Society: Emprendimiento, Innovación y Startups."
      ]
    }
  ] as EducationItem[],

  complementaryEducation: [
    {
      id: "comp-1",
      title: "IESE Business School",
      titleEs: "IESE Business School",
      meta: "Barcelona, Spain · Sep. 2026 – Dec. 2026",
      metaEs: "Barcelona, España · Sep. 2026 – Dic. 2026",
      details: ["Predoctoral coursework in Contemporary Entrepreneurship Topics, Research Design and Econometrics II."],
      detailsEs: ["Cursos predoctorales en Temas Contemporáneos de Emprendimiento, Diseño de Investigación y Econometría II."]
    },
    {
      id: "comp-2",
      title: "CAF — Development Bank of Latin America and the Caribbean and Complutense University of Madrid",
      titleEs: "CAF — Banco de Desarrollo de América Latina y el Caribe y Universidad Complutense de Madrid",
      meta: "Madrid, Spain · Jun. 2026 – Dec. 2026",
      metaEs: "Madrid, España · Jun. 2026 – Dic. 2026",
      details: ["Diploma in Governance and Public Innovation."],
      detailsEs: ["Diplomado en Gobernabilidad e Innovación Pública."]
    },
    {
      id: "comp-3",
      title: "EuroTeQ Ignite Bootcamp — IESE Business School",
      titleEs: "EuroTeQ Ignite Bootcamp — IESE Business School",
      meta: "Barcelona, Spain · Jul. 2026",
      metaEs: "Barcelona, España · Jul. 2026",
      details: ["Participant in the European entrepreneurship and technology innovation program organized by IESE Business School within the EuroTeQ university alliance."],
      detailsEs: ["Participante en el programa europeo de emprendimiento e innovación tecnológica organizado por IESE Business School dentro de la alianza EuroTeQ."]
    },
    {
      id: "comp-4",
      title: "World Bank Group Youth Summit",
      titleEs: "Cumbre de la Juventud del Grupo Banco Mundial",
      meta: "Issued Jun. 2025",
      metaEs: "Emitido Jun. 2025",
      details: ["Behavioral Science in Public Policy."],
      detailsEs: ["Ciencias del Comportamiento en Políticas Públicas."],
      url: "https://www.worldbank.org/en/events/2025/05/19/new-horizons-youth-led-innovation-for-a-livable-planet"
    },
    {
      id: "comp-5",
      title: "Oxford University — The Oxford Character Project",
      titleEs: "Universidad de Oxford — The Oxford Character Project",
      meta: "Issued Mar. 2025",
      metaEs: "Emitido Mar. 2025",
      details: ["Leading with Character."],
      detailsEs: ["Liderazgo con Carácter."]
    },
    {
      id: "comp-6",
      title: "Summer School — Barcelona School of Economics",
      titleEs: "Escuela de Verano — Barcelona School of Economics",
      meta: "Barcelona, Spain · Jun. 2024",
      metaEs: "Barcelona, España · Jun. 2024",
      details: ["Energy Economics."],
      detailsEs: ["Economía de la Energía."]
    },
    {
      id: "comp-7",
      title: "Winter Methods School — Pompeu Fabra University",
      titleEs: "Escuela de Métodos de Invierno — Universitat Pompeu Fabra",
      meta: "Barcelona, Spain · Mar. 2024",
      metaEs: "Barcelona, España · Mar. 2024",
      details: ["Measuring Citizen’s Digital Behaviours."],
      detailsEs: ["Medición de Comportamientos Digitales de la Ciudadanía."]
    },
    {
      id: "comp-8",
      title: "Summer School — The Catholic University of America",
      titleEs: "Escuela de Verano — The Catholic University of America",
      meta: "Washington, D.C., United States · Jul. 2023",
      metaEs: "Washington, D.C., Estados Unidos · Jul. 2023",
      details: ["Law and Politics."],
      detailsEs: ["Derecho y Política."]
    },
    {
      id: "comp-9",
      title: "Crash Course — Center for Research in Experimental Economics (CREE)",
      titleEs: "Curso Intensivo — Center for Research in Experimental Economics (CREE)",
      meta: "Lima, Peru · Feb. 2023 – Mar. 2023",
      metaEs: "Lima, Perú · Feb. 2023 – Mar. 2023",
      details: ["Experimental Economics Programming at the Center for Research in Experimental Economics (CREE)."],
      detailsEs: ["Programación en Economía Experimental en el Center for Research in Experimental Economics (CREE)."],
      url: "https://www.udep.edu.pe/cree/"
    },
    {
      id: "comp-10",
      title: "CAF — Development Bank of Latin America and the Caribbean",
      titleEs: "CAF — Banco de Desarrollo de América Latina y el Caribe",
      meta: "Issued Jun. 2022",
      metaEs: "Emitido Jun. 2022",
      details: ["Public Economy."],
      detailsEs: ["Economía Pública."]
    },
    {
      id: "comp-11",
      title: "Development Economics — National Autonomous University of Mexico",
      titleEs: "Economía del Desarrollo — Universidad Nacional Autónoma de México (UNAM)",
      meta: "Mexico City, Mexico · Mar. 2021 – Jun. 2021",
      metaEs: "Ciudad de México, México · Mar. 2021 – Jun. 2021",
      details: ["Philosophical and analytical problems in the economic development of structurally restricted economies by Anthony Thirlwall, Ph.D."],
      detailsEs: ["Problemas analíticos y filosóficos del desarrollo económico en economías con restricción estructural por el Dr. Anthony Thirlwall."],
      url: "https://res.org.uk/newsletter/obituary-tony-thirlwall/"
    },
    {
      id: "comp-12",
      title: "Inter-American Development Bank",
      titleEs: "Banco Interamericano de Desarrollo (BID)",
      meta: "Issued May 2021",
      metaEs: "Emitido May. 2021",
      details: ["Behavioral Economics for Better Public Policies, Issue 9."],
      detailsEs: ["Economía del Comportamiento para Mejores Políticas Públicas, Edición 9."]
    }
  ] as EducationItem[],

  languages: [
    { name: "Spanish", level: "Native or bilingual proficiency", nameEs: "Español", levelEs: "Competencia nativa o bilingüe" },
    { name: "English", level: "Full professional proficiency", nameEs: "Inglés", levelEs: "Competencia profesional completa" }
  ],

  talks: [
    {
      id: "talk-1",
      title: "Guest Lecture — Entrepreneurship Fundamentals",
      titleEs: "Clase Magistral — Fundamentos del Emprendimiento",
      meta: "National University of Piura · Faculty of Economics · Sept. 29, 2026",
      metaEs: "Universidad Nacional de Piura · Facultad de Economía · 29 Sep. 2026",
      description: "Invited by Moisés Domínguez Morante, Ph.D., to give a guest lecture on entrepreneurship to undergraduate students.",
      descriptionEs: "Invitado por el Dr. Moisés Domínguez Morante para impartir una clase magistral sobre emprendimiento a estudiantes de pregrado.",
      url: "https://drive.google.com/file/d/1iqG5qutOfN3_9ogD79fvOBFgavIRWwZC/view?usp=sharing"
    },
    {
      id: "talk-2",
      title: "Host — Entrepreneurship & Innovation Center Meeting",
      titleEs: "Anfitrión — Encuentro del Centro de Emprendimiento e Innovación",
      meta: "IESE Business School, Entrepreneurship & Innovation Center · Barcelona, Spain · May 6, 2026",
      metaEs: "IESE Business School, Centro de Emprendimiento e Innovación · Barcelona, España · 6 May. 2026",
      description: "Hosted the Entrepreneurship & Innovation Center meeting featuring a guest lecture by Fernando Fernandez, Ph.D., on building living labs ecosystems for innovation.",
      descriptionEs: "Anfitrión del encuentro del Centro de Emprendimiento e Innovación con la ponencia invitada del Dr. Fernando Fernandez sobre ecosistemas de living labs para la innovación.",
      url: "https://www.linkedin.com/posts/davidricardogp_today-i-had-the-opportunity-to-host-the-share-7457823660742074368-0rr1/"
    },
    {
      id: "talk-3",
      title: "Speaker — XIX Investment Forum",
      titleEs: "Ponente — XIX Foro de Inversión",
      meta: "PAD - School of Management · Lima, Peru · Aug. 22, 2025",
      metaEs: "PAD - Escuela de Dirección · Lima, Perú · 22 Ago. 2025",
      description: "Speaker at the XIX Investment Forum, organized by the Business Angels Network at PAD - School of Management and Hub UDEP. I presented on European policymaking for startup ecosystems.",
      descriptionEs: "Ponente en el XIX Foro de Inversión, organizado por la Red de Inversionistas Ángeles de PAD - Escuela de Dirección y Hub UDEP, sobre diseño de políticas europeas para ecosistemas de startups.",
      url: "https://drive.google.com/file/d/12CLcknYh1GFRzonKzdjrqnSI0cFovHrP/view?usp=sharing"
    },
    {
      id: "talk-4",
      title: "Speaker — Building Smarter Startup Ecosystems",
      titleEs: "Ponente — Construyendo Ecosistemas de Startups más Inteligentes",
      meta: "University of Piura, Center for Innovation & Entrepreneurship (Hub UDEP) · Piura, Peru · Aug. 5, 2025",
      metaEs: "Universidad de Piura, Centro de Innovación y Emprendimiento (Hub UDEP) · Piura, Perú · 5 Ago. 2025",
      description: "Invited by Carlos Rodrich Portugal, director of the center, to give a talk on international policy lessons with the challenges faced by entrepreneurial ecosystems in Peru and Latin America.",
      descriptionEs: "Invitado por Carlos Rodrich Portugal, director del centro, para ofrecer una charla sobre lecciones de política internacional y los retos de los ecosistemas emprendedores en Perú y América Latina.",
    }
  ] as TalkItem[],

  affiliations: [
    {
      id: "aff-1",
      title: "WAPOR Latinoamérica",
      titleEs: "WAPOR Latinoamérica",
      meta: "Latin America · 2024 – 2025",
      metaEs: "Latinoamérica · 2024 – 2025",
      details: ["Member of the World Association for Public Opinion Research (WAPOR) Latin America Chapter."],
      detailsEs: ["Miembro del capítulo Latinoamérica de la World Association for Public Opinion Research (WAPOR)."],
      url: "https://waporlatinoamerica.org/"
    },
    {
      id: "aff-2",
      title: "Peruvian Institute of Economics (IPE)",
      titleEs: "Instituto Peruano de Economía (IPE)",
      meta: "Lima, Peru · 2024 – Present",
      metaEs: "Lima, Perú · 2024 – Actualidad",
      details: ["Ambassador and member of the IPE Young Leaders Network."],
      detailsEs: ["Embajador y miembro de la Red de Jóvenes Líderes IPE."],
      url: "https://ipe.org.pe/"
    },
    {
      id: "aff-3",
      title: "Global Leaders Cohort",
      titleEs: "Global Leaders Cohort",
      meta: "Oxford, UK & St. Gallen, Switzerland · 2024 – Present",
      metaEs: "Oxford, Reino Unido y St. Gallen, Suiza · 2024 – Actualidad",
      details: ["Selected for the Global Leaders Cohort by the Social Sciences Division at Oxford University and the University of St. Gallen."],
      detailsEs: ["Seleccionado para el Global Leaders Cohort por la División de Ciencias Sociales de la Universidad de Oxford y la Universidad de St. Gallen."],
      url: "https://www.leadership-challenge.org/past-glc-2024"
    },
    {
      id: "aff-4",
      title: "In Altum",
      titleEs: "In Altum",
      meta: "Washington, D.C., United States · 2023 – Present",
      metaEs: "Washington, D.C., Estados Unidos · 2023 – Actualidad",
      details: ["Fellow and member of the In Altum program alumni community, The Busch School of Business, The Catholic University of America."],
      detailsEs: ["Becario y miembro de la comunidad de graduados del programa In Altum, The Busch School of Business, The Catholic University of America."],
      url: "https://www.inaltumprogram.org/"
    }
  ] as AffiliationItem[],

  awards: [
    {
      id: "aw-1",
      title: "Silver Award - China International College Students’ Innovation Competition 2026 (Spain Division)",
      titleEs: "Premio de Plata - China International College Students’ Innovation Competition 2026 (División España)",
      description: "Organized by Tongji University, Nanjing University of Posts and Telecommunications, Shanghai Normal University and Polytechnic University of Madrid.",
      descriptionEs: "Organizado por Tongji University, Nanjing University of Posts and Telecommunications, Shanghai Normal University y Universidad Politécnica de Madrid.",
      url: "https://drive.google.com/file/d/1I6QwwILjX89qICHph4B0TOW6vkhy13Me/view?usp=sharing"
    },
    {
      id: "aw-2",
      title: "Development Bank of Latin America and the Caribbean (CAF) Scholarship for the Diploma in Governance and Public Innovation 2026",
      titleEs: "Beca CAF - Banco de Desarrollo de América Latina y el Caribe para el Diplomado en Gobernabilidad e Innovación Pública 2026",
      description: "Complutense University of Madrid.",
      descriptionEs: "Universidad Complutense de Madrid."
    },
    {
      id: "aw-3",
      title: "Global Leaders Cohort 2024",
      titleEs: "Global Leaders Cohort 2024",
      description: "Selected among the top 1.82% of candidates by the Social Sciences Division at Oxford University and the University of St. Gallen.",
      descriptionEs: "Seleccionado entre el 1,82% superior de candidatos por la División de Ciencias Sociales de la Universidad de Oxford y la Universidad de St. Gallen.",
      url: "https://www.leadership-challenge.org/past-glc-2024"
    },
    {
      id: "aw-4",
      title: "Selected as an ambassador for the fourth cohort of the IPE Young Leaders Network",
      titleEs: "Seleccionado como embajador de la cuarta edición de la Red de Jóvenes Líderes IPE",
      description: "Peruvian Institute of Economics.",
      descriptionEs: "Instituto Peruano de Economía (IPE).",
      url: "https://ipe.org.pe/presentamos-a-los-embajadores-de-la-red-de-jovenes-lideres-ipe-2024/"
    },
    {
      id: "aw-5",
      title: "Fellowship for the Energy Economics Summer School 2024",
      titleEs: "Beca para la Escuela de Verano de Economía de la Energía 2024",
      description: "Barcelona School of Economics.",
      descriptionEs: "Barcelona School of Economics."
    },
    {
      id: "aw-6",
      title: "Fellowship for the Winter Methods School 2024: Measuring Citizen’s Digital Behaviours",
      titleEs: "Beca para la Escuela de Métodos de Invierno 2024: Medición de Comportamientos Digitales de la Ciudadanía",
      description: "Universitat Pompeu Fabra.",
      descriptionEs: "Universitat Pompeu Fabra."
    },
    {
      id: "aw-7",
      title: "In Altum Scholarship for the Law and Politics Summer School 2023",
      titleEs: "Beca In Altum para la Escuela de Verano de Derecho y Política 2023",
      description: "Organized by The Busch School of Business, The Catholic University of America.",
      descriptionEs: "Organizado por The Busch School of Business, The Catholic University of America.",
      url: "https://drive.google.com/file/d/1Uc3w0yB-_MBynU5pIP_Tdy3nQMgDLV4P/view?usp=sharing"
    },
    {
      id: "aw-8",
      title: "Academic Performance Scholarship in 2023",
      titleEs: "Beca por Rendimiento Académico 2023",
      description: "University of Piura.",
      descriptionEs: "Universidad de Piura."
    },
    {
      id: "aw-9",
      title: "Second Place — University of Piura Ashok Kotwal Best Thesis Award (2024)",
      titleEs: "Segundo Puesto — Premio Ashok Kotwal a la Mejor Tesis de la Universidad de Piura (2024)",
      description: "For the thesis 'A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru.'",
      descriptionEs: "Por la tesis 'A Bartik Approach to Estimating the Price Elasticity of Demand for Gasohol: Evidence from Lima, Peru.' (Enfoque Bartik para estimar la elasticidad precio de la demanda de gasohol: Evidencia en Lima, Perú)."
    },
    {
      id: "aw-10",
      title: "Second Place — CFA Institute Ethics Challenge Peru 2022",
      titleEs: "Segundo Puesto — CFA Institute Ethics Challenge Perú 2022",
      description: "Represented University of Piura for the CFA national competition for a business ethics case under the CFA Institute Code of Ethics and Standards of Professional Conduct.",
      descriptionEs: "Representó a la Universidad de Piura en la competencia nacional de ética empresarial bajo el Código de Ética y Normas de Conducta Profesional de CFA Institute.",
      url: "https://www.udep.edu.pe/hoy/2022/09/alumnos-de-economia-obtienen-el-2do-puesto-en-el-cfa-institute-ethics-challenge/"
    },
    {
      id: "aw-11",
      title: "E-Moot Libre Competencia 2022",
      titleEs: "E-Moot Libre Competencia 2022",
      description: "Semifinalist in the competition law moot organized by University of the Pacific and Bullard Falla Ezcurra+, an experience that helped lead to an internship at Bullard Falla Ezcurra+.",
      descriptionEs: "Semifinalista en el moot de derecho de la competencia organizado por la Universidad del Pacífico y Bullard Falla Ezcurra+."
    },
    {
      id: "aw-12",
      title: "Youth Parliamentarian 2019 representing the region of Piura",
      titleEs: "Parlamentario Joven 2019 en representación de la región Piura",
      description: "Congress of the Republic of Peru.",
      descriptionEs: "Congreso de la República del Perú."
    }
  ] as AwardItem[]
};
