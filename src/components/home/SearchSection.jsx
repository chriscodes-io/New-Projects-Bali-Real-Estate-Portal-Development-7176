import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const { FaSearch, FaMapMarkerAlt, FaTag, FaHome, FaCheckCircle } = FaIcons;

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

  const propertyTypes = ['Villa', 'Resort', 'Apartment', 'Land', 'Land Plots'];
  const statuses = ['Off-plan', 'Under Construction', 'Completed', 'Now Selling', 'Ready to Move'];

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });
    const queryString = searchParams.toString();
    navigate(`/developments${queryString ? '?' + queryString : ''}`);
  };

  return (
    <section className="relative z-20 -mt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-premium-black mb-2">
              Find Your Perfect Investment
            </h2>
            <p className="text-gray-500">
              Search through our curated selection of premium developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Location</label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={filters.location}
                  onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-transparent outline-none appearance-none text-gray-700"
                >
                  <option value="">Any Location</option>
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Price Range</label>
              <div className="relative">
                <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-transparent outline-none appearance-none text-gray-700"
                >
                  <option value="">Any Price</option>
                  {priceRanges.map(pr => <option key={pr} value={pr}>{pr}</option>)}
                </select>
              </div>
            </div>

            {/* Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Property Type</label>
              <div className="relative">
                <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={filters.propertyType}
                  onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-transparent outline-none appearance-none text-gray-700"
                >
                  <option value="">Any Type</option>
                  {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Status</label>
              <div className="relative">
                <FaCheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={filters.status}
                  onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-premium-blue focus:border-transparent outline-none appearance-none text-gray-700"
                >
                  <option value="">Any Status</option>
                  {statuses.map(st => <option key={st} value={st}>{st}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleSearch}
              className="bg-premium-purple hover:bg-purple-700 text-white w-full md:w-auto px-6 py-3 md:px-12 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              <FaSearch />
              <span>Search Developments</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;