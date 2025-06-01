import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">Support & Resources</h1>
              <p className="text-lg text-gray-700 mb-8">
                We're here to help you get the most out of AHP Module 2.0.
              </p>
            </div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">How Can We Help You?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Live Chat Support</h3>
                  <p className="text-gray-700 mb-6">
                    Chat with our support team in real-time for immediate assistance with installation, troubleshooting, or any questions about AHP Module 2.0.
                  </p>
                  <button className="btn-primary">
                    Start Live Chat
                  </button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Email Support</h3>
                  <p className="text-gray-700 mb-6">
                    Send us an email with your questions or issues, and our support team will get back to you within 24 hours with a detailed response.
                  </p>
                  <Link href="mailto:support@aihandshake.org" className="btn-primary">
                    Email Support
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-6">Schedule a Consultation</h3>
                <p className="text-gray-700 mb-6">
                  Need personalized help with your AI visibility strategy? Schedule a one-on-one consultation with one of our AI SEO experts to discuss your specific needs and goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300">
                    15-Minute Quick Help
                  </button>
                  <button className="bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300">
                    30-Minute Strategy
                  </button>
                  <button className="bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-md hover:bg-gray-200 transition-colors duration-300">
                    60-Minute Deep Dive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Knowledge Base */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Knowledge Base</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Browse our collection of guides, tutorials, and answers to frequently asked questions.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="text-primary hover:underline">Installation Guide</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">First-Time Setup</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Understanding Your First Report</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Quick Start for WordPress</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Quick Start for Shopify</Link>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">Troubleshooting</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="text-primary hover:underline">Common Installation Issues</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Module Not Loading</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Missing Reports</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Script Conflicts</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">API Key Problems</Link>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">Best Practices</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="text-primary hover:underline">Optimizing Content for AI</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Structured Data Tips</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Entity Relationship Guide</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Improving Your AI Score</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Multi-Site Management</Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="#" className="btn-primary">
                  Browse All Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">How quickly will I see results after installing AHP Module 2.0?</h3>
                  <p className="text-gray-700">
                    The module begins optimizing your content immediately after installation. You'll receive your first AI visibility report within 7 days, showing initial improvements. Most users see significant increases in AI visibility within 2-4 weeks as AI crawlers process and index your enhanced content.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Does AHP Module 2.0 work with all content management systems?</h3>
                  <p className="text-gray-700">
                    Yes, AHP Module 2.0 is designed to work with any website, regardless of the platform or CMS you're using. We offer specialized plugins for popular platforms like WordPress, Shopify, and Wix for even easier installation, but the core script can be added to any HTML page.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Will the module slow down my website?</h3>
                  <p className="text-gray-700">
                    No. The AHP Module 2.0 is designed to be lightweight and loads asynchronously, meaning it won't impact your page load times or user experience. The module is typically less than 50KB and uses minimal resources.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">How is AHP Module different from traditional SEO tools?</h3>
                  <p className="text-gray-700">
                    Traditional SEO tools focus on optimizing for keyword rankings in search engine results pages. AHP Module specifically targets how AI systems understand and interpret your content, optimizing for visibility in AI-generated answers and ensuring your content is properly comprehended by AI crawlers.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">Can I use AHP Module alongside my existing SEO tools?</h3>
                  <p className="text-gray-700">
                    Absolutely! AHP Module 2.0 complements your existing SEO strategy and tools. While traditional SEO focuses on search engine rankings, AHP Module ensures your content is optimized for AI comprehension, giving you the best of both worlds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Join Our Community</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-lg text-gray-700 mb-8">
                  Connect with other AHP Module users, share insights, and stay updated on the latest AI SEO trends in our community forums and social channels.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="#" className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors duration-300">
                    <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2">Community Forum</h3>
                    <p className="text-gray-700">
                      Join discussions, ask questions, and share your experiences.
                    </p>
                  </Link>
                  
                  <Link href="#" className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors duration-300">
                    <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2">Monthly Webinars</h3>
                    <p className="text-gray-700">
                      Learn from experts in our live educational sessions.
                    </p>
                  </Link>
                  
                  <Link href="#" className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors duration-300">
                    <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2">Video Tutorials</h3>
                    <p className="text-gray-700">
                      Watch step-by-step guides and implementation tips.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Contact Us Directly</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-lg text-gray-700 mb-8">
                  Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="What is your message about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-8">
              Need help with installation?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Our support team can help you get set up quickly and ensure your AHP Module is properly configured.
            </p>
            <Link href="/install" className="bg-white text-primary font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
              View Installation Guide
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
