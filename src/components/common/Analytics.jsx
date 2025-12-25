import React from 'react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

/**
 * Analytics component that integrates Vercel Web Analytics
 * Tracks page views and user interactions automatically
 * 
 * Note: Route support is automatically handled by the Analytics component
 * from @vercel/analytics/react
 */
const Analytics = () => {
  return <VercelAnalytics />;
};

export default Analytics;