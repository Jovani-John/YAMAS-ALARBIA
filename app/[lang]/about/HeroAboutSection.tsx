'use client';

import { useRef, memo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroSectionProps {
  data: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    cta: string;
  };
}

const HeroSection = memo(({ data }: HeroSectionProps) => {
  const heroRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-[#49A799]"
    >
      {/* Animated Background - Only render on client */}
      {mounted && (
        <div className="absolute inset-0">
          <motion.div style={{ y }} className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
      )}

      <motion.div 
        style={{ opacity }} 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-bold mb-8"
        >
          {data.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight"
        >
          {data.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#49A799] to-[#7DD3C0] bg-clip-text text-transparent mb-6 leading-tight"
        >
          {data.highlight}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          {data.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-full text-lg font-bold shadow-2xl hover:shadow-[#49A799]/50 transition-all"
        >
          {data.cta}
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {/* <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-2 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div> */}
      </motion.div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;