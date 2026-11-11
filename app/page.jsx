

'use client'; // Required if you are using React hooks in App router

import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import './globals.css';
import Image from "next/image";
import hero from '@/public/hero3.jpg'; // Your light mode image
import darkHero from '@/public/dark-hero.jpg'; // Your dark mode image

function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Monitor document class changes (when the theme toggle is clicked)
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkTheme();

    // Setup an observer to watch for class changes on the root HTML element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F4F7FC] dark:bg-slate-900 transition-colors duration-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 min-h-[620px] py-16 lg:py-20">

          {/* Hero Content */}
          <div className="max-w-xl">

            <span className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-6">
              Your journey starts here
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
              Discover opportunities.
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                Build your future.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-lg">
              Find courses, scholarships and career opportunities
              that bring your ambitions closer to reality.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href="#explore"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-lg transition-colors duration-200"
              >
                Explore Opportunities
                <ArrowRight size={19} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200"
              >
                Learn More
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Supporting Text */}
            <div className="flex items-center gap-3 mt-12">
              <span className="w-10 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Learn something new. Open new doors.
              </p>
            </div>

          </div>

          {/* Hero Illustration (Dynamic Source) */}
          <div className="relative flex items-center justify-center">

            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-blue-200/40 dark:bg-blue-600/15 rounded-full blur-3xl"></div>

            <Image
              src={isDarkMode ? darkHero : hero}
              alt="Young woman learning with a laptop"
              className="relative z-10 w-full max-w-lg object-contain transition-opacity duration-300"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Page;