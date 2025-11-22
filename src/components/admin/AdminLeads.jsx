import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter, FiTrendingUp, FiUsers, FiDownload, FiCheckCircle, FiClock, FiAlertCircle } = FiIcons;

const AdminLeads = () => {
  const [leads] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 's.johnson@email.com',
      project: 'Oceanview Villa Resort',
      score: 95,
      status: 'qualified',
      budget: '$500k - $1M',
      source: 'AI Chat',
      date: '2024-02-20'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'm.chen@email.com',
      project: 'Tropical Garden Villas',
      score: 78,
      status: 'contacted',
      budget: '$200k - $500k',
      source: 'Website Form',
      date: '2024-02-19'
    },
    {
      id: 3,
      name: 'Emma Williams',
      email: 'emma.w@email.com',
      project: 'Seminyak Luxury Resort',
      score: 88,
      status: 'new',
      budget: '$1M - $2M',
      source: 'AI Chat',
      date: '2024-02-18'
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'qualified': return FiCheckCircle;
      case 'contacted': return FiClock;
      case 'new': return FiAlertCircle;
      default: return FiUsers;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'qualified': return 'bg-green-100 text-green-700 border-green-200';
      case 'contacted': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'new': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative w-full lg:w-96">
          <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads..."
            className="w-full pl-11 pr-4 py-2.5 bg-premium-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all"
          />
        </div>

        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 hover:border-premium-blue text-premium-charcoal px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-2 shadow-sm font-medium">
            <SafeIcon icon={FiFilter} />
            <span>Filter</span>
          </button>
          
          <button className="bg-premium-blue hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-2 shadow-lg shadow-premium-blue/20 font-medium">
            <SafeIcon icon={FiDownload} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Leads', value: leads.length, icon: FiUsers, color: 'bg-blue-50 text-blue-600' },
          { label: 'Hot Leads (90+)', value: leads.filter(l => l.score >= 90).length, icon: FiTrendingUp, color: 'bg-red-50 text-red-600' },
          { label: 'Qualified', value: leads.filter(l => l.status === 'qualified').length, icon: FiCheckCircle, color: 'bg-green-50 text-green-600' }
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

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-premium-slate-50">
              <tr>
                {['Name', 'Email', 'Project', 'Score', 'Status', 'Budget', 'Source', 'Date'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-premium-black text-sm">{lead.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{lead.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-premium-black">{lead.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2.5 py-0.5 text-xs font-bold rounded-full bg-red-100 text-red-700 border border-red-200">
                      {lead.score}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-bold rounded-full border capitalize ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{lead.budget}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{lead.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{lead.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLeads;