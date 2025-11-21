import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatWidget from './components/common/AIChatWidget';

// Pages
import HomePage from './pages/HomePage';
import DevelopmentsPage from './pages/DevelopmentsPage';
import DevelopmentDetail from './pages/DevelopmentDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DeveloperDashboard from './pages/DeveloperDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<><Navbar /><HomePage /><AIChatWidget /><Footer /></>} />
        <Route path="/developments" element={<><Navbar /><DevelopmentsPage /><AIChatWidget /><Footer /></>} />
        <Route path="/development/:id" element={<><Navbar /><DevelopmentDetail /><AIChatWidget /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /><AIChatWidget /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><ContactPage /><AIChatWidget /><Footer /></>} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<><Navbar /><BlogPage /><AIChatWidget /><Footer /></>} />
        <Route path="/blog/:id" element={<><Navbar /><BlogPost /><AIChatWidget /><Footer /></>} />

        {/* Dashboard Routes (No Footer/Nav/Chat typically, or different layout) */}
        <Route path="/developer-dashboard/*" element={<DeveloperDashboard />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;