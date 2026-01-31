'use client';

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaSnapchat, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from 'next/navigation';

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yamas_alarabia?igsh=Z3lnNXJqNnp4emJq&utm_source=qr&fbclid=IwY2xjawO-GklleHRuA2FlbQIxMABicmlkETE3SGs0dXJQWTk0a2E1QkJRc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHo4uL1c-vbdmMjHUKOiuQ60Wlx9QTBtFNgcgpU7-BM4HPwoEsh1zFWlNX5OY_aem_-fuvmKJoPJJVMFaRTzAq8A",
  facebook: "https://www.facebook.com/profile.php?id=61555224520417&mibextid=wwXIfr&rdid=hdD5tmeJzmvwDhev&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16fV4rZJGS%2F%3Fmibextid%3DwwXIfr#",
  x: "https://x.com/yamasalarabia",
  linkedin: "https://www.linkedin.com/company/yamasarabia/",
  whatsapp: "https://wa.me/966500029933",
  tiktok: "https://www.tiktok.com/@yamasalarabia",
  snapchat: "https://www.snapchat.com/@yamasalarabia?fbclid=IwY2xjawO-Gp9leHRuA2FlbQIxMABicmlkETE3SGs0dXJQWTk0a2E1QkJRc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpc7sMPrIlQaFzzJC7yE6JX-3BQoxnVUayaV89T2FrAY-OrPHNJXzUaH5kvI_aem_Y5uTiohxm1D1Qwjke7cVSg",
} as const;

export default function Footer() {
  const params = useParams() as { lang?: string } | null;
  const currentLang = params?.lang || 'ar';
  const isRTL = currentLang === 'ar';

  const content = {
    ar: {
      vision: "شركة يماس العربية للمقاولات - رواد في مجال البناء والتطوير العمراني في المملكة العربية السعودية",
      
      // Main Contact Info
      ourPhone: "هاتفنا",
      phone1: "+966 56 419 1000",
      phone2: "+966 50 002 9933",
      crNumber: "سجل تجاري",
      cr: "1010806346",
      ourEmail: "بريدنا الإلكتروني",
      email: "info@yamas.com.sa",
      website: "الموقع الإلكتروني",
      websiteUrl: "www.yamas.com.sa",
      
      // Offices
      offices: "مكاتبنا",
      office1: {
        title: "فرع الرياض",
        address: "RAWA2938، طريق الدائري الشمالي تقاطع أبو بكر الصديق، حي الوادي، الرياض | المربع 6 - الدور الأول - مكتب 93"
      },
      office2: {
        title: "فرع الخبر",
        address: "EAD6389، طريق الملك فهد بن عبدالعزيز، الراكه الجنوبية، الخبر | برج ناصر الحجري - الدور السادس - مكتب 604"
      },
      office3: {
        title: "فرع البحرين",
        address: "الطريق 735، المجمع 907، الرفاع الشرقي، مملكة البحرين"
      },
      office4: {
        title: "فرع مصر - القاهرة",
        address: "مباني النرجس، التجمع الخامس، القاهرة الجديدة، جمهورية مصر العربية"
      },
      quickLinks: "روابط سريعة",
      links: {
        home: "الرئيسية",
        about: "نبذة عنا",
        projects: "أعمالنا",
        contact: "تواصل معنا"
      },
      contactInfo: "معلومات التواصل",
      followUs: "تابعنا على منصات التواصل الاجتماعي",
      haveProject: "لديك مشروع؟",
      helpYou: "نحن هنا لمساعدتك في تحويل رؤيتك إلى واقع",
      contactNow: "تواصل معنا الآن",
      rights: "جميع الحقوق محفوظة © 2025 يماس العربية للمقاولات",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام"
    },
    en: {
      vision: "Yamas Al Arabia Construction Company - Leaders in construction and urban development in Saudi Arabia",
      
      // Main Contact Info
      ourPhone: "Our Phone",
      phone1: "+966 56 419 1000",
      phone2: "+966 50 002 9933",
      crNumber: "C.R",
      cr: "1010806346",
      ourEmail: "Our Email",
      email: "info@yamas.com.sa",
      website: "Website",
      websiteUrl: "www.yamas.com.sa",
      
      // Offices
      offices: "Our Offices",
      office1: {
        title: "Riyadh Branch",
        address: "RAWA2938, Northern Ring Branch Cross Abu Bakr Al Siddiq Road, Al Wadi Dist., Riyadh | Square 6 - 1st Floor - Office 93"
      },
      office2: {
        title: "Khobar Branch",
        address: "EAD6389, King Fahad Ibn Abdulaziz Saud, Al Rakah Al Janubiyah Dist., Al Khobar | Nasser Al Hajri Tower NSH - 6th Floor - Office 604"
      },
      office3: {
        title: "Bahrain Branch",
        address: "Road 735, Block 907, East Riffa, Kingdom of Bahrain"
      },
      office4: {
        title: "Egypt Branch - Cairo",
        address: "Al Narges Buildings, Fifth Settlement, New Cairo, Arab Republic of Egypt"
      },
      
      quickLinks: "Quick Links",
      links: {
        home: "Home",
        about: "About Us",
        projects: "Our Work",
        contact: "Contact Us"
      },
      contactInfo: "Contact Information",
      followUs: "Follow us on social media",
      haveProject: "Have a Project?",
      helpYou: "We are here to help you turn your vision into reality",
      contactNow: "Contact Us Now",
      rights: "All Rights Reserved © 2025 Yamas Al Arabia Construction",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  } as const;

  const currentContent = content[currentLang as keyof typeof content];

  const QUICK_LINKS = [
    { name: currentContent.links.home, href: `/${currentLang}` },
    { name: currentContent.links.about, href: `/${currentLang}/about` },
    { name: currentContent.links.projects, href: `/${currentLang}/projects` },
    { name: currentContent.links.contact, href: `/${currentLang}/contact` },
  ];

  // Optimized Animation Variants
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay: 0.3 + custom * 0.08,
      },
    }),
  };

  const linkVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.4 + custom * 0.08,
        ease: "easeOut" as any,
      },
    }),
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.6 + custom * 0.1,
        ease: "easeOut" as any,
      },
    }),
  };

  return (
    <footer 
      className="relative bg-gradient-to-br from-[#49A799] via-[#3d9184] to-[#2d6b61] text-gray-900 overflow-hidden" 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '4s' }} />
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* First Row: Company Info + Social */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Company Info + Social Media */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={columnVariants}
            className="lg:col-span-1"
          >
            <div className="mb-4">
              <img
                src="/images/logo/logo.png"
                alt="Yamas Al Arabia Construction"
                width="140"
                height="56"
                className="h-14 w-auto object-contain brightness-0 mb-4"
                loading="lazy"
              />
            </div>

            <p className="text-gray-900 leading-relaxed text-base mb-4 font-medium">
              {currentContent.vision}
            </p>

            {/* Social Media */}
            <p className="text-gray-900 text-base mb-3 font-semibold">
              {currentContent.followUs}
            </p>

            <div className="flex flex-wrap gap-3">
              {Object.entries(SOCIAL_LINKS).map(([platform, url], index) => {
                const socialConfig = {
                  instagram: { Icon: FaInstagram, color: '#E4405F', bg: 'bg-[#E4405F]' },
                  facebook: { Icon: FaFacebook, color: '#1877F2', bg: 'bg-[#1877F2]' },
                  x: { Icon: FaXTwitter, color: '#000000', bg: 'bg-[#000000]' },
                  linkedin: { Icon: FaLinkedin, color: '#0A66C2', bg: 'bg-[#0A66C2]' },
                  whatsapp: { Icon: FaWhatsapp, color: '#25D366', bg: 'bg-[#25D366]' },
                  tiktok: { Icon: FaTiktok, color: '#000000', bg: 'bg-[#000000]' },
                  snapchat: { Icon: FaSnapchat, color: '#FFFC00', bg: 'bg-[#FFFC00]' },
                }[platform as keyof typeof SOCIAL_LINKS];

                if (!socialConfig) return null;

                const { Icon, bg } = socialConfig;

                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={socialVariants}
                    whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-lg ${bg} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    <Icon className={`text-xl ${platform === 'snapchat' ? 'text-black' : 'text-white'}`} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={columnVariants}
          >
            <h4 className="text-xl font-bold mb-3 text-gray-900">{currentContent.quickLinks}</h4>
            <div className="w-10 h-0.5 bg-gray-900 rounded-full mb-4" />
            
            <ul className="space-y-2">
              {QUICK_LINKS.map((link, index) => (
                <motion.li 
                  key={link.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={linkVariants}
                >
                  <a
                    href={link.href}
                    className="text-gray-900 hover:text-gray-700 transition-all flex items-center gap-2 group text-base font-medium"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-gray-900 transition-all"
                      whileHover={{ scale: 1.5, x: isRTL ? -3 : 3 }}
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={columnVariants}
          >
            <h4 className="text-xl font-bold mb-3 text-gray-900">{currentContent.contactInfo}</h4>
            <div className="w-10 h-0.5 bg-gray-900 rounded-full mb-4" />
            
            <div className="space-y-3">
              {/* Phone 1 */}
              <motion.div 
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
                className="flex items-start gap-3 group"
              >
                <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg flex-shrink-0 group-hover:bg-white/30 transition-all border border-gray-900/20">
                  <FaPhone className="text-gray-900 text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{currentContent.ourPhone}</p>
                  <a href={`tel:${currentContent.phone1.replace(/\s/g, '')}`} className="text-gray-800 hover:text-gray-900 transition-colors text-sm block" dir="ltr">
                    {currentContent.phone1}
                  </a>
                  <a href={`tel:${currentContent.phone2.replace(/\s/g, '')}`} className="text-gray-800 hover:text-gray-900 transition-colors text-sm block mt-1" dir="ltr">
                    {currentContent.phone2}
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
                className="flex items-start gap-3 group"
              >
                <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg flex-shrink-0 group-hover:bg-white/30 transition-all border border-gray-900/20">
                  <FaEnvelope className="text-gray-900 text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{currentContent.ourEmail}</p>
                  <a href={`mailto:${currentContent.email}`} className="text-gray-800 hover:text-gray-900 transition-colors text-sm" dir="ltr">
                    {currentContent.email}
                  </a>
                </div>
              </motion.div>

              {/* Website */}
              <motion.div 
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
                className="flex items-start gap-3 group"
              >
                <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg flex-shrink-0 group-hover:bg-white/30 transition-all border border-gray-900/20">
                  <FaGlobe className="text-gray-900 text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{currentContent.website}</p>
                  <a href={`https://${currentContent.websiteUrl}`} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition-colors text-sm" dir="ltr">
                    {currentContent.websiteUrl}
                  </a>
                </div>
              </motion.div>

              {/* CR Number */}
              <motion.div 
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
                className="flex items-start gap-3"
              >
                <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg flex-shrink-0 border border-gray-900/20">
                  <span className="text-gray-900 text-sm font-bold">CR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{currentContent.crNumber}</p>
                  <p className="text-gray-800 text-sm" dir="ltr">{currentContent.cr}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Offices Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h4 className="text-2xl font-bold mb-6 text-gray-900 text-center">{currentContent.offices}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Office 1 - Riyadh */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-gray-900 text-lg" />
                </div>
                <h5 className="font-bold text-gray-900 text-sm">{currentContent.office1.title}</h5>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed">{currentContent.office1.address}</p>
            </motion.div>

            {/* Office 2 - Khobar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-gray-900 text-lg" />
                </div>
                <h5 className="font-bold text-gray-900 text-sm">{currentContent.office2.title}</h5>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed">{currentContent.office2.address}</p>
            </motion.div>

            {/* Office 3 - Bahrain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-gray-900 text-lg" />
                </div>
                <h5 className="font-bold text-gray-900 text-sm">{currentContent.office3.title}</h5>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed">{currentContent.office3.address}</p>
            </motion.div>

            {/* Office 4 - Egypt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-gray-900 text-lg" />
                </div>
                <h5 className="font-bold text-gray-900 text-sm">{currentContent.office4.title}</h5>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed">{currentContent.office4.address}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="pt-6 border-t border-gray-900/20 flex flex-col md:flex-row justify-between items-center gap-3 text-sm"
        >
          <p className="text-gray-900 text-center md:text-left font-medium">
            {currentContent.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}