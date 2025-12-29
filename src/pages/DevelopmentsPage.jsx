import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterSidebar from '../components/developments/FilterSidebar';
import DevelopmentCard from '../components/developments/DevelopmentCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiX } = FiIcons;

import { PROJECTS } from '../constants/projects';
import { useSearchParams } from 'react-router-dom';

const DevelopmentsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    priceRange: searchParams.get('priceRange') || '',
    propertyType: searchParams.get('propertyType') || '',
    status: searchParams.get('status') || ''
  });

  // Initialize filters from URL params
  useEffect(() => {
    const newFilters = {
      location: searchParams.get('location') || '',
      priceRange: searchParams.get('priceRange') || '',
      propertyType: searchParams.get('propertyType') || '',
      status: searchParams.get('status') || ''
    };
    setFilters(newFilters);
  }, [searchParams]);

  // Prevent body scroll when mobile filter is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterOpen]);

  // Handle filter changes from sidebar
  const handleFilterChange = (currentFilters) => {
    setFilters(currentFilters);
  };

  // Recommendation implementation: Memoized Filtering
  const filteredDevelopments = React.useMemo(() => {
    let results = PROJECTS;

    if (filters.location) {
      results = results.filter(dev =>
        dev.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.propertyType) {
      results = results.filter(dev => {
        if (!dev.type) return false;
        const devType = dev.type.toLowerCase();
        const filterType = filters.propertyType.toLowerCase();
        return devType.includes(filterType);
      });
    }

    if (filters.status) {
      results = results.filter(dev => dev.status === filters.status);
    }

    if (filters.priceRange) {
      const range = filters.priceRange;
      results = results.filter(dev => {
        const price = dev.price;
        if (range === 'Under $200k') return price < 200000;
        if (range === '$200k - $500k') return price >= 200000 && price < 500000;
        if (range === '$500k - $1M') return price >= 500000 && price < 1000000;
        if (range === '$1M - $2M') return price >= 1000000 && price < 2000000;
        if (range === '$2M - $5M') return price >= 2000000 && price < 5000000;
        if (range === 'Above $5M') return price >= 5000000;
        return true;
      });
    }

    return results;
  }, [filters]);

  return (
    <div className="min-h-screen bg-premium-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-premium-black mb-2">
              Featured Developments
            </h1>
            <p className="text-premium-charcoal text-lg">
              Premium villas & residences in Bali's most sought-after locations
            </p>
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-medium text-premium-black shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[48px]"
          >
            <SafeIcon icon={FiFilter} />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex gap-8 items-start">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0 sticky top-24">
            <FilterSidebar
              filters={filters}
              onFiltersChange={handleFilterChange}
              isOpen={false}
              onClose={() => { }}
            />
          </div>

          {/* Mobile Filter Overlay */}
          <AnimatePresence>
            {isFilterOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsFilterOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl lg:hidden overflow-y-auto"
                >
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                    <h2 className="font-bold text-lg text-premium-black">Filters</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    >
                      <SafeIcon icon={FiX} />
                    </button>
                  </div>
                  <div className="p-4 pb-24">
                    <FilterSidebar
                      filters={filters}
                      onFiltersChange={handleFilterChange}
                      isOpen={isFilterOpen}
                      onClose={() => setIsFilterOpen(false)}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="w-full py-3 bg-premium-purple text-white rounded-xl font-bold shadow-premium-cta"
                    >
                      Show Results
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Grid Layout */}
          <div className="flex-1 w-full">
            {filteredDevelopments.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {filteredDevelopments.map((dev) => (
                    <DevelopmentCard key={dev.id} development={dev} />
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-12 text-center">
                  <button className="px-8 py-3 bg-white border border-gray-200 hover:border-premium-purple text-premium-black font-medium rounded-xl transition-all duration-300 hover:shadow-md min-h-[48px]">
                    Load More Properties
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-lg text-premium-charcoal mb-4">No properties match your filters</p>
                <button
                  onClick={() => handleFilterChange({
                    location: '',
                    priceRange: '',
                    propertyType: '',
                    status: ''
                  })}
                  className="px-6 py-2 text-premium-blue hover:text-blue-700 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentsPage;