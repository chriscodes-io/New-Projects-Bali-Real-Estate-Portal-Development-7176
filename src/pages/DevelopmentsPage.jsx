import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import DevelopmentCard from '../components/developments/DevelopmentCard';
import FilterSidebar from '../components/developments/FilterSidebar';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiGrid, FiList, FiSearch } = FiIcons;

const DevelopmentsPage = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - in real app, this would come from API
  const developments = [
    {
      id: 1,
      name: "Oceanview Villa Resort",
      location: "Uluwatu",
      price: "From $450k",
      status: "Off-plan",
      completion: "Q4 2025",
      yield: "16%",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Villa",
      units: 24,
      developer: "Bali Premium Developments",
      amenities: ["Pool", "Gym", "Beach Access", "Concierge"],
      priceRange: "$500k - $1M"
    },
    {
      id: 2,
      name: "Tropical Garden Villas",
      location: "Canggu",
      price: "From $320k",
      status: "Under Construction",
      completion: "Q2 2025",
      yield: "14%",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Villa",
      units: 18,
      developer: "Tropical Investments",
      amenities: ["Pool", "Garden", "Parking", "Security"],
      priceRange: "$200k - $500k"
    },
    {
      id: 3,
      name: "Seminyak Luxury Resort",
      location: "Seminyak",
      price: "From $680k",
      status: "Completed",
      completion: "Available Now",
      yield: "15%",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Resort",
      units: 32,
      developer: "Luxury Bali Group",
      amenities: ["Spa", "Restaurant", "Pool", "Beach Club"],
      priceRange: "$500k - $1M"
    },
    {
      id: 4,
      name: "Rice Field Retreat",
      location: "Ubud",
      price: "From $280k",
      status: "Off-plan",
      completion: "Q1 2026",
      yield: "12%",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Villa",
      units: 15,
      developer: "Ubud Lifestyle",
      amenities: ["Yoga Studio", "Organic Garden", "Pool", "Meditation Area"],
      priceRange: "$200k - $500k"
    },
    {
      id: 5,
      name: "Beachfront Paradise",
      location: "Jimbaran",
      price: "From $850k",
      status: "Under Construction",
      completion: "Q3 2025",
      yield: "17%",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Resort",
      units: 28,
      developer: "Coastal Developments",
      amenities: ["Beach Access", "Water Sports", "Restaurants", "Spa"],
      priceRange: "$500k - $1M"
    },
    {
      id: 6,
      name: "Modern Eco Villas",
      location: "Pererenan",
      price: "From $380k",
      status: "Off-plan",
      completion: "Q1 2026",
      yield: "13%",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Villa",
      units: 20,
      developer: "Green Living Bali",
      amenities: ["Solar Power", "Rainwater Harvesting", "Pool", "Garden"],
      priceRange: "$200k - $500k"
    }
  ];

  const [filteredDevelopments, setFilteredDevelopments] = useState(developments);
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    priceRange: searchParams.get('priceRange') || '',
    propertyType: searchParams.get('propertyType') || '',
    status: searchParams.get('status') || ''
  });

  useEffect(() => {
    let filtered = developments;

    // Apply filters
    if (filters.location) {
      filtered = filtered.filter(dev => 
        dev.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.propertyType) {
      filtered = filtered.filter(dev => dev.type === filters.propertyType);
    }
    if (filters.status) {
      filtered = filtered.filter(dev => dev.status === filters.status);
    }
    if (filters.priceRange) {
      filtered = filtered.filter(dev => dev.priceRange === filters.priceRange);
    }
    if (searchTerm) {
      filtered = filtered.filter(dev =>
        dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dev.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dev.developer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'yield':
        filtered.sort((a, b) => {
          const yieldA = parseInt(a.yield.replace('%', ''));
          const yieldB = parseInt(b.yield.replace('%', ''));
          return yieldB - yieldA;
        });
        break;
      default:
        // Featured/default sorting
        break;
    }

    setFilteredDevelopments(filtered);
  }, [filters, sortBy, searchTerm]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Premium Developments in Bali
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Discover exclusive villa and resort investments across Bali's most desirable locations
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search developments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SafeIcon icon={FiFilter} />
              <span>Filters</span>
            </button>

            <span className="text-slate-600">
              {filteredDevelopments.length} development{filteredDevelopments.length !== 1 ? 's' : ''} found
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="yield">Highest Yield</option>
            </select>

            {/* View Mode */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <SafeIcon icon={FiGrid} className={viewMode === 'grid' ? 'text-amber-600' : 'text-slate-600'} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <SafeIcon icon={FiList} className={viewMode === 'list' ? 'text-amber-600' : 'text-slate-600'} />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <FilterSidebar
            isOpen={showFilters}
            onClose={() => setShowFilters(false)}
            filters={filters}
            onFiltersChange={handleFilterChange}
          />

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {filteredDevelopments.map((development) => (
                <DevelopmentCard
                  key={development.id}
                  development={development}
                  viewMode={viewMode}
                />
              ))}
            </motion.div>

            {filteredDevelopments.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🏝️</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  No developments found
                </h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={() => {
                    setFilters({ location: '', priceRange: '', propertyType: '', status: '' });
                    setSearchTerm('');
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentsPage;