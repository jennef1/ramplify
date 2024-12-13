import React from 'react';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">Ramplify</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">Solutions</a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">Use Cases</a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">Contact</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;