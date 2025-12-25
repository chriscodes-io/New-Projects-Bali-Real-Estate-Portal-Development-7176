import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import X from 'lucide-react/dist/esm/icons/x';
import User from 'lucide-react/dist/esm/icons/user';
import LogOut from 'lucide-react/dist/esm/icons/log-out';
import Settings from 'lucide-react/dist/esm/icons/settings';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import { useAuth } from '../context/AuthContext';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userRole, logout: authLogout } = useAuth();
  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu) {
        const userMenu = document.querySelector('[data-user-menu]');
        if (userMenu && !userMenu.contains(event.target)) {
          setShowUserMenu(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showUserMenu]);

  const handleLogout = () => {
    authLogout();
    setShowUserMenu(false);
    navigate('/');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/developments', label: 'Developments' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'Why List With Us' },
    { path: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-[100] border-b border-premium-powder/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img src={logo} alt="New Projects Bali" className="h-20 md:h-24 w-auto object-contain mix-blend-multiply" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium text-premium-black nav-link relative transition-colors duration-500 ease`}
              >
                {item.label}
              </Link>
            ))}

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative ml-4" data-user-menu>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 px-4 py-2 bg-premium-black text-white rounded-md font-medium text-sm hover:bg-gray-800 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{userRole === 'admin' ? 'Admin' : 'Developer'}</span>
                  <X className={`w-4 h-4 transition-transform ${showUserMenu ? 'rotate-45' : ''}`} />
                </button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {/* Dashboard Link */}
                      <Link
                        to={userRole === 'admin' ? '/admin-dashboard' : '/developer-dashboard'}
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <BarChart3 className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>

                      {/* Settings Link */}
                      <Link
                        to={userRole === 'admin' ? '/admin-dashboard?tab=settings' : '/developer-dashboard?tab=settings'}
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </Link>

                      <hr className="my-2 border-gray-200" />

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Login Button */
              <Link
                to="/login"
                className="ml-4 px-6 py-2 bg-premium-black text-white rounded-md font-medium text-sm hover:bg-gray-800 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-premium-charcoal hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium text-premium-black nav-link relative transition-colors duration-500 ease`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile User Menu */}
                {isAuthenticated ? (
                  <>
                    <hr className="my-2 border-gray-200" />
                    <div className="px-2 py-2 space-y-1">
                      <div className="px-4 py-2 text-sm font-medium text-gray-500">
                        {userRole === 'admin' ? 'Admin User' : 'Developer User'}
                      </div>

                      <Link
                        to={userRole === 'admin' ? '/admin-dashboard' : '/developer-dashboard'}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded-md"
                      >
                        <BarChart3 className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>

                      <Link
                        to={userRole === 'admin' ? '/admin-dashboard?tab=settings' : '/developer-dashboard?tab=settings'}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded-md"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </Link>

                      <button
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors rounded-md w-full text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="px-2 pt-2 pb-3">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-2 bg-premium-black text-white text-center rounded-md font-medium text-sm hover:bg-gray-800 transition-colors"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;