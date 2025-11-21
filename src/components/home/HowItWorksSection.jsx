import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFileText, FiUsers, FiKey, FiArrowRight } = FiIcons;

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: FiSearch,
      title: "Browse Developments",
      description: "Explore our curated selection of premium villa and resort developments across Bali's most desirable locations.",
      color: "from-blue-400 to-blue-600"
    },
    {
      step: 2,
      icon: FiFileText,
      title: "Request Information",
      description: "Get detailed brochures, floor plans, payment schedules, and investment projections for properties that interest you.",
      color: "from-amber-400 to-amber-600"
    },
    {
      step: 3,
      icon: FiUsers,
      title: "Connect with Developer",
      description: "Speak directly with verified developers and their sales teams to discuss your requirements and arrange site visits.",
      color: "from-green-400 to-green-600"
    },
    {
      step: 4,
      icon: FiKey,
      title: "Secure Your Investment",
      description: "Complete your purchase with confidence knowing all developers are vetted and all legal processes are transparent.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How It Works for Buyers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to discover, evaluate, and invest in 
            Bali's most promising property developments
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-amber-200 via-green-200 to-purple-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center text-sm font-bold text-slate-600 group-hover:border-amber-400 group-hover:text-amber-600 transition-colors">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={step.icon} className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-300">
                    <SafeIcon icon={FiArrowRight} className="text-xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Bali Investment Journey?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of international investors who have discovered their perfect 
              Bali property through our platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/developments"
                className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <SafeIcon icon={FiSearch} />
                <span>Browse Developments</span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 border-2 border-white/30 hover:border-amber-500 text-white hover:text-amber-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                <SafeIcon icon={FiUsers} />
                <span>Speak to an Expert</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;