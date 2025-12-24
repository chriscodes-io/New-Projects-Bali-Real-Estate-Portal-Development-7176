import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '../common/OptimizedImage';

// HARDCODED DUMMY DATA - ROBUST & SAFE
const DUMMY_DEVELOPMENTS = [
  {
    id: 4,
    title: "Saraya Lombok Tropical Villas",
    location: "Lombok, Indonesia",
    price: 320000,
    roi: 14,
    yield: '14%',
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 3,
    baths: 2,
    size: 200,
    completion: "Ready",
    status: "Ready",
    developer: "Saraya Lombok",
    featured: true
  },
  {
    id: 5,
    title: "Saraya Lombok Beach Villas",
    location: "Lombok, Indonesia",
    price: 425000,
    roi: 15,
    yield: '15%',
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 4,
    baths: 3,
    size: 320,
    completion: "Q1 2025",
    status: "Under Construction",
    developer: "Saraya Lombok",
    featured: true
  },
  {
    id: 1,
    title: "Marina Bay Beachfront Villas",
    location: "Seminyak, Bali",
    price: 825000,
    roi: 16,
    yield: '16%',
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 4,
    baths: 4,
    size: 400,
    completion: "Ready",
    status: "Ready",
    developer: "Marina Bay City",
    featured: true
  }
];

const FeaturedDevelopments = () => {
  const navigate = useNavigate();
  const displayProjects = DUMMY_DEVELOPMENTS;

  const handleViewDetails = (projectId) => {
    navigate(`/development/${projectId}`);
    window.scrollTo(0, 0);
  };

  const handleViewAll = () => {
    navigate('/developments');
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-premium-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            Premium Investment Opportunities
          </h2>
          <p className="text-xl text-premium-darkgray max-w-3xl mx-auto">
            Handpicked developments offering exceptional returns and lifestyle benefits in Bali's most desirable locations.
          </p>
        </motion.div>

        {/* Grid Layout replacing Swiper for Stability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 shadow-sm text-premium-black">
                  {project.status}
                </div>
                
                <div className="absolute top-4 right-4 bg-premium-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {project.yield || `${project.roi}%`} Yield
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-premium-black group-hover:text-premium-blue transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-sm text-premium-darkgray mb-4">
                  <span className="mr-3">{project.location}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full mr-3"></span>
                  <span>{project.type}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <span className="block text-lg font-bold text-premium-black">{project.beds}</span>
                    <span className="text-xs text-gray-500 uppercase">Beds</span>
                  </div>
                  <div className="text-center border-l border-gray-100">
                    <span className="block text-lg font-bold text-premium-black">{project.baths}</span>
                    <span className="text-xs text-gray-500 uppercase">Baths</span>
                  </div>
                  <div className="text-center border-l border-gray-100">
                    <span className="block text-lg font-bold text-premium-black">{project.size}</span>
                    <span className="text-xs text-gray-500 uppercase">m²</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="text-2xl font-bold text-premium-black">
                    {Number.isFinite(project.price) ? `$${project.price.toLocaleString()}` : 'Price on request'}
                  </div>
                  <button
                    onClick={() => handleViewDetails(project.id)}
                    className="px-4 py-2 bg-premium-purple/10 text-premium-purple hover:bg-premium-purple hover:text-white rounded-lg font-medium text-sm transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={handleViewAll}
            className="inline-block bg-premium-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            View All Developments
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDevelopments;