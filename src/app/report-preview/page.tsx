import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ReportPreviewPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">AI Visibility Report Preview</h1>
              <p className="text-lg text-gray-700 mb-8">
                Get a sneak peek at the comprehensive AI visibility reports you'll receive with the AHP Module 2.0.
              </p>
            </div>
          </div>
        </section>
        
        {/* Report Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">What's Included in Your Weekly Reports</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  The AHP Module 2.0 generates detailed weekly reports that provide actionable insights into how AI systems understand and interpret your website content. These reports help you identify opportunities to improve your visibility in AI-generated answers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2">Performance Metrics</h3>
                    <p className="text-gray-700">
                      Track your AI visibility score and see how it changes over time.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2">Actionable Insights</h3>
                    <p className="text-gray-700">
                      Get specific recommendations to improve your AI comprehension score.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2">Competitive Analysis</h3>
                    <p className="text-gray-700">
                      See how your AI visibility compares to industry benchmarks.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link href="/install" className="btn-primary">
                    Get Your First Report
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Report Sections Preview */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <h2 className="heading-lg mb-12 text-center">Sample Report Sections</h2>
            
            <div className="max-w-5xl mx-auto space-y-16">
              {/* AI Comprehension Score */}
              <div>
                <h3 className="heading-md mb-6">AI Comprehension Score</h3>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="relative w-48 h-48">
                        <div className="absolute inset-0 rounded-full bg-gray-200"></div>
                        <div className="absolute inset-0 rounded-full bg-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 65%)' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-5xl font-bold">65</span>
                          <span className="text-gray-600">out of 100</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <p className="text-lg mb-4">
                        Your website's current AI comprehension score is <strong>65 out of 100</strong>, which is <span className="text-yellow-600">average</span> compared to similar websites in your industry.
                      </p>
                      
                      <h4 className="font-bold text-lg mb-2">What This Means:</h4>
                      <p className="text-gray-700 mb-4">
                        AI systems can understand the basic purpose of your website but may be missing important context about your specific offerings and unique value propositions.
                      </p>
                      
                      <h4 className="font-bold text-lg mb-2">Top Improvement Opportunities:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Add structured data for your key products/services</li>
                        <li>Enhance entity relationships between your business and location</li>
                        <li>Improve content organization on your homepage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Crawler Activity */}
              <div>
                <h3 className="heading-md mb-6">AI Crawler Activity</h3>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <p className="text-lg mb-6">
                    This section shows which AI systems have crawled your website in the past week and how they've interacted with your content.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI System</th>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crawl Frequency</th>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pages Crawled</th>
                          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Extraction</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-green-600 font-bold">G</span>
                              </div>
                              <div>Google AI</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">High (Daily)</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">12/15</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-xs text-gray-600">85% Successful</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-blue-600 font-bold">B</span>
                              </div>
                              <div>Bing AI</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Medium (Weekly)</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">8/15</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <span className="text-xs text-gray-600">60% Successful</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-purple-600 font-bold">A</span>
                              </div>
                              <div>Anthropic Claude</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Low (Monthly)</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">5/15</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                            <span className="text-xs text-gray-600">40% Successful</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Recommendation:</strong> Improve your content extraction success rate for Bing AI and Anthropic Claude by implementing the structured data improvements suggested in your action plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Analysis */}
              <div>
                <h3 className="heading-md mb-6">Content Analysis</h3>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <p className="text-lg mb-6">
                    This section analyzes how well your content is structured for AI comprehension and identifies specific improvements.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-bold">Homepage: Missing Entity Relationships</h4>
                          <p className="text-gray-700 mt-1">
                            Your homepage doesn't clearly establish the relationship between your business, location, and primary offerings. AI crawlers are having difficulty understanding what you do and where you operate.
                          </p>
                          <div className="mt-2">
                            <span className="text-sm font-medium text-gray-500">Affected Pages:</span>
                            <span className="ml-2 text-sm text-gray-700">Homepage, About Us</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-bold">Product Pages: Incomplete Structured Data</h4>
                          <p className="text-gray-700 mt-1">
                            Your product pages have basic structured data but are missing key attributes like price, availability, and reviews that AI systems use to understand your offerings.
                          </p>
                          <div className="mt-2">
                            <span className="text-sm font-medium text-gray-500">Affected Pages:</span>
                            <span className="ml-2 text-sm text-gray-700">All Product Pages (5)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-bold">Contact Page: Well Structured</h4>
                          <p className="text-gray-700 mt-1">
                            Your contact page has excellent structured data that clearly communicates your business hours, location, and contact methods to AI crawlers.
                          </p>
                          <div className="mt-2">
                            <span className="text-sm font-medium text-gray-500">Affected Pages:</span>
                            <span className="ml-2 text-sm text-gray-700">Contact Us</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Plan */}
              <div>
                <h3 className="heading-md mb-6">Personalized Action Plan</h3>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <p className="text-lg mb-6">
                    Based on our analysis, here are the top actions you should take to improve your AI visibility:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <h4 className="font-bold text-lg">Priority #1: Enhance Homepage Entity Relationships</h4>
                      <p className="text-gray-700 mt-2">
                        Add clear, structured information about your business type, location, and primary offerings to your homepage. This will help AI crawlers understand the fundamental nature of your business.
                      </p>
                      <div className="mt-4">
                        <span className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-2.5 py-0.5 rounded-full">High Impact</span>
                        <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">Easy Implementation</span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <h4 className="font-bold text-lg">Priority #2: Complete Product Structured Data</h4>
                      <p className="text-gray-700 mt-2">
                        Enhance your product pages with complete Schema.org Product markup including price, availability, reviews, and detailed specifications.
                      </p>
                      <div className="mt-4">
                        <span className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-2.5 py-0.5 rounded-full">High Impact</span>
                        <span className="ml-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">Medium Implementation</span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <h4 className="font-bold text-lg">Priority #3: Improve Content Organization</h4>
                      <p className="text-gray-700 mt-2">
                        Restructure your content with clear headings, lists, and semantic HTML to help AI crawlers understand the hierarchy and relationships in your content.
                      </p>
                      <div className="mt-4">
                        <span className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-2.5 py-0.5 rounded-full">Medium Impact</span>
                        <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">Easy Implementation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-gray-700 mb-4">
                      The AHP Module 2.0 can automatically implement many of these improvements for you.
                    </p>
                    <Link href="/install" className="btn-primary">
                      Install AHP Module 2.0 Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">What Our Users Say About Their Reports</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Hear from SEO professionals and site owners who have used AHP Module 2.0 reports to improve their AI visibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">SEO Director, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The weekly reports have been invaluable in helping us adapt our SEO strategy for the AI era. We've seen a 43% increase in our content being featured in AI answers since implementing the recommended changes."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold">Michael Chen</h3>
                    <p className="text-sm text-gray-600">Owner, Local Restaurant</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "As a small business owner, I didn't have time to figure out AI SEO. The AHP Module reports gave me clear, actionable steps that even I could implement. Now my restaurant shows up in AI responses for local dining queries."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold">Jessica Martinez</h3>
                    <p className="text-sm text-gray-600">Digital Marketing Agency</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "We've integrated AHP Module reports into our client deliverables. The competitive analysis section helps us show clients exactly how they stack up against competitors in AI visibility."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-8">
              Ready to get your first AI visibility report?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Install the AHP Module 2.0 today and receive your personalized AI visibility report within 7 days.
            </p>
            <Link href="/install" className="bg-white text-primary font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
              Install Now
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
