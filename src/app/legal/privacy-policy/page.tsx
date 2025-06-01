import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">Privacy Policy</h1>
              <p className="text-lg text-gray-700 mb-8">
                Last Updated: June 1, 2025
              </p>
            </div>
          </div>
        </section>
        
        {/* Privacy Policy Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="prose prose-lg max-w-none">
                  <p>
                    At AI Handshake, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AHP Module 2.0 product.
                  </p>
                  
                  <h2>Information We Collect</h2>
                  
                  <h3>Personal Information</h3>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul>
                    <li>Register for an account</li>
                    <li>Purchase the AHP Module 2.0</li>
                    <li>Sign up for our newsletter</li>
                    <li>Contact our support team</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  
                  <p>
                    This information may include:
                  </p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing information</li>
                    <li>Website URL</li>
                  </ul>
                  
                  <h3>Usage Data</h3>
                  <p>
                    When you use the AHP Module 2.0 on your website, we collect anonymous usage data to provide you with analytics and reports on your AI visibility. This includes:
                  </p>
                  <ul>
                    <li>AI crawler activity on your website</li>
                    <li>Content extraction patterns</li>
                    <li>Structured data implementation</li>
                    <li>AI comprehension metrics</li>
                  </ul>
                  
                  <p>
                    This data is used solely to provide the core functionality of the AHP Module 2.0 and to generate your AI visibility reports.
                  </p>
                  
                  <h3>Technical Information</h3>
                  <p>
                    We automatically collect certain information when you visit our website, including:
                  </p>
                  <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Time and date of your visit</li>
                  </ul>
                  
                  <h2>How We Use Your Information</h2>
                  
                  <p>
                    We use the information we collect for various purposes, including to:
                  </p>
                  <ul>
                    <li>Provide, operate, and maintain our services</li>
                    <li>Generate AI visibility reports for your website</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative information, such as updates, security alerts, and support messages</li>
                    <li>Respond to customer service requests and support needs</li>
                    <li>Improve our website and services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Prevent fraudulent transactions and monitor against theft</li>
                  </ul>
                  
                  <h2>Disclosure of Your Information</h2>
                  
                  <p>
                    We may share your information in the following situations:
                  </p>
                  
                  <h3>Service Providers</h3>
                  <p>
                    We may share your information with third-party vendors, service providers, and contractors who perform services for us or on our behalf. These third parties have access to your information only to perform these tasks and are obligated not to disclose or use it for any other purpose.
                  </p>
                  
                  <h3>Business Transfers</h3>
                  <p>
                    If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your information.
                  </p>
                  
                  <h3>Legal Requirements</h3>
                  <p>
                    We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                  </p>
                  
                  <h3>With Your Consent</h3>
                  <p>
                    We may disclose your information for any other purpose with your consent.
                  </p>
                  
                  <h2>Data Security</h2>
                  
                  <p>
                    We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or other types of misuse.
                  </p>
                  
                  <h2>Your Privacy Rights</h2>
                  
                  <h3>Account Information</h3>
                  <p>
                    You can review and change your personal information by logging into your account and visiting your account profile page.
                  </p>
                  
                  <h3>Marketing Communications</h3>
                  <p>
                    You can opt out of receiving marketing emails from us by clicking on the "unsubscribe" link in the emails. Even if you opt out of marketing emails, we may still send you service-related emails.
                  </p>
                  
                  <h3>Cookies</h3>
                  <p>
                    Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies, this could affect certain features of our website.
                  </p>
                  
                  <h3>Data Subject Rights</h3>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, such as:
                  </p>
                  <ul>
                    <li>The right to access your personal information</li>
                    <li>The right to rectify inaccurate information</li>
                    <li>The right to request erasure of your information</li>
                    <li>The right to restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                  </ul>
                  
                  <p>
                    To exercise these rights, please contact us at privacy@aihandshake.org.
                  </p>
                  
                  <h2>Children's Privacy</h2>
                  
                  <p>
                    Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our files.
                  </p>
                  
                  <h2>Changes to This Privacy Policy</h2>
                  
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                  
                  <h2>Contact Us</h2>
                  
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
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
                <Link href="/legal/terms-of-service" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3">Terms of Service</h3>
                  <p className="text-gray-700">
                    Review our terms of service agreement that governs your use of the AHP Module 2.0 and our website.
                  </p>
                </Link>
                
                <Link href="/legal/cookie-policy" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3">Cookie Policy</h3>
                  <p className="text-gray-700">
                    Learn about how we use cookies and similar technologies on our website.
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
