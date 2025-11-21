import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import DevelopmentCard from '../components/developments/DevelopmentCard';
import FilterSidebar from '../components/developments/FilterSidebar';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiGrid, FiList, FiSearch, FiX } = FiIcons;

const DevelopmentsPage = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - same as before but ensured persistence
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

    setFilteredDevelopments(filtered);
  }, [filters, sortBy, searchTerm]);

  return (
    <div className="min-h-screen bg-premium-slate-50 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-premium-black mb-4">
            Premium Developments
          </h1>
          <p className="text-lg text-premium-charcoal mb-8 max-w-2xl">
            Discover exclusive villa and resort investments across Bali's most desirable locations, curated for high yields and lifestyle.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search by name, location, or developer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-premium-blue focus:ring-4 focus:ring-premium-blue/10 outline-none shadow-sm transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <SafeIcon icon={FiX} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 sticky top-20 z-30 bg-premium-slate-50/90 backdrop-blur-sm py-4">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-6 py-3 bg-white border border-gray-200 text-premium-black rounded-xl hover:border-premium-blue hover:text-premium-blue transition-colors shadow-sm font-medium"
            >
              <SafeIcon icon={FiFilter} />
              <span>Filters</span>
            </button>
            
            <div className="hidden md:block text-premium-charcoal text-sm font-medium pl-2">
              Showing {filteredDevelopments.length} results
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 md:flex-none px-4 py-3 border border-gray-200 rounded-xl focus:border-premium-blue focus:ring-2 focus:ring-premium-blue/10 outline-none bg-white text-premium-charcoal cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="yield">Highest Yield</option>
            </select>

            <div className="flex bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-premium-blue text-white shadow-md' : 'text-gray-400 hover:text-premium-charcoal'}`}
              >
                <SafeIcon icon={FiGrid} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-premium-blue text-white shadow-md' : 'text-gray-400 hover:text-premium-charcoal'}`}
              >
                <SafeIcon icon={FiList} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8 relative">
          {/* Sidebar Filters */}
          <FilterSidebar
            isOpen={showFilters}
            onClose={() => setShowFilters(false)}
            filters={filters}
            onFiltersChange={setFilters}
          />

          {/* Main Content Grid */}
          <div className="flex-1">
            <motion.div
              layout
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' // Adjusted for better card fit
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
                className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="text-6xl mb-6">🏝️</div>
                <h3 className="text-2xl font-bold text-premium-black mb-2">
                  No developments found
                </h3>
                <p className="text-premium-charcoal mb-8">
                  We couldn't find any properties matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setFilters({ location: '', priceRange: '', propertyType: '', status: '' });
                    setSearchTerm('');
                  }}
                  className="bg-premium-blue hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg"
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