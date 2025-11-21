import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DeveloperLogin from '../components/dashboard/DeveloperLogin';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import ProjectManagement from '../components/dashboard/ProjectManagement';
import LeadManagement from '../components/dashboard/LeadManagement';
import PaymentSettings from '../components/dashboard/PaymentSettings';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiHome, FiBuilding, FiUsers, FiCreditCard, FiSettings, 
  FiLogOut, FiMenu, FiX 
} = FiIcons;

const DeveloperDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock user data
  const user = {
    name: 'Bali Premium Developments',
    email: 'contact@balipremiun.com',
    plan: 'Professional',
    avatar: null
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: FiHome },
    { id: 'projects', label: 'My Projects', icon: FiBuilding },
    { id: 'leads', label: 'Lead Management', icon: FiUsers },
    { id: 'payments', label: 'Payments & Plans', icon: FiCreditCard },
    { id: 'settings', label: 'Account Settings', icon: FiSettings },
  ];

  const handleLogin = (credentials) => {
    // Mock login logic
    console.log('Login attempt:', credentials);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('overview');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'projects':
        return <ProjectManagement />;
      case 'leads':
        return <LeadManagement />;
      case 'payments':
        return <PaymentSettings />;
      case 'settings':
        return <div className="p-8 text-premium-charcoal">Account Settings (Coming Soon)</div>;
      default:
        return <DashboardOverview />;
    }
  };

  if (!isLoggedIn) {
    return <DeveloperLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-premium-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:shadow-none lg:border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-lg flex items-center justify-center shadow-lg shadow-premium-blue/20">
                  <SafeIcon icon={FiBuilding} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-bold text-premium-black text-sm truncate">
                    {user.name}
                  </h2>
                  <span className="text-xs text-premium-blue font-medium bg-premium-blue/10 px-2 py-0.5 rounded-full">
                    {user.plan}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 text-gray-400 hover:text-premium-blue"
              >
                <SafeIcon icon={FiX} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-medium ${
                      activeTab === item.id
                        ? 'bg-premium-blue text-white shadow-md shadow-premium-blue/20'
                        : 'text-premium-charcoal hover:text-premium-blue hover:bg-premium-blue/5'
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
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 text-premium-charcoal hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
            >
              <SafeIcon icon={FiLogOut} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-premium-charcoal hover:text-premium-blue hover:bg-premium-blue/5 rounded-lg"
              >
                <SafeIcon icon={FiMenu} />
              </button>
              
              <h1 className="text-2xl font-bold text-premium-black">
                {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-premium-charcoal hidden sm:block">
                Welcome back, <span className="font-semibold text-premium-black">{user.name.split(' ')[0]}</span>
              </span>
              
              <div className="w-10 h-10 bg-gradient-to-br from-premium-black to-gray-800 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <span className="text-white text-sm font-bold">
                  {user.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-premium-slate-50">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DeveloperDashboard;