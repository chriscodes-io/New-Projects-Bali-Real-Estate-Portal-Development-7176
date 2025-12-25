import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import SafeIcon from '../../common/SafeIcon';
import * as FaIcons from 'react-icons/fa';
import ChatMessage from './ChatMessage';

const {
  FaCommentDots, FaPaperPlane, FaTimes, FaRobot, FaUser
} = FaIcons;

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Vercel AI SDK Hook
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: "Hello! 👋 I'm your Bali Investment Guide. I can help you find villas, resorts, or answer questions about the market. How can I assist you today?"
      }
    ]
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  return (
    <div className={`fixed z-50 flex flex-col items-end ${isOpen ? 'inset-0 md:inset-auto md:bottom-6 md:right-6' : 'bottom-6 right-6'}`}>

      {/* Reassurance Label (Desktop Only) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mb-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-premium-blue/20 text-sm font-medium text-premium-charcoal hidden md:flex items-center gap-2"
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
            className={`bg-white shadow-2xl flex flex-col overflow-hidden border border-premium-powder/30 
              w-full h-full md:w-96 md:h-[600px] md:rounded-2xl md:mb-4`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-premium-blue to-premium-periwinkle p-4 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <SafeIcon icon={FaRobot} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Investment Guide</h3>
                  <p className="text-xs text-white/80">Powered by Gemini 2.0</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
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
                <ChatMessage
                  key={msg.id}
                  msg={{ ...msg, type: msg.role === 'user' ? 'user' : 'bot', text: msg.content }}
                  index={index}
                  icon={msg.role === 'user' ? FaUser : FaRobot}
                />
              ))}

              {isLoading && (
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

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 space-y-3 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="relative flex items-end gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about ROI, locations, or specific villas..."
                  className="flex-1 pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-premium-blue focus:ring-2 focus:ring-premium-blue/20 outline-none transition-all text-sm text-premium-black placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-premium-blue text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-all cursor-pointer"
                  aria-label="Send message"
                >
                  <SafeIcon icon={FaPaperPlane} className="text-lg" />
                </button>
              </form>
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
          className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-premium-blue to-premium-periwinkle rounded-full shadow-lg shadow-premium-blue/40 flex items-center justify-center text-white relative group hover:shadow-xl transition-shadow cursor-pointer"
          aria-label="Open support chat"
        >
          <SafeIcon icon={FaCommentDots} className="text-xl md:text-2xl" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </motion.button>
      )}
    </div>
  );
};

export default AIChatWidget;