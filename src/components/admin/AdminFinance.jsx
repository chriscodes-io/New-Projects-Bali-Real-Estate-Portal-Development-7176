import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiTrendingUp, FiDownload, FiCalendar, FiFilter } = FiIcons;

const AdminFinance = () => {
  const [transactions] = useState([
    { id: 1, developer: 'Bali Villas Dev', amount: 299, type: 'subscription', date: '2024-03-15', status: 'completed' },
    { id: 2, developer: 'Tropical Homes', amount: 149, type: 'subscription', date: '2024-03-14', status: 'completed' },
    { id: 3, developer: 'Sunset Properties', amount: -50, type: 'refund', date: '2024-03-10', status: 'completed' },
    { id: 4, developer: 'Island Resorts', amount: 299, type: 'subscription', date: '2024-03-08', status: 'pending' },
  ]);

  const stats = [
    { label: 'Total Revenue', value: '$12,450', change: '+12.5%', icon: FiDollarSign, color: 'from-green-400 to-green-600' },
    { label: 'Pending Payments', value: '$1,200', change: '-3.2%', icon: FiTrendingUp, color: 'from-orange-400 to-orange-600' },
    { label: 'Monthly Recurring', value: '$8,900', change: '+8.1%', icon: FiTrendingUp, color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <div className="max-w-6xl space-y-8 p-6">
      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-premium-black">{stat.value}</h3>
                <p className="text-xs text-green-600 mt-2">{stat.change} this month</p>
              </div>
              <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl text-white`}>
                <SafeIcon icon={stat.icon} className="text-2xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Transactions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-premium-black">Recent Transactions</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-premium-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold text-sm">
            <SafeIcon icon={FiDownload} />
            <span>Export</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-premium-slate-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Developer</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-premium-black">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-premium-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-premium-black">{tx.developer}</td>
                    <td className="px-6 py-4 text-sm text-premium-charcoal capitalize">{tx.type}</td>
                    <td className="px-6 py-4 text-sm font-bold text-premium-black">{tx.amount > 0 ? '+' : ''} ${Math.abs(tx.amount)}</td>
                    <td className="px-6 py-4 text-sm text-primary-charcoal">{tx.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        tx.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-xl font-bold text-premium-black mb-6">Payment Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Stripe API Key</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none"
              placeholder="sk_live_..."
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Webhook Secret</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none"
              placeholder="whsec_..."
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Default Currency</label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none">
              <option>USD</option>
              <option>IDR</option>
              <option>EUR</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">Tax Rate (%)</label>
            <input 
              type="number" 
              defaultValue="10"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none"
            />
          </div>
        </div>
        <button className="mt-6 bg-premium-purple hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-bold transition-all">
          Save Configuration
        </button>
      </div>
    </div>
  );
};

export default AdminFinance;