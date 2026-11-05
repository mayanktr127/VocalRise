# VocalRise — Health-Tech Speech & Fluency SaaS

**VocalRise** is an editorial, human-centred health-tech web application designed to help people who stammer or navigate articulation and lisping challenges practise speech techniques with emotional ease, pursue personal goals, and collaborate asynchronously with qualified speech-language therapists.

Styled under the **Atlantic Calm** design system, VocalRise combines tranquil oceanic tones, warm porcellanic surfaces, and neurodiversity-affirming language to eliminate performance anxiety from speech practice.

---

## 🎨 Visual Identity & Design System: Atlantic Calm

- **Brand Aesthetic:** Human-Centred Editorial Health-Tech.
- **Typography Pairing:**
  - **Headings:** `Manrope` (modern geometric grotesque with open apertures and warmth).
  - **Body & UI:** `DM Sans` (engineered for effortless reading and clear data hierarchy).
- **Primary Color Palette:**
  - Ocean Blue (`#315F78` / `#83B5CC` dark) — Core interactive actions and active navigation.
  - Midnight Slate (`#243746` / `#F2F6F7` dark) — High-contrast typography and deep structural anchors.
  - Porcelain (`#F7F9F8` / `#14222B` dark) & Mist (`#E7EFF2` / `#1E313E` dark) — Soft, calming canvas surfaces.
  - Sage Green (`#4D8B6F`) — Gentle positive reinforcement and completion indicators.
  - Terracotta (`#B85C4B`) — Warm warning cues and active recording state.

---

## ♿ Accessibility & Sensory Safety (WCAG 2.2 AA Verified)

- **Contrast Ratios:** Exceeds WCAG 2.2 AA across both light and dark modes:
  - Primary text on Porcelain: **10.6:1** (AAA)
  - Primary text on White: **11.4:1** (AAA)
  - Dark mode text on Deep Slate: **14.2:1** (AAA)
  - Dark mode text on Surface: **11.8:1** (AAA)
  - Interactive focus rings: **6.2:1** (Light) / **7.8:1** (Dark) (Exceeds 3.0:1 UI requirement).
- **Keyboard Navigation:** Full tab order, visible focus rings, dialog focus trapping, and `Escape` key dismissal.
- **Sensory Safety:** Zero anxiety-inducing countdown buzzers, flashing bars, or high-pressure timers.
- **Universal Reduced-Motion:** `@media (prefers-reduced-motion: reduce)` collapses transitions and animations to instantaneous state changes.
- **Audit Report:** Comprehensive details available in [`docs/superpowers/reports/2026-11-05-vocalrise-redesign-and-accessibility-audit.md`](docs/superpowers/reports/2026-11-05-vocalrise-redesign-and-accessibility-audit.md).

---

## 🔒 Privacy & Prototype Boundaries

1. **In-Memory Audio Processing:**
   - Audio recorded via `MediaRecorder` is held strictly in volatile browser RAM (`Blob` chunks).
   - Temporary `blob:` URLs are created for playback and immediately revoked upon modal dismissal or deletion via `URL.revokeObjectURL()`.
   - **Zero** audio blobs, base64 strings, or clinical notes are stored in `localStorage` or `sessionStorage`. Browser storage is strictly restricted to `vocalrise_theme`.
2. **Fictional Simulation Data:**
   - Demo credentials (`demo.speaker@example.com` and `demo.therapist@example.com`) and clinician records are clearly labeled as prototype demonstrations.
3. **No Unsubstantiated Clinical Claims:**
   - VocalRise does not claim clinical trials, automated diagnosis, or formal medical endorsements. It is designed to complement—not replace—licensed speech therapy.

---

## 🚀 Quick Start Guide

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
# Visit http://localhost:3000
```

To run a production build and start the production server:
```bash
npm run build
npm run start
```

---

## 🌐 Available Routes & Experiences

### Public Marketing & Education
- **`/` (Home):** Editorial hero, dual pathway differentiation, clinical methodology, illustrative product preview, and FAQ.
- **`/how-it-works`:** The 4-step asynchronous practice model and motor learning evidence.
- **`/stammering`:** Fluency shaping, gentle vocal onset, continuous phonation, and voluntary stuttering desensitization.
- **`/articulation-and-lisping`:** Frontal/lateral lisp correction, alveolar ridge contact, and minimal pair contrast ladders.
- **`/about`:** Founding mission, clinical advisory principles, and neurodiversity ethos.
- **`/pricing`:** Self-guided, clinician-linked, and clinic caseload subscription tiers.
- **`/resources`:** Evidence-informed articles and supportive guides for speakers and therapists.
- **`/login`:** Role-based sign-in with instant demo access for Patients and Clinicians.
- **`/signup`:** Onboarding flow with immediate pathway intake simulation.
- **`/_not-found`:** Custom calming 404 detour screen with recovery actions.

### Interactive Portals
- **`/dashboard` (Patient Practice Hub):**
  - **Welcome Section:** Personalized greeting, streak tracker, readiness indicator, and interactive **Pathway Switcher** (toggle between Stammering & Articulation in real time).
  - **Today's Practice:** Recommended micro-routine with progress bar.
  - **Practice Studio Audio Recorder Modal:** Real browser `MediaRecorder` audio capture held exclusively in volatile RAM. Includes live timer, animated waveform, prompt carousel, self-observation note field, and instant one-click deletion.
  - **Progress Overview:** Recharts visualization tracking weekly practice and self-reported communication confidence.
  - **Personal Goals:** Desensitization and situational targets with progress meters.
  - **Recent Recordings:** Simulated audio player with waveform bars and Speech-Language Therapist review feedback notes.
  - **Recommended Exercises:** Curated techniques with difficulty tags and time estimates.
  - **Confidence Journal:** Everyday communication log with emotion tags ("Triumph", "Learning Moment") and "Log Moment" modal.
- **`/therapist` (Therapist Caseload Portal):**
  - **Prototype Mode Notice:** Clear demo account disclaimers and clinician credentialing requirements.
  - **Patient Overview:** Active caseload table with pathway badges, adherence rates, and review notifications.
  - **Audio Recording Review Area:** Waveform inspection, patient notes, speed toggle (0.75x, 1x, 1.25x), and clinician commentary composer.
  - **Assigned Exercises Manager:** Prescribed module regimen builder.
  - **Patient Activity Feed:** Real-time stream of practice submissions.
  - **Caseload Adherence Metrics:** Recharts chart measuring patient adherence against the clinic target.

---

## 🛠️ Future Production Roadmap

1. **Authentication & HIPAA/GDPR Compliant Data Layer:**
   - Supabase Auth with Row Level Security (RLS) separating patient records and clinician access.
   - Professional registry verification for licensed SLT accounts.
2. **Encrypted Audio Cloud Storage:**
   - Client-consented storage buckets with automated retention schedules and instant deletion controls.
3. **Acoustic Digital Signal Processing (DSP):**
   - Non-judgmental acoustic biofeedback on vocal onset slopes and central/lateral airflow dispersion.
4. **Synchronous Telehealth:**
   - Encrypted WebRTC audio/video consultations between patients and speech-language therapists.
