"use client";

import { useEffect, useRef, useState, memo } from "react";
import { motion, useInView } from "framer-motion";
import { IconType } from "react-icons";

interface Stat {
  icon: IconType;
  number: string;
  label: string;
}

// إزالة isRTL من الـ props إذا لم يكن مستخدماً
interface StatsSectionProps {
  stats: Stat[];
}

const AnimatedCounter = memo(({ value }: { value: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "") || "";

  useEffect(() => {
    if (!isInView) return;

    setCount(0);

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(increment * currentStep), numericValue));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="inline-block">
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {count.toLocaleString()}
        {suffix && <span className="text-2xl md:text-3xl">{suffix}</span>}
      </motion.span>
    </div>
  );
});

AnimatedCounter.displayName = "AnimatedCounter";

const StatCard = memo(({ stat, index }: { stat: Stat; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, {
    once: true,
    amount: 0.3,
    margin: "-50px",
  });

  return (
    <div ref={cardRef} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.85 }}
        animate={
          isCardInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {}
        }
        transition={{
          delay: index * 0.12,
          duration: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        whileHover={{
          y: -12,
          scale: 1.03,
          transition: { type: "spring", stiffness: 400, damping: 20 },
        }}
        className="group relative h-full"
      >
        <div className="relative bg-linear-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col justify-center">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-[#49A799]/5 to-[#3A8A7E]/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Floating Background Blob */}
          <motion.div
            className="absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br from-[#49A799]/20 to-[#3A8A7E]/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Icon */}
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#49A799] to-[#3A8A7E] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:shadow-2xl transition-shadow"
              initial={{ rotate: 0, scale: 1 }}
              whileHover={{
                rotate: 360,
                scale: 1.2,
                transition: {
                  rotate: { duration: 0.6, ease: "easeInOut" },
                  scale: { duration: 0.3 },
                },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              {/* Icon Glow */}
              <motion.div
                className="absolute inset-0 bg-white rounded-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Number */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-[#49A799] mb-3 sm:mb-4">
              <AnimatedCounter value={stat.number} />
            </div>

            {/* Label */}
            <motion.div
              className="text-sm sm:text-base md:text-lg font-bold text-gray-600 text-center px-2"
              initial={{ opacity: 0 }}
              animate={isCardInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
            >
              {stat.label}
            </motion.div>
          </div>

          {/* Corner Decoration */}
          <motion.div
            className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-[#49A799]/10 to-transparent rounded-bl-full"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Bottom Accent Line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#49A799] to-[#3A8A7E] rounded-full"
            initial={{ width: 0 }}
            animate={isCardInView ? { width: "100%" } : {}}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </div>
  );
});

StatCard.displayName = "StatCard";

const StatsSection = memo(({ stats }: StatsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-100px",
  });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Static Background - بدون حركة تسبب الهزة */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-linear-to-br from-[#49A799]/10 to-[#3A8A7E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-linear-to-tr from-[#49A799]/10 to-[#33364D]/10 rounded-full blur-3xl" />

        {/* Static Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #49A799 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isSectionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";

export default StatsSection;
