'use client';

import React, { useState, useMemo } from 'react';
import {
  Layout,
  UserCheck,
  Briefcase,
  Search,
  BookOpen,
  GraduationCap,
  Award,
  Layers,
  Palette,
  Monitor,
  Smartphone,
  Eye,
  Video,
  PenTool,
  CheckCircle2,
  Clock,
  MapPin,
  Globe,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Filter,
  Sparkles,
  SlidersHorizontal,
  Compass,
  Code
} from 'lucide-react';

// ==========================================
// DESIGN & UI/UX CAREERS DATASET
// ==========================================
const DESIGN_CAREERS = [
  {
    id: 'ui-designer',
    title: 'UI Designer',
    icon: Monitor,
    desc: 'Designs the visual and interactive interfaces of websites, mobile applications, and digital products.',
    techs: ['Figma', 'Adobe XD', 'Sketch', 'Design Systems', 'Prototyping'],
    overview: {
      tagline: 'Translating brand guidelines and wireframes into stunning, pixel-perfect, and accessible digital interfaces.',
      jobTitles: ['UI Designer', 'Visual Designer', 'Digital Product Stylist'],
      targetIndustries: ['Tech & SaaS', 'Digital Agencies', 'E-commerce', 'Fintech'],
      responsibilities: [
        'Creating high-fidelity design layouts and interactive prototypes.',
        'Establishing typography scales, color palettes, and accessible contrast ratios.',
        'Collaborating with frontend developers to ensure accurate visual implementation.'
      ]
    },
    ratings: {
      difficulty: { score: 5, detail: 'Accessible for visual learners who master design principles and UI tools like Figma.' },
      competition: { score: 8, detail: 'High volume of junior designers entering the market with basic certificate portfolios.' },
      juniorJobs: { score: 7, detail: 'Steady local demand among Nairobi digital agencies and tech startups.' },
      accessibility: { score: 9, detail: 'Abundant free tutorials, community design files, and accessible software tiers.' }
    },
    duration: {
      fundamentals: '1.5 Months',
      practicalLabs: '2.5 Months',
      entryReady: '4 to 6 Months',
      factors: ['Eye for visual balance and typography', 'Familiarity with component-based design in Figma', 'Quality of 3-4 capstone portfolio projects']
    },
    salary: {
      kenya: { junior: 'KES 60,000 - 110,000 / mo', mid: 'KES 130,000 - 240,000 / mo', senior: 'KES 280,000+ / mo', source: 'Local Design Salary Survey 2026' },
      international: { junior: '$35,000 - $55,000 / yr', mid: '$70,000 - $110,000 / yr', senior: '$125,000+ / yr', source: 'Global UI/UX Compensation Index 2026' }
    },
    stack: {
      Tools: ['Figma', 'Adobe XD', 'Sketch'],
      Systems: ['Design Tokens', 'Auto Layout', 'Component Libraries'],
      Handoff: ['Zeplin', 'Dev Mode']
    },
    juniorMarket: {
      requirements: ['Strong Figma portfolio demonstrating responsive design', 'Knowledge of accessibility (WCAG)', 'Understanding of developer handoff'],
      certifications: ['Google UX Design Professional Certificate (UI modules)', 'Interaction Design Foundation (IxDF) UI Certificate'],
      degreeRequirement: 'Not required; portfolios and practical design assessments dictate hiring.',
      remoteAvailability: 'Very high; remote agency and freelance UI work is widely available.',
      beginnerChallenges: 'Differentiating portfolio case studies beyond generic Dribbble shots.'
    },
    faqs: [
      { q: 'Do UI designers need to know how to code?', a: 'Advanced coding is not required, but understanding CSS fundamentals, flexbox, and layout behavior makes collaboration with developers significantly smoother.' }
    ]
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    icon: UserCheck,
    desc: 'Improves usability, user accessibility, and overall satisfaction when interacting with digital products.',
    techs: ['User Research', 'Wireframing', 'Information Architecture', 'Figma', 'Usability Testing'],
    overview: {
      tagline: 'Uncovering user pain points and designing intuitive journeys that solve real human problems.',
      jobTitles: ['UX Designer', 'Product Experience Designer', 'User Journey Specialist'],
      targetIndustries: ['Fintech', 'Enterprise Software', 'E-commerce', 'HealthTech'],
      responsibilities: [
        'Conducting user interviews, surveys, and contextual inquiries.',
        'Synthesizing qualitative research into user personas, journey maps, and information architecture.',
        'Designing low-fidelity wireframes and conducting iterative usability tests.'
      ]
    },
    ratings: {
      difficulty: { score: 6, detail: 'Requires strong empathy, critical thinking, and structured problem-solving methodologies.' },
      competition: { score: 7, detail: 'Competitive market; employers heavily weight case study depth over certificates.' },
      juniorJobs: { score: 6, detail: 'Growing local demand in corporate banking, telecom, and fintech sectors.' },
      accessibility: { score: 8, detail: 'Plentiful UX case study guides, books, and online learning modules.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '3 Months',
      entryReady: '5 to 7 Months',
      factors: ['Understanding of human-centered design principles', 'Ability to conduct and synthesize user interviews', 'Case study storytelling']
    },
    salary: {
      kenya: { junior: 'KES 70,000 - 120,000 / mo', mid: 'KES 150,000 - 260,000 / mo', senior: 'KES 300,000+ / mo', source: 'Local Design Salary Survey 2026' },
      international: { junior: '$40,000 - $65,000 / yr', mid: '$80,000 - $125,000 / yr', senior: '$140,000+ / yr', source: 'Global UX Compensation Index 2026' }
    },
    stack: {
      Research: ['User Interviews', 'Surveys', 'Card Sorting', 'Tree Testing'],
      Prototyping: ['Figma', 'Miro', 'Balsamiq'],
      Testing: ['Maze', 'UserTesting', 'Hotjar']
    },
    juniorMarket: {
      requirements: ['Detailed case studies showing problem-solving process', 'Familiarity with wireframing and user testing', 'Strong collaboration and communication skills'],
      certifications: ['Google UX Design Professional Certificate', 'Nielsen Norman Group (NN/g) UX Certification'],
      degreeRequirement: 'Flexible; degrees in Psychology, Computer Science, Business, or Design are common.',
      remoteAvailability: 'High, especially for product-led tech startups and remote agencies.',
      beginnerChallenges: 'Demonstrating real user research when building student portfolio projects.'
    },
    faqs: [
      { q: 'What is the difference between UI and UX design?', a: 'UX focuses on the underlying logic, user research, flow, and problem-solving. UI focuses on the visual presentation, typography, colors, and interactive polish.' }
    ]
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    icon: Layout,
    desc: 'Works across the entire product lifecycle—from user research and strategy to UI execution and metrics.',
    techs: ['Product Strategy', 'UX Research', 'UI Design', 'Design Systems', 'Data Metrics'],
    overview: {
      tagline: 'Owning end-to-end product experiences, balancing business goals with user needs and technical constraints.',
      jobTitles: ['Product Designer', 'Senior Product Designer', 'Lead UX/UI Designer'],
      targetIndustries: ['Tech Scaleups', 'Fintech', 'SaaS', 'E-commerce Platforms'],
      responsibilities: [
        'Defining product strategy and feature roadmaps alongside product managers and engineers.',
        'Executing both deep UX research and polished high-fidelity UI interfaces.',
        'Tracking post-launch product metrics and iterating based on user feedback.'
      ]
    },
    ratings: {
      difficulty: { score: 8, detail: 'Demands dual mastery of both UX research thinking and elite UI execution.' },
      competition: { score: 6, detail: 'Mid-to-senior product designers are in exceptionally high demand.' },
      juniorJobs: { score: 5, detail: 'Companies often seek experienced product designers who can work autonomously.' },
      accessibility: { score: 7, detail: 'Requires bridging multiple disciplines including business metrics and technical feasibility.' }
    },
    duration: {
      fundamentals: '3 Months',
      practicalLabs: '5 Months',
      entryReady: '9 to 12 Months',
      factors: ['Broad multidisciplinary skill set', 'Understanding of business KPIs and product metrics', 'Stakeholder communication']
    },
    salary: {
      kenya: { junior: 'KES 90,000 - 150,000 / mo', mid: 'KES 200,000 - 350,000 / mo', senior: 'KES 400,000+ / mo', source: 'Local Tech Salary Survey 2026' },
      international: { junior: '$55,000 - $85,000 / yr', mid: '$110,000 - $160,000 / yr', senior: '$180,000+ / yr', source: 'Global Product Design Index 2026' }
    },
    stack: {
      Strategy: ['Product Roadmapping', 'KPI Tracking', 'Competitive Analysis'],
      Execution: ['Figma', 'Advanced Prototyping', 'Design Systems'],
      Collaboration: ['Jira', 'Linear', 'GitHub']
    },
    juniorMarket: {
      requirements: ['Holistic portfolio showing end-to-end product thinking', 'Understanding of technical constraints', 'Cross-functional teamwork experience'],
      certifications: ['Product School Product Management Foundations', 'Advanced Interaction Design Certifications'],
      degreeRequirement: 'Open; multidisciplinary backgrounds strongly valued.',
      remoteAvailability: 'Very high across international remote tech companies.',
      beginnerChallenges: 'Transitioning from isolated screen design to holistic product problem-solving.'
    },
    faqs: [
      { q: 'Is a Product Designer different from a UI/UX Designer?', a: 'Product designers typically have a broader scope involving business strategy, metrics, and end-to-end ownership, whereas UI/UX designers may specialize more narrowly in interface or research.' }
    ]
  },
  {
    id: 'ux-researcher',
    title: 'UX Researcher',
    icon: Search,
    desc: 'Studies user behaviors, motivations, and needs through observational studies, interviews, and usability evaluations.',
    techs: ['Qualitative Research', 'Quantitative Analysis', 'Surveys', 'Usability Testing', 'Persona Mapping'],
    overview: {
      tagline: 'Serving as the voice of the user by uncovering deep behavioral insights that drive product innovation.',
      jobTitles: ['UX Researcher', 'User Insight Specialist', 'Design Researcher'],
      targetIndustries: ['Large Enterprise Tech', 'Financial Institutions', 'Telecommunications', 'Research Agencies'],
      responsibilities: [
        'Planning and moderating user interviews, diary studies, and usability lab sessions.',
        'Analyzing qualitative transcripts and quantitative survey data to identify patterns.',
        'Presenting actionable research insights to executive stakeholders and product teams.'
      ]
    },
    ratings: {
      difficulty: { score: 7, detail: 'Requires strong psychology, statistical literacy, and qualitative interviewing acumen.' },
      competition: { score: 5, detail: 'Specialized niche with fewer direct applicants than general UI/UX.' },
      juniorJobs: { score: 5, detail: 'Often found in larger tech firms, banks, and telecom companies in Nairobi.' },
      accessibility: { score: 6, detail: 'Requires deep reading, methodology training, and rigorous analytical practice.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '4 Months',
      entryReady: '8 Months',
      factors: ['Background in social sciences, statistics, or psychology', 'Proficiency in research synthesis tools', 'Clear written reporting']
    },
    salary: {
      kenya: { junior: 'KES 80,000 - 130,000 / mo', mid: 'KES 170,000 - 280,000 / mo', senior: 'KES 350,000+ / mo', source: 'Research & Insights Salary Index 2026' },
      international: { junior: '$50,000 - $75,000 / yr', mid: '$100,000 - $145,000 / yr', senior: '$165,000+ / yr', source: 'Global UX Research Compensation 2026' }
    },
    stack: {
      Methods: ['Moderated Interviews', 'Unmoderated Testing', 'Diary Studies'],
      Tools: ['Dovetail', 'Maze', 'Qualtrics', 'UserTesting'],
      Analysis: ['Affinity Diagramming', 'Thematic Analysis']
    },
    juniorMarket: {
      requirements: ['Demonstrated research case studies with clear business impact', 'Knowledge of research ethics and bias mitigation', 'Strong synthesis skills'],
      certifications: ['User Research Specialist Certifications', 'NN/g UX Research Master Badge'],
      degreeRequirement: 'Psychology, Sociology, Anthropology, Statistics, or Human-Computer Interaction degrees preferred.',
      remoteAvailability: 'High for remote research consultancy and digital agencies.',
      beginnerChallenges: 'Securing dedicated user research budgets in early-stage startups.'
    },
    faqs: [
      { q: 'Do UX Researchers need to know how to design interfaces in Figma?', a: 'Basic familiarity is helpful to understand wireframes, but your primary deliverable is research insights, personas, and usability reports.' }
    ]
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    icon: Palette,
    desc: 'Creates visual communications, branding assets, marketing collateral, and typography layouts.',
    techs: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Typography'],
    overview: {
      tagline: 'Crafting compelling visual stories and brand touchpoints across print and digital media.',
      jobTitles: ['Graphic Designer', 'Brand Visualizer', 'Creative Content Designer'],
      targetIndustries: ['Advertising Agencies', 'Media & Publishing', 'FMCG', 'Corporate Marketing'],
      responsibilities: [
        'Designing marketing collateral, social media creatives, brochures, and packaging.',
        'Developing vector illustrations, logos, and promotional graphics.',
        'Ensuring visual brand consistency across all campaign touchpoints.'
      ]
    },
    ratings: {
      difficulty: { score: 4, detail: 'Highly accessible entry point for creative individuals focusing on raster and vector tools.' },
      competition: { score: 9, detail: 'Extremely high competition for entry-level graphic design roles.' },
      juniorJobs: { score: 7, detail: 'Abundant opportunities across marketing agencies and corporate communications in Kenya.' },
      accessibility: { score: 9, detail: 'Countless tutorials, design assets, and affordable creative software suites.' }
    },
    duration: {
      fundamentals: '1 Month',
      practicalLabs: '2 Months',
      entryReady: '3 to 4 Months',
      factors: ['Mastery of Adobe Illustrator and Photoshop', 'Understanding of color theory and grid systems', 'Creative portfolio quality']
    },
    salary: {
      kenya: { junior: 'KES 40,000 - 80,000 / mo', mid: 'KES 90,000 - 160,000 / mo', senior: 'KES 200,000+ / mo', source: 'Creative Industry Salary Index 2026' },
      international: { junior: '$30,000 - $48,000 / yr', mid: '$60,000 - $90,000 / yr', senior: '$110,000+ / yr', source: 'Global Graphic Design Compensation 2026' }
    },
    stack: {
      Raster: ['Adobe Photoshop', 'Photopea'],
      Vector: ['Adobe Illustrator', 'Inkscape'],
      Layout: ['Adobe InDesign', 'Canva Pro']
    },
    juniorMarket: {
      requirements: ['Strong Behance or portfolio showcasing vector mastery and typography', 'Understanding of print vs digital specs', 'Creativity and speed'],
      certifications: ['Adobe Certified Professional in Graphic Design & Illustration'],
      degreeRequirement: 'Open; portfolio quality outweighs formal academic credentials.',
      remoteAvailability: 'Moderate to high for freelance and agency contract work.',
      beginnerChallenges: 'Standing out in a crowded market of general graphic designers.'
    },
    faqs: [
      { q: 'Is graphic design the same as UI design?', a: 'No. Graphic design focuses primarily on static visual communication, branding, and print/digital marketing. UI design focuses specifically on interactive digital screen layouts for apps and websites.' }
    ]
  },
  {
    id: 'web-designer',
    title: 'Web Designer',
    icon: Code,
    desc: 'Designs website layouts, visual systems, and landing pages, often bridging design with front-end implementation.',
    techs: ['Figma', 'Webflow', 'WordPress', 'HTML/CSS', 'Responsive Design'],
    overview: {
      tagline: 'Building visually striking, conversion-optimized websites using modern visual builders and code.',
      jobTitles: ['Web Designer', 'Webflow Developer', 'Digital Marketing Designer'],
      targetIndustries: ['Digital Agencies', 'Freelance & Consultancies', 'SaaS Marketing', 'E-commerce'],
      responsibilities: [
        'Designing and launching marketing websites and landing pages.',
        'Building responsive layouts using visual development tools like Webflow.',
        'Optimizing site performance, accessibility, and conversion rates.'
      ]
    },
    ratings: {
      difficulty: { score: 5, detail: 'Accessible blend of visual design and no-code/low-code web development.' },
      competition: { score: 7, detail: 'High demand for web designers who can take a site from Figma to live launch.' },
      juniorJobs: { score: 8, detail: 'Very strong demand among SMEs and digital marketing agencies in Kenya.' },
      accessibility: { score: 8, detail: 'Plentiful tutorials on Webflow, WordPress, and responsive design.' }
    },
    duration: {
      fundamentals: '1.5 Months',
      practicalLabs: '2.5 Months',
      entryReady: '4 to 5 Months',
      factors: ['Figma layout skills', 'Understanding of CSS box model and responsive breakpoints', 'Webflow or WordPress proficiency']
    },
    salary: {
      kenya: { junior: 'KES 50,000 - 95,000 / mo', mid: 'KES 110,000 - 200,000 / mo', senior: 'KES 250,000+ / mo', source: 'Digital Agency Salary Survey 2026' },
      international: { junior: '$35,000 - $55,000 / yr', mid: '$70,000 - $105,000 / yr', senior: '$130,000+ / yr', source: 'Global Web Design Compensation 2026' }
    },
    stack: {
      Design: ['Figma', 'Adobe XD'],
      NoCode: ['Webflow', 'Framer', 'WordPress / Elementor'],
      Frontend: ['HTML5', 'CSS3 / Tailwind Basics']
    },
    juniorMarket: {
      requirements: ['Live portfolio of responsive websites built in Webflow or WordPress', 'Understanding of SEO and conversion principles', 'Basic CSS knowledge'],
      certifications: ['Webflow Certified Professional', 'Google Mobile Web Specialist'],
      degreeRequirement: 'Not required; live shipped websites are the primary hiring currency.',
      remoteAvailability: 'Very high; ideal for freelance work and remote agency contracts.',
      beginnerChallenges: 'Managing client expectations and technical hosting edge cases.'
    },
    faqs: [
      { q: 'Do web designers need to code?', a: 'Traditional web designers used Photoshop and handed off static images. Modern web designers use tools like Webflow or Framer to build live, responsive sites directly.' }
    ]
  },
  {
    id: 'motion-designer',
    title: 'Motion Designer',
    icon: Video,
    desc: 'Creates animations, kinetic typography, UI micro-interactions, and motion graphics for digital products and media.',
    techs: ['After Effects', 'Blender', 'Premiere Pro', 'Lottie', 'Figma Motion'],
    overview: {
      tagline: 'Bringing static interfaces and brand stories to life through fluid animation and visual effects.',
      jobTitles: ['Motion Designer', 'Animator', 'UI Motion Specialist'],
      targetIndustries: ['Media & Entertainment', 'Tech Scaleups', 'Marketing Agencies', 'Gaming'],
      responsibilities: [
        'Animating UI micro-interactions, onboarding flows, and product explainer videos.',
        'Creating dynamic brand motion assets for social media and advertising.',
        'Exporting lightweight animations using Lottie or Rive for web and mobile integration.'
      ]
    },
    ratings: {
      difficulty: { score: 8, detail: 'Requires mastery of timing, easing curves, keyframing, and animation software.' },
      competition: { score: 5, detail: 'Niche specialization with high reward for exceptional visual talent.' },
      juniorJobs: { score: 5, detail: 'Growing demand as mobile apps and marketing campaigns incorporate rich motion.' },
      accessibility: { score: 6, detail: 'Steep learning curve mastering software like After Effects and Lottie integration.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '4 Months',
      entryReady: '8 Months',
      factors: ['Understanding of animation principles (anticipation, easing, follow-through)', 'Software proficiency in After Effects or Rive', 'Showreel quality']
    },
    salary: {
      kenya: { junior: 'KES 60,000 - 110,000 / mo', mid: 'KES 130,000 - 240,000 / mo', senior: 'KES 300,000+ / mo', source: 'Creative Media Salary Index 2026' },
      international: { junior: '$45,000 - $70,000 / yr', mid: '$85,000 - $130,000 / yr', senior: '$150,000+ / yr', source: 'Global Motion Design Index 2026' }
    },
    stack: {
      Animation: ['Adobe After Effects', 'Rive', 'LottieFiles'],
      Editing: ['Adobe Premiere Pro', 'CapCut Pro'],
      '3D': ['Blender', 'Cinema 4D (Lite)']
    },
    juniorMarket: {
      requirements: ['A compelling 60-second motion reel', 'Knowledge of UI prototyping motion in Figma', 'Understanding of file formats for web/app deployment'],
      certifications: ['School of Motion Certificates', 'Adobe Certified Professional in Video & Motion'],
      degreeRequirement: 'Open; showreel and portfolio are paramount.',
      remoteAvailability: 'High for remote freelance animators and production houses.',
      beginnerChallenges: 'Building a polished showreel without prior client work.'
    },
    faqs: [
      { q: 'Is motion design important in UX?', a: 'Yes! UI micro-interactions and motion guide user attention, provide feedback on button clicks, and dramatically improve perceived app polish.' }
    ]
  },
  {
    id: 'brand-designer',
    title: 'Brand Designer',
    icon: PenTool,
    desc: 'Develops comprehensive brand identities, visual systems, guidelines, and strategic brand positioning.',
    techs: ['Brand Strategy', 'Logo Design', 'Typography', 'Adobe Illustrator', 'Brand Guidelines'],
    overview: {
      tagline: 'Shaping how the world perceives companies by creating memorable visual identities and design languages.',
      jobTitles: ['Brand Designer', 'Visual Identity Specialist', 'Brand Strategist'],
      targetIndustries: ['Design Consultancies', 'Advertising Agencies', 'Enterprise Corporations', 'Startups'],
      responsibilities: [
        'Conducting brand discovery workshops and defining core visual positioning.',
        'Designing distinctive logos, color systems, typography pairings, and iconography.',
        'Authoring comprehensive brand style guides for internal and external teams.'
      ]
    },
    ratings: {
      difficulty: { score: 7, detail: 'Combines abstract strategic thinking with meticulous vector execution.' },
      competition: { score: 6, detail: 'Competitive field requiring strong conceptual portfolio storytelling.' },
      juniorJobs: { score: 5, detail: 'Often agency-led roles requiring guidance from senior directors.' },
      accessibility: { score: 7, detail: 'Requires studying design history, semiotics, and advanced vector tools.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '3 Months',
      entryReady: '7 to 9 Months',
      factors: ['Strategic branding theory', 'Advanced vector illustration skills', 'Ability to articulate design rationale']
    },
    salary: {
      kenya: { junior: 'KES 65,000 - 120,000 / mo', mid: 'KES 140,000 - 250,000 / mo', senior: 'KES 320,000+ / mo', source: 'Agency Brand Survey 2026' },
      international: { junior: '$45,000 - $70,000 / yr', mid: '$90,000 - $135,000 / yr', senior: '$160,000+ / yr', source: 'Global Brand Design Index 2026' }
    },
    stack: {
      Vector: ['Adobe Illustrator', 'Vectorstyler'],
      Presentation: ['Keynote', 'Figma', 'InDesign'],
      Moodboards: ['Milanote', 'Pinterest', 'Are.na']
    },
    juniorMarket: {
      requirements: ['Robust brand identity case studies showing strategy through to execution', 'Mastery of logo design and grid systems', 'Clear presentation skills'],
      certifications: ['FutureLondonAcademy Brand Masterclasses', 'Design Management Certifications'],
      degreeRequirement: 'Fine Arts, Graphic Design, or Visual Communication degrees are common.',
      remoteAvailability: 'Moderate to high for freelance brand consultants.',
      beginnerChallenges: 'Proving strategic rationale behind aesthetic design choices.'
    },
    faqs: [
      { q: 'Is brand design just making logos?', a: 'No. A logo is just one mark. Brand design encompasses voice, color psychology, typography rules, packaging, imagery style, and overall brand experience.' }
    ]
  },
  {
    id: 'interaction-designer',
    title: 'Interaction Designer',
    icon: Eye,
    desc: 'Focuses on how users interact with digital products, designing engaging behaviors, feedback loops, and tactile states.',
    techs: ['Micro-interactions', 'Prototyping', 'Figma', 'Behavioral Psychology', 'User Flows'],
    overview: {
      tagline: 'Crafting intuitive, responsive, and delightful digital behaviors for every user action.',
      jobTitles: ['Interaction Designer (IxD)', 'Product Animator', 'UI Behavior Specialist'],
      targetIndustries: ['Consumer Tech', 'SaaS', 'Mobile App Studios', 'Gaming'],
      responsibilities: [
        'Designing state transitions, hover effects, loading states, and error handling.',
        'Prototyping complex multi-step user workflows to test tactile feel.',
        'Collaborating with engineers to establish interaction guidelines and specs.'
      ]
    },
    ratings: {
      difficulty: { score: 7, detail: 'Combines cognitive psychology, product design, and advanced prototyping.' },
      competition: { score: 5, detail: 'Specialized discipline within product design teams.' },
      juniorJobs: { score: 5, detail: 'Usually hired as specialized UI/UX or product designers.' },
      accessibility: { score: 7, detail: 'Requires strong understanding of human behavior and prototyping tools.' }
    },
    duration: {
      fundamentals: '2 Months',
      practicalLabs: '3 Months',
      entryReady: '6 to 8 Months',
      factors: ['Understanding of human-computer interaction (HCI)', 'Advanced prototyping skills', 'Attention to detail']
    },
    salary: {
      kenya: { junior: 'KES 75,000 - 130,000 / mo', mid: 'KES 160,000 - 280,000 / mo', senior: 'KES 350,000+ / mo', source: 'Tech Design Compensation 2026' },
      international: { junior: '$50,000 - $75,000 / yr', mid: '$95,000 - $140,000 / yr', senior: '$170,000+ / yr', source: 'Global IxD Compensation Index 2026' }
    },
    stack: {
      Prototyping: ['Figma Advanced Smart Animate', 'ProtoPie', 'Framer'],
      Research: ['HCI Principles', 'Cognitive Load Theory']
    },
    juniorMarket: {
      requirements: ['Interactive prototypes demonstrating edge cases and micro-interactions', 'Understanding of user feedback loops', 'Figma variables mastery'],
      certifications: ['Interaction Design Foundation (IxD) Certifications'],
      degreeRequirement: 'HCI, Psychology, or Design degrees preferred.',
      remoteAvailability: 'High for remote product teams.',
      beginnerChallenges: 'Moving beyond static screens to truly dynamic interactive thinking.'
    },
    faqs: [
      { q: 'How does Interaction Design differ from UI Design?', a: 'UI design covers the static visual appearance, whereas Interaction Design focuses specifically on how the interface behaves, reacts, and transitions when touched or clicked.' }
    ]
  },
  {
    id: 'design-systems-designer',
    title: 'Design Systems Designer',
    icon: Layers,
    desc: 'Creates and maintains reusable component libraries, design tokens, documentation, and governance frameworks.',
    techs: ['Figma Tokens', 'Component Architecture', 'Documentation', 'Design Ops', 'Accessibility'],
    overview: {
      tagline: 'Scaling design consistency and accelerating engineering velocity through unified design systems.',
      jobTitles: ['Design Systems Engineer', 'Design Systems Specialist', 'Design Ops Lead'],
      targetIndustries: ['Enterprise Tech', 'Fintech Giants', 'Large E-commerce', 'Banking'],
      responsibilities: [
        'Building and maintaining robust, accessible component libraries in Figma.',
        'Establishing design tokens (colors, spacing, typography) that sync with code repositories.',
        'Writing clear usage guidelines and collaborating with frontend engineers.'
      ]
    },
    ratings: {
      difficulty: { score: 9, detail: 'Demands advanced Figma component architecture and deep understanding of code.' },
      competition: { score: 4, detail: 'Advanced specialist role requiring senior product design experience.' },
      juniorJobs: { score: 4, detail: 'Rarely entry-level; typically filled by experienced product or UI designers.' },
      accessibility: { score: 6, detail: 'Requires sophisticated knowledge of design tools and token workflows.' }
    },
    duration: {
      fundamentals: '4 Months',
      practicalLabs: '6 Months',
      entryReady: '12+ Months (Senior Specialisation)',
      factors: ['Advanced Figma variants, auto-layout, and tokens', 'Collaboration with engineering teams', 'Systematic thinking']
    },
    salary: {
      kenya: { junior: 'KES 100,000 - 170,000 / mo', mid: 'KES 220,000 - 380,000 / mo', senior: 'KES 450,000+ / mo', source: 'Enterprise Tech Salary Index 2026' },
      international: { junior: '$65,000 - $95,000 / yr', mid: '$120,000 - $175,000 / yr', senior: '$195,000+ / yr', source: 'Global Design Systems Compensation 2026' }
    },
    stack: {
      Figma: ['Variables', 'Component Properties', 'Auto Layout 5.0'],
      Tokens: ['Style Dictionary', 'JSON Tokens'],
      Docs: ['Zeroheight', 'Notion', 'Storybook']
    },
    juniorMarket: {
      requirements: ['Demonstrated experience building scalable component libraries', 'Knowledge of WCAG accessibility standards', 'Basic understanding of code tokens'],
      certifications: ['Advanced Design Systems Masterclasses'],
      degreeRequirement: 'Flexible; proven system architecture portfolio is essential.',
      remoteAvailability: 'Very high for remote enterprise product teams.',
      beginnerChallenges: 'Requiring years of general product design experience before specializing.'
    },
    faqs: [
      { q: 'Is a design system just a UI kit?', a: 'No. A UI kit is static. A design system is a living ecosystem of components, code tokens, governance rules, and documentation shared between design and engineering.' }
    ]
  }
];

// ==========================================
// LEARNING OPPORTUNITIES DATASET
// ==========================================
const DESIGN_OPPORTUNITIES = [
  {
    id: 'des-opp-1',
    type: 'Course',
    title: 'Google UX Design Professional Certificate',
    provider: 'Google (Coursera)',
    price: 'Free to Audit / Financial Aid Available',
    location: 'Online / Remote',
    deadline: 'Self-Paced',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://www.coursera.org/professional-certificates/google-ux-design',
    desc: 'Comprehensive foundational program covering wireframing, user research, Figma prototyping, and portfolio creation.'
  },
  {
    id: 'des-opp-2',
    type: 'Bootcamp',
    title: 'Akirachix Product Design Training',
    provider: 'Akirachix (Nairobi)',
    price: 'Scholarship Funded (Free for eligible women)',
    location: 'Nairobi, Kenya',
    deadline: 'Cohort Based',
    status: 'Upcoming',
    verifiedDate: 'Verified 2026',
    url: 'https://akirachix.com/',
    desc: 'Immersive technology training program in Kenya empowering young women with professional UI/UX and product design skills.'
  },
  {
    id: 'des-opp-3',
    type: 'Internship',
    title: 'UI/UX Design Intern',
    provider: 'Andela Partner Network',
    price: 'Paid Stipend',
    location: 'Remote (Kenya & Africa)',
    deadline: 'Rolling Applications',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://andela.com/',
    desc: 'Gain hands-on product design experience collaborating with distributed engineering teams on enterprise client apps.'
  },
  {
    id: 'des-opp-4',
    type: 'Scholarship',
    title: 'Interaction Design Foundation (IxDF) Scholarship',
    provider: 'IxDF',
    price: 'Free Annual Membership',
    location: 'Online / Global',
    deadline: 'Open Application',
    status: 'Open',
    verifiedDate: 'Verified 2026',
    url: 'https://www.interaction-design.org/',
    desc: 'Financial support for deserving students and professionals in developing regions to access top-tier UX literature and courses.'
  }
];

// ==========================================
// DESIGN TOOLS DATASET
// ==========================================
const DESIGN_TOOLS_LIST = [
  {
    category: 'UI/UX and Prototyping',
    name: 'Figma',
    purpose: 'Industry-standard collaborative interface design and prototyping tool.',
    suitability: 'Freemium (Free Tier Available)',
    url: 'https://www.figma.com/'
  },
  {
    category: 'UI/UX and Prototyping',
    name: 'Sketch',
    purpose: 'Vector-based digital design toolkit built exclusively for macOS.',
    suitability: 'Paid Subscription',
    url: 'https://www.sketch.com/'
  },
  {
    category: 'Graphic design',
    name: 'Adobe Illustrator',
    purpose: 'Vector graphics software for logos, icons, and scalable illustrations.',
    suitability: 'Paid Subscription',
    url: 'https://www.adobe.com/products/illustrator.html'
  },
  {
    category: 'Graphic design',
    name: 'Canva Pro',
    purpose: 'Accessible browser-based graphic design tool for marketing collateral.',
    suitability: 'Freemium',
    url: 'https://www.canva.com/'
  },
  {
    category: 'Motion and animation',
    name: 'Adobe After Effects',
    purpose: 'Professional motion graphics, visual effects, and UI animation suite.',
    suitability: 'Paid Subscription',
    url: 'https://www.adobe.com/products/aftereffects.html'
  },
  {
    category: 'Collaboration and handoff',
    name: 'Miro',
    purpose: 'Online collaborative whiteboard for user journey mapping and brainstorming.',
    suitability: 'Freemium',
    url: 'https://miro.com/'
  },
  {
    category: 'Research and testing',
    name: 'Maze',
    purpose: 'Rapid usability testing platform that turns prototypes into actionable data.',
    suitability: 'Freemium',
    url: 'https://maze.co/'
  }
];

// ==========================================
// CERTIFICATIONS DATASET
// ==========================================
const DESIGN_CERTIFICATIONS = [
  {
    type: 'Professional Certification',
    name: 'Google UX Design Professional Certificate',
    org: 'Google (via Coursera)',
    skills: 'Wireframing, Figma, UX Research, Usability Testing',
    level: 'Beginner',
    prereqs: 'None required',
    cost: 'Free to audit / Subscription based',
    url: 'https://www.coursera.org/professional-certificates/google-ux-design'
  },
  {
    type: 'Professional Certification',
    name: 'Nielsen Norman Group UX Master Certified',
    org: 'NN/g',
    skills: 'Advanced UX Research, Interaction Design, Usability Metrics',
    level: 'Intermediate to Advanced',
    prereqs: 'Passing multiple rigorous NN/g certification exams',
    cost: 'Paid per course exam',
    url: 'https://www.nngroup.com/ux-certification/'
  },
  {
    type: 'Course Completion Certificate',
    name: 'Interaction Design Foundation (IxDF) Courses',
    org: 'IxDF',
    skills: 'UI Design, Design Thinking, Accessibility, Mobile UX',
    level: 'Beginner to Intermediate',
    prereqs: 'IxDF Membership',
    cost: 'Included in Annual Membership',
    url: 'https://www.interaction-design.org/'
  }
];

// ==========================================
// ROADMAP STEPS DATASET
// ==========================================
const DESIGN_ROADMAP = [
  { step: '01', title: 'Understand Design Fundamentals', desc: 'Study contrast, alignment, hierarchy, balance, and human visual perception.' },
  { step: '02', title: 'Learn Visual Systems & Typography', desc: 'Master type scales, leading, tracking, color theory, and accessible contrast ratios.' },
  { step: '03', title: 'Adopt User-Centred Thinking', desc: 'Explore empathy mapping, problem statements, and understanding user pain points.' },
  { step: '04', title: 'Master Figma', desc: 'Learn frames, components, auto-layout, variants, and design token management.' },
  { step: '05', title: 'Study UX Research & Usability', desc: 'Conduct interviews, card sorting, user surveys, and moderated usability testing.' },
  { step: '06', title: 'Practise Wireframing & Prototyping', desc: 'Translate research insights into low-fi wireframes and interactive high-fi prototypes.' },
  { step: '07', title: 'Build Realistic Portfolio Projects', desc: 'Craft 3 detailed case studies solving genuine problems from scratch.' },
  { step: '08', title: 'Learn Developer Handoff', desc: 'Understand dev mode, specs, component states, and responsive layout behavior.' },
  { step: '09', title: 'Prepare for Junior Roles', desc: 'Polish your CV, portfolio website, LinkedIn profile, and interview storytelling.' }
];

// ==========================================
// FAQ ACCORDION DATASET
// ==========================================
const DESIGN_FAQS = [
  { q: 'What is the difference between UI and UX design?', a: 'UX (User Experience) focuses on research, user flows, and problem-solving logic. UI (User Interface) focuses on the visual look, feel, typography, and interactive touchpoints.' },
  { q: 'Is graphic design the same as UI design?', a: 'No. Graphic design centers on branding, illustration, and print/marketing collateral. UI design specializes specifically in interactive digital screens for apps and web.' },
  { q: 'Do I need to know how to code?', a: 'Advanced coding is not required for UI/UX designers, though understanding HTML/CSS box models and responsive layouts helps immensely when collaborating with developers.' },
  { q: 'Do I need a university degree?', a: 'No. The design industry is heavily portfolio-driven. A well-documented portfolio demonstrating your problem-solving process outweighs formal degrees.' },
  { q: 'Which design career is easiest to start with?', a: 'UI Designer or Graphic Designer are often considered the most approachable starting points due to the immediate visual feedback and abundance of tutorials.' },
  { q: 'How important is a portfolio?', a: 'Crucial. Your portfolio is your primary resume. Employers want to see your thinking process, wireframes, user research, and final polished designs.' },
  { q: 'Can I get a remote design job?', a: 'Yes! Design is one of the most remote-friendly tech careers, with numerous global agencies and startups hiring remote talent from Kenya.' },
  { q: 'Is Figma enough to become a designer?', a: 'Figma is the industry-standard tool for UI design, but successful designers also need strong soft skills, user empathy, research methods, and problem-solving.' },
  { q: 'How competitive is the junior design market?', a: 'Entry-level UI/UX is competitive because many bootcamps produce graduates with identical portfolios. Standing out requires rigorous case studies and real user testing.' },
  { q: 'Can AI replace designers?', a: 'AI automates repetitive layout tasks and generates inspiration, but it cannot empathize with local users, conduct ethnographic interviews, or navigate complex business stakeholder politics.' }
];

export default function DesignCategoryPage() {
  const [selectedCareerId, setSelectedCareerId] = useState('ui-designer');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [oppTab, setOppTab] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Career Object
  const currentCareer = useMemo(() => {
    return DESIGN_CAREERS.find((c) => c.id === selectedCareerId) || DESIGN_CAREERS[0];
  }, [selectedCareerId]);

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    return DESIGN_OPPORTUNITIES.filter((opp) => {
      if (oppTab !== 'All' && opp.type !== oppTab) return false;
      if (priceFilter === 'Free' && !opp.price.toLowerCase().includes('free') && !opp.price.toLowerCase().includes('scholarship')) {
        return false;
      }
      if (priceFilter === 'Paid' && opp.price.toLowerCase().includes('free')) {
        return false;
      }
      if (locationFilter === 'Kenya' && !opp.location.includes('Kenya')) return false;
      if (locationFilter === 'Remote' && !opp.location.toLowerCase().includes('online') && !opp.location.toLowerCase().includes('remote') && !opp.location.toLowerCase().includes('global')) return false;
      return true;
    });
  }, [oppTab, priceFilter, locationFilter]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* 2. PAGE INTRODUCTION (HERO) */}
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-teal-600/10 dark:bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
            <span>/</span>
            <a href="/explore" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Explore</a>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Design & UI/UX</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
                <Palette className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Creative & User Experience
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Design & UI/UX
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Design combines creativity, visual communication, user research, usability, and rigorous problem-solving. Master Figma, user empathy, and interaction design to build digital products people love.
              </p>

              {/* Search input for finding design resources */}
              <div className="pt-2 relative max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search design resources, tools, courses..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-2xs"
                />
              </div>

              {/* Compact Overview Stats */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-blue-600 dark:text-blue-400">10</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Career Paths</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-teal-600 dark:text-teal-400">15+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Verified Courses</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-indigo-600 dark:text-indigo-400">8+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Design Tools</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 p-3.5 rounded-xl text-center">
                  <span className="block text-xl font-bold text-amber-600 dark:text-amber-400">4+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Scholarships</span>
                </div>
              </div>

            </div>

            {/* Right Visual Highlight */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">pathfinder_design.figma_frame</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">UI & Visual Interfaces</p>
                      <p className="text-slate-500 dark:text-slate-400">Figma auto-layout, tokens & design systems</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">UX Research & Usability</p>
                      <p className="text-slate-500 dark:text-slate-400">Interviews, persona mapping & testing</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                    <PenTool className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">Branding & Motion</p>
                      <p className="text-slate-500 dark:text-slate-400">Vector systems, typography & micro-interactions</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Verified Pathfinder Design Directory (2026)
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CAREER PATHS & 4. CAREER INFORMATION PANEL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore Design & UI/UX Career Paths
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Select a career card below to view detailed requirements, ratings, salary expectations, and market insights.
          </p>
        </div>

        {/* Clickable Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DESIGN_CAREERS.map((career) => {
            const IconComponent = career.icon;
            const isSelected = career.id === selectedCareerId;

            return (
              <button
                key={career.id}
                onClick={() => setSelectedCareerId(career.id)}
                className={`text-left p-4 rounded-2xl border transition flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 border-blue-600 dark:border-blue-500 shadow-md ring-2 ring-blue-600/20 dark:ring-blue-500/20'
                    : 'bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50">
                        Active
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                      {career.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1 leading-relaxed line-clamp-2">
                      {career.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1">
                  {career.techs.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                  {career.techs.length > 2 && (
                    <span className="text-[10px] text-slate-400 font-medium self-center">
                      +{career.techs.length - 2}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* CAREER INFORMATION PANEL */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 shadow-sm p-6 sm:p-8 space-y-10 animate-in fade-in duration-200">
          
          {/* A. Career Overview */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700/60">
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Career Path Breakdown</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {currentCareer.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">
                {currentCareer.overview.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Common Titles:</span>
              {currentCareer.overview.jobTitles.map((t) => (
                <span key={t} className="text-xs bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 font-semibold px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 p-4 sm:p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Typical Responsibilities & Industry Focus:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {currentCareer.overview.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl border border-blue-100/60 dark:border-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Top Hiring Industries:</span>
              <span>{currentCareer.overview.targetIndustries.join(', ')}</span>
            </div>
          </div>

          {/* B. Career Ratings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pathfinder Editorial Career Ratings</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  *Comparative editorial estimates generated by Pathfinder based on market entry thresholds, not official government statistics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Learning Difficulty', score: currentCareer.ratings.difficulty.score, detail: currentCareer.ratings.difficulty.detail, color: 'bg-blue-600', text: 'text-blue-600 dark:text-blue-400' },
                { label: 'Market Competition', score: currentCareer.ratings.competition.score, detail: currentCareer.ratings.competition.detail, color: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
                { label: 'Junior Job Availability', score: currentCareer.ratings.juniorJobs.score, detail: currentCareer.ratings.juniorJobs.detail, color: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400' },
                { label: 'Learning Accessibility', score: currentCareer.ratings.accessibility.score, detail: currentCareer.ratings.accessibility.detail, color: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400' }
              ].map((rt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{rt.label}</span>
                    <span className={`text-sm font-extrabold ${rt.text}`}>{rt.score}/10</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className={`${rt.color} h-2 rounded-full`} style={{ width: `${rt.score * 10}%` }} />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{rt.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* C. Learning Duration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-1 bg-slate-900 dark:bg-slate-950 text-white p-5 rounded-2xl space-y-4 border border-slate-800">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Estimated Learning Timeline
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400 block">Fundamentals:</span>
                  <span className="text-lg font-bold text-white">{currentCareer.duration.fundamentals}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Practical Skills:</span>
                  <span className="text-lg font-bold text-teal-400">{currentCareer.duration.practicalLabs}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Portfolio Ready:</span>
                  <span className="text-xl font-extrabold text-blue-400">{currentCareer.duration.entryReady}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                *Assumes ~15-20 hours of weekly study. Portfolios determine actual job readiness.
              </p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 p-5 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Factors Influencing Learning Duration:
              </h4>
              <ul className="space-y-2">
                {currentCareer.duration.factors.map((factor, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* D. Salary Expectations */}
          <div className="space-y-4 pt-2">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Salary Expectations</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified salary benchmarks based on local hiring data and international remote compensation indexes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-500" /> Kenya Market
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
                    <span className="font-bold text-blue-600 dark:text-blue-400">{currentCareer.salary.kenya.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400">{currentCareer.salary.kenya.senior}</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  Source: {currentCareer.salary.kenya.source}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-blue-500" /> International / Remote
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
                    <span className="font-bold text-blue-600 dark:text-blue-400">{currentCareer.salary.international.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Senior (5+ yrs):</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400">{currentCareer.salary.international.senior}</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
                  Source: {currentCareer.salary.international.source}
                </p>
              </div>
            </div>
          </div>

          {/* E. Technology Stack */}
          <div className="space-y-3 pt-2">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Recommended Design Stack</h4>
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

          {/* F. Junior Job Market */}
          <div className="space-y-4 pt-2">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Junior Job Market Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {[
                { title: 'Employer Requirements', content: currentCareer.juniorMarket.requirements.join(' • ') },
                { title: 'Recommended Certifications', content: currentCareer.juniorMarket.certifications.join(' • ') },
                { title: 'Degree Expectations', content: currentCareer.juniorMarket.degreeRequirement },
                { title: 'Remote Availability', content: currentCareer.juniorMarket.remoteAvailability },
                { title: 'Common Beginner Challenges', content: currentCareer.juniorMarket.beginnerChallenges }
              ].map((jm, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block">{jm.title}</span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{jm.content}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. IMPORTANT INFORMATION — MUST READ (FAQ ACCORDION) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Important Information — Must Read
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Practical guidance and honest answers for learners entering the design profession.
          </p>
        </div>

        <div className="space-y-3">
          {DESIGN_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="border border-slate-200/90 dark:border-slate-700/80 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-4 font-semibold text-xs sm:text-sm text-slate-900 dark:text-white flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. LEARNING OPPORTUNITIES */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Curated Design Directory</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Find Design Learning Opportunities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Verified design courses, bootcamps, internships, and scholarships for regional and global learners.
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
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
              <option value="All">All Pricing Types</option>
              <option value="Free">Free / Fully Funded</option>
              <option value="Paid">Paid / Premium</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                      <span className="font-bold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                        {opp.type}
                      </span>
                      <span className="font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/50">
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
                        <span>Funding:</span>
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
                      className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                    >
                      Official Link <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
                <p className="text-sm font-semibold">No opportunities match your current filter selections.</p>
                <button
                  onClick={() => { setOppTab('All'); setPriceFilter('All'); setLocationFilter('All'); }}
                  className="text-xs text-blue-600 dark:text-blue-400 underline font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 7. DESIGN TOOLS AND SOFTWARE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Software & Tooling</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Design Tools & Software
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Commonly used tools grouped by purpose. Note that you do not need to master every tool to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DESIGN_TOOLS_LIST.map((tool, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded">
                    {tool.suitability}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">{tool.category}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{tool.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{tool.purpose}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center justify-between"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CERTIFICATIONS */}
      <section className="bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 py-14 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Industry Credentials</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Design Certifications & Credentials
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Distinguishing between professional certifications and course completion certificates from recognized organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DESIGN_CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                      {cert.type}
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{cert.cost}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{cert.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Issuer: {cert.org}</p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed"><strong>Skills:</strong> {cert.skills}</p>
                  <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700/60">
                    <span className="font-semibold block text-slate-700 dark:text-slate-200">Prerequisites:</span>
                    <span className="text-slate-600 dark:text-slate-400">{cert.prereqs}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center justify-between"
                  >
                    <span>Certification Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEARNING ROADMAP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Visual Progression</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Your Design Learning Roadmap
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Note: The pathway differs depending on your chosen specialisation. Graphic design, UX research, and UI design do not require identical learning tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DESIGN_ROADMAP.map((step) => (
            <div key={step.step} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded inline-block">
                STAGE {step.step}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. RELATED CATEGORIES */}
      <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Explore Other Pathfinder Categories</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Compare design with adjacent technical disciplines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href="/explore/web-development" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block">Frontend & Backend</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">Web Development →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Build responsive UIs, full-stack apps, and translate designs into live code.</p>
            </a>

            <a href="/explore/artificial-intelligence" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block">Intelligence & Innovation</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">Artificial Intelligence →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Explore machine learning models, prompt engineering, and AI-assisted UX workflows.</p>
            </a>

            <a href="/explore/data-science" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 transition group">
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block">Analytics & Python</span>
              <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition">Data Science →</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Leverage data analytics to inform data-driven product design decisions.</p>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}