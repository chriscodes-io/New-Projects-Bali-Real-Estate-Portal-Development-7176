import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2 } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock Data - normally fetched by ID
  const post = {
    title: "Why Bali Property Prices Are Soaring in 2024",
    content: `
      <p class="mb-6">Bali's real estate market is experiencing an unprecedented boom as we move through 2024. The combination of post-pandemic tourism recovery and a surge in digital nomads seeking long-term accommodation has created a perfect storm for property investors.</p>
      
      <h3 class="text-2xl font-bold text-premium-black mb-4">The Tourism Factor</h3>
      <p class="mb-6">With over 6 million annual visitors projected this year, the demand for short-term holiday rentals is at an all-time high. Villas in prime locations like Canggu and Uluwatu are seeing occupancy rates consistently above 85%.</p>
      
      <h3 class="text-2xl font-bold text-premium-black mb-4">Infrastructure Improvements</h3>
      <p class="mb-6">The government's continued investment in infrastructure, including the Gilimanuk-Mengwi toll road, is opening up new areas for development and increasing property values in previously less accessible regions.</p>
      
      <blockquote class="border-l-4 border-premium-blue pl-6 italic text-lg text-premium-charcoal my-8 bg-premium-slate-50 py-4 pr-4 rounded-r-lg">
        "Smart investors are looking beyond the traditional hotspots. The real growth potential lies in the emerging zones just 15 minutes outside the central districts."
      </blockquote>

      <h3 class="text-2xl font-bold text-premium-black mb-4">Recommendation</h3>
      <p>For those looking to enter the market, off-plan developments offer the most attractive entry points, with capital appreciation often exceeding 20% by completion.</p>
    `,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "Market Analysis",
    author: "Sarah Jenkins",
    date: "Mar 15, 2024",
    readTime: "5 min read"
  };

  const handleBackToBlog = () => {
    navigate('/blog');
    window.scrollTo(0, 0);
  };

  const handleContactAdvisor = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>
        
        <div className="absolute top-8 left-0 right-0 max-w-7xl mx-auto px-4">
          <button 
            onClick={handleBackToBlog}
            className="inline-flex items-center text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/40 transition-colors cursor-pointer min-h-[44px]"
          >
            <SafeIcon icon={FiArrowLeft} className="mr-2" />
            Back to Blog
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="bg-premium-blue/10 text-premium-blue px-4 py-1.5 rounded-full text-sm font-bold">
              {post.category}
            </span>
            <button className="text-premium-charcoal hover:text-premium-blue transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center">
              <SafeIcon icon={FiShare2} className="text-xl" />
            </button>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-premium-black mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-premium-charcoal border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUser} />
              </div>
              <span className="font-medium text-premium-black">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <SafeIcon icon={FiCalendar} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <SafeIcon icon={FiClock} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg prose-slate max-w-none text-premium-charcoal"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box */}
          <div className="mt-12 bg-gradient-to-br from-premium-slate-800 to-premium-slate-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Investing?</h3>
            <p className="mb-6 text-premium-powder/80">
              Get access to our exclusive list of high-yield properties before they hit the public market.
            </p>
            <button 
              onClick={handleContactAdvisor}
              className="inline-block bg-premium-purple hover:bg-purple-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-premium-cta hover:shadow-xl hover:-translate-y-1 cursor-pointer min-h-[48px]"
            >
              Speak to an Advisor
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;