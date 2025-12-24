import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import OptimizedImage from '../common/OptimizedImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    id: 6,
    title: "Saraya Lombok Oceanfront Estate",
    location: "Lombok, Indonesia",
    price: 750000,
    roi: 17,
    yield: '17%',
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    type: "Estate",
    beds: 5,
    baths: 4,
    size: 480,
    completion: "Q3 2025",
    status: "Off-plan",
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
  },
  {
    id: 2,
    title: "Central Avenue Residences",
    location: "Seminyak, Bali",
    price: 550000,
    roi: 13,
    yield: '13%',
    image: "https://images.unsplash.com/photo-1600596542815-2251336b6f9b?auto=format&fit=crop&q=80&w=1000",
    type: "Apartment",
    beds: 3,
    baths: 2,
    size: 180,
    completion: "Q2 2025",
    status: "Under Construction",
    developer: "Marina Bay City",
    featured: true
  },
  {
    id: 3,
    title: "Reef Retreat Luxury Villas",
    location: "Sanur, Bali",
    price: 695000,
    roi: 15,
    yield: '15%',
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    type: "Villa",
    beds: 4,
    baths: 3,
    size: 350,
    completion: "Q4 2025",
    status: "Off-plan",
    developer: "Marina Bay City",
    featured: true
  }
];

const FeaturedDevelopments = () => {
  const navigate = useNavigate();

  const handleViewDetails = (projectId) => {
    navigate(`/development/${projectId}`);
    window.scrollTo(0, 0);
  };

  const handleViewAll = () => {
    navigate('/developments');
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
            Handpicked developments offering exceptional returns and lifestyle benefits in Bali's most desirable locations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <button className="featured-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-premium-black hover:bg-premium-blue hover:text-white transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="featured-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-premium-black hover:bg-premium-blue hover:text-white transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.featured-prev',
              nextEl: '.featured-next'
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 px-16"
          >
            {DUMMY_DEVELOPMENTS.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 h-[480px] flex flex-col"
                >
                  <div className="relative h-56 flex-shrink-0 overflow-hidden">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
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

                  <div className="p-6 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-premium-black group-hover:text-premium-blue transition-colors line-clamp-2 min-h-[56px]">
                        {project.title}
                      </h3>
                      <span className="text-sm text-premium-darkgray flex-shrink-0 ml-2">{project.beds} Beds</span>
                    </div>
                    
                    <div className="text-sm text-premium-darkgray mb-2">
                      {project.location} • {project.type}
                    </div>

                    <div className="text-sm text-premium-darkgray mb-4 flex-1">
                      {project.completion}
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                      <div className="text-2xl font-bold text-premium-black">
                        ${project.price.toLocaleString()}
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