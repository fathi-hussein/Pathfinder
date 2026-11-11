

'use client';



import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Code2,
  ShieldAlert,
  BrainCircuit,
  Database,
  Palette,
  Layers,
  Clock,
  ArrowUpRight,
  BookOpen,
  Filter,
  CheckCircle2
} from 'lucide-react';

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Category Configuration
  const categories = [
    {
      id: 'web-dev',
      title: 'Web Development',
      href: '/explore/web-development',
      count: '120+ Resources',
      desc: 'Frontend, backend, and full-stack frameworks.',
      icon: Code2,
      
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      href: '/explore/Cyber-security',
      count: '85+ Resources',
      desc: 'Ethical hacking, network security, and defense.',
      icon: ShieldAlert,
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      href: '/explore/AI',
      count: '95+ Resources',
      desc: 'Machine learning, prompt engineering, and LLMs.',
      icon: BrainCircuit,
    },
    {
      id: 'data-science',
      title: 'Data Science',
      href: '/explore/Data-science',
      count: '70+ Resources',
      desc: 'Data analysis, visualization, and Python tools.',
      icon: Database,
    },
    {
      id: 'design',
      title: 'Design & UI/UX',
      href: '/explore/Design',
      count: '60+ Resources',
      desc: 'User research, wireframing, and interface design.',
      icon: Palette,
    },
    {
      id: 'other',
      title: 'Other Skills',
      href: '/explore/other-skills',
      count: '110+ Resources',
      desc: 'Cloud computing, DevOps, and soft skills.',
      icon: Layers,
    },
  ];

  // Sample Featured Resources
  const featuredResources = [
    {
      id: 'res-1',
      title: 'Complete Modern Web Development Pathway',
      platform: 'FreeCodeCamp',
      category: 'Web Development',
      level: 'Beginner',
      price: 'Free',
      desc: 'Master HTML5, CSS3, JavaScript, and modern frontend frameworks through hands-on project building.',
      isMainFeatured: true,
    },
    {
      id: 'res-2',
      title: 'Introduction to Web Security & OWASP Top 10',
      platform: 'PortSwigger Academy',
      category: 'Cybersecurity',
      level: 'Intermediate',
      price: 'Free',
      desc: 'Learn core security principles and practical application vulnerability defenses.',
      isMainFeatured: false,
    },
    {
      id: 'res-3',
      title: 'Practical Machine Learning Foundations',
      platform: 'Coursera',
      category: 'Artificial Intelligence',
      level: 'Beginner',
      price: 'Free Audit',
      desc: 'Understand basic algorithmic models and real-world AI applications.',
      isMainFeatured: false,
    },
    {
      id: 'res-4',
      title: 'Figma for Modern UI/UX Designers',
      platform: 'UX Design Institute',
      category: 'Design & UI/UX',
      level: 'All Levels',
      price: 'Free',
      desc: 'Build scalable design systems, interactive prototypes, and clean user interfaces.',
      isMainFeatured: false,
    },
  ];

  // Learning Guides
  const guides = [
    {
      id: 'guide-1',
      title: 'Is Web Development Still Worth Learning?',
      desc: 'An honest analysis of industry demand, career trajectories, and necessary skills for modern learners.',
      category: 'Career Insights',
      readTime: '6 min read',
    },
    {
      id: 'guide-2',
      title: 'Getting Started in Cybersecurity: A Beginner’s Roadmap',
      desc: 'Step-by-step guidance on certifications, lab environments, and core concepts to master first.',
      category: 'Roadmap',
      readTime: '8 min read',
    },
    {
      id: 'guide-3',
      title: 'Understanding Artificial Intelligence & Machine Learning',
      desc: 'Demystifying key terminology, foundational tools, and practical entry points for non-experts.',
      category: 'Tech Foundations',
      readTime: '5 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FC] dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* 1. PAGE INTRODUCTION SECTION */}
      <section className="border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Explore Learning Resources
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Discover curated courses, tutorials, and structured learning paths to build high-value tech and design skills.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="pt-2 space-y-4">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills or topics..."
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition shadow-sm"
              />
            </div>

            {/* Quick Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm">
              <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Quick Filters:
              </span>
              {['All', 'Free Resources', 'Beginner Friendly'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg border font-medium transition ${
                    activeFilter === filter
                      ? 'bg-slate-900 text-white border-slate-900 dark:bg-indigo-600 dark:border-indigo-600'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* 2. BROWSE BY CATEGORY SECTION */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Browse by Category
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
              Select a category to explore specific skills, platforms, and structured paths.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/50 transition cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600 group-hover:text-white transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                        {cat.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-normal">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span>{cat.count}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5 group-hover:translate-x-0.5 transition">
                      Browse <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 3. FEATURED RESOURCES SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Resources
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
                Handpicked quality resources to kickstart your practical learning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Highlighted Resource Card */}
            {featuredResources.filter(r => r.isMainFeatured).map((res) => (
              <div
                key={res.id}
                className="lg:col-span-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col lg:flex-row gap-6 justify-between items-start"
              >
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
                      {res.category}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                      Level: {res.level}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                      {res.price}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {res.desc}
                  </p>

                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2 pt-2">
                    <span>Provider: <strong className="text-slate-800 dark:text-slate-200">{res.platform}</strong></span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Hub Resource
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-auto shrink-0 pt-4 lg:pt-0">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2">
                    View Resource <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Standard Secondary Cards */}
            {featuredResources.filter(r => !r.isMainFeatured).map((res) => (
              <div
                key={res.id}
                className="lg:col-span-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                      {res.category}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                      {res.price}
                    </span>
                  </div>

                  <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{res.platform}</span>
                  <button className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1">
                    View <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* 4. LEARNING GUIDES SECTION */}
        <section className="space-y-6 pt-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Explore Learning Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
              Articles designed to help you make informed educational and career decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                      {guide.category}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {guide.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {guide.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <button className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" /> Read Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}