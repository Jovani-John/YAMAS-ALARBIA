'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChatAlt2 } from 'react-icons/hi'; 

interface Message {
  name: string;
  title: string;
  message: string;
  image?: string;
}

interface ManagementMessageProps {
  data: {
    title: string;
    subtitle: string;
    messages: Message[];
  };
  isRTL: boolean;
}

const MessageCard = memo(({ message, index, isRTL }: { message: Message; index: number; isRTL: boolean }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
        {/* Decorative Quote Icon */}
        <motion.div
          className="absolute top-6 left-6 text-[#49A799]/10 group-hover:text-[#49A799]/20 transition-colors"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <HiOutlineChatAlt2 className="w-16 h-16" />
        </motion.div>

        {/* Gradient Background Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#49A799]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Profile Section */}
          <div className="flex items-center gap-6 mb-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#49A799] to-[#3A8A7E] p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  {message.image ? (
                    <img
                      src={message.image}
                      alt={message.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-[#49A799]">
                      {message.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              {/* Status Badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#49A799] to-[#3A8A7E] rounded-full border-2 border-white shadow-md" />
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {message.name}
              </h3>
              <p className="text-[#49A799] font-semibold text-sm">
                {message.title}
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <p className="text-gray-700 leading-relaxed text-lg">
              {message.message}
            </p>
          </div>

          {/* Decorative Line */}
          <motion.div
            className="mt-6 h-1 bg-gradient-to-r from-[#49A799] to-transparent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
      </div>
    </motion.div>
  );
});

MessageCard.displayName = 'MessageCard';

const ManagementMessage = memo(({ data, isRTL }: ManagementMessageProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#49A799]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#49A799]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-full text-sm font-bold mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {data.title}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {data.subtitle}
          </h2>
        </motion.div>

        {/* Messages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.messages.map((message, index) => (
            <MessageCard key={index} message={message} index={index} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
});

ManagementMessage.displayName = 'ManagementMessage';

export default ManagementMessage;