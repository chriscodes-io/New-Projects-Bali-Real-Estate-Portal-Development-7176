import React from 'react';
import { Link } from 'react-router-dom';
import Building from 'lucide-react/dist/esm/icons/building';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Phone from 'lucide-react/dist/esm/icons/phone';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Shield from 'lucide-react/dist/esm/icons/shield';

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white pb-6 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">New Projects Bali</span>
            </div>
            <p className="text-premium-powder/80 text-sm leading-relaxed">
              Your gateway to premium villa and resort developments in Bali. Connecting international investors with exclusive opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-premium-powder hover:text-premium-blue transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-premium-powder hover:text-premium-blue transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-premium-powder hover:text-premium-blue transition-colors">
                <Linkedin className="w-6 h-6" />
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
                <Link to="/developer-dashboard" className="text-gray-300 hover:text-premium-blue transition-colors">
                  List Your Project
                </Link>
              </li>
              <li>
                <Link to="/developer-dashboard?tab=payment" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/developer-dashboard?tab=leads" className="text-gray-300 hover:text-premium-blue transition-colors">
                  Lead Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-premium-periwinkle">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-premium-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">Bali, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-premium-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62 361 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-premium-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@newprojectsbali.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-premium-blue flex-shrink-0" />
                <span className="text-gray-300 text-sm">Verified & Secure</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              2024 New Projects Bali. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
              <Link to="/admin-dashboard" className="text-gray-600 hover:text-premium-blue text-xs transition-colors flex items-center space-x-1">
                <Shield className="w-5 h-5 text-premium-blue" />
                <span>Admin</span>
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-premium-blue text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-premium-blue text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;