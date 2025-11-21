import React, { useState } from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCpu, FiSave, FiToggleRight, FiToggleLeft } = FiIcons;

const AdminSettings = () => {
  const [aiEnabled, setAiEnabled] = useState(true);

  return (
    <div className="max-w-4xl space-y-8">
      {/* AI Settings */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-premium-blue/10 rounded-xl flex items-center justify-center text-premium-blue">
              <SafeIcon icon={FiCpu} className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-premium-black">AI Agent Configuration</h3>
              <p className="text-premium-charcoal text-sm">Manage chat behavior and lead scoring</p>
            </div>
          </div>
          <button 
            onClick={() => setAiEnabled(!aiEnabled)}
            className={`text-3xl transition-colors ${aiEnabled ? 'text-premium-blue' : 'text-gray-300'}`}
          >
            <SafeIcon icon={aiEnabled ? FiToggleRight : FiToggleLeft} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-premium-black mb-2">
              System Prompt (Base Knowledge)
            </label>
            <textarea 
              className="w-full h-32 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all text-sm resize-none"
              defaultValue="You are a helpful AI assistant for New Projects Bali. Your goal is to help potential investors find properties and collect their contact information..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-premium-black mb-2">
                Lead Score Threshold (Hot)
              </label>
              <input 
                type="number" 
                defaultValue="80"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-premium-black mb-2">
                Response Delay (seconds)
              </label>
              <input 
                type="number" 
                defaultValue="1.5"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-blue/20 focus:border-premium-blue outline-none transition-all"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button className="bg-premium-purple hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-premium-cta flex items-center space-x-2">
              <SafeIcon icon={FiSave} />
              <span>Save Configuration</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;