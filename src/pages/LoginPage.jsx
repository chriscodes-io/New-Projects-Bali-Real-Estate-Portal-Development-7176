import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLock, FiArrowRight, FiBuilding, FiShield } = FiIcons;

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // CONDITIONAL ROUTING LOGIC
    if (data.email === 'admin@newprojectsbali.com' && data.password === 'admin123') {
      // Admin Login Success
      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('userName', 'Admin User');
      toast.success('Welcome back, Admin!');
      navigate('/admin-dashboard');
    } else if (data.password === 'dev123') {
      // Developer Login Success (Any email with correct password for demo)
      localStorage.setItem('userRole', 'developer');
      localStorage.setItem('userName', 'Bali Developers');
      toast.success('Welcome back to your Dashboard!');
      navigate('/developer-dashboard');
    } else {
      // Login Failed
      toast.error('Invalid credentials. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-premium-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-xl flex items-center justify-center shadow-lg shadow-premium-blue/20">
              <SafeIcon icon={FiBuilding} className="text-white text-2xl" />
            </div>
            <span className="font-bold text-2xl text-premium-black tracking-tight">New Projects Bali</span>
          </Link>
          <h2 className="text-2xl font-bold text-premium-black mb-2">Welcome Back</h2>
          <p className="text-premium-charcoal">Sign in to manage your account</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-premium-black">Email Address</label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all"
                  placeholder="name@company.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-sm font-bold text-premium-black">Password</label>
                <a href="#" className="text-xs text-premium-blue hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-premium-black hover:bg-gray-800 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <SafeIcon icon={FiArrowRight} />
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials Hint */}
          <div className="mt-8 pt-6 border-t border-gray-100">
             <p className="text-xs text-center text-gray-400 uppercase tracking-wider mb-4">For Demo Access</p>
             <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                 <p className="text-xs font-bold text-blue-800">Admin</p>
                 <p className="text-[10px] text-blue-600">admin@newprojectsbali.com</p>
                 <p className="text-[10px] text-blue-600">Pass: admin123</p>
               </div>
               <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 text-center">
                 <p className="text-xs font-bold text-purple-800">Developer</p>
                 <p className="text-[10px] text-purple-600">developer@test.com</p>
                 <p className="text-[10px] text-purple-600">Pass: dev123</p>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;