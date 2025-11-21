import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

// Import Sub-components
import AdminOverview from '../components/admin/AdminOverview';
import AdminLeads from '../components/admin/AdminLeads';
import AdminBlog from '../components/admin/AdminBlog';
import AdminSettings from '../components/admin/AdminSettings';

const { 
  FiUsers, FiBuilding, FiDollarSign, FiSettings, FiSearch,
  FiTrendingUp, FiActivity, FiLogOut, FiEdit3, FiMenu, FiX, FiShield
} = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: FiActivity },
    { id: 'leads', label: 'Leads & Scoring', icon: FiTrendingUp },
    { id: 'developers', label: 'Developers', icon: FiUsers },
    { id: 'projects', label: 'Projects', icon: FiBuilding },
    { id: 'blog', label: 'Blog Management', icon: FiEdit3 },
    { id: 'settings', label: 'System Settings', icon: FiSettings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <AdminOverview />;
      case 'leads': return <AdminLeads />;
      case 'blog': return <AdminBlog />;
      case 'settings': return <AdminSettings />;
      default: 
        return (
          <div className="flex flex-col items-center justify-center h-96 text-premium-charcoal bg-white rounded-3xl border border-gray-100 border-dashed">
            <SafeIcon icon={FiSettings} className="text-5xl mb-4 text-gray-200" />
            <h3 className="text-lg font-bold text-premium-black">Coming Soon</h3>
            <p>The {activeTab} module is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-premium-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:shadow-none lg:border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col h-screen
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-xl flex items-center justify-center shadow-lg shadow-premium-blue/20">
                <SafeIcon icon={FiShield} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="font-bold text-premium-black leading-tight">Admin<br/>Portal</h1>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-premium-black"
            >
              <SafeIcon icon={FiX} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-premium-purple text-white shadow-md shadow-premium-purple/20'
                      : 'text-premium-charcoal hover:bg-gray-50 hover:text-premium-blue'
                  }`}
                >
                  <SafeIcon icon={item.icon} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-premium-charcoal hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium">
            <SafeIcon icon={FiLogOut} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-premium-charcoal hover:text-premium-black bg-gray-50 rounded-lg"
              >
                <SafeIcon icon={FiMenu} />
              </button>
              <h2 className="text-2xl font-bold text-premium-black capitalize">
                {menuItems.find(i => i.id === activeTab)?.label}
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-premium-blue/20 outline-none bg-premium-slate-50 w-64 focus:bg-white transition-all"
                />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-periwinkle text-white rounded-full flex items-center justify-center font-bold shadow-md cursor-pointer hover:shadow-lg transition-all">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;