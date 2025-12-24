import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ChatMessage from './ChatMessage';

const { FiMessageSquare, FiSend, FiX } = FiIcons;

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hi there! 👋 I\'m your Bali Investment Assistant. Whether you\'re looking for your dream villa or a resort investment, I\'m here to help you find the perfect opportunity. What brings you here today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStage, setConversationStage] = useState('initial');
  const [quickSelectOptions, setQuickSelectOptions] = useState(null);
  const [customerData, setCustomerData] = useState({
    propertyType: null,
    budget: null,
    location: null,
    name: null,
    email: null,
    phone: null
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, quickSelectOptions]);

  // Extract email from text
  const extractEmail = (text) => {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const matches = text.match(emailRegex);
    return matches ? matches[0] : null;
  };

  // Extract phone from text
  const extractPhone = (text) => {
    const phoneRegex = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const matches = text.match(phoneRegex);
    return matches ? matches[0] : null;
  };

  // Extract name
  const extractName = (text) => {
    const nameRegex = /^([a-zA-Z\s]{2,})$/;
    if (nameRegex.test(text.trim())) {
      return text.trim();
    }
    return null;
  };

  // Intelligent response generator
  const generateBotResponse = (userText, currentStage, selectedOption = null) => {
    const lowerText = userText.toLowerCase();

    // Check for property type
    if (currentStage === 'initial' || currentStage === 'property_type') {
      if (lowerText.includes('villa') || lowerText.includes('house') || lowerText.includes('residential')) {
        setCustomerData(prev => ({ ...prev, propertyType: 'Villa' }));
        setConversationStage('budget');
        setQuickSelectOptions([
          { label: 'Under $200k', value: 'Under $200k' },
          { label: '$200k - $500k', value: '$200k - $500k' },
          { label: '$500k - $1M', value: '$500k - $1M' },
          { label: '$1M+', value: '$1M+' }
        ]);
        return "Perfect! Villas are our specialty with some incredible ROI opportunities. 🏡\n\nWhat's your approximate budget range?";
      }
      if (lowerText.includes('resort') || lowerText.includes('hotel') || lowerText.includes('commercial')) {
        setCustomerData(prev => ({ ...prev, propertyType: 'Resort' }));
        setConversationStage('budget');
        setQuickSelectOptions([
          { label: 'Under $500k', value: 'Under $500k' },
          { label: '$500k - $2M', value: '$500k - $2M' },
          { label: '$2M - $5M', value: '$2M - $5M' },
          { label: '$5M+', value: '$5M+' }
        ]);
        return "Excellent choice! Resort properties in Bali are seeing 12-18% annual yields. 🏨\n\nWhat's your budget?";
      }

      setQuickSelectOptions([
        { label: '🏡 Villa', value: 'villa' },
        { label: '🏨 Resort', value: 'resort' },
        { label: '❓ Help me decide', value: 'help' }
      ]);
      return "Perfect! What type of property interests you most?";
    }

    // Check for budget
    if (currentStage === 'budget') {
      if (selectedOption || lowerText.includes('$') || lowerText.includes('k') || lowerText.includes('million')) {
        const budget = selectedOption || userText;
        setCustomerData(prev => ({ ...prev, budget }));
        setConversationStage('location');
        setQuickSelectOptions([
          { label: '🌴 Canggu', value: 'Canggu' },
          { label: '🏝️ Uluwatu', value: 'Uluwatu' },
          { label: '🌾 Ubud', value: 'Ubud' },
          { label: '🏖️ Seminyak', value: 'Seminyak' },
          { label: '📍 All Areas', value: 'All' }
        ]);
        return "Great! We have excellent properties in that range. 💰\n\nWhich area interests you most?";
      }

      return "Could you select a budget range or tell me an amount?";
    }

    // Check for location
    if (currentStage === 'location') {
      const location = selectedOption || userText;
      setCustomerData(prev => ({ ...prev, location }));
      setConversationStage('contact');
      setQuickSelectOptions(null);

      return `Perfect! ${location} is an amazing choice! 🎯\n\nI'd love to send you our curated list of properties. What's the best way to reach you?\n\nPlease share your name first:`;
    }

    // Check for contact info - Name
    if (currentStage === 'contact' && !customerData.name) {
      const name = extractName(userText) || selectedOption;
      if (name) {
        setCustomerData(prev => ({ ...prev, name }));
        setConversationStage('contact_email');
        setQuickSelectOptions(null);
        return `Thanks, ${name}! 😊\n\nNow, what's your email address?`;
      }
      return "Could you please share your name?";
    }

    // Check for contact info - Email
    if (currentStage === 'contact_email' && customerData.name) {
      const email = extractEmail(userText) || selectedOption;
      if (email) {
        setCustomerData(prev => ({ ...prev, email }));
        setConversationStage('contact_phone');
        setQuickSelectOptions([
          { label: '✅ Skip phone', value: 'skip' },
          { label: '📱 Add phone', value: 'add' }
        ]);
        return `Great! Got your email: ${email} ✅\n\nDo you have a phone number where our team can reach you? (optional)`;
      }
      return "Could you share your email address?";
    }

    // Check for contact info - Phone
    if (currentStage === 'contact_phone' && customerData.name && customerData.email) {
      if (selectedOption === 'skip' || selectedOption === 'add') {
        if (selectedOption === 'add') {
          const phone = extractPhone(userText);
          if (phone) {
            setCustomerData(prev => ({ ...prev, phone }));
          } else {
            return "Could you share your phone number?";
          }
        }
      } else {
        const phone = extractPhone(userText);
        if (phone) {
          setCustomerData(prev => ({ ...prev, phone }));
        }
      }

      setConversationStage('completed');
      setQuickSelectOptions(null);

      return `Perfect! Here's what I've noted:\n\n✅ Name: ${customerData.name}\n✅ Email: ${customerData.email}\n${customerData.phone ? `✅ Phone: ${customerData.phone}` : ''}\n✅ Property Type: ${customerData.propertyType}\n✅ Budget: ${customerData.budget}\n✅ Location: ${customerData.location}\n\nOne of our senior advisors will reach out within 24 hours with personalized recommendations! 🎉`;
    }

    return "That sounds interesting! Tell me more about what you're looking for.";
  };

  const handleSend = (selectedOption = null) => {
    if (!inputValue.trim() && !selectedOption) return;

    const messageText = selectedOption || inputValue;
    const userMsg = { id: Date.now(), type: 'user', text: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setQuickSelectOptions(null);

    setTimeout(() => {
      const botResponse = generateBotResponse(messageText, conversationStage, selectedOption);

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse
      }]);

      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
            Online • Expert assistance
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
            className="bg-white w-[90vw] sm:w-96 h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-premium-powder/30 mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-premium-blue to-premium-periwinkle p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <SafeIcon icon={FiMessageSquare} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Investment Assistant</h3>
                  <p className="text-xs text-white/80">Find your perfect property</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Close chat"
              >
                <SafeIcon icon={FiX} className="text-lg" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-premium-slate-50">
              <div className="text-xs text-center text-premium-charcoal/60 mb-2">
                💬 Responses within 24 hours • Your data is secure
              </div>

              {messages.map((msg, index) => (
                <ChatMessage key={msg.id} msg={msg} index={index} />
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-2">
                    <span className="w-2 h-2 bg-premium-blue/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-premium-blue/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-premium-blue/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Select Options */}
            {quickSelectOptions && (
              <div className="px-4 pt-2 space-y-2 border-t border-gray-100">
                {quickSelectOptions.map((option, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleSend(option.value)}
                    className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-premium-blue hover:text-white text-premium-blue border border-premium-blue/20 rounded-lg transition-all font-medium text-sm"
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 space-y-3">
              <div className="relative flex items-end gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  aria-label="Type your message"
                  className="flex-1 pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-premium-blue focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all text-sm text-premium-black placeholder-gray-400 resize-none"
                  rows="1"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                  className="p-3 bg-premium-blue text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-premium-blue transition-all flex-shrink-0"
                  title="Send message"
                >
                  <SafeIcon icon={FiSend} className="text-lg" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          aria-label="Open chat assistant"
          className="w-16 h-16 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-full shadow-lg shadow-premium-blue/40 flex items-center justify-center text-white relative group hover:shadow-xl transition-shadow"
        >
          <SafeIcon icon={FiMessageSquare} className="text-2xl" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>

          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-premium-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        </motion.button>
      )}
    </div>
  );
};

export default AIChatWidget;