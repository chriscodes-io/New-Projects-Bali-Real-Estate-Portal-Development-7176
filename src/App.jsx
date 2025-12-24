import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import AIChatWidget from './components/common/AIChatWidget';
import WordPressStatus from './components/common/WordPressStatus';
import Analytics from './components/common/Analytics';
import ErrorBoundary from './components/common/ErrorBoundary';
import './App.css';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const DevelopmentsPage = lazy(() => import('./pages/DevelopmentsPage'));
const DevelopmentDetail = lazy(() => import('./pages/DevelopmentDetail'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const DeveloperDashboard = lazy(() => import('./pages/DeveloperDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-premium-blue"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Analytics />
        <WordPressStatus />
        <Toaster position="top-right" />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public routes wrapped in Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/developments" element={<DevelopmentsPage />} />
              <Route path="/development/:id" element={<DevelopmentDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
            </Route>

            {/* Auth routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Dashboard routes (outside Layout) */}
            <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
        <AIChatWidget />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;