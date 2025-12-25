import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchSection = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    status: ''
  });

  const locations = [
    'Lombok', 'Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Sanur',
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
    const queryString = searchParams.toString();
    navigate(`/developments${queryString ? '?' + queryString : ''}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative z-20 -mt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/50 relative overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-premium-blue via-premium-purple to-premium-blue opacity-50" />

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-premium-black mb-3">
              Find Your Perfect Investment
            </h2>
            <p className="text-premium-charcoal/80 font-medium">
              Search through our curated selection of premium developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-10">
            {/* Location */}
            <div className="space-y-3 group">
              <label className="block text-xs font-bold text-premium-charcoal uppercase tracking-wider ml-1">Location</label>
              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue focus:border-premium-blue outline-none transition-all appearance-none text-premium-black cursor-pointer shadow-sm group-hover:shadow-md font-medium"
                >
                  <option value="">Any Location</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-3 group">
              <label className="block text-xs font-bold text-premium-charcoal uppercase tracking-wider ml-1">Price Range</label>
              <div className="relative">
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue focus:border-premium-blue outline-none transition-all appearance-none text-premium-black cursor-pointer shadow-sm group-hover:shadow-md font-medium"
                >
                  <option value="">Any Price</option>
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className="space-y-3 group">
              <label className="block text-xs font-bold text-premium-charcoal uppercase tracking-wider ml-1">Property Type</label>
              <div className="relative">
                <select
                  value={filters.propertyType}
                  onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue focus:border-premium-blue outline-none transition-all appearance-none text-premium-black cursor-pointer shadow-sm group-hover:shadow-md font-medium"
                >
                  <option value="">Any Type</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-3 group">
              <label className="block text-xs font-bold text-premium-charcoal uppercase tracking-wider ml-1">Status</label>
              <div className="relative">
                <select
                  value={filters.status}
                  onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue focus:border-premium-blue outline-none transition-all appearance-none text-premium-black cursor-pointer shadow-sm group-hover:shadow-md font-medium"
                >
                  <option value="">Any Status</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative z-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              className="w-full max-w-md bg-premium-purple hover:bg-purple-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl shadow-purple-900/10 hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span>Search Developments</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;