'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

interface WhySectionProps {
  data: {
    title: string;
    subtitle: string;
    features: string[];
  };
  isRTL: boolean;
}

const FeatureItem = memo(({ feature, index }: { feature: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-lg transition-all border border-white/20"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg"
      >
        <HiCheckCircle className="w-6 h-6 text-[#49A799]" />
      </motion.div>
      <p className="text-white font-medium leading-relaxed">
        {feature}
      </p>
    </motion.div>
  );
});

FeatureItem.displayName = 'FeatureItem';

const WhySection = memo(({ data, isRTL }: WhySectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-[#49A799] to-[#3A8A7E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-white/90 font-semibold">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

WhySection.displayName = 'WhySection';

export default WhySection;