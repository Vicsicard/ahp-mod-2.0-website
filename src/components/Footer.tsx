"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-charcoal to-graphite text-soft-white border-t border-teal/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="inline-block mb-6 transform transition-transform duration-300 hover:scale-105">
              <Image 
                src="/images/ahp-logo.svg" 
                alt="AHP Module 2.0" 
                width={180} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-soft-white/80 mt-4 max-w-md font-light leading-relaxed">
              Make your site AI-ready. Ensure your content is structured for GenAI comprehension and become part of the answer.
            </p>
            <div className="mt-8 flex space-x-5">
              <a href="#" className="text-soft-white/70 hover:text-teal transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </a>
              <a href="#" className="text-soft-white/70 hover:text-teal transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">GitHub</span>
                <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="text-soft-white/70 hover:text-teal transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-teal">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">HOME</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/solution" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">SOLUTION</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/report-preview" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">REPORT PREVIEW</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">ABOUT</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">CHANGELOG</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-teal">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/install" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">INSTALLATION GUIDE</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">HELP CENTER</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">PRIVACY POLICY</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-soft-white/80 hover:text-teal transition-all duration-300 text-sm relative group">
                  <span className="relative inline-block">TERMS OF SERVICE</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal/50 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="font-display text-sm font-semibold mb-5 uppercase tracking-wider text-teal">Subscribe</h3>
            <p className="text-soft-white/80 text-sm mb-4">Stay updated with our latest features and releases</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full py-3 px-12 bg-charcoal/60 backdrop-blur-sm text-soft-white placeholder-soft-white/50 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-transparent transition-all duration-300 font-mono text-sm"
                  aria-label="Email for newsletter"
                />
              </div>
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap py-3 px-6 uppercase tracking-wide font-display text-sm font-semibold flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10">SUBSCRIBE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal/40 to-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-teal/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-soft-white/70 text-sm font-mono">
            &copy; {currentYear} AHP Module 2.0. All rights reserved.
          </p>
          <p className="text-soft-white/70 text-sm mt-4 md:mt-0 font-mono">
            Designed with <span className="text-teal">♥</span> for the future of AI handshake
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
