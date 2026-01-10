'use client';

import { useState, useEffect, useRef, memo } from 'react';
import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

// Memoized Stats Component
const StatsSection = memo(({ currentLang }: { currentLang: string }) => {
  const stats = [
    { number: '20+', label: currentLang === 'ar' ? 'مشروع منجز' : 'Projects' },
    { number: '24/7', label: currentLang === 'ar' ? 'دعم مستمر' : 'Outgoing Support' },
    { number: '100%', label: currentLang === 'ar' ? 'رضا الشركات' : 'Business Client Satisfaction' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="mt-16 grid grid-cols-3 gap-8 md:gap-12"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            {stat.number}
          </div>
          <div className="text-sm md:text-base text-white/80">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
});

StatsSection.displayName = 'StatsSection';

export default function HeroSection() {
  const params = useParams();
  const currentLang = (params?.lang as string) || 'ar';
  
  const texts = {
    ar: [
      'نبني المستقبل بأيدٍ سعودية',
      'رواد في مشاريع الإسكان',
      'جودة لا تُضاهى في كل مشروع',
      'شريكك الموثوق في التطوير العمراني',
    ],
    en: [
      'Building the Future with Saudi Hands',
      'Leaders in Housing & Infrastructure Projects',
      'Unmatched Quality in Every Project',
      'Your Trusted Partner in Urban Development',
    ]
  };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const heroPlaceholderRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initialize useScroll only after mount to avoid hydration issues
  const { scrollYProgress } = useScroll({
    target: isMounted ? heroPlaceholderRef : undefined,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Text rotation - الجملة كاملة بتظهر وتختفي
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const currentTexts = texts[currentLang as keyof typeof texts];
    
    // مدة بقاء كل جملة: 3.5 ثانية
    const displayDuration = 3500;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % currentTexts.length);
    }, displayDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentLang, isMounted]);

  // Reset when language changes
  useEffect(() => {
    setCurrentTextIndex(0);
  }, [currentLang]);

  // Optimized lazy load video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !videoLoaded) {
            video.src = '/videos/hero.mp4';
            video.load();
            setVideoLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [videoLoaded]);

  const isRTL = currentLang === 'ar';
  const currentTexts = texts[currentLang as keyof typeof texts];

  return (
    <>
      <section ref={heroPlaceholderRef} className="h-screen relative mt-20" />

      <motion.section
        style={{ opacity, scale }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10"
      >
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            style={{ 
              transform: 'translateZ(0)',
              willChange: 'auto',
            }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Company Logo/Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wider mb-2">
              {currentLang === 'ar' ? 'يماس العربية للمقاولات' : 'YAMAS CONSTRUCTION'}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#49A799] to-transparent mx-auto" />
          </motion.div>

          {/* Animated Text - الجملة كاملة */}
          <div className="min-h-[160px] md:min-h-[200px] flex items-center justify-center">
            {isMounted && (
              <motion.h1
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ 
                  textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                }}
              >
                {currentTexts[currentTextIndex]}
              </motion.h1>
            )}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href={`/${currentLang}/projects`}
              className="group relative px-8 py-4 bg-[#49A799] text-white rounded-full font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#49A799]/30 min-w-[200px] text-center"
            >
              <span className="relative z-10">
                {currentLang === 'ar' ? 'استكشف أعمالنا' : 'Explore Our Work'}
              </span>
              <div className="absolute inset-0 bg-[#3A8A7E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>

            <a
              href={`/${currentLang}/contact`}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-base sm:text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/50 min-w-[200px] text-center"
            >
              {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </a>
          </motion.div>

          {/* Stats */}
          <StatsSection currentLang={currentLang} />

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-white/80 cursor-pointer hover:text-white transition-colors"
            >
              <span className="text-sm font-light tracking-wider">
                {currentLang === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
              </span>
              <HiArrowDown className="text-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </motion.section>
    </>
  );
}