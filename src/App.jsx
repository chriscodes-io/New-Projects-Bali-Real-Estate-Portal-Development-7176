import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DevelopmentsPage from './pages/DevelopmentsPage';
import DevelopmentDetail from './pages/DevelopmentDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DeveloperDashboard from './pages/DeveloperDashboard';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/developments" element={<DevelopmentsPage />} />
          <Route path="/development/:id" element={<DevelopmentDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;