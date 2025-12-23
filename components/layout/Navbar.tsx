'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
type NavLink = {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string }>;
};
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  
  // استخراج اللغة من الـ params (من الـ URL مباشرة)
  const currentLang = (params?.lang as string) || 'ar';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    ar: {
      links: [
        { name: 'الرئيسية', href: '/ar' },
        {
          name: 'نبذة عنا',
          href: '/ar/about',
          // dropdown: [
          //   { name: 'من نحن', href: '/ar/about/who-we-are' },
          //   { name: 'قصتنا', href: '/ar/about/our-story' },
          //   { name: 'مجلس الإدارة', href: '/ar/about/board' },
          //   { name: 'حوكمة الشركة', href: '/ar/about/governance' },
          // ]
        },
        { name: 'أعمالنا', href: '/ar/projects' },
        
        { name: 'تواصل معنا', href: '/ar/contact' },
      ]
    },
    en: {
      links: [
        { name: 'Home', href: '/en' },
        {
          name: 'About Us',
          href: '/en/about',
          // dropdown: [
          //   { name: 'Who We Are', href: '/en/about/who-we-are' },
          //   { name: 'Our Story', href: '/en/about/our-story' },
          //   { name: 'Board of Directors', href: '/en/about/board' },
          //   { name: 'Corporate Governance', href: '/en/about/governance' },
          // ]
        },
        { name: 'Our Work', href: '/en/projects' },
       
        { name: 'Contact Us', href: '/en/contact' },
      ]
    }
  };

const links: NavLink[] = navigation[currentLang as keyof typeof navigation].links;
  const isRTL = currentLang === 'ar';

  const toggleLanguage = () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    const currentPath = pathname.replace(/^\/(ar|en)/, '') || '';
    router.push(`/${newLang}${currentPath}`);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <a href={`/${currentLang}`} className="flex items-center">
                <img 
                  src="/images/logo/logo.png"
                  alt={isRTL ? 'يماس العربية للمقاولات' : 'Yamas Construction'}
                  className={`h-12 w-auto object-contain ${
                    isScrolled ? '' : 'brightness-0 invert'
                  }`}
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 group ${
                      isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-[#49A799]' 
                        : 'text-white hover:bg-white/10 hover:text-[#49A799]'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <HiChevronDown className={`transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </a>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden min-w-[240px] border border-white/20"
                          style={{ 
                            left: isRTL ? 'auto' : '0',
                            right: isRTL ? '0' : 'auto'
                          }}
                        >
                          {link.dropdown.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#49A799]/5 hover:text-[#49A799] transition-colors border-b border-gray-50 last:border-0"
                            >
                              {item.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className={`${isRTL ? 'mr-4' : 'ml-4'} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-[#49A799] text-white hover:bg-[#3A8A7E]`}
              >
                <MdLanguage className="text-lg" />
                {currentLang === 'ar' ? 'EN' : 'عربي'}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
                {links.map((link, index) => (
                  <div key={index}>
                    <button
                      onClick={() => {
                        if (link.dropdown) {
                          setActiveDropdown(activeDropdown === link.name ? null : link.name);
                        } else {
                          router.push(link.href);
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="w-full block px-4 py-3 text-black hover:bg-white/10 rounded-lg font-medium transition-colors text-right"
                    >
                      <div className="flex items-center justify-between">
                        {link.name}
                        {link.dropdown && (
                          <HiChevronDown className={`transition-transform ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`} />
                        )}
                      </div>
                    </button>
                    
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className={`space-y-1 ${isRTL ? 'mr-4' : 'ml-4'} mt-2`}>
                          {link.dropdown.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                router.push(item.href);
                                setIsMobileMenuOpen(false);
                              }}
                              className="w-full block px-4 py-2 text-sm text-white/80 hover:text-[#49A799] rounded-lg hover:bg-white/5 transition-colors text-right"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Switcher */}
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-4 px-4 py-3 bg-[#49A799] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#3A8A7E] transition-colors shadow-lg"
                >
                  <MdLanguage className="text-lg" />
                  {currentLang === 'ar' ? 'English' : 'عربي'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}