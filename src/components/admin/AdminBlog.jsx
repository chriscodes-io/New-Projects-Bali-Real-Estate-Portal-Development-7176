import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit3, FiTrash2, FiPlus, FiEye, FiCalendar } = FiIcons;

const AdminBlog = () => {
  const posts = [
    {
      id: 1,
      title: "Why Bali Property Prices Are Soaring in 2024",
      category: "Market Analysis",
      author: "Sarah Jenkins",
      date: "Mar 15, 2024",
      status: "Published",
      views: 1245
    },
    {
      id: 2,
      title: "Complete Guide to Foreign Property Ownership",
      category: "Legal Guide",
      author: "Marcus Tan",
      date: "Mar 12, 2024",
      status: "Draft",
      views: 0
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-premium-black">Blog Posts</h2>
        <button className="bg-premium-blue hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold transition-colors flex items-center space-x-2 shadow-lg shadow-premium-blue/20">
          <SafeIcon icon={FiPlus} />
          <span>New Post</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  post.status === 'Published' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {post.status}
                </span>
                <span className="text-xs text-premium-charcoal bg-premium-slate-50 px-2 py-0.5 rounded border border-gray-200">
                  {post.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-premium-black mb-1">{post.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-premium-charcoal">
                <span>By {post.author}</span>
                <span className="flex items-center space-x-1">
                  <SafeIcon icon={FiCalendar} className="text-xs" />
                  <span>{post.date}</span>
                </span>
                {post.status === 'Published' && (
                  <span className="flex items-center space-x-1 text-premium-blue">
                    <SafeIcon icon={FiEye} className="text-xs" />
                    <span>{post.views} views</span>
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-premium-charcoal hover:text-premium-blue hover:bg-blue-50 rounded-lg transition-colors">
                <SafeIcon icon={FiEdit3} />
              </button>
              <button className="p-2 text-premium-charcoal hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <SafeIcon icon={FiTrash2} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlog;