import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiBuilding, FiBell, FiCreditCard, FiDownload, FiSave, FiEyeOff, FiEye } = FiIcons;

const DeveloperAccountSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [webhookReceipts, setWebhookReceipts] = useState([
    {
      id: 1,
      timestamp: '2024-02-20T14:30:00Z',
      event: 'lead.unlocked',
      status: 'success',
      leadId: 'LEAD-001',
      amount: '$25.00'
    },
    {
      id: 2,
      timestamp: '2024-02-19T10:15:00Z',
      event: 'subscription.renewed',
      status: 'success',
      description: 'Professional Plan Renewal',
      amount: '$299.00'
    },
    {
      id: 3,
      timestamp: '2024-02-18T09:45:00Z',
      event: 'lead.unlocked',
      status: 'success',
      leadId: 'LEAD-002',
      amount: '$25.00'
    }
  ]);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'company', label: 'Company', icon: FiBuilding },
    { id: 'notifications', label: 'Notifications', icon: FiBell },
    { id: 'billing', label: 'Billing', icon: FiCreditCard },
    { id: 'webhooks', label: 'Webhook Receipts', icon: FiDownload }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-premium-black">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">First Name</label>
                <input type="text" defaultValue="Bali" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">Last Name</label>
                <input type="text" defaultValue="Developer" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-premium-black mb-2">Email Address</label>
                <input type="email" defaultValue="contact@baliluxury.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-premium-black mb-2">Phone Number</label>
                <input type="tel" defaultValue="+62 812 345 6789" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-premium-black mb-2">Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} defaultValue="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <SafeIcon icon={showPassword ? FiEyeOff : FiEye} />
                  </button>
                </div>
              </div>
            </div>
            <button className="bg-premium-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 shadow-lg shadow-premium-blue/20">
              <SafeIcon icon={FiSave} />
              <span>Save Changes</span>
            </button>
          </div>
        );

      case 'company':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-premium-black">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-premium-black mb-2">Company Name</label>
                <input type="text" defaultValue="Bali Luxury Estates" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">Registration Number</label>
                <input type="text" defaultValue="PT-2024-001234" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">Tax ID</label>
                <input type="text" defaultValue="TAX-98765432" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-premium-black mb-2">Website</label>
                <input type="url" defaultValue="https://baliluxuryestates.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-premium-black mb-2">Description</label>
                <textarea defaultValue="Premium luxury property developer in Bali specializing in high-end villas and resort properties." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all h-24 resize-none" />
              </div>
            </div>
            <button className="bg-premium-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 shadow-lg shadow-premium-blue/20">
              <SafeIcon icon={FiSave} />
              <span>Save Changes</span>
            </button>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-premium-black">Email Preferences</h3>
            <div className="space-y-4">
              {[
                { title: 'New Leads', desc: 'Get notified when new qualified leads are available' },
                { title: 'Lead Unlocked', desc: 'Receive confirmation when you unlock a lead' },
                { title: 'Subscription Updates', desc: 'Plan changes, renewals, and billing alerts' },
                { title: 'Marketing Emails', desc: 'Tips, updates, and promotional offers' }
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-premium-blue transition-colors">
                  <div>
                    <div className="font-bold text-premium-black">{pref.title}</div>
                    <div className="text-sm text-premium-charcoal">{pref.desc}</div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer accent-premium-blue" />
                </div>
              ))}
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-premium-black">Billing Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">Full Name</label>
                <input type="text" defaultValue="Bali Developer" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">Billing Email</label>
                <input type="email" defaultValue="billing@baliluxury.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-premium-black mb-2">Address</label>
                <input type="text" defaultValue="Jl. Sunset Road, Seminyak, Bali" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">City</label>
                <input type="text" defaultValue="Bali" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-premium-black mb-2">Postal Code</label>
                <input type="text" defaultValue="80361" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all" />
              </div>
            </div>
            <button className="bg-premium-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 shadow-lg shadow-premium-blue/20">
              <SafeIcon icon={FiSave} />
              <span>Save Changes</span>
            </button>
          </div>
        );

      case 'webhooks':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-premium-black mb-2">Webhook Receipts</h3>
              <p className="text-sm text-premium-charcoal">View all webhook events and transaction receipts</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-premium-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Timestamp</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Event</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Details</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-premium-charcoal uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {webhookReceipts.map((receipt) => (
                    <tr key={receipt.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-premium-charcoal whitespace-nowrap">
                        {new Date(receipt.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-premium-black">{receipt.event}</td>
                      <td className="px-6 py-4 text-sm text-premium-charcoal">{receipt.leadId || receipt.description}</td>
                      <td className="px-6 py-4 text-sm font-bold text-premium-black">{receipt.amount}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full capitalize">{receipt.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-premium-black">Account Settings</h1>
        <p className="text-premium-charcoal">Manage your profile, company info, and preferences</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex overflow-x-auto border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-premium-blue border-b-2 border-premium-blue'
                  : 'text-premium-charcoal hover:text-premium-blue'
              }`}
            >
              <SafeIcon icon={tab.icon} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperAccountSettings;