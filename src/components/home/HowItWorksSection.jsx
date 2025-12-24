import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Users, Key, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Browse Properties",
    description: "Explore our curated selection of premium developments"
  },
  {
    icon: FileText,
    title: "Review Details",
    description: "Get comprehensive information about each project"
  },
  {
    icon: Users,
    title: "Connect with Team",
    description: "Discuss investment options with our experts"
  },
  {
    icon: Key,
    title: "Secure Investment",
    description: "Complete transaction with full legal protection"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-premium-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
            Four simple steps to secure your investment in Bali's premier properties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="mt-6 mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-premium-blue/10">
                      <step.icon className="w-8 h-8 text-premium-blue" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-premium-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-premium-charcoal flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/3 z-20">
                  <ArrowRight className="w-8 h-8 text-premium-blue/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;