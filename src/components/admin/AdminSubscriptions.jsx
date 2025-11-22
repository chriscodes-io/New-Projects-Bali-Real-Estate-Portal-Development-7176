import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCreditCard, FiCheck, FiX, FiTrendingUp, FiAlertCircle } = FiIcons;

const AdminSubscriptions = () => {
  const [subscriptions] = useState([
    {
      id: 1,
      developerName: 'Bali Villas Dev',
      email: 'contact@balivilladev.com',
      plan: 'Premium',
      status: 'active',
      startDate: '2024-01-15',
      renewalDate: '2024-04-15',
      monthlyFee: 299,
      listingsLimit: 50
    },
    {
      id: 2,
      developerName: 'Tropical Homes',
      email: 'info@tropicalhomes.com',
      plan: 'Standard',
      status: 'active',
      startDate: '2024-02-01',
      renewalDate: '2024-05-01',
      monthlyFee: 149,
      listingsLimit: 20
    },
    {
      id: 3,
      developerName: 'Sunset Properties',
      email: 'admin@sunsetprops.com',
      plan: 'Premium',
      status: 'paused',
      startDate: '2023-12-01',
      renewalDate: '2024-03-01',
      monthlyFee: 299,
      listingsLimit: 50
    }
  ]);

  const plans = [
    { name: 'Starter', fee: 49, listings: 5, features: ['5 listings', 'Basic analytics', 'Email support'] },
    { name: 'Standard', fee: 149, listings: 20, features: ['20 listings', 'Advanced analytics', 'Priority support'] },
    { name: 'Premium', fee: 299, listings: 50, features: ['50 listings', 'Full analytics', '24/7 support', 'API access'] }
  ];

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="max-w-6xl space-y-8 p-6">
      {/* Subscription Plans Overview */}
      <div>
        <h3 className="text-2xl font-bold text-premium-black mb-6">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-premium-black mb-2">{plan.name}</h4>
              <div className="mb-4">
                <span className="text-3xl font-bold text-premium-blue">${plan.fee}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-premium-charcoal text-sm">
                    <SafeIcon icon={FiCheck} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 rounded-lg bg-premium-blue/10 text-premium-blue hover:bg-premium-blue/20 transition-colors font-semibold text-sm">
                Manage
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Active Subscriptions */}
      <div>
        <h3 className="text-2xl font-bold text-premium-black mb-6">Active Subscriptions</h3>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-premium-slate-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Developer</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Plan</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Monthly Fee</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Renewal Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-premium-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-premium-black">{sub.developerName}</p>
                        <p className="text-xs text-gray-600">{sub.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-premium-charcoal">{sub.plan}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(sub.status)}`}>
                        {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-premium-black">${sub.monthlyFee}</td>
                    <td className="px-6 py-4 text-sm text-premium-charcoal">{sub.renewalDate}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-premium-blue hover:text-blue-700 font-semibold">Edit</button>
                      <button className="text-red-500 hover:text-red-700 font-semibold">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubscriptions;