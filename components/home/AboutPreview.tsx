'use client';

import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { HiCheckCircle, HiOfficeBuilding, HiUserGroup, HiGlobe, HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { memo, useMemo, useRef } from 'react';
import { IconType } from 'react-icons';

// Memoized Counter Component with animation
const AnimatedCounter = memo(({ value }: { value: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ display: 'inline-block' }}
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {value}
          </motion.span>
        </motion.span>
      )}
    </div>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

// Define Stat type
interface StatType {
  icon: IconType;
  number: string;
  label: string;
}

// Memoized Stat Card with 3D effect
const StatCard = memo(({ stat, index }: { stat: StatType; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#49A799]/5 to-[#49A799]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Icon with rotation effect */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-[#49A799] to-[#3A8A7E] rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.5 }}
          >
            <stat.icon className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Number with counter animation */}
          <div className="text-4xl font-bold text-gray-900 mb-2">
            <AnimatedCounter value={stat.number} />
          </div>
          
          {/* Label */}
          <div className="text-sm font-medium text-gray-600 text-center">
            {stat.label}
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#49A799]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
});

StatCard.displayName = 'StatCard';

// Enhanced Feature Item with slide animation
const FeatureItem = memo(({ feature, index }: { feature: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
    >
      <motion.div
        className="shrink-0 w-8 h-8 bg-gradient-to-br from-[#49A799] to-[#3A8A7E] rounded-lg flex items-center justify-center shadow-md"
        whileHover={{ 
          scale: 1.2,
          rotate: 360
        }}
        transition={{ duration: 0.6 }}
      >
        <HiCheckCircle className="w-5 h-5 text-white" />
      </motion.div>
      <span className="text-gray-700 font-medium leading-relaxed group-hover:text-[#49A799] transition-colors">
        {feature}
      </span>
    </motion.div>
  );
});

FeatureItem.displayName = 'FeatureItem';

// Define Content Type
type Language = 'ar' | 'en';
type ContentType = {
  [key in Language]: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    stats: StatType[];
    features: string[];
  };
};

// Main Component
export default function AboutSection() {
  const params = useParams();
  const currentLang = ((params?.lang as string) || 'ar') as Language;
  const isRTL = currentLang === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const content: ContentType = useMemo(() => ({
    ar: {
      badge: '✦ من نحن',
      title: 'نبني المستقبل',
      titleHighlight: 'بخبرة وثقة',
      description: 'يماس العربية للمقاولات رائدة في مجال الإنشاءات منذ تأسيسها. نحن ملتزمون بالتميز والابتكار في تقديم خدمات البناء عالية الجودة. مع التركيز على الجودة والسلامة والاستدامة، أصبحنا الشريك الموثوق للعملاء الباحثين عن خدمات إنشائية متميزة.',
      cta: 'اكتشف المزيد',
      stats: [
        { icon: HiOfficeBuilding, number: '20+', label: 'مشروع منجز' },
        { icon: HiUserGroup, number: '24/7', label: 'دعم مستمر' },
        { icon: HiGlobe, number: '4', label: 'فروع دولية' },
        { icon: HiCheckCircle, number: '10+', label: 'المشاريع التنفيزية' },
      ],
      features: [
        'معايير جودة عالمية معتمدة من ISO',
        'فريق هندسي متخصص ومحترف',
        'التزام صارم بالمواعيد المحددة',
        'حلول مبتكرة ومستدامة بيئياً',
      ]
    },
    en: {
      badge: '✦ About Us',
      title: 'Building the Future',
      titleHighlight: 'with Experience and Trust',
      description: 'Yamas Al Arabia Construction has been a pioneer in the construction field since its inception. We are committed to excellence and innovation in delivering high-quality construction services. With a focus on quality, safety, and sustainability, we have become a trusted partner for clients seeking exceptional construction services.',
      cta: 'Discover More',
      stats: [
        { icon: HiOfficeBuilding, number: '20+', label: 'Completed Projects' },
        { icon: HiUserGroup, number: '15+', label: 'Years Experience' },
        { icon: HiGlobe, number: '4', label: 'International Branches' },
        { icon: HiCheckCircle, number: '100%', label: 'Business Client Satisfaction' },
      ],
      features: [
        'ISO-Certified International Quality Standards',
        'Specialized Professional Engineering Team',
        'Strict Commitment to Deadlines',
        'Innovative & Environmentally Sustainable Solutions',
      ]
    }
  }), []);

  const data = content[currentLang];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
      dir={isRTL ? 'rtl' : 'ltr'}
      aria-labelledby="about-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#49A799]/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#49A799]/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating Dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#49A799]/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#49A799] rounded-full text-sm font-bold shadow-lg border border-[#49A799]/20"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(73, 167, 153, 0.2)' }}
          >
            {data.badge}
          </motion.span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex flex-col justify-center order-2 lg:order-1 lg:-mt-32"
          >
            {/* Title with gradient */}
            <h2 
              ref={titleRef}
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6"
            >
              <motion.span 
                className="block text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {data.title}
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-[#49A799] to-[#3A8A7E] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {data.titleHighlight}
              </motion.span>
            </h2>

            {/* Description */}
            <motion.p 
              className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {data.description}
            </motion.p>

            {/* Features Grid */}
            <div className="space-y-2 mb-8 lg:mb-10">
              {data.features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href={`/${currentLang}/about`}
                className="group inline-flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-full font-bold text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#3A8A7E] to-[#49A799]"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{data.cta}</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {isRTL ? <HiArrowLeft className="w-5 h-5" /> : <HiArrowRight className="w-5 h-5" />}
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Video & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Video Card */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              style={{ scale }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] w-full">
                <video
                  src="/videos/About.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ willChange: 'transform' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Decorative Border */}
                <div className="absolute inset-0 border-4 border-[#49A799]/0 group-hover:border-[#49A799]/50 rounded-3xl transition-all duration-300" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <p className="text-sm font-bold text-[#49A799]">★★★★★</p>
              </motion.div>
            </motion.div>

            {/* Stats Grid - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
              {data.stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid - Shown on mobile below content */}
        <div className="grid grid-cols-2 gap-4 mt-12 lg:hidden">
          {data.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}