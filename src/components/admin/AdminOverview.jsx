import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiBuilding, FiDollarSign, FiTrendingUp, FiActivity, FiCheck, FiX } = FiIcons;

const AdminOverview = () => {
  const stats = [
    { label: 'Total Revenue', value: '$124,500', change: '+12%', icon: FiDollarSign, color: 'bg-green-100 text-green-600' },
    { label: 'Active Developers', value: '45', change: '+3', icon: FiUsers, color: 'bg-blue-100 text-premium-blue' },
    { label: 'Total Projects', value: '156', change: '+8', icon: FiBuilding, color: 'bg-purple-100 text-purple-600' },
    { label: 'Total Leads', value: '1,240', change: '+24%', icon: FiTrendingUp, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const pendingDevelopers = [
    { id: 1, name: 'Bali Luxury Estates', email: 'contact@baliluxury.com', date: '2024-02-20' },
    { id: 2, name: 'Ubud Development Co', email: 'info@ubuddev.com', date: '2024-02-19' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <SafeIcon icon={stat.icon} className="text-xl" />
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-premium-black mb-1">{stat.value}</div>
            <div className="text-premium-charcoal text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Pending Approvals */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-premium-black text-lg">Pending Developer Approvals</h3>
          <span className="text-xs font-bold px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
            Action Required
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-premium-slate-50 text-left text-xs font-bold text-premium-charcoal uppercase">
              <tr>
                <th className="px-6 py-4">Company Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Registered Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pendingDevelopers.map((dev) => (
                <tr key={dev.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-premium-black">{dev.name}</td>
                  <td className="px-6 py-4 text-premium-charcoal">{dev.email}</td>
                  <td className="px-6 py-4 text-premium-charcoal">{dev.date}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors" title="Approve">
                      <SafeIcon icon={FiCheck} />
                    </button>
                    <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors" title="Reject">
                      <SafeIcon icon={FiX} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;