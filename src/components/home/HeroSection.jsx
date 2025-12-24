import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBrowseProperties = () => {
    navigate('/developments');
    window.scrollTo(0, 0);
  };

  const handleListProperty = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1763769998235-blob"
          alt="Luxury Bali Resort"
          className="w-full h-full object-cover scale-105 animate-slow-pan"
        />
        {/* Improved Multi-layer Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-widest uppercase mb-2 hover:bg-white/20 transition-colors cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-premium-blue animate-pulse" />
            <span>Premium Real Estate Investment</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight drop-shadow-2xl">
            Invest in Bali's Most <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-200">
              Exquisite Developments
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Discover curated off-plan villas and investment opportunities <br className="hidden md:block" /> in Indonesia's most sought-after tropical destinations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={handleBrowseProperties}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-8 py-5 bg-premium-blue hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 min-w-[200px]"
            >
              <Building2 className="w-5 h-5" />
              <span>Browse Properties</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleListProperty}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
            >
              <TrendingUp className="w-5 h-5" />
              <span>List Your Property</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto hover:bg-black/40 transition-colors duration-500"
        >
          {[
            { label: 'Active Listings', value: '120+' },
            { label: 'Verified Developers', value: '45+' },
            { label: 'Average ROI', value: '12-18%' },
            { label: 'Happy Investors', value: '500+' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-premium-blue transition-colors duration-300">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-widest font-medium group-hover:text-white transition-colors">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;