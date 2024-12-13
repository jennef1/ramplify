import React from 'react';
import { Bot, LineChart, MessageSquare, Brain, Rocket } from 'lucide-react';

const useCases = [
  {
    title: 'Customer Service Excellence',
    description: 'AI-powered support agents that handle customer inquiries 24/7, reducing response times and improving satisfaction.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
  },
  {
    title: 'Intelligent Analytics',
    description: 'Transform your data into actionable insights with AI-driven analytics that predict trends and optimize decisions.',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    title: 'Sales Automation',
    description: 'Automate lead qualification and follow-ups while maintaining personal touch through AI-driven communication.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    title: 'Content Generation',
    description: 'Create engaging, SEO-optimized content at scale with AI that understands your brand voice.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
  },
  {
    title: 'Process Optimization',
    description: 'Streamline operations and workflows with AI agents that learn and adapt to your business processes.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  }
];

const UseCases = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Transform Your Business with AI</h2>
          <p className="text-xl text-gray-400">Discover how our AI solutions can revolutionize your operations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <useCase.icon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;