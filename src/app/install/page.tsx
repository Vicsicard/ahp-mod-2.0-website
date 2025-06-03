import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InstallSection from '@/components/InstallSection';
import Link from 'next/link';

export default function InstallPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">Install AHP Module 2.0</h1>
              <p className="text-lg text-gray-700 mb-8">
                Follow these simple steps to make your website AI-ready and ensure your content is understood by AI crawlers.
              </p>
            </div>
          </div>
        </section>
        
        <InstallSection />
        
        {/* Before/After Examples */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Before & After Examples</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                See how AHP Module 2.0 transforms your HTML to make it AI-friendly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before Example */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-500">Before: Standard HTML</h3>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-md overflow-x-auto h-80 overflow-y-auto">
                  <pre className="text-sm">
                    <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Denver's Best Italian Restaurant</title>
  <meta name="description" content="Authentic Italian cuisine in Denver.">
</head>
<body>
  <header>
    <h1>Bella Pasta</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Welcome to Bella Pasta</h2>
      <p>Denver's premier Italian restaurant since 2010.</p>
      <p>We offer authentic Italian cuisine made with fresh ingredients.</p>
    </section>
    
    <section>
      <h2>Our Specialties</h2>
      <ul>
        <li>Homemade Pasta</li>
        <li>Wood-Fired Pizza</li>
        <li>Traditional Tiramisu</li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p> 2025 Bella Pasta. All rights reserved.</p>
    <p>123 Italian Street, Denver, CO</p>
  </footer>
</body>
</html>`}</code>
                  </pre>
                </div>
              </div>
              
              {/* After Example */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-500">After: AI-Optimized HTML</h3>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-md overflow-x-auto h-80 overflow-y-auto">
                  <pre className="text-sm">
                    <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Denver's Best Italian Restaurant | Bella Pasta</title>
  <meta name="description" content="Authentic Italian cuisine in Denver with homemade pasta, wood-fired pizza, and traditional tiramisu. Established 2010.">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Bella Pasta",
    "description": "Denver's premier Italian restaurant offering authentic cuisine made with fresh ingredients.",
    "servesCuisine": "Italian",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Italian Street",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "postalCode": "80202"
    },
    "telephone": "+1-303-555-1234",
    "openingHours": "Mo-Su 11:00-22:00",
    "menu": "https://bellapasta.com/menu",
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Specialties",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "name": "Homemade Pasta"
            },
            {
              "@type": "MenuItem",
              "name": "Wood-Fired Pizza"
            },
            {
              "@type": "MenuItem",
              "name": "Traditional Tiramisu"
            }
          ]
        }
      ]
    }
  }
  </script>
  <script src="https://aihandshake.org/module/module.js" async></script>
</head>
<body>
  <header>
    <h1>Bella Pasta</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Welcome to Bella Pasta</h2>
      <p>Denver's premier Italian restaurant since 2010.</p>
      <p>We offer authentic Italian cuisine made with fresh ingredients.</p>
    </section>
    
    <section>
      <h2>Our Specialties</h2>
      <ul>
        <li>Homemade Pasta</li>
        <li>Wood-Fired Pizza</li>
        <li>Traditional Tiramisu</li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p> 2025 Bella Pasta. All rights reserved.</p>
    <p>123 Italian Street, Denver, CO</p>
  </footer>
</body>
</html>`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
              <h3 className="heading-md mb-4">Key Differences</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">✓</div>
                  <div>
                    <strong>Enhanced Metadata:</strong> More descriptive title and meta description
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">✓</div>
                  <div>
                    <strong>Structured Data:</strong> Added Schema.org JSON-LD for restaurant information
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">✓</div>
                  <div>
                    <strong>Entity Recognition:</strong> Clear identification of business type, offerings, and location
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">✓</div>
                  <div>
                    <strong>AHP Module:</strong> Script added to continuously optimize and monitor AI visibility
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Common questions about installing and using the AHP Module 2.0.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Will installing the module slow down my website?</h3>
                <p className="text-gray-700">
                  No. The AHP Module 2.0 is designed to be lightweight and loads asynchronously, meaning it won't impact your page load times or user experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Do I need technical knowledge to install the module?</h3>
                <p className="text-gray-700">
                  Minimal technical knowledge is required. If you can add a script tag to your website's HTML, you can install the AHP Module. For content management systems like WordPress, we provide plugins for even easier installation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">How soon will I see results?</h3>
                <p className="text-gray-700">
                  The module begins optimizing your content immediately after installation. You'll receive your first AI visibility report within 7 days, showing how AI crawlers are interpreting your content and initial improvements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Can I install this on multiple websites?</h3>
                <p className="text-gray-700">
                  Yes. Each website requires its own unique Site ID and API Key. Contact our support team to set up additional websites under your account.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">What if I need help with installation?</h3>
                <p className="text-gray-700">
                  Our support team is available to assist with installation. You can also forward the installation instructions to your developer using the button below.
                </p>
                <button className="mt-4 bg-gray-100 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send to My Developer
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Troubleshooting */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Troubleshooting Tips</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-red-500">Issue: Module Not Loading</h3>
                  <p className="text-gray-700 mb-4">
                    If you don't see the "AHP Module 2.0 initialized successfully" message in your console:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Verify that the script tag is correctly placed in the <code>&lt;head&gt;</code> section</li>
                    <li>Check that your Site ID and API Key are correctly entered</li>
                    <li>Ensure there are no JavaScript errors on your page that might be preventing execution</li>
                    <li>Temporarily disable any ad blockers or content blockers that might be interfering</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-red-500">Issue: No Reports Received</h3>
                  <p className="text-gray-700 mb-4">
                    If you haven't received your weekly report after 7 days:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Verify that the email address associated with your account is correct</li>
                    <li>Check your spam or promotions folders</li>
                    <li>Ensure the module is properly installed and running on your website</li>
                    <li>Contact our support team for assistance</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-red-500">Issue: Conflicts With Other Scripts</h3>
                  <p className="text-gray-700 mb-4">
                    If you notice conflicts with other scripts on your website:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Try moving the AHP Module script to be the last script in your <code>&lt;head&gt;</code> section</li>
                    <li>Check the browser console for specific error messages</li>
                    <li>Contact our support team with details about the conflict for personalized assistance</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg mb-6">
                  Still having issues? Our support team is here to help.
                </p>
                <Link href="/support" className="btn-primary">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-8">
              Ready to make your website AI-ready?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Install AHP Module 2.0 today and start appearing in AI answers tomorrow.
            </p>
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg">
              Install AHP Module 2.0
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
