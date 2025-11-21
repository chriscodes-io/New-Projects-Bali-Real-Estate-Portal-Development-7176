import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiGlobe, FiUsers, FiShield, FiSun, FiDollarSign } = FiIcons;

const WhyInvestSection = () => {
  const benefits = [
    {
      icon: FiTrendingUp,
      title: "High Rental Yields",
      description: "Average returns of 12-18% annually from tourism and long-term rentals",
      stat: "15%+ Average Yield"
    },
    {
      icon: FiGlobe,
      title: "Tourism Demand",
      description: "Bali attracts 6+ million visitors annually with consistent growth trends",
      stat: "6M+ Annual Visitors"
    },
    {
      icon: FiSun,
      title: "Lifestyle Investment",
      description: "Own a piece of paradise while generating passive income",
      stat: "Year-round Paradise"
    },
    {
      icon: FiDollarSign,
      title: "Capital Appreciation",
      description: "Property values have grown 8-12% annually in prime locations",
      stat: "10% Annual Growth"
    },
    {
      icon: FiUsers,
      title: "Expat Community",
      description: "Growing international community provides rental demand",
      stat: "50k+ Expats"
    },
    {
      icon: FiShield,
      title: "Trusted Developers",
      description: "All projects vetted by our team for quality and legitimacy",
      stat: "100% Verified"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why Invest in Bali?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bali offers a unique combination of lifestyle, returns, and growth potential that makes it 
            one of the world's most attractive property investment destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={benefit.icon} className="text-white text-xl" />
                </div>
                <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  {benefit.stat}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bali Investment by the Numbers
            </h3>
            <p className="text-slate-300 text-lg">
              Key statistics that make Bali a compelling investment destination
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">$2.8B</div>
              <div className="text-slate-300 text-sm">Tourism Revenue 2023</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">85%</div>
              <div className="text-slate-300 text-sm">Hotel Occupancy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">25%</div>
              <div className="text-slate-300 text-sm">Property Value Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">30+</div>
              <div className="text-slate-300 text-sm">New Projects Monthly</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvestSection;