'use client';

import Link from 'next/link'
import React, { useState, useMemo } from 'react';
import {
  Code,
  Server,
  Layers,
  Atom,
  Globe,
  Smartphone,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  Filter,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  MapPin,
  Calendar
} from 'lucide-react';

//import {CAREER_PATHS} from '@/data/careerPath'

// ==========================================
// 1. DATA STRUCTURES & DATASETS
// ==========================================

const CAREER_PATHS = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    icon: Code,
    desc: 'Build user interfaces, interactive web apps, and modern responsive client experiences.',
    techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    overview: {
      tagline: 'Craft visually engaging, high-performance web applications.',
      responsibilities: [
        'Translating UI/UX designs into responsive, interactive web pages.',
        'Optimizing rendering performance, core web vitals, and accessibility.',
        'Integrating REST & GraphQL APIs to handle client state seamlessly.'
      ],
      jobTitles: ['Junior Frontend Developer', 'React Developer', 'UI Engineer', 'Web Interface Developer']
    },
    ratings: {
      difficulty: { score: 5, label: 'Moderate', detail: 'HTML/CSS are beginner friendly; JavaScript & framework state management require practice.' },
      competition: { score: 8, label: 'High', detail: 'Many entry-level self-taught developers apply; strong portfolio essential to stand out.' },
      juniorJobs: { score: 6, label: 'Moderate', detail: 'Local & remote opportunities exist, but employers demand practical project proof.' },
      accessibility: { score: 9, label: 'Very High', detail: 'Abundant high-quality free resources, interactive courses, and open-source projects.' }
    },
    duration: {
      fundamentals: '3–5 Months',
      portfolio: '6–9 Months',
      factors: ['Daily study consistency (20+ hrs/wk)', 'Focus on JavaScript fundamentals over copying tutorial code', 'Building 2-3 unique full-stack/API projects']
    },
    salary: {
      kenya: {
        junior: 'KES 50,000 – 90,000 / mo',
        mid: 'KES 120,000 – 220,000 / mo',
        senior: 'KES 250,000 – 450,000+ / mo',
        source: 'PayScale Kenya & Local Hiring Surveys (Verified 2026)'
      },
      international: {
        junior: '$45,000 – $65,000 / yr',
        mid: '$75,000 – $110,000 / yr',
        senior: '$120,000 – $160,000+ / yr',
        source: 'Glassdoor & RemoteOK Global Tech Averages'
      }
    },
    stack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      tools: ['Git', 'GitHub', 'VS Code', 'Vite', 'Figma (Basic reading)']
    },
    juniorMarket: {
      titles: ['Junior Frontend Engineer', 'React Frontend Developer', 'Junior Web Developer'],
      requirements: ['Solid JS DOM knowledge', 'Experience with Git workflows', 'Responsive CSS layout mastery'],
      portfolioExpectations: 'Live hosted projects with API fetching, client-side routing, and real-time form validation.',
      remoteAvailability: 'High for contract/freelance; Moderate for full-time entry-level global roles.',
      beginnerChallenges: 'Overcoming tutorial hell and mastering asynchronous JS / state management.',
      competitionLevel: 'High entry volume. Stand out with clean git commits, TypeScript, and clean UI execution.'
    },
    faqs: [
      { q: 'Is frontend development difficult to learn?', a: 'Getting started with HTML and CSS is relatively easy. However, mastering JavaScript logic, asynchronous operations, state management, and framework build tools requires consistent, deliberate practice.' },
      { q: 'What should I learn first?', a: 'Always master vanilla JavaScript, HTML5, and CSS before moving into frameworks like React or Next.js. Frameworks make sense only once core JS concepts are solid.' },
      { q: 'Do I need a university degree?', a: 'No. Most tech employers in Kenya and globally prioritize a live working portfolio, clean GitHub code repositories, and practical technical interviews over formal degrees.' },
      { q: 'How important is mathematics?', a: 'Basic arithmetic and logic are sufficient for standard web app development. Advanced math is only required for graphics-heavy (Three.js/WebGL) or game development.' },
      { q: 'Can I learn completely for free?', a: 'Yes. Free platforms like freeCodeCamp, The Odin Project, MDN Web Docs, and YouTube provide complete modern curricula.' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    icon: Server,
    desc: 'Engineer servers, design relational databases, construct APIs, and manage security.',
    techs: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'REST API'],
    overview: {
      tagline: 'Architect server logic, data storage, security, and enterprise infrastructure.',
      responsibilities: [
        'Building scalable RESTful and GraphQL APIs for client applications.',
        'Designing relational and NoSQL database schemas and query optimizations.',
        'Implementing secure user authentication (JWT, OAuth) and server deployment.'
      ],
      jobTitles: ['Backend Engineer', 'Node.js Developer', 'Python API Developer', 'Database Systems Engineer']
    },
    ratings: {
      difficulty: { score: 7, label: 'Challenging', detail: 'Requires understanding system architecture, memory, security, and database indexing.' },
      competition: { score: 6, label: 'Moderate', detail: 'Fewer entry-level self-taught applicants compared to frontend; high demand for skilled problem solvers.' },
      juniorJobs: { score: 7, label: 'Good', detail: 'Companies actively seek backend engineers to build and maintain APIs and business databases.' },
      accessibility: { score: 8, label: 'High', detail: 'Plentiful backend open-source documentation, free databases, and server deployment tiers.' }
    },
    duration: {
      fundamentals: '4–6 Months',
      portfolio: '8–12 Months',
      factors: ['Understanding database design & SQL queries', 'Building authentic authentication & RBAC mechanisms', 'Understanding server hosting & deployment environments']
    },
    salary: {
      kenya: {
        junior: 'KES 60,000 – 100,000 / mo',
        mid: 'KES 140,000 – 250,000 / mo',
        senior: 'KES 280,000 – 500,000+ / mo',
        source: 'PayScale Kenya & Local Engineering Reports (2026)'
      },
      international: {
        junior: '$50,000 – $70,000 / yr',
        mid: '$85,000 – $120,000 / yr',
        senior: '$130,000 – $175,000+ / yr',
        source: 'Stack Overflow Developer Salary Insights'
      }
    },
    stack: {
      backend: ['Node.js (Express)', 'Python (Django/FastAPI)', 'Java (Spring)', 'Go'],
      databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      tools: ['Postman', 'Docker', 'Git', 'Linux Terminal', 'AWS / Render']
    },
    juniorMarket: {
      titles: ['Junior Backend Engineer', 'API Developer', 'Software Developer (Backend)'],
      requirements: ['Strong OOP or functional programming foundation', 'SQL relational database modeling', 'REST API design standards'],
      portfolioExpectations: 'Deployed backend services with documentation (Swagger/Postman), authentication, and database integrations.',
      remoteAvailability: 'High. Backend code is easily evaluated remotely via code repositories and system design tasks.',
      beginnerChallenges: 'Grasping asynchronous concurrency, data security, and environment configuration.',
      competitionLevel: 'Moderate. Demonstrating SQL optimization and security knowledge sets candidates apart quickly.'
    },
    faqs: [
      { q: 'Is backend harder than frontend?', a: 'It depends on your strengths. Backend focuses more on logical structures, database modeling, security, and system architecture rather than visual UI styling.' },
      { q: 'Which language should I start with?', a: 'Node.js (JavaScript) is great if you already know JS. Python (FastAPI/Django) is excellent for clean syntax and data integration.' },
      { q: 'Do I need to learn SQL?', a: 'Yes. Relational databases like PostgreSQL or MySQL are mandatory in almost every commercial backend engineering role.' }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    icon: Layers,
    desc: 'Master end-to-end web architecture, connecting client interfaces to databases and servers.',
    techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind', 'Git', 'REST APIs'],
    overview: {
      tagline: 'End-to-end product development from UI interfaces to cloud infrastructure.',
      responsibilities: [
        'Engineering complete web features across client, server, and database layers.',
        'Ensuring seamless API data flow, authentication, and state synchronization.',
        'Managing application deployment, CI/CD pipelines, and cloud instances.'
      ],
      jobTitles: ['Full-Stack Engineer', 'Software Developer', 'Web Application Engineer']
    },
    ratings: {
      difficulty: { score: 8, label: 'High', detail: 'Requires breadth across UI frameworks, server logic, databases, and DevOps setup.' },
      competition: { score: 7, label: 'High', detail: 'Highly requested role by startups and SMEs looking for versatile engineers.' },
      juniorJobs: { score: 7, label: 'Good', detail: 'Startups in Kenya and globally favor full-stack capability for fast iteration.' },
      accessibility: { score: 8, label: 'High', detail: 'Full-stack JS frameworks (Next.js/Remix) make unified stack learning intuitive.' }
    },
    duration: {
      fundamentals: '6–9 Months',
      portfolio: '9–14 Months',
      factors: ['Balancing frontend polish with robust server security', 'Understanding state hydrations and server-side rendering', 'Mastering database ORMs (Prisma/Drizzle)']
    },
    salary: {
      kenya: {
        junior: 'KES 65,000 – 110,000 / mo',
        mid: 'KES 150,000 – 280,000 / mo',
        senior: 'KES 300,000 – 550,000+ / mo',
        source: 'Kenya Tech Talent Survey (Verified 2026)'
      },
      international: {
        junior: '$55,000 – $75,000 / yr',
        mid: '$90,000 – $130,000 / yr',
        senior: '$140,000 – $185,000+ / yr',
        source: 'Indeed & Tech Hiring Reports'
      }
    },
    stack: {
      frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      backend: ['Node.js', 'Express', 'Next.js API Routes'],
      databases: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
      tools: ['Git', 'Vercel', 'Docker', 'Postman']
    },
    juniorMarket: {
      titles: ['Junior Full-Stack Developer', 'Software Engineer', 'Full-Stack Web Developer'],
      requirements: ['Proficiency in both client-side rendering and database management', 'Clean code structure', 'Git collaboration'],
      portfolioExpectations: 'Fully deployed SaaS-style web applications with authentication, payment gateway mocks (e.g., M-PESA/Stripe), and admin panels.',
      remoteAvailability: 'Very High. Startup ecosystems recruit full-stack talent for agile product teams.',
      beginnerChallenges: 'Avoid becoming a "master of none"—it takes time to reach true proficiency in both domain halves.',
      competitionLevel: 'High. Candidates with verified deployed products stand out immediately.'
    },
    faqs: [
      { q: 'Should I become a Full-Stack developer right away?', a: 'It is usually wiser to build a strong foundation in either Frontend or Backend first before combining them into a full-stack skillset.' },
      { q: 'What stack is best for beginners in Kenya?', a: 'The Node.js + React / Next.js ecosystem (MERN / Next-Postgres) has high local startup demand and smooth learning materials.' }
    ]
  },
  {
    id: 'react',
    title: 'React Developer',
    icon: Atom,
    desc: 'Specialize in building dynamic, high-performance web applications using React & Next.js.',
    techs: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind CSS', 'REST API'],
    overview: {
      tagline: 'Deep component-driven UI specialization for modern single-page and web apps.',
      responsibilities: [
        'Designing modular, reusable component architectures and state trees.',
        'Optimizing application performance, client caching, and lazy loading.',
        'Managing server-side rendering (SSR) and client-side hydration with Next.js.'
      ],
      jobTitles: ['React Specialist', 'Frontend React Developer', 'Next.js Engineer']
    },
    ratings: {
      difficulty: { score: 6, label: 'Moderate', detail: 'Requires deep understanding of JS closures, hooks, state cycles, and rendering mechanics.' },
      competition: { score: 8, label: 'High', detail: 'React is the world’s most popular frontend library; high market popularity.' },
      juniorJobs: { score: 8, label: 'Very Good', detail: 'High volume of agency and tech company job descriptions specifically list React.' },
      accessibility: { score: 9, label: 'Very High', detail: 'Extensive ecosystem docs, community support, and specialized courses.' }
    },
    duration: {
      fundamentals: '3–4 Months (Post-JS)',
      portfolio: '5–8 Months',
      factors: ['Solid understanding of pure ES6+ JavaScript concepts', 'Understanding state management pattern (Context/Zustand)', 'Next.js App Router experience']
    },
    salary: {
      kenya: {
        junior: 'KES 55,000 – 95,000 / mo',
        mid: 'KES 130,000 – 230,000 / mo',
        senior: 'KES 260,000 – 480,000+ / mo',
        source: 'PayScale & Tech Compensation Kenya (2026)'
      },
      international: {
        junior: '$50,000 – $70,000 / yr',
        mid: '$80,000 – $115,000 / yr',
        senior: '$125,000 – $170,000+ / yr',
        source: 'Arc.dev & RemoteOK Developer Index'
      }
    },
    stack: {
      frontend: ['React 18/19', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Zustand / Redux Toolkit'],
      tools: ['Vite', 'Git', 'Vercel', 'React Query / SWR']
    },
    juniorMarket: {
      titles: ['React Developer', 'Junior Frontend React Engineer', 'Next.js Developer'],
      requirements: ['React Hooks mastery', 'Asynchronous data fetching', 'Responsive Tailwind styling'],
      portfolioExpectations: 'Interactive SPAs or Next.js applications featuring dark mode, search filtering, and state persistence.',
      remoteAvailability: 'High. Global demand for React ecosystem talent is consistently active.',
      beginnerChallenges: 'Managing re-render side-effects and understanding Next.js server components.',
      competitionLevel: 'High. Candidates with TypeScript and Next.js stand out above standard React-only devs.'
    },
    faqs: [
      { q: 'Is React better than Vue or Angular?', a: 'React currently has the largest job market share globally and in Kenya, making it an excellent primary framework choice.' },
      { q: 'Should I learn Next.js with React?', a: 'Yes. Next.js is now the industry standard for production React applications, handling routing, SSR, and SEO seamlessly.' }
    ]
  },
  {
    id: 'wordpress',
    title: 'WordPress Developer',
    icon: Globe,
    desc: 'Build, customize, and maintain business websites, custom themes, and WooCommerce stores.',
    techs: ['PHP', 'WordPress CMS', 'HTML/CSS', 'JavaScript', 'MySQL', 'Elementor', 'WooCommerce'],
    overview: {
      tagline: 'Rapid commercial web delivery for local business, media, and e-commerce platforms.',
      responsibilities: [
        'Developing custom WordPress themes and extending plugin functionality with PHP.',
        'Building high-converting WooCommerce stores and local payment gateways (M-PESA).',
        'Managing web hosting, site security, speed optimization, and client SEO.'
      ],
      jobTitles: ['WordPress Specialist', 'CMS Web Developer', 'Webmaster & SEO Developer']
    },
    ratings: {
      difficulty: { score: 3, label: 'Low-Moderate', detail: 'Fastest entry point into practical paid web projects and small business freelancing.' },
      competition: { score: 7, label: 'High (Freelance)', detail: 'Many non-technical page-builder users; high demand for genuine PHP theme coders.' },
      juniorJobs: { score: 7, label: 'Good (Agency)', detail: 'Local agencies in Kenya heavily hire WP devs to service SME business clients.' },
      accessibility: { score: 10, label: 'Maximum', detail: 'Instant setup, low entry barrier, and massive global tutorial availability.' }
    },
    duration: {
      fundamentals: '1–2 Months',
      portfolio: '3–5 Months',
      factors: ['Learning custom PHP theme development over basic page builders', 'Understanding local payment integration plugins', 'Site optimization & security basics']
    },
    salary: {
      kenya: {
        junior: 'KES 35,000 – 65,000 / mo',
        mid: 'KES 80,000 – 140,000 / mo',
        senior: 'KES 160,000 – 280,000+ / mo',
        source: 'Kenya Digital Agency Benchmark (2026)'
      },
      international: {
        junior: '$35,000 – $50,000 / yr',
        mid: '$55,000 – $80,000 / yr',
        senior: '$85,000 – $115,000+ / yr',
        source: 'Glassdoor Global WP Index'
      }
    },
    stack: {
      core: ['PHP', 'WordPress API', 'HTML5', 'CSS3 / SASS', 'JavaScript / jQuery'],
      cms: ['WooCommerce', 'Custom Post Types', 'ACF (Advanced Custom Fields)', 'Elementor Pro'],
      tools: ['cPanel', 'LocalWP', 'MySQL', 'FileZilla FTP']
    },
    juniorMarket: {
      titles: ['WordPress Developer', 'Webmaster', 'Digital Agency Web Developer'],
      requirements: ['WordPress theme customization', 'WooCommerce setup', 'Basic PHP & MySQL knowledge'],
      portfolioExpectations: '3+ live client or agency-style websites showing custom design, fast load times, and working forms/e-commerce.',
      remoteAvailability: 'High for freelance platforms (Upwork/Fiverr) and international digital agencies.',
      beginnerChallenges: 'Differentiating yourself from non-coders who only drag-and-drop page templates.',
      competitionLevel: 'Moderate-High. Writing custom PHP code elevates you above basic page-builder users.'
    },
    faqs: [
      { q: 'Is WordPress still relevant in 2026?', a: 'Yes. WordPress powers over 40% of all websites globally, driving substantial commercial demand for local businesses, media houses, and e-commerce.' },
      { q: 'Can I earn money quickly with WordPress?', a: 'Yes. WordPress allows beginner developers to start taking on small freelance projects for local businesses faster than custom framework stacks.' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Developer (Cross-Platform)',
    icon: Smartphone,
    desc: 'Create native-quality iOS and Android applications using web tech frameworks like React Native.',
    techs: ['React Native', 'Flutter', 'JavaScript', 'TypeScript', 'Dart', 'REST APIs', 'Mobile UI'],
    overview: {
      tagline: 'Deliver mobile app experiences across iOS and Android from a single codebase.',
      responsibilities: [
        'Developing cross-platform mobile interfaces using React Native or Flutter.',
        'Connecting mobile clients to backend cloud microservices and native device APIs.',
        'Publishing and maintaining apps on Apple App Store and Google Play Store.'
      ],
      jobTitles: ['Mobile Engineer', 'React Native Developer', 'Cross-Platform App Developer']
    },
    ratings: {
      difficulty: { score: 7, label: 'Challenging', detail: 'Requires understanding native mobile build systems, device hardware APIs, and store submission rules.' },
      competition: { score: 6, label: 'Moderate', detail: 'Strong demand due to Africa’s mobile-first consumer economy.' },
      juniorJobs: { score: 6, label: 'Moderate', detail: 'Tech startups prioritize mobile-first developers to launch iOS/Android products.' },
      accessibility: { score: 8, label: 'High', detail: 'React Native allows web developers to transition into mobile building smoothly.' }
    },
    duration: {
      fundamentals: '4–6 Months (Post-JS)',
      portfolio: '7–11 Months',
      factors: ['Mastering React / JS fundamentals prior to React Native', 'Understanding mobile navigation & offline data storage', 'Learning App Store and Play Store publishing procedures']
    },
    salary: {
      kenya: {
        junior: 'KES 60,000 – 105,000 / mo',
        mid: 'KES 140,000 – 260,000 / mo',
        senior: 'KES 280,000 – 520,000+ / mo',
        source: 'PayScale Kenya & Mobile Dev Benchmark (2026)'
      },
      international: {
        junior: '$50,000 – $72,000 / yr',
        mid: '$85,000 – $125,000 / yr',
        senior: '$135,000 – $180,000+ / yr',
        source: 'Glassdoor Mobile Talent Reports'
      }
    },
    stack: {
      frameworks: ['React Native', 'Expo', 'Flutter (Dart)', 'TypeScript'],
      mobileTech: ['AsyncStorage / SQLite', 'Push Notifications', 'Native Device APIs (Camera, GPS)'],
      tools: ['Xcode (iOS)', 'Android Studio', 'Git', 'TestFlight / Play Console']
    },
    juniorMarket: {
      titles: ['Junior Mobile Developer', 'React Native Engineer', 'Mobile App Developer'],
      requirements: ['React / React Native proficiency', 'REST API integration', 'State management (Zustand/Redux)'],
      portfolioExpectations: 'Published APKs or TestFlight builds of fully functioning apps with offline capabilities and authentication.',
      remoteAvailability: 'High. Mobile app startups frequently hire distributed engineering talent.',
      beginnerChallenges: 'Managing platform-specific bugs between iOS and Android behavior.',
      competitionLevel: 'Moderate. Having a published app on the Play Store or App Store grants immediate credibility.'
    },
    faqs: [
      { q: 'Should I learn React Native or Flutter?', a: 'If you already know JavaScript/React, React Native is the fastest path. If starting fresh and wanting high UI performance, Flutter (Dart) is also very strong.' },
      { q: 'Can I build iOS apps on a Windows PC?', a: 'Yes, using Expo for development and cloud build tools like EAS (Expo Application Services), though Xcode debugging still requires a Mac environment.' }
    ]
  }
];

// Verified Opportunities Dataset
const OPPORTUNITIES_DATA = [
  {
    id: 'opp-1',
    title: 'The Odin Project - Full Stack JavaScript Path',
    provider: 'The Odin Project',
    type: 'Course',
    category: 'Free / Self-Paced',
    level: 'Beginner',
    location: 'Online / Remote',
    price: '100% Free (Open Source)',
    eligibility: 'Open to everyone worldwide. Requires a computer and internet.',
    duration: '6 - 9 Months',
    deadline: 'Self-paced (Always Open)',
    status: 'Open',
    url: 'https://www.theodinproject.com',
    verifiedDate: 'Verified Nov 2026',
    desc: 'Highly acclaimed open-source curriculum covering HTML, CSS, JS, Node.js, databases, and Git through real portfolio projects.'
  },
  {
    id: 'opp-2',
    title: 'Safaricom Software Engineering Internship 2026',
    provider: 'Safaricom PLC',
    type: 'Internship',
    category: 'Kenya',
    level: 'Beginner / Intermediate',
    location: 'Nairobi, Kenya (Hybrid)',
    price: 'Stipend Provided',
    eligibility: 'Undergraduate tech students or recent Kenyan tech graduates.',
    duration: '6 Months',
    deadline: '2026-11-25',
    status: 'Open',
    url: 'https://careers.safaricom.co.ke',
    verifiedDate: 'Verified Oct 2026',
    desc: 'Hands-on practical experience within Safaricom’s digital engineering, enterprise cloud, and API integration teams.'
  },
  {
    id: 'opp-3',
    title: 'ALX Software Engineering Programme',
    provider: 'ALX Africa & Holberton School',
    type: 'Bootcamp',
    category: 'Scholarship Funded',
    level: 'Beginner to Advanced',
    location: 'Kenya / Africa (Online)',
    price: 'Sponsorship / Scholarship Available',
    eligibility: 'African youth aged 18-34 with 20+ hours weekly commitment.',
    duration: '12 Months',
    deadline: '2026-12-05',
    status: 'Open',
    url: 'https://www.alxafrica.com',
    verifiedDate: 'Verified Nov 2026',
    desc: 'Intensive peer-learning software engineering curriculum covering systems programming, web stacks, and DevOps.'
  },
  {
    id: 'opp-4',
    title: 'Mastercard Foundation Scholars Program',
    provider: 'Kenyatta University / Mastercard Fdn',
    type: 'Scholarship',
    category: 'Kenya / International',
    level: 'Undergraduate / Masters',
    location: 'Nairobi, Kenya',
    price: 'Fully Funded (Tuition, Laptop, Living)',
    eligibility: 'Academically talented African youth facing financial hardship.',
    duration: '4 Years',
    deadline: '2026-12-15',
    status: 'Open',
    url: 'https://mastercardfdn.org',
    verifiedDate: 'Verified Oct 2026',
    desc: 'Full financial support and leadership development for STEM and technology degree paths.'
  },
  {
    id: 'opp-5',
    title: 'CS50W: Web Programming with Python and JavaScript',
    provider: 'Harvard University (edX)',
    type: 'Course',
    category: 'Free / Self-Paced',
    level: 'Intermediate',
    location: 'Online / Remote',
    price: 'Free Audit (Certificate Paid)',
    eligibility: 'Prior basic programming experience recommended.',
    duration: '12 Weeks',
    deadline: 'Self-paced',
    status: 'Open',
    url: 'https://cs50.harvard.edu/web/',
    verifiedDate: 'Verified Nov 2026',
    desc: 'Dive into database design, Django, React, security, and scalability in this famous Harvard computer science course.'
  },
  {
    id: 'opp-6',
    title: 'Google Africa Developer Scholarship (GADS)',
    provider: 'Google / Pluralsight / Andela',
    type: 'Scholarship',
    category: 'Scholarship Funded',
    level: 'Beginner / Intermediate',
    location: 'Online (Pan-Africa)',
    price: '100% Free',
    eligibility: 'Residents of African countries aspiring to build web or mobile skillsets.',
    duration: '4 Months',
    deadline: '2027-01-15',
    status: 'Upcoming',
    url: 'https://andela.com/gads/',
    verifiedDate: 'Verified Nov 2026',
    desc: 'Guided learning tracks with Pluralsight access, mentor support, and Google certification vouchers.'
  }
];

// Learning Roadmap Steps
const ROADMAP_STEPS = [
  { step: '01', title: 'HTML5 & Semantics', category: 'Foundation', desc: 'Structure web pages accessibly using standard semantic elements and SEO best practices.', project: 'Personal Portfolio Page' },
  { step: '02', title: 'Modern CSS3 & Tailwind', category: 'Styling', desc: 'Master Flexbox, Grid, responsive typography, and Tailwind utility classes for clean UI layout.', project: 'Responsive Landing Page' },
  { step: '03', title: 'JavaScript (ES6+)', category: 'Logic', desc: 'Internalize DOM manipulation, functions, async/await, fetch API, and JSON handling.', project: 'Interactive Web Dashboard' },
  { step: '04', title: 'Git & GitHub', category: 'Version Control', desc: 'Manage branch workflows, repositories, pull requests, and host code on GitHub Pages / Vercel.', project: 'Open-Source Contribution' },
  { step: '05', title: 'React & Next.js', category: 'Frontend Stack', desc: 'Build component trees, manage application state, handle routing, and render server-side code.', project: 'Full E-commerce UI / SaaS' },
  { step: '06', title: 'Node.js & Databases', category: 'Backend Stack', desc: 'Create RESTful APIs with Express, write SQL database queries, and securely authenticate users.', project: 'Full-Stack Auth System' }
];

const RELATED_CAREERS = [
  {
    href:'/explore/Cyber-security',
    name: 'Security & Defense',
    title: 'Cybersecurity →',
    description: 'Network security, ethical hacking, and vulnerability testing.'
  },
  {
    href:'/explore/AI',
    name: 'Data & Intelligence',
    title: 'Artificial Intelligence →',
    description:'Machine learning models, prompt engineering, and LLM APIs.'
  },
  {
    href:'/explore/Data-science',
    name: 'Analytics & Python',
    title: 'Data Science →',
    description:'Data analysis, statistical modeling, and business insights.'
  }
]







export default function WebDevelopmentCategoryPage() {
  // State Management
  const [selectedCareerId, setSelectedCareerId] = useState('frontend');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [oppTab, setOppTab] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  // Selected Career Object
  const currentCareer = useMemo(() => {
    return CAREER_PATHS.find((c) => c.id === selectedCareerId) || CAREER_PATHS[0];
  }, [selectedCareerId]);

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    return OPPORTUNITIES_DATA.filter((opp) => {
      // Type Tab Filter
      if (oppTab !== 'All' && opp.type !== oppTab) return false;

      // Price Filter
      if (priceFilter === 'Free' && !opp.price.toLowerCase().includes('free') && !opp.price.toLowerCase().includes('scholarship')) {
        return false;
      }
      if (priceFilter === 'Paid' && opp.price.toLowerCase().includes('free')) {
        return false;
      }

      // Location Filter
      if (locationFilter === 'Kenya' && !opp.location.includes('Kenya')) return false;
      if (locationFilter === 'Remote' && !opp.location.toLowerCase().includes('online') && !opp.location.toLowerCase().includes('remote')) return false;

      return true;
    });
  }, [oppTab, priceFilter, locationFilter]);



  return (
    <div className="min-h-screen bg-[#F4F7FC] dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
        
        {/* Subtle Mesh Background Glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</a>
            <span>/</span>
            <a href="/explore" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Explore</a>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Web Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-400/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                Technology & Development
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Web Development
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Web development is the foundation of the digital economy. Learn how to craft client applications, engineer server architectures, and launch high-impact platforms for local and global markets.
              </p>

              {/* Statistics Row */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-indigo-600 dark:text-indigo-400">12+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Free Courses</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-emerald-600 dark:text-emerald-400">5+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Bootcamps</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-blue-600 dark:text-blue-400">8+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Internships</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-amber-600 dark:text-amber-400">4+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Scholarships</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: EXPLORE CAREER PATHS (INTERACTIVE) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore Career Paths
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Discover different specialisations, compare their opportunities and find the path that suits your interests.
          </p>
        </div>

        {/* Clickable Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAREER_PATHS.map((career) => {
            const IconComponent = career.icon;
            const isSelected = career.id === selectedCareerId;

            return (
              <button
                key={career.id}
                onClick={() => setSelectedCareerId(career.id)}
                className={`text-left p-5 rounded-2xl border transition flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 border-indigo-600 dark:border-indigo-500 shadow-md ring-2 ring-indigo-600/20 dark:ring-indigo-500/20'
                    : 'bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
                        Active Selection
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {career.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">
                      {career.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                  {career.techs.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                  {career.techs.length > 4 && (
                    <span className="text-[10px] text-slate-400 font-medium self-center">
                      +{career.techs.length - 4} more
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* SECTION 3: SELECTED CAREER PATH DETAILS */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-sm p-6 sm:p-8 space-y-10 animate-in fade-in duration-200">
          
          {/* A. Overview Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700/60">
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Career Path Breakdown</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {currentCareer.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">
                {currentCareer.overview.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Common Job Titles:</span>
              {currentCareer.overview.jobTitles.slice(0, 2).map((t) => (
                <span key={t} className="text-xs bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities Bullet Points */}
          <div className="bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 p-4 sm:p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> What a {currentCareer.title} Does:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {currentCareer.overview.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl border border-indigo-100/60 dark:border-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* B. Pathfinder Comparative Ratings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pathfinder Career Ratings</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  *Comparative assessments generated by Pathfinder based on market entry thresholds, not official government statistics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Rating Card 1 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Learning Difficulty</span>
                  <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">{currentCareer.ratings.difficulty.score}/10</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: `${currentCareer.ratings.difficulty.score * 10}%` }} />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{currentCareer.ratings.difficulty.detail}</p>
              </div>

              {/* Rating Card 2 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Market Competition</span>
                  <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400">{currentCareer.ratings.competition.score}/10</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${currentCareer.ratings.competition.score * 10}%` }} />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{currentCareer.ratings.competition.detail}</p>
              </div>

              {/* Rating Card 3 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Junior Job Availability</span>
                  <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{currentCareer.ratings.juniorJobs.score}/10</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${currentCareer.ratings.juniorJobs.score * 10}%` }} />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{currentCareer.ratings.juniorJobs.detail}</p>
              </div>

              {/* Rating Card 4 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Learning Accessibility</span>
                  <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">{currentCareer.ratings.accessibility.score}/10</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${currentCareer.ratings.accessibility.score * 10}%` }} />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{currentCareer.ratings.accessibility.detail}</p>
              </div>

            </div>
          </div>

          {/* C. Learning Duration & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <div className="md:col-span-1 bg-slate-900 dark:bg-slate-950 text-white p-5 rounded-2xl space-y-4 border border-slate-800">
              <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Estimated Learning Time
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400 block">Fundamentals:</span>
                  <span className="text-xl font-extrabold text-white">{currentCareer.duration.fundamentals}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Job-Ready Portfolio:</span>
                  <span className="text-xl font-extrabold text-emerald-400">{currentCareer.duration.portfolio}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                *Estimates assume ~15-20 hours of focused weekly learning. Pathfinder does not guarantee immediate employment.
              </p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 p-5 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Key Factors Affecting Duration:
              </h4>
              <ul className="space-y-2">
                {currentCareer.duration.factors.map((factor, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* D. Verified Salary Expectations (Kenya vs International) */}
          <div className="space-y-4 pt-2">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Salary Expectations</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified salary benchmarks based on local hiring data and international remote compensation indexes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Kenya Salary Card */}
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-500" /> Kenya Market (Monthly KES)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Verified 2026</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">Junior (0-2 yrs):</span>
                    <span className="font-bold text-slate-900 dark:text-white">{currentCareer.salary.kenya.junior}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Mid-Level (2-5 yrs):</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{currentCareer.salary.kenya.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentCareer.salary.kenya.senior}</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  Source: {currentCareer.salary.kenya.source}
                </p>
              </div>

              {/* International Salary Card */}
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-blue-500" /> International / Remote (Annual USD)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Verified 2026</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400">Junior (0-2 yrs):</span>
                    <span className="font-bold text-slate-900 dark:text-white">{currentCareer.salary.international.junior}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Mid-Level (2-5 yrs):</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{currentCareer.salary.international.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentCareer.salary.international.senior}</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  Source: {currentCareer.salary.international.source}
                </p>
              </div>

            </div>
          </div>

          {/* E. Technology Stack Tags */}
          <div className="space-y-3 pt-2">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Recommended Tech Stack</h4>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
              {Object.entries(currentCareer.stack).map(([groupKey, techArray]) => (
                <div key={groupKey} className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{groupKey}:</span>
                  <div className="flex flex-wrap gap-2">
                    {techArray.map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* F. Junior Job Market Breakdown */}
          <div className="space-y-4 pt-2">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Junior Job Market Insights</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">Employer Requirements</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentCareer.juniorMarket.requirements.join(' • ')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">Portfolio Expectations</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentCareer.juniorMarket.portfolioExpectations}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">Remote Opportunities</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentCareer.juniorMarket.remoteAvailability}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">Common Beginner Challenge</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentCareer.juniorMarket.beginnerChallenges}
                </p>
              </div>

            </div>
          </div>

          {/* SECTION 4: IMPORTANT INFORMATION (FAQ ACCORDION) */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-700/60 space-y-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Important Information — Must Read
            </h4>

            <div className="space-y-3">
              {currentCareer.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border border-slate-200/90 dark:border-slate-700/80 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                      className="w-full text-left p-4 font-semibold text-xs sm:text-sm text-slate-900 dark:text-white flex justify-between items-center hover:bg-slate-100/60 dark:hover:bg-slate-800 transition"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 5: FIND REAL LEARNING OPPORTUNITIES */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Curated Directory</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Find Real Opportunities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Verified courses, bootcamps, internships, and scholarships targeting African and global learners.
              </p>
            </div>

            {/* Type Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              {['All', 'Course', 'Bootcamp', 'Internship', 'Scholarship'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setOppTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    oppTab === tab ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab === 'All' ? 'All Opportunities' : `${tab}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" /> Filter Listings:
            </span>

            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600"
            >
              <option value="All">All Pricing Types</option>
              <option value="Free">Free / Fully Funded</option>
              <option value="Paid">Paid / Premium</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600"
            >
              <option value="All">All Locations</option>
              <option value="Kenya">Kenya Specific</option>
              <option value="Remote">Online / Remote</option>
            </select>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-5 shadow-2xs hover:shadow-sm transition flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                        {opp.type}
                      </span>
                      <span className="font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/50">
                        {opp.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                        {opp.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{opp.provider}</p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {opp.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700/60">
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <strong className="text-slate-800 dark:text-slate-200">{opp.price}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <strong className="text-slate-800 dark:text-slate-200">{opp.location}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Deadline:</span>
                        <strong className="text-slate-800 dark:text-slate-200">{opp.deadline}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-700/60">
                    <span className="text-[10px] text-slate-400">{opp.verifiedDate}</span>
                    <a
                      href={opp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1"
                    >
                      Official Link <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-sm font-semibold">No opportunities match your current filter selections.</p>
                <button
                  onClick={() => { setOppTab('All'); setPriceFilter('All'); setLocationFilter('All'); }}
                  className="text-xs text-indigo-600 dark:text-indigo-400 underline font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 6: LEARNING PROGRESSION ROADMAP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Step-by-Step Pathway</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            General Web Development Roadmap
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            The standard learning sequence to transition from zero coding experience to building full applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROADMAP_STEPS.map((step) => (
            <div key={step.step} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                  STAGE {step.step}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">{step.category}</span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>

              <div className="pt-2 text-xs border-t border-slate-100 dark:border-slate-700/60">
                <span className="text-[11px] text-slate-400 block">Suggested Practical Project:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{step.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 7: RELATED CAREER PATHS */}
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Explore Other Pathfinder Categories</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Compare web development with adjacent technical fields.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {RELATED_CAREERS.map(career=>(
                <Link key={career.href} href={career.href} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-500 dark:hover:border-indigo-500 transition group">
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold block">{career.name}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition">{career.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{career.description}</p>
                </Link>
            ))}


          </div>
        </div>
      </section>

    </div>
  );
}