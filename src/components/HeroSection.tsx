"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define the LLM interfaces to display
const llmInterfaces = [
  {
    name: 'ChatGPT',
    logo: '/images/chatgpt-logo.svg',
    query: 'What are the best restaurants in Denver?',
    interface: 'bg-[#1A1B26] text-soft-white rounded-lg p-6 shadow-xl border border-[#45A29E]/20',
    inputStyle: 'bg-[#24283B] rounded-md p-3 text-soft-white font-mono text-sm',
    buttonStyle: 'bg-[#45A29E] text-soft-white rounded-md px-4 py-2 font-display text-xs uppercase tracking-wider',
    animation: 'animate-fadeIn'
  },
  {
    name: 'Claude',
    logo: '/images/claude-logo.svg',
    query: 'What are the best restaurants in Denver?',
    interface: 'bg-[#0C1020] border border-[#c084fc]/20 rounded-lg p-6 text-soft-white shadow-xl',
    inputStyle: 'bg-[#1B1F2A] border border-[#c084fc]/30 rounded-md p-3 font-mono text-sm',
    buttonStyle: 'bg-[#c084fc] text-soft-white rounded-md px-4 py-2 font-display text-xs uppercase tracking-wider',
    animation: 'animate-fadeIn'
  },
  {
    name: 'Grok',
    logo: '/images/grok-logo.svg',
    query: 'What are the best restaurants in Denver?',
    interface: 'bg-[#0F111A] text-soft-white rounded-lg p-6 shadow-xl border border-blue-500/20',
    inputStyle: 'bg-[#1A1D2A] rounded-md p-3 text-soft-white font-mono text-sm',
    buttonStyle: 'bg-gradient-to-r from-blue-500 to-blue-600 text-soft-white rounded-md px-4 py-2 font-display text-xs uppercase tracking-wider',
    animation: 'animate-fadeIn'
  }
];

const HeroSection = () => {
  const [currentLLMIndex, setCurrentLLMIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [cycleCompleted, setCycleCompleted] = useState(false);

  // Handle the cycling of LLM interfaces
  useEffect(() => {
    // Initialize interval for cycling through LLMs
    const interval = setInterval(() => {
      setCurrentLLMIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % llmInterfaces.length;
        
        // If we've completed a full cycle, show the CTA but don't stop rotation
        if (nextIndex === 0 && prevIndex === llmInterfaces.length - 1 && !cycleCompleted) {
          setCycleCompleted(true);
          setTimeout(() => {
            setShowCTA(true);
          }, 500); // Small delay before showing CTA
        }
        
        return nextIndex;
      });
    }, 3000); // 3 seconds per interface (changed from 5 seconds)
    
    return () => clearInterval(interval);
  }, []); // No dependency on cycleCompleted so it continues indefinitely

  const currentLLM = llmInterfaces[currentLLMIndex];

  return (
    <section className="bg-gradient-to-b from-charcoal via-charcoal/95 to-graphite py-24 md:py-32 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-soft-white leading-tight tracking-tight">
              <span className="block mb-3 uppercase">They're not <span className="line-through text-soft-white/50">searching</span>.</span>
              <span className="block mb-3 uppercase">They're getting <span className="text-teal">answers</span>.</span>
              <span className="bg-gradient-to-r from-teal to-violet bg-clip-text text-transparent animate-pulse-slow uppercase">Are they from you?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-soft-white/80 mb-12 font-light leading-relaxed max-w-xl">
              If your content isn't structured for GenAI comprehension, your business isn't part of the answer.
            </p>
            
            {showCTA ? (
              <div className="animate-fadeIn">
                <Link 
                  href="/install" 
                  className="btn-primary text-lg px-8 py-4 uppercase tracking-wider font-display font-semibold text-sm group relative overflow-hidden inline-flex items-center"
                >
                  <span className="relative z-10 flex items-center">
                    MAKE YOUR SITE AI-READY
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal/40 to-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                </Link>
              </div>
            ) : (
              <div className="h-14">{/* Placeholder to maintain layout */}</div>
            )}
          </div>
          
          <div className="order-1 lg:order-2 relative h-[450px] md:h-[550px]">
            <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-teal/10 z-0"></div>
            {llmInterfaces.map((llm, index) => (
              <div 
                key={llm.name}
                className={`absolute inset-5 transition-all duration-700 rounded-xl overflow-hidden ${index === currentLLMIndex ? 'opacity-100 scale-100 shadow-lg' : 'opacity-0 scale-95'} ${llm.interface}`}
              >
                <div className="flex items-center mb-6 p-4 border-b border-gray-700/30">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center">
                    {/* Display the actual logo */}
                    <img src={llm.logo} alt={`${llm.name} logo`} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-display font-semibold text-lg tracking-wide">{llm.name}</h3>
                </div>
                
                <div className="mb-6 p-4 rounded-lg bg-gray-500/10 backdrop-blur-sm border border-gray-500/20">
                  <p className="font-medium">{llm.query}</p>
                </div>
                
                <div className="space-y-4 px-4">
                  <div className="p-4 rounded-lg bg-gray-500/10 backdrop-blur-sm border border-gray-500/20">
                    <p className="font-medium mb-3">Top-rated restaurants in Denver include:</p>
                    <ul className="space-y-2 pl-5 mt-2 list-disc">
                      <li className="animate-fadeIn" style={{ animationDelay: '100ms' }}>Guard and Grace (Steakhouse)</li>
                      <li className="animate-fadeIn" style={{ animationDelay: '200ms' }}>Root Down (Farm-to-table)</li>
                      <li className="animate-fadeIn" style={{ animationDelay: '300ms' }}>Tavernetta (Italian)</li>
                      <li className="animate-fadeIn" style={{ animationDelay: '400ms' }}>El Five (Mediterranean)</li>
                      <li className="animate-fadeIn" style={{ animationDelay: '500ms' }}>Hop Alley (Chinese)</li>
                    </ul>
                    <p className="mt-4 font-semibold text-red-400 animate-pulse-slow">Your restaurant is not mentioned in these results.</p>
                  </div>
                </div>
                
                <div className="mt-8 flex p-4">
                  <div className={`flex-1 ${llm.inputStyle} border border-gray-500/20`}>
                    <p>Ask a follow-up question...</p>
                  </div>
                  <button className={`ml-3 ${llm.buttonStyle} transition-all duration-300 hover:opacity-90 hover:shadow-lg`}>
                    Send
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
