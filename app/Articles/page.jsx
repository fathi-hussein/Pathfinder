'use client';

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  ArrowLeft,
  Filter,
  Sparkles,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  Share2,
  Compass,
  Briefcase,
  GraduationCap,
  Users,
  Search
} from 'lucide-react';

// ==========================================
// FULL ARTICLES DATASET (9 Articles)
// ==========================================
const ARTICLES = [
  {
    id: 1,
    title: 'I Want to Get Into Tech, But Where Do I Even Start?',
    subtitle: 'Navigating the overwhelming landscape of technology careers without losing your mind.',
    category: 'Starting Your Tech Journey',
    readTime: '6 min read',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    author: 'Pathfinder Editorial',
    date: 'October 2026',
    content: [
      {
        type: 'paragraph',
        text: "If you open Google right now and type 'how to start in tech,' you will be instantly buried under an avalanche of contradictory advice. One person says you must learn Python immediately. Another swears that web development is dead and you need to jump into AI engineering. A bootcamp ad promises you a six-figure job in 12 weeks, while a veteran developer on Reddit warns that the entry-level market is impossible."
      },
      {
        type: 'paragraph',
        text: 'It is completely normal to feel paralyzed by this noise. When every direction looks like the right one, standing still feels like the safest option. But the truth is, technology is not a single path—it is a massive ecosystem of distinct trades, similar to medicine or construction. You do not need to master everything; you just need to find your corner.'
      },
      {
        type: 'quote',
        text: 'The biggest mistake beginners make is trying to study the entire ocean before learning how to swim in a pool.'
      },
      {
        type: 'heading',
        text: 'Step 1: Understand What Actually Interests You'
      },
      {
        type: 'paragraph',
        text: 'Before looking at syntax or downloading code editors, ask yourself what kind of problems you enjoy solving. Do you love organizing information and making things look clean and intuitive? That points toward UI/UX design or frontend development. Do you enjoy logic puzzles, data structures, and automation? Backend engineering or systems administration might be your lane.'
      },
      {
        type: 'paragraph',
        text: 'Take a moment to reflect on your natural curiosities. Are you drawn to how websites work, how secure networks are, or how data is analyzed? Your authentic interest is your best compass.'
      },
      {
        type: 'callout',
        title: 'Reflection Question',
        text: 'When you use apps or software daily, what frustrates you about them, and what features do you find yourself most curious about?'
      },
      {
        type: 'heading',
        text: 'A Tale of Two Beginners: How Research Changes Everything'
      },
      {
        type: 'casestudy',
        title: 'Fictional Case Study Comparison',
        personA: {
          name: 'Person A (The Scattershot Learner)',
          desc: 'Starts learning because everyone talks about AI. They jump between Python, JavaScript, cybersecurity, and data science without researching what the roles actually involve. They collect five different introductory certificates over six months but cannot build a single working project.'
        },
        personB: {
          name: 'Person B (The Focused Explorer)',
          desc: 'Starts with little knowledge but takes two weeks to research different career tracks. They choose frontend development because they enjoy visual creation. They follow a structured learning plan, build three real projects, and research genuine entry-level job expectations.'
        },
        outcome: 'Person A ends up burned out and confused by the sheer volume of fragmented topics. Person B builds practical competence, creates a portfolio, and approaches the job market with clear direction.'
      },
      {
        type: 'heading',
        text: 'Practical Tips for Your First Week'
      },
      {
        type: 'list',
        items: [
          'Pick one primary discipline for the next 30 days (e.g., HTML/CSS or basic Python) and ignore all other shiny objects.',
          'Build tiny things immediately rather than just watching tutorial videos.',
          'Accept that feeling confused is not a sign that you lack talent; it is a sign that your brain is building new neural pathways.'
        ]
      },
      {
        type: 'conclusion',
        text: 'You do not need to know the entire roadmap before taking your first step. You just need to commit to exploring one path deeply enough to understand if it fits you.'
      }
    ],
    relatedCareers: ['Frontend Developer', 'UX/UI Designer', 'Software Engineer'],
    relatedOpportunities: ['Intro to Web Development Bootcamp', 'Tech Career Readiness Workshop']
  },
  {
    id: 2,
    title: 'Choosing a Tech Career Without Understanding What It Involves.',
    subtitle: 'Why picking a title based on salary hype leads to burnout.',
    category: 'Beginner Mistakes',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'October 2026',
    content: [
      {
        type: 'paragraph',
        text: 'It is easy to fall into the trap of choosing a technology career purely based on headline salary figures or trending social media posts. When you hear that Cloud Architects or Machine Learning Engineers earn impressive packages, it is natural to want in.'
      },
      {
        type: 'paragraph',
        text: 'However, choosing a career without understanding its day-to-day reality is like buying hiking boots without knowing whether you are walking through a desert or scaling a glacier. If you hate repetitive debugging, a career in low-level systems engineering will misery-test your patience.'
      },
      {
        type: 'quote',
        text: 'A high salary will never sustain your energy through difficult debugging sessions if you despise the actual work.'
      },
      {
        type: 'heading',
        text: 'Looking Past the Title: What Do They Actually Do All Day?'
      },
      {
        type: 'paragraph',
        text: 'Every technology role has a distinct rhythm. A data analyst spends hours cleaning messy spreadsheets and writing SQL queries before they ever build a dashboard. A backend developer spends significant time reading existing documentation, tracing error logs, and writing tests—often more time than writing new feature code.'
      },
      {
        type: 'callout',
        title: 'Actionable Advice',
        text: 'Before committing to a path, read actual job descriptions for junior roles in that field. Look past the required tech stack and examine the daily responsibilities.'
      },
      {
        type: 'conclusion',
        text: 'Match your career choice to your tolerance for specific types of problems. Curiosity and resilience come naturally when you actually enjoy the puzzles you are solving.'
      }
    ],
    relatedCareers: ['Cloud Engineer', 'Data Analyst', 'Backend Developer'],
    relatedOpportunities: ['Tech Role Discovery Assessment']
  },
  {
    id: 3,
    title: "The Tutorial Trap: Why You're Learning but Still Can't Build Anything.",
    subtitle: 'Breaking free from passive video consumption and building true competence.',
    category: 'Beginner Mistakes',
    readTime: '7 min read',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'October 2026',
    content: [
      {
        type: 'paragraph',
        text: 'Have you ever watched a 10-hour coding tutorial, followed every single line of code on your screen, and felt like a genius? Then, the moment you closed the video and tried to build something similar on your own, your mind went completely blank.'
      },
      {
        type: 'paragraph',
        text: 'This is known as the Tutorial Trap. It is the most common psychological hurdle for self-taught learners and bootcamp students alike. Watching someone solve a problem is not the same as solving it yourself.'
      },
      {
        type: 'quote',
        text: 'Understanding code when someone else explains it is a spectator sport. Writing code from scratch is playing the game.'
      },
      {
        type: 'heading',
        text: 'How to Escape the Trap'
      },
      {
        type: 'paragraph',
        text: 'The solution is not to watch more tutorials; it is to change how you learn. Introduce friction into your study routine.'
      },
      {
        type: 'list',
        items: [
          'The 50/50 Rule: Spend 50% of your time watching or reading, and 50% building variations without instructions.',
          'The Blank Screen Test: After completing a tutorial section, close your editor and try to rebuild the exact same feature from memory.',
          'Build Projects That Fail: Intentionally choose projects slightly beyond your comfort zone so you are forced to read documentation and debug errors.'
        ]
      },
      {
        type: 'conclusion',
        text: 'Real learning happens in the struggle—when your code throws an error and you have to figure out why. Embrace the friction.'
      }
    ],
    relatedCareers: ['Software Engineer', 'Frontend Developer'],
    relatedOpportunities: ['Project-Based Learning Accelerator']
  },
  {
    id: 4,
    title: 'Learning a Skill Without Researching the Job Market.',
    subtitle: 'Ensuring your hard work aligns with real-world employer demand.',
    category: 'Beginner Mistakes',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'September 2026',
    content: [
      {
        type: 'paragraph',
        text: 'Imagine spending nine months mastering an obscure programming language or a framework that local and remote companies stopped using three years ago. Your dedication is admirable, but your employability remains zero.'
      },
      {
        type: 'paragraph',
        text: 'Before investing hundreds of hours into learning a specific technology stack, you need to conduct basic market intelligence.'
      },
      {
        type: 'heading',
        text: 'Checking the Pulse of the Industry'
      },
      {
        type: 'paragraph',
        text: 'Look at active job boards in your target market (whether local in Nairobi or remote international). Search for junior roles and note the recurring technologies.'
      },
      {
        type: 'callout',
        title: 'Key Takeaways',
        text: 'Always balance your personal passion with market realities. The sweet spot is where your interests intersect with active employer demand.'
      },
      {
        type: 'conclusion',
        text: 'Do your research early so your learning efforts translate directly into career opportunities.'
      }
    ],
    relatedCareers: ['Full-Stack Developer', 'Data Engineer'],
    relatedOpportunities: ['Tech Market Trends Report 2026']
  },
  {
    id: 5,
    title: "You Don't Need to Learn Everything to Get Into Tech.",
    subtitle: 'Embracing T-shaped skills and letting go of impossible expectations.',
    category: 'Learning Smarter',
    readTime: '6 min read',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'September 2026',
    content: [
      {
        type: 'paragraph',
        text: 'One look at modern job postings can make anyone feel unqualified. Companies often list HTML, CSS, JavaScript, TypeScript, React, Next.js, Node, Docker, AWS, GraphQL, and three years of experience for an entry-level role.'
      },
      {
        type: 'paragraph',
        text: 'Here is a secret: those job descriptions are often wish lists written by HR departments. You do not need to master every single technology on earth to get hired.'
      },
      {
        type: 'quote',
        text: 'Depth beats superficial breadth every single time. Master one stack well before dabbling in ten others.'
      },
      {
        type: 'heading',
        text: 'The T-Shaped Professional Concept'
      },
      {
        type: 'paragraph',
        text: 'Think of your skills as the letter T. The vertical bar represents deep expertise in one core area (e.g., React and JavaScript). The horizontal bar represents a general working knowledge of surrounding concepts (e.g., basic backend APIs, git version control, and UI design).'
      },
      {
        type: 'conclusion',
        text: 'Focus on building deep competence in your chosen core area. That is what employers are actually paying for.'
      }
    ],
    relatedCareers: ['Frontend Developer', 'Software Engineer'],
    relatedOpportunities: ['Focused Skill Development Roadmaps']
  },
  {
    id: 6,
    title: 'Certificates, Courses, and Bootcamps: What Actually Matters?',
    subtitle: 'Evaluating educational investments and understanding what hiring managers value.',
    category: 'Learning Smarter',
    readTime: '6 min read',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'September 2026',
    content: [
      {
        type: 'paragraph',
        text: 'With thousands of online courses, bootcamps costing thousands of dollars, and digital certificates available for every imaginable skill, learners often confuse collecting credentials with gaining capability.'
      },
      {
        type: 'paragraph',
        text: 'When a hiring manager looks at your profile, a PDF certificate rarely moves the needle. What catches their attention is proof of execution.'
      },
      {
        type: 'quote',
        text: 'Code that runs in production speaks louder than a certificate framed on a digital wall.'
      },
      {
        type: 'heading',
        text: 'What Truly Matters to Employers'
      },
      {
        type: 'list',
        items: [
          'Working projects you can demo live.',
          'Clean, readable code hosted on GitHub.',
          'Your ability to explain how you solved a difficult technical problem during an interview.'
        ]
      },
      {
        type: 'conclusion',
        text: 'Use courses and bootcamps as scaffolding, but let your personal projects be the foundation of your resume.'
      }
    ],
    relatedCareers: ['Software Engineer', 'Full-Stack Developer'],
    relatedOpportunities: ['Verified Bootcamp Directory']
  },
  {
    id: 7,
    title: 'Why Getting Your First Tech Job Can Be Harder Than Learning to Code.',
    subtitle: 'Navigating the entry-level hiring gap with strategy and persistence.',
    category: 'Jobs and Opportunities',
    readTime: '8 min read',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'August 2026',
    content: [
      {
        type: 'paragraph',
        text: 'Almost every junior developer learns a harsh truth after finishing their studies: learning how to code was the easy part. The hardest part is landing that very first role.'
      },
      {
        type: 'paragraph',
        text: 'The entry-level market is crowded with candidates who all look identical on paper—same online tutorials, same generic portfolio templates, and same resume phrasing.'
      },
      {
        type: 'quote',
        text: 'To stand out when you have zero professional experience, you must stop acting like an applicant and start acting like a problem solver.'
      },
      {
        type: 'heading',
        text: 'Strategies to Bridge the Gap'
      },
      {
        type: 'paragraph',
        text: 'Instead of submitting 300 identical applications on LinkedIn, focus on high-leverage networking, contributing to open-source projects, or building custom solutions for local businesses who lack a digital presence.'
      },
      {
        type: 'conclusion',
        text: 'Your first job in tech might not come from a traditional job board. Often, it comes from community trust, proactive outreach, and demonstrable proof of work.'
      }
    ],
    relatedCareers: ['Software Engineer', 'IT Support', 'QA Engineer'],
    relatedOpportunities: ['Junior Tech Mentorship Program', 'Local Internship Finder']
  },
  {
    id: 8,
    title: 'How to Build a Learning Roadmap That You Can Actually Follow.',
    subtitle: 'Avoiding burnout through sustainable pacing and incremental milestones.',
    category: 'Jobs and Opportunities',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'August 2026',
    content: [
      {
        type: 'paragraph',
        text: 'Consistency beats intensity. Many learners make the mistake of studying 12 hours a day for two weeks, burning out completely, and not opening their code editor again for a month.'
      },
      {
        type: 'paragraph',
        text: 'Building a sustainable learning roadmap requires treating your education like a marathon rather than a sprint.'
      },
      {
        type: 'heading',
        text: 'Designing Your Sustainable Schedule'
      },
      {
        type: 'paragraph',
        text: 'Commit to smaller, daily blocks of focused time (e.g., 90 minutes every evening) rather than massive weekend marathons. Track your progress visually so you can see your momentum compound over time.'
      },
      {
        type: 'conclusion',
        text: 'Small daily progress creates extraordinary long-term results. Protect your consistency.'
      }
    ],
    relatedCareers: ['Frontend Developer', 'Backend Developer'],
    relatedOpportunities: ['Pathfinder Weekly Study Planner']
  },
  {
    id: 9,
    title: 'The Future of Tech Has Your Name on It.',
    subtitle: 'You might be learning technology today, but tomorrow you could be the person changing it.',
    category: 'Inspiration and Future Leaders',
    readTime: '8 min read',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    featured: true,
    specialHero: true,
    author: 'Pathfinder Editorial',
    date: 'October 2026',
    content: [
      {
        type: 'paragraph',
        text: 'You might be sitting at a desk today, struggling through your first lines of code, trying to understand how APIs work, or wondering if you truly belong in technology.'
      },
      {
        type: 'paragraph',
        text: 'That feeling is completely normal. Every single technology leader, open-source creator, innovative researcher, and entrepreneur started in that exact same seat. They were once beginners too. They had questions, made silly syntax errors, learned unfamiliar concepts, and had ideas that were not always understood.'
      },
      {
        type: 'quote',
        text: 'The future of technology is not already written in Silicon Valley. It is shaped by anyone curious enough to ask what if.'
      },
      {
        type: 'heading',
        text: 'More Than Just an Entry-Level Job'
      },
      {
        type: 'paragraph',
        text: 'When we begin learning technology, our immediate goal is almost always survival: landing a job, earning a steady income, and gaining financial independence. That is a vital and honorable goal.'
      },
      {
        type: 'paragraph',
        text: 'However, do not let your vision stop at employment. By learning how software, systems, and data work, you are equipping yourself with modern superpowers. You are gaining the ability to build solutions that do not currently exist.'
      },
      {
        type: 'list',
        items: [
          'A developer who builds a tool used by thousands of small businesses.',
          'An engineer who creates software that solves a localized agricultural or healthcare challenge.',
          'An innovator who builds a company and creates employment opportunities for others in their community.',
          'A researcher who introduces fresh perspectives to global artificial intelligence ethics.'
        ]
      },
      {
        type: 'callout',
        title: 'Thought-Provoking Questions',
        text: 'What if the solution to a persistent problem in your local community comes from you? What if the next tool people depend on is something you haven’t imagined yet? Are you learning just to get a job, or are you also giving yourself the ability to create something new?'
      },
      {
        type: 'heading',
        text: 'Your Background Is Your Advantage'
      },
      {
        type: 'paragraph',
        text: 'There is a persistent myth that innovation only happens in wealthy tech hubs or among people with lifelong computer science backgrounds. That is false.'
      },
      {
        type: 'paragraph',
        text: 'Some of the most impactful software solutions come from individuals who understood real-world problems firsthand—whether in finance, logistics, education, or agriculture—and learned technology to solve them. Your unique perspective, lived experiences, and regional context are not liabilities; they are your unique competitive advantage.'
      },
      {
        type: 'quote',
        text: 'Don’t spend your entire journey trying to become the next version of someone else. Learn from those who came before you, but give yourself permission to think differently.'
      },
      {
        type: 'conclusion',
        text: 'The future of technology is wide open. Keep building, stay curious, and remember that your voice and your ideas belong in this space.'
      }
    ],
    relatedCareers: ['Software Engineer', 'Full-Stack Developer', 'Tech Entrepreneur'],
    relatedOpportunities: ['Global Innovators Grant Program', 'African Tech Community Showcase']
  },
  
  {
    id: 10,
    title: 'Is Web Development Still Worth Learning in 2026?',
    subtitle: 'With AI changing how websites are built, is becoming a web developer still a worthwhile career choice?',
    category: 'Career Insights',
    readTime: '7 min read',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'November 2026',
    content: [
      {
        type: 'paragraph',
        text: 'If you have been considering learning web development, you have probably encountered the same question repeatedly: Is it even worth it anymore? AI tools can now generate websites, write code, debug errors, and create entire application prototypes. Some people claim that learning to code is becoming unnecessary, while others insist that web development remains one of the most accessible ways to enter technology.'
      },
      {
        type: 'paragraph',
        text: 'The truth is somewhere between those extremes. AI has changed how developers work, but building useful software involves much more than generating HTML, CSS, or JavaScript. Someone still needs to understand what users need, make technical decisions, connect systems, test functionality, manage data, and maintain applications.'
      },
      {
        type: 'quote',
        text: 'The question is no longer whether AI can write code. It is whether you understand enough to build something useful with it.'
      },
      {
        type: 'heading',
        text: 'What Has Actually Changed?'
      },
      {
        type: 'paragraph',
        text: 'AI coding assistants have made several development tasks faster. Beginners can get explanations of unfamiliar concepts, generate starter components, and receive help identifying errors. Experienced developers can also automate repetitive work and spend more time on complex problems.'
      },
      {
        type: 'paragraph',
        text: 'However, generated code is not automatically good code. It can contain security vulnerabilities, inefficient solutions, accessibility problems, and mistakes that are difficult to notice without understanding the underlying concepts. Developers still need to review, test, and take responsibility for what they build.'
      },
      {
        type: 'heading',
        text: 'Is the Entry-Level Market Difficult?'
      },
      {
        type: 'paragraph',
        text: 'Yes, entering the industry can be challenging. Many junior applicants compete for a limited number of opportunities, and employers often expect practical skills rather than just course certificates. Knowing basic HTML, CSS, and JavaScript is a starting point, but it may not be enough to stand out.'
      },
      {
        type: 'paragraph',
        text: 'You will likely need to understand Git, responsive design, APIs, debugging, accessibility, and at least one modern framework such as React. Depending on the role, knowledge of TypeScript, testing, and backend fundamentals can also strengthen your profile.'
      },
      {
        type: 'callout',
        title: 'Reality Check',
        text: 'Learning web development does not guarantee a job. Treat it as a professional skill that requires practice, projects, problem-solving, and continuous learning.'
      },
      {
        type: 'heading',
        text: 'Frontend, Backend, or Fullstack?'
      },
      {
        type: 'paragraph',
        text: 'Frontend development focuses on what users see and interact with: layouts, buttons, forms, navigation, and application interfaces. Common technologies include HTML, CSS, JavaScript, React, and TypeScript.'
      },
      {
        type: 'paragraph',
        text: 'Backend development focuses on what happens behind the interface: databases, APIs, authentication, business logic, and server-side processing. Technologies include Node.js, Python, Java, PHP, and SQL databases.'
      },
      {
        type: 'paragraph',
        text: 'Fullstack development combines both areas. It can be useful for smaller teams and independent projects, but do not feel pressured to learn everything at once. Developing strong foundations in one area is a reasonable starting point.'
      },
      {
        type: 'heading',
        text: 'A Tale of Two Beginners'
      },
      {
        type: 'casestudy',
        title: 'Fictional Case Study Comparison',
        personA: {
          name: 'Person A (The AI-Dependent Learner)',
          desc: 'Uses AI to generate entire applications without studying the code. They finish several projects quickly but struggle when something breaks, when requirements change, or when asked to explain their implementation.'
        },
        personB: {
          name: 'Person B (The AI-Assisted Developer)',
          desc: 'Learns JavaScript fundamentals and builds projects independently. They use AI to explain unfamiliar concepts, review code, and explore alternative solutions, but make sure they understand and test the results.'
        },
        outcome: 'Both learners use AI, but Person B develops a stronger understanding of the technology. Their ability to investigate problems and make informed decisions gives them a more reliable foundation for professional work.'
      },
      {
        type: 'heading',
        text: 'What Should You Learn in 2026?'
      },
      {
        type: 'list',
        items: [
          'HTML and CSS: Learn how to structure and style accessible, responsive websites.',
          'JavaScript: Understand variables, functions, objects, arrays, asynchronous programming, and DOM concepts.',
          'Git and GitHub: Learn version control and how to manage your projects.',
          'React and TypeScript: Explore modern frontend development after establishing JavaScript fundamentals.',
          'APIs and backend basics: Understand how applications communicate with servers and databases.',
          'AI development tools: Learn how to use coding assistants without depending on them blindly.'
        ]
      },
      {
        type: 'heading',
        text: 'So, Should You Start Learning Web Development?'
      },
      {
        type: 'paragraph',
        text: 'If you enjoy creating digital products, solving problems, and understanding how websites and applications work, web development can still be a worthwhile path. But go into it with realistic expectations. You will need more than a few tutorials, and your first job may take longer to secure than you expect.'
      },
      {
        type: 'conclusion',
        text: 'Web development is not dead, but the way developers work is changing. Do not learn only to memorise syntax or compete with AI at generating code. Learn to understand problems, build useful applications, evaluate solutions, and work effectively with modern tools.'
      }
    ],
    relatedCareers: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    relatedOpportunities: ['Web Development Courses', 'Frontend Developer Internships']
  },
  {
    id: 11,
    title: 'Getting Started in Cybersecurity: A Beginner’s Roadmap',
    subtitle: 'Understand the foundations, explore different specialisations, and discover what it takes to enter cybersecurity.',
    category: 'Roadmap',
    readTime: '8 min read',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'November 2026',
    content: [
      {
        type: 'paragraph',
        text: 'Cybersecurity is often presented as a world of hackers, mysterious terminal commands, and people breaking into computer systems. While ethical hacking is one part of the field, cybersecurity is much broader. It involves protecting computers, networks, applications, information, and the people who use them.'
      },
      {
        type: 'paragraph',
        text: 'If you are interested in cybersecurity but have no technical background, you do not need to begin by learning advanced hacking techniques. A better approach is to understand how computers and networks work, develop security fundamentals, and gradually explore the specialisation that interests you.'
      },
      {
        type: 'quote',
        text: 'You cannot effectively protect a system if you do not understand how it works.'
      },
      {
        type: 'heading',
        text: 'First, Understand What Cybersecurity Involves'
      },
      {
        type: 'paragraph',
        text: 'Cybersecurity professionals help prevent, detect, investigate, and respond to digital threats. Their work can involve monitoring suspicious activity, securing networks, investigating incidents, testing applications for vulnerabilities, and helping organisations protect sensitive information.'
      },
      {
        type: 'paragraph',
        text: 'Not every cybersecurity professional spends their day performing penetration tests. Some investigate security alerts, manage access permissions, write security policies, analyse malware, or help organisations recover from attacks.'
      },
      {
        type: 'heading',
        text: 'Explore the Different Career Paths'
      },
      {
        type: 'paragraph',
        text: 'Before choosing a specialisation, understand what each area involves. These are some common directions beginners can research:'
      },
      {
        type: 'list',
        items: [
          'Security Analyst: Monitors systems, investigates alerts, and helps identify potential security incidents.',
          'Penetration Tester: Tests systems with permission to discover vulnerabilities before malicious attackers exploit them.',
          'Security Engineer: Designs, implements, and maintains security controls and infrastructure.',
          'Incident Responder: Investigates security incidents and helps organisations contain and recover from attacks.',
          'Digital Forensics Analyst: Examines digital evidence to understand what happened during an incident.',
          'Cloud Security Specialist: Helps protect cloud infrastructure, identities, applications, and stored information.'
        ]
      },
      {
        type: 'heading',
        text: 'A Beginner-Friendly Learning Roadmap'
      },
      {
        type: 'paragraph',
        text: 'You do not need to study all cybersecurity topics simultaneously. Build your knowledge in stages, and give yourself enough time to practise each foundation before moving forward.'
      },
      {
        type: 'list',
        items: [
          'Stage 1 — Computer Fundamentals: Understand operating systems, files, processes, hardware, and basic troubleshooting.',
          'Stage 2 — Networking: Learn IP addresses, DNS, HTTP/HTTPS, ports, protocols, routers, and how devices communicate.',
          'Stage 3 — Linux and Windows: Become comfortable using the command line, managing files, understanding permissions, and navigating operating systems.',
          'Stage 4 — Security Fundamentals: Study authentication, encryption, access control, vulnerabilities, malware, and common attack techniques.',
          'Stage 5 — Practical Labs: Practise using beginner-friendly environments such as TryHackMe and OverTheWire.',
          'Stage 6 — Choose a Specialisation: Explore security operations, penetration testing, cloud security, digital forensics, or another area.'
        ]
      },
      {
        type: 'callout',
        title: 'Important',
        text: 'Only practise security testing on systems you own or have explicit permission to test. Learning cybersecurity means understanding both technical skills and legal and ethical responsibilities.'
      },
      {
        type: 'heading',
        text: 'Which Tools Should Beginners Explore?'
      },
      {
        type: 'paragraph',
        text: 'You will encounter many tools in cybersecurity, but you do not need to install everything immediately. Start by understanding the purpose of each tool and use guided learning environments where available.'
      },
      {
        type: 'list',
        items: [
          'Linux terminal: Practise navigating and managing a Linux environment.',
          'Wireshark: Learn how to inspect and understand network traffic.',
          'Nmap: Understand network discovery and service enumeration in authorised environments.',
          'Burp Suite Community Edition: Explore web application security testing in legal practice labs.',
          'Virtual machines: Create isolated environments for safe experimentation.',
          'TryHackMe: Follow guided cybersecurity learning paths and practical exercises.'
        ]
      },
      {
        type: 'heading',
        text: 'Do You Need a Degree or Certifications?'
      },
      {
        type: 'paragraph',
        text: 'Requirements vary by employer and role. Some employers accept candidates with practical skills, relevant certifications, and demonstrable experience. Others prefer or require a degree in computer science, information technology, cybersecurity, or a related discipline.'
      },
      {
        type: 'paragraph',
        text: 'Beginner certifications worth researching include CompTIA Security+ and ISC2 Certified in Cybersecurity (CC). Check the current eligibility, examination costs, and certification requirements before committing to any programme. A certificate alone does not replace hands-on practice.'
      },
      {
        type: 'heading',
        text: 'A Tale of Two Beginners'
      },
      {
        type: 'casestudy',
        title: 'Fictional Case Study Comparison',
        personA: {
          name: 'Person A (The Tool Collector)',
          desc: 'Immediately downloads multiple security tools and follows random hacking tutorials. They can repeat commands but do not understand networking, operating systems, or why the commands work.'
        },
        personB: {
          name: 'Person B (The Foundation Builder)',
          desc: 'Starts by learning networking and Linux. They complete guided beginner labs, document what they discover, and gradually introduce security tools as their understanding improves.'
        },
        outcome: 'Person A becomes familiar with several tools but struggles to troubleshoot unfamiliar situations. Person B develops stronger foundations that make more advanced security topics easier to understand.'
      },
      {
        type: 'heading',
        text: 'How Long Does It Take?'
      },
      {
        type: 'paragraph',
        text: 'There is no universal timeline. Your progress depends on your starting knowledge, available study time, learning approach, and chosen specialisation. You might understand basic concepts within a few months, but becoming job-ready requires deeper practice and evidence of your abilities. Some advanced roles require years of experience.'
      },
      {
        type: 'conclusion',
        text: 'Cybersecurity can be a rewarding field, but it is not a shortcut into technology or simply a collection of hacking tricks. Start with the fundamentals, practise responsibly, explore different roles, and build your knowledge one stage at a time.'
      }
    ],
    relatedCareers: ['Security Analyst', 'Penetration Tester', 'Security Engineer'],
    relatedOpportunities: ['Cybersecurity Beginner Courses', 'Security Analyst Internships', 'Cybersecurity Training Programmes']
  },
  {
    id: 12,
    title: 'Understanding Artificial Intelligence and Machine Learning',
    subtitle: 'What AI and machine learning actually mean, how they differ, and what beginners should learn first.',
    category: 'Tech Foundations',
    readTime: '7 min read',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    featured: false,
    author: 'Pathfinder Editorial',
    date: 'November 2026',
    content: [
      {
        type: 'paragraph',
        text: 'Artificial intelligence is everywhere. It recommends videos, helps people write, recognises faces, translates languages, detects suspicious transactions, and powers conversational assistants. But despite using AI tools regularly, many people are unsure what actually happens behind the scenes.'
      },
      {
        type: 'paragraph',
        text: 'If you are considering a career in AI, it helps to understand that artificial intelligence is not one single technology. It is a broad field containing different approaches, techniques, and specialisations. Machine learning is one important part of that field.'
      },
      {
        type: 'quote',
        text: 'You do not need to understand every AI model to begin learning how artificial intelligence works.'
      },
      {
        type: 'heading',
        text: 'What Is Artificial Intelligence?'
      },
      {
        type: 'paragraph',
        text: 'Artificial intelligence, commonly called AI, refers to computer systems designed to perform tasks that typically require aspects of human intelligence. These tasks can include recognising patterns, understanding language, making predictions, processing images, and generating content.'
      },
      {
        type: 'paragraph',
        text: 'For example, an AI-powered assistant can interpret a question and generate a response. A navigation application can estimate traffic conditions and suggest routes. An email service can identify messages that appear to be spam.'
      },
      {
        type: 'heading',
        text: 'What Is Machine Learning?'
      },
      {
        type: 'paragraph',
        text: 'Machine learning is a branch of AI that allows computer systems to learn patterns from data and use those patterns to make predictions or decisions. Instead of writing every rule manually, developers train models using examples.'
      },
      {
        type: 'paragraph',
        text: 'Imagine you want a system to recognise spam emails. Rather than manually writing a rule for every possible spam message, you provide a machine learning model with examples of spam and legitimate emails. The model learns patterns that can help it classify new messages.'
      },
      {
        type: 'heading',
        text: 'How Are AI, Machine Learning, and Deep Learning Related?'
      },
      {
        type: 'paragraph',
        text: 'These terms are connected, but they are not interchangeable. Artificial intelligence is the broadest concept. Machine learning is a subset of AI, and deep learning is a subset of machine learning that uses multi-layered neural networks to learn complex patterns.'
      },
      {
        type: 'paragraph',
        text: 'Generative AI is another important area. It refers to models that generate new content, such as text, images, audio, or code. Many modern generative AI systems are built using deep learning techniques.'
      },
      {
        type: 'callout',
        title: 'Remember the Relationship',
        text: 'AI is the broader field. Machine learning is one approach within AI. Deep learning is one approach within machine learning.'
      },
      {
        type: 'heading',
        text: 'Where Do We See AI in Everyday Life?'
      },
      {
        type: 'list',
        items: [
          'Healthcare: Supporting medical image analysis, research, and clinical decision-making.',
          'Education: Helping learners practise concepts, receive explanations, and access personalised learning tools.',
          'Agriculture: Analysing crop images, weather information, and other data to support agricultural decisions.',
          'Cybersecurity: Identifying unusual patterns that may indicate suspicious activity.',
          'Business: Forecasting demand, analysing customer behaviour, and automating repetitive tasks.',
          'Entertainment: Recommending music, films, videos, and other content.'
        ]
      },
      {
        type: 'heading',
        text: 'What Should Beginners Learn First?'
      },
      {
        type: 'paragraph',
        text: 'If you want to build a career in AI or machine learning, begin with the foundations. You do not need to jump straight into complex neural networks or advanced research papers.'
      },
      {
        type: 'list',
        items: [
          'Python: Learn variables, functions, lists, dictionaries, loops, and object-oriented programming basics.',
          'Mathematics: Develop an understanding of basic algebra, statistics, probability, and eventually linear algebra and calculus where relevant.',
          'Data handling: Learn how to work with datasets using tools such as NumPy and pandas.',
          'Data visualisation: Explore Matplotlib and learn how to communicate patterns in data.',
          'Machine learning fundamentals: Understand training data, testing data, features, labels, overfitting, and model evaluation.',
          'Machine learning libraries: Start exploring scikit-learn before moving into frameworks such as PyTorch or TensorFlow.'
        ]
      },
      {
        type: 'heading',
        text: 'Do You Need to Be Excellent at Mathematics?'
      },
      {
        type: 'paragraph',
        text: 'Mathematics matters in AI, particularly when you move toward machine learning engineering and research. However, the amount and depth of mathematics required depend on the role. Someone building applications with existing AI APIs may need a different mathematical background from someone developing new machine learning algorithms.'
      },
      {
        type: 'paragraph',
        text: 'You can begin learning Python and working with simple datasets while gradually improving your mathematical foundations. Do not let the idea of advanced mathematics prevent you from exploring the field, but do not assume you can avoid it entirely if you want to specialise in machine learning.'
      },
      {
        type: 'heading',
        text: 'A Tale of Two AI Beginners'
      },
      {
        type: 'casestudy',
        title: 'Fictional Case Study Comparison',
        personA: {
          name: 'Person A (The Model Jumper)',
          desc: 'Immediately starts experimenting with advanced AI frameworks and large language models. They copy notebooks and run existing models but have difficulty understanding datasets, model evaluation, or why their results are unreliable.'
        },
        personB: {
          name: 'Person B (The Foundation Learner)',
          desc: 'Begins with Python and basic statistics. They learn how to clean data, explore datasets, and train simple machine learning models before gradually exploring more advanced tools.'
        },
        outcome: 'Person A gains early exposure to impressive tools, while Person B develops a clearer understanding of the underlying concepts. Both can benefit from experimentation, but strong foundations make it easier to investigate and improve AI systems.'
      },
      {
        type: 'heading',
        text: 'Which AI Career Could You Explore?'
      },
      {
        type: 'list',
        items: [
          'Machine Learning Engineer: Builds, trains, evaluates, and deploys machine learning systems.',
          'AI Engineer: Develops applications and systems that use AI models and services.',
          'Data Scientist: Uses statistics, programming, and data analysis to investigate problems and build predictive models.',
          'AI Researcher: Investigates new methods, models, and techniques in artificial intelligence.',
          'Natural Language Processing Engineer: Works on systems that process and understand human language.',
          'Computer Vision Engineer: Develops systems that interpret images and video.'
        ]
      },
      {
        type: 'conclusion',
        text: 'Artificial intelligence is a broad and evolving field, and there is more than one way to enter it. Start by understanding the concepts, build your programming and data skills, and explore the specialisation that interests you. You do not have to become an AI researcher to work with AI, but you should understand the tools and systems you use.'
      }
    ],
    relatedCareers: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist'],
    relatedOpportunities: ['Introduction to AI Courses', 'Machine Learning Bootcamps', 'AI Internships']
  }
  
];

const CATEGORIES = [
  'All Articles',
  'Starting Your Tech Journey',
  'Beginner Mistakes',
  'Choosing a Career Path',
  'Learning Smarter',
  'Jobs and Opportunities',
  'Inspiration and Future Leaders'
];

export default function PathfinderArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [activeArticleId, setActiveArticleId] = useState(null);

  // Scroll to top of window whenever activeArticleId changes so reading view is immediately responsive and visible
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeArticleId]);

  // Filter articles
  const filteredArticles = selectedCategory === 'All Articles'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  const featuredArticle = ARTICLES.find(a => a.featured && !a.specialHero) || ARTICLES[0];
  const specialArticle = ARTICLES.find(a => a.specialHero) || ARTICLES[8];

  const activeArticle = ARTICLES.find(a => a.id === activeArticleId);

  // ==========================================
  // ARTICLE READING VIEW
  // ==========================================
  if (activeArticle) {
    return (
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <article className="max-w-4xl mx-auto">
          
          {/* Back Navigation */}
          <button
            onClick={() => setActiveArticleId(null)}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition transform group-hover:-translate-x-1" /> Back to Articles
          </button>

          {/* Article Header */}
          <div className="space-y-6 mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                {activeArticle.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}
              </span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {activeArticle.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {activeArticle.subtitle}
            </p>

            <div className="flex items-center gap-3 pt-2 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                PE
              </div>
              <div>
                <span className="block font-bold text-slate-900 dark:text-white text-sm">{activeArticle.author}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Pathfinder Editorial Team</span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-800 aspect-[16/9] bg-slate-200 dark:bg-slate-800">
            <img
              src={activeArticle.thumbnail}
              alt={activeArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content Container (Comfortable narrow width: ~720px) */}
          <div className="max-w-[720px] mx-auto space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-[1.7]">
            {activeArticle.content.map((block, idx) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={idx} className="font-normal">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white pt-6 pb-2 tracking-tight">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="my-8 p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border-l-4 border-blue-600 dark:border-blue-500 text-slate-900 dark:text-slate-100 font-semibold text-lg italic shadow-sm">
                    "{block.text}"
                  </blockquote>
                );
              }
              if (block.type === 'callout') {
                return (
                  <div key={idx} className="my-8 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 text-sm uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> {block.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                );
              }
              if (block.type === 'casestudy') {
                return (
                  <div key={idx} className="my-8 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-4 shadow-sm">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {block.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span className="font-bold text-slate-900 dark:text-white text-xs block">{block.personA.name}</span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{block.personA.desc}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span className="font-bold text-blue-600 dark:text-blue-400 text-xs block">{block.personB.name}</span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{block.personB.desc}</p>
                      </div>
                    </div>
                    <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                      <strong className="text-slate-900 dark:text-white">Outcome:</strong> {block.outcome}
                    </div>
                  </div>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={idx} className="my-6 space-y-3 pl-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-base sm:text-lg">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'conclusion') {
                return (
                  <div key={idx} className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 font-medium text-slate-900 dark:text-white text-lg">
                    {block.text}
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Related Career Categories & Opportunities Footer inside Article */}
          <div className="max-w-[720px] mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-3 shadow-sm">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Related Career Categories
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeArticle.relatedCareers.map((c, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-3 shadow-sm">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Recommended Opportunities
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeArticle.relatedOpportunities.map((o, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <button
                onClick={() => setActiveArticleId(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-sm shadow-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back to All Articles
              </button>
            </div>
          </div>

        </article>
      </div>
    );
  }

  // ==========================================
  // ARTICLES LANDING PAGE
  // ==========================================
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto space-y-10 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase shadow-sm">
              <BookOpen className="w-4 h-4" /> Pathfinder Editorial
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Real Talk. Better Decisions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400">Bigger Possibilities.</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              Technology careers come with opportunities, challenges, and plenty of questions. Explore honest advice, relatable experiences, and practical guidance to help you find your path.
            </p>
          </div>

          {/* Featured Article Banner in Hero */}
          <div 
            onClick={() => setActiveArticleId(featuredArticle.id)}
            className="group cursor-pointer rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                    {featuredArticle.category}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition tracking-tight">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {featuredArticle.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
                Read Featured Article <ArrowRight className="w-4 h-4 transition transform group-hover:translate-x-1" />
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src={featuredArticle.thumbnail}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Category Filter & Article Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        
        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-xl shrink-0 transition cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Special Article Highlight (The Future of Tech Has Your Name on It) */}
        {selectedCategory === 'All Articles' || selectedCategory === 'Inspiration and Future Leaders' ? (
          <div 
            onClick={() => setActiveArticleId(specialArticle.id)}
            className="group cursor-pointer rounded-3xl bg-blue-900 dark:bg-blue-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-blue-800/50"
          >
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            
            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-700 text-blue-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-blue-400" /> Special Editorial Piece
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white group-hover:text-blue-200 transition">
                {specialArticle.title}
              </h2>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                {specialArticle.subtitle}
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-blue-300">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {specialArticle.readTime}</span>
                <span>•</span>
                <span>Inspiration and Future Leaders</span>
              </div>

              <div className="pt-4">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-900 font-bold text-sm shadow-lg hover:bg-blue-50 transition">
                  Read Special Article <ArrowRight className="w-4 h-4 transition transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {/* Standard Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            // Skip the special hero if already displayed above or featured
            if (article.specialHero && selectedCategory === 'All Articles') return null;

            return (
              <div
                key={article.id}
                onClick={() => setActiveArticleId(article.id)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[11px] font-bold text-slate-900 dark:text-white shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" /> <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {article.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1">
                      Read Article <ArrowRight className="w-3.5 h-3.5 transition transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] text-slate-400">{article.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Editorial Closing Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Have a question or topic you want us to explore?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Pathfinder is built to provide honest guidance. Reach out or explore our career paths and learning roadmaps to take your next step.
          </p>
        </div>
      </section>

    </div>
  );
}