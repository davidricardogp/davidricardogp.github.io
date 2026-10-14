# Exact Louis Y. Zhu Re-Styling for David Ricardo Gonzales Peña's Academic Website

Transform the website into an authentic, faithful replica of **louisyzhu.github.io**'s visual architecture, bone-paper palette, typography, and section structure, populated exclusively with the complete, unedited content from **davidricardogp.github.io** (index, education, experience, publications, and awards) in English, with zero invented content and without any portrait photos.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following non-negotiable user directives govern this plan:
> 1. **Zero Hallucination / Zero Inventions**: Only include authentic information extracted directly from `davidricardogp.github.io`.
> 2. **Zero Deletions**: Preserve 100% of entries across Education (all 3 degrees/exchanges + 12 complementary education programs + languages), Experience (all 5 appointments), Publications (2 policy reports, 1 book, 3 working papers, 2 public essays, 3 talks), and Awards (all 12 recognitions).
> 3. **No Photo**: Completely eliminate any portrait or generated image assets from the page.
> 4. **100% English**: Entire interface, labels, metadata, and descriptions in pure English, matching `louisyzhu.github.io`.
> 5. **Exact Aesthetic Match**: Faithful implementation of Louis Y. Zhu's design tokens: bone paper (`#FAF9F6`), petrol ink (`#1B4B57`), Spectral serif typography for prose, Public Sans for labels, and IBM Plex Mono for metadata.

---

## 1. Overview & Core Concept

- **What It Delivers**: A high-prestige, hand-crafted academic website layout matching `louisyzhu.github.io`, presenting David Ricardo Gonzales Peña's genuine academic career as a Predoctoral Researcher in Entrepreneurship at IESE Business School.
- **Target Audience**: Academic faculty, journal editors, co-authors, seminar organizers, and prospective collaborators in entrepreneurship, institutional economics, and innovation policy.
- **Key Value**: Replaces generic modern UI templates with the restrained, typographic elegance of Louis Zhu's design while preserving every single publication DOI, award, talk, and course from David's original site.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme Tokens
- **Surfaces**:
  - Light mode: Bone paper background (`#FAF9F6`), sunk panels (`#F1EFE9`), raised cards (`#FFFFFF`).
  - Dark mode: Dark slate background (`#16181A`), sunk panels (`#1E2124`), raised cards (`#23272A`).
- **Inks**:
  - Primary text: Deep charcoal ink (`#1B1D1E` light / `#E6E4DF` dark).
  - Secondary text: Muted slate (`#4A4F52` light / `#B2AFa8` dark).
  - Muted captions: Quiet ink (`#6E7478` light / `#8C9092` dark).
- **Signal Color**:
  - Petrol blue (`#1B4B57` light / `#9FC6BB` dark) for semantic focus, active navigation, links, and numbering.
- **Typography**:
  - Prose & Headings: `Spectral` (Google Fonts), Charter, Georgia, serif.
  - UI Labels & Section Kickers: `Public Sans`, system-ui, sans-serif.
  - Numbers, Dates & DOIs: `IBM Plex Mono`, monospace with tabular lining.
  - Base type scale: 18px–19px with 30px vertical grid rhythm (`line-height: 1.65`).

### Section Progression (Louis Zhu Exact Numbering)
```
┌────────────────────────────────────────────────────────────────────────┐
│ TOPBAR: Wordmark (David Ricardo Gonzales Peña) — Nav Links — Theme Sun/Moon │
├────────────────────────────────────────────────────────────────────────┤
│ HERO: Eyebrow (IESE Business School / Entrepreneurship & Innovation)  │
│       <00> Who am I (Bio prose + utility links: CV, IESE, Scholar...) │
├────────────────────────────────────────────────────────────────────────┤
│ <01> Research & Publications                                           │
│      ├── Working Papers (Unpacking Institutions, Fuel Demand, Bartik)  │
│      ├── Research & Policy Reports (Corporate Venturing, Scaleup Fin.) │
│      ├── Books (Dynamic & Stochastic Optimization in Economics)        │
│      └── Public Writing (IESE Blog, Diario El Gobierno)                │
├────────────────────────────────────────────────────────────────────────┤
│ <02> Experience                                                        │
│      ├── IESE Predoctoral Researcher (Snihur, Liechtenstein TA)        │
│      ├── IESE Research Assistant (EIC)                                 │
│      ├── beder (Head of Fundraising — €0.5M public capital)            │
│      ├── Universidad de Piura (Teaching Assistant, Public Finance)     │
│      └── Bullard Falla Ezcurra+ (Economic Consultant Intern)           │
├────────────────────────────────────────────────────────────────────────┤
│ <03> Education                                                         │
│      ├── Formal Degrees: UDEP (B.Sc.), UDP (Exchange), UPF (Exchange)  │
│      ├── Complementary: IESE, CAF, EuroTeQ, Oxford, BSE, UPF Methods... │
│      └── Languages: Spanish (Native), English (Full Professional)      │
├────────────────────────────────────────────────────────────────────────┤
│ <04> Talks & Community                                                 │
│      ├── Host — EIC Meeting (Living Labs w/ Dr. Fernando Fernandez)    │
│      ├── Speaker — XIX Investment Forum (PAD & Hub UDEP)               │
│      └── Speaker — Building Smarter Startup Ecosystems (Hub UDEP)      │
├────────────────────────────────────────────────────────────────────────┤
│ <05> Recognition & Awards                                              │
│      └── All 12 honors (Silver Award, CAF, Oxford GLC, IPE, BSE...)    │
├────────────────────────────────────────────────────────────────────────┤
│ <06> Contact                                                           │
│      └── Office E119, Av. Pearson 21, Barcelona · Tel · Email · Links  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Removal of Portrait Photo**
  - *Chosen Approach*: Pure typographical hero header without photo, respecting the user's explicit request.
  - *Why*: Direct alignment with user instructions ("ni siquiera quiero que pongas esa foto").
- **Decision 2: 100% English Content Delivery**
  - *Chosen Approach*: Render all headings, labels, affiliations, and descriptions in academic English, preserving authentic Spanish titles for papers and institutions only where historically titled (e.g. *Universidad de Piura*, *Diario El Gobierno*, *E-Moot Libre Competencia*).
  - *Why*: Exact fulfillment of user brief ("Quiero que sea en inlges").
- **Decision 3: Complete Data Integrity with Zero Deletions**
  - *Chosen Approach*: Transcribe verbatim all 12 complementary education programs, all 12 awards/scholarships, all 8 publications/reports/books, and all 3 talks with real links, DOIs, and ISBNs.
  - *Why*: Eliminates hallucination risk and satisfies "de mi otra pagina NO ELIMINES NADA".

---

## 4. Technical Architecture & Component Mapping

```
                 App.tsx (Main Shell & Theme State)
                                │
   ┌───────────────┬────────────┴───────────┬───────────────┐
   ▼               ▼                        ▼               ▼
Navbar.tsx   HeroSection.tsx          ContentSection.tsx   ContactSection.tsx
(Top bar)    (00 Who am I)            (01 Research)        (06 Contact)
                                      (02 Experience)
                                      (03 Education)
                                      (04 Talks)
                                      (05 Recognition)
```

### Components & Responsibilities:
1. `src/styles/theme.css` / `src/index.css`:
   - Configures font families: `Spectral` for prose and headings, `Public Sans` for navigation and kickers, `IBM Plex Mono` for code, dates, and DOIs.
   - Defines CSS custom variables for bone paper, sunk surfaces, petrol ink, and hairline rules.
2. `src/data/davidProfileData.ts`:
   - Single source of truth containing 100% of David Ricardo's real data extracted from `davidricardogp.github.io`.
3. `src/components/Topbar.tsx`:
   - Sticky top bar with wordmark, navigation links (`research`, `experience`, `education`, `talks`, `recognition`, `contact`), and light/dark theme toggle.
4. `src/components/Hero.tsx`:
   - Section `00 Who am I`, eyebrow, bio paragraphs, offdesk interest tags, and utility buttons (`CV`, `IESE Profile`, `LinkedIn`, `Google Scholar`, `GitHub`, `ORCID`).
5. `src/components/ResearchSection.tsx`:
   - Section `01 Research`, subsections for `Working Papers`, `Research and Policy Reports`, `Books`, and `Public Writing`.
   - Complete citation blocks with DOI links and optional BibTeX copy.
6. `src/components/ExperienceSection.tsx`:
   - Section `02 Experience`, with clean chronological layout of all 5 positions.
7. `src/components/EducationSection.tsx`:
   - Section `03 Education`, detailing B.Sc. in Economics (UDEP), exchanges (UDP & UPF), all 12 complementary education programs (CAF, Oxford, BSE, CUA, etc.), and language proficiencies.
8. `src/components/TalksSection.tsx`:
   - Section `04 Talks & community`, with all 3 speaking and hosting engagements.
9. `src/components/RecognitionSection.tsx`:
   - Section `05 Recognition`, featuring all 12 academic awards, competition prizes, and fellowships.
10. `src/components/ContactSection.tsx`:
    - Section `06 Contact`, with full office location at IESE South Campus, phone with extension, direct email link, and CV download.

---

## 5. Verification Plan

1. **Compilation Check**: Run `compile_applet` to verify TypeScript, Vite, and CSS compilation.
2. **Lint Validation**: Run `lint_applet` to confirm zero errors or unused symbols.
3. **Content Audit**: Verify that all 12 complementary education programs, all 12 awards, all 5 experience items, and all publications from the live site are present without omissions.
4. **Visual & Theme Verification**: Confirm bone paper (`#FAF9F6`) palette, Spectral serif typography, numbered headers (`00`, `01`, `02`, etc.), responsive layout, and dark mode toggle.
