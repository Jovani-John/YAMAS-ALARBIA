'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// استيراد ستايلات Swiper
import 'swiper/css';
import 'swiper/css/navigation';

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
  // { name: 'Zain', logo: '/images/Brands/14.png' },
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
  const isRTL = lang === 'ar';

  const translations = {
    ar: {
      title: "شركاء النجاح",
      subtitle: "الشركات والمؤسسات التي وثقت بنا",
    },
    en: {
      title: "Success Partners",
      subtitle: "Companies and institutions that trusted us",
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.ar;

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'Alexandria, sans-serif' }}>
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'Alexandria, sans-serif' }}>
            {t.subtitle}
          </p>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[#49A799] to-transparent mt-4 rounded-full" />
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-16">
        
        {/* أزرار التحكم - Navigation Buttons */}
        <button className="swiper-prev-btn absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-lg rounded-full border border-gray-100 text-[#49A799] hover:bg-[#49A799] hover:text-white transition-all duration-300 cursor-pointer group">
          <FiChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
        </button>
        
        <button className="swiper-next-btn absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-lg rounded-full border border-gray-100 text-[#49A799] hover:bg-[#49A799] hover:text-white transition-all duration-300 cursor-pointer group">
          <FiChevronRight size={28} className="group-hover:scale-110 transition-transform" />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          dir={isRTL ? 'rtl' : 'ltr'}
          key={lang}
          navigation={{
            nextEl: '.swiper-next-btn',
            prevEl: '.swiper-prev-btn',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 35 },
            1280: { slidesPerView: 6, spaceBetween: 45 },
          }}
          className="py-12 px-2"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="flex items-center justify-center bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-50 p-6 h-36 md:h-44 transition-all duration-500 cursor-grab active:cursor-grabbing"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/150x100/49A799/FFFFFF?text=' + brand.name;
                  }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}