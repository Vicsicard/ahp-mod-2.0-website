import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import OldVsNewSection from '@/components/OldVsNewSection';
import InstallSection from '@/components/InstallSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Problem Section */}
        <OldVsNewSection />
        
        {/* Solution Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">AHP Module as the Solution</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The AHP Module 2.0 bridges the gap between traditional SEO and AI-ready content by making your website machine-readable and AI-friendly.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Structures your content for AI crawlers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Enhances metadata for machine understanding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Provides weekly AI visibility reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Adapts to evolving AI crawler capabilities</span>
                  </li>
                </ul>
                <Link href="/solution" className="btn-primary">
                  Learn More About the Solution
                </Link>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-xl">
                {/* Placeholder for solution visualization */}
                <div className="aspect-video bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                  <p className="text-center text-gray-500">
                    Solution visualization placeholder<br />
                    (Diagram showing how AHP Module works)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">How It Works</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Simple integration, powerful results. Get your website AI-ready in minutes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Install</h3>
                <p className="text-gray-700">
                  Add a simple code snippet to your website. No complex setup required.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Analyze</h3>
                <p className="text-gray-700">
                  The module automatically analyzes your content and enhances it for AI comprehension.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Monitor</h3>
                <p className="text-gray-700">
                  Receive weekly reports on your AI visibility and recommendations for improvement.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/install" className="btn-primary">
                Download the Module
              </Link>
            </div>
          </div>
        </section>
        
        {/* Mic-Drop Close Section */}
        <section className="bg-dark text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-8">
              Don't just be searchable.<br />
              <span className="text-gradient">Be the answer.</span>
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              The future of discovery isn't about being found—it's about being understood. AHP Module 2.0 ensures your content speaks the language of AI.
            </p>
            <Link href="/install" className="btn-primary bg-white text-dark hover:bg-gray-100">
              Get Started Now
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
