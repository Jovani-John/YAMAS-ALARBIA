'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMapPin, FiCalendar, FiLayers, FiTrendingUp, FiCheckCircle, FiClock, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// استيراد البيانات من الملف الأصلي
import { projectCategories, type YamasProject, type ProjectCategory } from '@/app/[lang]/projects/projects';

// ===== مشاريع الترجمة =====
const translations = {
  ar: {
    status: {
      completed: 'مكتمل',
      ongoing: 'قيد التنفيذ'
    },
    currency: 'ريال سعودي',
    stats: {
      projects: 'مشروع',
      completed: 'مكتمل',
      ongoing: 'قيد التنفيذ',
      million: 'مليون'
    },
    hero: {
      subtitle: 'ملحمة البناء السعودي',
      title: 'مشاريع نماس العربية',
      description: 'مشاريع رائدة في بناء مستقبل المملكة بتقنيات حديثة وتصاميم مبتكرة',
      stats: {
        totalProjects: 'المشاريع الإجمالية',
        completed: 'مشاريع مكتملة',
        ongoing: 'مشاريع جارية',
        billion: 'مليار'
      }
    }
  },
  en: {
    status: {
      completed: 'Completed',
      ongoing: 'Ongoing'
    },
    currency: 'SAR',
    stats: {
      projects: 'Projects',
      completed: 'Completed',
      ongoing: 'Ongoing',
      million: 'Million'
    },
    hero: {
      subtitle: 'Saudi Construction Epic',
      title: 'YAMAS ALARBIA Projects',
      description: 'Pioneering projects in building the future of the Kingdom with modern technologies and innovative designs',
      stats: {
        totalProjects: 'Total Projects',
        completed: 'Completed Projects',
        ongoing: 'Ongoing Projects',
        billion: 'Billion'
      }
    }
  }
};

// ===== PROJECT CARD COMPONENT =====
const ProjectCard = ({ 
  project, 
  index,
  isRTL,
  t
}: { 
  project: YamasProject; 
  index: number;
  isRTL: boolean;
  t: any;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/${isRTL ? 'ar' : 'en'}/projects/${project.id}`}>
        <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
          
          {/* صورة المشروع */}
          <div className="absolute inset-0">
            <img
              src={project.mainImage}
              alt={isRTL ? project.title : project.titleEn}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          </div>

          {/* Status Badge */}
          <div className={`absolute top-4 z-10 ${isRTL ? 'left-4' : 'right-4'}`}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md ${
                project.status === 'completed' 
                  ? 'bg-emerald-500/20 border border-emerald-400/30' 
                  : 'bg-amber-500/20 border border-amber-400/30'
              }`}
            >
              {project.status === 'completed' ? (
                <FiCheckCircle className="text-emerald-300 text-sm" />
              ) : (
                <FiClock className="text-amber-300 text-sm" />
              )}
              <span className="text-xs font-medium text-white">
                {project.status === 'completed' 
                  ? t.status.completed
                  : t.status.ongoing
                }
              </span>
            </motion.div>
          </div>

          {/* محتوى البطاقة */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            
            {/* القيمة التعاقدية */}
            <motion.div
              initial={{ x: isRTL ? -20 : 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: isRTL ? -20 : 20, opacity: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="mb-3"
            >
              <div className="inline-flex items-center gap-2 bg-[#49A799]/20 backdrop-blur-md border border-[#49A799]/30 px-3 py-1.5 rounded-full">
                <FiTrendingUp className="text-[#49A799] text-sm" />
                <span className="text-sm font-semibold text-white">
                  {parseFloat(project.contractValue.replace(/,/g, '')).toLocaleString()} {t.currency}
                </span>
              </div>
            </motion.div>

            {/* العنوان */}
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#49A799] transition-colors duration-300"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {isRTL ? project.title : project.titleEn}
            </motion.h3>

            {/* الوصف */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-sm text-gray-300 mb-4 line-clamp-2"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {isRTL ? project.description : project.descriptionEn}
            </motion.p>

            {/* التفاصيل */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex flex-wrap gap-3 text-sm text-gray-300"
            >
              <div className="flex items-center gap-1.5">
                <FiMapPin className="text-[#49A799]" />
                <span style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {isRTL ? project.location : project.locationEn}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCalendar className="text-[#49A799]" />
                <span>{project.year}</span>
              </div>
              {project.area && (
                <div className="flex items-center gap-1.5">
                  <FiLayers className="text-[#49A799]" />
                  <span>{project.area}</span>
                </div>
              )}
            </motion.div>

            {/* خط ديناميكي */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="h-1 bg-[#49A799] mt-4 rounded-full"
            />
          </div>

          {/* Overlay عند الـ Hover */}
          <div className="absolute inset-0 bg-[#49A799]/0 group-hover:bg-[#49A799]/10 transition-all duration-500 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
};

// ===== CATEGORY SECTION COMPONENT =====
const CategorySection = ({ 
  category, 
  index,
  isRTL,
  t
}: { 
  category: ProjectCategory; 
  index: number;
  isRTL: boolean;
  t: any;
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  const stats = {
    total: category.projects.length,
    completed: category.projects.filter(p => p.status === 'completed').length,
    ongoing: category.projects.filter(p => p.status === 'ongoing').length,
    totalValue: category.projects.reduce((sum, p) => 
      sum + parseFloat(p.contractValue.replace(/,/g, '')), 0
    )
  };

  return (
    <section 
      ref={sectionRef}
      id={category.id}
      className="py-16 sm:py-20 lg:py-24 scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            
            {/* العنوان والوصف */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {isRTL ? category.nameAr : category.nameEn}
                </h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 max-w-2xl"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? category.description : category.descriptionEn}
              </motion.p>
            </div>

            {/* إحصائيات القسم */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -30 : 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4" style={{ borderColor: '#49A799' }}>
                <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {t.stats.projects}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-emerald-500">
                <div className="text-2xl font-bold text-gray-900">{stats.completed}</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {t.stats.completed}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-amber-500">
                <div className="text-2xl font-bold text-gray-900">{stats.ongoing}</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {t.stats.ongoing}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-[#49A799]">
                <div className="text-xl font-bold text-gray-900">
                  {(stats.totalValue / 1000000).toFixed(1)}{t.stats.million}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {t.currency}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {category.projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx}
              isRTL={isRTL}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== STICKY NAVIGATION =====
const StickyNav = ({ 
  categories,
  activeCategory,
  isRTL
}: { 
  categories: ProjectCategory[];
  activeCategory: string;
  isRTL: boolean;
}) => {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#49A799] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              <span className="font-medium text-sm">
                {isRTL ? cat.nameAr : cat.nameEn}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {cat.projects.length}
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// ===== HERO SECTION =====
const ProjectsHero = ({ isRTL, t }: { isRTL: boolean; t: any }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // حساب إجمالي المشاريع والإحصائيات
  const totalStats = {
    projects: projectCategories.reduce((sum, cat) => sum + cat.projects.length, 0),
    completed: projectCategories.reduce((sum, cat) => 
      sum + cat.projects.filter(p => p.status === 'completed').length, 0),
    ongoing: projectCategories.reduce((sum, cat) => 
      sum + cat.projects.filter(p => p.status === 'ongoing').length, 0),
    totalValue: projectCategories.reduce((sum, cat) => 
      sum + cat.projects.reduce((pSum, p) => 
        pSum + parseFloat(p.contractValue.replace(/,/g, '')), 0), 0)
  };

  return (
<section
  ref={containerRef}
  className="relative min-h-screen flex items-center justify-center
             overflow-hidden
             bg-gradient-to-br from-gray-900 via-gray-800 to-[#49A799]"
>      
      {/* Background Pattern */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        {/* Overlay لتقليل شدة اللون */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
        
        {/* Circles for visual effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#49A799]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(73, 167, 153, 0.15) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Subtitle - مش محتاج animation هنا */}
          <div className="inline-block mb-8">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {t.hero.subtitle}
              </span>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {t.hero.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {totalStats.projects}
              </div>
              <div className="text-sm text-white/90 font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {t.hero.stats.totalProjects}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {totalStats.completed}
              </div>
              <div className="text-sm text-white/90 font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {t.hero.stats.completed}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {totalStats.ongoing}
              </div>
              <div className="text-sm text-white/90 font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {t.hero.stats.ongoing}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {(totalStats.totalValue / 1000000000).toFixed(1)}{t.hero.stats.billion}
              </div>
              <div className="text-sm text-white/90 font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {t.currency}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ===== MAIN COMPONENT =====
export default function YamasProjectsPage() {
  const params = useParams();
  const lang = params?.lang as string || 'ar';
  const isRTL = lang === 'ar';
  const t = translations[lang as keyof typeof translations];
  
  const [activeCategory, setActiveCategory] = useState(projectCategories[0]?.id || '');

  // تتبع القسم النشط أثناء التمرير
  useEffect(() => {
    const handleScroll = () => {
      const sections = projectCategories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      const current = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveCategory(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Hero Section */}
      <ProjectsHero isRTL={isRTL} t={t} />

      {/* Sticky Navigation */}
      <StickyNav 
        categories={projectCategories} 
        activeCategory={activeCategory}
        isRTL={isRTL}
      />

      {/* Category Sections */}
      {projectCategories.map((category, index) => (
        <CategorySection 
          key={category.id} 
          category={category} 
          index={index}
          isRTL={isRTL}
          t={t}
        />
      ))}

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-[#49A799] to-[#3A8A7E]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {isRTL ? 'هل لديك مشروع في ذهنك؟' : 'Have a Project in Mind?'}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {isRTL 
              ? 'دعنا نحول رؤيتك إلى واقع. تواصل معنا اليوم لمناقشة مشروعك القادم'
              : "Let's turn your vision into reality. Contact us today to discuss your next project"
            }
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href={`/${lang}/contact`}>
              <button className="group px-8 py-4 bg-white text-[#49A799] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 mx-auto">
                <span style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </span>
                <FiArrowRight className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}