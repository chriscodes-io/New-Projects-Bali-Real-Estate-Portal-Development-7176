import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiUser, 
  FiMessageCircle, FiBuilding, FiUsers, FiHelpCircle
} = FiIcons;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Contact form data:', {
        ...data,
        timestamp: new Date().toISOString()
      });
      
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      details: "info@newprojectsbali.com",
      description: "Send us an email anytime",
      action: "mailto:info@newprojectsbali.com"
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+62 123 456 7890",
      description: "Mon-Fri 9AM-6PM (Bali Time)",
      action: "tel:+62123456789"
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      details: "Bali, Indonesia",
      description: "Schedule an appointment",
      action: null
    },
    {
      icon: FiClock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond quickly",
      action: null
    }
  ];

  const inquiryTypes = [
    { value: "investor", label: "I'm an Investor", icon: FiUser },
    { value: "developer", label: "I'm a Developer", icon: FiBuilding },
    { value: "agent", label: "I'm an Agent", icon: FiUsers },
    { value: "support", label: "General Support", icon: FiHelpCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about listing your project or investing in Bali? 
            Our expert team is here to help you every step of the way.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={info.icon} className="text-white text-xl" />
              </div>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {info.title}
              </h3>
              
              {info.action ? (
                <a
                  href={info.action}
                  className="text-amber-600 hover:text-amber-700 font-medium text-lg block mb-1 transition-colors"
                >
                  {info.details}
                </a>
              ) : (
                <div className="text-slate-800 font-medium text-lg mb-1">
                  {info.details}
                </div>
              )}
              
              <p className="text-slate-600 text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  I am... *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {inquiryTypes.map((type) => (
                    <label
                      key={type.value}
                      className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        {...register('inquiryType', { required: 'Please select an option' })}
                        type="radio"
                        value={type.value}
                        className="w-4 h-4 text-amber-600"
                      />
                      <SafeIcon icon={type.icon} className="text-amber-500" />
                      <span className="text-sm font-medium text-slate-700">{type.label}</span>
                    </label>
                  ))}
                </div>
                {errors.inquiryType && (
                  <p className="mt-1 text-sm text-red-600">{errors.inquiryType.message}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="+61 123 456 789"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="How can we help you?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
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
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    How much does it cost to list my project?
                  </h3>
                  <p className="text-slate-600">
                    Listing your project is completely free. You only pay when you unlock leads 
                    from interested investors ($25 per lead or $299/month for unlimited access).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    What types of investors use your platform?
                  </h3>
                  <p className="text-slate-600">
                    Our investors are primarily from Australia, UK, US, and other developed markets. 
                    They're serious buyers with budgets typically ranging from $200k to $5M+.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    How qualified are the leads?
                  </h3>
                  <p className="text-slate-600">
                    All leads include verified contact details, budget information, and specific 
                    interest in your project. We pre-qualify all inquiries before they reach you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Can I manage multiple projects?
                  </h3>
                  <p className="text-slate-600">
                    Yes! Our developer dashboard allows you to manage multiple projects, 
                    track leads for each one, and get detailed analytics on performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-amber-800 mb-6">
                Our team is available to answer your questions and help you get started.
              </p>
              
              <div className="space-y-3">
                <a
                  href="tel:+62123456789"
                  className="flex items-center space-x-3 bg-white hover:bg-amber-50 p-4 rounded-lg transition-colors border border-amber-200"
                >
                  <SafeIcon icon={FiPhone} className="text-amber-600" />
                  <div>
                    <div className="font-medium text-amber-900">Call us now</div>
                    <div className="text-sm text-amber-700">+62 123 456 7890</div>
                  </div>
                </a>
                
                <a
                  href="mailto:info@newprojectsbali.com"
                  className="flex items-center space-x-3 bg-white hover:bg-amber-50 p-4 rounded-lg transition-colors border border-amber-200"
                >
                  <SafeIcon icon={FiMail} className="text-amber-600" />
                  <div>
                    <div className="font-medium text-amber-900">Email us</div>
                    <div className="text-sm text-amber-700">info@newprojectsbali.com</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;