import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend, FiCalendar } = FiIcons;

const LeadCaptureForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // In production, this would send data to your backend API
    toast.success('Inquiry sent successfully! We will contact you shortly.');
    reset();
  };

  return (
    <div className="bg-blue-50/50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-premium-black mb-2">Interested in this property?</h3>
        <p className="text-premium-charcoal text-sm">Fill out the form below to receive the brochure and floor plans.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <SafeIcon icon={FiUser} className="absolute left-4 top-1/2 -translate-y-1/2 text-premium-blue/60" />
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your Name"
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 -translate-y-1/2 text-premium-blue/60" />
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            placeholder="Email Address"
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all text-sm"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="relative">
          <SafeIcon icon={FiPhone} className="absolute left-4 top-1/2 -translate-y-1/2 text-premium-blue/60" />
          <input
            {...register('phone', { required: 'Phone is required' })}
            type="tel"
            placeholder="Phone Number (WhatsApp)"
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all text-sm"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
        </div>

        {/* Message */}
        <div className="relative">
          <SafeIcon icon={FiMessageSquare} className="absolute left-4 top-4 text-premium-blue/60" />
          <textarea
            {...register('message')}
            rows="4"
            placeholder="I'm interested in..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all text-sm resize-none"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pt-2">
          <button
            type="submit"
            className="w-full bg-premium-purple hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl shadow-premium-cta transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <SafeIcon icon={FiSend} />
            <span>Send Inquiry</span>
          </button>
          
          <button
            type="button"
            className="w-full bg-white hover:bg-gray-50 text-premium-blue font-bold py-3.5 rounded-xl border border-premium-blue/20 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <SafeIcon icon={FiCalendar} />
            <span>Schedule Call</span>
          </button>
        </div>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400">
          By submitting this form, you agree to our{' '}
          <Link to="/terms" className="text-premium-blue hover:underline">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-premium-blue hover:underline">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureForm;