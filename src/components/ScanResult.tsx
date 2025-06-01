'use client';

import { useState } from 'react';
import { getScoreColor, formatUrl } from '@/utils/scanner';
import Link from 'next/link';

interface ScanResultProps {
  result: {
    url: string;
    score: number;
    assessment: string;
    issues: string[];
    positives: string[];
    scannedAt: string;
    isSample?: boolean;
  };
}

export default function ScanResult({ result }: ScanResultProps) {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  
  const scoreColor = getScoreColor(result.score);
  const formattedUrl = formatUrl(result.url);
  
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // In a real implementation, this would send the email
    // For now, we'll just simulate success
    setTimeout(() => {
      setEmailSent(true);
    }, 1000);
  };
  
  return (
    <div className="bg-graphite/50 backdrop-blur-sm p-8 md:p-10 w-full max-w-4xl mx-auto animate-fadeIn rounded-xl border border-teal/20 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-teal/10 pb-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-teal uppercase tracking-wide">
            {result.isSample ? 'SAMPLE REPORT' : 'SCAN RESULTS'}
          </h3>
          <p className="text-soft-white/80 mt-1 font-mono text-sm">
            {result.isSample ? 'Example URL' : formattedUrl}
          </p>
        </div>
        <div className="text-soft-white/60 mt-3 md:mt-0 font-mono text-xs bg-charcoal/50 px-3 py-1 rounded-md">
          {result.isSample 
            ? 'Sample data' 
            : `Scanned ${new Date(result.scannedAt).toLocaleString()}`}
        </div>
      </div>
      
      <div className="flex flex-col items-center mb-12">
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-2xl bg-teal/20 rounded-full scale-150 animate-pulse-slow"></div>
          <div className={`text-8xl font-bold ${scoreColor} font-display animate-scaleIn relative z-10`}>
            {result.score}%
          </div>
          <div className="absolute -top-4 -right-4 bg-violet/90 text-soft-white rounded-lg px-4 py-2 text-xs font-medium uppercase tracking-wider shadow-lg transform rotate-2 border border-violet">
            AI Visibility Score
          </div>
        </div>
        
        <p className="text-center text-xl font-medium mb-6 max-w-2xl text-soft-white/90 leading-relaxed">
          {result.assessment}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-charcoal/70 backdrop-blur-sm p-6 rounded-xl border border-red-500/30 shadow-lg transform transition-all duration-300 hover:shadow-red-500/5 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-display font-semibold text-red-400 uppercase tracking-wide text-sm">Issues Detected</h4>
          </div>
          <ul className="space-y-4 stagger-children">
            {result.issues.map((issue, index) => (
              <li key={index} className="flex items-start animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="text-red-400 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-soft-white/80">{issue}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-charcoal/70 backdrop-blur-sm p-6 rounded-xl border border-teal/30 shadow-lg transform transition-all duration-300 hover:shadow-teal/5 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-display font-semibold text-teal uppercase tracking-wide text-sm">Working Well</h4>
          </div>
          <ul className="space-y-4 stagger-children">
            {result.positives.map((positive, index) => (
              <li key={index} className="flex items-start animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="text-teal mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-soft-white/80">{positive}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col space-y-6">
        <Link 
          href="/install" 
          className="btn-primary text-center w-full py-4 uppercase tracking-wider font-display font-semibold text-sm group relative overflow-hidden"
        >
          <span className="relative z-10">FIX MY VISIBILITY – INSTALL AHP MODULE</span>
          <span className="absolute inset-0 bg-gradient-to-r from-teal/40 to-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
        </Link>
        
        {!emailSent ? (
          <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-3">
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full py-3 px-12 bg-charcoal/60 backdrop-blur-sm text-soft-white placeholder-soft-white/50 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-transparent transition-all duration-300 font-mono text-sm"
                  aria-label="Email address for report"
                />
              </div>
              <button
                type="submit"
                className="btn-secondary whitespace-nowrap py-3 px-6 uppercase tracking-wide font-display text-sm font-semibold flex items-center justify-center min-w-[180px]"
              >
                SEND TO MY EMAIL
              </button>
            </div>
            {emailError && <p className="text-red-400 text-sm font-medium">{emailError}</p>}
          </form>
        ) : (
          <div className="text-center text-teal py-4 bg-teal/5 rounded-lg border border-teal/20 animate-fadeIn">
            <span className="font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Report sent to your email!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
