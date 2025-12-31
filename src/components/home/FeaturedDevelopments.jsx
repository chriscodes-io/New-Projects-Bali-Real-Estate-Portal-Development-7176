import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, Eye } from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { PROJECTS } from '../../constants/projects';

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
    <section className="py-24 bg-premium-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-premium-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-premium-blue/10 text-premium-blue text-sm font-bold mb-4">
            Featured Listings
          </span>
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
          className="relative px-4 sm:px-0"
        >
          {/* Custom Navigation Buttons */}
          <button className="featured-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-12 z-20 w-14 h-14 bg-white/80 backdrop-blur-md border border-white rounded-full shadow-lg flex items-center justify-center text-premium-black hover:bg-premium-blue hover:text-white transition-all duration-300 group">
            <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button className="featured-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-12 z-20 w-14 h-14 bg-white/80 backdrop-blur-md border border-white rounded-full shadow-lg flex items-center justify-center text-premium-black hover:bg-premium-blue hover:text-white transition-all duration-300 group">
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: '.featured-prev',
              nextEl: '.featured-next'
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            lazy={{
              loadPrevNext: true,
              loadPrevNextAmount: 1
            }}
            watchSlidesProgress={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 pt-4 px-2"
          >
            {PROJECTS.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div
                  className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-premium-blue/10 transition-all duration-500 overflow-hidden group border border-gray-100 h-[520px] flex flex-col hover:-translate-y-2 relative"
                  style={{ willChange: 'transform, box-shadow' }}
                >
                  <div className="relative h-64 flex-shrink-0 overflow-hidden">
                    <OptimizedImage
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 shadow-sm text-premium-black">
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-premium-blue/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {project.yield} Yield
                    </div>

                    {/* Quick Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-2xl font-bold mb-1">
                        {project.priceDisplay}
                      </div>
                      <div className="text-sm font-medium opacity-90">
                        {project.location}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col min-h-0 bg-white relative z-10">
                    <div className="mb-4">
                      <div className="text-xs font-bold text-premium-blue uppercase tracking-wider mb-2">
                        {project.type}
                      </div>
                      <h3 className="text-xl font-bold text-premium-black group-hover:text-premium-blue transition-colors line-clamp-2 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-4 border-t border-gray-100/50 mb-6">
                      <div className="text-center border-r border-gray-100 last:border-0">
                        <div className="text-sm font-bold text-premium-black">{project.beds || '-'}</div>
                        <div className="text-xs text-gray-500">Beds</div>
                      </div>
                      <div className="text-center border-r border-gray-100 last:border-0">
                        <div className="text-sm font-bold text-premium-black">{project.baths || '-'}</div>
                        <div className="text-xs text-gray-500">Baths</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-premium-black">{project.size}</div>
                        <div className="text-xs text-gray-500">Size</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleViewDetails(project.id)}
                      className="mt-auto w-full py-4 rounded-xl border-2 border-premium-blue/10 text-premium-blue font-bold text-sm hover:bg-premium-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-premium-blue group-hover:shadow-lg group-hover:shadow-premium-blue/20"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={handleViewAll}
            className="inline-flex items-center justify-center gap-2 bg-premium-purple hover:bg-purple-700 text-white w-full md:w-auto px-6 py-3 md:px-10 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl shadow-purple-900/10 hover:-translate-y-1"
          >
            <span>View All Developments</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(FeaturedDevelopments);