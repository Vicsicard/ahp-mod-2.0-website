'use client';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-charcoal to-graphite">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-soft-white uppercase tracking-wide">HOW IT <span className="text-gradient">WORKS</span></h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-soft-white/80 max-w-2xl mx-auto text-lg">
            Our AI-powered system analyzes your website and provides actionable insights to improve your visibility to AI systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="bg-graphite/50 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center border border-teal/20 hover:border-teal/40 transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-soft-white uppercase tracking-wide">1. WE SCAN YOUR SITE</h3>
            <p className="text-soft-white/70 leading-relaxed">
              We fetch and analyze your public homepage to see what AI systems can understand from it, identifying key elements and content structure.
            </p>
          </div>
          
          <div className="bg-graphite/50 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center border border-teal/20 hover:border-teal/40 transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-soft-white uppercase tracking-wide">2. WE ANALYZE AI VISIBILITY</h3>
            <p className="text-soft-white/70 leading-relaxed">
              Our advanced algorithm checks for structured data, semantic HTML, and other signals that modern AI systems use to understand and interpret your content.
            </p>
          </div>
          
          <div className="bg-graphite/50 backdrop-blur-sm rounded-xl shadow-xl p-8 text-center border border-teal/20 hover:border-teal/40 transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-soft-white uppercase tracking-wide">3. YOU GET ACTIONABLE RESULTS</h3>
            <p className="text-soft-white/70 leading-relaxed">
              We provide a comprehensive visibility score, identify specific issues, and offer tailored solutions to dramatically improve your site's AI comprehension and visibility.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center bg-teal/5 border border-teal/20 rounded-xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-soft-white/90 text-lg leading-relaxed">
            The AHP Module 2.0 goes beyond this simple scan, providing continuous monitoring, 
            detailed reports, and automatic optimization to ensure maximum visibility to AI systems.
          </p>
          <div className="mt-6 animate-pulse">
            <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium">POWERED BY ADVANCED AI TECHNOLOGY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
