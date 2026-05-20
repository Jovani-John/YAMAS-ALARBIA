'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaSnapchat, FaLinkedin, FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── Lazy-load react-leaflet pieces (zero SSR) ───────────────────────────────
const MapContainer = dynamic(() => import('react-leaflet').then((m) => m.MapContainer), { ssr: false });
const TileLayer   = dynamic(() => import('react-leaflet').then((m) => m.TileLayer),    { ssr: false });
const Marker      = dynamic(() => import('react-leaflet').then((m) => m.Marker),       { ssr: false });
const Popup       = dynamic(() => import('react-leaflet').then((m) => m.Popup),        { ssr: false });

// ─── Social links ─────────────────────────────────────────────────────────────
const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/yamas_alarabia',
  facebook:  'https://www.facebook.com/profile.php?id=61555224520417',
  x:         'https://x.com/yamas_alarabia',
  linkedin:  'https://www.linkedin.com/company/yamasarabia/',
  whatsapp:  'https://wa.me/966500029933',
  tiktok:    'https://www.tiktok.com/@yamas_alarabia',
  snapchat:  'https://www.snapchat.com/@yamasalarabia',
} as const;

// ─── Branch coordinates (exact GPS for each office address) ──────────────────
const BRANCHES = {
  riyadh: {
    // Northern Ring Road ∩ Abu Bakr Al-Siddiq, Al-Wadi, Riyadh
    lat: 24.7521,
    lng: 46.6871,
  },
  khobar: {
    // King Fahd Ibn Abd-Alaziz Road, Al-Rakah Al-Janubiyah, Al-Khobar
    lat: 26.2363,
    lng: 50.2047,
  },
} as const;

// ─── Custom branded SVG marker (client-side only) ────────────────────────────
const getCustomIcon = () => {
  if (typeof window === 'undefined') return undefined;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet');

  const svgPin = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="52" viewBox="0 0 40 52">
      <defs>
        <radialGradient id="pinGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#5DC9BB"/>
          <stop offset="100%" stop-color="#2E7A71"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#1a1a1a" flood-opacity="0.35"/>
        </filter>
      </defs>
      <!-- body -->
      <path d="M20 0C10.6 0 3 7.8 3 17.4c0 12.3 17 33 17 33s17-20.7 17-33C37 7.8 29.4 0 20 0z"
            fill="url(#pinGrad)" filter="url(#shadow)"/>
      <!-- inner white circle -->
      <circle cx="20" cy="17" r="8" fill="white" opacity="0.95"/>
      <!-- brand dot -->
      <circle cx="20" cy="17" r="4.5" fill="#2E7A71"/>
      <!-- subtle shine -->
      <ellipse cx="16" cy="12" rx="3.5" ry="2" fill="white" opacity="0.25"/>
    </svg>`;

  return L.divIcon({
    className: '',
    html: svgPin,
    iconSize:    [40, 52],
    iconAnchor:  [20, 52],   // tip of the pin
    popupAnchor: [0, -54],
  });
};

// ─── Main component ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const params = useParams();
  const currentLang = (params?.lang as string) || 'ar';
  const isRTL = currentLang === 'ar';

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '',
    clientType: '', companyName: '', institutionName: '', message: '',
  });
  const [isLoading,    setIsLoading]    = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Custom icon instance (hydrated once on client)
  const [customIcon, setCustomIcon] = useState<ReturnType<typeof getCustomIcon>>();
  useEffect(() => { setCustomIcon(getCustomIcon()); }, []);

  const { scrollYProgress } = useScroll();
  const heroScale   = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // ── i18n ──────────────────────────────────────────────────────────────────
  const content = {
    ar: {
      title:     'تواصل معنا',
      heroTitle: 'نسعد بتواصلك معنا',
      subtitle:  'املأ النموذج وسنتواصل معك في أقرب وقت ممكن',
      form: {
        name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'رقم الهاتف',
        subject: 'الموضوع', clientType: 'نوع العميل', selectType: 'اختر نوع العميل',
        company: 'شركة', institution: 'مؤسسة', companyName: 'اسم الشركة',
        institutionName: 'اسم المؤسسة', message: 'رسالتك',
        submit: 'إرسال الرسالة', sending: 'جاري الإرسال...',
      },
      contactInfo: {
        title: 'معلومات التواصل', phone: 'الهاتف',
        phone2: '+966 50 002 9933', email: 'البريد الإلكتروني',
        emailValue: 'info@yamas.com.sa', address: 'العنوان',
        riyadhAddress:
          'RAWA2938، طريق الدائري الشمالي تقاطع أبو بكر الصديق، حي الوادي، الرياض | المربع 6 - الدور الأول - مكتب 93',
        khobarAddress:
          'EAD6389، طريق الملك فهد بن عبدالعزيز، الراكه الجنوبية، الخبر | برج ناصر الهاجري - الدور السادس - مكتب 604',
        follow: 'تابعنا على',
      },
      toast: {
        success: 'تم إرسال رسالتك بنجاح!',
        error:   'يرجى ملء جميع الحقول المطلوبة',
        failed:  'فشل في إرسال الرسالة. حاول مرة أخرى.',
      },
      mapTitle:      'مواقعنا',
      riyadhBranch:  'فرع الرياض',
      khobarBranch:  'فرع الخبر',
    },
    en: {
      title:     'Contact Us',
      heroTitle: 'Get In Touch With Us',
      subtitle:  'Fill out the form and we will get back to you as soon as possible',
      form: {
        name: 'Full Name', email: 'Email Address', phone: 'Phone Number',
        subject: 'Subject', clientType: 'Client Type', selectType: 'Select Client Type',
        company: 'Company', institution: 'Institution', companyName: 'Company Name',
        institutionName: 'Institution Name', message: 'Your Message',
        submit: 'Send Message', sending: 'Sending...',
      },
      contactInfo: {
        title: 'Contact Information', phone: 'Phone',
        phone2: '+966 50 002 9933', email: 'Email',
        emailValue: 'info@yamas.com.sa', address: 'Address',
        riyadhAddress:
          'RAWA2938, Northern Ring Branch Cross Abu Bakr Al Siddiq Road, Al Wadi Dist., Riyadh | Block 6 – 1st Floor – Office 93',
        khobarAddress:
          'EAD6389, King Fahad Ibn Abdulaziz Road, Al Rakah Al Janubiyah Dist., Al Khobar | Nasser Al-Hajri Tower – 6th Floor – Office 604',
        follow: 'Follow Us',
      },
      toast: {
        success: 'Your message has been sent successfully!',
        error:   'Please fill in all required fields',
        failed:  'Failed to send message. Please try again.',
      },
      mapTitle:      'Our Locations',
      riyadhBranch:  'Riyadh Branch',
      khobarBranch:  'Khobar Branch',
    },
  };

  const t = content[currentLang as keyof typeof content];

  // ── Form logic ────────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject) {
      toast.error(t.toast.error); return;
    }
    if (formData.clientType === 'company'     && !formData.companyName)     { toast.error(isRTL ? 'يرجى إدخال اسم الشركة'   : 'Please enter company name');     return; }
    if (formData.clientType === 'institution' && !formData.institutionName) { toast.error(isRTL ? 'يرجى إدخال اسم المؤسسة' : 'Please enter institution name'); return; }

    setIsLoading(true);
    try {
      const fd = new FormData();
      fd.append('access_key',   '6c123e70-b648-423d-882b-da0fdfd7e8fe');
      fd.append('name',          formData.name);
      fd.append('email',         formData.email);
      fd.append('phone',         formData.phone);
      fd.append('subject',       formData.subject);
      fd.append('clientType',    formData.clientType);
      if (formData.clientType === 'company')     fd.append('companyName',     formData.companyName);
      if (formData.clientType === 'institution') fd.append('institutionName', formData.institutionName);
      fd.append('message', formData.message);

      const res    = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const result = await res.json();
      if (result.success) {
        toast.success(t.toast.success);
        setFormData({ name:'', email:'', phone:'', subject:'', clientType:'', companyName:'', institutionName:'', message:'' });
      } else throw new Error(result.message);
    } catch (err) {
      console.error(err);
      toast.error(t.toast.failed);
    } finally {
      setIsLoading(false);
    }
  };

  // ── Animation variants ────────────────────────────────────────────────────
  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden:  { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 100, damping: 12 } },
  };
  const floatingVariants = {
    animate: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const } },
  };

  // ── Social icon map ───────────────────────────────────────────────────────
  const socialConfig = {
    instagram: { Icon: FaInstagram, color: 'from-purple-500 to-pink-500' },
    facebook:  { Icon: FaFacebook,  color: 'from-blue-600 to-blue-700'   },
    x:         { Icon: FaXTwitter,  color: 'from-gray-800 to-black'       },
    linkedin:  { Icon: FaLinkedin,  color: 'from-blue-700 to-blue-800'    },
    whatsapp:  { Icon: FaWhatsapp,  color: 'from-green-500 to-green-600'  },
    tiktok:    { Icon: FaTiktok,    color: 'from-gray-900 to-black'        },
    snapchat:  { Icon: FaSnapchat,  color: 'from-yellow-400 to-yellow-500' },
  } as const;

  // ─── Reusable map block ───────────────────────────────────────────────────
  const BranchMap = ({
    branch, lat, lng, label, delay,
  }: { branch: 'riyadh' | 'khobar'; lat: number; lng: number; label: string; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, x: branch === 'riyadh' ? (isRTL ? 50 : -50) : (isRTL ? -50 : 50) }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative overflow-hidden rounded-2xl shadow-2xl"
    >
      <div className="bg-gradient-to-br from-[#49A799] to-[#3A8A7E] p-4 text-white">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <FiMapPin />
          {label}
        </h3>
      </div>
      <div className="h-[400px] md:h-[500px]">
        <MapContainer
          center={[lat, lng]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {customIcon && (
            <Marker position={[lat, lng]} icon={customIcon}>
              <Popup>
                <strong style={{ color: '#2E7A71' }}>{label}</strong>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </motion.div>
  );

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <ToastContainer position={isRTL ? 'top-left' : 'top-right'} rtl={isRTL} />

      {/* ── Hero with parallax ── */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#33364D] via-[#49A799] to-[#3A8A7E]" />
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <motion.div variants={floatingVariants} animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <motion.div variants={floatingVariants} animate="animate" transition={{ delay: 1 }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-[#49A799]/20 rounded-full blur-3xl" />

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' as const, stiffness: 100 }}
        >
          <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.3 }} className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {t.title}
            </h1>
          </motion.div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="w-32 h-1.5 bg-white/90 mx-auto rounded-full mb-6" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 font-light">
            {t.heroTitle}
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Form + Contact Info ── */}
      <div className="container mx-auto px-4 py-20 relative">
        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 0.05, scale: 1 }} viewport={{ once: true }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#49A799] rounded-full blur-3xl" />

        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden relative z-10"
        >
          {/* Form */}
          <motion.div variants={itemVariants} className="bg-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#49A799]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                initial={{ x: isRTL ? 50 : -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {t.subtitle}
              </motion.h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] rounded-full mb-8" />

              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { field: 'name',  label: t.form.name,  type: 'text',  required: true },
                    { field: 'email', label: t.form.email, type: 'email', required: true },
                  ].map(({ field, label, type, required }) => (
                    <motion.div key={field} variants={itemVariants}>
                      <label className="block text-sm text-gray-700 mb-2 font-medium">{label}{required ? ' *' : ''}</label>
                      <motion.input
                        type={type} name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        animate={focusedField === field ? { boxShadow: '0 0 0 3px rgba(73,167,153,0.2)' } : {}}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all"
                        required={required}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { field: 'phone',   label: t.form.phone,   type: 'text', required: false, dir: 'ltr' as const },
                    { field: 'subject', label: t.form.subject, type: 'text', required: true  },
                  ].map(({ field, label, type, required, dir }) => (
                    <motion.div key={field} variants={itemVariants}>
                      <label className="block text-sm text-gray-700 mb-2 font-medium">{label}{required ? ' *' : ''}</label>
                      <motion.input
                        type={type} name={field} dir={dir}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        animate={focusedField === field ? { boxShadow: '0 0 0 3px rgba(73,167,153,0.2)' } : {}}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all"
                        required={required}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Client type */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">{t.form.clientType}</label>
                  <motion.select
                    name="clientType" value={formData.clientType} onChange={handleChange}
                    onFocus={() => setFocusedField('clientType')} onBlur={() => setFocusedField(null)}
                    animate={focusedField === 'clientType' ? { boxShadow: '0 0 0 3px rgba(73,167,153,0.2)' } : {}}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all bg-white"
                  >
                    <option value="">{t.form.selectType}</option>
                    <option value="company">{t.form.company}</option>
                    <option value="institution">{t.form.institution}</option>
                  </motion.select>
                </motion.div>

                {/* Dynamic company / institution field */}
                {(formData.clientType === 'company' || formData.clientType === 'institution') && (() => {
                  const isCompany = formData.clientType === 'company';
                  const fieldName  = isCompany ? 'companyName'     : 'institutionName';
                  const fieldLabel = isCompany ? t.form.companyName : t.form.institutionName;
                  const ph         = isCompany
                    ? (isRTL ? 'أدخل اسم الشركة'   : 'Enter company name')
                    : (isRTL ? 'أدخل اسم المؤسسة' : 'Enter institution name');
                  return (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                      <label className="block text-sm text-gray-700 mb-2 font-medium">{fieldLabel} *</label>
                      <motion.input
                        type="text" name={fieldName} placeholder={ph}
                        value={formData[fieldName as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(fieldName)}
                        onBlur={() => setFocusedField(null)}
                        animate={focusedField === fieldName ? { boxShadow: '0 0 0 3px rgba(73,167,153,0.2)' } : {}}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all"
                      />
                    </motion.div>
                  );
                })()}

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">{t.form.message}</label>
                  <motion.textarea
                    name="message" value={formData.message} onChange={handleChange} rows={5}
                    onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                    animate={focusedField === 'message' ? { boxShadow: '0 0 0 3px rgba(73,167,153,0.2)' } : {}}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#49A799] focus:outline-none transition-all resize-none"
                  />
                </motion.div>

                {/* Submit */}
                <motion.button
                  onClick={handleSubmit} disabled={isLoading}
                  whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  className={`w-full bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
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

          {/* Contact Info */}
          <motion.div variants={itemVariants}
            className="bg-gradient-to-br from-[#33364D] via-[#33364D] to-[#49A799] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#49A799]/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-12"
                initial={{ x: isRTL ? -50 : 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                {t.contactInfo.title}
              </motion.h2>

              <div className="space-y-8">
                {[
                  { icon: FiPhone, label: t.contactInfo.phone,   value: t.contactInfo.phone2,   href: `tel:${t.contactInfo.phone2.replace(/\s/g,'')}`, dir: 'ltr' as const, delay: 0   },
                  { icon: FiMail,  label: t.contactInfo.email,   value: t.contactInfo.emailValue, href: `mailto:${t.contactInfo.emailValue}`,            dir: 'ltr' as const, delay: 0.1 },
                ].map(({ icon: Icon, label, value, href, dir, delay }) => (
                  <motion.div key={label}
                    initial={{ x: isRTL ? -50 : 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay }}
                    whileHover={{ x: isRTL ? 10 : -10, scale: 1.05 }}
                    className="flex items-start gap-4 cursor-pointer group"
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg group-hover:bg-white/30 transition-all">
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">{label}</p>
                      <a href={href} dir={dir} className="text-lg font-semibold hover:text-white/80 transition-colors block">{value}</a>
                    </div>
                  </motion.div>
                ))}

                {[
                  { label: `${t.contactInfo.address} - ${t.riyadhBranch}`, value: t.contactInfo.riyadhAddress, delay: 0.2 },
                  { label: `${t.contactInfo.address} - ${t.khobarBranch}`, value: t.contactInfo.khobarAddress, delay: 0.3 },
                ].map(({ label, value, delay }) => (
                  <motion.div key={label}
                    initial={{ x: isRTL ? -50 : 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay }}
                    whileHover={{ x: isRTL ? 10 : -10, scale: 1.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg group-hover:bg-white/30 transition-all shrink-0">
                      <FiMapPin className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">{label}</p>
                      <p className="text-base font-semibold leading-relaxed">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <motion.div className="mt-12 relative z-10"
              initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <p className="text-white/80 mb-4 text-sm font-medium">{t.contactInfo.follow}</p>
              <div className="flex gap-3 flex-wrap">
                {(Object.entries(SOCIAL_LINKS) as [keyof typeof SOCIAL_LINKS, string][]).map(([platform, url], index) => {
                  const cfg = socialConfig[platform];
                  if (!cfg) return null;
                  const { Icon, color } = cfg;
                  return (
                    <motion.a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                      initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' as const, stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 360, y: -5 }} whileTap={{ scale: 0.9 }}
                      className={`bg-gradient-to-br ${color} rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all`}>
                      <Icon className="w-5 h-5 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Maps ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}
        className="w-full py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            {t.mapTitle}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <BranchMap branch="riyadh" lat={BRANCHES.riyadh.lat} lng={BRANCHES.riyadh.lng} label={t.riyadhBranch} delay={0.2} />
            <BranchMap branch="khobar" lat={BRANCHES.khobar.lat} lng={BRANCHES.khobar.lng} label={t.khobarBranch} delay={0.4} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}