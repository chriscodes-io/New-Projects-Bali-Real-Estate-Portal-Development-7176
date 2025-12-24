import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, Shield, Sun, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Strong ROI",
    description: "Average annual returns of 12-16% on property investments"
  },
  {
    icon: Globe,
    title: "Global Market",
    description: "Access to international investor network and opportunities"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team to guide you through every step"
  },
  {
    icon: Shield,
    title: "Legal Security",
    description: "Full compliance with Indonesian property laws"
  },
  {
    icon: Sun,
    title: "Tropical Paradise",
    description: "Premium locations in Bali's most desirable areas"
  },
  {
    icon: DollarSign,
    title: "Flexible Terms",
    description: "Customizable investment packages to suit your needs"
  }
];

const WhyInvestSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            Why Invest With Us
          </h2>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
            We offer unparalleled opportunities in Bali's premium real estate market with expert guidance and proven returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-premium-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-premium-blue"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-premium-blue/10 group-hover:bg-premium-blue group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-premium-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-premium-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-premium-charcoal">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;