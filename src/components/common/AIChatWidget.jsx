import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FaIcons from 'react-icons/fa';
import ChatMessage from './ChatMessage';

const {
  FaCommentDots, FaPaperPlane, FaTimes, FaRobot, FaUser, FaHome, FaBuilding, FaQuestionCircle, FaCheckCircle
} = FaIcons;

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! 👋 I'm your Bali Investment Guide. I can help you find villas, resorts, or answer questions about the market. How can I assist you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState({
    stage: 'open', // open, property_type, budget, location, contact, complete
    data: {
      interest: null,
      budget: null,
      location: null,
      name: null,
      email: null,
      phone: null
    }
  });

  const [quickSelectOptions, setQuickSelectOptions] = useState([
    { label: 'Find a Villa 🏡', value: 'I want to find a villa' },
    { label: 'Resort Investment 🏨', value: 'I am interested in resorts' },
    { label: 'Market Info 📈', value: 'Tell me about the market' }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, quickSelectOptions, isTyping]);

  // Extract email
  const extractEmail = (text) => {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const matches = text.match(emailRegex);
    return matches ? matches[0] : null;
  };

  // Logic to process user input
  const processInput = (text, context) => {
    const lowerText = text.toLowerCase();
    let nextStage = context.stage;
    let newData = { ...context.data };
    let responseText = "";
    let nextOptions = null;

    // --- STAGE: OPEN ---
    if (context.stage === 'open') {
      if (lowerText.includes('market') || lowerText.includes('trend') || lowerText.includes('info')) {
        responseText = "The Bali market is currently thriving, with high demand in regions like Uluwatu and Canggu. 📈\n\nAre you looking to invest in a private villa or a commercial resort?";
        nextStage = 'property_type';
        nextOptions = [
          { label: 'Private Villa', value: 'villa' },
          { label: 'Commercial Resort', value: 'resort' }
        ];
      } else if (lowerText.includes('villa') || lowerText.includes('house') || lowerText.includes('home')) {
        newData.interest = 'Villa';
        responseText = "Excellent choice. Villas offer great personal use and rental returns. 🏡\n\nDo you have a specific location in mind, or are you open to suggestions?";
        nextStage = 'location';
        nextOptions = [
          { label: 'Canggu', value: 'Canggu' },
          { label: 'Uluwatu', value: 'Uluwatu' },
          { label: 'Open to suggestions', value: 'any' }
        ];
      } else if (lowerText.includes('resort') || lowerText.includes('hotel')) {
        newData.interest = 'Resort';
        responseText = "Resorts are fantastic for hands-off passive income. 🏨\n\nWhich area do you prefer?";
        nextStage = 'location';
        nextOptions = [
          { label: 'Seminyak', value: 'Seminyak' },
          { label: 'Ubud', value: 'Ubud' },
          { label: 'Anywhere High Yield', value: 'any' }
        ];
      } else {
        // Fallback for generic open input
        responseText = "I'd love to help with that. To give you the best advice, are you interested in villas, resorts, or general land investment?";
        nextStage = 'property_type';
        nextOptions = [
          { label: 'Villas', value: 'villa' },
          { label: 'Resorts', value: 'resort' },
          { label: 'Land', value: 'land' }
        ];
      }
    }
    // --- STAGE: PROPERTY_TYPE ---
    else if (context.stage === 'property_type') {
      if (lowerText.includes('villa')) {
        newData.interest = 'Villa';
        responseText = "Villas are our specialty. 🌴\n\nWhat kind of budget are you working with?";
        nextStage = 'budget';
        nextOptions = [
          { label: 'Under $300k', value: '<300k' },
          { label: '$300k - $700k', value: '300k-700k' },
          { label: '$700k+', value: '700k+' }
        ];
      } else if (lowerText.includes('resort')) {
        newData.interest = 'Resort';
        responseText = "Resort units are high-yield performers. 💰\n\nWhat is your approximate investment budget?";
        nextStage = 'budget';
        nextOptions = [
          { label: 'Under $500k', value: '<500k' },
          { label: '$500k - $1M', value: '500k-1m' },
          { label: '$1M+', value: '1m+' }
        ];
      } else {
        newData.interest = 'Other';
        responseText = "Got it. And what location are you considering?";
        nextStage = 'location';
        nextOptions = [
          { label: 'Canggu', value: 'Canggu' },
          { label: 'Uluwatu', value: 'Uluwatu' },
          { label: 'Ubud', value: 'Ubud' }
        ];
      }
    }
    // --- STAGE: LOCATION ---
    else if (context.stage === 'location') {
      newData.location = text; // Capture loosely
      if (lowerText.includes('canggu')) newData.location = 'Canggu';
      if (lowerText.includes('uluwatu')) newData.location = 'Uluwatu';
      if (lowerText.includes('ubud')) newData.location = 'Ubud';

      responseText = `Great, ${newData.location || 'that location'} is very popular right now. ✨\n\nDo you have a budget range in mind?`;
      nextStage = 'budget';
      nextOptions = [
        { label: 'Under $300k', value: '<300k' },
        { label: '$300k - $800k', value: '300k-800k' },
        { label: '$800k+', value: '800k+' }
      ];
    }
    // --- STAGE: BUDGET ---
    else if (context.stage === 'budget') {
      newData.budget = text;
      responseText = "Perfect. I have a few specific opportunities that match that profile. 📋\n\nI can email them to you. What's the best email address?";
      nextStage = 'contact';
      nextOptions = null;
    }
    // --- STAGE: CONTACT ---
    else if (context.stage === 'contact') {
      const email = extractEmail(text);
      if (email) {
        newData.email = email;
        responseText = "Received! ✅ One last thing - may I have your name to address you properly?";
        nextStage = 'name';
        nextOptions = null;
      } else {
        responseText = "I didn't quite catch an email address there. Could you please double-check it? 🙏";
      }
    }
    // --- STAGE: NAME ---
    else if (context.stage === 'name') {
      newData.name = text;
      responseText = `Thanks ${text}! 🎉\n\nI've sent a curated selection to ${newData.email}. Our team will also review your requirements personally. Have a wonderful day!`;
      nextStage = 'complete';
      nextOptions = [
        { label: 'Start Over', value: 'start over' }
      ];
    }
    // --- STAGE: COMPLETE ---
    else if (context.stage === 'complete') {
      // Reset
      return processInput('hi', { stage: 'open', data: {} });
    }

    return { responseText, nextStage, newData, nextOptions };
  };

  const handleSend = (optionValue = null) => {
    const text = optionValue || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMsg = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setQuickSelectOptions(null); // Hide options while "thinking"

    // Simulate delay
    setTimeout(() => {
      const result = processInput(text, conversationContext);

      setConversationContext({
        stage: result.nextStage,
        data: result.newData
      });

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: result.responseText
      }]);

      setQuickSelectOptions(result.nextOptions);
      setIsTyping(false);

    }, 1000);
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
            Online • Ask us anything
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
                  <SafeIcon icon={FaRobot} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Investment Guide</h3>
                  <p className="text-xs text-white/80">AI Powered Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <SafeIcon icon={FaTimes} className="text-lg" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-premium-slate-50">
              <div className="text-xs text-center text-premium-charcoal/60 mb-2">
                Today
              </div>

              {messages.map((msg, index) => (
                <ChatMessage key={msg.id} msg={msg} index={index} icon={msg.type === 'bot' ? FaRobot : FaUser} />
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
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-premium-blue focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all text-sm text-premium-black placeholder-gray-400"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-premium-blue text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-all"
                  aria-label="Send message"
                >
                  <SafeIcon icon={FaPaperPlane} className="text-lg" />
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
          className="w-16 h-16 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-full shadow-lg shadow-premium-blue/40 flex items-center justify-center text-white relative group hover:shadow-xl transition-shadow"
          aria-label="Open support chat"
        >
          <SafeIcon icon={FaCommentDots} className="text-2xl" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </motion.button>
      )}
    </div>
  );
};

export default AIChatWidget;