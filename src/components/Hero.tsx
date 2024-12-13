import React from 'react';
import { ArrowRight } from 'lucide-react';
import BackgroundVideo from './BackgroundVideo';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <BackgroundVideo 
        videoUrl="https://cdn.coverr.co/videos/coverr-a-businessman-using-laptop-in-the-office-5244/1080p.mp4"
        posterUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
      />

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
              AI Agents tailored for your Business
              <span className="block text-blue-300 mt-2">ready to start your AI journey!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              We deploy purpose-built AI agents that start creating value from day one,
              empowering your business to grow without the hassle. We boost marketing,
              sales, operations and more, letting you focus on what you do best!
            </p>
            <button className="group inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg text-lg hover:bg-blue-50 transition-all duration-300">
              <span>Let's talk about your AI journey</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;