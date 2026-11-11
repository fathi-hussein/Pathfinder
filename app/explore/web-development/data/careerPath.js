
 export const CAREER_PATHS = [
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