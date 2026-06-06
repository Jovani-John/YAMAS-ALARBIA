'use client';

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaSnapchat, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from 'next/navigation';

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yamas_alarabia?igsh=Z3lnNXJqNnp4emJq&utm_source=qr&fbclid=IwY2xjawO-GklleHRuA2FlbQIxMABicmlkETE3SGs0dXJQWTk0a2E1QkJRc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHo4uL1c-vbdmMjHUKOiuQ60Wlx9QTBtFNgcgpU7-BM4HPwoEsh1zFWlNX5OY_aem_-fuvmKJoPJJVMFaRTzAq8A",
  facebook: "https://www.facebook.com/profile.php?id=61555224520417&mibextid=wwXIfr&rdid=hdD5tmeJzmvwDhev&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16fV4rZJGS%2F%3Fmibextid%3DwwXIfr#",
  x: "https://x.com/yamas_alarabia?s=11",
  linkedin: "https://www.linkedin.com/company/yamas-al-arabia-construction-contracting/",
  whatsapp: "https://wa.me/966500029933",
  tiktok: "https://www.tiktok.com/@yamas_alarabia?_r=1&_t=ZS-96QmCjoOwDv",
  snapchat: "https://www.snapchat.com/@yamasalarabia?fbclid=IwY2xjawO-Gp9leHRuA2FlbQIxMABicmlkETE3SGs0dXJQWTk0a2E1QkJRc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpc7sMPrIlQaFzzJC7yE6JX-3BQoxnVUayaV89T2FrAY-OrPHNJXzUaH5kvI_aem_Y5uTiohxm1D1Qwjke7cVSg",
} as const;

export default function Footer() {
  const params = useParams() as { lang?: string } | null;
  const currentLang = params?.lang || 'ar';
  const isRTL = currentLang === 'ar';

  const content = {
    ar: {
      vision: "شركة يماس العربية للمقاولات - رواد في مجال البناء والتطوير العمراني في المملكة العربية السعودية",
      ourPhone: "هاتفنا",
      phone1: "",
      phone2: "+966 50 002 9933",
      crNumber: "سجل تجاري",
      cr: "1010806346",
      ourEmail: "بريدنا الإلكتروني",
      email: "info@yamas.com.sa",
      website: "الموقع الإلكتروني",
      websiteUrl: "www.yamas.com.sa",
      offices: "مكاتبنا",
      office1: { title: "فرع الرياض", address: "RAWA2938، طريق الدائري الشمالي تقاطع أبو بكر الصديق، حي الوادي، الرياض | المربع 6 - الدور الأول - مكتب 93" },
      office2: { title: "فرع الخبر", address: "EAD6389، طريق الملك فهد بن عبدالعزيز، الراكه الجنوبية، الخبر | برج ناصر الهاجري  - الدور السادس - مكتب 604" },
      office3: { title: "فرع البحرين", address: "الطريق 735، المجمع 907، الرفاع الشرقي، مملكة البحرين" },
      office4: { title: "فرع مصر - القاهرة", address: "مباني النرجس، التجمع الخامس، القاهرة الجديدة، جمهورية مصر العربية" },
      quickLinks: "روابط سريعة",
      links: { home: "الرئيسية", about: "نبذة عنا", projects: "أعمالنا", contact: "تواصل معنا" },
      contactInfo: "معلومات التواصل",
      followUs: "تابعنا على منصات التواصل الاجتماعي",
      rights: "جميع الحقوق محفوظة © 2026 شركة يماس العربية للمقاولات",
    },
    en: {
      vision: "Yamas Al Arabia Construction Company - Leaders in construction and urban development in Saudi Arabia",
      ourPhone: "Our Phone",
      phone1: "",
      phone2: "+966 50 002 9933",
      crNumber: "C.R",
      cr: "1010806346",
      ourEmail: "Our Email",
      email: "info@yamas.com.sa",
      website: "Website",
      websiteUrl: "www.yamas.com.sa",
      offices: "Our Offices",
      office1: { title: "Riyadh Branch", address: "RAWA2938, Northern Ring Branch Cross Abu Bakr Al Siddiq Road, Al Wadi Dist., Riyadh | Square 6 - 1st Floor - Office 93" },
      office2: { title: "Khobar Branch", address: "EAD6389, King Fahad Ibn Abdulaziz Saud, Al Rakah Al Janubiyah Dist., Al Khobar | Nasser Al Hajri Tower NSH - 6th Floor - Office 604" },
      office3: { title: "Bahrain Branch", address: "Road 735, Block 907, East Riffa, Kingdom of Bahrain" },
      office4: { title: "Egypt Branch - Cairo", address: "Al Narges Buildings, Fifth Settlement, New Cairo, Arab Republic of Egypt" },
      quickLinks: "Quick Links",
      links: { home: "Home", about: "About Us", projects: "Our Work", contact: "Contact Us" },
      contactInfo: "Contact Information",
      followUs: "Follow us on social media",
      rights: "All Rights Reserved © 2026 Yamas Al Arabia Construction",
    }
  } as const;

  const currentContent = content[currentLang as keyof typeof content];

  const QUICK_LINKS = [
    { name: currentContent.links.home, href: `/${currentLang}` },
    { name: currentContent.links.about, href: `/${currentLang}/about` },
    { name: currentContent.links.projects, href: `/${currentLang}/projects` },
    { name: currentContent.links.contact, href: `/${currentLang}/contact` },
  ];

  const socialEntries = Object.entries(SOCIAL_LINKS);
  const firstRowIcons = socialEntries.slice(0, 4);
  const secondRowIcons = socialEntries.slice(4, 7);

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2, ease: "easeOut" as const },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 260, damping: 20, delay: 0.3 + custom * 0.08 },
    }),
  };

  const linkVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.4 + custom * 0.08, ease: "easeOut" as const },
    }),
  };

  return (
    <footer 
      className="relative bg-gradient-to-br from-[#49A799] via-[#3d9184] to-[#2d6b61] text-gray-900 overflow-hidden" 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Company Info + Social Icons */}
          <motion.div 
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={columnVariants}
            className="lg:col-span-1"
          >
            <div className="mb-8">
              <img
                src="/images/logo/logo.png"
                alt="Yamas Al Arabia Construction"
                width="240"
                height="96"
                className="h-20 md:h-28 w-auto object-contain brightness-0"
                loading="lazy"
              />
            </div>
            <p className="text-gray-900 leading-relaxed text-base mb-6 font-medium">
              {currentContent.vision}
            </p>
            <p className="text-gray-900 text-base mb-4 font-semibold">{currentContent.followUs}</p>
            
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                {firstRowIcons.map(([platform, url], index) => {
                  const socialConfig = {
                    instagram: { Icon: FaInstagram, bg: 'bg-[#E4405F]' },
                    facebook: { Icon: FaFacebook, bg: 'bg-[#1877F2]' },
                    x: { Icon: FaXTwitter, bg: 'bg-[#000000]' },
                    linkedin: { Icon: FaLinkedin, bg: 'bg-[#0A66C2]' },
                    whatsapp: { Icon: FaWhatsapp, bg: 'bg-[#25D366]' },
                    tiktok: { Icon: FaTiktok, bg: 'bg-[#000000]' },
                    snapchat: { Icon: FaSnapchat, bg: 'bg-[#FFFC00]' },
                  }[platform as keyof typeof SOCIAL_LINKS];
                  if (!socialConfig) return null;
                  const { Icon, bg } = socialConfig;
                  return (
                    <motion.a
                      key={platform} href={url} target="_blank" rel="noopener noreferrer" custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={socialVariants}
                      whileHover={{ scale: 1.15, rotate: 5, y: -5 }} whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-lg ${bg} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <Icon className={`text-xl ${platform === 'snapchat' ? 'text-black' : 'text-white'}`} />
                    </motion.a>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-3">
                {secondRowIcons.map(([platform, url], index) => {
                  const socialConfig = {
                    instagram: { Icon: FaInstagram, bg: 'bg-[#E4405F]' },
                    facebook: { Icon: FaFacebook, bg: 'bg-[#1877F2]' },
                    x: { Icon: FaXTwitter, bg: 'bg-[#000000]' },
                    linkedin: { Icon: FaLinkedin, bg: 'bg-[#0A66C2]' },
                    whatsapp: { Icon: FaWhatsapp, bg: 'bg-[#25D366]' },
                    tiktok: { Icon: FaTiktok, bg: 'bg-[#000000]' },
                    snapchat: { Icon: FaSnapchat, bg: 'bg-[#FFFC00]' },
                  }[platform as keyof typeof SOCIAL_LINKS];
                  if (!socialConfig) return null;
                  const { Icon, bg } = socialConfig;
                  return (
                    <motion.a
                      key={platform} href={url} target="_blank" rel="noopener noreferrer" custom={index + 4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={socialVariants}
                      whileHover={{ scale: 1.15, rotate: 5, y: -5 }} whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-lg ${bg} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <Icon className={`text-xl ${platform === 'snapchat' ? 'text-black' : 'text-white'}`} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={columnVariants}
            className="lg:col-span-1 pt-8 lg:pt-12"
          >
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{currentContent.quickLinks}</h4>
            <div className="w-12 h-1 bg-gray-900/30 rounded-full mb-6" />
            <ul className="space-y-3">
              {QUICK_LINKS.map((link, index) => (
                <motion.li key={link.name} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={linkVariants}>
                  <a href={link.href} className="text-gray-900 hover:text-white transition-all flex items-center gap-3 group text-base md:text-lg font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-900 group-hover:bg-white transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info - تم تعديل المربعات هنا */}
          <motion.div 
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={columnVariants}
            className="lg:col-span-1 pt-8 lg:pt-12"
          >
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{currentContent.contactInfo}</h4>
            <div className="w-12 h-1 bg-gray-900/30 rounded-full mb-6" />
            <div className="space-y-4">
              
              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-white/20 rounded-lg border border-gray-900/10 flex items-center justify-center">
                  <FaPhone className="text-gray-900 text-base" />
                </div>
                <div>
                  <p className="font-bold text-base text-gray-900">{currentContent.ourPhone}</p>
                  <a href={`tel:${currentContent.phone2.replace(/\s/g, '')}`} className="text-gray-800 text-sm md:text-base block mt-1 font-medium" dir="ltr">{currentContent.phone2}</a>
                </div>
              </div>
              
              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-white/20 rounded-lg border border-gray-900/10 flex items-center justify-center">
                  <FaEnvelope className="text-gray-900 text-base" />
                </div>
                <div>
                  <p className="font-bold text-base text-gray-900">{currentContent.ourEmail}</p>
                  <a href={`mailto:${currentContent.email}`} className="text-gray-800 text-sm md:text-base font-medium">{currentContent.email}</a>
                </div>
              </div>
              
              {/* CR Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-white/20 rounded-lg border border-gray-900/10 flex items-center justify-center">
                  <span className="text-gray-900 text-xs font-bold tracking-tighter">CR</span>
                </div>
                <div>
                  <p className="font-bold text-base text-gray-900">{currentContent.crNumber}</p>
                  <p className="text-gray-800 text-sm md:text-base font-medium" dir="ltr">{currentContent.cr}</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Offices Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-900 text-center">{currentContent.offices}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[currentContent.office1, currentContent.office2, currentContent.office3, currentContent.office4].map((office, idx) => (
              <motion.div 
                key={idx} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}
                className="bg-white/15 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt className="text-gray-900 text-base" />
                  <h5 className="font-bold text-gray-900 text-base md:text-lg">{office.title}</h5>
                </div>
                <p className="text-gray-800 text-xs md:text-sm leading-relaxed font-medium">{office.address}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-900/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-900 text-sm md:text-base font-bold text-center md:text-left">{currentContent.rights}</p>
        </div>
      </div>
    </footer>
  );
}