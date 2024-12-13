import React from 'react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-medium text-gray-900 mb-8">
              Ready to start your AI Journey?
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <button className="w-full group inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
                <span>Start your AI Journey</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right side - Calendar */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">
              Want to directly talk about your next AI steps?
            </h2>
            <div className="flex items-center space-x-2 text-gray-600 mb-8">
              <Phone className="w-5 h-5" />
              <a href="tel:+41796372534" className="text-lg hover:text-blue-600 transition-colors">
                +41 79 637 25 34
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">March 2024</h3>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {/* Calendar header */}
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <div key={day} className="font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
                {/* Calendar days */}
                {Array.from({ length: 31 }, (_, i) => (
                  <button
                    key={i}
                    className="py-2 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => {
                      // Calendar click handler will be implemented later
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;