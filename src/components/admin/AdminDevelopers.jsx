import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiCheck, FiX, FiShield, FiEye, FiTrendingUp, FiUsers, FiDollarSign, FiCalendar } = FiIcons;

const AdminDevelopers = () => {
  const [developers, setDevelopers] = useState([
    {
      id: 1,
      name: 'Bali Luxury Estates',
      email: 'contact@baliluxury.com',
      status: 'approved',
      plan: 'Professional',
      leads: 45,
      spent: '$8,950',
      verified: true,
      created_at: '2024-01-10',
      limits: { monthly: 100, used: 45 }
    },
    {
      id: 2,
      name: 'Ubud Development Co',
      email: 'info@ubuddev.com',
      status: 'pending',
      plan: 'Pay Per Lead',
      leads: 8,
      spent: '$200',
      verified: false,
      created_at: '2024-02-19',
      limits: { monthly: 'Unlimited', used: 8 }
    },
    {
      id: 3,
      name: 'Seminyak Resorts Group',
      email: 'admin@seminyakresorts.com',
      status: 'approved',
      plan: 'Enterprise',
      leads: 128,
      spent: '$12,500',
      verified: true,
      created_at: '2023-11-05',
      limits: { monthly: 'Unlimited', used: 128 }
    },
    {
      id: 4,
      name: 'Canggu Properties Ltd',
      email: 'support@cangguprop.com',
      status: 'suspended',
      plan: 'Professional',
      leads: 22,
      spent: '$4,200',
      verified: true,
      created_at: '2024-01-20',
      limits: { monthly: 100, used: 22 }
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleApprove = (id) => {
    setDevelopers(prev => 
      prev.map(dev => dev.id === id ? { ...dev, status: 'approved' } : dev)
    );
  };

  const handleSuspend = (id) => {
    setDevelopers(prev => 
      prev.map(dev => dev.id === id ? { ...dev, status: 'suspended' } : dev)
    );
  };

  const handleReject = (id) => {
    setDevelopers(prev => prev.filter(dev => dev.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'suspended': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPlanColor = (plan) => {
    switch (plan) {
      case 'Enterprise': return 'bg-purple-100 text-purple-700';
      case 'Professional': return 'bg-blue-100 text-blue-700';
      case 'Pay Per Lead': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const filteredDevelopers = developers.filter(dev => {
    if (filterStatus !== 'all' && dev.status !== filterStatus) return false;
    if (searchTerm && !dev.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative w-full lg:w-96">
          <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search developers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-premium-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all"
          />
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 bg-premium-slate-50 text-premium-charcoal rounded-xl font-medium border border-gray-200 hover:border-premium-blue focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all cursor-pointer"
        >
          <option value="all">All Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Developers', value: developers.length, icon: FiUsers, color: 'bg-blue-50 text-blue-600' },
          { label: 'Approved', value: developers.filter(d => d.status === 'approved').length, icon: FiCheck, color: 'bg-green-50 text-green-600' },
          { label: 'Pending', value: developers.filter(d => d.status === 'pending').length, icon: FiTrendingUp, color: 'bg-yellow-50 text-yellow-600' },
          { label: 'Suspended', value: developers.filter(d => d.status === 'suspended').length, icon: FiX, color: 'bg-red-50 text-red-600' }
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} rounded-2xl p-6 border border-gray-200 bg-opacity-50`}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold text-premium-black">{stat.value}</div>
              <SafeIcon icon={stat.icon} className="text-2xl opacity-30" />
            </div>
            <div className="text-sm font-medium opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Developers Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-premium-slate-50">
              <tr>
                {['Company', 'Email', 'Status', 'Plan', 'Leads', 'Spent', 'Verified', 'Created', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDevelopers.map((dev) => (
                <motion.tr
                  key={dev.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {dev.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="font-bold text-premium-black text-sm">{dev.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{dev.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full border ${getStatusColor(dev.status)}`}>
                      {dev.status.charAt(0).toUpperCase() + dev.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${getPlanColor(dev.plan)}`}>
                      {dev.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-premium-black">{dev.leads}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{dev.spent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiShield} className={dev.verified ? 'text-green-600' : 'text-gray-300'} />
                      <span className="text-xs font-bold text-premium-charcoal">{dev.verified ? 'Yes' : 'No'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{dev.created_at}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {dev.status === 'pending' && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleApprove(dev.id)}
                            className="p-2 bg-green-100 text-green-600 hover:bg-green-200 rounded-lg transition-colors"
                            title="Approve"
                          >
                            <SafeIcon icon={FiCheck} className="text-sm" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleReject(dev.id)}
                            className="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
                            title="Reject"
                          >
                            <SafeIcon icon={FiX} className="text-sm" />
                          </motion.button>
                        </>
                      )}
                      {dev.status === 'approved' && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSuspend(dev.id)}
                          className="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
                          title="Suspend"
                        >
                          <SafeIcon icon={FiX} className="text-sm" />
                        </motion.button>
                      )}
                      <button
                        className="p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <SafeIcon icon={FiEye} className="text-sm" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDevelopers;