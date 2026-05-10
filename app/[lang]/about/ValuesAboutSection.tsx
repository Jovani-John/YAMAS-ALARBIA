'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface Value {
  icon: IconType;
  title: string;
  description: string;
}

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
        className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full overflow-hidden"
      >
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-[#49A799]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="relative w-16 h-16 bg-gradient-to-br from-[#49A799] to-[#3A8A7E] rounded-2xl flex items-center justify-center mb-6 shadow-xl"
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          <value.icon className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#49A799] transition-colors relative">
          {value.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed relative font-medium">
          {value.description}
        </p>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] rounded-full"
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

const ValuesSection = memo(({ data }: ValuesSectionProps) => {
  return (
    /* تم تقليل الـ padding العلوي إلى pt-4 والغينا الـ md:pt لتبدأ من الأعلى تماماً */
    <section className="pt-4 pb-24 md:pb-32 bg-white relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#49A799]/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #49A799 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* تم تقليل الهامش السفلي mb-12 لتقريب الكروت من العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* إزالة الـ overflow-hidden والـ y: 100 لجعل العنوان يظهر في مكانه فوراً */}
          <div className="mb-4">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {data.title}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-1 w-12 md:w-20 bg-gradient-to-l from-[#49A799] to-transparent rounded-full" />
            <p className="text-xl md:text-2xl text-[#49A799] font-bold">
              {data.subtitle}
            </p>
            <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-[#49A799] to-transparent rounded-full" />
          </motion.div>
        </motion.div>

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