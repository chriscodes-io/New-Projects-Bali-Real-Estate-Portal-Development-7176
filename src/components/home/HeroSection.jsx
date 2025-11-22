import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiArrowRight } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - YOUR BALI RESORT IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1763769998235-blob"
          alt="Luxury Bali Resort with Pool"
          className="w-full h-full object-cover"
        />
        {/* LIGHT Gradient Overlay - 10-15% opacity only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wider uppercase mb-4">
            Premium Real Estate Investment
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-shadow-lg">
            Invest in Bali's Most <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Exquisite Developments
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Discover curated off-plan villas and investment opportunities in 
            Indonesia's most sought-after destinations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link 
              to="/developments" 
              className="w-full sm:w-auto px-8 py-4 bg-premium-purple hover:bg-purple-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-premium-cta hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px] min-h-[56px]"
            >
              <SafeIcon icon={FiSearch} />
              <span>Browse Properties</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px] min-h-[56px]"
            >
              <span>List Your Property</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          {[
            { label: 'Active Listings', value: '120+' },
            { label: 'Developers', value: '45+' },
            { label: 'Avg ROI', value: '12-18%' },
            { label: 'Happy Investors', value: '500+' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/80 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;