import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiTrendingUp, FiGlobe } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://file-uploads.teacdn.co/1a3227934c362537/1741124762756-489654869.jpg"
          alt="Luxury Bali Beach Club"
          className="w-full h-full object-cover"
        />
        {/* Lighter gradient filter to show more of the image as requested */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-white shadow-lg"
          >
            <SafeIcon icon={FiTrendingUp} className="text-sm text-premium-periwinkle" />
            <span className="text-sm font-medium tracking-wide">Premium Investment Opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg"
          >
            Invest in New
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-blue via-premium-periwinkle to-white">
              Bali Villas & Resorts
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Discover exclusive off-plan and completed developments with high rental yields. 
            Connect directly with trusted developers and secure your slice of paradise.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-center pt-4"
          >
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">15%+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider font-medium">Average Yield</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">50+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider font-medium">Premium Projects</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">25+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider font-medium">Trusted Developers</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              to="/developments"
              className="group bg-premium-purple hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-premium-cta hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Browse Developments</span>
              <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
            >
              <SafeIcon icon={FiGlobe} />
              <span>List Your Project</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;