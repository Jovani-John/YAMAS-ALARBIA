'use client';

import { memo, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiPause } from 'react-icons/hi';

interface StorySectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    description2: string;
  };
  isRTL: boolean;
}

const StorySection = memo(({ data, isRTL }: StorySectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Static Background Elements - بدون حركة تسبب الهزة */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static gradient blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-[#49A799]/10 to-[#3A8A7E]/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#49A799]/8 to-[#33364D]/8 rounded-full blur-xl" />
        
        {/* Static Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #49A799 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="overflow-hidden mb-4 sm:mb-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#49A799] to-gray-900"
            >
              {data.title}
            </motion.h2>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6"
          >
            <motion.div
              variants={itemVariants}
              className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#49A799] to-transparent rounded-full"
            />
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-[#49A799] font-bold text-center px-4"
            >
              {data.subtitle}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#49A799] to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-3 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-[#49A799] to-transparent rounded-full" />
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed sm:leading-loose pl-4 sm:pl-6">
                {data.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-3 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-[#49A799] to-transparent rounded-full" />
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed sm:leading-loose pl-4 sm:pl-6">
                {data.description2}
              </p>
            </motion.div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="relative group"
          >
            <div 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]"
            >
              {/* Video */}
              <video
                ref={videoRef}
                src="/videos/About.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              
              {/* Play/Pause Button */}
              <motion.button
                onClick={togglePlay}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm sm:backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-full border border-white/30 sm:border-2 sm:border-white/50 hover:bg-white/30 transition-all duration-300 z-10"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <HiPause className="text-white text-2xl sm:text-3xl" />
                ) : (
                  <HiPlay className="text-white text-2xl sm:text-3xl ml-0.5" />
                )}
              </motion.button>

              {/* Decorative Border */}
              <div className="absolute inset-0 border border-white/20 sm:border-2 sm:border-white/30 rounded-2xl sm:rounded-3xl group-hover:border-[#49A799]/50 transition-all duration-300" />

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 border-t border-l border-white/30 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 border-b border-r border-white/30 rounded-br-lg" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-[#49A799] to-[#3A8A7E] text-white px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl z-20"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black">{isRTL ? '24/7' : '24/7'}</div>
              <div className="text-xs sm:text-sm font-medium">{isRTL ? 'دعم مستمر' : 'Outgoing Support'}</div>
            </motion.div>

            {/* Static Glow Background */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-[#49A799]/20 to-[#3A8A7E]/20 rounded-2xl sm:rounded-3xl blur-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

StorySection.displayName = 'StorySection';

export default StorySection;