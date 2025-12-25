import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const { FaSearch, FaHome } = FaIcons;

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
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1763769998235-blob"
          alt="Luxury Bali Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Invest in Bali's Most <br />
            <span className="text-blue-400">Exquisite Developments</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light mb-10">
            Discover curated off-plan villas and investment opportunities in Indonesia's most sought-after tropical destinations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBrowseProperties}
              className="px-8 py-4 bg-premium-purple hover:bg-purple-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg flex items-center gap-2"
            >
              <FaSearch />
              <span>Browse Properties</span>
            </button>

            <button
              onClick={handleListProperty}
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white rounded-lg font-bold text-lg transition-all flex items-center gap-2"
            >
              <FaHome />
              <span>List Your Property</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;