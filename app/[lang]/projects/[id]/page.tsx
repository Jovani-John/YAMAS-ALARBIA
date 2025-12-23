'use client';

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMapPin, FiCalendar, FiLayers, FiTrendingUp, FiCheckCircle, FiClock, FiArrowLeft, FiX, FiChevronLeft, FiChevronRight, FiUser, FiDollarSign } from 'react-icons/fi';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// استيراد البيانات
import { getProjectById, projectCategories, type YamasProject } from '@/app/[lang]/projects/projects';

// ===== مشاريع الترجمة =====
const translations = {
  ar: {
    ProjectDetail: {
      notFound: 'المشروع غير موجود',
      backToProjects: 'العودة إلى المشاريع',
      back: 'رجوع',
      completed: 'مكتمل',
      ongoing: 'قيد التنفيذ',
      client: 'العميل',
      contractValue: 'القيمة التعاقدية',
      year: 'السنة',
      currency: 'ريال سعودي',
      description: 'تفاصيل المشروع',
      scope: 'نطاق العمل',
      gallery: 'معرض الصور',
      relatedProjects: 'مشاريع ذات صلة'
    }
  },
  en: {
    ProjectDetail: {
      notFound: 'Project Not Found',
      backToProjects: 'Back to Projects',
      back: 'Back',
      completed: 'Completed',
      ongoing: 'Ongoing',
      client: 'Client',
      contractValue: 'Contract Value',
      year: 'Year',
      currency: 'SAR',
      description: 'Project Description',
      scope: 'Scope of Work',
      gallery: 'Gallery',
      relatedProjects: 'Related Projects'
    }
  }
};

// ===== IMAGE LIGHTBOX COMPONENT =====
const ImageLightbox = ({ 
  images, 
  currentIndex, 
  onClose,
  onNext,
  onPrev,
  isRTL
}: { 
  images: string[]; 
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  isRTL: boolean;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') isRTL ? onNext() : onPrev();
      if (e.key === 'ArrowRight') isRTL ? onPrev() : onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, isRTL]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 90 }}
          onClick={onClose}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all`}
        >
          <FiX size={24} />
        </motion.button>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); isRTL ? onNext() : onPrev(); }}
          className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all`}
        >
          {isRTL ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); isRTL ? onPrev() : onNext(); }}
          className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all`}
        >
          {isRTL ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm"
        >
          {currentIndex + 1} / {images.length}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ===== RELATED PROJECTS COMPONENT =====
const RelatedProjects = ({ currentProject, isRTL, t }: { currentProject: YamasProject, isRTL: boolean, t: any }) => {
  // جلب المشاريع المشابهة
  const category = projectCategories.find(cat => cat.id === currentProject.category);
  const relatedProjects = category?.projects
    .filter(p => p.id !== currentProject.id)
    .slice(0, 3) || [];

  if (relatedProjects.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-[#49A799] rounded-full"
            />
            <h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {t.relatedProjects}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={`/${isRTL ? 'ar' : 'en'}/projects/${project.id}`}>
                <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <img
                    src={project.mainImage}
                    alt={isRTL ? project.title : project.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 
                      className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#49A799] transition-colors"
                      style={{ fontFamily: 'Alexandria, sans-serif' }}
                    >
                      {isRTL ? project.title : project.titleEn}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FiMapPin className="text-[#49A799]" />
                      <span>{isRTL ? project.location : project.locationEn}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '60px' }}
                      className="h-1 bg-[#49A799] mt-3 rounded-full"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== MAIN COMPONENT =====
export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const lang = params?.lang as string || 'ar';
  const project = getProjectById(projectId);

  const isRTL = lang === 'ar';
  const t = translations[lang as keyof typeof translations].ProjectDetail;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.notFound}
          </h1>
          <Link href={`/${lang}/projects`}>
            <button className="px-6 py-3 bg-[#49A799] text-white rounded-full hover:bg-[#3A8A7E] transition-colors">
              {t.backToProjects}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={project.mainImage}
            alt={isRTL ? project.title : project.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`absolute top-24 ${isRTL ? 'right-4 sm:right-6 lg:right-8' : 'left-4 sm:left-6 lg:left-8'} z-20`}
        >
          <Link href={`/${lang}/projects`}>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all group">
              <FiArrowLeft className={`group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              <span style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {t.back}
              </span>
            </button>
          </Link>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-end"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span 
                  className="px-4 py-1.5 bg-[#49A799]/20 backdrop-blur-md border border-[#49A799]/30 text-[#49A799] rounded-full text-sm font-semibold"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {isRTL ? project.categoryAr : project.categoryEn}
                </span>
                <div className={`flex items-center gap-2 px-4 py-1.5 backdrop-blur-md rounded-full ${
                  project.status === 'completed'
                    ? 'bg-emerald-500/20 border border-emerald-400/30'
                    : 'bg-amber-500/20 border border-amber-400/30'
                }`}>
                  {project.status === 'completed' ? (
                    <FiCheckCircle className="text-emerald-300" />
                  ) : (
                    <FiClock className="text-amber-300" />
                  )}
                  <span className="text-sm font-medium text-white">
                    {project.status === 'completed' ? t.completed : t.ongoing}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? project.title : project.titleEn}
              </h1>

              {/* Info */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-white">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-[#49A799]" size={20} />
                  <span className="text-lg" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    {isRTL ? project.location : project.locationEn}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-[#49A799]" size={20} />
                  <span className="text-lg">{project.year}</span>
                </div>
                {project.area && (
                  <div className="flex items-center gap-2">
                    <FiLayers className="text-[#49A799]" size={20} />
                    <span className="text-lg">{project.area}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Info Cards */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto -mt-20 relative z-10">
            
            {/* Client */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-[#49A799]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#49A799]/10 rounded-xl flex items-center justify-center">
                  <FiUser className="text-[#49A799]" size={24} />
                </div>
                <h3 
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t.client}
                </h3>
              </div>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? project.client : (project.clientEn || project.client)}
              </p>
            </motion.div>

            {/* Contract Value */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-emerald-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <FiDollarSign className="text-emerald-500" size={24} />
                </div>
                <h3 
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t.contractValue}
                </h3>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {parseFloat(project.contractValue.replace(/,/g, '')).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {t.currency}
              </p>
            </motion.div>

            {/* Year */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-blue-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <FiCalendar className="text-blue-500" size={24} />
                </div>
                <h3 
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t.year}
                </h3>
              </div>
              <p className="text-2xl font-bold text-gray-900">{project.year}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                viewport={{ once: true }}
                className="h-1 bg-[#49A799] rounded-full"
              />
              <h2 
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {t.description}
              </h2>
            </div>
            <p 
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {isRTL ? project.description : project.descriptionEn}
            </p>
          </motion.div>

          {/* Scope */}
          {project.scope && project.scope.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {t.scope}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isRTL ? project.scope : project.scopeEn).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-6 h-6 bg-[#49A799] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheckCircle className="text-white" size={14} />
                    </div>
                    <span 
                      className="text-gray-700"
                      style={{ fontFamily: 'Alexandria, sans-serif' }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#49A799] rounded-full"
                />
                <h2 
                  className="text-3xl sm:text-4xl font-bold text-gray-900"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}
                >
                  {t.gallery}
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setLightboxIndex(index)}
                  className="relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${isRTL ? project.title : project.titleEn} - ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-3xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <RelatedProjects currentProject={project} isRTL={isRTL} t={t} />

      {/* Lightbox */}
      {lightboxIndex !== null && project.images && (
        <ImageLightbox
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % project.images.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length)}
          isRTL={isRTL}
        />
      )}
    </main>
  );
}