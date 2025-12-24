import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ msg, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.type === 'user'
                        ? 'bg-premium-blue text-white rounded-tr-none shadow-md'
                        : 'bg-white border border-gray-200 text-premium-charcoal rounded-tl-none shadow-sm'
                    }`}
            >
                {msg.text}
            </div>
        </motion.div>
    );
};

export default ChatMessage;
