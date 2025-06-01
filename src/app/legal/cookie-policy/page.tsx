import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">Cookie Policy</h1>
              <p className="text-lg text-gray-700 mb-8">
                Last Updated: June 1, 2025
              </p>
            </div>
          </div>
        </section>
        
        {/* Cookie Policy Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="prose prose-lg max-w-none">
                  <p>
                    This Cookie Policy explains how AI Handshake ("we", "us", or "our") uses cookies and similar technologies on our website at <a href="https://aihandshake.org" className="text-primary hover:underline">aihandshake.org</a> (the "Website"). This Cookie Policy should be read together with our Privacy Policy and Terms of Service.
                  </p>
                  
                  <h2>What Are Cookies?</h2>
                  
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
                  </p>
                  
                  <h2>How We Use Cookies</h2>
                  
                  <p>
                    We use cookies for several purposes, including:
                  </p>
                  
                  <h3>Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the Website to function properly. They enable basic functions like page navigation, access to secure areas of the Website, and remembering your preferences. The Website cannot function properly without these cookies, and they cannot be disabled in our systems.
                  </p>
                  
                  <h3>Performance and Analytics Cookies</h3>
                  <p>
                    These cookies help us understand how visitors interact with the Website by collecting and reporting information anonymously. They help us improve the way our Website works, for example, by ensuring that users are finding what they are looking for easily.
                  </p>
                  
                  <h3>Functionality Cookies</h3>
                  <p>
                    These cookies enable the Website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
                  </p>
                  
                  <h3>Targeting and Advertising Cookies</h3>
                  <p>
                    These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                  </p>
                  
                  <h2>Specific Cookies We Use</h2>
                  
                  <table className="min-w-full bg-white border border-gray-300 my-6">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 border-b border-gray-300 text-left">Cookie Name</th>
                        <th className="py-3 px-4 border-b border-gray-300 text-left">Purpose</th>
                        <th className="py-3 px-4 border-b border-gray-300 text-left">Duration</th>
                        <th className="py-3 px-4 border-b border-gray-300 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-300">_ga</td>
                        <td className="py-3 px-4 border-b border-gray-300">Used by Google Analytics to distinguish users</td>
                        <td className="py-3 px-4 border-b border-gray-300">2 years</td>
                        <td className="py-3 px-4 border-b border-gray-300">Analytics</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-300">_gid</td>
                        <td className="py-3 px-4 border-b border-gray-300">Used by Google Analytics to distinguish users</td>
                        <td className="py-3 px-4 border-b border-gray-300">24 hours</td>
                        <td className="py-3 px-4 border-b border-gray-300">Analytics</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-300">_gat</td>
                        <td className="py-3 px-4 border-b border-gray-300">Used by Google Analytics to throttle request rate</td>
                        <td className="py-3 px-4 border-b border-gray-300">1 minute</td>
                        <td className="py-3 px-4 border-b border-gray-300">Analytics</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-300">ai_session</td>
                        <td className="py-3 px-4 border-b border-gray-300">Used to identify user sessions</td>
                        <td className="py-3 px-4 border-b border-gray-300">30 minutes</td>
                        <td className="py-3 px-4 border-b border-gray-300">Essential</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-300">ai_user</td>
                        <td className="py-3 px-4 border-b border-gray-300">Used to identify unique users</td>
                        <td className="py-3 px-4 border-b border-gray-300">1 year</td>
                        <td className="py-3 px-4 border-b border-gray-300">Essential</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-300">XSRF-TOKEN</td>
                        <td className="py-3 px-4 border-b border-gray-300">Used for security purposes to prevent cross-site request forgery</td>
                        <td className="py-3 px-4 border-b border-gray-300">Session</td>
                        <td className="py-3 px-4 border-b border-gray-300">Essential</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <h2>Third-Party Cookies</h2>
                  
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website, deliver advertisements on and through the Website, and so on. These cookies may be placed by:
                  </p>
                  <ul>
                    <li>Google Analytics</li>
                    <li>Google Ads</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Other advertising networks and partners</li>
                  </ul>
                  
                  <h2>How to Control Cookies</h2>
                  
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
                  </p>
                  
                  <h3>Browser Controls</h3>
                  <p>
                    You can manage cookies through your web browser. Here's how to do it in different browsers:
                  </p>
                  <ul>
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</li>
                  </ul>
                  
                  <h3>Opt-Out of Third-Party Cookies</h3>
                  <p>
                    For more information about how to opt out of targeted advertising, you can visit:
                  </p>
                  <ul>
                    <li><a href="http://www.aboutads.info/choices/" className="text-primary hover:underline">Digital Advertising Alliance</a></li>
                    <li><a href="http://www.youronlinechoices.eu/" className="text-primary hover:underline">European Interactive Digital Advertising Alliance</a></li>
                    <li><a href="http://youradchoices.ca/choices" className="text-primary hover:underline">Digital Advertising Alliance of Canada</a></li>
                  </ul>
                  
                  <h2>Cookie Consent</h2>
                  
                  <p>
                    When you first visit our Website, you will be shown a cookie banner requesting your consent to set cookies. By clicking "Accept All Cookies," you consent to the use of all cookies described in this Cookie Policy. You can choose to decline non-essential cookies by clicking "Manage Preferences" or "Decline."
                  </p>
                  
                  <h2>Changes to This Cookie Policy</h2>
                  
                  <p>
                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date. You are advised to review this Cookie Policy periodically for any changes.
                  </p>
                  
                  <h2>Contact Us</h2>
                  
                  <p>
                    If you have any questions about our Cookie Policy, please contact us at:
                  </p>
                  <p>
                    Email: privacy@aihandshake.org<br />
                    Address: 123 Tech Avenue, San Francisco, CA 94107<br />
                    Phone: (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Other Legal Pages */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8 text-center">Other Legal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/legal/privacy-policy" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3">Privacy Policy</h3>
                  <p className="text-gray-700">
                    Learn about how we collect, use, and protect your personal information.
                  </p>
                </Link>
                
                <Link href="/legal/terms-of-service" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3">Terms of Service</h3>
                  <p className="text-gray-700">
                    Review our terms of service agreement that governs your use of our website and services.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
