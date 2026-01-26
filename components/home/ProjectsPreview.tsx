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
  description: string;
  descriptionEn: string;
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

// Extended props for ProjectCard
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
      title: "أحدث المشاريع المعمارية والإنشائية",
      allProjects: "جميع المشاريع",
      projects: [
        {
          id: 1,
          title: "ريما 1",
          subtitle: "مشاريع تجارية",
          titleEn: "RIMA 1",
          description: "مجمع تجاري متكامل يجمع بين التصميم العصري والوظائف المتعددة، يضم محلات تجارية ومكاتب إدارية بمساحات واسعة ومرافق حديثة تلبي احتياجات رواد الأعمال والعملاء على حد سواء.",
          descriptionEn: "An integrated commercial complex combining modern design with multifunctional spaces, featuring retail stores and administrative offices with spacious areas and modern facilities that meet the needs of entrepreneurs and customers alike.",
          image: "/images/projects/buildings/Rima1/2.jpg",
          number: "01",
        },
        {
          id: 2,
          title: "جراند هايبر",
          subtitle: "مشاريع تجارية",
          titleEn: "Grand Hyper",
          description: "سوق تجاري ضخم يوفر تجربة تسوق فريدة مع تصميم معماري مبتكر، يشمل مساحات واسعة للمحلات التجارية ومواقف سيارات متعددة الطوابق وأنظمة تكييف وإضاءة حديثة تضمن راحة الزوار.",
          descriptionEn: "A massive commercial market providing a unique shopping experience with innovative architectural design, including spacious retail areas, multi-story parking facilities, and modern air conditioning and lighting systems ensuring visitor comfort.",
          image: "/images/projects/Commercial Projects/GrandMall/1.jpg",
          number: "02",
        },
        {
          id: 3,
          title: "أجدان",
          subtitle: "مشاريع سكنية",
          titleEn: "AJDAN",
          description: "مجمع سكني راقي يوفر بيئة عصرية ومريحة للعائلات، يتميز بتصميمات معمارية فاخرة وحدائق خضراء ومرافق ترفيهية متكاملة تشمل حمامات سباحة وصالات رياضية ومناطق لعب للأطفال.",
          descriptionEn: "An upscale residential complex providing a modern and comfortable environment for families, featuring luxurious architectural designs, green gardens, and comprehensive recreational facilities including swimming pools, gyms, and children's play areas.",
          image: "/images/projects/Housing Projects/AJDAN/1.jpg",
          number: "03",
        },
        {
          id: 4,
          title: "مياهنا - المقر الرئيسي الجديد",
          subtitle: "مشاريع تجارية",
          titleEn: "Miahona NEW Head Office",
          description: "مبنى إداري حديث يعكس الاحترافية والتميز، مصمم بأحدث المعايير الهندسية ليوفر بيئة عمل مثالية مع قاعات اجتماعات مجهزة بالكامل وأنظمة أمان متطورة وتقنيات ذكية لإدارة المبنى.",
          descriptionEn: "A modern administrative building reflecting professionalism and excellence, designed with the latest engineering standards to provide an ideal work environment with fully equipped meeting halls, advanced security systems, and smart building management technologies.",
          image: "/images/projects/Commercial Projects/Miahona/12.jpg",
          number: "04",
        },
      ]
    },
    en: {
      subtitle: "our projects",
      title: "Latest Architectural and Construction Projects",
      allProjects: "All Projects",
      projects: [
        {
          id: 1,
          title: "RIMA 1",
          subtitle: "Commercial Projects",
          titleEn: "RIMA 1",
          description: "An integrated commercial complex combining modern design with multifunctional spaces, featuring retail stores and administrative offices with spacious areas and modern facilities that meet the needs of entrepreneurs and customers alike.",
          descriptionEn: "An integrated commercial complex combining modern design with multifunctional spaces, featuring retail stores and administrative offices with spacious areas and modern facilities that meet the needs of entrepreneurs and customers alike.",
          image: "/images/projects/buildings/Rima1/2.jpg",
          number: "01",
        },
        {
          id: 2,
          title: "Grand Hyper",
          subtitle: "Commercial Projects",
          titleEn: "Grand Hyper",
          description: "A massive commercial market providing a unique shopping experience with innovative architectural design, including spacious retail areas, multi-story parking facilities, and modern air conditioning and lighting systems ensuring visitor comfort.",
          descriptionEn: "A massive commercial market providing a unique shopping experience with innovative architectural design, including spacious retail areas, multi-story parking facilities, and modern air conditioning and lighting systems ensuring visitor comfort.",
          image: "/images/projects/Commercial Projects/GrandMall/1.jpg",
          number: "02",
        },
        {
          id: 3,
          title: "AJDAN",
          subtitle: "Housing Projects",
          titleEn: "AJDAN",
          description: "An upscale residential complex providing a modern and comfortable environment for families, featuring luxurious architectural designs, green gardens, and comprehensive recreational facilities including swimming pools, gyms, and children's play areas.",
          descriptionEn: "An upscale residential complex providing a modern and comfortable environment for families, featuring luxurious architectural designs, green gardens, and comprehensive recreational facilities including swimming pools, gyms, and children's play areas.",
          image: "/images/projects/Housing Projects/AJDAN/1.jpg",
          number: "03",
        },
        {
          id: 4,
          title: "Miahona NEW Head Office",
          subtitle: "Commercial Projects",
          titleEn: "Miahona NEW Head Office",
          description: "A modern administrative building reflecting professionalism and excellence, designed with the latest engineering standards to provide an ideal work environment with fully equipped meeting halls, advanced security systems, and smart building management technologies.",
          descriptionEn: "A modern administrative building reflecting professionalism and excellence, designed with the latest engineering standards to provide an ideal work environment with fully equipped meeting halls, advanced security systems, and smart building management technologies.",
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
            <span className="block bg-gradient-to-r from-[#49A799] to-[#3A8A7E] bg-clip-text text-transparent">{secondLine}</span>
          </motion.h2>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] mx-auto rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Scroll Section */}
      <section
        ref={containerRef}
        className="relative bg-white w-full"
        style={{ height: `${projects.length * 100}vh` }}
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
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(isPreloaded);
  const isRTL = currentLang === 'ar';
  const isLast = index === totalProjects - 1;
  const isFirst = index === 0;
  const isEven = index % 2 === 0;

  const fadeInStart = range[0];
  const fadeInEnd = range[0] + 0.2;
  const stayStart = fadeInEnd;
  const stayEnd = range[1] - 0.2;
  const fadeOutStart = stayEnd;
  const fadeOutEnd = range[1];

  const opacity = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayStart, stayEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [fadeInStart, fadeInEnd, stayEnd, fadeOutEnd],
    [0.8, 1, 1, 0.8]
  );

  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 30,
  });
  
  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 30,
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
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        opacity: smoothOpacity,
        scale: smoothScale,
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Side */}
          <motion.div
            className={`relative w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-3xl shadow-2xl group ${getImageOrder()}`}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
            )}

            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={isRTL ? project.title : project.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                priority={index < 2}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#49A799]/60 via-transparent to-transparent group-hover:opacity-30 transition-opacity duration-300" />
            
            <div className="absolute inset-0 border-4 border-[#49A799]/0 group-hover:border-[#49A799]/60 rounded-3xl transition-all duration-300" />
          </motion.div>

          {/* Content Side */}
          <div
            className={`space-y-4 ${getContentOrder()} ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <p className="text-sm sm:text-base uppercase tracking-wider text-[#49A799] font-bold">
              {isRTL ? project.subtitle : project.subtitle}
            </p>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              {isRTL ? project.title : project.titleEn}
            </h3>

            <div className="h-1 bg-gradient-to-r from-[#49A799] to-[#3A8A7E] w-20 rounded-full" />

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {isRTL ? project.description : project.descriptionEn}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="text-3xl md:text-4xl font-bold text-[#49A799]">
                  {project.number}
                </span>
                <span className="text-2xl font-light text-gray-500">
                  / 04
                </span>
              </div>

              <button 
                onClick={() => router.push(`/${currentLang}/projects`)}
                className="group relative w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative border-2 border-[#49A799] bg-[#49A799] hover:bg-white text-white hover:text-[#49A799] px-8 py-3 text-base font-bold transition-all duration-300 rounded-lg shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isRTL ? "استكشف المشروع" : "EXPLORE PROJECT"}
                  </span>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}