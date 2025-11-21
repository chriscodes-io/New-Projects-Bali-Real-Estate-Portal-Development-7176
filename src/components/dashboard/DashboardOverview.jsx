import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers, FiDollarSign, FiEye, FiMail, FiPhone, FiArrowUp, FiArrowDown, FiCalendar, FiMapPin, FiStar } = FiIcons;

const DashboardOverview = () => {
  const stats = [
    { title: 'Total Projects', value: '4', change: '+1', changeType: 'positive', icon: FiTrendingUp, color: 'bg-blue-100 text-blue-600' },
    { title: 'Total Leads', value: '127', change: '+23', changeType: 'positive', icon: FiUsers, color: 'bg-green-100 text-green-600' },
    { title: 'Revenue Generated', value: '$45,600', change: '+15%', changeType: 'positive', icon: FiDollarSign, color: 'bg-indigo-100 text-indigo-600' },
    { title: 'Profile Views', value: '2,341', change: '+8%', changeType: 'positive', icon: FiEye, color: 'bg-purple-100 text-purple-600' }
  ];

  const recentLeads = [
    { id: 1, name: 'Sarah Johnson', email: 's.johnson@email.com', phone: '+61 412 345 678', project: 'Oceanview Villa Resort', budget: '$500k - $1M', country: 'Australia', status: 'New', timestamp: '2 hours ago' },
    { id: 2, name: 'Michael Chen', email: 'm.chen@email.com', phone: '+44 7700 900 123', project: 'Tropical Garden Villas', budget: '$200k - $500k', country: 'United Kingdom', status: 'Contacted', timestamp: '5 hours ago' },
    { id: 3, name: 'Emma Williams', email: 'emma.w@email.com', phone: '+1 555 123 4567', project: 'Seminyak Luxury Resort', budget: '$1M - $2M', country: 'United States', status: 'New', timestamp: '1 day ago' }
  ];

  const topProjects = [
    { name: 'Oceanview Villa Resort', location: 'Uluwatu', leads: 45, views: 1234, conversion: '12%' },
    { name: 'Tropical Garden Villas', location: 'Canggu', leads: 32, views: 987, conversion: '8%' },
    { name: 'Seminyak Luxury Resort', location: 'Seminyak', leads: 28, views: 756, conversion: '15%' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-green-100 text-green-800';
      case 'Contacted': return 'bg-blue-100 text-blue-800';
      case 'Qualified': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-8 bg-premium-slate-50 min-h-screen">
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
      >
        <h1 className="text-2xl font-bold mb-2 text-premium-black">Welcome back, Bali Premium!</h1>
        <p className="text-premium-charcoal mb-4">
          Here's what's happening with your projects and leads today.
        </p>
        <div className="flex items-center space-x-4 text-sm text-premium-charcoal">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCalendar} className="text-premium-blue" />
            <span>Last login: Today at 9:30 AM</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiStar} className="text-premium-blue" />
            <span>Professional Plan Active</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="text-xl" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                <SafeIcon icon={stat.changeType === 'positive' ? FiArrowUp : FiArrowDown} className="text-xs" />
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-premium-black mb-1">{stat.value}</div>
            <div className="text-premium-charcoal text-sm">{stat.title}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Leads */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-premium-black">Recent Leads</h2>
              <button className="text-premium-blue hover:text-blue-700 font-medium text-sm">
                View All
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-premium-black">{lead.name}</h3>
                    <p className="text-premium-charcoal text-sm">{lead.project}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-premium-charcoal mb-3">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMail} className="text-xs" />
                    <span>{lead.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMapPin} className="text-xs" />
                    <span>{lead.country}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{lead.timestamp}</span>
                  <button className="bg-premium-blue hover:bg-blue-600 text-white px-3 py-1 rounded text-xs transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Performing Projects */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200"
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-premium-black">Top Performing Projects</h2>
          </div>
          <div className="p-6 space-y-6">
            {topProjects.map((project, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-premium-black">{project.name}</h3>
                    <p className="text-premium-charcoal text-sm flex items-center space-x-1">
                      <SafeIcon icon={FiMapPin} className="text-xs" />
                      <span>{project.location}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-premium-black">{project.leads}</div>
                    <div className="text-xs text-gray-500">leads</div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-premium-blue h-2 rounded-full"
                    style={{ width: project.conversion }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardOverview;