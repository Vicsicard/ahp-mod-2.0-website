"use client";

import React from 'react';
import Link from 'next/link';

const InstallSection = () => {
  return (
    <>
      <section id="install" className="py-20 px-8 bg-gradient-to-br from-charcoal to-graphite text-soft-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-wide">
              <span className="text-gradient">Install</span> AI Handshake in Under 60 Seconds
            </h2>
            <div className="w-24 h-1 bg-teal mx-auto"></div>
          </div>

          <div className="bg-graphite/50 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-xl border border-teal/20">
            <ol className="leading-relaxed text-lg space-y-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center mr-4 mt-1">
                  <span className="font-display font-bold text-teal">1</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-soft-white mb-2">COPY THE CODE SNIPPET</h3>
                  <p className="mb-3 text-soft-white/80">Add the following script to the <code className="bg-charcoal px-2 py-1 rounded font-mono text-teal">&lt;head&gt;</code> of your website:</p>
                  <pre className="bg-charcoal p-5 rounded-lg mt-2 text-teal overflow-x-auto border border-teal/20 font-mono">
                    &lt;script src="https://cdn.aihandshake.org/ahp-mod-2.0.js" async&gt;&lt;/script&gt;
                  </pre>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center mr-4 mt-1">
                  <span className="font-display font-bold text-teal">2</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-soft-white mb-2">PASTE IT BEFORE THE CLOSING HEAD TAG</h3>
                  <p className="text-soft-white/80">Place it before the <code className="bg-charcoal px-2 py-1 rounded font-mono text-teal">&lt;/head&gt;</code> tag. You only need to do this once.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center mr-4 mt-1">
                  <span className="font-display font-bold text-teal">3</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-soft-white mb-2">THAT'S IT. YOU'RE LIVE.</h3>
                  <p className="text-soft-white/80">AI bots will begin detecting your structured presence within hours. Your first report will arrive by email in 7 days.</p>
                </div>
              </li>
            </ol>

            <div className="mt-10 p-4 border border-violet/30 bg-violet/5 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="font-display font-medium text-violet">OPTIONAL ADD-ON:</span>
                  <Link href="#send-to-dev" className="ml-2 text-teal hover:text-teal/80 transition-colors underline underline-offset-2">
                    Send instructions to your web admin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="before-after-example" className="py-20 px-8 bg-gradient-to-t from-charcoal to-graphite text-soft-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              See the <span className="text-gradient">Difference</span>: One Line Changes Everything
            </h2>
            <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
            <p className="text-soft-white/80 max-w-2xl mx-auto text-lg">
              A simple implementation that transforms how AI perceives your website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Before AHP */}
            <div className="bg-graphite/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-red-500/20 transform transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-red-400 uppercase tracking-wide">Before AI Handshake</h3>
              </div>
              <pre className="bg-charcoal text-soft-white/90 p-6 rounded-lg text-sm overflow-x-auto border border-graphite font-mono leading-relaxed">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Website</title>
</head>
<body>
  <h1>Welcome to My Site</h1>
  <p>Great content, but not machine-readable.</p>
</body>
</html>`}
              </pre>
              <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                <p className="text-soft-white/80 text-sm">AI systems struggle to understand your content's context, leading to poor visibility in AI-powered search results.</p>
              </div>
            </div>

            {/* After AHP */}
            <div className="bg-graphite/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-teal/20 transform transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-teal uppercase tracking-wide">After AI Handshake Installed</h3>
              </div>
              <pre className="bg-charcoal text-soft-white/90 p-6 rounded-lg text-sm overflow-x-auto border border-graphite font-mono leading-relaxed">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example Website</title>

  <!-- ✅ AI HANDSHAKE INSTALLED -->
  <script src="https://cdn.aihandshake.org/ahp-mod-2.0.js" async></script>

</head>
<body>
  <h1>Welcome to My Site</h1>
  <p>Now visible to AI bots with structured clarity.</p>
</body>
</html>`}
              </pre>
              <div className="mt-6 p-4 bg-teal/5 border border-teal/20 rounded-lg">
                <p className="text-soft-white/80 text-sm">Our script automatically adds semantic structure that helps AI systems understand and properly represent your content in responses.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/install" className="btn-primary inline-flex items-center group">
              <span className="relative z-10">GET STARTED NOW</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstallSection;
