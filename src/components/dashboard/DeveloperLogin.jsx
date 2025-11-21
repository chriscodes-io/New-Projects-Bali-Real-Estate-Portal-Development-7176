import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLock, FiEye, FiEyeOff, FiBuilding, FiArrowLeft, FiUserPlus } = FiIcons;

const DeveloperLogin = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (isSignUp) {
        toast.success('Account created successfully! Please check your email to verify your account.');
        setIsSignUp(false);
        reset();
      } else {
        onLogin(data);
        toast.success('Welcome back!');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-premium-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-premium-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-premium-periwinkle/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-premium-charcoal hover:text-premium-blue transition-colors font-medium"
          >
            <SafeIcon icon={FiArrowLeft} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl shadow-premium-blue/5 p-8 border border-white"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-premium-blue/20">
              <SafeIcon icon={FiBuilding} className="text-white text-3xl" />
            </div>
            
            <h1 className="text-2xl font-bold text-premium-black mb-2">
              {isSignUp ? 'Create Developer Account' : 'Developer Portal'}
            </h1>
            <p className="text-premium-charcoal">
              {isSignUp 
                ? 'Join our platform and start generating leads for your projects'
                : 'Sign in to manage your projects and leads'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {isSignUp && (
              <>
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-bold text-premium-black mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('company', { required: 'Company name is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white"
                    placeholder="Your Development Company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                  )}
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm font-bold text-premium-black mb-2">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white"
                    placeholder="Your Full Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
              </>
            )}

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
                  placeholder="your.email@company.com"
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

            {isSignUp && (
              <>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-premium-black mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white"
                    placeholder="+62 123 456 789"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input
                    {...register('terms', { required: 'You must accept the terms' })}
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-premium-blue border-gray-300 rounded focus:ring-premium-blue"
                  />
                  <label className="text-sm text-premium-charcoal">
                    I agree to the{' '}
                    <a href="#" className="text-premium-blue hover:text-blue-700 font-medium">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-premium-blue hover:text-blue-700 font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
                )}
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-premium-purple hover:bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-premium-cta hover:shadow-xl hover:-translate-y-0.5"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>{isSignUp ? 'Creating Account...' : 'Signing In...'}</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={isSignUp ? FiUserPlus : FiBuilding} />
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-premium-charcoal">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  reset();
                }}
                className="text-premium-purple hover:text-purple-700 font-bold ml-1"
              >
                {isSignUp ? 'Sign In' : 'Create Account'}
              </button>
            </p>
            
            {!isSignUp && (
              <p className="mt-2">
                <a href="#" className="text-gray-400 hover:text-premium-blue text-sm transition-colors">
                  Forgot your password?
                </a>
              </p>
            )}
          </div>

          {/* Demo Notice */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="text-premium-blue text-sm text-center font-medium">
              <strong>Demo Notice:</strong> Use any email and password to access the demo dashboard
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeveloperLogin;