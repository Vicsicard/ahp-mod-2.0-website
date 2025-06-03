"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-charcoal sticky top-0 z-50 border-b border-teal/10 shadow-md">
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <span className="font-display font-bold text-soft-white uppercase tracking-wide text-base">AI HANDSHAKE<br />PROTOCOL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="uppercase text-xs font-display text-soft-white hover:text-teal transition-all duration-300">
              HOME
            </Link>
            <Link href="/solution" className="uppercase text-xs font-display text-soft-white hover:text-teal transition-all duration-300">
              SOLUTION
            </Link>
            <Link href="/score" className="uppercase text-xs font-display text-soft-white hover:text-teal transition-all duration-300 text-center">
              AI VISIBILITY<br />SCORE
            </Link>
            <Link href="/report-preview" className="uppercase text-xs font-display text-soft-white hover:text-teal transition-all duration-300 text-center">
              REPORT<br />PREVIEW
            </Link>
            <Link href="/about" className="uppercase text-xs font-display text-soft-white hover:text-teal transition-all duration-300">
              ABOUT
            </Link>
            <Link href="/contact" className="uppercase text-xs font-display text-soft-white hover:text-teal transition-all duration-300">
              CONTACT
            </Link>
            <Link href="/changelog" className="uppercase text-xs font-display text-soft-white hover:text-teal transition-all duration-300">
              CHANGELOG
            </Link>
            
            <Link 
              href="/install" 
              className="bg-teal hover:bg-teal/90 text-white px-4 py-2 rounded text-xs uppercase font-display font-semibold flex items-center justify-center group relative overflow-hidden ml-2"
            >
              <span className="relative z-10 flex items-center">
                INSTALL<br />NOW
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-teal p-2 rounded-full hover:bg-charcoal/50 transition-all duration-300 border border-teal/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  className="transition-all duration-300"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  className="transition-all duration-300"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 space-y-4 animate-fadeIn border-t border-teal/10 mt-4">
            <Link
              href="/"
              className="block uppercase text-sm font-display text-soft-white hover:text-teal transition-all duration-300 pl-3 border-l border-transparent hover:border-teal/50 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/solution"
              className="block uppercase text-sm font-display text-soft-white hover:text-teal transition-all duration-300 pl-3 border-l border-transparent hover:border-teal/50 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SOLUTION
            </Link>
            <Link
              href="/score"
              className="block uppercase text-sm font-display text-soft-white hover:text-teal transition-all duration-300 pl-3 border-l border-transparent hover:border-teal/50 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI VISIBILITY SCORE
            </Link>
            <Link
              href="/report-preview"
              className="block uppercase text-sm font-display text-soft-white hover:text-teal transition-all duration-300 pl-3 border-l border-transparent hover:border-teal/50 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              REPORT PREVIEW
            </Link>
            <Link
              href="/about"
              className="block uppercase text-sm font-display text-soft-white hover:text-teal transition-all duration-300 pl-3 border-l border-transparent hover:border-teal/50 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block uppercase text-sm font-display text-soft-white hover:text-teal transition-all duration-300 pl-3 border-l border-transparent hover:border-teal/50 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/changelog"
              className="block uppercase text-sm font-display text-soft-white hover:text-teal transition-all duration-300 pl-3 border-l border-transparent hover:border-teal/50 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CHANGELOG
            </Link>
            <div className="pt-4 px-2">
              <Link
                href="/install"
                className="btn-primary inline-flex w-full justify-center items-center py-3 uppercase tracking-wide font-display text-sm font-semibold group relative overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center">
                  INSTALL NOW
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal/40 to-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
