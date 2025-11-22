import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedDevelopments = () => {
  const navigate = useNavigate();

  const featuredProjects = [
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
      featured: true,
      units: 24
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
      featured: true,
      units: 18
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
      featured: true,
      units: 32
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
      featured: true,
      units: 15
    }
  ];

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
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
            Handpicked developments offering exceptional returns and lifestyle benefits in Bali's most desirable locations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {featuredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 shadow-sm`}>
                      {project.status}
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-premium-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {project.yield} Yield
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-premium-black group-hover:text-premium-blue transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-sm text-premium-charcoal">{project.units} Units</span>
                    </div>
                    
                    <div className="text-sm text-premium-charcoal mb-4">
                      {project.location} • {project.type}
                    </div>

                    <div className="text-sm text-premium-charcoal mb-4">
                      {project.completion}
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                      <div className="text-2xl font-bold text-premium-black">
                        {project.price}
                      </div>
                      <button
                        onClick={() => handleViewDetails(project.id)}
                        className="bg-premium-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm shadow-lg cursor-pointer active:shadow-md transform hover:-translate-y-1"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={handleViewAll}
            className="inline-block bg-premium-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 cursor-pointer min-h-[56px]"
          >
            View All Developments
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDevelopments;