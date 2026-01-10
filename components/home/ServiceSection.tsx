'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOfficeBuilding, HiCog, HiColorSwatch, HiLightningBolt, HiCheckCircle } from 'react-icons/hi';

// تعريف النوع لـ stats
interface ServiceStats {
  projects: number;
  years: number;
  clients: number;
}

interface ServiceFeature {
  title: string;
  desc: string;
}

interface Service {
  icon: any;
  title: string;
  code: string;
  description: string;
  features: ServiceFeature[];
  stats: ServiceStats;
  gradient: string;
  image: string;
}

interface Content {
  badge: string;
  title: string;
  subtitle: string;
  ctaButton: string;
  stats: {
    projects: string;
    years: string;
    clients: string;
  };
  services: Service[];
}

export default function ServicesTabsSection() {
  const params = useParams();
  const currentLang = (params?.lang as string) || 'ar';
  const isRTL = currentLang === 'ar';

  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const content: Record<string, Content> = {
    ar: {
      badge: 'خدماتنا المتكاملة',
      title: 'نحول رؤيتك إلى واقع ملموس',
      subtitle: 'اختر الخدمة المناسبة لك واستكشف كيف نقدم حلول مبتكرة لكل مشروع',
      ctaButton: 'اطلب عرض سعر مجاني',
      stats: {
        projects: 'مشروع',
        years: 'دعم مستمر',
        clients: 'شركة'
      },
      services: [
        {
          icon: HiOfficeBuilding,
          title: 'أعمال البناء والتشييد',
          code: 'CBW',
          description: 'نقدم حلول بناء متكاملة للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة العالمية',
          features: [
            { title: 'الفلل والمجمعات السكنية', desc: 'تصاميم عصرية تناسب احتياجاتك' },
            { title: 'المباني التجارية والمولات', desc: 'مشاريع ضخمة بإدارة احترافية' },
            { title: 'المصانع والمستودعات', desc: 'بنية تحتية صناعية قوية' },
            { title: 'مشاريع البنية التحتية', desc: 'حلول مبتكرة للمشاريع الكبرى' }
          ],
          stats: { 
            projects: 250,
            years: 15,
            clients: 120
          },
          gradient: 'from-[#49A799] to-[#3A8A7E]',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
        },
        {
          icon: HiCog,
          title: 'المشاريع الكبرى',
          code: 'LSCBW',
          description: 'متخصصون في تنفيذ المشاريع الضخمة والمعقدة بكفاءة عالية وفي الوقت المحدد',
          features: [
            { title: 'الأبراج السكنية والتجارية', desc: 'ارتفاعات شاهقة بجودة عالية' },
            { title: 'الجامعات والمستشفيات', desc: 'مرافق تعليمية وصحية متطورة' },
            { title: 'المطارات ومحطات النقل', desc: 'مشاريع نقل عملاقة' },
            { title: 'المرافق الرياضية', desc: 'ملاعب واستادات حديثة' }
          ],
          stats: { 
            projects: 85,
            years: 10,
            clients: 45
          },
          gradient: 'from-[#16234E] to-[#0d1630]',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
        },
        {
          icon: HiColorSwatch,
          title: 'أعمال التشطيبات',
          code: 'FW',
          description: 'تشطيبات داخلية وخارجية بأرقى المواصفات والتصاميم العصرية التي تناسب ذوقك',
          features: [
            { title: 'الأرضيات والسيراميك', desc: 'أفخم أنواع البلاط والرخام' },
            { title: 'الدهانات والديكورات', desc: 'ألوان عصرية وتصاميم فريدة' },
            { title: 'الجبس والأسقف المعلقة', desc: 'أسقف ديكورية مبهرة' },
            { title: 'التكييف المركزي', desc: 'أنظمة تبريد حديثة' }
          ],
          stats: { 
            projects: 320,
            years: 8,
            clients: 180
          },
          gradient: 'from-[#49A799] to-[#3A8A7E]',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        },
        {
          icon: HiLightningBolt,
          title: 'الأعمال الكهروميكانيكية',
          code: 'MEP',
          description: 'أنظمة كهربائية وميكانيكية وصحية متكاملة وفق أحدث التقنيات العالمية',
          features: [
            { title: 'الأعمال الكهربائية والإنارة', desc: 'حلول طاقة ذكية' },
            { title: 'السباكة والصرف الصحي', desc: 'أنظمة صحية متطورة' },
            { title: 'أنظمة مكافحة الحريق', desc: 'سلامة قصوى' },
            { title: 'المصاعد والتيارات الخفيفة', desc: 'تكنولوجيا ذكية' }
          ],
          stats: { 
            projects: 190,
            years: 12,
            clients: 95
          },
          gradient: 'from-[#16234E] to-[#0d1630]',
          image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
        }
      ]
    },
    en: {
      badge: 'Our Comprehensive Services',
      title: 'Turning Your Vision Into Reality',
      subtitle: 'Choose the right service for you and discover how we deliver innovative solutions for every project',
      ctaButton: 'Request Free Quote',
      stats: {
        projects: 'Projects',
        years: 'Outgoing Support',
        clients: 'Company'
      },
      services: [
        {
          icon: HiOfficeBuilding,
          title: 'Construction & Building Works',
          code: 'CBW',
          description: 'We provide comprehensive construction solutions for residential, commercial and industrial projects with the highest international quality standards',
          features: [
            { title: 'Villas & Residential Compounds', desc: 'Modern designs that suit your needs' },
            { title: 'Commercial Buildings & Malls', desc: 'Large-scale projects with professional management' },
            { title: 'Factories & Warehouses', desc: 'Strong industrial infrastructure' },
            { title: 'Infrastructure Projects', desc: 'Innovative solutions for major projects' }
          ],
          stats: { 
            projects: 250,
            years: 15,
            clients: 120
          },
          gradient: 'from-[#49A799] to-[#3A8A7E]',
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
        },
        {
          icon: HiCog,
          title: 'Large Scale Projects',
          code: 'LSCBW',
          description: 'Specialized in executing large and complex projects with high efficiency and on schedule',
          features: [
            { title: 'Residential & Commercial Towers', desc: 'Towering heights with high quality' },
            { title: 'Universities & Hospitals', desc: 'Advanced educational and healthcare facilities' },
            { title: 'Airports & Transport Stations', desc: 'Giant transportation projects' },
            { title: 'Sports Facilities', desc: 'Modern stadiums and arenas' }
          ],
          stats: { 
            projects: 85,
            years: 10,
            clients: 45
          },
          gradient: 'from-[#16234E] to-[#0d1630]',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
        },
        {
          icon: HiColorSwatch,
          title: 'Finishing Works',
          code: 'FW',
          description: 'Interior and exterior finishes with the finest specifications and modern designs that suit your taste',
          features: [
            { title: 'Flooring & Ceramics', desc: 'Finest types of tiles and marble' },
            { title: 'Paints & Decorations', desc: 'Modern colors and unique designs' },
            { title: 'Gypsum & False Ceilings', desc: 'Stunning decorative ceilings' },
            { title: 'Central Air Conditioning', desc: 'Modern cooling systems' }
          ],
          stats: { 
            projects: 320,
            years: 8,
            clients: 180
          },
          gradient: 'from-[#49A799] to-[#3A8A7E]',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
        },
        {
          icon: HiLightningBolt,
          title: 'Electromechanical Works',
          code: 'MEP',
          description: 'Integrated electrical, mechanical and plumbing systems according to the latest global technologies',
          features: [
            { title: 'Electrical Works & Lighting', desc: 'Smart energy solutions' },
            { title: 'Plumbing & Drainage', desc: 'Advanced sanitary systems' },
            { title: 'Fire Fighting Systems', desc: 'Maximum safety' },
            { title: 'Elevators & Low Current', desc: 'Smart technology' }
          ],
          stats: { 
            projects: 190,
            years: 12,
            clients: 95
          },
          gradient: 'from-[#16234E] to-[#0d1630]',
          image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
        }
      ]
    }
  };

  const currentContent = content[currentLang];
  const services = currentContent.services;

  // Auto slide every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [services.length]);

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.7,
      rotateY: direction > 0 ? 90 : -90,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.7,
      rotateY: direction < 0 ? 90 : -90,
      filter: 'blur(10px)'
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Extract stats keys for iteration
  const statsKeys: (keyof ServiceStats)[] = ['projects', 'years', 'clients'];

  return (
    <section 
      className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden" 
      dir={isRTL ? 'rtl' : 'ltr'}
      aria-label={currentContent.badge}
    >
      
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #49A799 1px, transparent 0)',
            backgroundSize: '50px 50px',
            willChange: 'background-position'
          }} 
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Stagger Animation */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-5 py-2.5 bg-gradient-to-r from-[#49A799]/10 to-[#49A799]/20 text-[#49A799] rounded-full text-sm font-bold mb-5 shadow-sm"
          >
            {currentContent.badge}
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight px-6 sm:px-8 md:px-12 break-words max-w-6xl mx-auto"
          >
            {currentContent.title}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {currentContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Tabs Navigation - Grid Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-2">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => handleTabClick(index)}
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-full px-3 md:px-6 py-4 rounded-2xl transition-all duration-500 ${
                  activeTab === index 
                    ? `bg-gradient-to-br ${service.gradient} text-white shadow-2xl` 
                    : 'bg-white text-gray-700 hover:shadow-xl border-2 border-gray-100 hover:border-[#49A799]/30'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                  <motion.div
                    animate={activeTab === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  </motion.div>
                  <div className="text-center md:text-right w-full">
                    <div className="font-bold text-xs md:text-sm leading-tight">{service.title}</div>
                    <div className={`text-[10px] md:text-xs mt-0.5 ${activeTab === index ? 'text-white/90' : 'text-gray-500'}`}>
                      {service.code}
                    </div>
                  </div>
                </div>
                
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)',
                    }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="relative" role="region" aria-live="polite">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 150, damping: 22 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
                rotateY: { duration: 0.6 },
                filter: { duration: 0.4 }
              }}
              style={{ 
                perspective: '2000px',
                willChange: 'transform, opacity'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Image & Stats */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.85, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl group order-2 lg:order-1"
                  style={{ minHeight: '400px' }}
                >
                  <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                    <img 
                      src={services[activeTab].image}
                      alt={services[activeTab].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${services[activeTab].gradient} opacity-50 group-hover:opacity-60 transition-opacity duration-500`} />
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        {statsKeys.map((key, i) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              delay: 0.5 + i * 0.15,
                              type: 'spring',
                              stiffness: 200
                            }}
                            className="text-center"
                          >
                            <motion.div 
                              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1"
                              whileHover={{ scale: 1.2, color: '#49A799' }}
                            >
                              {services[activeTab].stats[key]}
                            </motion.div>
                            <div className="text-xs md:text-sm text-white/90 font-medium">
                              {currentContent.stats[key]}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: isRTL ? -70 : 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
                  >
                    <motion.div 
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${services[activeTab].gradient} text-white rounded-full text-sm font-bold mb-5 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {services[activeTab].code}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {services[activeTab].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {services[activeTab].description}
                    </motion.p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {services[activeTab].features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: isRTL ? -60 : 60, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            delay: 0.6 + idx * 0.12,
                            type: 'spring',
                            stiffness: 120
                          }}
                          whileHover={{ 
                            scale: 1.03, 
                            x: isRTL ? 8 : -8,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                          }}
                          className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-white hover:to-gray-50 transition-all cursor-pointer border border-gray-100 hover:border-[#49A799]/30"
                        >
                          <motion.div 
                            className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${services[activeTab].gradient} flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                          >
                            <HiCheckCircle className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{feature.title}</h4>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, type: 'spring' }}
                      whileHover={{ scale: 1.08, y: -5, boxShadow: '0 20px 40px rgba(73, 167, 153, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full md:w-auto px-8 py-4 bg-gradient-to-r ${services[activeTab].gradient} text-white rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all`}
                    >
                      {currentContent.ctaButton}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <motion.div 
          className="flex justify-center gap-3 mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleTabClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <motion.div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-[#49A799] to-[#3A8A7E] w-10 shadow-lg' 
                    : 'bg-gray-300 w-3 group-hover:w-6 group-hover:bg-[#49A799]/50'
                }`}
                animate={activeTab === index ? { 
                  boxShadow: ['0 0 0 0 rgba(73, 167, 153, 0.7)', '0 0 0 10px rgba(73, 167, 153, 0)']
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Performance optimizations */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}