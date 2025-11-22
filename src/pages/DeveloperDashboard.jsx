import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DeveloperLogin from '../components/dashboard/DeveloperLogin';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import ProjectManagement from '../components/dashboard/ProjectManagement';
import LeadManagementFilters from '../components/dashboard/LeadManagementFilters';
import PaymentSettings from '../components/dashboard/PaymentSettings';
import DeveloperAccountSettings from '../components/dashboard/DeveloperAccountSettings';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiActivity, FiBuilding, FiTrendingUp, FiCreditCard, FiUser, FiLogOut, FiMenu, FiX } = FiIcons;

const DeveloperDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [developerUser, setDeveloperUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDeveloperLogin = (user) => {
    setDeveloperUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDeveloperUser(null);
    setActiveTab('overview');
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: FiActivity },
    { id: 'projects', label: 'Projects', icon: FiBuilding },
    { id: 'leads', label: 'Lead Management', icon: FiTrendingUp },
    { id: 'payment', label: 'Billing & Plans', icon: FiCreditCard },
    { id: 'settings', label: 'Account Settings', icon: FiUser }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <DashboardOverview />;
      case 'projects': return <ProjectManagement />;
      case 'leads': return <LeadManagementFilters />;
      case 'payment': return <PaymentSettings />;
      case 'settings': return <DeveloperAccountSettings />;
      default: return null;
    }
  };

  if (!isLoggedIn) {
    return <DeveloperLogin onLogin={handleDeveloperLogin} />;
  }

  return (
    <div className="min-h-screen bg-premium-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

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
                <SafeIcon icon={FiBuilding} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="font-bold text-premium-black leading-tight text-sm">Developer<br/>Portal</h1>
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
                      ? 'bg-gradient-to-r from-premium-blue to-premium-periwinkle text-white shadow-md shadow-premium-blue/20'
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
        <div className="p-4 border-t border-gray-100 space-y-2">
          <div className="px-4 py-3 bg-premium-blue/5 rounded-xl border border-premium-blue/10">
            <p className="text-xs text-premium-charcoal font-medium">Logged in as</p>
            <p className="text-sm font-bold text-premium-blue truncate">{developerUser?.email}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-premium-charcoal hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
          >
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
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
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

export default DeveloperDashboard;