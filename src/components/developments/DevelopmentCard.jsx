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
        return 'bg-blue-100 text-blue-800';
      case 'Under Construction':
        return 'bg-amber-100 text-amber-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative h-64 md:h-48 md:w-80 flex-shrink-0 overflow-hidden">
            <img
              src={development.image}
              alt={development.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Status Badge */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(development.status)}`}>
              {development.status}
            </div>
            
            {/* Yield Badge */}
            <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <SafeIcon icon={FiTrendingUp} />
              <span>{development.yield} Yield</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors mb-1">
                  {development.name}
                </h3>
                <div className="flex items-center space-x-2 text-slate-600 mb-2">
                  <SafeIcon icon={FiMapPin} className="text-amber-500 text-sm" />
                  <span className="text-sm">{development.location}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm">{development.type}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-800 mb-1">
                  {development.price}
                </div>
                <div className="text-sm text-slate-500">{development.units} Units</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-slate-600">
                <SafeIcon icon={FiCalendar} className="text-amber-500 text-sm" />
                <span className="text-sm">{development.completion}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <SafeIcon icon={FiUsers} className="text-amber-500 text-sm" />
                <span className="text-sm">{development.developer}</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-2 mb-4">
              {development.amenities.slice(0, 4).map((amenity, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                  {amenity}
                </span>
              ))}
              {development.amenities.length > 4 && (
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  +{development.amenities.length - 4} more
                </span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-slate-600">
                  <span className="font-medium">ROI:</span> {development.yield}
                </div>
              </div>
              
              <Link
                to={`/development/${development.id}`}
                className="bg-slate-800 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium"
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

  // Grid view (default)
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={development.image}
          alt={development.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(development.status)}`}>
          {development.status}
        </div>
        
        {/* Yield Badge */}
        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
          <SafeIcon icon={FiTrendingUp} />
          <span>{development.yield} Yield</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
            {development.name}
          </h3>
          <span className="text-sm text-slate-500">{development.units} Units</span>
        </div>
        
        <div className="flex items-center space-x-2 text-slate-600 mb-3">
          <SafeIcon icon={FiMapPin} className="text-amber-500" />
          <span className="text-sm">{development.location}</span>
          <span className="text-slate-400">•</span>
          <span className="text-sm">{development.type}</span>
        </div>

        <div className="flex items-center space-x-2 text-slate-600 mb-4">
          <SafeIcon icon={FiCalendar} className="text-amber-500" />
          <span className="text-sm">{development.completion}</span>
        </div>

        <div className="flex items-center space-x-2 text-slate-600 mb-4">
          <SafeIcon icon={FiBuilding} className="text-amber-500" />
          <span className="text-sm">{development.developer}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mb-4">
          {development.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {amenity}
            </span>
          ))}
          {development.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{development.amenities.length - 3}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">
            {development.price}
          </div>
          <Link
            to={`/development/${development.id}`}
            className="bg-slate-800 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <SafeIcon icon={FiEye} />
            <span className="text-sm font-medium">View Details</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DevelopmentCard;