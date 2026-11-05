# VOCALRISE — MASTER VISUAL IDENTITY & WEBSITE REDESIGN SPECIFICATION

**Document Version:** 1.0.0  
**Date:** November 5, 2026  
**Status:** Complete Visual Redesign Specification (Awaiting User Approval)  
**Target Codebase:** Next.js 14.2.35 App Router, React 18.3.1, Tailwind CSS 3.4.17, TypeScript 5.7.3, Lucide React, Recharts  
**Design Reference:** Atlantic Calm — Human-centred Editorial Health-Tech (combining Vellura editorial structure & human photography with Bloom soft gradients and rounded panels)  

---

## 1. Executive Summary & Audit of the Existing Project

### 1.1 Project Overview & Current State
VocalRise is currently a functional, single-page-tabbed prototype web application built on Next.js 14 App Router. It is designed to support individuals who stammer or navigate articulation and lisping challenges, with optional collaboration with certified Speech-Language Therapists (SLTs/SLPs).

Following a systematic codebase inspection of `/home/harsh/Downloads/Vocal Rise`:
- **Current Runtime & Dependencies:** Node.js v26.13.0, React 18.3.1, Next.js 14.2.35, Tailwind CSS 3.4.17, Lucide React 0.475.0, Recharts 2.15.1, `clsx` 2.1.1, `tailwind-merge` 2.6.0.
- **Current Styling:** Tailwind CSS configured with a generic medical teal (`brand-50` to `brand-950`), cerulean (`cerulean-50` to `cerulean-900`), and sage (`sage-50` to `sage-700`). Default `font-sans` falls back to `system-ui`.
- **Theme Provider:** Custom zero-dependency `ThemeProvider` in `src/components/theme-provider.tsx` with inline anti-FOUC script in `src/app/layout.tsx` storing `'vocalrise_theme'` in `localStorage`.
- **Public Routes:** 7 informational routes (`/`, `/how-it-works`, `/stammering`, `/articulation-and-lisping`, `/about`, `/pricing`, `/resources`) and 2 authentication routes (`/login`, `/signup`).
- **Interactive Portals:** Patient Hub (`/dashboard`) and Therapist Portal (`/therapist`), both functional using mock data in `src/lib/mock-data.ts`.
- **Assets Status:** There is currently **no `public/` directory** in the workspace. All graphics currently rely on Lucide SVG icons and CSS gradient blocks.

### 1.2 Key Deficiencies in the Current Visual Identity
1. **Teal "Medical Template" Feel:** The heavy reliance on `#0D9488` (Teal) and generic CSS gradient backgrounds gives the platform an off-the-shelf health clinic or generic AI SaaS appearance.
2. **Lack of Human Warmth & Photography:** The hero and marketing pages lack authentic, candid lifestyle photography, making the experience feel impersonal and detached.
3. **Typography Disconnect:** The application currently relies on default system sans fonts (`system-ui`), lacking the editorial elegance, warmth, and distinctive brand presence of **Manrope** and **DM Sans**.
4. **Hardcoded Card Radii & Borders:** Inconsistent card radius across pages (`rounded-xl`, `rounded-2xl`, `rounded-3xl`) without a cohesive container hierarchy.
5. **Dashboard Contrast in Dark Mode:** Dark mode currently relies on standard `slate-950` / `slate-900` without the nuanced oceanic depth of the Atlantic Calm palette.

---

## 2. Final Brand Direction: "Atlantic Calm"

### 2.1 Visual Identity Synthesis
- **Identity Name:** **Atlantic Calm — Human-centred Editorial Health-Tech**
- **Inspirational Fusion:**
  - **Vellura Influence (Oripio):** Generous whitespace, editorial typography pairings, humanized non-clinical copy, authentic facial photography, transparent approach breakdowns, and high-trust practitioner presentation.
  - **Bloom Influence (Phenomenon Studio):** Soft outer container frame (`rounded-[28px]` to `rounded-[32px]`), pill badges with circular action icons, subtle atmosphere gradients, gentle metric cards, and calm visual pacing.
  - **VocalRise Originality:** A dedicated speech-practice platform engineered specifically for emotional safety, neurodiversity affirmation, strict clinical separation between stammering and articulation, and zero false cure claims.

### 2.2 Brand Personality & Voice
- **Calm, but not boring:** Expansive whitespace, subtle atmospheric mist, gentle contrast.
- **Professional, but not intimidating:** Clear clinical alignment without cold hospital sterility.
- **Warm, but not childish:** Authentic adult/youth lifestyle imagery; no cartoonish medical mascots.
- **Modern, but not sci-fi:** Purposeful micro-interactions; no floating 3D neon shapes or crypto-style glassmorphism.
- **Supportive, but not patronising:** Respect for individual agency; celebrating participation and comfort over rigid fluency metrics.

### 2.3 Brand Messaging Standards
- **Primary Tagline:** *"Your voice. Your pace. Your journey."*
- **Alternative Headline:** *"Make space for your voice."*
- **Supporting Narrative:** *"VocalRise offers a supportive space to practise communication, explore personal goals, reflect on progress, and connect with speech-language professionals when you choose."*
- **Strict Guardrail:** Stammering is **never** termed "incorrect pronunciation" or a "speech defect." No promises of "cures," "guaranteed fluency," or "perfect speech."

---

## 3. Colour System & Semantic Tokens

### 3.1 Primary Palette: Atlantic Calm

| Color Name | Hex Code | Visual Role & Distribution | Tailwind Token Class |
| :--- | :--- | :--- | :--- |
| **Ocean Blue** | `#315F78` | **Primary Brand Color (20–25%):** Primary CTAs, active tab indicators, major links, key borders | `brand-ocean` / `bg-ocean` |
| **Midnight Slate**| `#243746` | **Headings & Deep Contrast (10–15%):** Page titles, primary text in light mode, footer background | `brand-midnight` / `text-midnight` |
| **Soft Blue** | `#A9C4D1` | **Secondary Accent:** Subtle borders, secondary badges, decorative rings, chart helper lines | `brand-soft` / `bg-soft` |
| **Mist** | `#E7EFF2` | **Soft Surface Background (20–25%):** Secondary panels, pathway cards, table headers | `brand-mist` / `bg-mist` |
| **Porcelain** | `#F7F9F8` | **Main Page Canvas (55–65% with White):** App background, editorial whitespace | `brand-porcelain` / `bg-porcelain` |
| **Muted Terracotta**| `#C9826D` | **Restrained Warm Accent (<5%):** Micro-badges (e.g. "Personal Goal", "Key Insight"), highlights | `brand-terracotta` / `text-terracotta` |
| **Stone** | `#4B555A` | **Body Typography:** High-readability paragraph text, descriptions, captions | `brand-stone` / `text-stone` |
| **Pure White** | `#FFFFFF` | **Elevated Cards:** Content containers, active selection cards, modals | `brand-white` / `bg-white` |

### 3.2 Visual Distribution Ratio
- **55–65%:** Porcelain (`#F7F9F8`) and Pure White (`#FFFFFF`) — breathing room and clinical clarity.
- **20–25%:** Mist (`#E7EFF2`) and Ocean Blue (`#315F78`) — structural framing and focal actions.
- **10–15%:** Midnight Slate (`#243746`) and Stone (`#4B555A`) — high-contrast typography.
- **<5%:** Muted Terracotta (`#C9826D`) and Soft Blue (`#A9C4D1`) — purposeful visual interest.

### 3.3 Semantic State Tokens
- **Success:** Emerald `#2D8A66` (Light) / `#4ADE80` (Dark) — for practice completion and streaks.
- **Warning:** Warm Amber `#D97706` (Light) / `#FBBF24` (Dark) — for pending verification notices.
- **Error / Danger:** Accessible Crimson `#DC2626` (Light) / `#F87171` (Dark) — for audio deletion alerts.
- **Information:** Soft Ocean `#2B6CB0` (Light) / `#60A5FA` (Dark) — for clinician notes.
- *Rule: Status is never communicated by color alone. Every badge pairs a color with an icon and clear text.*

### 3.4 Light & Dark Mode Token Mapping

```css
/* Light Mode (Root) */
:root {
  --bg-canvas: #F7F9F8;             /* Porcelain */
  --bg-surface: #FFFFFF;            /* Pure White */
  --bg-surface-muted: #E7EFF2;      /* Mist */
  --bg-surface-raised: #FFFFFF;     /* White card */
  --text-primary: #243746;          /* Midnight Slate */
  --text-secondary: #4B555A;        /* Stone */
  --text-muted: #6B7C85;            /* Blue-Grey */
  --border-subtle: #D5E1E6;         /* Soft Blue-Grey */
  --border-strong: #A9C4D1;         /* Soft Blue */
  --action-primary: #315F78;        /* Ocean Blue */
  --action-primary-hover: #264A5E;  /* Deep Ocean */
  --action-primary-text: #FFFFFF;
  --accent-warm: #C9826D;           /* Muted Terracotta */
}

/* Dark Mode (.dark) */
.dark {
  --bg-canvas: #111D25;             /* Deep Atlantic Night */
  --bg-surface: #192A35;            /* Main Slate Surface */
  --bg-surface-muted: #15232C;      /* Deep Muted Panel */
  --bg-surface-raised: #203542;     /* Elevated Card Surface */
  --text-primary: #F2F6F7;          /* Crisp Ice White */
  --text-secondary: #BDCBD2;        /* Soft Mist Grey */
  --text-muted: #7E95A0;            /* Muted Atlantic Grey */
  --border-subtle: #304653;         /* Subtle Oceanic Border */
  --border-strong: #456170;         /* Visible Slate Border */
  --action-primary: #83B5CC;        /* Bright Ocean Accent */
  --action-primary-hover: #9EC6D9;  /* Soft Ice Hover */
  --action-primary-text: #111D25;   /* Dark Text on Bright Accent */
  --accent-warm: #D69A84;           /* Warm Terracotta Glow */
}
```

---

## 4. Typography System: Manrope + DM Sans

### 4.1 Font Pairing Rationale
- **Headings & Display: Manrope (Google Fonts)**  
  A modern, geometric sans-serif with open apertures, soft curves, and exceptional readability. It evokes contemporary Scandinavian editorial design (Vellura style) without clinical harshness.
- **Body, UI & Data: DM Sans (Google Fonts)**  
  A low-contrast, highly legible geometric workhorse optimized for digital screens, dashboards, and form interfaces. It delivers supreme legibility even on small mobile screens.

### 4.2 Loading & Optimization Strategy
We use Next.js built-in `next/font/google` in `src/app/layout.tsx`:
```tsx
import { Manrope, DM_Sans } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
```
This zero-external-network approach eliminates third-party font request latency and prevents layout shift (CLS).

### 4.3 Type Hierarchy Scale (Responsive Clamp)

| Level | Desktop Size / Leading | Mobile Size / Leading | Weight | Font Family |
| :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | `clamp(2.75rem, 5vw, 4.25rem)` / `1.1` | `2.25rem` / `1.15` | Bold (700) | Manrope |
| **Section H2** | `clamp(2rem, 3.5vw, 2.75rem)` / `1.2` | `1.75rem` / `1.25` | SemiBold (600) | Manrope |
| **Card H3** | `1.375rem` (22px) / `1.3` | `1.25rem` / `1.3` | SemiBold (600) | Manrope |
| **Subheading** | `1.125rem` (18px) / `1.5` | `1.0rem` / `1.5` | Medium (500) | DM Sans |
| **Body (Default)**| `1.0rem` (16px) / `1.65` | `0.9375rem` / `1.6` | Regular (400) | DM Sans |
| **Body Small** | `0.875rem` (14px) / `1.5` | `0.8125rem` / `1.5` | Regular (400) | DM Sans |
| **Captions / Meta**| `0.75rem` (12px) / `1.4` | `0.75rem` / `1.4` | Medium (500) | DM Sans |

---

## 5. Layout, Spacing & Container Language

### 5.1 The "Bloom Container" Architecture
Following the Bloom reference inspected in `Voiverise_design_inspo.mp4`, sections feature:
- An outer page margin with soft atmospheric background.
- A central primary canvas enclosed in a large rounded container (`rounded-[28px]` to `rounded-[36px]`).
- Clean 1px borders (`border-[#D5E1E6]` in light mode, `border-[#304653]` in dark mode).
- Restrained inner padding (`p-6` on mobile, `p-12` to `p-16` on desktop).

### 5.2 Radius System
- **Micro-Controls (Tags, Small Badges):** `rounded-full` or `rounded-lg` (8px).
- **Interactive Buttons:** Moderately rounded `rounded-xl` (12px) or smooth pills `rounded-full` (for primary showcase buttons).
- **Standard Cards (Exercises, Goals, Recordings):** `rounded-2xl` (16px–18px).
- **Feature Showcase Panels & Modals:** `rounded-3xl` (24px–28px).
- **Hero & Major Section Enclosures:** `rounded-[32px]` (32px).

### 5.3 Elevation & Shadows (Non-Intrusive)
- `shadow-sm`: `0 1px 2px 0 rgba(36, 55, 70, 0.04)` (for input fields and micro cards).
- `shadow-card`: `0 4px 16px -2px rgba(36, 55, 70, 0.06), 0 2px 6px -1px rgba(36, 55, 70, 0.03)` (for elevated cards).
- `shadow-elevated`: `0 16px 36px -4px rgba(36, 55, 70, 0.08), 0 6px 12px -2px rgba(36, 55, 70, 0.04)` (for product previews and dialogs).
- *Dark mode shadows are dialed down, replacing drop shadow with 1px luminous border highlights (`border-[#304653]`).*

---

## 6. Photography, Art Direction & Visual Assets

### 6.1 Photography Principles
- **Hero Photography:** Candid lifestyle photography of people engaged in natural, relaxed communication.
  - Composition: Medium close-up or seated conversation portrait with warm, natural daylight.
  - Authentic expressions: Attentive, thoughtful, relaxed, or smiling naturally.
  - **Strict Ethical Rule:** No images of individuals looking despondent, holding their heads in shame, or appearing broken. No staged corporate stock models in unnatural suits.
- **Hero Background:** Soft blue-to-white gradient (`from-[#E7EFF2]/80 via-[#F7F9F8] to-[#FFFFFF]`) feathering gently around the photography so the subject feels naturally embedded in the page.
- **Therapist Partnership Photography:** A licensed speech professional in a contemporary, warm clinical or telepractice office, listening attentively with genuine clinical empathy.

### 6.2 Asset Architecture & Missing Asset Strategy
Since no `public/` directory currently exists, we will create the directory structure:
```
public/
├── images/
│   ├── hero/
│   │   ├── candid-speaker.webp         # Candid communication lifestyle portrait
│   │   └── hero-gradient-mesh.svg      # Soft atmospheric gradient background
│   ├── pathways/
│   │   ├── stammering-support.webp     # Warm conversational moment (participation)
│   │   └── articulation-support.webp   # Focused speaker / speech-sound practice
│   ├── editorial/
│   │   ├── therapist-collaboration.webp # Professional SLT consultation setting
│   │   └── real-world-carryover.webp    # Everyday speaking context (ordering, meeting)
│   └── placeholders/                   # Accessible, high-fidelity SVG fallback art
```
*Asset Sourcing Rule:* In the prototype phase, we will provide high-quality, royalty-free WebP lifestyle imagery (from Unsplash / Pexels licensed health/communication sets) paired with responsive SVG fallbacks to guarantee 100% offline availability and zero build breaks.

---

## 7. Homepage Redesign: Section-by-Section Specification

The homepage will be structured into 13 distinct editorial sections:

```
[7.1 Announcement Bar]
       ↓
[7.2 Editorial Header & Nav]
       ↓
[7.3 Hero Section: Candid Portrait + Blue-to-White Atmosphere Gradient]
       ↓
[7.4 Trust & Product Principles Row]
       ↓
[7.5 Dual Pathway Selector: Stammering Track vs. Articulation Track]
       ↓
[7.6 How VocalRise Works: 6-Step Visual Journey]
       ↓
[7.7 Live Product Experience Showcase (Real Dashboard Preview)]
       ↓
[7.8 Editorial Feature Breakdown (Alternating Layouts)]
       ↓
[7.9 Clinician Partnership & Asynchronous Review Section]
       ↓
[7.10 Privacy, Voice Ownership & Ethical Safety Panel]
       ↓
[7.11 Patient & Clinician FAQ Accordion]
       ↓
[7.12 Midnight Slate Closing Call-to-Action]
       ↓
[7.13 Master Footer]
```

### Detailed Section Breakdowns

#### 7.1 Announcement Bar
- **Copy:** *"Clinician-aligned practice platform — designed in partnership with certified Speech-Language Therapists."*
- **Action:** Discreet link on right: *"Are you an SLT/SLP? Explore the Clinician Portal →"* (routes to `/therapist`).
- **Style:** Midnight Slate background (`bg-[#243746]`), crisp text (`text-[#E7EFF2]`), 38px height, subtle bottom border.

#### 7.2 Header & Navigation
- **Left:** VocalRise Logo (Stylized soundwave icon inside Ocean Blue squircle + "VocalRise" in Manrope Bold).
- **Center:** Navigation Links (How It Works, Stammering Support, Articulation & Lisping, About Us, Pricing, Resources).
- **Right:** Theme Toggle (`ThemeToggle`), "Log In" link (`/login`), and Primary Button ("Explore Practice" → `/signup`).
- **Behavior:** Sticky navigation with `backdrop-blur-md bg-[#F7F9F8]/85 dark:bg-[#111D25]/85` and subtle 1px border.
- **Mobile:** Accessible slide-over drawer with 44px+ touch targets and dark mode switcher.

#### 7.3 Hero Section
- **Layout:** Asymmetric two-column split with editorial breathing room.
- **Left Column:**
  - Soft Badge: *"Human-Centred Speech Practice"* (Muted Terracotta accent dot).
  - Main Headline (Manrope H1): *"Your voice. Your pace. Your journey."*
  - Supporting Narrative: *"Explore a supportive space for daily communication practice, personal reflection, and optional collaboration with qualified speech-language professionals."*
  - CTA Group:
    - Primary Button: *"Explore VocalRise"* (Ocean Blue background, white text, right chevron, routes to `/signup`).
    - Secondary Button: *"See How It Works"* (Outline with Soft Blue border, routes to `/how-it-works`).
  - Reassurance micro-text: *"✓ No diagnostic pressure  ✓ Private by default  ✓ Built around your goals"*
- **Right Column:**
  - Candid lifestyle photograph of an adult speaking naturally with warmth and confidence.
  - Framed in a gentle `rounded-[32px]` container with soft blue-to-white gradient wash (`from-[#E7EFF2]/90 to-transparent`).
  - Subtle floating preview badge on bottom corner: *"Today's Focus: Gentle Voice Onset"* with a mini 4-bar soundwave.

#### 7.4 Trust Indicators & Core Principles
- **Layout:** Restrained 4-item horizontal grid below the hero.
- **Items:**
  1. *Personal Goals First:* Practice aligned with your life situations, not mechanical perfection.
  2. *Two Distinct Pathways:* Stammering support and articulation difficulties are kept strictly separate.
  3. *Optional SLT Collaboration:* Invite your speech therapist to review recordings when you choose.
  4. *Privacy-Conscious Voice Data:* Recordings remain private by default with one-click deletion.

#### 7.5 Pathway Selection: Stammering Support vs. Articulation Support
- **Visual Presentation:** Two high-contrast, rounded container cards (`rounded-[28px]`) side-by-side.
- **Card A (Stammering Support Track):**
  - Surface: Mist panel (`bg-[#E7EFF2] dark:bg-[#192A35]`) with Ocean Blue accents.
  - Badge: *"Fluency Modification & Confidence"*
  - Heading: *"Stammering Support"*
  - Description: *"Technique-driven practice focused on gentle vocal onsets, continuous voicing, desensitization, and participating freely in everyday conversations."*
  - Key Pillars: *"• Gentle Onsets • Voluntary Stuttering • Avoidance Reduction • Self-Advocacy"*
  - CTA: *"Explore Stammering Track →"* (routes to `/stammering`).
- **Card B (Articulation & Lisping Track):**
  - Surface: Soft porcelain panel with subtle blue-grey border (`border-[#A9C4D1]/40`).
  - Badge: *"Motor Placement & Sound Clarity"*
  - Heading: *"Articulation & Lisping"*
  - Description: *"Structured phonetic placement ladders for frontal/lateral lisps and speech sounds, progressing systematically from isolation to conversation."*
  - Key Pillars: *"• Alveolar Ridge Contact • Central Airflow • Minimal Pairs • Sound Generalization"*
  - CTA: *"Explore Articulation Track →"* (routes to `/articulation-and-lisping`).
- **Clinical Distinction Callout:** A highlighted editorial callout below both cards explicitly reinforcing: *"Stammering is a neuro-motor fluency difference, not an articulation error. VocalRise maintains dedicated, distinct tools for each."*

#### 7.6 How VocalRise Works: 6-Step Visual Journey
- **Headline:** *"A mindful, 6-step path built around your life."*
- **Layout:** 3-column x 2-row card layout with numbered indicators (`01` through `06`).
- **Steps:**
  1. *Choose your communication goals:* Identify situations where you want to communicate with greater ease.
  2. *Explore a relevant practice pathway:* Select between fluency modification or phonetic sound placement.
  3. *Complete guided practice:* Engage with calm micro-drills featuring visual cues and soft pacing.
  4. *Reflect on your experience:* Record personal observations on physical tension and emotional comfort.
  5. *Review your personal progress:* Track participation streaks and self-reported comfort over time.
  6. *Optionally collaborate with a therapist:* Share selected recordings with your speech clinician for asynchronous guidance.

#### 7.7 Live Product Experience Showcase
- **Headline:** *"Real tools designed for daily speaking ease."*
- **Visual Presentation:** Instead of a generic stock mockup, an authentic interactive preview of the actual VocalRise application interface enclosed in a browser bezel with tabs:
  - Tab 1: *Daily Practice Studio* (Waveform visualizer, pacing prompt, recording trigger).
  - Tab 2: *Confidence Journal* (Situational reflection tags, tension scale).
  - Tab 3: *Therapist Review Deck* (Clinician waveform notes and encouragement).

#### 7.8 Editorial Feature Breakdown (Alternating Layouts)
- **Section 1: Guided Practice (Split: Left Text, Right Visual):**
  - Detailed explanation of daily 10-minute micro-drills that fit into busy schedules without causing speech fatigue.
- **Section 2: Personal Reflection & The Journal (Split: Left Visual, Right Text):**
  - Showcasing the psychological power of situational logging: measuring confidence in meetings, phone calls, and social introductions.
- **Section 3: Progress Beyond Numbers (Full Width Banner):**
  - Explaining why VocalRise rejects arbitrary "fluency scores" in favor of genuine participation milestones.

#### 7.9 Clinician Partnership & Asynchronous Review
- **Aesthetic:** Editorial photography of an SLT in consultation + structured clinician card.
- **Core Narrative:** VocalRise acts as a between-session bridge for Speech-Language Therapists. Clinicians can review recordings with client permission, adjust drill prescriptions, and offer guidance between appointments.

#### 7.10 Privacy, Voice Ownership & Ethical Safety
- **Visual Style:** Enclosed secure panel with soft green and blue reassuring accents.
- **Key Commitments:**
  - *Private by Default:* Your recordings are never shared unless you explicitly toggle permission.
  - *Zero Audio in LocalStorage:* Audio is handled in temporary browser memory or secure cloud storage.
  - *One-Click Deletion:* You maintain absolute ownership to erase any recording at any moment.
  - *No Diagnostic AI Claims:* Automated metrics are practice aids, never clinical diagnoses.

#### 7.11 FAQ Accordion
- **Style:** Clean, accessible accordion using `details`/`summary` or keyboard-navigable tabs.
- **Key Questions Answered:**
  1. What is VocalRise?
  2. Is VocalRise a replacement for speech therapy?
  3. Does VocalRise claim to cure stammering?
  4. What is the difference between the Stammering and Articulation pathways?
  5. Do I need a therapist to use VocalRise?
  6. Are my voice recordings automatically shared with anyone?
  7. How is my progress tracked without arbitrary scores?
  8. Is AI used to diagnose speech difficulties?

#### 7.12 Midnight Slate Closing Call-to-Action
- **Surface:** Midnight Slate (`bg-[#243746] dark:bg-[#192A35]`) with soft blue ambient glow.
- **Heading (Manrope):** *"Your communication journey deserves support."*
- **Supporting Text:** *"Explore a practice experience built around your individual pace and personal goals."*
- **CTA:** *"Explore VocalRise"* (White button with Ocean Blue text, large size).

#### 7.13 Master Footer
- **Structure:** 5-column layout (Brand & Mission, Pathways, Clinicians, Resources, Legal & Trust).
- **Trust Badges:** SLT-aligned methodology disclaimer + neurodiversity-affirming pledge.
- **Functional Links:** All links point to real pages (`/stammering`, `/articulation-and-lisping`, `/how-it-works`, `/pricing`, `/about`, `/resources`, `/therapist`, `/login`).

---

## 8. Public Information Pages Redesign Plan

Each public page will be redesigned with unique editorial layouts while sharing Atlantic Calm design tokens:

### 8.1 How It Works (`/how-it-works`)
- **Theme:** The Motor Learning & Communication Participation Science.
- **Layout:** Narrative timeline with 4 interactive technique showcases, evidence citations, and therapist collaboration walk-through.
- **Terminology Fix:** Renaming "Pathway Assessment" to "Communication Preferences and Goals Check-in".

### 8.2 Stammering Support (`/stammering`)
- **Theme:** Fluency Modification, Tension Release & Neurodiversity Acceptance.
- **Layout:** Editorial guide detailing Gentle Vocal Onset, Continuous Phonation, Voluntary Stuttering (Easy Bouncing), Pull-Outs, and Speech Avoidance Reduction.
- **Visual Cues:** Diagrammatic acoustic waveforms and breathing coordination callouts.

### 8.3 Articulation & Lisping Support (`/articulation-and-lisping`)
- **Theme:** Phonetic Motor Placement & Sound Carryover.
- **Layout:** Visual placement hierarchy cards for Frontal/Interdental Lisps, Lateral Lisp Airflow Channeling, Rhotic /r/ Precision, and Minimal Pairs Auditory Discrimination.

### 8.4 About Us (`/about`)
- **Theme:** Clinical Advisory Principles & Lived Experience.
- **Layout:** Co-founder story (lived experience with stammering), clinical advisory board introduction, and 4 non-negotiable ethical pillars.

### 8.5 Pricing (`/pricing`)
- **Theme:** Transparent, Anxiety-Free Investment in Communication.
- **Layout:** 3 clear tiers (Self-Guided Practice, Clinician-Linked Practice, Clinic Caseload Suite) with Monthly/Annual toggle, feature matrices, and transparent cancellation policy.

### 8.6 Resources (`/resources`)
- **Theme:** Evidence-Based Clinical Articles & Self-Help Guides.
- **Layout:** Filterable article library (Fluency Science, Motor Speech, Speech Psychology, Everyday Confidence) with estimated read times and author credentials.

---

## 9. Patient Application Redesign Plan

### 9.1 Overall Patient Experience Principles
- **No Marketing Fluff:** Clean, calm, task-oriented workspace.
- **Zero Pressure Timers:** Timers are gentle stopwatches, never countdowns or buzzers.
- **No Shaming:** Practice streaks encourage consistency, but missing a day displays gentle reassurance (*"Take your time. We're here whenever you're ready"*).
- **Persistent Sidebar:** Collapsible sidebar on desktop with accessible bottom navigation bar on mobile.

### 9.2 Dashboard Components Redesign

| Existing Component | Current Look (Teal) | Redesigned Look (Atlantic Calm) |
| :--- | :--- | :--- |
| `WelcomeSection.tsx` | Green gradient card with streak badge | Porcelain card with soft Midnight Slate heading, gentle progress ring, and clear **Pathway Switcher** pill tabs. |
| `TodayPracticeCard.tsx` | Teal button with standard icon | Raised white card with Ocean Blue action trigger, estimated minutes badge, and technique focus summary. |
| `GoalsList.tsx` | Standard checklist | Tagged situational goals (e.g., *[Work]* *[Phone]* *[Social]*) with discrete status indicators. |
| `ProgressOverviewChart.tsx` | Teal Recharts line graph | Atlantic Calm customized Recharts (Ocean Blue adherence line, Soft Blue confidence bars, accessible tooltip). |
| `RecommendedExercises.tsx` | Generic card list | Filterable technique cards with difficulty pills, duration, and direct launch into Guided Practice. |
| `RecentRecordings.tsx` | Dark audio player bar | Subtle waveform bars, explicit therapist sharing toggle, and instant one-click delete button. |
| `ConfidenceJournal.tsx` | Form modal + basic cards | Private reflection feed with situation tags, tension scale (1–5), and positive milestone notes. |
| `AudioRecorderModal.tsx` | Centered modal with simulated timer | Studio modal with clear microphone consent prompt, live animated waveform, and in-memory `Blob` playback. |

### 9.3 Onboarding: "Communication Preferences and Goals Check-in"
- Non-diagnostic 3-step intake:
  - Step 1: Comfort & Situations (Daily speaking feelings, priority speaking contexts, "Prefer not to say").
  - Step 2: Pathway Selection (Clear distinctions between Stammering Support and Articulation Support).
  - Step 3: Initial Goal Setting (Personal participation target with encouraging preset prompts).

---

## 10. Therapist Application Redesign Plan

### 10.1 Structured Clinician Portal (`/therapist`)
- **Header:** Clinician credentials, clinic name (*Harbor Fluency Center*), and prominent **`[Prototype Mode: Demo Account]`** status badge.
- **Caseload Table (`PatientOverviewTable.tsx`):** Clean, high-density data table displaying active clients, pathway tracks, adherence rates, and unreviewed recordings.
- **Audio Review Deck (`RecordingReviewArea.tsx`):** Waveform playback with speed control (0.75x, 1x, 1.25x), client tension self-report, and timestamped clinician commentary input.
- **Prescription Manager (`AssignedExercisesManager.tsx`):** Drill regimen builder allowing SLTs to adjust target repetitions and attach clinical tips.
- **Caseload Metrics (`TherapistMetricsChart.tsx`):** Accessible Recharts adherence graph styled with Atlantic Calm tokens.

---

## 11. Motion, Animation & Interaction System

### 11.1 Proposed Package: `motion` (Motion for React)
- **Why Needed:** Smooth section reveals, gentle modal transitions, and accordion collapses without bulky legacy dependencies.
- **Import convention:** `import { motion, AnimatePresence } from "motion/react";`
- **Subtlety Guidelines:**
  - Standard duration: `0.2s` to `0.35s`.
  - Standard easing: `[0.16, 1, 0.3, 1]` (custom ease-out).
  - No bouncy or jarring movements.
  - Less motion in the patient practice studio than on marketing pages.
- **Accessibility:** Full `@media (prefers-reduced-motion: reduce)` support. When reduced motion is enabled, all animations degrade instantly to simple opacity changes or are bypassed completely.

---

## 12. Component Reuse & New Component Architecture

### 12.1 Existing Components to Reuse & Restyle
- `src/components/theme-provider.tsx` — Retained and enhanced with Atlantic Calm tokens.
- `src/components/ui/button.tsx` — Restyled with Ocean Blue, Mist, and subtle borders.
- `src/components/ui/card.tsx` — Restyled with Atlantic Calm radius (`rounded-2xl`) and shadow tokens.
- `src/components/ui/badge.tsx` — Restyled with Ocean Blue, Soft Blue, Mist, and Muted Terracotta variants.
- `src/components/ui/modal.tsx` — Restyled with rounded-3xl container, backdrop blur, and focus trap.
- `src/components/ui/progress.tsx` — Restyled with gentle Ocean Blue fill.
- `src/lib/mock-data.ts` — Retained with realistic clinical datasets.

### 12.2 Proposed New Reusable Components
1. `src/components/ui/announcement-bar.tsx` — Sticky clinician notice bar.
2. `src/components/ui/pathway-card.tsx` — Reusable dual-pathway comparison card.
3. `src/components/ui/product-preview.tsx` — Interactive showcase bezel for dashboard previews.
4. `src/components/ui/trust-indicator.tsx` — Horizontal product principles badge.
5. `src/components/ui/faq-accordion.tsx` — Accessible question & answer accordion.
6. `src/components/ui/section-heading.tsx` — Standardized editorial heading with badge and subtitle.

---

## 13. Accessibility (WCAG 2.2 AA) & Responsive Matrix

### 13.1 Contrast & Readability Verification
- Primary Text `#243746` on Porcelain `#F7F9F8`: **10.6:1** (Exceeds WCAG AAA).
- Ocean Blue `#315F78` on Pure White `#FFFFFF`: **6.2:1** (Exceeds WCAG AA).
- Stone Body `#4B555A` on Porcelain `#F7F9F8`: **7.1:1** (Exceeds WCAG AAA).
- Dark Mode Primary Text `#F2F6F7` on Slate `#111D25`: **14.2:1** (Exceeds WCAG AAA).
- Dark Mode Brand Accent `#83B5CC` on Slate `#111D25`: **7.8:1** (Exceeds WCAG AA).

### 13.2 Sensory Safety Standards
- No high-pressure countdown timers.
- No buzzer or alarm sounds.
- Clear keyboard navigation with `focus-visible:ring-2 focus-visible:ring-ocean`.
- Screen-reader text alternatives for all Recharts progress graphs.

### 13.3 Responsive Breakpoints
- **Small Mobile (320px–375px):** Single-column layout, compact badges, collapsible navigation drawer.
- **Standard Mobile (390px–430px):** Full-bleed cards with 16px padding, touch targets ≥ 44px.
- **Tablet (768px–1024px):** 2-column grids for pathways and features, adapted dashboard cards.
- **Desktop (1024px–1440px+):** Full editorial multi-column layouts, sticky persistent sidebars, maximum content width `max-w-7xl` (1280px).

---

## 14. India-Relevant Product & Regulatory Context

- **Multilingual Architecture:** Codebase prepared with localized text object structures to support future Hindi and regional Indian languages.
- **Professional Registration:** Future clinician verification flows will account for the Rehabilitation Council of India (RCI) registration numbers for qualified Indian SLTs and Audiologists.
- **Privacy & Minors:** Architected to support future compliance with the Digital Personal Data Protection (DPDP) Act, including guardian consent workflows for young speakers.

---

## 15. Risk Assessment & Preservation Checklist

| Potential Risk | Severity | Mitigation Strategy |
| :--- | :---: | :--- |
| **Breaking Theme Persistence:** Updating theme colors could cause dark-mode flashing. | Low | Preserve the exact `ThemeProvider` and anti-FOUC script in `layout.tsx`; simply update CSS variables. |
| **Overwriting Mock Data:** Modifying component props might break existing dashboard simulations. | Medium | Retain existing TypeScript types in `src/types/` and mock datasets in `src/lib/mock-data.ts`. |
| **Font Request Bottlenecks:** External font links could fail offline. | Low | Use `next/font/google` with local build bundling; provide fallback fonts in Tailwind config. |
| **Layout Shift (CLS):** Introducing lifestyle imagery could cause visual jumps. | Low | Use Next.js `<Image>` with explicit `width`, `height`, and `placeholder="blur"` where applicable. |
| **Accidental Loss of Routes:** Redesigning pages might miss existing sub-sections. | High | Audit checklist verifies all 11 existing routes build cleanly with exit code 0. |

---

## 16. Acceptance Criteria

The visual redesign will be judged complete when:
1. The **Atlantic Calm** palette (Ocean Blue, Midnight Slate, Porcelain, Mist) completely replaces the old teal identity.
2. **Manrope** (headings) and **DM Sans** (body) are active and rendered cleanly.
3. The Homepage features **candid lifestyle photography** and a soft **blue-to-white atmosphere gradient**.
4. Both **Stammering** and **Articulation** pathways are distinctly and respectfully presented.
5. The **Product Showcase** displays the real application interface.
6. The Patient Dashboard and Therapist Portal remain 100% functional with improved visual polish.
7. Both Light and Dark modes render with zero flicker and WCAG 2.2 AA contrast.
8. `npm run build` succeeds with zero errors across all 11 routes.

---

*This specification is now submitted for user review and approval prior to creating the detailed implementation plan.*

