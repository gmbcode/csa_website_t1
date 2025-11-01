import React from 'react';
import CosmicLogo from './logos/CosmicLogo';

export default function Footer(): JSX.Element {
  return (
    <footer className="relative bottom-0 left-1/2 -translate-x-1/2 flex w-full max-w-3xl items-center justify-between p-4 text-xs md:text-sm lg:px-0 lg:text-base">
        <div className="flex items-center space-x-2">
          <span className="text-zinc-700 dark:text-zinc-300">
            Made with ❤️ by the Tech team 2k24
          </span>
        </div>
      <div className="text-zinc-700 dark:text-zinc-300">
        &copy;&nbsp;&nbsp;{new Date().getFullYear()} CSA@BPHC
      </div>
    </footer>
  );
}
