import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import HeroSection from '../components/home/HeroSection';
import SearchSection from '../components/home/SearchSection';
import FeaturedDevelopments from '../components/home/FeaturedDevelopments';
import WhyInvestSection from '../components/home/WhyInvestSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import BlogPreview from '../components/home/BlogPreview';
import StatsSection from '../components/home/StatsSection';

const HomePage = () => {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <div>
      {/* Admin Quick Access Bar */}
      {isAuthenticated && (
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              <Lock className="w-4 h-4" />
              <span>Backend Access Available</span>
              <span className="text-purple-200">({userRole === 'admin' ? 'Administrator' : 'Developer'})</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to={userRole === 'admin' ? '/admin-dashboard' : '/developer-dashboard'}
                className="flex items-center space-x-2 px-4 py-1 bg-white/20 hover:bg-white/30 rounded-md text-sm font-medium transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      
      <HeroSection />
      <SearchSection />
      <FeaturedDevelopments />
      <WhyInvestSection />
      <HowItWorksSection />
      <BlogPreview />
      <StatsSection />
    </div>
  );
};

export default HomePage;