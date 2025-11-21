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
      className="bg-white rounded-2xl shadow-lg shadow-premium-blue/5 p-8 border border-gray-100 sticky top-24"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-premium-black mb-2">
          Get Full Details
        </h3>
        <p className="text-premium-charcoal">
          Request brochure, pricing & availability for <span className="font-semibold text-premium-blue">{development.name}</span>
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-premium-blue to-premium-periwinkle hover:from-blue-600 hover:to-premium-blue text-white py-3.5 px-4 rounded-xl transition-all shadow-md font-bold text-sm">
          <SafeIcon icon={FiFileText} />
          <span>Get Brochure</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-premium-purple hover:bg-purple-600 text-white py-3.5 px-4 rounded-xl transition-all shadow-md shadow-premium-purple/20 font-bold text-sm">
          <SafeIcon icon={FiPhone} />
          <span>Schedule Call</span>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-bold text-premium-black mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <SafeIcon icon={FiUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white"
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold text-premium-black mb-1.5">
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
              placeholder="your.email@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-bold text-premium-black mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <SafeIcon icon={FiPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white"
              placeholder="+61 123 456 789"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-bold text-premium-black mb-1.5">
            Country of Residence <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <SafeIcon icon={FiGlobe} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              {...register('country', { required: 'Please select your country' })}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white appearance-none"
            >
              <option value="">Select your country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          {errors.country && (
            <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>
          )}
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-bold text-premium-black mb-1.5">
            Investment Budget
          </label>
          <div className="relative">
            <SafeIcon icon={FiDollarSign} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              {...register('budget')}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all bg-premium-slate-50 focus:bg-white appearance-none"
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
          <label className="block text-sm font-bold text-premium-black mb-1.5">
            Message or Questions
          </label>
          <div className="relative">
            <SafeIcon icon={FiMessageCircle} className="absolute left-4 top-3 text-gray-400" />
            <textarea
              {...register('message')}
              rows={4}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all resize-none bg-premium-slate-50 focus:bg-white"
              placeholder="Tell us about your investment goals or ask any questions..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-premium-purple hover:bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-premium-cta hover:shadow-xl hover:-translate-y-0.5 mt-2"
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
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-sm text-premium-charcoal text-center mb-4 font-medium">
          Or contact us directly:
        </p>
        <div className="space-y-3 text-center">
          <a 
            href="tel:+62123456789" 
            className="flex items-center justify-center space-x-2 text-premium-charcoal hover:text-premium-blue transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
              <SafeIcon icon={FiPhone} className="text-sm" />
            </div>
            <span className="text-sm font-medium">+62 123 456 7890</span>
          </a>
          <a 
            href="mailto:info@newprojectsbali.com" 
            className="flex items-center justify-center space-x-2 text-premium-charcoal hover:text-premium-blue transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
              <SafeIcon icon={FiMail} className="text-sm" />
            </div>
            <span className="text-sm font-medium">info@newprojectsbali.com</span>
          </a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 text-xs text-premium-charcoal mb-2">
            <div className="flex items-center space-x-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-1.5 h-1.5 bg-premium-blue rounded-full"></div>
              <span>No Spam</span>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            We respond within 24 hours • Your data is protected
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadCaptureForm;