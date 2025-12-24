import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, Shield, Sun, DollarSign, Target, MapPin, Home, Award } from 'lucide-react'; // Fixed import

const WhyInvestSection = () => {
  const benefits = [
    { icon: TrendingUp, title: "High Rental Yields", description: "Average returns of 12-18% annually.", stat: "15%+ Yield" },
    { icon: Globe, title: "Tourism Demand", description: "6+ million visitors annually.", stat: "6M+ Visitors" },
    { icon: Sun, title: "Lifestyle Investment", description: "Own a piece of paradise.", stat: "Paradise" },
    { icon: DollarSign, title: "Capital Appreciation", description: "Property values grow 8-12% annually.", stat: "10% Growth" },
    { icon: Users, title: "Expat Community", description: "Strong long-term rental demand.", stat: "50k+ Expats" },
    { icon: Shield, title: "Trusted Developers", description: "All projects vetted by our team.", stat: "100% Verified" }
  ];

  return (
    <section className="py-24 bg-premium-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">Why Invest in Bali?</h2>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
            Bali offers a unique combination of lifestyle, returns, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-premium-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-premium-blue transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-premium-blue group-hover:text-white transition-colors" />
                </div>
                <span className="bg-premium-slate-50 text-premium-charcoal text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200">
                  {benefit.stat}
                </span>
              </div>
              <h3 className="text-xl font-bold text-premium-black mb-3">{benefit.title}</h3>
              <p className="text-premium-charcoal text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;