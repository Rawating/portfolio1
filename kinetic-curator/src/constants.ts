// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
// Edit this file to update your portfolio. Everything pulls from here.

export const OWNER = {
  name:     'Pranjal Rawat',
  role:     'Data Science & Software Engineering',
  school:   "Georgia Institute of Technology · CS '28",
  email:    'pranjalrawat72008@gmail.com',
  phone:    '984-389-5618',
  github:   'https://github.com/Rawating',
  linkedin: 'https://linkedin.com/in/prawat007',
  location: 'Atlanta, GA',
  bio:      "I'm a CS student at Georgia Institute of Technology (Class of 2028) with a passion for both data science and software engineering. Most recently at ThinkDigits Inc., I engineered a predictive maintenance pipeline that processed 2.24M sensor readings across 12 machines, surfacing $1.76M in cost drivers. Before that, at TechX, I built AI-powered startup tools — RAG pipelines, multi-agent orchestration, and full-stack AWS deployments. I love working where data meets product: turning messy real-world signals into software people actually use.",
  avatar:   '/avatar.jpg',
};

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title:    'Notivet',
    category: 'Full Stack',
    desc:     'Cross-platform app connecting pharmaceutical companies with veterinarians for real-time drug updates, dosing guidance, and species-specific treatment info. AI-powered assistant via OpenAI API.',
    tags:     ['React', 'TypeScript', 'Next.js', 'PostgreSQL'],
    color:    '#0f2a1e',
    emoji:    '💊',
    active:   false,
    github:   'https://github.com/Rawating',
    demo:     null as string | null,
  },
  {
    id: 2,
    title:    'FilmFinder',
    category: 'AI / Python',
    desc:     'Web app for searching movies and series using AI tools. Fetches real-time data from OMDB API including plot, cast, ratings, and runtime. Google Gemini API for NLP with Plotly visualizations.',
    tags:     ['Python', 'Streamlit', 'Gemini API', 'OMDB API'],
    color:    '#2a1a0f',
    emoji:    '🎬',
    active:   false,
    github:   'https://github.com/Rawating',
    demo:     null as string | null,
  },
  {
    id: 3,
    title:    'MednCare',
    category: 'Healthcare',
    desc:     'Personal healthcare web app for managing prescriptions, reminders, and health records. Medication timer with live countdowns, audio alarms, browser notifications, and an integrated AI assistant.',
    tags:     ['Python', 'ReactJS', 'Gemini API', 'Chart.js'],
    color:    '#1a0f2a',
    emoji:    '🏥',
    active:   true,
    github:   'https://github.com/Rawating',
    demo:     null as string | null,
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    id:       1,
    title:    'Data Science Intern',
    company:  'ThinkDigits Inc.',
    period:   'June 2026 – August 2026',
    location: 'Remote',
    bullets:  [
      'Engineered a predictive maintenance pipeline in Python (pandas, matplotlib) that ingested 1,237 production records and 2.24M sensor readings across 12 machines, identifying the top two cost drivers at $900K and $860K.',
      'Automated detection of mechanical failure patterns across shift, machine, and item dimensions by building an EDA pipeline processing 6 months of minute-level industrial sensor data, reducing manual analysis time.',
      'Delivered 25+ production-ready visualizations including correlation heatmaps, downtime event zoom windows, and dual-axis sensor trend charts, surfacing key relationships between operating conditions and equipment failures.',
    ],
  },
  {
    id:       2,
    title:    'Software Engineer Intern',
    company:  'TechX',
    period:   'Jan 2026 – May 2026',
    location: 'Remote',
    bullets:  [
      'Designed a Startup Idea Validator Agent using AI for market analysis, competitor intelligence, and risk evaluation.',
      'Deployed full-stack apps on AWS with EC2, S3, and Elastic IPs supporting stable AI/ML workflows.',
      'Built RAG pipelines, integrated vector databases, and orchestrated multi-agent chatbot logic.',
    ],
  },
  {
    id:       3,
    title:    'Research & Development Intern',
    company:  'EdMotion',
    period:   'Jun 2024 – Nov 2024',
    location: 'Fuquay-Varina, NC',
    bullets:  [
      'Contributed to a mixed reality platform integrating virtual and real-world elements for therapeutic interventions.',
      'Drafted a $50,000 NSF grant proposal aligned with research outcomes and market viability.',
      'Collaborated with a cross-disciplinary team of engineers, educators, and mental health professionals.',
    ],
  },
];
// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    id:       1,
    degree:   'B.S. in Computer Science',
    school:   'Georgia Institute of Technology',
    period:   '2024 – Spring 2028',
    location: 'Atlanta, GA',
    courses:  'Data Structures & Algorithms, Object-Oriented Programming, Linear Algebra, Python Fundamentals, Discrete Mathematics for CS, Multivariable Calculus',
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const SKILLS = {
  languages: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'Java'],
  tools:     ['Spring Boot', 'AWS (EC2, S3)', 'Git', 'ReactJS', 'VS Code', 'Streamlit', 'MobaXterm'],
  libraries: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
};

export const SKILL_BARS = [
  { label: 'Python, Pandas & Data Analysis',  pct: 92 },
  { label: 'Machine Learning & AI/RAG',       pct: 84 },
  { label: 'Full Stack (React / Next.js)',    pct: 85 },
  { label: 'AWS & Cloud Infrastructure',      pct: 78 },
];
// ─── NAV SECTIONS ─────────────────────────────────────────────────────────────
export const SECTIONS = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'] as const;
export type SectionId = typeof SECTIONS[number];
