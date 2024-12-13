import React from 'react';
import { MessageSquare, Search, Lightbulb, Rocket, Users, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "It starts with a conversation",
    description: "We begin by understanding your business needs and challenges."
  },
  {
    icon: Search,
    title: "Identify AI Opportunities",
    description: "We identify areas in your business that can be boosted with AI."
  },
  {
    icon: Lightbulb,
    title: "Form Clear Use Cases",
    description: "We form clear use cases, usually starting with an AI knowledge hub, an AI sales agent, or others."
  },
  {
    icon: Rocket,
    title: "Quick Deployment",
    description: "Within two weeks we build your first AI solution and deploy within your environment."
  },
  {
    icon: Users,
    title: "Team Enablement",
    description: "We help your team to get the most out of the new AI solutions."
  },
  {
    icon: ArrowRight,
    title: "Continue the Journey",
    description: "We come back to continue discussing the next steps of your AI Journey!"
  }
];

const WorkProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">How We Work Together</h2>
          <p className="text-xl text-gray-600">A structured approach to implementing AI solutions that deliver real value.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200 md:left-1/2" />

          <div className="grid gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start`}>
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} pl-12 md:pl-0`}>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Icon className="w-5 h-5 text-blue-500" />
                          </div>
                          <span className="ml-3 text-sm font-medium text-blue-500">Step {index + 1}</span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-blue-500 md:left-1/2 md:-ml-1.5" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};