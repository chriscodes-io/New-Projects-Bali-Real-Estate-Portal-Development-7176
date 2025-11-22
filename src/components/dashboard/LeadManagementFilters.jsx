import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiFilter, FiDownload, FiMail, FiPhone, FiDollarSign,
  FiCalendar, FiEye, FiLock, FiUnlock, FiStar, FiX, FiChevronDown
} = FiIcons;

const LeadManagementFilters = () => {
  const [filterScore, setFilterScore] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [filterProject, setFilterProject] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const [leads] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 's.johnson@email.com',
      phone: '+61 412 345 678',
      project: 'Oceanview Villa Resort',
      budget: '$500k - $1M',
      score: 95,
      status: 'new',
      unlocked: false,
      date: '2024-02-20'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'm.chen@email.com',
      phone: '+44 7700 900 123',
      project: 'Tropical Garden Villas',
      budget: '$200k - $500k',
      score: 78,
      status: 'contacted',
      unlocked: true,
      date: '2024-02-19'
    },
    {
      id: 3,
      name: 'Emma Williams',
      email: 'emma.w@email.com',
      phone: '+1 555 123 4567',
      project: 'Seminyak Luxury Resort',
      budget: '$1M - $2M',
      score: 88,
      status: 'qualified',
      unlocked: false,
      date: '2024-02-18'
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'j.wilson@email.com',
      phone: '+1 555 234 5678',
      project: 'Oceanview Villa Resort',
      budget: '$300k - $700k',
      score: 62,
      status: 'new',
      unlocked: true,
      date: '2024-02-17'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'l.anderson@email.com',
      phone: '+61 412 456 789',
      project: 'Tropical Garden Villas',
      budget: '$800k - $1.2M',
      score: 91,
      status: 'qualified',
      unlocked: false,
      date: '2024-02-16'
    }
  ]);

  const getScoreLabel = (score) => {
    if (score >= 90) return 'Hot';
    if (score >= 75) return 'Warm';
    return 'Cold';
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-red-100 text-red-700 border-red-200';
    if (score >= 75) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-green-100 text-green-700 border-green-200';
      case 'contacted': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'qualified': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const filteredLeads = leads.filter(lead => {
    if (filterScore !== 'all') {
      const label = getScoreLabel(lead.score);
      if (label !== filterScore) return false;
    }
    if (filterStatus !== 'all' && lead.status !== filterStatus) return false;
    if (filterProject !== 'all' && lead.project !== filterProject) return false;
    if (filterDate !== 'all') {
      const leadDate = new Date(lead.date);
      const now = new Date();
      const daysAgo = Math.floor((now - leadDate) / (1000 * 60 * 60 * 24));
      
      if (filterDate === '7' && daysAgo > 7) return false;
      if (filterDate === '30' && daysAgo > 30) return false;
      if (filterDate === '90' && daysAgo > 90) return false;
    }
    return true;
  });

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Project', 'Budget', 'Score', 'Status', 'Date'];
    const rows = filteredLeads.map(lead => [
      lead.name,
      lead.email,
      lead.phone,
      lead.project,
      lead.budget,
      lead.score,
      lead.status,
      lead.date
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const projects = [...new Set(leads.map(l => l.project))];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-premium-black">Lead Management</h1>
          <p className="text-premium-charcoal">Filter, track, and export your property leads</p>
        </div>
        
        <div className="flex items-center space-x-3 w-full lg:w-auto">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-white border border-gray-200 hover:border-premium-blue text-premium-charcoal px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-2 shadow-sm font-medium"
          >
            <SafeIcon icon={FiFilter} />
            <span>Filters</span>
            <SafeIcon icon={FiChevronDown} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          <button
            onClick={exportToCSV}
            className="bg-premium-blue hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-2 shadow-lg shadow-premium-blue/20 font-medium"
          >
            <SafeIcon icon={FiDownload} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Lead Score</label>
            <select
              value={filterScore}
              onChange={(e) => setFilterScore(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-white cursor-pointer"
            >
              <option value="all">All Scores</option>
              <option value="Hot">Hot (90+)</option>
              <option value="Warm">Warm (75-89)</option>
              <option value="Cold">Cold (&lt;75)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-white cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Date Range</label>
            <select
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-white cursor-pointer"
            >
              <option value="all">All Time</option>
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Project</label>
            <select
              value={filterProject}
              onChange={(e) => setFilterProject(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-white cursor-pointer"
            >
              <option value="all">All Projects</option>
              {projects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
          </div>
        </motion.div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Leads', value: filteredLeads.length, icon: FiStar, color: 'bg-blue-50 text-blue-600' },
          { label: 'Hot Leads', value: filteredLeads.filter(l => l.score >= 90).length, icon: FiUnlock, color: 'bg-red-50 text-red-600' },
          { label: 'Unlocked', value: filteredLeads.filter(l => l.unlocked).length, icon: FiMail, color: 'bg-green-50 text-green-600' },
          { label: 'Qualified', value: filteredLeads.filter(l => l.status === 'qualified').length, icon: FiPhone, color: 'bg-purple-50 text-purple-600' }
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
                {['Name', 'Email', 'Project', 'Budget', 'Score', 'Status', 'Date', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase whitespace-nowrap">{h}</th>
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
                      <div className="font-bold text-premium-black text-sm">{lead.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{lead.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-premium-black">{lead.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1 text-sm text-premium-black font-medium">
                      <SafeIcon icon={FiDollarSign} className="text-premium-blue" />
                      <span>{lead.budget}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-bold rounded-full border ${getScoreColor(lead.score)}`}>
                      {lead.score} - {getScoreLabel(lead.score)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-bold rounded-full border capitalize ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-premium-charcoal">{lead.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {!lead.unlocked ? (
                      <button className="bg-premium-blue hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md shadow-premium-blue/20 flex items-center space-x-1">
                        <SafeIcon icon={FiUnlock} className="text-xs" />
                        <span>Unlock</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button className="p-2 text-premium-blue hover:bg-blue-50 rounded-lg transition-colors">
                          <SafeIcon icon={FiMail} className="text-sm" />
                        </button>
                        <button className="p-2 text-primary-charcoal hover:bg-gray-100 rounded-lg transition-colors">
                          <SafeIcon icon={FiEye} className="text-sm" />
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

export default LeadManagementFilters;