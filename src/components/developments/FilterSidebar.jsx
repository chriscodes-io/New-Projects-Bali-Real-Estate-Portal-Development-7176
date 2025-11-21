import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiMapPin, FiDollarSign, FiHome, FiClock, FiRefreshCw } = FiIcons;

const FilterSidebar = ({ isOpen, onClose, filters, onFiltersChange }) => {
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

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

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
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
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
          animate={{ x: isOpen || window.innerWidth >= 1024 ? 0 : -320 }}
          transition={{ duration: 0.3 }}
          className="h-full lg:h-auto bg-white lg:bg-gray-50 lg:rounded-xl p-6 shadow-xl lg:shadow-lg border-r lg:border lg:border-gray-200 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Filters</h3>
            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center space-x-1"
                >
                  <SafeIcon icon={FiRefreshCw} className="text-xs" />
                  <span>Clear All</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="lg:hidden p-1 text-slate-400 hover:text-slate-600"
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>
            </div>
          </div>

          {/* Location Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
              <SafeIcon icon={FiMapPin} className="text-amber-500" />
              <span>Location</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="location"
                  value=""
                  checked={filters.location === ''}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                />
                <span className="ml-2 text-sm text-slate-600">All Locations</span>
              </label>
              {locations.map((location) => (
                <label key={location} className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value={location}
                    checked={filters.location === location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
              <SafeIcon icon={FiDollarSign} className="text-amber-500" />
              <span>Price Range</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  value=""
                  checked={filters.priceRange === ''}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                />
                <span className="ml-2 text-sm text-slate-600">Any Price</span>
              </label>
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range}
                    checked={filters.priceRange === range}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Type Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
              <SafeIcon icon={FiHome} className="text-amber-500" />
              <span>Property Type</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="propertyType"
                  value=""
                  checked={filters.propertyType === ''}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                />
                <span className="ml-2 text-sm text-slate-600">All Types</span>
              </label>
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name="propertyType"
                    value={type}
                    checked={filters.propertyType === type}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 mb-3">
              <SafeIcon icon={FiClock} className="text-amber-500" />
              <span>Development Status</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value=""
                  checked={filters.status === ''}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                />
                <span className="ml-2 text-sm text-slate-600">Any Status</span>
              </label>
              {statuses.map((status) => (
                <label key={status} className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={filters.status === status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-medium text-slate-700 mb-2">Active Filters:</h4>
              <div className="space-y-1">
                {Object.entries(filters).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 capitalize">{key}: {value}</span>
                      <button
                        onClick={() => handleFilterChange(key, '')}
                        className="text-amber-600 hover:text-amber-700"
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