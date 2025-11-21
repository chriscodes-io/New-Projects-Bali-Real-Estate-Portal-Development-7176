import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SearchSection from '../components/home/SearchSection';
import FeaturedDevelopments from '../components/home/FeaturedDevelopments';
import WhyInvestSection from '../components/home/WhyInvestSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import StatsSection from '../components/home/StatsSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <FeaturedDevelopments />
      <WhyInvestSection />
      <HowItWorksSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;