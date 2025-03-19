import React from 'react';
import CosmicLogo from './logos/CosmicLogo';

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto mt-8 flex w-full max-w-3xl items-center justify-between px-4 py-4 text-xs md:text-sm lg:px-0 lg:text-base">
      <div className="flex items-center space-x-2">
        <span className="text-zinc-700 dark:text-zinc-300">
          Made with ❤️ by the Tech team
        </span>
      </div>
      <div className="text-zinc-700 dark:text-zinc-300">
        &copy;{new Date().getFullYear()} CSA@BPHC
      </div>
    </footer>
  );
}
