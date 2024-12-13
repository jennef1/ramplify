import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="bg-blue-300/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left side - Testimonial */}
          <div className="flex items-center p-12 lg:p-24">
            <div className="max-w-2xl">
              <Quote className="w-24 h-24 text-blue-400 mb-8" />
              <blockquote className="text-3xl font-bold leading-relaxed text-gray-800 mb-12">
                "Ramplify helped us to start our AI journey! We increased our sales lead generation by over 40% and introduced a company-wide chatbot for our employess providing insights to relevant data"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-['Dancing_Script'] text-3xl text-gray-900 mb-1">Benjamin Jenne</p>
                  <p className="text-gray-600 text-sm tracking-wider">CEO of TERRA AG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="h-[600px] lg:h-auto">
            <img
              src="BeniBauma.jpg"
              alt="Benjamin Jenne, CEO of TERRA AG"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;