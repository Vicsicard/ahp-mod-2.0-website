'use client';

import { useState } from 'react';
import ScanForm from '@/components/ScanForm';
import ScanResult from '@/components/ScanResult';
import HowItWorks from '@/components/HowItWorks';
import SampleReport from '@/components/SampleReport';
import ScoreFAQ from '@/components/ScoreFAQ';
import { getSampleScanResult } from '@/utils/scanner';

export default function ScorePage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  
  const handleScanComplete = (result: any) => {
    setIsScanning(false);
    setScanResult(result);
    
    // Scroll to results
    setTimeout(() => {
      const resultElement = document.getElementById('scan-result');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };
  
  const handleSampleRequest = () => {
    setIsScanning(true);
    
    // Simulate a delay for realism
    setTimeout(() => {
      const sampleResult = getSampleScanResult();
      handleScanComplete(sampleResult);
    }, 1500);
  };
  
  const startNewScan = () => {
    setScanResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Is your website visible to AI?
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              Paste your URL. Get your AI Visibility Score in seconds.
            </p>
            
            <ScanForm
              onScanComplete={handleScanComplete}
              onSampleRequest={handleSampleRequest}
              isScanning={isScanning}
            />
          </div>
        </div>
      </section>
      
      {/* Scan Result Section */}
      {scanResult && (
        <section id="scan-result" className="py-16 bg-white">
          <div className="container-custom">
            <ScanResult result={scanResult} />
            
            <div className="text-center mt-8">
              <button
                onClick={startNewScan}
                className="text-primary hover:text-primary-dark underline"
              >
                Scan another website
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Sample Report Section */}
      <SampleReport />
      
      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I thought our site was strong. Turns out, AI was skipping us completely. AHP fixed it in 60 seconds."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Michael Chen</h4>
                  <p className="text-sm text-gray-500">E-commerce Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our product descriptions weren't being understood by AI. After implementing AHP Module, our visibility score jumped from 32% to 89%."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Alex Rivera</h4>
                  <p className="text-sm text-gray-500">Content Strategist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We were losing traffic to AI-powered search. AHP Module helped us adapt our content strategy for the AI era."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <ScoreFAQ />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to optimize for AI visibility?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Install AHP Module 2.0 today and ensure your website is fully visible to AI systems.
          </p>
          <a href="/install" className="btn-white inline-block">
            Install AHP Module 2.0
          </a>
        </div>
      </section>
    </main>
  );
}
