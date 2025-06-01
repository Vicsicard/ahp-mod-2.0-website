import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6">Terms of Service</h1>
              <p className="text-lg text-gray-700 mb-8">
                Last Updated: June 1, 2025
              </p>
            </div>
          </div>
        </section>
        
        {/* Terms of Service Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="prose prose-lg max-w-none">
                  <p>
                    Welcome to AI Handshake. Please read these Terms of Service ("Terms") carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using the AI Handshake website or the AHP Module 2.0 product, you agree to comply with and be bound by these Terms.
                  </p>
                  
                  <h2>1. Acceptance of Terms</h2>
                  
                  <p>
                    By accessing or using our website at <a href="https://aihandshake.org" className="text-primary hover:underline">aihandshake.org</a> ("Website") or using the AHP Module 2.0 product ("Service"), you agree to be bound by these Terms. If you do not agree to all the terms and conditions, then you may not access the Website or use the Service.
                  </p>
                  
                  <h2>2. Changes to Terms</h2>
                  
                  <p>
                    We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on the Website and updating the "Last Updated" date. Your continued use of the Website or Service after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide by them.
                  </p>
                  
                  <h2>3. Account Registration</h2>
                  
                  <p>
                    To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                  </p>
                  
                  <h2>4. License and Service Use</h2>
                  
                  <h3>4.1 License Grant</h3>
                  <p>
                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to use the Service for your internal business purposes.
                  </p>
                  
                  <h3>4.2 Restrictions</h3>
                  <p>
                    You may not:
                  </p>
                  <ul>
                    <li>Modify, copy, or create derivative works based on the Service</li>
                    <li>Reverse engineer, decompile, or disassemble the Service</li>
                    <li>Remove any copyright or other proprietary notices from the Service</li>
                    <li>Transfer, sublicense, lease, lend, rent, or otherwise distribute the Service to any third party</li>
                    <li>Use the Service in any way that violates any applicable laws or regulations</li>
                  </ul>
                  
                  <h2>5. Subscription and Payment</h2>
                  
                  <h3>5.1 Fees</h3>
                  <p>
                    You agree to pay all fees specified for the Service. All payments are non-refundable unless otherwise specified. You are responsible for all taxes associated with your use of the Service.
                  </p>
                  
                  <h3>5.2 Billing</h3>
                  <p>
                    We use third-party payment processors to bill you through a payment account linked to your account. The processing of payments will be subject to the terms, conditions, and privacy policies of the payment processor in addition to these Terms.
                  </p>
                  
                  <h3>5.3 Subscription Term and Renewal</h3>
                  <p>
                    Subscriptions to the Service will automatically renew for the same subscription term unless you cancel your subscription before the end of the current term. You may cancel your subscription at any time through your account settings or by contacting us at billing@aihandshake.org.
                  </p>
                  
                  <h2>6. Intellectual Property Rights</h2>
                  
                  <h3>6.1 Our Intellectual Property</h3>
                  <p>
                    The Website and Service, including all content, features, and functionality, are owned by AI Handshake, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                  
                  <h3>6.2 Your Content</h3>
                  <p>
                    You retain all rights to any content you submit, post, or display on or through the Service ("Your Content"). By submitting, posting, or displaying Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute Your Content in connection with providing the Service to you.
                  </p>
                  
                  <h2>7. Data Privacy</h2>
                  
                  <p>
                    Your use of the Website and Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at <a href="/legal/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
                  
                  <h2>8. Disclaimer of Warranties</h2>
                  
                  <p>
                    THE WEBSITE AND SERVICE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                  </p>
                  
                  <p>
                    WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                  </p>
                  
                  <h2>9. Limitation of Liability</h2>
                  
                  <p>
                    IN NO EVENT SHALL AI HANDSHAKE, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, (III) UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN, (IV) INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICE, (V) BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY, OR (VI) ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
                  </p>
                  
                  <h2>10. Indemnification</h2>
                  
                  <p>
                    You agree to defend, indemnify, and hold harmless AI Handshake, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that Your Content caused damage to a third party.
                  </p>
                  
                  <h2>11. Termination</h2>
                  
                  <p>
                    We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
                  </p>
                  
                  <h2>12. Governing Law</h2>
                  
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the federal and state courts located in San Francisco County, California.
                  </p>
                  
                  <h2>13. Severability</h2>
                  
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.
                  </p>
                  
                  <h2>14. Entire Agreement</h2>
                  
                  <p>
                    These Terms constitute the entire agreement between you and AI Handshake regarding the Service and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning the Service.
                  </p>
                  
                  <h2>15. Contact Information</h2>
                  
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p>
                    Email: legal@aihandshake.org<br />
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
