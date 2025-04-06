'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSession, signOut } from 'next-auth/react';
import SiteLogo from './logos/SiteLogo';
import { GlobalData } from '../lib/types';
import LoginButton from './LoginButton';

// Helper component to render children in a portal
const MobileMenuPortal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return ReactDOM.createPortal(children, document.body);
};

export default function Header({ name }: { name: GlobalData }): JSX.Element {
  const { data: session } = useSession();

  // isMenuVisible controls whether the mobile overlay is rendered.
  // isMenuOpen controls whether the menu is open (affecting animation).
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scrolling on both html and body when menu is open
  useEffect(() => {
    const html = document.documentElement;
    if (isMenuOpen) {
      html.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
    return () => {
      html.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (!isMenuVisible) {
      // Open the menu
      setIsMenuVisible(true);
      setIsMenuOpen(true);
    } else {
      // Start close animation, then remove from DOM after 300ms
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsMenuVisible(false);
      }, 300);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full mx-auto bg-white/75 backdrop-blur-lg shadow-md dark:bg-zinc-900/90">
      <div className="flex items-center justify-between px-4 py-3">
        <SiteLogo siteData={name} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/PORs"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  PORs
                </a>
              </li>
              <li>
                <a
                  href="/alumni"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Alumni
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Resources
                </a>
              </li>
            </ul>
          </nav>
          <div className="pl-4 border-l border-gray-700">
            {session ? (
              <button
                onClick={() => signOut()}
                className="text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none"
              >
                {session.user?.email}
              </button>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Portal */}
      {isMenuVisible && (
        <MobileMenuPortal>
          <div
            className={`fixed inset-0 bg-zinc-900/95 z-[60] ${
              isMenuOpen ? 'animate-slide-in' : 'animate-slide-out'
            } transition-opacity duration-300 md:hidden`}
          >
            <button
              className="absolute top-3 right-4 p-2"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col h-full pt-16 pb-6 px-6 overflow-y-auto">
              <nav className="flex-grow">
                <ul className="flex flex-col space-y-4">
                  <li className="border-b border-zinc-700 pb-3">
                    <a
                      href="/"
                      className="block text-xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Home
                    </a>
                  </li>
                  <li className="border-b border-zinc-700 pb-3">
                    <a
                      href="/blog"
                      className="block text-xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="border-b border-zinc-700 pb-3">
                    <a
                      href="/events"
                      className="block text-xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Events
                    </a>
                  </li>
                  <li className="border-b border-zinc-700 pb-3">
                    <a
                      href="/PORs"
                      className="block text-xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      PORs
                    </a>
                  </li>
                  <li className="border-b border-zinc-700 pb-3">
                    <a
                      href="/alumni"
                      className="block text-xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Alumni
                    </a>
                  </li>
                  <li className="border-b border-zinc-700 pb-3">
                    <a
                      href="/resources"
                      className="block text-xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="mt-8 pt-6 border-t border-zinc-700">
                {session ? (
                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-400 text-sm">Signed in as:</p>
                    <p className="text-white text-sm font-medium truncate">
                      {session.user?.email}
                    </p>
                    <button
                      onClick={() => {
                        signOut();
                        toggleMenu();
                      }}
                      className="mt-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div onClick={toggleMenu}>
                    <LoginButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        </MobileMenuPortal>
      )}
    </header>
  );
}
