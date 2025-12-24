import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, Shield, Sun, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Strong ROI",
    description: "Average annual returns of 12-16% on property investments",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Globe,
    title: "Global Market",
    description: "Access to international investor network and opportunities",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team to guide you through every step",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: Shield,
    title: "Legal Security",
    description: "Full compliance with Indonesian property laws",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Sun,
    title: "Tropical Paradise",
    description: "Premium locations in Bali's most desirable areas",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: DollarSign,
    title: "Flexible Terms",
    description: "Customizable investment packages to suit your needs",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const WhyInvestSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-premium-blue/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-premium-purple/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-premium-blue/10 text-premium-blue text-sm font-bold mb-4">
            Why Bali
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            Why Invest With Us
          </h2>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto leading-relaxed">
            We offer unparalleled opportunities in Bali's premium real estate market with expert guidance and proven returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full overflow-hidden group-hover:-translate-y-1">
                {/* Gradient Border Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gray-50 text-premium-black group-hover:text-white group-hover:shadow-lg transition-all duration-500 relative overflow-hidden`}>
                  {/* Icon Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <benefit.icon className="w-7 h-7 relative z-10" />
                </div>

                <h3 className="text-xl font-bold text-premium-black mb-3 group-hover:text-premium-blue transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-premium-charcoal leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;