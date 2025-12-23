'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface Value {
  icon: IconType;
  title: string;
  description: string;
}

// إزالة isRTL من الـ props إذا لم يكن مستخدماً
interface ValuesSectionProps {
  data: {
    title: string;
    subtitle: string;
    items: Value[];
  };
}

const ValueCard = memo(({ value, index }: { value: Value; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: 'spring',
        stiffness: 100
      }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ 
          y: -10,
          boxShadow: '0 25px 50px -12px rgba(73, 167, 153, 0.25)'
        }}
        transition={{ duration: 0.3 }}
        className="relative bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 h-full overflow-hidden"
      >
        {/* Background Decoration */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-[#49A799]/10 to-[#3A8A7E]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />

        {/* Icon Container */}
        <motion.div
          className="relative w-16 h-16 bg-linear-to-br from-[#49A799] to-[#3A8A7E] rounded-2xl flex items-center justify-center mb-6 shadow-xl"
          whileHover={{ 
            scale: 1.15, 
            rotate: 360,
            boxShadow: '0 20px 40px rgba(73, 167, 153, 0.4)'
          }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            <value.icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Icon Glow */}
          <motion.div
            className="absolute inset-0 bg-white rounded-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#49A799] transition-colors relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
        >
          {value.title}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-gray-600 leading-relaxed relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
        >
          {value.description}
        </motion.p>

        {/* Bottom Accent Line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#49A799] to-[#3A8A7E] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
});

ValueCard.displayName = 'ValueCard';

// إزالة variants واستخدام animate مباشرة
const ValuesSection = memo(({ data }: ValuesSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Static Background Elements - بدون حركة تسبب الهزة */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-[#49A799]/10 to-[#3A8A7E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-tr from-[#49A799]/10 to-[#33364D]/10 rounded-full blur-3xl" />
        
        {/* Static Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #49A799 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Title with Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-[#49A799] to-gray-900">
                {data.title}
              </span>
            </motion.h2>
          </div>

          {/* Subtitle with Lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 w-16 bg-linear-to-r from-transparent via-[#49A799] to-[#49A799] rounded-full"
            />
            <p className="text-xl md:text-2xl text-[#49A799] font-bold">
              {data.subtitle}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 w-16 bg-linear-to-r from-[#49A799] via-[#49A799] to-transparent rounded-full"
            />
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
            className="mt-8 mx-auto w-3 h-3 bg-[#49A799] rounded-full"
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

ValuesSection.displayName = 'ValuesSection';

export default ValuesSection;