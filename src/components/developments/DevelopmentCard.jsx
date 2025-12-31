import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiMaximize, FiHome, FiTrendingUp, FiArrowRight, FiDroplet } = FiIcons;

const DevelopmentCard = ({ development }) => {
  const navigate = useNavigate();

  const {
    id,
    title,
    location,
    price,
    priceDisplay,
    images,
    type,
    beds,
    baths, // Add baths
    size,
    completion
  } = development;

  const displayImage = images ? images[0] : development.image;
  const displayPrice = priceDisplay || price?.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const displayYield = development.yield || development.roi + '%';

  const handleViewDetails = () => {
    navigate(`/development/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-premium-blue/10 transition-all duration-300 flex flex-col h-full"
      style={{ willChange: 'transform' }}
    >
      {/* Image Container - Aspect Ratio 4:3 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <img
          src={displayImage}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        {/* Badge Overlays */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-premium-black text-xs font-bold rounded-lg shadow-sm">
            {type}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1">
            <SafeIcon icon={FiTrendingUp} className="text-[10px]" />
            {displayYield} Yield
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
          <p className="text-white font-bold text-lg truncate drop-shadow-sm">{displayPrice}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title & Location */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-premium-black mb-1 line-clamp-1 group-hover:text-premium-purple transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-premium-charcoal text-sm">
            <SafeIcon icon={FiMapPin} className="mr-1 text-premium-blue" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-2 py-4 border-t border-b border-gray-100 mb-4">
          <div className="flex flex-col items-center justify-center text-center p-2 bg-premium-slate-50 rounded-lg">
            <SafeIcon icon={FiHome} className="text-premium-blue mb-1" />
            <span className="text-xs font-bold text-premium-black">{beds || '-'} Beds</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 bg-premium-slate-50 rounded-lg">
            <SafeIcon icon={FiDroplet} className="text-premium-blue mb-1" />
            <span className="text-xs font-bold text-premium-black">{baths || '-'} Baths</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 bg-premium-slate-50 rounded-lg">
            <SafeIcon icon={FiMaximize} className="text-premium-blue mb-1" />
            <span className="text-xs font-bold text-premium-black">{size}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-2 bg-premium-slate-50 rounded-lg">
            <span className="text-[10px] font-bold text-premium-blue mb-1 px-1.5 py-0.5 bg-blue-100 rounded">Ready</span>
            <span className="text-xs font-bold text-premium-black truncate w-full">{completion}</span>
          </div>
        </div>

        {/* Action Button - Pushed to bottom */}
        <div className="mt-auto">
          <button
            onClick={handleViewDetails}
            className="w-full flex items-center justify-center gap-2 py-3 bg-premium-purple hover:bg-purple-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 min-h-[44px] cursor-pointer"
          >
            <span>View Details</span>
            <SafeIcon icon={FiArrowRight} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Memoize with shallow comparison of the development prop
// This works because PROJECTS array is static and development objects don't change reference
export default React.memo(DevelopmentCard);