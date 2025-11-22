import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogPreview = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "Why Bali Property Prices Are Soaring in 2024",
      excerpt: "An in-depth analysis of the current market trends, tourism growth, and foreign investment influx driving real estate values.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Market Analysis",
      date: "Mar 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Complete Guide to Foreign Property Ownership",
      excerpt: "Understanding the legal framework: Leasehold vs. Freehold, PMA companies, and how to safely navigate Indonesian property laws.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Legal Guide",
      date: "Mar 12, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Top 5 Emerging Areas for High ROI Villas",
      excerpt: "Move over Seminyak. Discover the new hotspots in Pererenan, Kedungu, and Uluwatu offering the highest rental yields.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Investment Tips",
      date: "Mar 10, 2024",
      readTime: "6 min read"
    }
  ];

  const handleViewArticle = (postId) => {
    navigate(`/blog/${postId}`);
    window.scrollTo(0, 0);
  };

  const handleViewAllArticles = () => {
    navigate('/blog');
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            Investment Tips & Market Updates
          </h2>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
            Stay informed with expert analysis, legal guides, and investment strategies for the Bali real estate market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.button
              key={post.id}
              onClick={() => handleViewArticle(post.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col w-full text-left cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
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
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-premium-black mb-3 group-hover:text-premium-blue transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-premium-charcoal text-sm line-clamp-2 mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center text-premium-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  <span>Read Article →</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={handleViewAllArticles}
            className="inline-block bg-premium-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 cursor-pointer min-h-[56px]"
          >
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;