import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ChangelogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">Changelog & Updates</h1>
              <p className="text-lg text-gray-700 mb-8">
                Track the evolution of the AHP Module 2.0 and stay informed about the latest improvements.
              </p>
            </div>
          </div>
        </section>
        
        {/* Version Timeline */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Version History</h2>
              
              <div className="relative border-l-4 border-primary ml-6 pl-10 pb-8">
                {/* Version 2.0 */}
                <div className="mb-16 relative">
                  <div className="absolute -left-14 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">Version 2.0</h3>
                      <div className="flex items-center">
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                          Current
                        </span>
                        <span className="text-gray-500">June 1, 2025</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      Our major update introduces comprehensive AI visibility reporting, enhanced entity recognition, and support for all major AI crawlers.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-3">New Features</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Weekly AI visibility reports with actionable insights</li>
                          <li>AI crawler activity tracking for all major AI systems</li>
                          <li>Enhanced entity relationship mapping</li>
                          <li>Competitive analysis against industry benchmarks</li>
                          <li>Dashboard for tracking AI visibility metrics over time</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3">Improvements</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>50% faster processing of page content</li>
                          <li>Reduced script size (now only 48KB)</li>
                          <li>Improved compatibility with content management systems</li>
                          <li>More granular control over which content gets enhanced</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3">Bug Fixes</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Fixed issue with dynamic content not being properly analyzed</li>
                          <li>Resolved conflicts with certain JavaScript frameworks</li>
                          <li>Improved handling of multilingual content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Version 1.5 */}
                <div className="mb-16 relative">
                  <div className="absolute -left-14 bg-gray-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">Version 1.5</h3>
                      <span className="text-gray-500">March 15, 2025</span>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      This update focused on expanding AI crawler support and improving the accuracy of entity detection.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-3">New Features</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Added support for Anthropic Claude and Perplexity AI crawlers</li>
                          <li>Basic reporting dashboard for site owners</li>
                          <li>WordPress plugin for easier installation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3">Improvements</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>30% more accurate entity detection</li>
                          <li>Improved handling of e-commerce product data</li>
                          <li>Better performance on mobile devices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Version 1.0 */}
                <div className="mb-16 relative">
                  <div className="absolute -left-14 bg-gray-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">Version 1.0</h3>
                      <span className="text-gray-500">October 10, 2024</span>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      The initial release of the AHP Module, focusing on making websites more comprehensible to AI crawlers.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Core Features</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Automatic enhancement of HTML with structured data</li>
                          <li>Support for Google AI and Bing AI crawlers</li>
                          <li>Basic entity recognition for common website elements</li>
                          <li>Simple installation via JavaScript snippet</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Features */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Upcoming Features</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-lg text-gray-700 mb-8">
                  We're constantly working to improve the AHP Module and help your website stay ahead in the AI-driven search landscape. Here's what's coming next:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">AI Content Recommendations</h3>
                      <p className="text-gray-700">
                        Get specific content recommendations based on what AI systems are looking for in your industry. Our system will analyze top-performing content and suggest improvements to help your content stand out.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Advanced API Integration</h3>
                      <p className="text-gray-700">
                        Connect your existing tools and platforms directly to the AHP Module through our upcoming API. This will allow for seamless integration with your content management system, analytics platforms, and marketing tools.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">AI Visibility Competitor Analysis</h3>
                      <p className="text-gray-700">
                        See how your AI visibility compares to specific competitors in your industry. Get detailed insights into what they're doing well and where you have opportunities to outperform them in AI-generated answers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Update Notifications */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Stay Updated</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-lg text-gray-700 mb-8">
                  Want to be the first to know about new features and updates? Subscribe to our newsletter or follow us on social media.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Newsletter Subscription</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <button type="submit" className="btn-primary">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://twitter.com/aihandshake" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="https://linkedin.com/company/aihandshake" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="https://github.com/aihandshake" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-8">
              Ready to improve your AI visibility?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Install the latest version of AHP Module 2.0 and start getting detailed AI visibility reports.
            </p>
            <Link href="/install" className="bg-white text-primary font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
              Get Started
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
