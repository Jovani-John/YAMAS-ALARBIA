"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  HiCheckCircle,
  HiOfficeBuilding,
  HiUserGroup,
  HiGlobe,
  HiArrowRight,
  HiArrowLeft,
} from "react-icons/hi";
import { memo, useMemo, useRef, useState, useEffect } from "react";
import { IconType } from "react-icons";

// --- Components المكونات الفرعية ---

const AnimatedCounter = memo(({ value }: { value: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ display: "inline-block" }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {value}
          </motion.span>
        </motion.span>
      )}
    </div>
  );
});
AnimatedCounter.displayName = "AnimatedCounter";

interface StatType {
  icon: IconType;
  number: string;
  label: string;
}

const StatCard = memo(({ stat, index }: { stat: StatType; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-[#49A799] to-[#3A8A7E] rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:rotate-6 transition-transform">
          <stat.icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-2xl font-bold text-gray-900">
          <AnimatedCounter value={stat.number} />
        </div>
        <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
});
StatCard.displayName = "StatCard";

const FeatureItem = memo(({ feature, index }: { feature: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center gap-3 py-1"
    >
      <HiCheckCircle className="w-5 h-5 text-[#49A799] shrink-0" />
      <span className="text-gray-700 text-sm md:text-base font-medium">{feature}</span>
    </motion.div>
  );
});
FeatureItem.displayName = "FeatureItem";

// --- Main Component المكون الرئيسي ---

export default function AboutSection() {
  const params = useParams();
  const currentLang = ((params?.lang as string) || "ar") as "ar" | "en";
  const isRTL = currentLang === "ar";
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const data = useMemo(() => {
    const content = {
      ar: {
        badge: "✦ من نحن",
        title: "شركة يماس العربية",
        titleHighlight: "للمقاولات والإنشاءات",
        description:
          "تعد شركة يماس العربية للمقاولات من الشركات الرائدة في قطاع الإنشاءات، حيث نجمع بين الخبرة العميقة والابتكار الحديث. نحن ملتزمون بتقديم حلول هندسية متكاملة تلتزم بأعلى معايير الجودة والسلامة العالمية، لنكون الشريك الأول في بناء رؤيتكم وتحويلها إلى واقع ملموس.",
        cta: "اكتشف المزيد",
        stats: [
          { icon: HiOfficeBuilding, number: "20+", label: "مشروع مكتمل" }, // تم التعديل هنا
          { icon: HiUserGroup, number: "24/7", label: "دعم مستمر" },
          { icon: HiGlobe, number: "4", label: "فروع دولية" },
          { icon: HiCheckCircle, number: "100%", label: "إرضاء العملاء" }, // تم التعديل هنا
        ],
        features: [
          "فريق هندسي متخصص ذو خبرة واسعة",
          "التزام تام بجدول التنفيذ والمواعيد",
          "معايير جودة معتمدة وحلول مستدامة",
          "استخدام أحدث التقنيات في البناء",
        ],
      },
      en: {
        badge: "✦ About Us",
        title: "Yamas Al Arabia",
        titleHighlight: "Construction & Contracting",
        description:
          "Yamas Al Arabia Construction is a leader in the building sector, blending deep expertise with modern innovation. We are committed to delivering integrated engineering solutions that adhere to the highest global standards of quality and safety.",
        cta: "Discover More",
        stats: [
          { icon: HiOfficeBuilding, number: "20+", label: "Completed Projects" },
          { icon: HiUserGroup, number: "24/7", label: "Constant Support" },
          { icon: HiGlobe, number: "4", label: "Global Branches" },
          { icon: HiCheckCircle, number: "100%", label: "Client Satisfaction" },
        ],
        features: [
          "Expert engineering team with deep experience",
          "Strict commitment to project timelines",
          "Certified quality standards & sustainable solutions",
          "Utilizing the latest construction technologies",
        ],
      },
    };
    return content[currentLang];
  }, [currentLang]);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-20 overflow-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Decor */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#49A799]/5 rounded-full blur-3xl"
      />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* نص القسم - ترتيب منسق */}
          <div className="order-2 lg:order-1">
            <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="inline-block px-4 py-2 bg-[#49A799]/10 text-[#49A799] rounded-lg text-sm font-bold mb-6"
            >
              {data.badge}
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              {data.title} <br />
              <span className="text-[#49A799]">{data.titleHighlight}</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {data.features.map((f, i) => (
                <FeatureItem key={i} feature={f} index={i} />
              ))}
            </div>

            <motion.a
              href={`/${currentLang}/about`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#49A799] text-white rounded-xl font-bold shadow-lg hover:bg-[#3A8A7E] transition-colors"
            >
              {data.cta}
              {isRTL ? <HiArrowLeft /> : <HiArrowRight />}
            </motion.a>
          </div>

          {/* الفيديو والإحصائيات */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-100">
              <video
                src="/videos/About.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}