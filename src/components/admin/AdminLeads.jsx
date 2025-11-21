import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter, FiStar, FiMail, FiPhone, FiMapPin } = FiIcons;

const AdminLeads = () => {
  const [filter, setFilter] = useState('all');

  const leads = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 's.johnson@email.com',
      project: 'Oceanview Villa Resort',
      score: 85,
      status: 'Hot',
      budget: '$500k+',
      country: 'Australia'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'm.chen@email.com',
      project: 'Tropical Garden Villas',
      score: 45,
      status: 'Cold',
      budget: '$200k+',
      country: 'UK'
    },
    {
      id: 3,
      name: 'Emma Williams',
      email: 'emma.w@email.com',
      project: 'Seminyak Luxury Resort',
      score: 72,
      status: 'Warm',
      budget: '$1M+',
      country: 'USA'
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-red-500 bg-red-50 border-red-100';
    if (score >= 60) return 'text-orange-500 bg-orange-50 border-orange-100';
    return 'text-blue-500 bg-blue-50 border-blue-100';
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative w-full md:w-96">
          <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads by name, email, or project..."
            className="w-full pl-11 pr-4 py-2.5 bg-premium-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all"
          />
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <button className="px-4 py-2.5 bg-premium-slate-50 text-premium-charcoal rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
            <SafeIcon icon={FiFilter} />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2.5 bg-premium-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-premium-blue/20">
            Export CSV
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-premium-slate-50 text-left text-xs font-bold text-premium-charcoal uppercase">
              <tr>
                <th className="px-6 py-4">Lead Details</th>
                <th className="px-6 py-4">Project Interest</th>
                <th className="px-6 py-4">AI Score</th>
                <th className="px-6 py-4">Budget / Location</th>
                <th className="px-6 py-4 text-right">Actions</th>
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
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-premium-black">{lead.name}</div>
                        <div className="text-xs text-premium-charcoal flex items-center mt-0.5">
                          <SafeIcon icon={FiMail} className="mr-1" /> {lead.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-premium-black">{lead.project}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full border ${getScoreColor(lead.score)}`}>
                      <SafeIcon icon={FiStar} className="mr-1.5 text-xs" />
                      <span className="font-bold text-sm">{lead.score}</span>
                      <span className="ml-1.5 text-xs uppercase tracking-wide border-l border-current pl-1.5 opacity-80">
                        {lead.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-premium-black">{lead.budget}</div>
                    <div className="text-xs text-premium-charcoal flex items-center mt-0.5">
                      <SafeIcon icon={FiMapPin} className="mr-1" /> {lead.country}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-premium-blue hover:text-blue-700 font-bold text-sm">
                      View Details
                    </button>
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

export default AdminLeads;