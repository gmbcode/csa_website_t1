"use client";
import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full mt-auto border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-black relative z-50">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10 text-gray-500 dark:text-zinc-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Col 1 - Credits */}
          <div className="col-span-1">
            <h5 className="mt-0 text-gray-900 dark:text-cyan-400 font-bold tracking-widest uppercase text-base mb-4">
              Credits
            </h5>
            <p className="text-sm leading-relaxed tracking-wide opacity-80 text-gray-600 dark:text-zinc-400">
              Tech Team 2024 and 2025 of Computer Science Association, BPHC
            </p>
          </div>

          {/* Col 2 & Col 3 - People (Spans 2 columns on Desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-10 md:gap-6">
            {/* Leadership Row */}
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <h4 className="mt-0 text-gray-900 dark:text-cyan-400 font-bold tracking-widest uppercase text-base mb-4">
                  Tech Lead
                </h4>
                <p className="text-sm text-gray-700 dark:text-zinc-300">Ayaan Siddiqui</p>
              </div>
              <div>
                <h4 className="mt-0 text-gray-900 dark:text-cyan-400 font-bold tracking-widest uppercase text-base mb-4">
                  Tech Advisor
                </h4>
                <p className="text-sm text-gray-700 dark:text-zinc-300">Bhavya Shah</p>
              </div>
            </div>

            {/* Team Row */}
            <div>
              <h4 className="mt-0 text-gray-900 dark:text-cyan-400 font-bold tracking-widest uppercase text-base mb-4">
                Our Team
              </h4>
              <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-2">
                <p className="text-sm text-gray-700 dark:text-zinc-300">Anvith N</p>
                <p className="text-sm text-gray-700 dark:text-zinc-300">Oshal Bharanwal</p>
                <p className="text-sm text-gray-700 dark:text-zinc-300">Krish Goel</p>
                <p className="text-sm text-gray-700 dark:text-zinc-300">Heet Mehta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-transparent">
        <div className="mx-auto max-w-6xl flex flex-row items-center justify-between px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-800 dark:text-zinc-300">
          <div>Made with ❤️ by the Tech team 2k24</div>
          <div>&copy; 2026 CSA@BPHC</div>
        </div>
      </div>
    </footer>
  );
}