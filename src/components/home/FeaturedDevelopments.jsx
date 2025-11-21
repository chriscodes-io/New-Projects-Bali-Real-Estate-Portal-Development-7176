import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { FiMapPin, FiCalendar, FiTrendingUp, FiEye, FiStar } = FiIcons;

const FeaturedDevelopments = () => {
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
      completion: "Q1 2026",yield: "12%",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "Villa",
      featured: true,
      units: 15
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Off-plan':
        return 'bg-premium-blue/10 text-premium-blue border border-premium-blue/20';
      case 'Under Construction':
        return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'Completed':
        return 'bg-green-100 text-green-800 border border-green-200';
      default:
        return 'bg-gray-100 text-gray-600';
    }
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
          <div className="inline-flex items-center space-x-2 bg-premium-blue/10 text-premium-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiStar} />
            <span>Featured Developments</span>
          </div>
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-white/90 shadow-sm ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                    
                    {/* Yield Badge */}
                    <div className="absolute top-4 right-4 bg-premium-blue text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                      <SafeIcon icon={FiTrendingUp} />
                      <span>{project.yield} Yield</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-premium-black group-hover:text-premium-blue transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-sm text-premium-charcoal">{project.units} Units</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-premium-charcoal mb-4">
                      <SafeIcon icon={FiMapPin} className="text-premium-blue" />
                      <span className="text-sm">{project.location}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm">{project.type}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-premium-charcoal mb-4">
                      <SafeIcon icon={FiCalendar} className="text-premium-blue" />
                      <span className="text-sm">{project.completion}</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                      <div className="text-2xl font-bold text-premium-black">
                        {project.price}
                      </div>
                      <Link
                        to={`/development/${project.id}`}
                        className="group/btn bg-premium-black text-white hover:bg-premium-blue px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium"
                      >
                        <SafeIcon icon={FiEye} />
                        <span className="text-sm">View Details</span>
                      </Link>
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
          <Link
            to="/developments"
            className="inline-flex items-center space-x-2 bg-premium-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>View All Developments</span>
            <SafeIcon icon={FiTrendingUp} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDevelopments;