import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiPhone, FiMail, FiUser, FiGlobe, FiDollarSign, FiMessageCircle, FiSend } = FiIcons;

const LeadCaptureForm = ({ development }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const budgetRanges = [
    'Under $200k',
    '$200k - $500k', 
    '$500k - $1M',
    '$1M - $2M',
    '$2M - $5M',
    'Above $5M'
  ];

  const countries = [
    'Australia', 'United Kingdom', 'United States', 'Canada', 
    'Singapore', 'New Zealand', 'Germany', 'Netherlands', 
    'France', 'Other'
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Lead data:', {
        ...data,
        developmentId: development.id,
        developmentName: development.name,
        timestamp: new Date().toISOString()
      });
      
      toast.success('Your inquiry has been sent successfully! We\'ll be in touch within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Get Full Details
        </h3>
        <p className="text-slate-600">
          Request brochure, pricing & availability for {development.name}
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg transition-colors font-medium">
          <SafeIcon icon={FiFileText} />
          <span className="text-sm">Get Brochure</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
          <SafeIcon icon={FiPhone} />
          <span className="text-sm">Schedule Call</span>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name *
          </label>
          <div className="relative">
            <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email Address *
          </label>
          <div className="relative">
            <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number *
          </label>
          <div className="relative">
            <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              placeholder="+61 123 456 789"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Country of Residence *
          </label>
          <div className="relative">
            <SafeIcon icon={FiGlobe} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <select
              {...register('country', { required: 'Please select your country' })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            >
              <option value="">Select your country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          {errors.country && (
            <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
          )}
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Investment Budget
          </label>
          <div className="relative">
            <SafeIcon icon={FiDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <select
              {...register('budget')}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Message or Questions
          </label>
          <div className="relative">
            <SafeIcon icon={FiMessageCircle} className="absolute left-3 top-3 text-slate-400" />
            <textarea
              {...register('message')}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
              placeholder="Tell us about your investment goals or ask any questions..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <SafeIcon icon={FiSend} />
              <span>Send Inquiry</span>
            </>
          )}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-slate-600 text-center mb-4">
          Or contact us directly:
        </p>
        <div className="space-y-2 text-center">
          <a 
            href="tel:+62123456789" 
            className="flex items-center justify-center space-x-2 text-slate-600 hover:text-amber-600 transition-colors"
          >
            <SafeIcon icon={FiPhone} className="text-sm" />
            <span className="text-sm">+62 123 456 7890</span>
          </a>
          <a 
            href="mailto:info@newprojectsbali.com" 
            className="flex items-center justify-center space-x-2 text-slate-600 hover:text-amber-600 transition-colors"
          >
            <SafeIcon icon={FiMail} className="text-sm" />
            <span className="text-sm">info@newprojectsbali.com</span>
          </a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 text-xs text-slate-500 mb-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No Spam</span>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            We respond within 24 hours • Your data is protected
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadCaptureForm;