import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Users, Key, ArrowRight } from 'lucide-react'; // Fixed import

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Browse Developments",
      description: "Explore our curated selection of premium villa and resort developments.",
      color: "from-premium-blue to-blue-600"
    },
    {
      step: 2,
      icon: FileText,
      title: "Request Information",
      description: "Get detailed brochures, floor plans, and investment projections.",
      color: "from-blue-500 to-premium-periwinkle"
    },
    {
      step: 3,
      icon: Users,
      title: "Connect with Developer",
      description: "Speak directly with verified developers to discuss your requirements.",
      color: "from-premium-periwinkle to-purple-500"
    },
    {
      step: 4,
      icon: Key,
      title: "Secure Investment",
      description: "Complete your purchase with confidence and transparency.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-premium-blue font-bold tracking-wider uppercase text-sm mb-2 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            How It Works for Buyers
          </h2>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
            Our streamlined process makes it easy to discover, evaluate, and invest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-white border-4 border-gray-100 rounded-2xl flex items-center justify-center text-xl font-bold text-gray-300 group-hover:border-premium-blue group-hover:text-premium-blue transition-colors">
                {step.step}
              </div>

              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-premium-black mb-3">{step.title}</h3>
              <p className="text-premium-charcoal text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;