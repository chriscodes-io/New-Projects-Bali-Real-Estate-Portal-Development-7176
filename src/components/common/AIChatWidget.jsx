import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageSquare, FiX, FiSend, FiMinimize2, FiUser, FiInfo } = FiIcons;

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I\'m your Bali Investment Assistant. I can help you find the perfect villa or resort property. What are you looking for today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI response logic
  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      let botResponse = "I'd love to help with that. Could you share your preferred budget range?";
      
      const lowerInput = userMsg.text.toLowerCase();
      if (lowerInput.includes('villa') || lowerInput.includes('house')) {
        botResponse = "We have several stunning villas available. Are you looking for off-plan (better ROI) or ready-to-move-in?";
      } else if (lowerInput.includes('budget') || lowerInput.includes('price')) {
        botResponse = "Understood. To give you the best options, could I get your email address to send you a curated list of properties in that range?";
      } else if (lowerInput.includes('email') || lowerInput.includes('@')) {
        botResponse = "Perfect, thank you! I've noted that. One of our senior investment advisors will reach out shortly. Is there a specific area in Bali you prefer? (e.g., Canggu, Uluwatu, Ubud)";
      } else if (lowerInput.includes('canggu') || lowerInput.includes('uluwatu') || lowerInput.includes('ubud')) {
        botResponse = "Excellent choice. That area is seeing very high rental yields right now. I'm preparing a brochure for you. Do you have any other specific amenities in mind?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Reassurance Label */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mb-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-premium-blue/20 text-sm font-medium text-premium-charcoal flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Online • We respond instantly
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-[90vw] sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-premium-powder/30 mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-premium-blue to-premium-periwinkle p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <SafeIcon icon={FiMessageSquare} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Bali Investment AI</h3>
                  <p className="text-xs text-white/80">Expert Property Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiMinimize2} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-premium-slate-50">
              <div className="text-xs text-center text-premium-charcoal/60 my-2">
                We respond within 24 hours • Your data is protected
              </div>
              
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-premium-blue text-white rounded-tr-none' 
                        : 'bg-white border border-gray-100 text-premium-charcoal rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-premium-blue/40 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-premium-blue/40 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-premium-blue/40 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:border-premium-blue focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all text-sm text-premium-black placeholder-gray-400"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-2 bg-premium-blue text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-premium-blue transition-all"
                >
                  <SafeIcon icon={FiSend} className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-full shadow-lg shadow-premium-blue/30 flex items-center justify-center text-white relative group"
        >
          <SafeIcon icon={FiMessageSquare} className="text-2xl" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-premium-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with AI Agent
          </span>
        </motion.button>
      )}
    </div>
  );
};

export default AIChatWidget;