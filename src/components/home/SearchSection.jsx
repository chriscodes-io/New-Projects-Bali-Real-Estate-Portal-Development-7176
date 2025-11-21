import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMapPin, FiDollarSign, FiHome, FiClock } = FiIcons;

const SearchSection = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    status: ''
  });

  const locations = [
    'Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Sanur', 
    'Nusa Dua', 'Jimbaran', 'Pererenan', 'Tabanan'
  ];

  const priceRanges = [
    'Under $200k', '$200k - $500k', '$500k - $1M', 
    '$1M - $2M', '$2M - $5M', 'Above $5M'
  ];

  const propertyTypes = ['Villa', 'Resort', 'Apartment', 'Land'];
  const statuses = ['Off-plan', 'Under Construction', 'Completed', 'Ready to Move'];

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });
    navigate(`/developments?${searchParams.toString()}`);
  };

  return (
    <section className="bg-white py-16 -mt-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Find Your Perfect Investment
            </h2>
            <p className="text-lg text-slate-600">
              Search through our curated selection of premium developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Location */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                <SafeIcon icon={FiMapPin} className="text-amber-500" />
                <span>Location</span>
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              >
                <option value="">Any Location</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                <SafeIcon icon={FiDollarSign} className="text-amber-500" />
                <span>Price Range</span>
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              >
                <option value="">Any Price</option>
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                <SafeIcon icon={FiHome} className="text-amber-500" />
                <span>Property Type</span>
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              >
                <option value="">Any Type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                <SafeIcon icon={FiClock} className="text-amber-500" />
                <span>Status</span>
              </label>
              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              >
                <option value="">Any Status</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="bg-slate-800 hover:bg-slate-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <SafeIcon icon={FiSearch} className="text-xl" />
              <span>Search Developments</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;