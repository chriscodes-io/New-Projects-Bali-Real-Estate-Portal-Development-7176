import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Placeholder for analytics tracking
    // console.log('Page view:', location.pathname);
  }, [location]);

  return null;
};

export default Analytics;