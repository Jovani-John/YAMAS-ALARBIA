'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaSnapchat, FaLinkedin, FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yamas_alarabia?igsh=Z3lnNXJqNnp4emJq&utm_source=qr&fbclid=IwY2xjawO-GklleHRuA2FlbQIxMABicmlkETE3SGs0dXJQWTk0a2E1QkJRc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHo4uL1c-vbdmMjHUKOiuQ60Wlx9QTBtFNgcgpU7-BM4HPwoEsh1zFWlNX5OY_aem_-fuvmKJoPJJVMFaRTzAq8A",
  facebook: "https://www.facebook.com/profile.php?id=61555224520417&mibextid=wwXIfr&rdid=hdD5tmeJzmvwDhev&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16fV4rZJGS%2F%3Fmibextid%3DwwXIfr#",
  x: "https://x.com/yamasalarabia",
  linkedin: "https://www.linkedin.com/company/yamasarabia/",
  whatsapp: "https://wa.me/966500029933",
  tiktok: "https://www.tiktok.com/@yamasalarabia",
  snapchat: "https://www.snapchat.com/@yamasalarabia?fbclid=IwY2xjawO-Gp9leHRuA2FlbQIxMABicmlkETE3SGs0dXJQWTk0a2E1QkJRc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpc7sMPrIlQaFzzJC7yE6JX-3BQoxnVUayaV89T2FrAY-OrPHNJXzUaH5kvI_aem_Y5uTiohxm1D1Qwjke7cVSg",
} as const;

