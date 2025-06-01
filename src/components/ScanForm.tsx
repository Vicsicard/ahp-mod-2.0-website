'use client';

import { useState } from 'react';
import { scanUrl, getSampleScanResult } from '@/utils/scanner';

interface ScanFormProps {
  onScanComplete: (result: any) => void;
  onSampleRequest: () => void;
  isScanning: boolean;
}

export default function ScanForm({ onScanComplete, onSampleRequest, isScanning }: ScanFormProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    try {
      const result = await scanUrl(url.trim());
      onScanComplete(result);
    } catch (err: any) {
      setError(err.message || 'Failed to scan URL. Please try again.');
    }
  };

  const handleSampleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSampleRequest();
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex-grow relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="w-full py-3 px-12 bg-charcoal/60 backdrop-blur-sm text-soft-white placeholder-soft-white/50 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-transparent transition-all duration-300 font-mono text-sm"
              disabled={isScanning}
              aria-label="Website URL to scan"
            />
            {url && (
              <button 
                type="button" 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-soft-white/50 hover:text-teal transition-colors duration-200"
                onClick={() => setUrl('')}
                aria-label="Clear input"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          {error && (
            <p className="text-red-400 mt-2 text-sm absolute -bottom-6 left-0 font-medium">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="btn-primary whitespace-nowrap py-3 px-6 font-display uppercase tracking-wide text-sm font-semibold flex items-center justify-center min-w-[180px] group relative overflow-hidden"
          disabled={isScanning}
        >
          <span className="relative z-10">
            {isScanning ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-soft-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SCANNING...
              </span>
            ) : (
              'CHECK MY SCORE'
            )}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-teal/40 to-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
        </button>
      </form>
      <div className="text-center mt-5">
        <button
          onClick={handleSampleClick}
          className="text-teal hover:text-violet text-sm font-medium transition-colors duration-300 relative group uppercase tracking-wide"
          disabled={isScanning}
        >
          See a Sample Report Instead
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full group-hover:bg-violet"></span>
        </button>
      </div>
    </div>
  );
}
