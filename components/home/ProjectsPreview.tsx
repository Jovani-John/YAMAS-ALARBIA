"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

// Define Project interface
interface Project {
  id: number;
  title: string;
  subtitle: string;
  titleEn: string;
  subtitleEn: string;
  image: string;
  number: string;
}

// Define Content type
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

// Extended props for ProjectCard (إزالة router من الـ props)
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

// Main Component
export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const params = useParams();
  const currentLang = ((params?.lang as string) || 'ar') as 'ar' | 'en';
  const isRTL = currentLang === 'ar';

  const content: ContentType = {
    ar: {
      subtitle: "مشاريعنا",
title: "أحدث المشاريع المعمارية واللأنشائية",
      allProjects: "SDADASDAS",
      projects: [
        {
          id: 1,
          title: "ريما",
          subtitle: "مشاريع تجارية",
          titleEn: "RIMA",
          subtitleEn: "Commercial Projects",
          image: "/images/projects/buildings/1.jpg",
          number: "01",
        },
        {
          id: 2,
          title: "جراند هايبر",
          subtitle: "مشاريع تجارية",
          titleEn: "Grand Hyper",
          subtitleEn: "Commercial Projects",
          image: "/images/projects/Commercial Projects/GrandMall/WhatsApp Image 2025-12-20 at 11.26.38 AM.jpeg",
          number: "02",
        },
        {
          id: 3,
          title: "AJDAN",
          subtitle: "مشاريع سكنية",
          titleEn: "BKGCC Center",
          subtitleEn: "Housing Projects",
          image: "/images/projects/Housing Projects/AJDAN/1.jpg",
          number: "03",
        },
        {
          id: 4,
          title: "شركة مياهنا",
          subtitle: "مشاريع تجارية",
          titleEn: "Miahona NEW Head Office",
          subtitleEn: "Commercial Projects",
          image: "/images/projects/Commercial Projects/Miahona/12.jpg",
          number: "04",
        },
      ]
    },
    en: {
      subtitle: "our projects",
      title: "Latest Architectural and Construction Projects",
      allProjects: "",
      projects: [
        {
          id: 1,
          title: "RIMA",
          subtitle: "Commercial Projects",
          titleEn: "RIMA",
          subtitleEn: "Commercial Projects",
          image: "/images/projects/buildings/1.jpg",
          number: "01",
        },
        {
          id: 2,
          title: "Grand Hyper",
          subtitle: "مشاريع تجارية",
          titleEn: "Grand Hyper",
          subtitleEn: "Housing Projects",
          image: "/images/projects/Commercial Projects/GrandMall/WhatsApp Image 2025-12-20 at 11.26.38 AM.jpeg",
          number: "02",
        },
        {
          id: 3,
          title: "AJDAN",
          subtitle: "Housing Projects",
          titleEn: "AJDAN",
          subtitleEn: "Housing Projects",
          image: "/images/projects/Housing Projects/AJDAN/1.jpg",
          number: "03",
        },
        {
          id: 4,
          title: "Miahona NEW Head Office",
          subtitle: "مشاريع معمارية",
          titleEn: "Miahona NEW Head Office",
          subtitleEn: "Commercial Projects",
          image: "/images/projects/Commercial Projects/Miahona/12.jpg",
          number: "04",
        },
      ]
    }
  };

  const data = content[currentLang];
  const projects = data.projects;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      projects.slice(0, 2).forEach((project) => {
        if (!imagesLoaded.has(project.id)) {
          // Create image element for preloading
          const img = document.createElement("img");
          img.src = project.image;
          img.onload = () => {
            setImagesLoaded(prev => new Set(prev).add(project.id));
          };
          img.onerror = () => {
            console.warn(`Failed to preload image: ${project.image}`);
          };
        }
      });
    };
    
    preloadImages();
  }, [projects, imagesLoaded]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const getTitleLines = () => {
    const fullTitle = data.title;

    if (isRTL) {
      const words = fullTitle.split(" ");
      const firstLine = words.slice(0, 2).join(" ");
      const secondLine = words.slice(2).join(" ");
      return { firstLine, secondLine };
    } else {
      const words = fullTitle.split(" ");
      const midPoint = Math.ceil(words.length / 2);
      const firstLine = words.slice(0, midPoint).join(" ");
      const secondLine = words.slice(midPoint).join(" ");
      return { firstLine, secondLine };
    }
  };

  const { firstLine, secondLine } = getTitleLines();

  return (
    <div className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Title Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <motion.div
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-xs sm:text-sm md:text-base uppercase tracking-widest mb-3 sm:mb-4 lg:mb-6 font-bold text-[#49A799]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {data.subtitle}
          </motion.p>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6 lg:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block mb-1 sm:mb-2 lg:mb-3 text-gray-900">{firstLine}</span>
            <span className="block bg-linear-to-r from-[#49A799] to-[#3A8A7E] bg-clip-text text-transparent">{secondLine}</span>
          </motion.h2>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-1 w-24 bg-linear-to-r from-[#49A799] to-[#3A8A7E] mx-auto rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Scroll Section */}
      <section
        ref={containerRef}
        className="relative bg-white w-full"
      >
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={project.id} className="min-h-screen relative w-full">
              <ProjectCard
                project={project}
                index={index}
                progress={scrollYProgress}
                range={[index / projects.length, (index + 1) / projects.length]}
                totalProjects={projects.length}
                isMobile={isMobile}
                isPreloaded={imagesLoaded.has(project.id)}
                currentLang={currentLang}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Project Card Component
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
  const router = useRouter(); // استخدام useRouter داخل المكون نفسه
  const [imageLoaded, setImageLoaded] = useState(isPreloaded);
  const isRTL = currentLang === 'ar';
  const isLast = index === totalProjects - 1;
  const isFirst = index === 0;
  const isEven = index % 2 === 0;

  const fadeInStart = range[0];
  const fadeInEnd = range[0] + (isMobile ? 0.1 : 0.15);
  const stayStart = fadeInEnd;
  const stayEnd = range[1] - (isMobile ? 0.1 : 0.15);
  const fadeOutStart = stayEnd;
  const fadeOutEnd = range[1];

  const opacity = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayStart, stayEnd, fadeOutStart, fadeOutEnd],
    [isFirst ? 1 : 0, 1, 1, 1, isLast ? 1 : 1, isLast ? 1 : 0]
  );

  const scale = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayEnd, fadeOutEnd],
    isMobile ? [1, 1, 1, 1] : [isFirst ? 1 : 0.85, 1, 1, isLast ? 1 : 0.85]
  );

  const y = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayEnd, fadeOutEnd],
    isMobile ? [0, 0, 0, 0] : [isFirst ? 0 : 100, 0, 0, isLast ? 0 : -100]
  );

  const smoothScale = useSpring(scale, {
    stiffness: isMobile ? 100 : 60,
    damping: isMobile ? 40 : 30,
  });
  const smoothY = useSpring(y, {
    stiffness: isMobile ? 100 : 60,
    damping: isMobile ? 40 : 30,
  });
  const smoothOpacity = useSpring(opacity, {
    stiffness: isMobile ? 100 : 60,
    damping: isMobile ? 40 : 30,
  });

  const getImageOrder = () => {
    if (isRTL) {
      return isEven ? "lg:order-2" : "lg:order-1";
    } else {
      return isEven ? "lg:order-1" : "lg:order-2";
    }
  };

  const getContentOrder = () => {
    if (isRTL) {
      return isEven ? "lg:order-1" : "lg:order-2";
    } else {
      return isEven ? "lg:order-2" : "lg:order-1";
    }
  };

  return (
    <motion.div
      className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-10 min-h-screen w-full"
      style={{
        opacity: smoothOpacity,
        scale: smoothScale,
        y: smoothY,
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* Image Side */}
          <motion.div
            className={`relative w-full aspect-4/3 bg-gray-100 overflow-hidden rounded-3xl shadow-2xl group ${getImageOrder()}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 animate-pulse" />
            )}

            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={isRTL ? project.title : project.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                priority={index < 2}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  console.error(`Failed to load image: ${project.image}`);
                  setImageLoaded(true);
                }}
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-[#49A799]/60 via-transparent to-transparent group-hover:opacity-30 transition-opacity duration-300" />
            
            <div className="absolute inset-0 border-4 border-[#49A799]/0 group-hover:border-[#49A799]/60 rounded-3xl transition-all duration-300" />
          </motion.div>

          {/* Content Side */}
          <div
            className={`space-y-3 sm:space-y-4 ${getContentOrder()} ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <motion.p
              className="text-sm sm:text-base uppercase tracking-wider text-[#49A799] font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.1 }}
            >
              {isRTL ? project.subtitle : project.subtitleEn}
            </motion.p>

            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.2 }}
            >
              {isRTL ? project.title : project.titleEn}
            </motion.h3>

            <motion.div
              className={`h-1 bg-linear-to-r from-[#49A799] to-[#3A8A7E] w-16 sm:w-20 rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: isMobile ? "4rem" : "5rem" }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.3 }}
            />

            {isRTL && (
              <>
                <motion.h4
                  className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                  transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.4 }}
                >
                  {project.titleEn}
                </motion.h4>

                <motion.p
                  className="text-sm sm:text-base text-gray-600"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                  transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.5 }}
                >
                  {project.subtitleEn}
                </motion.p>
              </>
            )}
          </div>
        </div>

        {/* Project Number & Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.5, delay: 0.6 }}
        >
          <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#49A799]">
              {project.number}
            </span>
            <span className="text-xl sm:text-2xl font-light text-gray-500">
              / 04
            </span>
          </div>

          <button 
            onClick={() => {
              console.log('Button clicked, navigating to:', `/${currentLang}/projects`);
              try {
                router.push(`/${currentLang}/projects`);
              } catch (error) {
                console.error('Router error:', error);
                window.location.href = `/${currentLang}/projects`;
              }
            }}
            className="group relative w-full sm:w-auto block cursor-pointer"
          >
            <motion.div
              whileHover={{ x: isRTL ? -2 : 2, y: -2 }}
              className="relative border-2 border-[#49A799] bg-[#49A799] hover:bg-white text-white hover:text-[#49A799] px-8 py-3 text-base font-bold transition-all duration-300 rounded-lg shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                {isRTL ? "مشروع مميز" : "SPECIAL PROJECT"}
              </span>
            </motion.div>
            <div className="absolute inset-0 border-2 border-[#49A799] translate-x-1 translate-y-1 -z-10 rounded-lg" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}