import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiFilter, FiDownload, FiMail, FiPhone, FiMapPin, FiDollarSign,
  FiCalendar, FiEye, FiLock, FiUnlock, FiStar
} = FiIcons;

const LeadManagement = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProject, setFilterProject] = useState('all');

  const leads = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 's.johnson@email.com',
      phone: '+61 412 345 678',
      country: 'Australia',
      project: 'Oceanview Villa Resort',
      budget: '$500k - $1M',
      message: 'Interested in 3-bedroom villa with ocean view. Looking to visit next month.',
      status: 'New',
      unlocked: false,
      timestamp: '2024-01-20T10:30:00Z',
      source: 'Website'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'm.chen@email.com',
      phone: '+44 7700 900 123',
      country: 'United Kingdom',
      project: 'Tropical Garden Villas',
      budget: '$200k - $500k',
      message: 'Looking for investment property with good rental yield. Can we schedule a call?',
      status: 'Contacted',
      unlocked: true,
      timestamp: '2024-01-19T15:45:00Z',
      source: 'Google Ads'
    },
    {
      id: 3,
      name: 'Emma Williams',
      email: 'emma.w@email.com',
      phone: '+1 555 123 4567',
      project: 'Seminyak Luxury Resort',
      budget: '$1M - $2M',
      country: 'United States',
      status: 'Qualified',
      unlocked: false,
      timestamp: '2024-01-18T09:15:00Z',
      source: 'Facebook Ads'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-green-100 text-green-800 border border-green-200';
      case 'Contacted': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Qualified': return 'bg-purple-100 text-purple-800 border border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getSourceColor = (source) => {
    switch (source) {
      case 'Website': return 'bg-gray-100 text-gray-700';
      case 'Google Ads': return 'bg-blue-50 text-blue-600';
      case 'Facebook Ads': return 'bg-indigo-50 text-indigo-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const filteredLeads = leads.filter(lead => {
    if (filterStatus !== 'all' && lead.status !== filterStatus) return false;
    if (filterProject !== 'all' && lead.project !== filterProject) return false;
    return true;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleUnlockLead = (leadId) => {
    console.log('Unlocking lead:', leadId);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-premium-black">Lead Management</h1>
          <p className="text-premium-charcoal">Manage and track your property inquiries</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-gray-200 hover:border-premium-blue text-premium-charcoal px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-2 shadow-sm font-medium">
            <SafeIcon icon={FiDownload} />
            <span>Export</span>
          </button>
          
          <button className="bg-premium-blue hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-2 shadow-lg shadow-premium-blue/20 font-medium">
            <SafeIcon icon={FiFilter} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: FiStar, label: 'Total Leads', value: leads.length, color: 'bg-green-50 text-green-600' },
          { icon: FiUnlock, label: 'Unlocked', value: leads.filter(l => l.unlocked).length, color: 'bg-blue-50 text-blue-600' },
          { icon: FiPhone, label: 'Contacted', value: leads.filter(l => l.status === 'Contacted').length, color: 'bg-purple-50 text-purple-600' },
          { icon: FiDollarSign, label: 'Total Spent', value: '$625', color: 'bg-indigo-50 text-indigo-600' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="text-xl" />
              </div>
            </div>
            <div className="text-2xl font-bold text-premium-black mb-1">{stat.value}</div>
            <div className="text-premium-charcoal text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-premium-black">
              Leads ({filteredLeads.length})
            </h2>
            <span className="text-sm text-premium-charcoal bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
              {leads.filter(l => !l.unlocked).length} leads available to unlock
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-premium-slate-50">
              <tr>
                {['Contact', 'Project', 'Budget', 'Status', 'Date', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-premium-black">
                          {lead.unlocked ? lead.name : `${lead.name.split(' ')[0]} ${lead.name.split(' ')[1]?.[0]}.`}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-premium-charcoal mt-0.5">
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiMail} className="text-gray-400" />
                            <span>
                              {lead.unlocked 
                                ? lead.email 
                                : `${lead.email.split('@')[0].slice(0, 3)}***@${lead.email.split('@')[1]}`
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-premium-black">{lead.project}</div>
                    <div className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full mt-1 ${getSourceColor(lead.source)}`}>
                      {lead.source}
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1 text-sm text-premium-black font-medium">
                      <SafeIcon icon={FiDollarSign} className="text-premium-blue" />
                      <span>{lead.budget}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-bold rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">
                    <div className="flex items-center space-x-1.5">
                      <SafeIcon icon={FiCalendar} className="text-gray-400" />
                      <span>{formatDate(lead.timestamp)}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    {!lead.unlocked ? (
                      <button
                        onClick={() => handleUnlockLead(lead.id)}
                        className="bg-premium-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md shadow-premium-blue/20 flex items-center space-x-1.5"
                      >
                        <SafeIcon icon={FiUnlock} />
                        <span>Unlock $25</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button className="p-2 text-premium-blue hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100">
                          <SafeIcon icon={FiMail} />
                        </button>
                        <button className="p-2 text-premium-charcoal hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                          <SafeIcon icon={FiEye} />
                        </button>
                      </div>
                    )}
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

export default LeadManagement;