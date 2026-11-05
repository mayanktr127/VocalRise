# VocalRise — Health-Tech Speech & Fluency SaaS

**VocalRise** is a modern, responsive web application designed to help people who stammer or navigate articulation and lisping challenges practise communication techniques, achieve personal goals, and collaborate asynchronously with qualified speech-language therapists.

---

## 🚀 Quick Start Guide

The project is pre-configured and the development server is running.

```bash
# 1. Install dependencies (already completed)
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
# Visit http://localhost:3000
```

To run a production build:
```bash
npm run build
npm run start
```

---

## 🌐 Available Routes & Experiences

### Public Experience
- **`/` (Home):** Value proposition, dual pathway distinctions, clinical methodology, trust badges.
- **`/how-it-works`:** The 4-step asynchronous practice model and motor learning evidence.
- **`/stammering`:** Fluency shaping, gentle vocal onset, continuous phonation, and voluntary stuttering desensitization.
- **`/articulation-and-lisping`:** Frontal/lateral lisp correction, alveolar ridge contact, and minimal pair contrast ladders.
- **`/about`:** Founding mission, clinical advisory principles, and neurodiversity ethos.
- **`/pricing`:** Self-guided, clinician-linked, and clinic caseload subscription tiers.
- **`/resources`:** Evidence-based clinical articles and guides for patients and therapists.
- **`/login`:** Role-based sign-in with instant demo access for Patients and Clinicians.
- **`/signup`:** Onboarding flow with immediate pathway intake.

### Interactive Portals
- **`/dashboard` (Patient Practice Hub):**
  - **Welcome Section:** Personalized greeting, streak tracker, readiness indicator, and interactive **Pathway Switcher** (toggle between Stammering & Articulation in real time).
  - **Today's Practice:** Recommended micro-routine with progress bar.
  - **Practice Studio Audio Recorder Modal:** Interactive recording simulator with live timer, animated voice waveforms, prompt carousel, and self-observation notes.
  - **Progress Overview:** Recharts visualization tracking weekly minutes and self-reported communication confidence.
  - **Personal Goals:** Desensitization and situational targets with progress meters.
  - **Recent Recordings:** Simulated audio player with waveform bars and Speech-Language Therapist review feedback notes.
  - **Recommended Exercises:** Curated techniques with difficulty tags and time estimates.
  - **Confidence Journal:** Everyday communication log with emotion tags ("Triumph", "Learning Moment") and "Log Moment" modal.
- **`/therapist` (Therapist Caseload Portal):**
  - **Patient Overview:** Active caseload table with pathway badges, adherence rates, and review notifications.
  - **Audio Recording Review Area:** Waveform inspection, patient notes, and clinician commentary composer.
  - **Assigned Exercises Manager:** Prescribed module regimen builder.
  - **Patient Activity Feed:** Real-time stream of practice submissions.
  - **Caseload Adherence Metrics:** Recharts chart measuring patient adherence against the clinic target.

---

## 🎨 Clinical Nuance & Ethical Safeguards

1. **Strict Pathway Separation:** Stammering is treated as a neuro-developmental fluency difference (timing, laryngeal tension, secondary struggle) — **never** mislabeled as poor pronunciation. Articulation focuses on motor placement, central airflow channels, and phonetic acoustic contrast.
2. **No "Cure" Claims:** The product champions communicative freedom, ease, self-advocacy, and technique mastery without toxic cure narratives.
3. **Clinical Complementarity:** VocalRise is built to bridge the gap between weekly visits with licensed Speech-Language Therapists / Pathologists.

---

## 🛠️ Next Development Phases

1. **Authentication & Database (Supabase):**
   - Supabase Auth (Email + OAuth) with Row Level Security (RLS) separating patient data and clinician access.
   - Database tables for `profiles`, `pathways`, `recordings`, `exercises`, `assigned_modules`, and `journal_entries`.
2. **Real Audio Storage & Processing:**
   - Supabase Storage buckets for recorded WAV/WebM audio blobs.
   - Web Audio API integration for genuine microphone capture.
3. **Python / FastAPI Speech Processing Backend:**
   - Acoustic phonation analysis (measuring gentle voice onset curve and pitch stability).
   - Non-judgmental acoustic biofeedback on central vs lateral sibilant air dispersion.

