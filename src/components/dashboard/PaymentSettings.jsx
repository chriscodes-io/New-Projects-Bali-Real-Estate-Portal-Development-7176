import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiCreditCard, FiCheck, FiStar, FiDollarSign, FiCalendar, 
  FiDownload, FiArrowUp, FiSettings, FiShield
} = FiIcons;

const PaymentSettings = () => {
  const [currentPlan, setCurrentPlan] = useState('professional');

  const plans = [
    {
      id: 'payPerLead',
      name: 'Pay Per Lead',
      price: '$25',
      period: 'per lead',
      description: 'Perfect for developers testing the platform',
      features: [
        'Pay only for leads you unlock',
        'Full contact details included',
        'Lead qualification data',
        '48-hour response guarantee',
        'Basic analytics'
      ],
      popular: false,
      current: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$299',
      period: 'per month',
      description: 'Best for active developers with multiple projects',
      features: [
        'Unlimited lead unlocks',
        'Priority listing placement',
        'Advanced analytics dashboard',
        'Dedicated account manager',
        'Featured project promotion',
        'Lead scoring & insights'
      ],
      popular: true,
      current: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large developers and agencies',
      features: [
        'Everything in Professional',
        'Custom integrations (CRM)',
        'White-label options',
        'Bulk lead management',
        'API access',
        'Custom reporting'
      ],
      popular: false,
      current: false
    }
  ];

  const billingHistory = [
    {
      id: 1,
      date: '2024-01-15',
      description: 'Professional Plan - Monthly',
      amount: '$299.00',
      status: 'Paid',
      invoice: 'INV-2024-001'
    },
    {
      id: 2,
      date: '2023-12-15',
      description: 'Professional Plan - Monthly',
      amount: '$299.00',
      status: 'Paid',
      invoice: 'INV-2023-012'
    },
    {
      id: 3,
      date: '2023-11-15',
      description: 'Pay Per Lead Credit (10 leads)',
      amount: '$250.00',
      status: 'Paid',
      invoice: 'INV-2023-009'
    }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-premium-black">Payments & Plans</h1>
        <p className="text-premium-charcoal">Manage your subscription and view billing history</p>
      </div>

      {/* Current Plan */}
      <div className="bg-gradient-to-r from-premium-black to-gray-800 rounded-3xl p-8 text-white shadow-xl shadow-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-premium-blue text-white text-xs font-bold px-2.5 py-1 rounded-full">ACTIVE</span>
              <span className="text-gray-300 text-sm">Renews: Feb 15, 2024</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Professional Plan</h2>
            <p className="text-gray-300">
              You have unlimited access to all leads and features.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors font-medium backdrop-blur-sm">
              Manage Subscription
            </button>
            <button className="bg-premium-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors font-bold shadow-lg shadow-premium-blue/30">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div>
        <h2 className="text-xl font-bold text-premium-black mb-6">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl p-8 shadow-sm transition-all ${
                plan.current 
                  ? 'border-2 border-premium-blue ring-4 ring-premium-blue/5' 
                  : 'border border-gray-100 hover:shadow-lg hover:border-premium-blue/30'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-premium-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-premium-black">{plan.price}</span>
                  <span className="text-premium-charcoal ml-1 font-medium">/{plan.period}</span>
                </div>
                <p className="text-sm text-premium-charcoal">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="text-premium-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-premium-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 px-4 rounded-xl font-bold transition-colors ${
                  plan.current
                    ? 'bg-gray-100 text-gray-500 cursor-default'
                    : 'bg-premium-purple hover:bg-purple-600 text-white shadow-premium-cta'
                }`}
                disabled={plan.current}
              >
                {plan.current ? 'Current Plan' : 'Switch Plan'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-premium-black">Payment Methods</h2>
          <button className="text-premium-blue hover:text-blue-700 text-sm font-bold">
            + Add Method
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-premium-blue transition-colors cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">
              VISA
            </div>
            <div>
              <div className="font-bold text-premium-black">Visa ending in 4242</div>
              <div className="text-sm text-premium-charcoal">Expires 12/25</div>
            </div>
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
            Default
          </span>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <h2 className="text-xl font-bold text-premium-black">Billing History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-premium-slate-50">
              <tr>
                <th className="px-8 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Date</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Description</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Amount</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Status</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {billingHistory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-8 py-4 text-sm text-premium-charcoal">{item.date}</td>
                  <td className="px-8 py-4 text-sm text-premium-black font-medium">{item.description}</td>
                  <td className="px-8 py-4 text-sm text-premium-charcoal">{item.amount}</td>
                  <td className="px-8 py-4">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <button className="flex items-center space-x-1.5 text-premium-blue hover:text-blue-700 text-sm font-medium">
                      <SafeIcon icon={FiDownload} className="text-xs" />
                      <span>{item.invoice}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;