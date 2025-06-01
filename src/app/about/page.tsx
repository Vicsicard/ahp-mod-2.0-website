import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">About AI Handshake</h1>
              <p className="text-lg text-gray-700 mb-8">
                We're on a mission to help websites thrive in the new AI-driven search landscape.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Our Story</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md mb-12">
                <p className="text-lg text-gray-700 mb-6">
                  AI Handshake was born out of a simple observation: as AI systems increasingly mediate how people find information online, websites needed a new approach to ensure their content is properly understood and referenced by these systems.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Beginning</h3>
                    <p className="text-gray-700">
                      In early 2023, our founder, a veteran SEO professional with over 15 years of experience, noticed a troubling trend. Websites that had excellent traditional SEO were being overlooked in AI-generated answers, while less optimized sites with clearer entity relationships were being featured prominently.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Realization</h3>
                    <p className="text-gray-700">
                      After months of research and testing, we discovered that AI systems understand and process web content fundamentally differently than traditional search engines. While traditional SEO focused on keywords and backlinks, AI systems prioritize structured data, entity relationships, and semantic context.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Solution</h3>
                    <p className="text-gray-700">
                      We developed the AHP Module 1.0 as a proof of concept, helping a small group of websites restructure their content for AI comprehension. The results were remarkable – these sites saw a 300% increase in appearances within AI-generated answers within just 60 days.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">Today</h3>
                    <p className="text-gray-700">
                      With the launch of AHP Module 2.0, we've refined our technology to work with all major AI systems and provide detailed analytics on how AI crawlers interpret your content. Our mission is to help every website thrive in this new era of AI-mediated search.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We're a diverse group of SEO experts, data scientists, and developers passionate about helping websites succeed in the AI era.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">Alex Rodriguez</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-gray-700">
                  15+ years in SEO and digital marketing. Previously led SEO teams at major tech companies before founding AHP Module.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">Dr. Priya Sharma</h3>
                <p className="text-gray-600 mb-4">Chief Data Scientist</p>
                <p className="text-gray-700">
                  PhD in Machine Learning with expertise in natural language processing and how AI systems interpret web content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">Marcus Chen</h3>
                <p className="text-gray-600 mb-4">Lead Developer</p>
                <p className="text-gray-700">
                  Full-stack developer with a passion for creating tools that bridge the gap between websites and AI systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We're constantly researching how AI systems evolve and updating our technology to ensure your website stays ahead of the curve in AI visibility.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Transparency</h3>
                  <p className="text-gray-700">
                    We believe in clear communication about how AI systems work and how our module helps. No black boxes or magic promises – just data-driven results.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Customer Success</h3>
                  <p className="text-gray-700">
                    Your success is our success. We're committed to providing not just technology, but the support and guidance needed to maximize your AI visibility.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
                  <p className="text-gray-700">
                    We're constantly refining our technology based on real-world results and feedback from our users to deliver ever-improving AI visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Our Approach to AI Visibility</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-lg text-gray-700 mb-8">
                  Unlike traditional SEO tools that focus on keywords and backlinks, our approach is built around how AI systems actually process and understand web content.
                </p>
                
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl font-bold">1</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Entity-First Thinking</h3>
                      <p className="text-gray-700">
                        We focus on clearly defining the entities on your website (your business, products, services, etc.) and their relationships to each other. This is how AI systems build their understanding of your content.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl font-bold">2</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Structured Data Enhancement</h3>
                      <p className="text-gray-700">
                        We implement comprehensive Schema.org markup that goes beyond basic SEO requirements to provide AI systems with the detailed, structured information they need.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl font-bold">3</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Content Context Optimization</h3>
                      <p className="text-gray-700">
                        We help AI systems understand not just what your content says, but what it means in context – the problems it solves, the questions it answers, and its relevance to user queries.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl font-bold">4</span>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3">Continuous Monitoring & Adaptation</h3>
                      <p className="text-gray-700">
                        As AI systems evolve, so does our module. We continuously monitor how AI crawlers interact with your site and adapt our approach to ensure optimal visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Us */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8 text-center">Get in Touch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-700">support@ahpmodule.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-700">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-700">
                          123 Tech Avenue<br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">@AHPModule</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">LinkedIn/AHPModule</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-primary mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">GitHub/AHPModule</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-700 mb-4">
                      Subscribe to our newsletter for the latest updates on AI SEO trends and product news.
                    </p>
                    <div className="flex">
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors duration-300">
                        Subscribe
                      </button>
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
              Ready to optimize your website for AI visibility?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of websites already using AHP Module 2.0 to improve their visibility in AI-generated answers.
            </p>
            <Link href="/install" className="bg-white text-primary font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
