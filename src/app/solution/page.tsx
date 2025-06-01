import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SolutionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">The AHP Module 2.0 Solution</h1>
              <p className="text-lg text-gray-700 mb-8">
                How we make your site machine-readable and ensure your content is understood by AI crawlers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Who It's For Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Who It's For</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">SEO Professionals</h3>
                  <p className="text-gray-700">
                    Evolve your SEO strategy beyond keywords to ensure your content is optimized for AI comprehension and visibility.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Site Owners</h3>
                  <p className="text-gray-700">
                    Ensure your business is visible in the new AI-driven search landscape without requiring technical expertise.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Agencies</h3>
                  <p className="text-gray-700">
                    Offer cutting-edge AI optimization services to your clients and stay ahead of the evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Crawlers Understanding Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">What AI Crawlers Do & Don't Understand</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-green-500">What AI Crawlers Understand</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">✓</div>
                      <div>
                        <strong>Structured Data:</strong> Clear, well-organized information with proper markup
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">✓</div>
                      <div>
                        <strong>Entity Relationships:</strong> How different pieces of information relate to each other
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">✓</div>
                      <div>
                        <strong>Semantic Context:</strong> The meaning and purpose of content within its context
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">✓</div>
                      <div>
                        <strong>Comprehensive Information:</strong> Complete answers to potential user questions
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-red-500">What AI Crawlers Struggle With</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1">✗</div>
                      <div>
                        <strong>Unstructured Content:</strong> Information without clear organization or hierarchy
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1">✗</div>
                      <div>
                        <strong>Implied Context:</strong> Information that relies on human inference or background knowledge
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1">✗</div>
                      <div>
                        <strong>Visual-Only Information:</strong> Content presented only in images without proper alt text
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1">✗</div>
                      <div>
                        <strong>Keyword Stuffing:</strong> Old SEO tactics that don't provide meaningful context
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How AHP Makes Sites Machine-Readable */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">How AHP Makes Your Site Machine-Readable</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-4">Enhanced Metadata Structure</h3>
                      <p className="text-gray-700 mb-4">
                        The AHP Module automatically enhances your existing metadata with AI-friendly attributes that clearly define your content's purpose, context, and relationships.
                      </p>
                      <p className="text-gray-700">
                        This includes optimizing title tags, meta descriptions, and adding appropriate schema markup tailored to your specific content type.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-4">Real-Time Content Analysis</h3>
                      <p className="text-gray-700 mb-4">
                        Our module continuously analyzes your content to identify key entities, relationships, and information that AI crawlers need to fully understand your offerings.
                      </p>
                      <p className="text-gray-700">
                        This dynamic analysis adapts to content changes and evolving AI crawler capabilities, ensuring your site remains optimized.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-4">Structured Data Implementation</h3>
                      <p className="text-gray-700 mb-4">
                        The module automatically generates and injects appropriate Schema.org markup that helps AI crawlers understand exactly what your content represents.
                      </p>
                      <p className="text-gray-700">
                        This structured data clearly identifies your business type, products, services, and other critical information that AI systems use to categorize and reference your content.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-4">AI Visibility Monitoring</h3>
                      <p className="text-gray-700 mb-4">
                        The module tracks how AI crawlers interact with your content and provides detailed reports on your visibility across different AI platforms.
                      </p>
                      <p className="text-gray-700">
                        These insights help you understand how your content is being interpreted and where improvements can be made for better AI comprehension.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Before vs After Comparison */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Pre-AHP vs Post-AHP Output</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                See the difference in how AI systems interpret your content before and after implementing the AHP Module.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-red-500">Before AHP Module</h3>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <p className="font-bold mb-2">AI Query: "Best Italian restaurant in Denver"</p>
                      <div className="border-l-4 border-red-500 pl-4 py-2 mb-4">
                        <p className="italic text-gray-700">Your restaurant is not mentioned in the results.</p>
                      </div>
                      
                      <p className="font-bold mb-2">Why?</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>AI couldn't identify your business as a restaurant</li>
                        <li>No structured data about cuisine type</li>
                        <li>Missing entity relationships (location, offerings)</li>
                        <li>Content not optimized for machine understanding</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-green-500">After AHP Module</h3>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <p className="font-bold mb-2">AI Query: "Best Italian restaurant in Denver"</p>
                      <div className="border-l-4 border-green-500 pl-4 py-2 mb-4">
                        <p className="italic text-gray-700">"Bella Pasta is a highly-rated Italian restaurant in Denver known for its homemade pasta and wood-fired pizza..."</p>
                      </div>
                      
                      <p className="font-bold mb-2">Why?</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Clear entity identification (Restaurant, Italian, Denver)</li>
                        <li>Structured data providing complete business information</li>
                        <li>Content organized for machine comprehension</li>
                        <li>Continuous optimization based on AI crawler behavior</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Data Tracking Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">What Data is Tracked & How It Helps</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6">Weekly AI Visibility Reports</h3>
                  <p className="text-gray-700 mb-6">
                    The AHP Module 2.0 provides comprehensive weekly reports that include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">AI Crawler Activity</h4>
                      <p className="text-gray-700">
                        Track which AI systems have crawled your site and how frequently they visit.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Content Extraction Analysis</h4>
                      <p className="text-gray-700">
                        See which pages and content elements were successfully extracted and understood by AI crawlers.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Metadata Audit</h4>
                      <p className="text-gray-700">
                        Comprehensive analysis of your metadata with pass/fail ratings for AI readiness.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">AI Comprehension Score</h4>
                      <p className="text-gray-700">
                        A proprietary score that measures how well AI systems understand your content.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Optimization Suggestions</h4>
                      <p className="text-gray-700">
                        Actionable recommendations to improve your content's AI visibility.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Competitive Analysis</h4>
                      <p className="text-gray-700">
                        See how your AI visibility compares to similar businesses in your industry.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6">How This Data Helps You</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <strong>Identify Content Gaps:</strong> Discover what information AI crawlers are missing from your site.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <strong>Prioritize Improvements:</strong> Focus your efforts on the areas that will have the biggest impact on AI visibility.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <strong>Track Progress:</strong> Monitor your AI comprehension score over time to see the impact of your optimizations.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <strong>Stay Ahead of Competitors:</strong> Gain insights into industry benchmarks and outperform your competition in AI visibility.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <strong>Adapt to AI Evolution:</strong> As AI crawlers evolve, your reports will highlight new opportunities and requirements.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-8">
              Ready to optimize your site for AI comprehension?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Install the AHP Module 2.0 today and start getting your first AI visibility report within a week.
            </p>
            <Link href="/install" className="bg-white text-primary font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
              Install Now to Get Your First Report
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
