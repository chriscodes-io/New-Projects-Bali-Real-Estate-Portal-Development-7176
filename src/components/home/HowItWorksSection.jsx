import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const { FaSearch, FaFileAlt, FaUserFriends, FaKey } = FaIcons;

const steps = [
  {
    icon: FaSearch,
    title: "Browse Developments",
    description: "Explore our curated selection of premium villa and resort developments.",
    color: "bg-blue-500"
  },
  {
    icon: FaFileAlt,
    title: "Request Information",
    description: "Get detailed brochures, floor plans, and investment projections.",
    color: "bg-purple-500"
  },
  {
    icon: FaUserFriends,
    title: "Connect with Developer",
    description: "Speak directly with verified developers to discuss your requirements.",
    color: "bg-pink-500"
  },
  {
    icon: FaKey,
    title: "Secure Investment",
    description: "Complete your purchase with confidence and transparency.",
    color: "bg-green-500"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-premium-blue font-bold tracking-wider text-sm uppercase mb-2 block">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold text-premium-black mb-4">
            How It Works for Buyers
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Our streamlined process makes it easy to discover, evaluate, and invest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-100 -z-10" />
              )}

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group">
                {/* Step Number Badge */}
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 font-bold mb-6 group-hover:bg-premium-blue group-hover:text-white transition-colors">
                  {index + 1}
                </div>

                <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <step.icon className="text-2xl" />
                </div>

                <h3 className="text-xl font-bold text-premium-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;