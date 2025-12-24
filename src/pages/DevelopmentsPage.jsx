import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterSidebar from '../components/developments/FilterSidebar';
import DevelopmentCard from '../components/developments/DevelopmentCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiX } = FiIcons;

// Real Development Data - Marina Bay City & Saraya Lombok
const MOCK_DEVELOPMENTS = [
  // Marina Bay City - Beachfront Villas
  {
    id: 1,
    title: "Marina Bay Beachfront Villas",
    location: "Seminyak, Bali",
    price: 825000,
    roi: 16,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 4,
    baths: 4,
    size: 400,
    completion: "Ready",
    developer: "Marina Bay City",
    featured: true,
    url: "https://marinabaycity.com/now-selling/beachfront-villas/"
  },
  // Marina Bay City - Central Avenue
  {
    id: 2,
    title: "Central Avenue Residences",
    location: "Seminyak, Bali",
    price: 550000,
    roi: 13,
    image: "https://images.unsplash.com/photo-1600596542815-2251336b6f9b?auto=format&fit=crop&q=80&w=1000",
    type: "Apartment",
    beds: 3,
    baths: 2,
    size: 180,
    completion: "Q2 2025",
    developer: "Marina Bay City",
    featured: true,
    url: "https://marinabaycity.com/now-selling/central-avenue/"
  },
  // Marina Bay City - Reef Retreat
  {
    id: 3,
    title: "Reef Retreat Luxury Villas",
    location: "Sanur, Bali",
    price: 695000,
    roi: 15,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 4,
    baths: 3,
    size: 350,
    completion: "Q4 2025",
    developer: "Marina Bay City",
    featured: true,
    url: "https://marinabaycity.com/now-selling/reef-retreat/"
  },
  // Saraya Lombok - Villas
  {
    id: 4,
    title: "Saraya Lombok Tropical Villas",
    location: "Lombok, Indonesia",
    price: 320000,
    roi: 14,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 3,
    baths: 2,
    size: 200,
    completion: "Ready",
    developer: "Saraya Lombok",
    featured: true,
    url: "https://sarayalombok.com/villas/"
  },
  {
    id: 5,
    title: "Saraya Lombok Beach Villas",
    location: "Lombok, Indonesia",
    price: 425000,
    roi: 15,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 4,
    baths: 3,
    size: 320,
    completion: "Q1 2025",
    developer: "Saraya Lombok",
    featured: true,
    url: "https://sarayalombok.com/villas/"
  },
  {
    id: 6,
    title: "Saraya Lombok Oceanfront Estate",
    location: "Lombok, Indonesia",
    price: 750000,
    roi: 17,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    type: "Estate",
    beds: 5,
    baths: 4,
    size: 480,
    completion: "Q3 2025",
    developer: "Saraya Lombok",
    featured: true,
    url: "https://sarayalombok.com/villas/"
  }
];

const DevelopmentsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    status: ''
  });
  const [filteredDevelopments, setFilteredDevelopments] = useState(MOCK_DEVELOPMENTS);

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

  const handleFilterChange = (newFilters) => {
    // Update filters state
    setFilters(newFilters);
    console.log('Filters applied:', newFilters);
    
    // Implement filtering logic here
    let results = MOCK_DEVELOPMENTS;
    
    if (newFilters.location) {
      results = results.filter(dev => dev.location.includes(newFilters.location));
    }
    if (newFilters.propertyType) {
      results = results.filter(dev => dev.type === newFilters.propertyType);
    }
    if (newFilters.priceRange) {
      // Simple price range filtering
      results = results.filter(dev => {
        const price = dev.price;
        if (newFilters.priceRange === 'Under $200k') return price < 200000;
        if (newFilters.priceRange === '$200k - $500k') return price >= 200000 && price < 500000;
        if (newFilters.priceRange === '$500k - $1M') return price >= 500000 && price < 1000000;
        if (newFilters.priceRange === '$1M - $2M') return price >= 1000000 && price < 2000000;
        if (newFilters.priceRange === '$2M - $5M') return price >= 2000000 && price < 5000000;
        if (newFilters.priceRange === 'Above $5M') return price >= 5000000;
        return true;
      });
    }
    
    setFilteredDevelopments(results);
  };

  return (
    <div className="min-h-screen bg-premium-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-premium-black mb-2">
              Exclusive Properties
            </h1>
            <p className="text-premium-charcoal text-lg">
              Premium villas & residences from Marina Bay City & Saraya Lombok
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
              onClose={() => {}}
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
                      <SafeIcon icon={FiX} className="text-xl" />
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