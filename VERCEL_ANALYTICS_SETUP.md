# Vercel Web Analytics Setup Guide

This document provides a comprehensive guide on how Vercel Web Analytics has been implemented in the New Projects Bali application.

## Overview

Vercel Web Analytics is a privacy-first web analytics solution that tracks visitor behavior and page views without slowing down your site. It's fully integrated into this Vite + React application.

## Prerequisites

- A Vercel account (https://vercel.com/signup)
- A Vercel project connected to your repository
- The Vercel CLI (optional for local development)

## Installation

The `@vercel/analytics` package is already included in the project dependencies. If needed, you can install it using:

```bash
npm install @vercel/analytics
```

**Current versions:**
- `@vercel/analytics`: ^1.6.1
- `@vercel/speed-insights`: ^1.3.1 (also included)

## Implementation Details

### 1. Analytics Component

The analytics functionality is encapsulated in a dedicated React component located at:
```
src/components/common/Analytics.jsx
```

**Component code:**
```tsx
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
```

### 2. Integration in App

The Analytics component is imported and rendered in the main `App.jsx` file:

```tsx
import Analytics from './components/common/Analytics';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Analytics />
        {/* ... rest of your app ... */}
      </AuthProvider>
    </ErrorBoundary>
  );
}
```

The Analytics component is placed near the top of the component tree to ensure it captures all page views and interactions.

### 3. Route Support

Since this application uses React Router with a HashRouter configuration, the Analytics component automatically:
- Detects route changes
- Tracks page views for each route
- Records user interactions
- Sends data to Vercel's analytics backend

## Enabling Analytics on Vercel

To enable Web Analytics for your Vercel deployment:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project ("new-projects-bali")
3. Navigate to the **Analytics** tab
4. Click the **Enable** button

**Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

## Viewing Analytics Data

Once enabled and deployed:

1. Visit your live application at https://new-projects-bali.vercel.app
2. Users will be tracked automatically
3. Return to the Vercel Dashboard's Analytics tab to view:
   - Page views
   - Unique visitors
   - Bounce rates
   - Core Web Vitals
   - And more

**Data availability:** Analytics data typically starts appearing within a few minutes to hours after your first visit.

## Development Verification

To verify the analytics script is working locally:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open your browser's Developer Tools (F12)

3. Navigate to the **Network** tab

4. Look for requests to `/_vercel/insights/view` when navigating between pages

This confirms the analytics tracking script is active.

## Features

### Automatic Tracking

The Vercel Analytics component automatically tracks:
- **Page Views:** Each route navigation is recorded
- **User Interactions:** Click events and form submissions
- **Core Web Vitals:** LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)

### Privacy

Vercel Web Analytics is designed with privacy in mind:
- No cookies are set by default
- No personal data is stored
- Complies with GDPR, CCPA, and other privacy regulations
- See https://vercel.com/analytics/privacy for more details

## Custom Events (Pro/Enterprise)

For Pro and Enterprise plans, you can track custom events to monitor specific user interactions:

```javascript
import { Analytics } from '@vercel/analytics/react';

// In your component
const handleClick = () => {
  window.va?.('event', {
    name: 'Button Clicked',
    data: { buttonId: 'submit-form' }
  });
};
```

## Speed Insights

This project also integrates **Vercel Speed Insights** (`@vercel/speed-insights`), which provides:
- Real user monitoring (RUM)
- Web performance metrics
- Integration with Core Web Vitals

The Speed Insights component is included in `App.jsx`:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      {/* ... app content ... */}
      <SpeedInsights />
    </>
  );
}
```

## Configuration

The current setup requires no additional configuration. The Analytics component works out of the box once:
1. The project is deployed to Vercel
2. Web Analytics is enabled in the Vercel Dashboard
3. The application is accessed by users

## Troubleshooting

### Analytics Data Not Appearing

1. **Verify the project is on Vercel:** Check https://vercel.com/dashboard
2. **Confirm Analytics is enabled:** Visit your project's Analytics tab
3. **Check the Network tab:** Ensure `/_vercel/insights/view` requests are being made
4. **Wait for data:** Analytics data can take several minutes to appear in the dashboard
5. **Clear cache:** Try clearing your browser cache or use an incognito window

### Network Requests Blocked

If `/_vercel/insights/view` requests are blocked:
1. Check browser extensions (ad blockers may block analytics)
2. Verify no privacy-focused browser settings are blocking analytics
3. Check if your environment has correct CORS configuration

## Documentation References

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Analytics Package Documentation](https://vercel.com/docs/analytics/package)
- [Custom Events Guide](https://vercel.com/docs/analytics/custom-events)
- [Filtering and Data Analysis](https://vercel.com/docs/analytics/filtering)
- [Privacy & Compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Troubleshooting Guide](https://vercel.com/docs/analytics/troubleshooting)

## Next Steps

1. **Deploy to Vercel:** Push your changes and deploy
   ```bash
   git push origin main
   ```

2. **Enable Analytics:** Go to Vercel Dashboard > Your Project > Analytics tab > Enable

3. **Monitor Performance:** Check analytics dashboard to view visitor data

4. **Add Custom Events:** Implement custom event tracking for important user actions

5. **Review Speed Insights:** Monitor Core Web Vitals in the Speed Insights dashboard

## Support

For issues or questions:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Troubleshooting Guide](https://vercel.com/docs/analytics/troubleshooting)
- Contact Vercel support through your dashboard
