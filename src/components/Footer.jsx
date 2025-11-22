import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBuilding, FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiShield } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiBuilding} className="text-white text-lg" />
              </div>
              <span className="font-bold text-xl">New Projects Bali</span>
            </div>
            <p className="text-premium-powder/80 text-sm leading-relaxed">
              Your gateway to premium villa and resort developments in Bali. Connecting international investors with exclusive opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-premium-powder hover:text-premium-blue transition-colors">
                <SafeIcon icon={FiFacebook} className="text-xl" />
              </a>
              <a href="#" className="text-premium-powder hover:text-premium-blue transition-colors">
                <SafeIcon icon={FiInstagram} className="text-xl" />
              </a>
              <a href="#" className="text-premium-powder hover:text-premium-blue transition-colors">
                <SafeIcon icon={FiLinkedin} className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-premium-periwinkle">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/developments" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Browse Developments
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Why List With Us
                </Link>
              </li>
              <li>
                <Link to="/developer-dashboard" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Developer Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* For Developers */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-premium-periwinkle">For Developers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-premium-blue transition-colors">
                  List Your Project
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Pricing & Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Lead Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-premium-periwinkle">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="text-premium-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">Bali, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-premium-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@newprojectsbali.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-premium-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62 123 456 7890</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 New Projects Bali. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
              <Link to="/admin-dashboard" className="text-gray-600 hover:text-premium-blue text-xs transition-colors flex items-center space-x-1">
                <SafeIcon icon={FiShield} />
                <span>Admin</span>
              </Link>
              <a href="#" className="text-gray-500 hover:text-premium-blue text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-premium-blue text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;