export default function ContactPage() {
  const params = useParams();
  const currentLang = (params?.lang as string) || 'ar';
  const isRTL = currentLang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    clientType: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const content = {
    ar: {
      title: 'تواصل معنا',
      heroTitle: 'نسعد بتواصلك معنا',
      subtitle: 'املأ النموذج وسنتواصل معك في أقرب وقت ممكن',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        clientType: 'نوع العميل',
        selectType: 'اختر نوع العميل',
        company: 'شركة',
        institution: 'مؤسسة',
        businessman: 'رجل أعمال',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...'
      },
      contactInfo: {
        title: 'معلومات التواصل',
        phone: 'الهاتف',
        phone1: '+966 56 419 1000',
        phone2: '+966 50 002 9933',
        email: 'البريد الإلكتروني',
        emailValue: 'info@yamas.com.sa',
        address: 'العنوان',
        riyadhAddress: 'RAWA2938، طريق الدائري الشمالي تقاطع أبو بكر الصديق، حي الوادي، الرياض | المربع 6 - الدور الأول - مكتب 93 ',
        khobarAddress: 'EAD6389، طريق الملك فهد بن عبدالعزيز، الرقة الجنوبية، الخبر | برج ناصر الحجري - الدور السادس - مكتب 604',
        follow: 'تابعنا على'
      },
      toast: {
        success: 'تم إرسال رسالتك بنجاح!',
        error: 'يرجى ملء جميع الحقول المطلوبة',
        failed: 'فشل في إرسال الرسالة. حاول مرة أخرى.'
      },
      mapTitle: 'مواقعنا',
      riyadhBranch: 'فرع الرياض',
      khobarBranch: 'فرع الخبر'
    },
    en: {
      title: 'Contact Us',
      heroTitle: 'Get In Touch With Us',
      subtitle: 'Fill out the form and we will get back to you as soon as possible',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        clientType: 'Client Type',
        selectType: 'Select Client Type',
        company: 'Company',
        institution: 'Institution',
        businessman: 'Businessman',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...'
      },
      contactInfo: {
        title: 'Contact Information',
        phone: 'Phone',
        phone1: '+966 56 419 1000',
        phone2: '+966 50 002 9933',
        email: 'Email',
        emailValue: 'info@yamas.com.sa',
        address: 'Address',
        riyadhAddress: 'RAWA2938, Northern Ring Branch Cross Abu Bakr Al Siddiq Road, Al Wadi Dist., Riyadh',
        khobarAddress: 'EAD6389, King Fahad Ibn Abdulaziz Saud, Al Rakah Al Janubiyah Dist., Al Khobar',
        follow: 'Follow Us'
      },
      toast: {
        success: 'Your message has been sent successfully!',
        error: 'Please fill in all required fields',
        failed: 'Failed to send message. Please try again.'
      },
      mapTitle: 'Our Locations',
      riyadhBranch: 'Riyadh Branch',
      khobarBranch: 'Khobar Branch'
    }
  };

  const t = content[currentLang as keyof typeof content];

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject) {
      toast.error(t.toast.error);
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '6c123e70-b648-423d-882b-da0fdfd7e8fe');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('clientType', formData.clientType);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        toast.success(t.toast.success);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          clientType: '',
          message: ''
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(t.toast.failed);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <ToastContainer position={isRTL ? 'top-left' : 'top-right'} rtl={isRTL} />

      {/* Hero Section with Parallax */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#33364D] via-[#49A799] to-[#3A8A7E]" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-[#49A799]/20 rounded-full blur-3xl"
        />

        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: 'spring' as const,
            stiffness: 100
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="overflow-hidden"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {t.title}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-32 h-1.5 bg-white/90 mx-auto rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 font-light"
          >
            {t.heroTitle}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20 relative">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#49A799] rounded-full blur-3xl"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden relative z-10"
        >
          {/* Form Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#49A799]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                initial={{ x: isRTL ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t.subtitle}
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] rounded-full mb-8"
              />

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-sm text-gray-700 mb-2 font-medium">
                      {t.form.name} *
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      animate={focusedField === 'name' ? { boxShadow: '0 0 0 3px rgba(73, 167, 153, 0.2)' } : {}}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all"
                      required
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-sm text-gray-700 mb-2 font-medium">
                      {t.form.email} *
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      animate={focusedField === 'email' ? { boxShadow: '0 0 0 3px rgba(73, 167, 153, 0.2)' } : {}}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-sm text-gray-700 mb-2 font-medium">
                      {t.form.phone}
                    </label>
                    <motion.input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      animate={focusedField === 'phone' ? { boxShadow: '0 0 0 3px rgba(73, 167, 153, 0.2)' } : {}}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all"
                      dir="ltr"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-sm text-gray-700 mb-2 font-medium">
                      {t.form.subject} *
                    </label>
                    <motion.input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      animate={focusedField === 'subject' ? { boxShadow: '0 0 0 3px rgba(73, 167, 153, 0.2)' } : {}}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all"
                      required
                    />
                  </motion.div>
                </div>

                {/* Client Type Selection */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    {t.form.clientType}
                  </label>
                  <motion.select
                    name="clientType"
                    value={formData.clientType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('clientType')}
                    onBlur={() => setFocusedField(null)}
                    animate={focusedField === 'clientType' ? { boxShadow: '0 0 0 3px rgba(73, 167, 153, 0.2)' } : {}}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all bg-white"
                  >
                    <option value="">{t.form.selectType}</option>
                    <option value="company">{t.form.company}</option>
                    <option value="institution">{t.form.institution}</option>
                    <option value="businessman">{t.form.businessman}</option>
                  </motion.select>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    {t.form.message}
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    animate={focusedField === 'message' ? { boxShadow: '0 0 0 3px rgba(73, 167, 153, 0.2)' } : {}}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all resize-none"
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      {t.form.sending}
                    </>
                  ) : (
                    <>
                      {t.form.submit}
                      <FiSend className={`text-lg ${isRTL ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#33364D] via-[#33364D] to-[#49A799] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#49A799]/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12"
                initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                {t.contactInfo.title}
              </motion.h2>

              <div className="space-y-8">
                {/* Phone */}
                <motion.div
                  initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                  whileHover={{ x: isRTL ? 10 : -10, scale: 1.05 }}
                  className="flex items-start gap-4 cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg group-hover:bg-white/30 transition-all"
                  >
                    <FiPhone className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">{t.contactInfo.phone}</p>
                    <a 
                      href={`tel:${t.contactInfo.phone1.replace(/\s/g, '')}`}
                      className="text-lg font-semibold hover:text-white/80 transition-colors block"
                      dir="ltr"
                    >
                      {t.contactInfo.phone1}
                    </a>
                    <a 
                      href={`tel:${t.contactInfo.phone2.replace(/\s/g, '')}`}
                      className="text-lg font-semibold hover:text-white/80 transition-colors block mt-1"
                      dir="ltr"
                    >
                      {t.contactInfo.phone2}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: isRTL ? 10 : -10, scale: 1.05 }}
                  className="flex items-start gap-4 cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg group-hover:bg-white/30 transition-all"
                  >
                    <FiMail className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">{t.contactInfo.email}</p>
                    <a 
                      href={`mailto:${t.contactInfo.emailValue}`}
                      className="text-lg font-semibold hover:text-white/80 transition-colors"
                      dir="ltr"
                    >
                      {t.contactInfo.emailValue}
                    </a>
                  </div>
                </motion.div>

                {/* Address - Riyadh */}
                <motion.div
                  initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ x: isRTL ? 10 : -10, scale: 1.05 }}
                  className="flex items-start gap-4 cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg group-hover:bg-white/30 transition-all"
                  >
                    <FiMapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">{t.contactInfo.address} - {t.riyadhBranch}</p>
                    <p className="text-base font-semibold leading-relaxed">
                      {t.contactInfo.riyadhAddress}
                    </p>
                  </div>
                </motion.div>

                {/* Address - Khobar */}
                <motion.div
                  initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: isRTL ? 10 : -10, scale: 1.05 }}
                  className="flex items-start gap-4 cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg group-hover:bg-white/30 transition-all"
                  >
                    <FiMapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">{t.contactInfo.address} - {t.khobarBranch}</p>
                    <p className="text-base font-semibold leading-relaxed">
                      {t.contactInfo.khobarAddress}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media */}
            <motion.div 
              className="mt-12 relative z-10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-white/80 mb-4 text-sm font-medium">{t.contactInfo.follow}</p>
              <div className="flex gap-3 flex-wrap">
                {Object.entries(SOCIAL_LINKS).map(([platform, url], index) => {
                  const socialConfig = {
                    instagram: { Icon: FaInstagram, color: 'from-purple-500 to-pink-500' },
                    facebook: { Icon: FaFacebook, color: 'from-blue-600 to-blue-700' },
                    x: { Icon: FaXTwitter, color: 'from-gray-800 to-black' },
                    linkedin: { Icon: FaLinkedin, color: 'from-blue-700 to-blue-800' },
                    whatsapp: { Icon: FaWhatsapp, color: 'from-green-500 to-green-600' },
                    tiktok: { Icon: FaTiktok, color: 'from-gray-900 to-black' },
                    snapchat: { Icon: FaSnapchat, color: 'from-yellow-400 to-yellow-500' },
                  }[platform as keyof typeof SOCIAL_LINKS];

                  if (!socialConfig) return null;
                  const { Icon, color } = socialConfig;

                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' as const, stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-gradient-to-br ${color} rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Map Section - Two Maps Side by Side */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          >
            {t.mapTitle}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Riyadh Map */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="bg-gradient-to-br from-[#49A799] to-[#3A8A7E] p-4 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <FiMapPin className="text-white" />
                  {t.riyadhBranch}
                </h3>
              </div>
              <div className="h-[400px] md:h-[500px]">
                <MapContainer
                  center={[24.7136, 46.6753]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[24.7136, 46.6753]}>
                    <Popup>{t.riyadhBranch}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>

            {/* Khobar Map */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="bg-gradient-to-br from-[#49A799] to-[#3A8A7E] p-4 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <FiMapPin className="text-white" />
                  {t.khobarBranch}
                </h3>
              </div>
              <div className="h-[400px] md:h-[500px]">
                <MapContainer
                  center={[26.2172, 50.1971]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[26.2172, 50.1971]}>
                    <Popup>{t.khobarBranch}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}