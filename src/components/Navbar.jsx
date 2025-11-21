import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiHome, FiBuilding, FiInfo, FiMail, FiUser } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/developments', label: 'Developments', icon: FiBuilding },
    { path: '/about', label: 'Why List With Us', icon: FiInfo },
    { path: '/contact', label: 'Contact', icon: FiMail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-premium-powder/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-xl flex items-center justify-center shadow-lg shadow-premium-blue/20">
              <SafeIcon icon={FiBuilding} className="text-white text-xl" />
            </div>
            <span className="font-bold text-xl text-premium-black tracking-tight">New Projects Bali</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-premium-blue bg-premium-blue/10'
                    : 'text-premium-charcoal hover:text-premium-blue hover:bg-premium-powder/10'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-sm" />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            ))}
            
            <Link
              to="/developer-dashboard"
              className="bg-premium-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 font-semibold text-sm shadow-lg"
            >
              <SafeIcon icon={FiUser} className="text-sm" />
              <span>Developer Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-premium-charcoal hover:bg-premium-powder/10"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-premium-powder/20 bg-white"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'text-premium-blue bg-premium-blue/10'
                        : 'text-premium-charcoal hover:text-premium-blue hover:bg-premium-powder/10'
                    }`}
                  >
                    <SafeIcon icon={item.icon} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
                
                <div className="px-4 pt-2">
                  <Link
                    to="/developer-dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-3 px-4 py-3 bg-premium-black text-white rounded-lg hover:bg-gray-800 transition-colors w-full"
                  >
                    <SafeIcon icon={FiUser} />
                    <span>Developer Login</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;