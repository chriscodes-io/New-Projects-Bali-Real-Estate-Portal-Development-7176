import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiCalendar, FiTrendingUp, FiEye, FiBuilding, FiUsers } = FiIcons;

const DevelopmentCard = ({ development, viewMode }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Off-plan':
        return 'bg-premium-blue/10 text-premium-blue border border-premium-blue/20';
      case 'Under Construction':
        return 'bg-indigo-50 text-indigo-600 border border-indigo-100';
      case 'Completed':
        return 'bg-green-50 text-green-600 border border-green-100';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative h-64 md:h-48 md:w-80 flex-shrink-0 overflow-hidden">
            <img
              src={development.image}
              alt={development.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-white/90 ${getStatusColor(development.status)}`}>
              {development.status}
            </div>
            
            <div className="absolute top-4 right-4 bg-premium-blue text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
              <SafeIcon icon={FiTrendingUp} />
              <span>{development.yield} Yield</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-premium-black group-hover:text-premium-blue transition-colors mb-1">
                  {development.name}
                </h3>
                <div className="flex items-center space-x-2 text-premium-charcoal mb-2">
                  <SafeIcon icon={FiMapPin} className="text-premium-blue text-sm" />
                  <span className="text-sm">{development.location}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm">{development.type}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-premium-black mb-1">
                  {development.price}
                </div>
                <div className="text-sm text-gray-400">{development.units} Units</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-premium-charcoal">
                <SafeIcon icon={FiCalendar} className="text-premium-blue text-sm" />
                <span className="text-sm">{development.completion}</span>
              </div>
              <div className="flex items-center space-x-2 text-premium-charcoal">
                <SafeIcon icon={FiUsers} className="text-premium-blue text-sm" />
                <span className="text-sm">{development.developer}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {development.amenities.slice(0, 4).map((amenity, index) => (
                <span key={index} className="bg-premium-slate-50 text-premium-charcoal px-2 py-1 rounded text-xs border border-gray-100">
                  {amenity}
                </span>
              ))}
            </div>

            <div className="flex justify-end items-center">
              <Link
                to={`/development/${development.id}`}
                className="bg-premium-purple hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium shadow-premium-cta"
              >
                <SafeIcon icon={FiEye} />
                <span>View Details</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid view
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={development.image}
          alt={development.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-white/90 ${getStatusColor(development.status)}`}>
          {development.status}
        </div>
        
        <div className="absolute top-4 right-4 bg-premium-blue text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
          <SafeIcon icon={FiTrendingUp} />
          <span>{development.yield} Yield</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-premium-black group-hover:text-premium-blue transition-colors line-clamp-1">
            {development.name}
          </h3>
          <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{development.units} Units</span>
        </div>
        
        <div className="flex items-center space-x-2 text-premium-charcoal mb-3 text-sm">
          <SafeIcon icon={FiMapPin} className="text-premium-blue flex-shrink-0" />
          <span className="truncate">{development.location}</span>
          <span className="text-gray-300">•</span>
          <span className="truncate">{development.type}</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-premium-charcoal text-sm">
            <SafeIcon icon={FiCalendar} className="text-premium-blue flex-shrink-0" />
            <span>{development.completion}</span>
          </div>
          <div className="flex items-center space-x-2 text-premium-charcoal text-sm">
            <SafeIcon icon={FiBuilding} className="text-premium-blue flex-shrink-0" />
            <span className="truncate">{development.developer}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {development.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="bg-premium-slate-50 text-premium-charcoal px-2 py-1 rounded text-xs border border-gray-100">
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <div className="text-xl font-bold text-premium-black">
            {development.price}
          </div>
          <Link
            to={`/development/${development.id}`}
            className="bg-premium-purple hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-premium-cta"
          >
            <SafeIcon icon={FiEye} />
            <span className="text-sm font-medium">Details</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DevelopmentCard;