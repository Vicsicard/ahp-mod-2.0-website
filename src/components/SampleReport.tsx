'use client';

import Link from 'next/link';

export default function SampleReport() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">Weekly AI Visibility Report</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Install AHP Module 2.0 and get detailed weekly reports showing exactly how AI systems are interacting with your content.
        </p>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto border border-gray-200">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
            <div>
              <h3 className="font-bold text-xl">AI Visibility Report</h3>
              <p className="text-gray-500 text-sm">example.com • June 1, 2025</p>
            </div>
            <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              Premium
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-gray-600 mb-1">AI Visibility Score</div>
              <div className="text-xs text-green-600">↑ 12% from last week</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">24</div>
              <div className="text-sm text-gray-600 mb-1">AI Bot Visits</div>
              <div className="text-xs text-green-600">↑ 8 from last week</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">93%</div>
              <div className="text-sm text-gray-600 mb-1">Content Indexed</div>
              <div className="text-xs text-green-600">↑ 5% from last week</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="font-semibold mb-4">AI Bot Activity</h4>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">GPTBot</span>
                  </div>
                  <span className="text-sm font-medium">12 visits</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm">Claude-Web</span>
                  </div>
                  <span className="text-sm font-medium">7 visits</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Bard-Agent</span>
                  </div>
                  <span className="text-sm font-medium">5 visits</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="font-semibold mb-4">Content Performance</h4>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Homepage</span>
                    <span className="text-sm text-green-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Blog Posts</span>
                    <span className="text-sm text-green-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Product Pages</span>
                    <span className="text-sm text-yellow-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/install" className="btn-primary inline-block">
              Get Your Weekly Report
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Install AHP Module 2.0 today and start monitoring your AI visibility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
