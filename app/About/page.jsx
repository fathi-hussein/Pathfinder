'use client';

import React from 'react';
import {
  Compass,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Users,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';

export default function PathfinderAboutSection() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Hero — First Impression */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" /> About Pathfinder
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Find Your Path. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400">Build Your Future.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Pathfinder helps you discover technology careers, explore the skills they require, compare career opportunities, and find learning resources to help you get started.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Careers <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. The Problem — Why Pathfinder Exists */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-3 text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Challenge</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Why Pathfinder Exists</h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Breaking into technology can feel overwhelming. Learners often face several recurring hurdles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base border border-blue-100 dark:border-blue-900/50">
              01
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Direction Overload</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Not knowing which specific technology career to pursue among dozens of emerging specialisations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base border border-blue-100 dark:border-blue-900/50">
              02
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Path Ambiguity</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Struggling to understand the exact differences, skill overlaps, and daily realities between career tracks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base border border-blue-100 dark:border-blue-900/50">
              03
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Scattered Resources</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Finding reliable courses, verified learning roadmaps, and structured tutorials without endless searching.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base border border-blue-100 dark:border-blue-900/50">
              04
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Hidden Opportunities</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Missing out on relevant internships, scholarships, and bootcamp cohorts due to fragmented information.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base border border-blue-100 dark:border-blue-900/50">
              05
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Entry-Level Barricades</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Having difficulty understanding genuine entry-level job requirements versus unrealistic employer expectations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Mission — What We Aim to Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase">
            <Target className="w-3.5 h-3.5" /> Our Mission
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Making career exploration effortless and accessible.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We aim to make career exploration and learning opportunities easier to access by bringing useful, organised, and relevant information together in one clean, reliable platform.
          </p>
        </div>
      </section>

      {/* 4. How Pathfinder Works — What Visitors Can Do */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Platform Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">How Pathfinder Helps</h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Four core pillars designed to guide your journey from curiosity to capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-100 dark:border-blue-900/50">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Explore Careers</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Discover diverse technology fields, understand their core responsibilities, and explore specialisations that match your interests.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <span>Comprehensive field breakdowns</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-100 dark:border-blue-900/50">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Compare Paths</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Understand required skills, learning difficulty levels, market demand, and realistic career prospects across different tracks.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <span>Side-by-side skill analysis</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-100 dark:border-blue-900/50">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Find Opportunities</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Discover curated courses, bootcamps, internships, and educational scholarships to support your professional growth.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <span>Verified learning programs</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-100 dark:border-blue-900/50">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Plan Your Learning</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Follow structured learning roadmaps, identify essential milestones, and take confident steps toward your future career.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <span>Step-by-step roadmaps</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Who It's For — Our Audience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Audience</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Who Is Pathfinder For?</h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Built for anyone seeking clarity and direction in the technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Beginners Exploring Tech</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Individuals curious about technology careers who need a clear starting point without technical jargon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Students & Recent Graduates</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Academic graduates looking to bridge the gap between classroom theory and industry expectations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Self-Taught Learners</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Independent learners who want structured roadmaps and verified resources rather than random tutorials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Career Changers</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Professionals transitioning from non-tech backgrounds seeking transferable skill insights and entry requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-3 sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Opportunity Seekers</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Anyone actively searching for structured learning opportunities, bootcamps, internships, and grants.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Our Principles — What Guides Pathfinder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Our Values</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Our Principles</h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            The foundational standards that guide every feature and recommendation on Pathfinder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Accessibility</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Making useful career and learning information easier to find for everyone, everywhere.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Clarity</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Presenting complex career data, skills, and roadmaps in an understandable, digestible way.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Transparency</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Distinguishing verified facts from estimates and clearly communicating resource sources.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Practicality</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Focusing strictly on real-world skills, actionable learning resources, and genuine opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* 7. Closing CTA — Take Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Your Next Step Starts Here.
          </h2>
          
          <p className="text-base sm:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Explore your interests, discover your options, and start planning your future in technology today.
          </p>
          
          <div className="pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm shadow-xl transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Careers <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}