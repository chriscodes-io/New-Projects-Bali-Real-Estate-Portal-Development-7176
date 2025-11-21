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
    <section className="relative z-20 -mt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl shadow-premium-blue/5 p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-premium-black mb-2">
              Find Your Perfect Investment
            </h2>
            <p className="text-premium-charcoal">
              Search through our curated selection of premium developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Location */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-bold text-premium-black">
                <SafeIcon icon={FiMapPin} className="text-premium-blue" />
                <span>Location</span>
              </label>
              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full p-3 bg-premium-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all appearance-none text-premium-charcoal cursor-pointer"
                >
                  <option value="">Any Location</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-bold text-premium-black">
                <SafeIcon icon={FiDollarSign} className="text-premium-blue" />
                <span>Price Range</span>
              </label>
              <div className="relative">
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                  className="w-full p-3 bg-premium-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all appearance-none text-premium-charcoal cursor-pointer"
                >
                  <option value="">Any Price</option>
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-bold text-premium-black">
                <SafeIcon icon={FiHome} className="text-premium-blue" />
                <span>Property Type</span>
              </label>
              <div className="relative">
                <select
                  value={filters.propertyType}
                  onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                  className="w-full p-3 bg-premium-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all appearance-none text-premium-charcoal cursor-pointer"
                >
                  <option value="">Any Type</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-bold text-premium-black">
                <SafeIcon icon={FiClock} className="text-premium-blue" />
                <span>Status</span>
              </label>
              <div className="relative">
                <select
                  value={filters.status}
                  onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full p-3 bg-premium-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all appearance-none text-premium-charcoal cursor-pointer"
                >
                  <option value="">Any Status</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              className="bg-premium-purple hover:bg-purple-600 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-premium-cta hover:shadow-xl hover:-translate-y-1"
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