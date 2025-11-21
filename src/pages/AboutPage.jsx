import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiTarget, FiTrendingUp, FiUsers, FiGlobe, FiShield, FiDollarSign,
  FiCheck, FiStar, FiArrowRight, FiBarChart, FiHeadphones, FiLock
} = FiIcons;

const AboutPage = () => {
  const benefits = [
    {
      icon: FiTarget,
      title: "Targeted Traffic",
      description: "We drive high-quality leads from Australia and international markets through SEO, Google Ads, and Meta advertising."
    },
    {
      icon: FiTrendingUp,
      title: "High-Converting Platform",
      description: "Our optimized platform is designed for conversions, with proven lead capture forms and user experience."
    },
    {
      icon: FiUsers,
      title: "Qualified Buyers",
      description: "Every lead is pre-qualified with budget information and genuine investment intent."
    },
    {
      icon: FiGlobe,
      title: "Global Reach",
      description: "Access international investors from 40+ countries actively looking for Bali property investments."
    },
    {
      icon: FiShield,
      title: "Verified Developers Only",
      description: "We maintain high standards by only working with trusted, verified developers and projects."
    },
    {
      icon: FiDollarSign,
      title: "Flexible Pricing",
      description: "Choose between pay-per-lead or monthly subscriptions. No upfront costs to list your project."
    }
  ];

  const features = [
    {
      icon: FiCheck,
      title: "Free Project Listing",
      description: "List your development completely free with unlimited photos and detailed descriptions."
    },
    {
      icon: FiBarChart,
      title: "Lead Analytics",
      description: "Track your lead performance with detailed analytics and conversion metrics."
    },
    {
      icon: FiHeadphones,
      title: "Dedicated Support",
      description: "Get personalized support from our team to optimize your listings and maximize leads."
    },
    {
      icon: FiLock,
      title: "Lead Protection",
      description: "Your leads are protected and never shared with competitors. Complete exclusivity guaranteed."
    }
  ];

  const pricingPlans = [
    {
      name: "Pay Per Lead",
      price: "$25",
      period: "per lead",
      description: "Perfect for developers testing the platform",
      features: [
        "Pay only for leads you unlock",
        "Full contact details included",
        "Lead qualification data",
        "48-hour response guarantee",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Best for active developers with multiple projects",
      features: [
        "Unlimited lead unlocks",
        "Priority listing placement",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Featured project promotion",
        "Lead scoring & insights"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large developers and agencies",
      features: [
        "Everything in Professional",
        "Custom integrations (CRM)",
        "White-label options",
        "Bulk lead management",
        "API access",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "2,500+", label: "Active Investors", description: "Registered buyers from 40+ countries" },
    { number: "$50M+", label: "Sales Facilitated", description: "Total property sales through our platform" },
    { number: "98%", label: "Client Satisfaction", description: "Developers rate us 4.9/5 stars" },
    { number: "24hrs", label: "Average Response", description: "How quickly leads get contacted" }
  ];

  return (
    <div className="min-h-screen bg-premium-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-premium-slate-50 via-white to-blue-50 text-premium-black py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-premium-blue/10 backdrop-blur-sm border border-premium-blue/20 rounded-full px-4 py-2 text-premium-blue mb-6">
              <SafeIcon icon={FiStar} className="text-sm" />
              <span className="text-sm font-bold">Premium Lead Generation Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-premium-black">
              Why List Your Project
              <span className="bg-gradient-to-r from-premium-blue to-premium-periwinkle bg-clip-text text-transparent">
                {" "}With Us?
              </span>
            </h1>
            
            <p className="text-xl text-premium-charcoal max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with serious international investors actively seeking Bali property investments. 
              Our platform delivers qualified leads that convert into sales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/developer-dashboard"
                className="bg-premium-purple hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-premium-cta hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Start Listing Free</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              
              <Link
                to="/contact"
                className="bg-white text-premium-black border border-gray-200 hover:border-premium-blue hover:text-premium-blue px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
              >
                <SafeIcon icon={FiUsers} />
                <span>Speak to Our Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-premium-black mb-4">
              Trusted by Leading Developers
            </h2>
            <p className="text-lg text-premium-charcoal">
              Join successful developers who are already generating quality leads through our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-premium-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-bold text-premium-black mb-2">
                  {stat.label}
                </div>
                <div className="text-premium-charcoal text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-premium-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-premium-black mb-4">
              Why Developers Choose Us
            </h2>
            <p className="text-lg text-premium-charcoal max-w-3xl mx-auto">
              We provide everything you need to connect with serious international property investors
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
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-premium-blue/20">
                  <SafeIcon icon={benefit.icon} className="text-white text-xl" />
                </div>
                
                <h3 className="text-xl font-bold text-premium-black mb-4 group-hover:text-premium-blue transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-premium-charcoal leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-premium-black mb-4">
              How It Works for Developers
            </h2>
            <p className="text-lg text-premium-charcoal">
              Start generating quality leads in just a few simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-premium-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-premium-black mb-4 group-hover:text-premium-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-premium-charcoal leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-premium-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-premium-black mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-premium-charcoal max-w-3xl mx-auto">
              Choose the plan that works best for your business. No hidden fees, no setup costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-premium-blue ring-4 ring-premium-blue/10' 
                    : 'border-gray-100 hover:border-premium-blue/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-premium-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-premium-black mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-premium-black mb-1">
                    {plan.price}
                    <span className="text-lg text-premium-charcoal font-normal">/{plan.period}</span>
                  </div>
                  <p className="text-premium-charcoal">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="text-premium-blue flex-shrink-0" />
                      <span className="text-premium-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-premium-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-premium-slate-50 hover:bg-gray-100 text-premium-black border border-gray-200'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-premium-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Generating Leads?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading developers who are already connecting with international investors 
              through our platform. List your first project free today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/developer-dashboard"
                className="bg-premium-purple hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-premium-cta hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>List Your Project Free</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              
              <Link
                to="/contact"
                className="border border-white/20 hover:border-premium-purple text-white hover:text-premium-purple px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm hover:bg-white/5"
              >
                <SafeIcon icon={FiUsers} />
                <span>Schedule a Demo</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;