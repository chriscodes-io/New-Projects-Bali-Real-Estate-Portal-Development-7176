import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import AIChatWidget from './components/common/AIChatWidget';
import WordPressStatus from './components/common/WordPressStatus';
import Analytics from './components/common/Analytics';
import ErrorBoundary from './components/common/ErrorBoundary';
import HomePage from './pages/HomePage';
import DevelopmentsPage from './pages/DevelopmentsPage';
import DevelopmentDetail from './pages/DevelopmentDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DeveloperDashboard from './pages/DeveloperDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Analytics />
        <WordPressStatus />
        <Toaster position="top-right" />
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
        <AIChatWidget />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;