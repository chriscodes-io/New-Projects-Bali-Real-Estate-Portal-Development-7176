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
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Contact form data:', { ...data, timestamp: new Date().toISOString() });
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

  return (
    <div className="min-h-screen bg-premium-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
            Have questions about listing your project or investing in Bali? 
            Our expert team is here to help you every step of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-premium-blue/20">
                <SafeIcon icon={info.icon} className="text-white text-2xl" />
              </div>
              
              <h3 className="text-lg font-bold text-premium-black mb-2">
                {info.title}
              </h3>
              
              {info.action ? (
                <a
                  href={info.action}
                  className="text-premium-blue hover:text-blue-600 font-bold text-lg block mb-1 transition-colors"
                >
                  {info.details}
                </a>
              ) : (
                <div className="text-premium-black font-bold text-lg mb-1">
                  {info.details}
                </div>
              )}
              
              <p className="text-premium-charcoal text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-premium-black mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-premium-black mb-3">
                  I am... *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "investor", label: "Investor", icon: FiUser },
                    { val: "developer", label: "Developer", icon: FiBuilding },
                    { val: "agent", label: "Agent", icon: FiUsers },
                    { val: "support", label: "Support", icon: FiHelpCircle }
                  ].map((type) => (
                    <label
                      key={type.val}
                      className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-premium-slate-50 hover:border-premium-blue transition-all group"
                    >
                      <input
                        {...register('inquiryType', { required: true })}
                        type="radio"
                        value={type.val}
                        className="w-4 h-4 text-premium-blue focus:ring-premium-blue"
                      />
                      <SafeIcon icon={type.icon} className="text-premium-charcoal group-hover:text-premium-blue transition-colors" />
                      <span className="text-sm font-semibold text-premium-charcoal group-hover:text-premium-black">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-premium-black mb-2">Full Name *</label>
                  <input
                    {...register('name', { required: 'Required' })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-premium-blue focus:ring-4 focus:ring-premium-blue/10 outline-none transition-all text-premium-black"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-premium-black mb-2">Email *</label>
                  <input
                    {...register('email', { required: 'Required' })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-premium-blue focus:ring-4 focus:ring-premium-blue/10 outline-none transition-all text-premium-black"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">Message *</label>
                <textarea
                  {...register('message', { required: 'Required' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-premium-blue focus:ring-4 focus:ring-premium-blue/10 outline-none transition-all resize-none text-premium-black"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="flex items-center space-x-2 text-sm text-premium-charcoal bg-premium-slate-50 p-4 rounded-xl border border-gray-100">
                <SafeIcon icon={FiClock} className="text-premium-blue" />
                <span>We typically respond within 24 hours. Your data is protected.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-premium-purple hover:bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-premium-cta hover:shadow-xl hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-3xl p-8 text-white shadow-xl shadow-premium-blue/20">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-white/90 mb-6">
                Our support team is available 9 AM - 6 PM Bali time.
              </p>
              <div className="space-y-4">
                <a href="tel:+62123456789" className="flex items-center space-x-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 bg-white text-premium-blue rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiPhone} />
                  </div>
                  <div>
                    <div className="font-bold">Call Us</div>
                    <div className="text-sm opacity-90">+62 123 456 7890</div>
                  </div>
                </a>
                <a href="mailto:info@newprojectsbali.com" className="flex items-center space-x-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 bg-white text-premium-blue rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiMail} />
                  </div>
                  <div>
                    <div className="font-bold">Email Us</div>
                    <div className="text-sm opacity-90">info@newprojectsbali.com</div>
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