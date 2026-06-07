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
        { name: 'نبذة عنا', href: '/ar/about' },
        { name: 'أعمالنا', href: '/ar/projects' },
        { name: 'تواصل معنا', href: '/ar/contact' },
      ]
    },
    en: {
      links: [
        { name: 'Home', href: '/en' },
        { name: 'About Us', href: '/en/about' },
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
            ? 'bg-white shadow-lg py-2' 
            : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm py-4'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0"
            >
              <a href={`/${currentLang}`} className="flex items-center">
                <img 
                  src="/images/logo/logo.png"
                  alt={isRTL ? 'يماس العربية للمقاولات' : 'Yamas Construction'}
                  // تم تكبير اللوجو هنا من h-12 إلى h-16 (أو h-20 إذا أردت حجماً أضخم)
                  className={`h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain transition-all duration-300 ${
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
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1 group ${
                      isScrolled 
                        ? 'text-gray-800 hover:bg-gray-100 hover:text-[#49A799]' 
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
                </div>
              ))}

              {/* Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className={`${isRTL ? 'mr-4' : 'ml-4'} px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 bg-[#49A799] text-white hover:bg-[#3A8A7E] shadow-md`}
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
                <HiX className="w-8 h-8" />
              ) : (
                <HiMenuAlt3 className="w-8 h-8" />
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
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-2">
                {links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      router.push(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg font-medium transition-colors text-right"
                  >
                    {link.name}
                  </button>
                ))}
                
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-4 px-4 py-4 bg-[#49A799] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <MdLanguage className="text-xl" />
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