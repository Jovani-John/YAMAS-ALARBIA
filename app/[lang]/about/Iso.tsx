'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiAward, FiEye } from 'react-icons/fi';
import Image from 'next/image';

// ===== تعريف الـ Props بشكل صحيح =====
interface Certificate {
  id: string;
  standard: string;
  titleAr: string;
  titleEn: string;
  color: string;
  borderColor: string;
  imageUrl: string;
}

interface ISOSectionProps {
  lang?: 'ar' | 'en';
  data: {
    certificates: Certificate[];
    certifyingBody: string;
    accreditation: string;
  };
}

// ===== بطاقة الشهادة =====
const CertCard = ({
  cert,
  index,
  isRTL,
}: {
  cert: Certificate;
  index: number;
  isRTL: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative bg-white rounded-2xl shadow-lg border-t-4 ${cert.borderColor} overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col`}
    >
      {/* حاوية الصورة */}
      <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden cursor-pointer">
        {isImageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <FiAward className="text-gray-400 animate-bounce" size={40} />
          </div>
        )}

        <Image
          src={cert.imageUrl}
          alt={isRTL ? cert.titleAr : cert.titleEn}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
            isImageLoading ? 'scale-95 blur-sm' : 'scale-100 blur-0'
          }`}
          onLoadingComplete={() => setIsImageLoading(false)}
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 text-gray-900 p-4 rounded-full shadow-xl flex items-center justify-center"
          >
            <FiEye size={24} style={{ color: cert.color }} />
          </motion.div>
        </div>
      </div>

      {/* تفاصيل الشهادة */}
      <div className="p-6 relative z-10 bg-white flex-grow flex flex-col justify-between">
        <div>
          <h3
            className="text-xl font-black mb-1"
            style={{ color: cert.color, fontFamily: 'Alexandria, sans-serif' }}
          >
            {cert.standard}
          </h3>
          <p
            className="text-gray-600 font-medium text-sm"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {isRTL ? cert.titleAr : cert.titleEn}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span
            className="text-xs font-semibold text-emerald-600"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {isRTL ? 'شهادة سارية المفعول' : 'Valid Certificate'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ===== المكوّن الرئيسي المعدل =====
export default function ISOSection({ lang = 'ar', data }: ISOSectionProps) {
  const isRTL = lang === 'ar';
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  // استخدام البيانات القادمة من props
  const certificates = data.certificates;

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== الهيدر ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#49A799]/10 border border-[#49A799]/30 px-4 py-2 rounded-full mb-6"
          >
            <FiAward className="text-[#49A799]" size={18} />
            <span
              className="text-sm font-semibold text-[#49A799]"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              {isRTL ? 'امتياز مُعتمد في الجودة' : 'Certified Excellence in Quality'}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-tight"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? (
                  <>
                 امتياز مٌعتمد{' '}
                    <span className="text-[#49A799]">في الجودة</span>
                  </>
                ) : (
                  <>
                    Globally{' '}
                    <span className="text-[#49A799]">Guaranteed Quality</span>
                  </>
                )}
              </h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL
                  ? 'إن حصولنا على شهادة ISO 9001 : 2015 يتجاوز كونه وساماً شرفياً؛ فهو تعهُّد صريح بأن كل خطوة من انبثاق الرؤية الأولى وحتى تسليم المفاتيح تتم وفق منظومة جودة صارمة تخضع للمراجعة والتدقيق المستمرين.'
                  : 'Our ISO 9001:2015 certification goes beyond a mere accolade — it is an explicit commitment that every step from concept to key handover follows a rigorous quality management system subject to ongoing review and audit.'}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
              className="flex-shrink-0"
            >
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto lg:mx-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-4 border-dashed border-[#49A799]/30"
                />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#49A799] to-[#2E7A71] flex flex-col items-center justify-center shadow-xl">
                  <FiAward size={32} className="text-white mb-1" />
                  <span className="text-white font-black text-sm tracking-wider">ISO</span>
                  <span className="text-white/80 text-xs font-medium">CERTIFIED</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 h-px bg-gradient-to-r from-[#49A799] via-gray-200 to-transparent origin-right"
            style={{ transformOrigin: isRTL ? 'right' : 'left' }}
          />
        </motion.div>

        {/* ===== شبكة بطاقات الشهادات ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} isRTL={isRTL} />
          ))}
        </div>

        {/* ===== معلومات الجهة المُصدِرة ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 bg-gradient-to-br from-[#33364D] to-[#49A799]/80 rounded-2xl text-white"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p
                className="text-sm text-white/70 mb-1"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {isRTL ? 'الجهة المُصدِرة للشهادات' : 'Certifying Body'}
              </p>
              <h4
                className="text-lg font-bold"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                {data.certifyingBody}
              </h4>
              <p className="text-sm text-white/70 mt-1">
                {data.accreditation}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <span className="text-xs font-black text-white">UAF</span>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <span className="text-xs font-black text-white">IAF</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}