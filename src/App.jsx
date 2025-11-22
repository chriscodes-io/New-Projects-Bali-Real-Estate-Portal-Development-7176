import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatWidget from './components/common/AIChatWidget';
import HomePage from './pages/HomePage';
import DevelopmentsPage from './pages/DevelopmentsPage';
import DevelopmentDetail from './pages/DevelopmentDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import DeveloperDashboard from './pages/DeveloperDashboard';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage'; // New Import
import './App.css';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
        <Route path="/developments" element={<><Navbar /><DevelopmentsPage /><Footer /></>} />
        <Route path="/development/:id" element={<><Navbar /><DevelopmentDetail /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
        <Route path="/blog" element={<><Navbar /><BlogPage /><Footer /></>} />
        <Route path="/blog/:id" element={<><Navbar /><BlogPost /><Footer /></>} />
        
        {/* Unified Login Route */}
        <Route path="/login" element={<><Navbar /><LoginPage /><Footer /></>} />

        {/* Dashboard Routes - No Navbar/Footer */}
        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      {/* AI Chat Widget */}
      <AIChatWidget />
    </>
  );
}

export default App;