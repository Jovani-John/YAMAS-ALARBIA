// app/[lang]/about/TimelineAboutSection.tsx
'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  HiStar,
  HiShieldCheck,
  HiDocumentDownload
} from 'react-icons/hi';
import { IconType } from 'react-icons';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface CertificateType {
  id: string;
  name: string;
  standard: string;
  year: string;
  description: string;
  driveLink: string;
  icon?: IconType;
}

interface TimelineSectionProps {
  data: {
    title: string;
    subtitle: string;
    items: TimelineItem[];
    certificates?: {
      items: CertificateType[];
    };
  };
}

const TimelineItemComponent = memo(({ 
  item, 
  index, 
  isLast 
}: { 
  item: TimelineItem; 
  index: number; 
  isLast: boolean;
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className={`flex gap-8 items-center ${isEven ? '' : 'flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block px-4 py-2 bg-linear-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-full text-sm font-bold mb-4">
            {item.year}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>
      
      <div className="relative">
        <motion.div
          className="w-16 h-16 bg-linear-to-br from-[#49A799] to-[#3A8A7E] rounded-full flex items-center justify-center shadow-xl z-10 relative"
          whileHover={{ scale: 1.2, rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <HiStar className="w-8 h-8 text-white" />
        </motion.div>
        {!isLast && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-linear-to-b from-[#49A799] to-transparent" />
        )}
      </div>
      
      <div className="flex-1" />
    </motion.div>
  );
});

TimelineItemComponent.displayName = 'TimelineItemComponent';

// مكون البطاقة للشهادة
const CertificateCard = memo(({ 
  certificate, 
  index 
}: { 
  certificate: CertificateType; 
  index: number; 
}) => {
  const IconComponent = certificate.icon || HiShieldCheck;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-linear-to-br from-[#49A799] to-[#3A8A7E] rounded-xl flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-[#49A799]/10 text-[#49A799] rounded-full text-xs font-bold mb-2">
              {certificate.year}
            </span>
            <h3 className="text-xl font-bold text-gray-900">{certificate.name}</h3>
          </div>
        </div>
        <HiStar className="w-6 h-6 text-yellow-400" />
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">المعيار</h4>
        <p className="text-lg font-bold text-gray-900">{certificate.standard}</p>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {certificate.description}
      </p>
      
      <a
        href={certificate.driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-xl hover:from-[#3A8A7E] hover:to-[#2E6D63] transition-all duration-300 font-semibold group"
      >
        <HiDocumentDownload className="w-5 h-5" />
        <span>مشاهدة الشهادة</span>
      </a>
    </motion.div>
  );
});

CertificateCard.displayName = 'CertificateCard';

const TimelineSection = memo(({ data }: TimelineSectionProps) => {
  return (
    <>
      {/* قسم الجدول الزمني */}
      <section className="py-24 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {data.title}
            </h2>
            <p className="text-xl text-[#49A799] font-semibold">
              {data.subtitle}
            </p>
          </motion.div>

          <div className="space-y-8">
            {data.items.map((item, index) => (
              <TimelineItemComponent 
                key={index} 
                item={item} 
                index={index} 
                isLast={index === data.items.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* قسم الشهادات - إذا كانت موجودة في البيانات */}
      {data.certificates && data.certificates.items && (
        <section className="py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-linear-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-full text-sm font-bold mb-4">
                شهادات ISO
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                شهادات الجودة والاعتمادات الدولية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نفتخر بحصولنا على شهادات ISO الدولية التي تؤكد التزامنا بأعلى المعايير العالمية في الجودة والسلامة والاستدامة
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.certificates.items.map((cert, index) => (
                <CertificateCard key={cert.id} certificate={cert} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-16 bg-linear-to-r from-[#49A799]/10 to-[#3A8A7E]/10 rounded-2xl p-8 border border-[#49A799]/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    تحتاج إلى نسخ معتمدة؟
                  </h3>
                  <p className="text-gray-600">
                    اتصل بقسم الجودة والامتثال للحصول على نسخ معتمدة من جميع الشهادات
                  </p>
                </div>
                <a
                  href="mailto:quality@yamas.com.sa"
                  className="px-8 py-3 bg-linear-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-xl hover:from-[#3A8A7E] hover:to-[#2E6D63] transition-all duration-300 font-semibold"
                >
                  تواصل مع قسم الجودة
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
});

TimelineSection.displayName = 'TimelineSection';

export default TimelineSection;