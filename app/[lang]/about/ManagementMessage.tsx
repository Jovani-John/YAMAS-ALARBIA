'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group">
        {/* Gradient Background Effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#49A799]/5 via-transparent to-[#3A8A7E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Decorative Pattern */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#49A799]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#3A8A7E]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

        <div className={`relative z-10 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-0 h-full`}>
          {/* صورة الشخص - كبيرة بطول المربع */}
          <motion.div
            className="w-40 md:w-48 flex-shrink-0 relative"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="h-full relative overflow-hidden rounded-3xl">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
              
              {message.image ? (
                <motion.img
                  src={message.image}
                  alt={message.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#49A799] to-[#3A8A7E] flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">
                    {message.name.charAt(0)}
                  </span>
                </div>
              )}
              
              {/* Status Badge on Image */}
              <motion.div 
                className="absolute bottom-3 right-3 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-lg z-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* محتوى الرسالة */}
          <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
            {/* Header Section */}
            <div>
              {/* Quote Icon */}
              <motion.div
                className="mb-3"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#49A799] to-[#3A8A7E] flex items-center justify-center shadow-md">
                  <FaQuoteLeft className="w-3.5 h-3.5 text-white" />
                </div>
              </motion.div>

              {/* Name & Title */}
              <div className="mb-3">
                <motion.h3 
                  className="text-lg md:text-xl font-black text-gray-900 mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {message.name}
                </motion.h3>
                <motion.p 
                  className="text-[#49A799] font-bold text-xs md:text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {message.title}
                </motion.p>
              </div>

              {/* Decorative Line */}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-[#49A799] to-transparent rounded-full mb-3"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </div>

            {/* Message */}
            <motion.p 
              className="text-gray-700 leading-relaxed text-xs md:text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {message.message}
            </motion.p>
          </div>
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
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-[#49A799]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#3A8A7E]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-full text-sm font-bold mb-6 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {data.title}
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {data.subtitle}
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-2 mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#49A799] to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#49A799]" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#49A799] to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Messages Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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