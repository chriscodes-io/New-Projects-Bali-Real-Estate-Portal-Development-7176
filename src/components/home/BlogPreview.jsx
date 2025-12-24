import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DUMMY_POSTS = [
  {
    id: 1,
    title: "2025 Bali Real Estate Market Trends: What Investors Need to Know",
    excerpt: "Discover the latest market analysis, investment opportunities, and economic factors shaping the Bali property market in 2025.",
    content: "The Bali real estate market continues to show strong growth potential...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
    date: "2025-01-15",
    readTime: "6 min read",
    categories: ["Market Analysis"],
    author: "Investment Team"
  },
  {
    id: 2,
    title: "Complete Guide to Bali Property Ownership for Foreign Investors",
    excerpt: "Navigate the legal requirements, tax implications, and best practices for international investors looking to purchase property in Bali.",
    content: "Foreign investors can own property in Bali through specific legal structures...",
    image: "https://images.unsplash.com/photo-1450101499163-c8917c7b4efc?auto=format&fit=crop&q=80&w=1000",
    date: "2025-01-10",
    readTime: "8 min read",
    categories: ["Legal Guide"],
    author: "Legal Advisor"
  },
  {
    id: 3,
    title: "Why Lombok is the Next Frontier for Real Estate Investment",
    excerpt: "Explore the emerging opportunities in Lombok, from pristine beaches to untapped investment potential and development initiatives.",
    content: "Lombok presents a unique investment opportunity with its pristine natural beauty...",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000",
    date: "2025-01-05",
    readTime: "5 min read",
    categories: ["Market Insights"],
    author: "Investment Team"
  }
];

const BlogPreview = () => {
  const navigate = useNavigate();
  const previewPosts = DUMMY_POSTS;

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
          {previewPosts.map((post, index) => (
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
                  <span className="bg-premium-blue text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {post.categories?.[0] || 'Insights'}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-premium-charcoal mb-3 space-x-4">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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