import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiUsers, FiBuilding, FiDollarSign, FiSettings, FiCheck, FiX, FiSearch,
  FiTrendingUp, FiActivity, FiLogOut
} = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Pending Approvals', value: '12', icon: FiCheck, color: 'text-amber-600 bg-amber-100' },
    { label: 'Total Developers', value: '45', icon: FiUsers, color: 'text-blue-600 bg-blue-100' },
    { label: 'Total Projects', value: '156', icon: FiBuilding, color: 'text-green-600 bg-green-100' },
    { label: 'Monthly Revenue', value: '$24.5k', icon: FiDollarSign, color: 'text-purple-600 bg-purple-100' },
  ];

  const pendingDevelopers = [
    { id: 1, name: 'Bali Luxury Estates', email: 'contact@baliluxury.com', date: '2024-02-20' },
    { id: 2, name: 'Ubud Development Co', email: 'info@ubuddev.com', date: '2024-02-19' },
  ];

  return (
    <div className="min-h-screen bg-premium-slate-50 flex">
      {/* Sidebar - Light or Dark? Let's go Dark for Admin usually, or keep Light for consistency. Light logic here. */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold flex items-center gap-2 text-premium-black">
            <div className="w-8 h-8 bg-premium-blue rounded flex items-center justify-center">
              <SafeIcon icon={FiActivity} className="text-white" />
            </div>
            <span>Admin Panel</span>
          </h1>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          {['overview', 'developers', 'projects', 'leads', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg capitalize transition-colors ${
                activeTab === tab 
                  ? 'bg-premium-blue text-white shadow-sm' 
                  : 'text-premium-charcoal hover:bg-gray-50'
              }`}
            >
              <SafeIcon 
                icon={
                  tab === 'overview' ? FiActivity :
                  tab === 'developers' ? FiUsers :
                  tab === 'projects' ? FiBuilding :
                  tab === 'leads' ? FiTrendingUp :
                  FiSettings
                } 
              />
              <span>{tab}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-premium-charcoal hover:text-red-600 hover:bg-red-50 transition-colors rounded-lg">
            <SafeIcon icon={FiLogOut} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-premium-black capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-premium-blue outline-none bg-white"
              />
            </div>
            <div className="w-10 h-10 bg-premium-blue text-white rounded-full flex items-center justify-center font-bold shadow-sm">
              AD
            </div>
          </div>
        </header>

        {/* Overview Content */}
        {activeTab === 'overview' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <SafeIcon icon={stat.icon} className="text-xl" />
                    </div>
                    <span className="text-2xl font-bold text-premium-black">{stat.value}</span>
                  </div>
                  <h3 className="text-premium-charcoal text-sm">{stat.label}</h3>
                </div>
              ))}
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-bold text-premium-black">Pending Developer Approvals</h3>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50 text-left text-sm text-gray-500">
                  <tr>
                    <th className="px-6 py-4 font-medium">Company Name</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Registered Date</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pendingDevelopers.map((dev) => (
                    <tr key={dev.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-premium-black">{dev.name}</td>
                      <td className="px-6 py-4 text-premium-charcoal">{dev.email}</td>
                      <td className="px-6 py-4 text-premium-charcoal">{dev.date}</td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button className="p-2 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors">
                          <SafeIcon icon={FiCheck} />
                        </button>
                        <button className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors">
                          <SafeIcon icon={FiX} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab !== 'overview' && (
          <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center text-premium-charcoal">
            <SafeIcon icon={FiSettings} className="text-4xl mx-auto mb-4 text-gray-300" />
            <p>This section is under development.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;