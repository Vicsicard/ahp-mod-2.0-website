'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function ScoreFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: 'What is AI Visibility?',
      answer: 'AI Visibility refers to how well AI systems like ChatGPT, Claude, and Bard can perceive, understand, and accurately represent your website content. Unlike traditional SEO which focuses on search engine rankings, AI visibility ensures your content is properly understood by AI systems when users ask questions related to your business or industry.'
    },
    {
      question: 'Is this scan safe? What data do you collect?',
      answer: 'Yes, the scan is completely safe. We only analyze the public content of your website that any visitor could see. We don\'t store your full website content - we only temporarily process it to generate your score and recommendations. If you choose to provide your email, we\'ll only use it to send you your scan results and related information about improving your AI visibility.'
    },
    {
      question: 'Will this work with any website?',
      answer: 'Yes, our scanner works with any publicly accessible website. However, it cannot scan pages behind login screens or paywalls. For the most accurate results, we recommend scanning your homepage or main landing pages that contain the most important information about your business or service.'
    },
    {
      question: 'What if I\'m already doing SEO?',
      answer: 'Traditional SEO is focused on ranking in search engine results pages, while AI visibility ensures your content is properly understood by AI systems. While there is some overlap, AI systems have different requirements for optimal content comprehension. The AHP Module 2.0 complements your existing SEO efforts by optimizing specifically for AI understanding.'
    },
    {
      question: 'How is this different than Google tools?',
      answer: 'Google\'s tools primarily focus on optimizing for Google Search and traditional SEO metrics. Our AI Visibility Score specifically analyzes how well AI systems can understand your content, which involves different factors like structured data, semantic HTML, and other AI-specific signals that aren\'t necessarily prioritized in traditional SEO tools.'
    },
    {
      question: 'How often should I check my AI Visibility Score?',
      answer: 'We recommend checking your score after making significant changes to your website structure or content. For ongoing monitoring, the full AHP Module 2.0 provides continuous tracking and weekly reports, eliminating the need for manual checks.'
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-12 bg-soft-white/50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto px-4 md:px-0">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none"
              >
                <span className="font-semibold text-left text-gray-900">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-teal transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-white border-t border-gray-100 rounded-b-lg">
                  <p className="text-gray-800">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
