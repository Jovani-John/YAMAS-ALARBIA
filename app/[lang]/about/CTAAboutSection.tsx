'use client';

import { memo, useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const CTASection = memo(() => {
  const params = useParams();
  const currentLang = (params?.lang as string) || 'ar';
  const isRTL = currentLang === 'ar';
  
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const content = {
    ar: {
      badge: '✦ ابدأ الآن',
      title: 'هل أنت مستعد لتحويل رؤيتك إلى واقع؟',
      subtitle: 'انضم إلى مئات الشريكات الذين وثقوا بنا لتنفيذ مشاريعهم الطموحة',
      button: 'ابدأ مشروعك الآن',
      features: [
        'استشارة مجانية',
        'تقييم فوري',
        'عروض أسعار شفافة'
      ]
    },
    en: {
      badge: '✦ Start Now',
      title: 'Ready to Transform Your Vision into Reality?',
      subtitle: 'Join hundreds of clients who trusted us to execute their ambitious projects',
      button: 'Start Your Project Now',
      features: [
        'Free Consultation',
        'Instant Assessment',
        'Transparent Pricing'
      ]
    }
  };

  const data = content[currentLang as keyof typeof content];
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring'as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      className="py-24 md:py-32 bg-gradient-to-br from-[#33364D] via-[#33364D] to-[#49A799] relative overflow-hidden" 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Elements */}
      {mounted && (
        <>
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 1, 0.2],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Large Floating Blobs */}
          <motion.div
            style={{ y, scale }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-[#49A799]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{ y: yReverse }}
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}

      {/* Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <motion.span
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-bold border border-white/20"
            >
              {data.badge}
            </motion.span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight px-4"
          >
            {data.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto px-4"
          >
            {data.subtitle}
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.5 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-[#49A799] rounded-full"
                />
                <span className="text-white text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={`/${currentLang}/contact`}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 20px 40px rgba(73, 167, 153, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-full text-base md:text-lg font-bold shadow-2xl hover:shadow-[#49A799]/50 transition-all overflow-hidden"
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                {data.button}
                {isRTL ? (
                  <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                )}
              </span>
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href={`/${currentLang}/projects`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full text-base md:text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              {isRTL ? 'شاهد أعمالنا' : 'View Our Work'}
            </motion.a>
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-10 right-10 w-16 h-16 border-4 border-white/20 rounded-lg rotate-45"
      />
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;