'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' as string | null },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' as string | null },
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.error || 'Something went wrong. Please try again.' as string | null },
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' as string | null },
      });
    }
  };

  return (
    <div className="bg-charcoal/60 backdrop-blur-sm rounded-xl shadow-xl p-8 max-w-2xl mx-auto border border-teal/20">
      <h2 className="font-display text-2xl font-bold mb-8 text-soft-white uppercase tracking-wider">Contact <span className="text-teal">Us</span></h2>
      
      {status.info.msg && (
        <div className={`mb-6 p-4 rounded-lg backdrop-blur-sm ${status.info.error ? 'bg-red-500/10 text-red-400 border border-red-500/30' : 'bg-teal/10 text-teal border border-teal/30'} animate-fadeIn`}>
          <div className="flex items-center">
            {status.info.error ? (
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            )}
            {status.info.msg}
          </div>
        </div>
      )}
      
      {!status.submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-soft-white/80 font-display text-sm uppercase tracking-wider mb-2">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 px-12 bg-charcoal/60 backdrop-blur-sm text-soft-white placeholder-soft-white/50 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-transparent transition-all duration-300 font-mono text-sm"
                required
                placeholder="Your name"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-soft-white/80 font-display text-sm uppercase tracking-wider mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-12 bg-charcoal/60 backdrop-blur-sm text-soft-white placeholder-soft-white/50 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-transparent transition-all duration-300 font-mono text-sm"
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-soft-white/80 font-display text-sm uppercase tracking-wider mb-2">
              Subject
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <select
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-3 px-12 bg-charcoal/60 backdrop-blur-sm text-soft-white placeholder-soft-white/50 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-transparent transition-all duration-300 font-mono text-sm appearance-none"
                required
              >
                <option value="" className="bg-charcoal text-soft-white/80">Select a subject</option>
                <option value="General Inquiry" className="bg-charcoal text-soft-white/80">General Inquiry</option>
                <option value="Technical Support" className="bg-charcoal text-soft-white/80">Technical Support</option>
                <option value="Feature Request" className="bg-charcoal text-soft-white/80">Feature Request</option>
                <option value="Bug Report" className="bg-charcoal text-soft-white/80">Bug Report</option>
                <option value="Other" className="bg-charcoal text-soft-white/80">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-soft-white/80 font-display text-sm uppercase tracking-wider mb-2">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-4 flex items-start pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal/70" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full py-3 pl-12 pr-4 bg-charcoal/60 backdrop-blur-sm text-soft-white placeholder-soft-white/50 border border-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-transparent transition-all duration-300 font-mono text-sm"
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full btn-primary py-4 uppercase tracking-wide font-display text-sm font-semibold flex items-center justify-center group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {status.submitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-soft-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SENDING MESSAGE
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal/40 to-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
        </form>
      ) : (
        <div className="text-center py-12 animate-fadeIn">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold mb-3 text-soft-white">Thank You!</h3>
          <p className="text-soft-white/70 mb-8 max-w-md mx-auto">Your message has been sent successfully. We'll get back to you soon.</p>
          <button
            onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
            className="btn-primary py-3 px-6 uppercase tracking-wide font-display text-sm font-semibold inline-flex items-center justify-center group relative overflow-hidden"
          >
            <span className="relative z-10">
              SEND ANOTHER MESSAGE
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal/40 to-violet/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
        </div>
      )}
    </div>
  );
}
