'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useRef } from 'react';

const brands = [
  { name: 'ALARGAN', logo: '/images/Brands/1.png' },
  { name: 'TBS', logo: '/images/Brands/2.png' },
  { name: 'شركة تطوير المباني', logo: '/images/Brands/3.png' },
  { name: 'SUCCESS PARTNERS', logo: '/images/Brands/4.png' },
  { name: 'Gland', logo: '/images/Brands/5.png' },
  { name: 'Ministry of Health', logo: '/images/Brands/6.png' },
  { name: 'Ministry of Sport', logo: '/images/Brands/7.png' },
  { name: 'Ministry of Agriculture', logo: '/images/Brands/8.png' },
  { name: 'Saudi Aramco', logo: '/images/Brands/9.png' },
  { name: 'SABIC', logo: '/images/Brands/10.png' },
  { name: 'STC', logo: '/images/Brands/11.png' },
  { name: 'Almarai', logo: '/images/Brands/12.png' },
  { name: 'Mobily', logo: '/images/Brands/13.png' },
  { name: 'Zain', logo: '/images/Brands/14.png' },
  { name: 'Saudi Binladin Group', logo: '/images/Brands/15.png' },
  { name: 'Nesma', logo: '/images/Brands/16.png' },
  { name: 'El Seif', logo: '/images/Brands/17.png' },
  { name: 'Al Bawani', logo: '/images/Brands/18.png' },
  { name: 'Siemens', logo: '/images/Brands/19.png' },
  { name: 'Bosch', logo: '/images/Brands/20.png' },
  { name: 'ABB', logo: '/images/Brands/21.png' },
  { name: 'Schneider Electric', logo: '/images/Brands/22.png' },
];

export default function BrandsSlider() {
  const params = useParams();
  const lang = params?.lang as string || 'ar';
  const sliderRef = useRef<HTMLDivElement>(null);

  const translations = {
    ar: {
      title: "شركاء النجاح",
      subtitle: "الشركات والمؤسسات التي وثقت بنا",
      scrollHint: "← التمرير التلقائي ←"
    },
    en: {
      title: "Success Partners",
      subtitle: "Companies and institutions that trusted us",
      scrollHint: "← Auto Scrolling →"
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.ar;
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-gradient-to-r from-white via-green-50 to-white overflow-hidden">

      {/* CSS Animation مباشرة في الصفحة */}
      <style jsx global>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-track {
          animation: scrollLeft 60s linear infinite;
        }
        .brands-track.paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-3"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#49A799] to-transparent"
          />
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative w-full" style={{ overflow: 'hidden' }}>

        {/* الـ track نفسه هو اللي بيعمل hover */}
        <div
          ref={sliderRef}
          className="brands-track flex items-center py-8"
          style={{
            width: 'max-content',
            gap: '4rem',
          }}
          onMouseEnter={() => sliderRef.current?.classList.add('paused')}
          onMouseLeave={() => sliderRef.current?.classList.remove('paused')}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-28 md:w-48 md:h-36 flex items-center justify-center bg-white rounded-2xl shadow-lg border border-gray-200 p-4 cursor-pointer"
              style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1) translateY(-5px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1) translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain select-none"
                draggable="false"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/150x100/49A799/FFFFFF?text=' + brand.name;
                }}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays - pointer-events-none عشان متبلكش الهوفر */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-40 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, white, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-40 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, white, transparent)' }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-12">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="inline-flex items-center gap-3 text-gray-600 text-sm"
          style={{ fontFamily: 'Alexandria, sans-serif' }}
        >
          <div className="h-1 w-8 bg-[#49A799] rounded-full"></div>
          <span>{t.scrollHint}</span>
          <div className="h-1 w-8 bg-[#49A799] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}