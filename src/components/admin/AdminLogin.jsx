import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLock, FiEye, FiEyeOff, FiShield, FiArrowLeft } = FiIcons;

const AdminLogin = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Demo credentials
      if (data.email === 'admin@newprojectsbali.com' && data.password === 'admin123') {
        onLogin({ email: data.email, name: 'Admin User' });
        toast.success('Welcome to Admin Portal!');
      } else {
        toast.error('Invalid credentials. Use admin@newprojectsbali.com / admin123');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-premium-blue via-premium-slate-50 to-premium-periwinkle flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-premium-periwinkle/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* Logo/Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-premium-blue/30">
            <SafeIcon icon={FiShield} className="text-premium-blue text-4xl" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Staff Admin</h1>
          <p className="text-white/80">New Projects Bali Management Portal</p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-2xl shadow-premium-blue/20 p-8 border border-white/20 backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-premium-black mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white"
                  placeholder="admin@newprojectsbali.com"
                  autoComplete="email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-premium-black mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-premium-black transition-colors"
                >
                  <SafeIcon icon={showPassword ? FiEyeOff : FiEye} />
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-premium-blue rounded border-gray-300" />
                <span className="text-premium-charcoal">Remember me</span>
              </label>
              <a href="#" className="text-premium-blue hover:text-blue-600 font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-premium-blue to-premium-periwinkle hover:from-blue-600 hover:to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-premium-blue/30 hover:shadow-2xl hover:-translate-y-0.5"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={FiShield} />
                  <span>Sign In to Admin</span>
                </>
              )}
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-8 pt-6 border-t border-gray-100 bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-premium-blue font-medium text-center">
              <strong>Demo Credentials:</strong><br/>
              Email: admin@newprojectsbali.com<br/>
              Password: admin123
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center text-white/70 text-sm"
        >
          <p>Staff Admin Access Only • Unauthorized access is prohibited</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;