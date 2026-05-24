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
import { memo, useMemo, useRef } from "react";
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

const FeatureItem = memo(({ feature, index, isRTL }: { feature: string; index: number; isRTL: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`flex items-center gap-3 py-2 ${isRTL ? "flex-row-reverse justify-end" : ""}`}
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
          { icon: HiOfficeBuilding, number: "22+", label: "مشروع مكتمل" },
          { icon: HiUserGroup, number: "24/7", label: "دعم مستمر" },
          { icon: HiGlobe, number: "4", label: "فروع دولية" },
          { icon: HiCheckCircle, number: "100%", label: "إرضاء العملاء" },
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
          "Yamas Al Arabia Construction is a leader in the building sector, blending deep expertise with modern innovation. We are committed to delivering integrated engineering solutions that adhere to the highest global standards of quality and safety, to be the first partner in building your vision and turning it into tangible reality.",
        cta: "Discover More",
        stats: [
          { icon: HiOfficeBuilding, number: "22+", label: "Completed Projects" },
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* القسم الأيمن (في RTL يصير أيسر) - النص والمحتوى */}
          <div className={`order-2 lg:order-1 ${isRTL ? "text-right" : "text-left"}`}>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-[#49A799]/10 text-[#49A799] rounded-lg text-sm font-bold mb-6"
            >
              {data.badge}
            </motion.span>

            {/* العنوان */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.2] md:leading-[1.25]">
                {isRTL ? (
                  <>
                    {data.title}
                    <br />
                    <span className="text-[#49A799]">{data.titleHighlight}</span>
                  </>
                ) : (
                  <>
                    {data.title}
                    <br />
                    <span className="text-[#49A799]">{data.titleHighlight}</span>
                  </>
                )}
              </h2>
            </motion.div>

            {/* ✅ الوصف مع سيميتريه تامة - النص يطلع مربع */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p 
                className="text-gray-600 text-base md:text-lg leading-relaxed"
                style={{ 
                  textAlign: "justify", /* ✅ ده الحل السحري - بيخلي النص مربع ومتسق */
                  textAlignLast: isRTL ? "right" : "left", /* السطر الأخير يبقى في جهته الصحيحة */
                  wordSpacing: "normal",
                  letterSpacing: "normal",
                }}
              >
                {data.description}
              </p>
            </motion.div>

            {/* المميزات (Features) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-10"
            >
              {data.features.map((f, i) => (
                <FeatureItem key={i} feature={f} index={i} isRTL={isRTL} />
              ))}
            </motion.div>

            {/* زر الـ CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`${isRTL ? "text-right" : "text-left"}`}
            >
              <motion.a
                href={`/${currentLang}/about`}
                whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {data.cta}
                {isRTL ? <HiArrowLeft className="group-hover:-translate-x-1 transition" /> : <HiArrowRight className="group-hover:translate-x-1 transition" />}
              </motion.a>
            </motion.div>
          </div>

          {/* القسم الأيسر (في RTL يصبح أيمن) - الفيديو والإحصائيات */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* الفيديو */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200"
            >
              <video
                src="/videos/About.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* الإحصائيات */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {data.stats.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}