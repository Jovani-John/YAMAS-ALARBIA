'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

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

  // مضاعفة البراندات للحصول على حركة سلسة
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-gradient-to-r from-white via-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

      {/* Auto-Scrolling Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-24 items-center py-8"
          animate={{
            x: lang === 'ar' ? [0, -duplicatedBrands.length * 240] : [0, -duplicatedBrands.length * 240],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 150,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
              className="flex-shrink-0 w-40 h-28 md:w-48 md:h-36 flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 p-4 transition-all duration-300"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 will-change-transform pointer-events-none select-none filter grayscale hover:grayscale-0"
                  draggable="false"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/150x100/49A799/FFFFFF?text=' + brand.name;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-green-50/90 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-green-50/90 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-12">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
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
