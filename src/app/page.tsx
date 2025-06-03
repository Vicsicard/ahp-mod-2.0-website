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
                <h2 className="heading-lg mb-6 text-teal">What We Do <span className="text-violet">(AHP Module 2.0)</span></h2>
                <p className="text-lg text-white mb-8">
                  We make your website <strong className="text-teal">AI-visible</strong>, <strong className="text-violet">AI-citable</strong>, and <strong className="text-teal">semantically optimized</strong> for this new frontier of search.
                </p>
                <ul className="space-y-6 mb-8">
                  <li className="flex items-start">
                    <div className="text-teal text-xl font-bold mr-3">
                      ✅
                    </div>
                    <span className="text-lg text-white">Reveal which AI bots are crawling your site</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal text-xl font-bold mr-3">
                      ✅
                    </div>
                    <span className="text-lg text-white">Show what metadata they're missing or misinterpreting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal text-xl font-bold mr-3">
                      ✅
                    </div>
                    <span className="text-lg text-white">Fix broken authorship, topic, and citation signals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal text-xl font-bold mr-3">
                      ✅
                    </div>
                    <span className="text-lg text-white">Ensure your best content is the <strong className="text-violet">source</strong>, not the footnote</span>
                  </li>
                </ul>
                <Link href="/solution" className="btn-primary text-lg px-8 py-4">
                  Learn More About Our Solution
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-charcoal to-graphite p-8 rounded-xl shadow-lg border border-teal/20">
                <h3 className="text-2xl font-bold text-teal mb-6">Why It Matters</h3>
                
                <p className="text-white text-lg mb-6 leading-relaxed">
                  Our research shows that <span className="flex items-center inline-flex gap-2"><img src="/images/chatgpt-logo.svg" alt="ChatGPT logo" className="h-6 w-6 inline" /> ChatGPT</span> based search results generate <span className="text-teal font-bold">10x more user engagement</span> than traditional <span className="flex items-center inline-flex gap-2"><img src="/images/google-logo.svg" alt="Google logo" className="h-6 w-6 inline" /> Google</span> snippets — but only for sites that are properly embedded in the AI layer.
                </p>
                
                <div className="bg-charcoal/50 backdrop-blur-sm p-6 rounded-lg border border-violet/20 mb-6">
                  <p className="text-white text-lg italic">
                    If your competitors are being cited and you're not, you're already losing visibility — whether you know it or not.
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center">
                      <img src="/images/chatgpt-logo.svg" alt="ChatGPT logo" className="h-10 w-10" />
                    </div>
                    <div className="text-center">
                      <p className="text-violet font-bold">10x</p>
                      <p className="text-white text-sm">Engagement</p>
                    </div>
                  </div>
                  
                  <div className="text-white text-4xl font-light">vs</div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center">
                      <img src="/images/google-logo.svg" alt="Google logo" className="h-10 w-10" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold">1x</p>
                      <p className="text-white text-sm">Baseline</p>
                    </div>
                  </div>
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
                <div className="bg-teal bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Install</h3>
                <p className="text-gray-700">
                  Add a simple code snippet to your website. No complex setup required.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-teal bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Analyze</h3>
                <p className="text-gray-700">
                  The module automatically scans your content and evaluates its AI readability—highlighting structural gaps, weak metadata, and opportunities for clearer interpretation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-teal bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Monitor</h3>
                <p className="text-gray-700">
                  Receive weekly reports on your AI visibility and strategic recommendations to improve how your content is understood and cited by AI systems.
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
        <section className="bg-charcoal text-soft-white section-padding">
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
