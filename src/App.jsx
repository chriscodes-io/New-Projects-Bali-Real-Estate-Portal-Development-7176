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
import DeveloperDashboard from './pages/DeveloperDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Analytics />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/developments" element={<Layout><DevelopmentsPage /></Layout>} />
        <Route path="/development/:id" element={<Layout><ErrorBoundary><DevelopmentDetail /></ErrorBoundary></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />

        {/* Dashboard Routes - No Layout (custom navigation) */}
        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      {/* AI Chat Widget */}
      <AIChatWidget />
    </AuthProvider>
  );
}

export default App;