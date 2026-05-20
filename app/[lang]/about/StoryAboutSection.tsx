'use client';

import { memo, useState, useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion'; 
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

  const cleanDescription = isRTL 
    ? "بدأت يماس العربية للمقاولات رحلتها برؤية واضحة: أن نكون الشريك الأكثر موثوقية في تحويل الأحلام إلى واقع ملموس. من خلال العمل الدؤوب، نجحنا في بناء سمعة قوية تقوم على الجودة والابتكار والالتزام."
    : "Yamas Al Arabia for Contracting began its journey with a clear vision: to be the most reliable partner in turning dreams into reality. Through diligent work, we have succeeded in building a strong reputation based on quality, innovation, and commitment.";

  const cleanDescription2 = isRTL
    ? "اليوم، نفخر بأننا أحد أبرز الشركات الرائدة في مجال المقاولات والإنشاءات، مع محفظة مشاريع متنوعة تشمل كافة القطاعات الحيوية. نحن نؤمن بأن كل مشروع هو فرصة لتقديم قيمة استثنائية لعملائنا وللمجتمع."
    : "Today, we are proud to be one of the leading companies in the field of contracting and construction, with a diverse portfolio of projects. We believe every project is an opportunity to provide exceptional value to our clients and the community.";

  // ✅ تحديد النوع بشكل صريح كـ Variants لمنع أي تعارض في TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  // ✅ تحديد النوع بشكل صريح كـ Variants وإضافة as const للـ ease
  const itemVariants: Variants = {
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
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-[#49A799]/10 to-[#3A8A7E]/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#49A799]/8 to-[#33364D]/8 rounded-full blur-xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #49A799 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <motion.div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#49A799] to-transparent rounded-full" />
            <motion.p className="text-lg sm:text-xl md:text-2xl text-[#49A799] font-bold text-center px-4">
              {data.subtitle}
            </motion.p>
            <motion.div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#49A799] to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* النصوص */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="space-y-8"
          >
            {/* النص الأول */}
            <div className="relative">
              <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 w-1 h-full bg-gradient-to-b from-[#49A799] to-transparent rounded-full`} />
              <p 
                className={`text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify ${
                  isRTL ? 'pr-6' : 'pl-6'
                }`}
              >
                {cleanDescription}
              </p>
            </div>

            {/* النص الثاني */}
            <div className="relative">
              <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 w-1 h-full bg-gradient-to-b from-[#49A799] to-transparent rounded-full`} />
              <p 
                className={`text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify ${
                  isRTL ? 'pr-6' : 'pl-6'
                }`}
              >
                {cleanDescription2}
              </p>
            </div>
          </motion.div>

          {/* الفيديو */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/10]">
              <video
                ref={videoRef}
                src="/videos/About.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              
              {/* زر التحكم في الفيديو */}
              <button
                onClick={togglePlay}
                className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm p-2.5 rounded-full hover:bg-black/70 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <HiPause className="text-white text-lg" />
                ) : (
                  <HiPlay className="text-white text-lg" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

StorySection.displayName = 'StorySection';

export default StorySection;