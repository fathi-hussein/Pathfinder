



'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Globe, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto bg-slate-900 text-slate-400 text-sm font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="tracking-tight">Pathfinder</span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Connecting students and job-seekers in Kenya and worldwide to verified scholarships, 
              internships, training bootcamps, and career resources.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400" /> Nairobi, Kenya
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-indigo-400" /> Global Opportunities
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Platform Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-white transition">Explore Directory</Link>
              </li>
              <li>
                <Link href="/Articles" className="hover:text-white transition">Career Articles</Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-white transition">Contact & Submissions</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Opportunity Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/explore/Web-development" className="hover:text-white transition">Web Development</Link>
              </li>
              <li>
                <Link href="/explore/Cyber-security" className="hover:text-white transition">Cyber Security</Link>
              </li>
              <li>
                <Link href="/explore/AI" className="hover:text-white transition">Artificial Intelligence</Link>
              </li>
              <li>
                <Link href="/explore/Data-science" className="hover:text-white transition">Data Science</Link>
              </li>
              <li>
                <Link href="/explore/Design" className="hover:text-white transition">Design</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide">Get In Touch</h4>
            <p className="text-xs text-slate-400">Have an opportunity to list or a recommendation?</p>
            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition"
            >
              <Mail className="w-4 h-4 text-indigo-400" /> Contact Support
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Pathfinder Hub. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted for developers and learners across East Africa & beyond
          </p>
        </div>

      </div>
    </footer>
  );
}