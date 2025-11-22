import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers, FiDollarSign, FiActivity, FiArrowUp, FiArrowDown } = FiIcons;

const AdminOverview = () => {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$124,580',
      change: '+12.5%',
      positive: true,
      icon: FiDollarSign,
      color: 'bg-green-50 text-green-600'
    },
    {
      label: 'Active Developers',
      value: '28',
      change: '+3 this month',
      positive: true,
      icon: FiUsers,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      label: 'Total Leads Generated',
      value: '1,247',
      change: '+18.2%',
      positive: true,
      icon: FiActivity,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      label: 'Platform Growth',
      value: '+24%',
      change: 'vs last quarter',
      positive: true,
      icon: FiTrendingUp,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'developer_approved', message: 'Bali Luxury Estates approved', time: '2 hours ago', icon: FiUsers },
    { id: 2, type: 'payment_received', message: 'Payment received from Seminyak Resorts', amount: '$2,450', time: '4 hours ago', icon: FiDollarSign },
    { id: 3, type: 'lead_created', message: '15 new leads generated from AI chat', time: '6 hours ago', icon: FiActivity },
    { id: 4, type: 'developer_signup', message: 'New developer registered: Ubud Properties', time: '1 day ago', icon: FiUsers },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`${stat.color} rounded-2xl p-6 border border-gray-200 bg-opacity-50 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <SafeIcon icon={stat.icon} className="text-2xl" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-bold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                <SafeIcon icon={stat.positive ? FiArrowUp : FiArrowDown} />
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="text-sm font-medium opacity-70">{stat.label}</div>
            <div className="text-3xl font-bold text-premium-black mt-2">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-premium-black mb-6">Recent Activity</h3>
        
        <div className="space-y-4">
          {recentActivities.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center space-x-4 p-4 hover:bg-premium-slate-50 rounded-xl transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 bg-premium-blue/10 rounded-lg flex items-center justify-center text-premium-blue group-hover:bg-premium-blue group-hover:text-white transition-all">
                <SafeIcon icon={activity.icon} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-premium-black">{activity.message}</p>
                <p className="text-sm text-premium-charcoal">{activity.time}</p>
              </div>
              
              {activity.amount && (
                <div className="text-right">
                  <p className="font-bold text-green-600">{activity.amount}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Pending Approvals', value: '5', desc: 'Developer accounts waiting approval' },
          { title: 'Monthly Recurring Revenue', value: '$8,450', desc: 'From subscription plans' },
          { title: 'Customer Satisfaction', value: '4.8/5', desc: 'Based on feedback ratings' }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
            <p className="text-sm text-premium-charcoal font-medium mb-2">{item.title}</p>
            <p className="text-3xl font-bold text-premium-black mb-2">{item.value}</p>
            <p className="text-xs text-premium-charcoal">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOverview;