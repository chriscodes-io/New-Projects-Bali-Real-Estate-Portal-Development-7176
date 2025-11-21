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
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Payments & Plans</h1>
        <p className="text-slate-600">Manage your subscription and view billing history</p>
      </div>

      {/* Current Plan */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-amber-500 text-xs font-bold px-2 py-1 rounded">ACTIVE</span>
              <span className="text-slate-300 text-sm">Renews: Feb 15, 2024</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Professional Plan</h2>
            <p className="text-slate-300">
              You have unlimited access to all leads and features.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Manage Subscription
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-6">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all ${
                plan.current 
                  ? 'border-amber-500 ring-4 ring-amber-50' 
                  : 'border-gray-100 hover:border-amber-200'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-500 ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.current
                    ? 'bg-slate-100 text-slate-600 cursor-default'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
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
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Payment Methods</h2>
          <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
            + Add Method
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-xs">
              VISA
            </div>
            <div>
              <div className="font-medium text-slate-800">Visa ending in 4242</div>
              <div className="text-sm text-slate-500">Expires 12/25</div>
            </div>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
            Default
          </span>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-slate-800">Billing History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {billingHistory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-slate-600">{item.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-800 font-medium">{item.description}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.amount}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center space-x-1 text-amber-600 hover:text-amber-700 text-sm font-medium">
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