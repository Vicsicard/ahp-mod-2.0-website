"use client";

import React from 'react';
import Image from 'next/image';

const OldVsNewSection = () => {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-charcoal via-charcoal/95 to-graphite text-soft-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-wide">
            The <span className="text-gradient">Evolution</span> of Digital Visibility
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-soft-white/80 max-w-2xl mx-auto text-lg">
            From traditional SEO to AI-powered content discovery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Old SEO World - Google */}
          <div className="bg-graphite/50 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-xl border border-teal/10 transform transition-all duration-300 hover:shadow-teal/5 hover:-translate-y-1">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 mr-5 relative flex items-center justify-center bg-white rounded-lg p-2">
                <img 
                  src="/images/google-logo.svg" 
                  alt="Google logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-soft-white">Traditional SEO World</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-green-400 mb-1">KEYWORD OPTIMIZATION</h4>
                  <p className="text-soft-white/70">Focus on specific keywords and phrases that users might search for.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-green-400 mb-1">BACKLINK BUILDING</h4>
                  <p className="text-soft-white/70">Acquiring links from other websites to boost authority and rankings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-green-400 mb-1">TECHNICAL SEO</h4>
                  <p className="text-soft-white/70">Optimizing site structure, speed, and mobile-friendliness.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-green-400 mb-1">CONTENT LENGTH</h4>
                  <p className="text-soft-white/70">Often prioritizing longer content to cover more keywords.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 p-6 bg-charcoal/50 rounded-lg border border-green-500/10">
              <p className="text-soft-white/80 italic font-light">
                "Traditional SEO focuses on getting your website to rank high in search results, driving traffic to your site."
              </p>
            </div>
          </div>
          
          {/* New AI World - ChatGPT */}
          <div className="bg-graphite/50 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-xl border border-violet/10 transform transition-all duration-300 hover:shadow-violet/5 hover:-translate-y-1">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 mr-5 relative bg-violet/20 rounded-lg flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.5093-2.6067-1.4997z" fill="#c084fc"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-soft-white">New AI World</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-violet mb-1">ENTITY RECOGNITION</h4>
                  <p className="text-soft-white/70">AI systems identify and understand real-world entities and their relationships.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-violet mb-1">STRUCTURED DATA</h4>
                  <p className="text-soft-white/70">Machine-readable format that helps AI understand your content's context.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-violet mb-1">SEMANTIC CONTEXT</h4>
                  <p className="text-soft-white/70">Understanding the meaning behind content, not just matching keywords.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-violet mb-1">DIRECT ANSWERS</h4>
                  <p className="text-soft-white/70">Content structured to be directly quoted in AI-generated responses.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 p-6 bg-charcoal/50 rounded-lg border border-violet/10">
              <p className="text-soft-white/80 italic font-light">
                "AI optimization focuses on being the source for AI-generated answers, bypassing the need for users to visit your site."
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 mb-16 text-center">
          <div className="bg-gradient-to-r from-teal/20 via-violet/20 to-teal/20 backdrop-blur-md rounded-xl p-10 border-2 border-teal/30 max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-teal mr-4"></div>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-gradient uppercase">AHP MODULE 2.0 BRIDGES BOTH WORLDS</h3>
              <div className="w-12 h-1 bg-violet ml-4"></div>
            </div>
            
            <p className="text-soft-white/90 text-lg md:text-xl mb-6 font-light leading-relaxed">
              We give website owners control, insight, and strategic advantage in how LLMs interact with their content.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
              <div className="bg-charcoal/50 backdrop-blur-sm p-5 rounded-lg border border-teal/20 flex-1 transform transition-all duration-300 hover:shadow-teal/10 hover:-translate-y-1">
                <h4 className="font-display text-lg font-semibold mb-2 text-teal">PERMISSION ENGINE</h4>
                <p className="text-soft-white/80">Control how AI systems access and use your valuable content</p>
              </div>
              
              <div className="bg-charcoal/50 backdrop-blur-sm p-5 rounded-lg border border-violet/20 flex-1 transform transition-all duration-300 hover:shadow-violet/10 hover:-translate-y-1">
                <h4 className="font-display text-lg font-semibold mb-2 text-violet">CRAWLER MONITOR</h4>
                <p className="text-soft-white/80">Track and analyze how AI systems interact with your website</p>
              </div>
              
              <div className="bg-charcoal/50 backdrop-blur-sm p-5 rounded-lg border border-teal/20 flex-1 transform transition-all duration-300 hover:shadow-teal/10 hover:-translate-y-1">
                <h4 className="font-display text-lg font-semibold mb-2 text-teal">VISIBILITY OPTIMIZER</h4>
                <p className="text-soft-white/80">Enhance your content's presence across all AI platforms</p>
              </div>
            </div>
            
            <p className="text-soft-white/90 mt-8 font-semibold italic">
              Not just a metadata layer — a live permission engine, crawler monitor, and visibility optimizer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldVsNewSection;
