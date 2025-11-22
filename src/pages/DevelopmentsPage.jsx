import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterSidebar from '../components/developments/FilterSidebar';
import DevelopmentCard from '../components/developments/DevelopmentCard';
import SafeIcon from '../common/SafeIcon'; // FIXED IMPORT PATH
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiX } = FiIcons;

// Mock Data (In a real app, this would come from an API)
const MOCK_DEVELOPMENTS = [
  {
    id: 1,
    title: "Ocean Horizon Villas",
    location: "Uluwatu, Bali",
    price: 450000,
    roi: 15,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 3,
    baths: 3,
    size: 250,
    completion: "Q4 2024"
  },
  {
    id: 2,
    title: "Canggu Rice Field Lofts",
    location: "Canggu, Bali",
    price: 225000,
    roi: 12,
    image: "https://images.unsplash.com/photo-1600596542815-2251336b6f9b?auto=format&fit=crop&q=80&w=1000",
    type: "Apartment",
    beds: 1,
    baths: 1,
    size: 85,
    completion: "Ready"
  },
  {
    id: 3,
    title: "Ubud Jungle Retreat",
    location: "Ubud, Bali",
    price: 550000,
    roi: 14,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 4,
    baths: 4,
    size: 320,
    completion: "Q2 2025"
  },
  {
    id: 4,
    title: "Seminyak Beachfront Suites",
    location: "Seminyak, Bali",
    price: 380000,
    roi: 11,
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&q=80&w=1000",
    type: "Apartment",
    beds: 2,
    baths: 2,
    size: 120,
    completion: "Q1 2025"
  },
  {
    id: 5,
    title: "Nusa Dua Cliff Estate",
    location: "Nusa Dua, Bali",
    price: 1200000,
    roi: 18,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    type: "Estate",
    beds: 5,
    baths: 6,
    size: 600,
    completion: "Q3 2025"
  },
  {
    id: 6,
    title: "Pererenan Sunset Villas",
    location: "Pererenan, Bali",
    price: 320000,
    roi: 13,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 2,
    baths: 2,
    size: 150,
    completion: "Q4 2024"
  }
];

const DevelopmentsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  const handleFilterChange = (filters) => {
    // Implement filtering logic here
    console.log('Filters applied:', filters);
    // For now just shuffle/reset for demo
    setFilteredDevelopments([...MOCK_DEVELOPMENTS]); 
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
              Find your perfect investment in Bali
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
            <FilterSidebar onFilterChange={handleFilterChange} />
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
                    <FilterSidebar onFilterChange={handleFilterChange} isMobile={true} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentsPage;