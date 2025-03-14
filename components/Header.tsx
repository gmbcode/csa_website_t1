'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import SiteLogo from './logos/SiteLogo';
import { GlobalData } from '../lib/types';
import LoginButton from './LoginButton'; // Import LoginButton

export default function Header({ name }: { name: GlobalData }): JSX.Element {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-10 mx-auto bg-white/75 backdrop-blur-lg dark:bg-zinc-950/75">
      <div className="flex items-center justify-between px-4 py-2">
        <SiteLogo siteData={name} />
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/events" className="text-white hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="/team" className="text-white hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="/alumni" className="text-white hover:underline">
                  Alumni
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-white hover:underline focus:outline-none"
            >
              {session.user?.email}
            </button>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}
