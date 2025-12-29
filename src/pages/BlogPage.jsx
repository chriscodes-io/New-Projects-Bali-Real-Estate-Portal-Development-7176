import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiArrowRight, FiClock } = FiIcons;

const BlogPage = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "Why Bali Property Prices Are Soaring in 2024",
      excerpt: "An in-depth analysis of the current market trends, tourism growth, and foreign investment influx driving real estate values.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Market Analysis",
      author: "Sarah Jenkins",
      date: "Mar 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Complete Guide to Foreign Property Ownership",
      excerpt: "Understanding the legal framework: Leasehold vs. Freehold, PMA companies, and how to safely navigate Indonesian property laws.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Legal Guide",
      author: "Marcus Tan",
      date: "Mar 12, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Top 5 Emerging Areas for High ROI Villas",
      excerpt: "Move over Seminyak. Discover the new hotspots in Pererenan, Kedungu, and Uluwatu offering the highest rental yields.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Investment Tips",
      author: "Jessica Lee",
      date: "Mar 10, 2024",
      readTime: "6 min read"
    }
  ];

  const handleViewPost = (postId) => {
    navigate(`/ blog / ${postId} `);
    window.scrollTo(0, 0);
  };

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-premium-slate-50 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-premium-blue font-semibold tracking-wider uppercase text-sm mb-2 block">
            The Bali Investment Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            Insights & Market Updates
          </h1>
          <p className="text-xl text-premium-charcoal max-w-2xl mx-auto">
            Expert analysis, legal guides, and investment strategies for the Bali real estate market.
          </p>
        </motion.div>

        {/* Featured Post (First one) */}
        <motion.button
          onClick={() => handleViewPost(posts[0].id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="group relative block w-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 mb-16 text-left cursor-pointer bg-transparent border-0 p-0"
        >
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-6 relative h-[400px] md:h-[500px]">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block bg-premium-blue text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {posts[0].category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-premium-powder transition-colors">
                {posts[0].title}
              </h2>
              <div className="flex items-center text-white/80 space-x-6 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.button>

        {/* Grid of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.button
              key={post.id}
              onClick={() => handleViewPost(post.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 text-left cursor-pointer p-0"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-premium-blue px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-premium-charcoal mb-3 space-x-4">
                  <span className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-premium-black mb-3 group-hover:text-premium-blue transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-premium-charcoal text-sm line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center text-premium-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <SafeIcon icon={FiArrowRight} className="ml-2" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;