import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Users, Key, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Browse Properties",
    description: "Explore our curated selection of premium developments",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: FileText,
    title: "Review Details",
    description: "Get comprehensive information about each project",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Users,
    title: "Connect with Team",
    description: "Discuss investment options with our experts",
    color: "from-pink-400 to-pink-600"
  },
  {
    icon: Key,
    title: "Secure Investment",
    description: "Complete transaction with full legal protection",
    color: "from-emerald-400 to-emerald-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-premium-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-premium-blue/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-premium-purple/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-premium-blue/10 text-premium-blue text-sm font-bold mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            Your Journey to Ownership
          </h2>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto leading-relaxed">
            Four simple steps to secure your investment in Bali's premier properties, designed for a seamless experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative z-10 h-full"
              >
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-premium-blue/10 transition-all duration-500 border border-white/50 h-full flex flex-col group-hover:-translate-y-2 relative overflow-hidden">

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-50 to-white rounded-full flex items-end justify-start p-4 text-9xl font-bold text-gray-50 transition-all duration-500 group-hover:scale-110 group-hover:text-gray-100 pointer-events-none select-none opacity-50">
                    {index + 1}
                  </div>

                  <div className="mt-2 mb-8 relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg shadow-premium-blue/20 group-hover:scale-110 transition-transform duration-500`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-premium-black mb-3 relative">
                    {step.title}
                  </h3>
                  <p className="text-premium-charcoal leading-relaxed relative flex-1">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100/50 flex items-center text-sm font-semibold text-premium-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>

              {/* Connectors */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute -right-4 top-12 z-0 transform translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-200" />
                  </div>
                  <div className="lg:hidden absolute left-1/2 -bottom-4 z-0 transform -translate-x-1/2 translate-y-1/2">
                    <ArrowDown className="w-6 h-6 text-gray-200" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;