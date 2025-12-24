import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiMapPin, FiDollarSign, FiHome, FiClock, FiRefreshCw } = FiIcons;

const FilterSidebar = ({ isOpen, onClose, filters = {}, onFiltersChange }) => {
  const locations = [
    'Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Sanur',
    'Nusa Dua', 'Jimbaran', 'Pererenan', 'Tabanan', 'Lombok'
  ];

  const priceRanges = [
    'Under $200k', '$200k - $500k', '$500k - $1M',
    '$1M - $2M', '$2M - $5M', 'Above $5M'
  ];

  const propertyTypes = ['Villa', 'Resort', 'Apartment', 'Land', 'Estate'];
  const statuses = ['Off-plan', 'Under Construction', 'Completed', 'Ready to Move'];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      location: '',
      priceRange: '',
      propertyType: '',
      status: ''
    });
  };

  // ✅ FIX: Add null/undefined safety check
  const hasActiveFilters = filters && Object.values(filters).some(value => value !== '');

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`
        lg:block lg:w-80 flex-shrink-0
        ${isOpen ? 'block' : 'hidden'}
        lg:relative fixed inset-y-0 left-0 z-50 lg:z-0
      `}>
        <motion.div
          initial={{ x: -320 }}
          animate={{ x: isOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024) ? 0 : -320 }}
          transition={{ duration: 0.3 }}
          className="h-full lg:h-auto bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-premium-black">Filters</h3>
            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  aria-label="Clear all filters"
                  className="text-premium-blue hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                >
                  <SafeIcon icon={FiRefreshCw} className="text-xs" />
                  <span>Clear All</span>
                </button>
              )}
              <button
                onClick={onClose}
                aria-label="Close filters"
                className="lg:hidden p-1 text-gray-400 hover:text-premium-black"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>
          </div>

          {/* Location Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-bold text-premium-black mb-3">
              <SafeIcon icon={FiMapPin} className="text-premium-blue" />
              <span>Location</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  name="location"
                  value=""
                  checked={filters?.location === ''}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                />
                <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">All Locations</span>
              </label>
              {locations.map((location) => (
                <label key={location} className="flex items-center group cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value={location}
                    checked={filters?.location === location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                  />
                  <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-bold text-premium-black mb-3">
              <SafeIcon icon={FiDollarSign} className="text-premium-blue" />
              <span>Price Range</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value=""
                  checked={filters?.priceRange === ''}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                />
                <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">Any Price</span>
              </label>
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center group cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range}
                    checked={filters?.priceRange === range}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                  />
                  <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Type Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-bold text-premium-black mb-3">
              <SafeIcon icon={FiHome} className="text-premium-blue" />
              <span>Property Type</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  name="propertyType"
                  value=""
                  checked={filters?.propertyType === ''}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                />
                <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">All Types</span>
              </label>
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center group cursor-pointer">
                  <input
                    type="radio"
                    name="propertyType"
                    value={type}
                    checked={filters?.propertyType === type}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                  />
                  <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-bold text-premium-black mb-3">
              <SafeIcon icon={FiClock} className="text-premium-blue" />
              <span>Development Status</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value=""
                  checked={filters?.status === ''}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                />
                <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">Any Status</span>
              </label>
              {statuses.map((status) => (
                <label key={status} className="flex items-center group cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={filters?.status === status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-4 h-4 text-premium-blue border-gray-300 focus:ring-premium-blue"
                  />
                  <span className="ml-2 text-sm text-premium-charcoal group-hover:text-premium-blue transition-colors">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-bold text-premium-black mb-2">Active Filters:</h4>
              <div className="space-y-1">
                {Object.entries(filters || {}).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div key={key} className="flex items-center justify-between text-xs bg-premium-slate-50 px-3 py-2 rounded-lg">
                      <span className="text-premium-charcoal capitalize"><span className="font-semibold">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}</span>
                      <button
                        onClick={() => handleFilterChange(key, '')}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <SafeIcon icon={FiX} className="text-xs" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default FilterSidebar;