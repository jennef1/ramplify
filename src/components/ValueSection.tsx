import React from 'react';
import { Moon, BookOpen, PiggyBank, Users, Zap, Clock, Brain } from 'lucide-react';

const values = [
  {
    icon: Clock,
    title: 'AI Agents never sleep',
    description: '24/7 availability ensures continuous support and operations'
  },
  {
    icon: BookOpen,
    title: 'AI Agents keep learning',
    description: 'Continuously improve based on your company data'
  },
  {
    icon: PiggyBank,
    title: 'Lower Cost',
    description: 'Cost to deploy and maintain is significantly lower than any software products'
  },
  {
    icon: Users,
    title: 'Support, Not Replace',
    description: 'AI Agents are here to support, not replace. But the support is mind blowing'
  },
  {
    icon: Zap,
    title: '24/7 Customer Support',
    description: 'Your customers get instant, personalized support that is to the point'
  },
  {
    icon: Brain,
    title: 'Employee Empowerment',
    description: 'Your employees get empowered by AI Agents and can do their job more effectively'
  }
];

const ValueSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-medium text-center text-gray-900 mb-24">
          The Value of using AI Agents
        </h2>
        
        <div className="relative">
          {/* Central Circle with AI text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-[1px] border-gray-200"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-light tracking-widest text-gray-800">AI</span>
              </div>
            </div>
          </div>

          {/* Value Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm"
                >
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-gray-800" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;