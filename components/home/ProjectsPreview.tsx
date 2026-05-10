"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  number: string;
}

interface ContentType {
  ar: {
    subtitle: string;
    title: string;
    allProjects: string;
    projects: Project[];
  };
  en: {
    subtitle: string;
    title: string;
    allProjects: string;
    projects: Project[];
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  totalProjects: number;
  isMobile: boolean;
  isPreloaded?: boolean;
  currentLang: 'ar' | 'en';
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const params = useParams();
  const currentLang = ((params?.lang as string) || 'ar') as 'ar' | 'en';
  const isRTL = currentLang === 'ar';

  const content: ContentType = {
    ar: {
      subtitle: "",
      title: "أحدث المشاريع المعمارية والإنشائية",
      allProjects: "جميع المشاريع",
      projects: [
        { id: 1, title: "ريما 1", subtitle: "الأبراج السكنية", titleEn: "RIMA 1", description: "برج سكني راقي مكون من 15 طابق بمساحة بناء إجمالية 18,000 متر مربع، يشمل 62 موقف سيارات", descriptionEn: "A luxury residential tower of 15 floors with a total built-up area of 18,000 square meters, including 62 residential apartments.", image: "/images/projects/buildings/Rima1/7.png", number: "01" },
        { id: 2, title: "جراند هايبر", subtitle: "مشاريع تجارية", titleEn: "Grand Hyper", description: "سوق تجاري يوفر تجربة تسوق فريدة مع تصميم معماري مبتكر، يشمل مساحات واسعة للمحلات التجارية وأنظمة حديثة.", descriptionEn: "A commercial market providing a unique shopping experience with innovative architectural design.", image: "/images/projects/Commercial Projects/GrandMall/1.jpg", number: "02" },
        { id: 3, title: "دار القمره", subtitle: "مشاريع سكنية", titleEn: "Dar Al Qamrah", description: "مشروع سكني راقي يتميز بتصميم معماري فريد وموقع متميز، يوفر أعلى معايير الراحة والخصوصية.", descriptionEn: "An upscale residential project featuring a unique architectural design and distinguished location, providing the highest standards of comfort and privacy.", image: "/images/projects/Housing Projects/AJDAN/1.jpg", number: "03" },
        { id: 4, title: "شركة مياهنا", subtitle: "مشاريع تجارية", titleEn: "Miahona Company", description: "المقر الرئيسي الجديد - مبنى إداري حديث يعكس الاحترافية والتميز، مصمم بأحدث المعايير الهندسية.", descriptionEn: "New Head Office - A modern administrative building reflecting professionalism and excellence.", image: "/images/projects/Commercial Projects/Miahona/12.jpg", number: "04" },
      ]
    },
    en: {
      subtitle: "our projects",
      title: "Latest Architectural and Construction Projects",
      allProjects: "All Projects",
      projects: [
        { id: 1, title: "RIMA 1", subtitle: "Residential Towers", titleEn: "RIMA 1", description: "A luxury residential tower of 15 floors with a total built-up area of 18,000 square meters, including 62 residential apartments.", descriptionEn: "A luxury residential tower of 15 floors with a total built-up area of 18,000 square meters, including 62 residential apartments.", image: "/images/projects/buildings/Rima1/2.jpg", number: "01" },
        { id: 2, title: "Grand Hyper", subtitle: "Commercial Projects", titleEn: "Grand Hyper", description: "A massive commercial market providing a unique shopping experience with innovative architectural design.", descriptionEn: "A massive commercial market providing a unique shopping experience with innovative architectural design.", image: "/images/projects/Commercial Projects/GrandMall/1.jpg", number: "02" },
        { id: 3, title: "Dar Al Qamrah", subtitle: "Residential Projects", titleEn: "Dar Al Qamrah", description: "An upscale residential project featuring a unique architectural design and distinguished location, providing the highest standards of comfort and privacy.", descriptionEn: "An upscale residential project featuring a unique architectural design and distinguished location, providing the highest standards of comfort and privacy.", image: "/images/projects/Housing Projects/AJDAN/1.jpg", number: "03" },
        { id: 4, title: "Miahona Company", subtitle: "Commercial Projects", titleEn: "Miahona Company", description: "New Head Office - A modern administrative building reflecting professionalism and excellence.", descriptionEn: "New Head Office - A modern administrative building reflecting professionalism and excellence.", image: "/images/projects/Commercial Projects/Miahona/12.jpg", number: "04" },
      ]
    }
  };

  const data = content[currentLang];
  const projects = data.projects;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    projects.slice(0, 2).forEach((project) => {
      if (!imagesLoaded.has(project.id)) {
        const img = new (window.Image as any)();
        img.src = project.image;
        img.onload = () => setImagesLoaded(prev => new Set(prev).add(project.id));
      }
    });
  }, [projects, imagesLoaded]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const getTitleLines = () => {
    const words = data.title.split(" ");
    if (isRTL) {
      return { firstLine: words.slice(0, 2).join(" "), secondLine: words.slice(2).join(" ") };
    }
    const midPoint = Math.ceil(words.length / 2);
    return { firstLine: words.slice(0, midPoint).join(" "), secondLine: words.slice(midPoint).join(" ") };
  };

  const { firstLine, secondLine } = getTitleLines();

  return (
    <div className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* سكشن العنوان */}
      <section className="relative pt-4 pb-0 lg:pt-6 lg:pb-0 flex items-center justify-center bg-white">
        <motion.div
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p className="text-xs sm:text-sm md:text-base uppercase tracking-widest mb-1 sm:mb-2 font-bold text-[#49A799]">
            {data.subtitle}
          </motion.p>
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-1 sm:mb-2 px-4">
            <span className="block mb-1 text-gray-900">{firstLine}</span>
            <span className="block bg-gradient-to-r from-[#49A799] to-[#3A8A7E] bg-clip-text text-transparent">
              {secondLine}
            </span>
          </motion.h2>
          <motion.div className="mt-2">
            <div className="h-1 w-24 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] mx-auto rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* سكشن المشاريع المصلح */}
      <section
        ref={containerRef}
        className="relative bg-white w-full -mt-20 lg:-mt-32"
        /* التعديل: طرح 100vh من الارتفاع الكلي لإزالة الفراغ بعد آخر مشروع */
        style={{ height: `calc(${(projects.length) * 100}vh - 100vh)` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              progress={scrollYProgress}
              range={[index / projects.length, (index + 1) / projects.length]}
              totalProjects={projects.length}
              isMobile={isMobile}
              isPreloaded={imagesLoaded.has(project.id)}
              currentLang={currentLang}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  progress,
  range,
  totalProjects,
  isMobile,
  isPreloaded = false,
  currentLang,
}: ProjectCardProps) {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(isPreloaded);
  const isRTL = currentLang === 'ar';
  const isFirst = index === 0;
  const isLast = index === totalProjects - 1;

  // تعديل نطاق الشفافية لضمان بقاء المشروع الأخير ظاهراً
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    isFirst 
      ? [1, 1, 1, 0] 
      : isLast 
        ? [0, 1, 1, 1] // المشروع الأخير لا يختفي في النهاية
        : [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    isLast ? [20, 0, 0, 0] : [20, 0, 0, -20]
  );

  const scale = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    isLast ? [0.98, 1, 1, 1] : [0.98, 1, 1, 0.98]
  );

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/${currentLang}/projects`);
  };

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ opacity, scale, y }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div className={`relative w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-3xl shadow-2xl group ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
            {!imageLoaded && <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />}
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={isRTL ? project.title : project.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                priority={index === 0}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#49A799]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>

          <div className={`space-y-4 ${isRTL ? 'lg:order-1 text-right' : 'lg:order-2 text-left'}`}>
            <p className="text-sm sm:text-base uppercase tracking-wider text-[#49A799] font-bold">{project.subtitle}</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">{isRTL ? project.title : project.titleEn}</h3>
            <div className="h-1 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] w-20 rounded-full" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{isRTL ? project.description : project.descriptionEn}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="text-3xl md:text-4xl font-bold text-[#49A799]">{project.number}</span>
                <span className="text-2xl font-light text-gray-500">/ {String(totalProjects).padStart(2, '0')}</span>
              </div>
              <button onClick={handleExploreClick} className="group relative w-full sm:w-auto z-50 overflow-hidden rounded-lg shadow-lg" type="button">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative border-2 border-[#49A799] bg-[#49A799] hover:bg-white text-white hover:text-[#49A799] px-8 py-3 text-base font-bold transition-colors duration-300">
                  <span className="flex items-center justify-center gap-2 whitespace-nowrap">{isRTL ? "استكشف المشروع" : "EXPLORE PROJECT"}</span>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}