import { Exercise, RecordingItem, JournalEntry, PersonalGoal } from "@/types/practice";
import { UserProfile } from "@/types/user";
import { PatientSummary } from "@/types/therapist";

export const MOCK_USER: UserProfile = {
  id: "usr_01",
  name: "Julian Mercer",
  email: "julian.mercer@example.com",
  role: "patient",
  pathway: "stammering",
  streakDays: 9,
  totalPracticeMinutes: 340,
  assignedTherapist: {
    name: "Dr. Sarah Chen, SLT, CCC-SLP",
    title: "Senior Speech & Language Therapist",
    clinicName: "Harbor Communication & Fluency Center",
  },
  todayPracticeGoalMinutes: 15,
  todayPracticeCompletedMinutes: 10,
};

export const MOCK_EXERCISES: Exercise[] = [
  // Stammering Pathway Exercises
  {
    id: "ex_stam_01",
    title: "Gentle Vocal Onset & Easy Vowel Initiation",
    description: "Ease into voicing with relaxed vocal cords to reduce laryngeal tension and prevent hard glottal blocks on vowel-initial words.",
    pathway: "stammering",
    targetFocus: "Gentle Onset Technique",
    difficulty: "Gentle",
    estimatedMinutes: 5,
    category: "Warm-up",
    completedToday: true,
    instructions: [
      "Inhale comfortably using diaphragmatic breathing.",
      "Release a soft sigh of breath (like an unvoiced 'h') before transitioning gently into the vowel.",
      "Notice the absence of physical tightness in the throat.",
      "Practise across the target vowel list with smooth, continuous airflow."
    ],
    samplePrompts: [
      "Hhhh... Apple",
      "Hhhh... Open",
      "Hhhh... Early",
      "Hhhh... Evening",
      "Hhhh... Always"
    ],
    clinicalRationale: "Reduces abrupt vocal fold adduction which frequently triggers physical speech blocks at word initiation."
  },
  {
    id: "ex_stam_02",
    title: "Continuous Phonation in Phrase Blending",
    description: "Keep the vocal motor running smoothly across syllable and word boundaries rather than stopping and starting voicing abruptly.",
    pathway: "stammering",
    targetFocus: "Continuous Voicing",
    difficulty: "Moderate",
    estimatedMinutes: 7,
    category: "Technique Drill",
    completedToday: false,
    instructions: [
      "Imagine speaking as one legato, unbroken melody.",
      "Connect the final consonant of one word directly into the first sound of the next word.",
      "Keep volume moderate and jaw relaxed.",
      "Record yourself reading each 3-to-4 word phrase."
    ],
    samplePrompts: [
      "In the morning light",
      "All around our town",
      "Over and above the hills",
      "Every sunny afternoon"
    ],
    clinicalRationale: "Maintains aerodynamic stability through the vocal tract, minimizing stuttering moments at articulatory transitions."
  },
  {
    id: "ex_stam_03",
    title: "Voluntary Stuttering (Easy Repetitions) Desensitization",
    description: "Purposely introduce light, controlled, effortless repetitions into low-stakes sentences to dismantle speech fear and tension.",
    pathway: "stammering",
    targetFocus: "Desensitization & Control",
    difficulty: "Challenging",
    estimatedMinutes: 6,
    category: "Desensitization",
    completedToday: false,
    instructions: [
      "Select a word in the sentence.",
      "Deliberately bounce on the initial syllable 2 times with zero physical struggle (e.g. 'c-c-coffee').",
      "Observe your emotional state: feel the freedom of stuttering openly without tension.",
      "Finish the sentence with normal, steady cadence."
    ],
    samplePrompts: [
      "I would like a c-c-coffee please.",
      "My name is J-J-Julian.",
      "We are meeting at t-t-two o'clock.",
      "Could you show me the w-w-way?"
    ],
    clinicalRationale: "Weakens the fear-avoidance loop, proven by stuttering modification literature (Van Riper) to reduce physical struggle."
  },

  // Articulation & Lisping Pathway Exercises
  {
    id: "ex_art_01",
    title: "Interdental Lisp: Central Alveolar /s/ Placement",
    description: "Train the tongue tip to anchor securely behind the upper alveolar ridge rather than protruding between the front teeth.",
    pathway: "articulation",
    targetFocus: "Phonetic Placement (/s/ and /z/)",
    difficulty: "Gentle",
    estimatedMinutes: 5,
    category: "Warm-up",
    completedToday: false,
    instructions: [
      "Smile gently with lips pulled back slightly.",
      "Place tongue tip lightly behind your upper front teeth on the bumpy gum ridge (alveolar ridge).",
      "Blow a narrow, cool stream of air right down the center of your tongue.",
      "Ensure teeth are lightly closed but not clenched; keep tongue behind teeth."
    ],
    samplePrompts: [
      "ssss... ssss... ssss...",
      "See, Say, So, Sun, Sit",
      "Pass, Glass, Yes, Miss, Bus"
    ],
    clinicalRationale: "Eliminates frontal tongue protrusion (lisping) by establishing correct tactile feedback on the alveolar arch."
  },
  {
    id: "ex_art_02",
    title: "Minimal Pairs: /s/ vs /θ/ ('think' vs 'sink')",
    description: "Sharpen auditory discrimination and motor precision between dental 'th' and alveolar 's' sounds.",
    pathway: "articulation",
    targetFocus: "Auditory & Motor Contrast",
    difficulty: "Moderate",
    estimatedMinutes: 6,
    category: "Technique Drill",
    completedToday: false,
    instructions: [
      "Listen and compare the two contrasting words.",
      "For the /th/ word, allow the tongue tip to show gently between teeth.",
      "For the /s/ word, pull the tongue tip back behind the teeth and channel the air down the center.",
      "Alternate words deliberately in pairs."
    ],
    samplePrompts: [
      "Sink vs Think",
      "Sore vs Thor",
      "Pass vs Path",
      "Sick vs Thick",
      "Mouse vs Mouth"
    ],
    clinicalRationale: "Forces cognitive and motor differentiation between interdental friction and alveolar friction."
  },
  {
    id: "ex_art_03",
    title: "Lateral Lisp: Butterfly Technique for Lateral Seal",
    description: "Address slushy lateral airflow by elevating the lateral margins of the tongue against upper molars to force air down the center.",
    pathway: "articulation",
    targetFocus: "Lateral Airflow Correction",
    difficulty: "Challenging",
    estimatedMinutes: 8,
    category: "Technique Drill",
    completedToday: false,
    instructions: [
      "Anchor the sides of your tongue against your upper molars like butterfly wings.",
      "Leave a small trough open right in the center of the tongue.",
      "Direct your airflow straight forward over the tip, avoiding lateral air escaping past the cheeks.",
      "Hold a straw in front of your central incisors to feel the focused airstream."
    ],
    samplePrompts: [
      "T-S... T-S... T-S...",
      "Stay, Stop, Star, Step, Steam",
      "The sun sits softly in the sky."
    ],
    clinicalRationale: "Establishes bilateral tongue rim elevation, preventing air diversion into buccal sulci responsible for lateral lisp acoustics."
  }
];

export const MOCK_RECORDINGS: RecordingItem[] = [
  {
    id: "rec_01",
    title: "Morning Routine: Gentle Onset Drill",
    date: "2026-11-04T08:30:00Z",
    durationSeconds: 94,
    pathway: "stammering",
    exerciseTitle: "Gentle Vocal Onset & Easy Vowel Initiation",
    notes: "Felt very relaxed on 'apple' and 'early'. Felt a slight block coming on 'open', but paused, released breath, and slid through easily.",
    therapistStatus: "Reviewed by SLT",
    therapistComment: "Excellent self-correction Julian! Notice how releasing breath before 'open' dissolved the tension before it formed. Keep up this exact pacing.",
    therapistName: "Dr. Sarah Chen",
    confidenceRating: 4,
    waveformSim: [15, 30, 45, 60, 40, 20, 50, 75, 80, 60, 35, 20, 45, 70, 65, 30, 25, 60, 85, 45, 20]
  },
  {
    id: "rec_02",
    title: "Simulated Phone Call: Customer Service",
    date: "2026-11-03T17:15:00Z",
    durationSeconds: 142,
    pathway: "stammering",
    exerciseTitle: "Continuous Phonation in Phrase Blending",
    notes: "Practised saying my account number and address. Applied voluntary bounces on 'four'. Felt liberating.",
    therapistStatus: "Reviewed by SLT",
    therapistComment: "Huge milestone! Your voluntary bounces were crisp and light without any eye closure or secondary struggle. Proud of your desensitization progress.",
    therapistName: "Dr. Sarah Chen",
    confidenceRating: 5,
    waveformSim: [20, 40, 60, 80, 70, 55, 30, 40, 65, 90, 85, 45, 20, 35, 55, 75, 50, 30, 45, 60, 35]
  },
  {
    id: "rec_03",
    title: "Afternoon Passage: Narrative Reading",
    date: "2026-11-02T14:00:00Z",
    durationSeconds: 110,
    pathway: "stammering",
    exerciseTitle: "Continuous Voicing & Natural Pausing",
    notes: "Focused on pausing at commas rather than when feeling out of breath.",
    therapistStatus: "Pending Review",
    confidenceRating: 3,
    waveformSim: [30, 50, 40, 65, 70, 55, 25, 35, 60, 80, 75, 40, 30, 50, 65, 70, 40, 25, 35, 50, 30]
  }
];

export const MOCK_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "jrn_01",
    date: "2026-11-04",
    situation: "Weekly project sync call with 8 team members",
    pathway: "stammering",
    techniqueUsed: "Gentle onset on my introduction + deliberate pause before status update",
    confidenceScore: 8,
    anxietyBeforeScore: 6,
    reflectionNotes: "In the past, I would avoid speaking or write my update in chat. Today I unmuted immediately. Had one small prolongation on 'quarterly', held eye contact with my screen, and smoothly pushed through.",
    tag: "Triumph"
  },
  {
    id: "jrn_02",
    date: "2026-11-03",
    situation: "Ordering lunch at local bakery during rush hour",
    pathway: "stammering",
    techniqueUsed: "Voluntary bounce on 'c-c-croissant'",
    confidenceScore: 9,
    anxietyBeforeScore: 4,
    reflectionNotes: "The cashier was patient. Doing voluntary stuttering intentionally made me realize no one actually reacts with judgment. The panic vanished.",
    tag: "Triumph"
  },
  {
    id: "jrn_03",
    date: "2026-11-01",
    situation: "Answering an unexpected phone call from the clinic",
    pathway: "stammering",
    techniqueUsed: "Slow inhalation and soft sigh before speaking 'Hello'",
    confidenceScore: 7,
    anxietyBeforeScore: 7,
    reflectionNotes: "A sudden phone ring usually triggers throat constriction. I took two seconds to breathe before picking up. It worked smoothly.",
    tag: "Learning Moment"
  }
];

export const MOCK_GOALS: PersonalGoal[] = [
  {
    id: "goal_01",
    title: "Order coffee & meals without switching words to avoid blocks",
    targetDate: "Nov 30, 2026",
    pathway: "stammering",
    progressPercent: 75,
    status: "In Progress",
    category: "Speech Anxiety & Avoidance",
    weeklyTargetSessions: 4,
    completedThisWeek: 3
  },
  {
    id: "goal_02",
    title: "Master gentle vowel onset across 10-minute daily drills",
    targetDate: "Dec 15, 2026",
    pathway: "stammering",
    progressPercent: 88,
    status: "In Progress",
    category: "Fluency Management",
    weeklyTargetSessions: 5,
    completedThisWeek: 5
  },
  {
    id: "goal_03",
    title: "Participate verbally in at least 2 team meetings weekly",
    targetDate: "Nov 25, 2026",
    pathway: "stammering",
    progressPercent: 100,
    status: "Achieved",
    category: "Speech Anxiety & Avoidance",
    weeklyTargetSessions: 2,
    completedThisWeek: 2
  }
];

export const MOCK_PROGRESS_METRICS = [
  { day: "Mon", minutes: 15, confidence: 6, easeRating: 7 },
  { day: "Tue", minutes: 12, confidence: 7, easeRating: 7 },
  { day: "Wed", minutes: 20, confidence: 7, easeRating: 8 },
  { day: "Thu", minutes: 15, confidence: 8, easeRating: 8 },
  { day: "Fri", minutes: 18, confidence: 8, easeRating: 9 },
  { day: "Sat", minutes: 10, confidence: 9, easeRating: 8 },
  { day: "Sun", minutes: 15, confidence: 9, easeRating: 9 },
];

export const MOCK_THERAPIST_PATIENTS: PatientSummary[] = [
  {
    id: "pat_01",
    name: "Julian Mercer",
    email: "julian.mercer@example.com",
    age: 28,
    pathway: "stammering",
    primaryDiagnosis: "Developmental Fluency Variation (Stammering)",
    assignedPlan: "Fluency Shaping & Desensitization Protocol",
    lastActive: "Today at 08:30",
    weeklyAdherencePercent: 92,
    totalRecordingsCount: 24,
    pendingReviewCount: 1,
    status: "Active",
    nextSessionDate: "Nov 08, 2026 (10:00 AM)",
    keyGoals: ["Gentle vocal onset mastery", "Eliminating word substitution avoidance", "Phone call desensitization"]
  },
  {
    id: "pat_02",
    name: "Maya Patel",
    email: "maya.patel@example.com",
    age: 24,
    pathway: "articulation",
    primaryDiagnosis: "Frontal / Interdental Lisp on Sibilants (/s/, /z/)",
    assignedPlan: "Alveolar Ridge Placement & Minimal Pair Ladder",
    lastActive: "Yesterday at 16:20",
    weeklyAdherencePercent: 86,
    totalRecordingsCount: 19,
    pendingReviewCount: 2,
    status: "Active",
    nextSessionDate: "Nov 09, 2026 (02:30 PM)",
    keyGoals: ["Central air groove consistency", "Contrast pair discrimination /s/ vs /th/", "Carryover into conversation"]
  },
  {
    id: "pat_03",
    name: "Marcus Vance",
    email: "marcus.vance@example.com",
    age: 34,
    pathway: "stammering",
    primaryDiagnosis: "Severe Articulatory Blocks with Secondary Struggle",
    assignedPlan: "Van Riper Stuttering Modification & Tension Release",
    lastActive: "2 days ago",
    weeklyAdherencePercent: 78,
    totalRecordingsCount: 15,
    pendingReviewCount: 0,
    status: "Active",
    nextSessionDate: "Nov 11, 2026 (11:15 AM)",
    keyGoals: ["Cancellation & pull-out techniques", "Reducing eye-blinking secondary tension", "Public speaking practice"]
  },
  {
    id: "pat_04",
    name: "Elena Rostova",
    email: "elena.r@example.com",
    age: 21,
    pathway: "articulation",
    primaryDiagnosis: "Lateral Lisp Distortion on Sibilants & Affricates",
    assignedPlan: "Bilateral Tongue Elevation & Straw Drill Protocol",
    lastActive: "Nov 02, 2026",
    weeklyAdherencePercent: 65,
    totalRecordingsCount: 11,
    pendingReviewCount: 1,
    status: "Active",
    nextSessionDate: "Nov 12, 2026 (04:00 PM)",
    keyGoals: ["Eliminating lateral pocket airflow", "Molar anchoring stability", "Reading multisyllabic word lists"]
  },
  {
    id: "pat_05",
    name: "Liam O'Connor",
    email: "liam.oc@example.com",
    age: 19,
    pathway: "stammering",
    primaryDiagnosis: "Mild Fluency Hesitation with High Situational Anxiety",
    assignedPlan: "Maintenance & Real-World Confidence Building",
    lastActive: "Nov 01, 2026",
    weeklyAdherencePercent: 95,
    totalRecordingsCount: 38,
    pendingReviewCount: 0,
    status: "Maintenance",
    nextSessionDate: "Nov 22, 2026 (09:00 AM)",
    keyGoals: ["Job interview preparation", "Easy bounce technique in high stress", "Autonomous self-monitoring"]
  }
];

