// src/data/yamas-projects.ts - COMPLETE FILE (ALL PROJECTS KEPT, ONLY UPDATED THOSE IN WORD DOC)

export interface YamasProject {
  id: string;
  title: string;
  titleEn: string;
  category:
    | "healthcare"
    | "housing"
    | "educational"
    | "commercial"
    | "industrial"
    | "government"
    | "towers"
    | "charitable";

  categoryAr: string;
  categoryEn: string;
  client: string;
  clientEn?: string;
  location: string;
  locationEn: string;
  contractValue: string;
  year: string;
  status: "completed" | "ongoing" | "development";
  mainImage: string;
  images: string[];
  description: string;
  descriptionEn: string;
  scope: string[];
  scopeEn: string[];
  area?: string;
  features?: string[];
  featuresEn?: string[];
}

export interface ProjectCategory {
  id: string;
  nameAr: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  color: string;
  projects: YamasProject[];
}

// ============================================
// 🏥 HEALTHCARE PROJECTS
// ============================================
const healthcareProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "one-day-surgery-dammam",
    title: "مبني جراحة اليوم الواحد ",
    titleEn: "One Day Surgery Building ",
    category: "healthcare",
    categoryAr: "مشاريع الصحية",
    categoryEn: "Healthcare",
    client: "وزارة الصحة",
    clientEn: "Ministry of Health (MOH)",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "13,000,000",
    year: "2022",
    status: "completed",
    mainImage: "/images/projects/Healthcare/OneDaySurgery/1.png",
    images: [
      "/images/projects/Healthcare/OneDaySurgery/1.png",
      "/images/projects/Healthcare/OneDaySurgery/2.png",
      "/images/projects/Healthcare/OneDaySurgery/3.png",
      "/images/projects/Healthcare/OneDaySurgery/4.png",
      "/images/projects/Healthcare/OneDaySurgery/5.png",
    ],
    description: "تنفيذ مبنى جراحة اليوم الواحد وفق أعلى المعايير الهندسية والطبية، متضمناً تجهيز غرف العمليات وغرف الإفاقة ووفقا للمعايير الطبيه وكذلك معايير SABAHI. يشمل المشروع الأعمال الإنشائية وأعمال التشطيبات والأنظمة الكهروميكانيكية وأنظمة الغازات الطبية.",
    descriptionEn: "Execution of a one-day surgery building according to the highest engineering and medical standards, including preparation of operating rooms and recovery rooms according to medical standards and SABAHI standards. The project includes construction works, finishing works, electromechanical systems, and medical gas systems.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات",
      "الأنظمة الكهروميكانيكية بما يضمن بيئة تشغيل آمنة ومتطورة",
      "أنظمة الغازات الطبية"
    ],
    scopeEn: [
      "Construction works",
      "Finishing works",
      "Electromechanical systems ensuring a safe and advanced operating environment",
      "Medical gas systems"
    ],
    area: "3200 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "bisha-hospital-100",
    title: "مستشفى بيشة  100 سرير",
    titleEn: "Bisha Hospital  100 Beds",
    category: "healthcare",
    categoryAr: "مشاريع الصحية",
    categoryEn: "Healthcare",
    client: "وزارة الصحة",
    clientEn: "Ministry of Health (MOH)",
    location: "بيشة، المنطقة الجنوبية",
    locationEn: "Bisha, Asir Region",
    contractValue: "1,490,500",
    year: "2022",
    status: "completed",
    mainImage: "/images/projects/Healthcare/Constructionof100Bed/1.png",
    images: [
      "/images/projects/Healthcare/Constructionof100Bed/1.png",
      "/images/projects/Healthcare/Constructionof100Bed/2.png",
      "/images/projects/Healthcare/Constructionof100Bed/3.png",
      "/images/projects/Healthcare/Constructionof100Bed/4.png",
      "/images/projects/Healthcare/Constructionof100Bed/5.png",
    ],
    description: "إنشاء وتجهيز منشأة صحية متكاملة بطاقة استيعابية 100 سرير، مع تنفيذ أعمال داخلية وأنظمة تشغيل تدعم متطلبات بيئة الرعاية الطبية الحديثة. يشمل المشروع: الأعمال الإنشائية، أعمال التشطيبات، الأنظمة الكهروميكانيكية، وأنظمة الغازات الطبية.",
    descriptionEn: "Construction and equipping of an integrated healthcare facility with capacity of 100 beds, including interior works and operating systems supporting modern medical care environment requirements. The project includes: construction works, finishing works, electromechanical systems, and medical gas systems.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات",
      "الأنظمة الكهروميكانيكية",
      "أنظمة الغازات الطبية"
    ],
    scopeEn: [
      "Construction works",
      "Finishing works",
      "Electromechanical systems",
      "Medical gas systems"
    ],
    area: "1,500 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "vaccine-center-64",
    title: "مركز تطعيم  64 غرفة",
    titleEn: "Vaccination Center  64 Rooms",
    category: "healthcare",
    categoryAr: "مشاريع الصحية",
    categoryEn: "Healthcare",
    client: "وزارة الصحة",
    clientEn: "Ministry of Health (MOH)",
    location: "الخبر، المنطقة الشرقية",
    locationEn: "Khobar, Eastern Province",
    contractValue: "1,290,500",
    year: "2021",
    status: "completed",
    mainImage: "/images/projects/Healthcare/vaccine-center-64-bed/1.png",
    images: [
      "/images/projects/Healthcare/vaccine-center-64-bed/1.png",
      "/images/projects/Healthcare/vaccine-center-64-bed/2.png",
      "/images/projects/Healthcare/vaccine-center-64-bed/3.png",
      "/images/projects/Healthcare/vaccine-center-64-bed/4.png",
    ],
    description: "إنشاء مركز تطعيم متكامل يضم 64 غرفة، مع تنفيذ أعمال داخلية وأنظمة تشغيل تدعم الكفاءة العالية واستمرارية الخدمة. يعكس المشروع قدرة تنفيذية على إدارة كثافة التشغيل وتقديم خدمات صحية بجودة وسرعة وفق المعايير المعتمدة. يشمل المشروع: الأعمال الإنشائية، أعمال التشطيبات، الأنظمة الكهروميكانيكية، وأنظمة الغازات الطبية.",
    descriptionEn: "Construction of an integrated vaccination center comprising 64 rooms, including interior works and operating systems supporting high efficiency and service continuity. The project reflects executive capability in managing operational density and delivering quality health services quickly according to approved standards. The project includes: construction works, finishing works, electromechanical systems, and medical gas systems.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات",
      "الأنظمة الكهروميكانيكية",
      "أنظمة الغازات الطبية"
    ],
    scopeEn: [
      "Construction works",
      "Finishing works",
      "Electromechanical systems",
      "Medical gas systems"
    ],
    area: "1,250 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "abha-hospital-300",
    title: "مستشفى أبها  300 سرير",
    titleEn: "Abha Hospital  300 Beds",
    category: "healthcare",
    categoryAr: "مشاريع الصحية",
    categoryEn: "Healthcare",
    client: "وزارة الصحة",
    clientEn: "Ministry of Health (MOH)",
    location: "أبها، المنطقة الجنوبية",
    locationEn: "Abha, Asir Region",
    contractValue: "28,000,000",
    year: "2020",
    status: "completed",
    mainImage: "/images/projects/Healthcare/AbhaHospital300Beds/1.png",
    images: [
      "/images/projects/Healthcare/AbhaHospital300Beds/1.png",
      "/images/projects/Healthcare/AbhaHospital300Beds/2.png",
      "/images/projects/Healthcare/AbhaHospital300Beds/3.png",
      "/images/projects/Healthcare/AbhaHospital300Beds/4.png",
    ],
    description: "تنفيذ مشروع مستشفى متكامل بسعة 300 سرير، يشمل أعمال إنشائية وتشطيبات داخلية وأنظمة تشغيل متطورة تلبي متطلبات المرافق الصحية الحديثة. يعكس المشروع خبرة متقدمة في إدارة وتنفيذ المشاريع الطبية الكبرى وفق أعلى معايير الجودة والكفاءة التشغيلية. يشمل المشروع: الأعمال الإنشائية، أعمال التشطيبات، الأنظمة الكهروميكانيكية، والأنظمة والمعدات الطبية.",
    descriptionEn: "Execution of an integrated hospital project with capacity of 300 beds, including construction works, interior finishes, and advanced operating systems meeting modern healthcare facility requirements. The project reflects advanced expertise in managing and executing major medical projects according to highest quality and operational efficiency standards. The project includes: construction works, finishing works, electromechanical systems, and medical systems and equipment.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات",
      "الأنظمة الكهروميكانيكية",
      "الأنظمة والمعدات الطبية"
    ],
    scopeEn: [
      "Construction works",
      "Finishing works",
      "Electromechanical systems",
      "Medical systems and equipment"
    ],
    area: "6700 م²",
  },
  // ✅ باقي كما هو (لم يرد في Word)
  {
    id: "hail-hospital-200",
    title: "مستشفى حائل 200 سرير",
    titleEn: "Hail 200 Bed Hospital",
    category: "healthcare",
    categoryAr: "مشاريع الصحية",
    categoryEn: "Healthcare",
    client: "وزارة الصحة",
    clientEn: "Ministry of Health (MOH)",
    location: "حائل، المنطقة الشمالية",
    locationEn: "Hail, Hail Region",
    contractValue: "4,645,377",
    year: "2020",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مستشفى بطاقة 200 سرير",
    descriptionEn: "Construction of 200-bed hospital in Hail city",
    scope: [
      "مبنى المستشفى الرئيسي",
      "أقسام طبية متعددة",
      "أعمال أنظمة MEP",
      "المرافق الطبية",
    ],
    scopeEn: [
      "Main hospital building",
      "Multiple medical departments",
      "MEP systems",
      "Medical facilities",
    ],
  },
];

// ============================================
// 🏘️ HOUSING PROJECTS
// ============================================
const housingProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "abyat-rose",
    title: "أبياتنا روز ",
    titleEn: "Abyat Rose ",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "شركة أبياتنا للتطوير العقاري",
    clientEn: "Abyatna Real Estate Development Company",
    location: "الرياض، المنطقة الوسطى ",
    locationEn: "Riyadh, Central Region - Al-Fursan District",
    contractValue: "55,000,125",
    year: "2025",
    status: "ongoing",
    mainImage: "/images/projects/Housing Projects/Al-FursanFacade/3.png",
    images: [
      "/images/projects/Housing Projects/Al-FursanFacade/1.png",
      "/images/projects/Housing Projects/Al-FursanFacade/2.png",
      "/images/projects/Housing Projects/Al-FursanFacade/3.png",
      "/images/projects/Housing Projects/Al-FursanFacade/4.png",
      "/images/projects/Housing Projects/Al-FursanFacade/5.png",
      "/images/projects/Housing Projects/Al-FursanFacade/6.png",
      "/images/projects/Housing Projects/Al-FursanFacade/7.png",
    ],
    description: "تنفيذ مشروع سكني متكامل يضم 67 فيلا بتصميمين معماريين مختلفين، مع أعمال بناء وتشطيبات عالية الجودة وأنظمة تشغيل متكاملة. يعكس المشروع مستوى متقدم في تطوير المجتمعات السكنية وفق معايير حديثة تلبي متطلبات جودة الحياة.",
    descriptionEn: "Execution of an integrated residential project comprising 67 villas with two different architectural designs, including high-quality construction, finishes, and integrated operating systems. The project reflects an advanced level in developing residential communities according to modern standards meeting quality of life requirements.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems"
    ],
    area: "22,000 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "arceilia",
    title: "أرسيليا ",
    titleEn: "Arceilia ",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "شركة الدارة للتطوير العقاري",
    clientEn: "Al-Darah Real Estate Development Company",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Region",
    contractValue: "30,000,000",
    year: "2025",
    status: "ongoing",
    mainImage: "/images/projects/Housing Projects/Arceilia/1.png",
    images: [
      "/images/projects/Housing Projects/Arceilia/2.png",
      "/images/projects/Housing Projects/Arceilia/5.png",
      "/images/projects/Housing Projects/Arceilia/6.png",
      "/images/projects/Housing Projects/Arceilia/7.png",
      "/images/projects/Housing Projects/Arceilia/8.png",
      "/images/projects/Housing Projects/Arceilia/9.png",
      "/images/projects/Housing Projects/Arceilia/10.png",
      "/images/projects/Housing Projects/Arceilia/15.png",
      "/images/projects/Housing Projects/Arceilia/18.png",
      "/images/projects/Housing Projects/Arceilia/19.png",
    ],
    description: "تنفيذ مشروع سكني فاخر يضم 32 فيلا بأربعة تصاميم معمارية أنيقة، مع تشطيبات عالية الجودة وأنظمة تشغيل متكاملة. يعكس المشروع مستوى متقدم في تنفيذ الوحدات السكنية الراقية بما يواكب معايير الفخامة والتميز.",
    descriptionEn: "Execution of a luxury residential project comprising 32 villas with four elegant architectural designs, with high-quality finishes and integrated operating systems. The project reflects an advanced level in executing upscale residential units in line with luxury and distinction standards.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems"
    ],
    area: "10,000 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "darah-alqamrah",
    title: "داره القمره",
    titleEn: "Darah Al Qamrah ",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "شركة أجدان للتطوير العقاري",
    clientEn: "AJDAN Real Estate Development Company",
    location: "صفوى، المنطقة الشرقية",
    locationEn: "Safwa, Eastern Area",
    contractValue: "127,499,580",
    year: "2024",
    status: "completed",
    mainImage: "/images/projects/Housing Projects/AJDAN/1.jpg",
    images: [
      "/images/projects/Housing Projects/AJDAN/1.jpg",
      "/images/projects/Housing Projects/AJDAN/16.png",
      // "/images/projects/Housing Projects/AJDAN/5.jpg",
      "/images/projects/Housing Projects/AJDAN/14.png",
      "/images/projects/Housing Projects/AJDAN/15.png",
      // "/images/projects/Housing Projects/AJDAN/4.jpg",
      "/images/projects/Housing Projects/AJDAN/8.jpg",
      "/images/projects/Housing Projects/AJDAN/12.png",
      "/images/projects/Housing Projects/AJDAN/13.png",
      "/images/projects/Housing Projects/AJDAN/9.jpg",
    ],
    description: "تنفيذ مشروع سكني متكامل يضم 220 فيلا فاخرة بتصاميم حديثة موزعة على أدوار متعددة، مع أعمال بناء وتشطيبات وأنظمة هندسية متكاملة. يبرز المشروع خبرة في تطوير مجتمعات سكنية راقية تجمع بين جودة التنفيذ وتكامل العناصر المعمارية والخدمية.",
    descriptionEn: "Execution of an integrated residential project comprising 220 luxury villas with modern designs distributed over multiple floors, including construction, finishing, and integrated engineering systems. The project highlights expertise in developing upscale residential communities combining execution quality with integrated architectural and service elements.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems"
    ],
    area: "300,000 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "alfulwa-roshn",
    title: "الفلوة روشن ",
    titleEn: "Al Fulwa Roshn",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "روشن - العيوني للاستثمار",
    clientEn: "ROSHAN - Aluyouni Investment",
    location: "الأحساء، المنطقة الشرقية",
    locationEn: "Al-Ahsa, Eastern Area",
    contractValue: "227,000,000",
    year: "2024",
    status: "development",
    mainImage: "/images/projects/Housing Projects/Fulwa/3.jfif",
    images: [
      "/images/projects/Housing Projects/Fulwa/1.png",
      "/images/projects/Housing Projects/Fulwa/2.png",
      "/images/projects/Housing Projects/Fulwa/3.jfif",
      "/images/projects/Housing Projects/Fulwa/4.jfif",
      "/images/projects/Housing Projects/Fulwa/5.jfif",
    ],
    description: "تنفيذ مشروع سكني واسع النطاق يضم 439 فيلا فاخرة وفق معايير روشن، بتصاميم حديثة تمتد على مساحات مدروسة تعكس جودة التخطيط والتنفيذ. يجسد المشروع نموذجاً متكاملاً للتطوير السكني الراقي، مع اهتمام بالتفاصيل المعمارية وتطبيق أعلى معايير الجودة في البناء والتشطيبات.",
    descriptionEn: "Execution of a large-scale residential project comprising 439 luxury villas according to Roshn standards, with modern designs extending over well-studied areas reflecting planning and execution quality. The project embodies an integrated model for upscale residential development, with attention to architectural details and application of highest quality standards in construction and finishes.",
    scope: [
      "الأعمال الإنشائية من البريكاست",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية"
    ],
    scopeEn: [
      "Precast construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems"
    ],
    area: "153,650 م²",
  },
  // ✅ باقي كما هو (لم يرد في Word)
  {
    id: "ajyal-dhahran",
    title: "أجيال الظهران - أرامكو",
    titleEn: "Ajyal Al-Dhahran Project - Aramco",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "أرامكو السعودية",
    clientEn: "Saudi Aramco",
    location: "الظهران، المنطقة الشرقية",
    locationEn: "Dhahran, Eastern Area",
    contractValue: "149,000,000",
    year: "2021",
    status: "completed",
    mainImage: "",
    images: [],
    description: "أعمال التشطيب لـ 149 فيلا فاخرة بدور أرضي وأول وسطح  حسب مواصفات وجودة شركة أرامكو السعودية ، بمساحة بناء 59,600 متر مربع",
    descriptionEn: "Finishing works for 149 luxury villas with ground, first, and roof floors at NHC level, 59,600 sqm built-up area",
    scope: [
      "تصميم وتنفيذ أعمال التشطيبات الفاخرة",
      "الأعمال الكهربائية والميكانيكية",
    ],
    scopeEn: [
      "Design & execution of luxury finishing works",
      "Electrical & mechanical works",
    ],
    area: "59,600 م²",
  },
  // ✅ باقي كما هو
  {
    id: "tamkeen-4",
    title: "تمكين 4",
    titleEn: "Tamkeen 4",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "قطاع خاص",
    clientEn: "Tamkeen",
    location: "الخبر، المنطقة الشرقية",
    locationEn: "Khobar, Eastern Area",
    contractValue: "61,520,000",
    year: "2016",
    status: "completed",
    mainImage: "/images/projects/Housing Projects/tamkeen-4/1.png",
    images: ["/images/projects/Housing Projects/tamkeen-4/1.png"],
    description: "إنشاء 204 فيلا سكنية",
    descriptionEn: "Construction of 204 residential villas",
    scope: [
      "التصميم والتنفيذ",
      "أعمال البناء",
      "أعمال التشطيبات",
      "الأعمال الكهربائية والميكانيكية",
      "Landscaping",
    ],
    scopeEn: [
      "Design & execution",
      "Construction works",
      "Finishing works",
      "Electrical, mechanical & plumbing works",
      "Landscaping & external works",
    ],
  },
  // ✅ باقي كما هو
  // {
  //   id: "argan-plains",
  //   title: "أرجان السهول",
  //   titleEn: "Argan Plains Project",
  //   category: "housing",
  //   categoryAr: "مشاريع سكنية",
  //   categoryEn: "Housing Projects",
  //   client: "شركة أرجان للمشاريع",
  //   clientEn: "Argan Projects Company",
  //   location: "الجبيل، المنطقة الشرقية",
  //   locationEn: "Jubail, Eastern Area",
  //   contractValue: "35,000,000",
  //   year: "2024",
  //   status: "development",
  //   mainImage: "",
  //   images: [],
  //   description: "إنشاء 18 فيلا سكنية خاصة بمستوى تشطيب عالي، بمساحة إجمالية تتجاوز 10,000 متر مربع",
  //   descriptionEn: "Construction of 18 private residential villas with high finishing level, total area exceeding 10,000 sqm",
  //   scope: [
  //     "فلل خاصة راقية",
  //     "تشطيبات فاخرة",
  //     "تصميم معماري مميز",
  //     "Landscaping",
  //     "مرافق متكاملة",
  //   ],
  //   scopeEn: [
  //     "Upscale private villas",
  //     "Luxury finishes",
  //     "Distinguished architectural design",
  //     "Private gardens",
  //     "Complete facilities",
  //   ],
  //   area: "10,000+ م²",
  // },
];

// ============================================
// 🎓 EDUCATIONAL PROJECTS
// ============================================
const educationalProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "kfupm-maintenance",
    title: "مشروع جامعة الملك فهد للبترول والمعادن ",
    titleEn: "King Fahd University of Petroleum and Minerals ",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "جامعة الملك فهد للبترول والمعادن",
    clientEn: "King Fahd University of Petroleum and Minerals (KFUPM)",
    location: "الظهران، المنطقة الشرقية",
    locationEn: "Dhahran, Eastern Area",
    contractValue: "13,000,000",
    year: "2026",
    status: "completed",
    mainImage: "/images/projects/Education/KingFahdUniversity/1.png",
    images: [
      "/images/projects/Education/KingFahdUniversity/1.png",
      "/images/projects/Education/KingFahdUniversity/2.png",
    ],
    description: "تنفيذ أعمال صيانة وترميم شاملة لخمسة مبانٍ، مع تحديث الأنظمة الهندسية والتشطيبات بما يواكب المعايير الحديثة. يجسد المشروع دقة في إعادة إحياء المباني ورفع كفاءتها لتواكب أعلى مستويات الأداء والاستدامة.",
    descriptionEn: "Execution of comprehensive maintenance and restoration works for five buildings, updating engineering systems and finishes in line with modern standards. The project embodies precision in reviving buildings and raising their efficiency to meet highest levels of performance and sustainability.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
  // ✅ محدث من ملف Word
  {
    id: "boys-schools",
    title: "مدارس البنين ",
    titleEn: "Boys Schools ",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارةالتربية و التعليم",
    clientEn: "Ministry of Education (MOE)",
    location: "جدة، المنطقة الغربية",
    locationEn: "Jeddah, Western Area",
    contractValue: "16,000,000",
    year: "2021",
    status: "completed",
    mainImage: "/images/projects/Education/Banen/6.png",
    images: [
      "/images/projects/Education/Banen/1.png",
      "/images/projects/Education/Banen/2.png",
      "/images/projects/Education/Banen/3.png",
      "/images/projects/Education/Banen/4.png",
      "/images/projects/Education/Banen/5.png",
      "/images/projects/Education/Banen/7.png"
    ],
    description: "تصميم وتنفيذ مجمع تعليمي يعكس رؤية معمارية حديثة، من خلال توزيع مدروس للكتل والممرات يحقق كفاءة الحركة وتكامل الفراغات التعليمية. يبرز المشروع كبيئة تعليمية متوازنة تجمع بين الوظيفة والجمال المعماري، مع اهتمام بالتفاصيل وجودة التنفيذ.",
    descriptionEn: "Design and execution of an educational complex reflecting a modern architectural vision, through a studied distribution of blocks and corridors achieving movement efficiency and integration of educational spaces. The project stands out as a balanced educational environment combining function and architectural beauty, with attention to detail and execution quality.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام والملاعب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
    area: "9800 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "medicine-faculty-najran",
    title: "جامعة نجران -- كلية الطب",
    titleEn: "Najran University - Faculty of Medicine",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارة التعليم العالي",
    clientEn: "Ministry of Higher Education (MOHE)",
    location: "نجران، المنطقة الجنوبية",
    locationEn: "Najran, Southern Area",
    contractValue: "22,336,554",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "تنفيذ مبنى أكاديمي متكامل لكلية الطب وفق أعلى المعايير، ليواكب متطلبات التعليم الطبي الحديث ويعزز بيئة تعليمية متقدمة.",
    descriptionEn: "Execution of an integrated academic building for the Faculty of Medicine according to highest standards, to keep pace with modern medical education requirements and enhance an advanced educational environment.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
  // ✅ محدث من ملف Word
  {
    id: "science-college-najran",
    title: "جامعة نجران -- كلية العلوم",
    titleEn: "Najran University - College of Science",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارة التعليم",
    clientEn: "Ministry of Education (MOE)",
    location: "نجران، المنطقة الجنوبية",
    locationEn: "Najran, Southern Area",
    contractValue: "135,000,000",
    year: "2018",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مبنى تعليمي حديث لكلية العلوم، يعكس جودة التنفيذ ودقة التصميم في دعم العملية التعليمية والبحثية.",
    descriptionEn: "Construction of a modern educational building for the College of Science, reflecting execution quality and design precision in supporting the educational and research process.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
  // ✅ محدث من ملف Word
  {
    id: "pharmacy-college-najran",
    title: "جامعة نجران -- كلية الصيدلة",
    titleEn: "Najran University - College of Pharmacy",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارة التعليم",
    clientEn: "Ministry of Education (MOE)",
    location: "نجران، المنطقة الجنوبية",
    locationEn: "Najran, Southern Area",
    contractValue: "123,971,700",
    year: "2018",
    status: "completed",
    mainImage: "",
    images: [],
    description: "تطوير مبنى أكاديمي متخصص لكلية الصيدلة، بتجهيزات متكاملة تواكب متطلبات التعليم والتطبيق العملي في المجال الطبي.",
    descriptionEn: "Development of a specialized academic building for the College of Pharmacy, with integrated equipment meeting requirements of education and practical application in the medical field.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
];

// ============================================
// 🏢 COMMERCIAL PROJECTS
// ============================================
const commercialProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "grand-hyper",
    title: "جراند هايبر ",
    titleEn: "Grand Hyper ",
    category: "commercial",
    categoryAr: "مشاريع تجارية",
    categoryEn: "Commercial Projects",
    client: "جراند هايبر",
    clientEn: "Grand Hyper",
    location: "الجبيل، المنطقة الشرقية",
    locationEn: "Jubail, Eastern Area",
    contractValue: "30,000,000",
    year: "2025",
    status: "ongoing",
    mainImage: "/images/projects/Commercial Projects/GrandMall/1.jpeg",
    images: [
      "/images/projects/Commercial Projects/GrandMall/1.jpeg",
      "/images/projects/Commercial Projects/GrandMall/2.jpeg",
      "/images/projects/Commercial Projects/GrandMall/3.jpeg",
      "/images/projects/Commercial Projects/GrandMall/4.jpeg",
    ],
    description: "تطوير وجهة تجارية متكاملة بمساحة 16,000 م² تضم هايبر ماركت ومحلات متعددة، مع بنية خدمية متقدمة تشمل مواقف ضخمة ومحطة كهرباء مستقلة. يجسد المشروع قدرة تنفيذية عالية في إدارة وتشغيل المشاريع التجارية الكبرى بكفاءة وتنظيم يعزز تجربة المستخدم.",
    descriptionEn: "Development of an integrated commercial destination with area of 16,000 sqm, including a hypermarket and multiple shops, with advanced service structure including massive parking and independent electrical substation. The project embodies high executive capability in managing and operating major commercial projects efficiently and in an organized manner enhancing user experience.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب",
      "أعمال التجهيزات والمعدات الداخلية"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping",
      "Interior equipment and fittings works"
    ],
    area: "16,000 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "miahona-office",
    title: "المقر الرئيسي الجديد لمياهنا ",
    titleEn: "Miahona New Head Office ",
    category: "commercial",
    categoryAr: "مشاريع تجارية",
    categoryEn: "Commercial Projects",
    client: "شركة مياهنا",
    clientEn: "Miahona Company",
    location: "الرياض، المنطقة الوسطى",
    locationEn: "Riyadh, Central Area",
    contractValue: "12,000,000",
    year: "2025",
    status: "completed",
    mainImage: "/images/projects/Commercial Projects/Miahona/1.jpg",
    images: [
      "/images/projects/Commercial Projects/Miahona/1.jpg",
      "/images/projects/Commercial Projects/Miahona/2.jpg",
      "/images/projects/Commercial Projects/Miahona/3.jpg",
      "/images/projects/Commercial Projects/Miahona/4.jpg",
      "/images/projects/Commercial Projects/Miahona/5.jpg",
      "/images/projects/Commercial Projects/Miahona/6.jpg",
      "/images/projects/Commercial Projects/Miahona/7.jpg",
      "/images/projects/Commercial Projects/Miahona/8.jpg",
      "/images/projects/Commercial Projects/Miahona/9.jpg",
      "/images/projects/Commercial Projects/Miahona/10.jpg",
      "/images/projects/Commercial Projects/Miahona/11.jpg",
      "/images/projects/Commercial Projects/Miahona/12.jpg",
      "/images/projects/Commercial Projects/Miahona/13.jpg",
    ],
    description: "تهيئة مقر إداري حديث من خلال أعمال تشطيبات متقنة وتجهيزات متكاملة تشمل الأنظمة الفنية والتأثيث بما يعكس طابعاً مؤسسياً احترافياً. يقدم المشروع بيئة عمل عصرية مدعومة بحلول هندسية دقيقة تعزز كفاءة الأداء وجودة الاستخدام اليومي.",
    descriptionEn: "Preparation of a modern administrative headquarters through meticulous finishing works and integrated equipment including technical systems and furnishing, reflecting a professional institutional character. The project offers a contemporary work environment supported by precise engineering solutions enhancing performance efficiency and quality of daily use.",
    scope: [
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الفرش الداخلي"
    ],
    scopeEn: [
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "Interior furnishing works"
    ],
  },
  // ✅ محدث من ملف Word
  {
    id: "aljomaih-showroom",
    title: "صالة عرض INEOS",
    titleEn: "INEOS Showroom - Car Showroom",
    category: "commercial",
    categoryAr: "مشاريع تجارية",
    categoryEn: "Commercial Projects",
    client: "شركة الجميح للسيارات",
    clientEn: "Al Jomaih Automotive Company",
    location: "الرياض، المنطقة الوسطى",
    locationEn: "Riyadh, Central Area",
    contractValue: "35,000,000",
    year: "2024",
    status: "completed",
    mainImage: "/images/projects/Commercial Projects/Aljumaih/1.png",
    images: [
      "/images/projects/Commercial Projects/Aljumaih/1.png",
      "/images/projects/Commercial Projects/Aljumaih/2.png",
      "/images/projects/Commercial Projects/Aljumaih/3.png",
      "/images/projects/Commercial Projects/Aljumaih/4.png",
      "/images/projects/Commercial Projects/Aljumaih/5.png",
      "/images/projects/Commercial Projects/Aljumaih/6.png",
      "/images/projects/Commercial Projects/Aljumaih/7.png",
    ],
    description: "تطوير صالة عرض متكاملة لعلامة INEOS بمساحة 8,500 م²، بتصميم يعزز إبراز الهوية البصرية ويوفر تجربة عرض متميزة للعملاء. يجسد المشروع مستوى عالٍ من الإتقان في تنفيذ المساحات التجارية مع دمج الحلول الهندسية والتشطيبات الراقية لدعم حضور العلامة في السوق.",
    descriptionEn: "Development of an integrated showroom for the INEOS brand with area of 8,500 sqm, with a design enhancing visual identity and providing a distinctive display experience for customers. The project embodies a high level of mastery in executing commercial spaces, integrating engineering solutions and premium finishes to support the brand's market presence.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
    area: "8,500 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "aljomaih-maintenance",
    title: "تجديد مركز صيانة وكالة الجميح للسيارات ",
    titleEn: "Al Jomaih Maintenance Center Renewal - Integrated Maintenance Center",
    category: "commercial",
    categoryAr: "مشاريع تجارية",
    categoryEn: "Commercial Projects",
    client: "شركة الجميح للسيارات",
    clientEn: "Al Jomaih Automotive Company",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "35,000,000",
    year: "2024",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إعادة تأهيل مركز الصيانة من خلال تطوير بيئة العمل وتجهيزها بأنظمة حديثة تدعم كفاءة التشغيل وجودة التنفيذ. يعكس المشروع تحسيناً ملموساً في أداء الخدمات وسرعة الإنجاز مع تقديم تجربة أكثر احترافية للعملاء.",
    descriptionEn: "Rehabilitation of the maintenance center by developing the work environment and equipping it with modern systems supporting operational efficiency and execution quality. The project reflects tangible improvement in service performance and completion speed, providing a more professional experience for customers.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems"
    ],
  },
];

// ============================================
// 🏗️ TOWERS PROJECTS
// ============================================
const towersProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "afoner-elforsan",
    title: "أفونير الفرسان ",
    titleEn: "Afoner Elforsan ",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "شركة شرفة للتطوير العقاري",
    clientEn: "Future Homes Investment Co.",
    location: "الرياض، المنطقة الوسطى",
    locationEn: "Riyadh, Central Region",
    contractValue: "18,500,000",
    year: "2026",
    status: "ongoing",
    mainImage: "/images/projects/Housing Projects/shofa/1.jpg",
    images: [
      "/images/projects/Housing Projects/shofa/1.jpg",
      "/images/projects/Housing Projects/shofa/2.jpg",
      "/images/projects/Housing Projects/shofa/3.jpg",
      "/images/projects/Housing Projects/shofa/4.jpg",
    ],
    description: "تطوير مجمع متعدد الاستخدامات يضم ثلاثة أبراج سكنية مع مساحات تجارية داخلية وخارجية، ضمن تخطيط متكامل يعزز كفاءة استغلال المساحة وجودة التنفيذ. يعكس المشروع قدرة على إدارة وتنفيذ مشاريع متكاملة بدءاً من الهيكل الإنشائي وحتى التشطيبات والأنظمة، وفق رؤية حديثة تجمع بين السكن والاستثمار.",
    descriptionEn: "Development of a mixed-use complex comprising three residential towers with internal and external commercial areas, within an integrated plan enhancing space utilization efficiency and execution quality. The project reflects the ability to manage and execute integrated projects from the structural shell to finishes and systems, according to a modern vision combining housing and investment.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
    area: "10,762 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "rima-tower-1",
    title: "برج ريما 1 ",
    titleEn: "Rima Tower 1 ",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "شركة رأب للتطوير العقاري",
    clientEn: "Raab Real Estate Development Company",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "29,700,000",
    year: "2025",
    status: "ongoing",
    mainImage: "/images/projects/buildings/Rima1/7.png",
    images: [
      "/images/projects/buildings/Rima1/1.jpg",
      "/images/projects/buildings/Rima1/2.jpg",
      "/images/projects/buildings/Rima1/3.jpg",
      "/images/projects/buildings/Rima1/7.png",
    ],
    description: "تنفيذ برج سكني مكوّن من 15 طابقاً بتصميم عصري، يضم مرافق متكاملة تشمل مواقف سيارات، مركزاً رياضياً، ومساحات استقبال وخدمات. يجسد المشروع مستوى متقدماً في تطوير المباني السكنية متعددة الأدوار، مع اهتمام بجودة التفاصيل وتكامل المرافق لتعزيز تجربة السكن.",
    descriptionEn: "Execution of a residential tower of 15 floors with modern design, including integrated facilities such as parking, a sports center, and reception and service areas. The project embodies an advanced level in developing multi-story residential buildings, with attention to quality of details and integration of facilities to enhance the living experience.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
    area: "18,000 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "rima-tower-2",
    title: "برج ريما 2 ",
    titleEn: "Rima Tower 2",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "شركة رأب للتطوير العقاري",
    clientEn: "Raab Real Estate Development Company",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "39,000,000",
    year: "2025",
    status: "ongoing",
    mainImage: "/images/projects/buildings/Rima2/1.jpg",
    images: [
      "/images/projects/buildings/Rima2/1.jpg",
      "/images/projects/buildings/Rima2/2.jpg",
      "/images/projects/buildings/Rima2/3.jpg",
      "/images/projects/buildings/Rima2/4.jpg",
      "/images/projects/buildings/Rima2/5.jpg",
      "/images/projects/buildings/Rima2/6.png",
      "/images/projects/buildings/Rima2/7.png",
      "/images/projects/buildings/Rima2/8.png",
      "/images/projects/buildings/Rima2/9.png",
    ],
    description: "تطوير برج سكني متكامل بارتفاع 15 طابقاً، يجمع بين الوحدات السكنية الفاخرة ومواقف السيارات، بالإضافة إلى  استقبال ومجلس ضمن تصميم مدروس. يعبر المشروع عن نهج متقدم في تنفيذ الأبراج السكنية مع التركيز على كفاءة توزيع المساحات وجودة التنفيذ في جميع التفاصيل.",
    descriptionEn: "Development of an integrated residential tower of 15 floors, combining luxury residential units and parking, in addition to a reception hall and a majlis within a studied design. The project expresses an advanced approach in executing residential towers, focusing on efficiency of space distribution and execution quality in all details.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
    area: "19,000 م²",
  },
  // ✅ محدث من ملف Word
  {
    id: "khamis-mushait-towers",
    title: "أبراج خميس مشيط",
    titleEn: "Khamis Mushait Towers ",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "قطاع خاص",
    clientEn: "Private Sector",
    location: "خميس مشيط، المنطقة الجنوبية",
    locationEn: "Khamis Mushait, Southern Area",
    contractValue: "85,000,000",
    year: "2025",
    status: "completed",
    mainImage: "/images/projects/buildings/Khames/1.jpg",
    images: [
      "/images/projects/buildings/Khames/1.jpg",
      "/images/projects/buildings/Khames/2.jpg",
      "/images/projects/buildings/Khames/3.jpg",
      "/images/projects/buildings/Khames/4.jpg",
      "/images/projects/buildings/Khames/5.jpg",
      "/images/projects/buildings/Khames/6.jpg",
      "/images/projects/buildings/Khames/7.jpg",
      "/images/projects/buildings/Khames/8.jpg",
      "/images/projects/buildings/Khames/9.jpg",
      "/images/projects/buildings/Khames/10.jpg",
    ],
    description: "تنفيذ مجموعة أبراج بارتفاع 7 أدوار لكل برج، تضم وحدات سكنية وتجارية مع مواقف سيارات ضمن تخطيط متكامل. يعكس المشروع تكاملاً في الاستخدامات مع كفاءة في توزيع المساحات وجودة تنفيذ متناسقة.",
    descriptionEn: "Execution of a group of towers, each rising to 7 floors, comprising residential and commercial units with parking within an integrated plan. The project reflects integration of uses with efficiency in space distribution and consistent execution quality.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
  // ✅ باقي كما هو (لم يرد في Word)
  {
    id: "elbaha-tower",
    title: "برج الباحة",
    titleEn: "Elbaha Tower",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "قطاع خاص",
    clientEn: "Private Sector",
    location: "الباحة، منطقة الباحة",
    locationEn: "Al-Baha, Al-Baha Region",
    contractValue: "85,000,000",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء برج سكني وتجاري في مدينة الباحة",
    descriptionEn: "Construction of residential and commercial tower in Al-Baha city",
    scope: [
      "وحدات سكنية",
      "محلات تجارية",
      "مواقف سيارات",
      "أعمال أنظمة MEP",
      "المرافق المشتركة",
    ],
    scopeEn: [
      "Residential units",
      "Commercial shops",
      "Parking spaces",
      "MEP systems",
      "Common facilities",
    ],
  },
];

// ============================================
// 🏛️ GOVERNMENT PROJECTS
// ============================================
const governmentProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "admin-court-jeddah",
    title: "مبنى المحكمة الإدارية ",
    titleEn: "Administrative Court Building - Jeddah",
    category: "government",
    categoryAr: "مشاريع حكومية",
    categoryEn: "Government Projects",
    client: "وزارة المالية",
    clientEn: "Ministry of Finance (MOF)",
    location: "جدة، المنطقة الغربية",
    locationEn: "Jeddah, Western Area",
    contractValue: "80,000,000",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "تنفيذ مبنى حكومي متكامل للمحكمة الإدارية وفق أعلى المعايير، بتصميم يعزز الكفاءة الوظيفية وانسيابية الحركة مع تشطيبات دقيقة تعكس الطابع الرسمي.",
    descriptionEn: "Execution of an integrated government building for the Administrative Court according to highest standards, with a design enhancing functional efficiency and smooth movement with precise finishes reflecting the official character.",
    scope: [
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
  // ✅ محدث من ملف Word
  {
    id: "utilities-complex-king-khalid",
    title: "جامعة الملك خالد ",
    titleEn: "King Khalid University - Utilities Complex",
    category: "government",
    categoryAr: "مشاريع حكومية",
    categoryEn: "Government Projects",
    client: "وزارة التعليم العالي",
    clientEn: "Ministry of Higher Education (MOHE)",
    location: "أبها، المنطقة الجنوبية",
    locationEn: "Abha, Southern Area",
    contractValue: "5,145,371",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مجمع مرافق متكامل داخل الحرم الجامعي، يجمع بين جودة التنفيذ ودقة التخطيط لتلبية متطلبات التشغيل ودعم بيئة تعليمية متكاملة.",
    descriptionEn: "Construction of an integrated utilities complex within the university campus, combining execution quality and planning precision to meet operational requirements and support an integrated educational environment.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
];

// ============================================
// 🏭 INDUSTRIAL PROJECTS
// ============================================
const industrialProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "nasser-alhajri-factory",
    title: "مصنع ناصر الهاجري ",
    titleEn: "Nasser Al Hajri Factory - Industrial Facility",
    category: "industrial",
    categoryAr: "مشاريع صناعية",
    categoryEn: "Industrial Projects",
    client: "ناصر الهاجري",
    clientEn: "Nasser Al Hajri (NSH)",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "35,000,000",
    year: "2020",
    status: "completed",
    mainImage: "",
    images: [],
    description: "تنفيذ مصنع متكامل وفق متطلبات التشغيل الصناعي، مع أعمال إنشائية وتشطيبات وأنظمة هندسية تدعم كفاءة الإنتاج. يجسد المشروع قدرة تنفيذية في تطوير المنشآت الصناعية مع الالتزام بمعايير الجودة والدقة في جميع مراحل التنفيذ.",
    descriptionEn: "Execution of an integrated factory according to industrial operation requirements, with construction works, finishes, and engineering systems supporting production efficiency. The project embodies executive capability in developing industrial facilities while adhering to quality standards and precision at all execution stages.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
];

// ============================================
// 🤝 CHARITABLE PROJECTS
// ============================================
const charitableProjects: YamasProject[] = [
  // ✅ محدث من ملف Word
  {
    id: "mosque-jazan",
    title: "مسجد الأطباء ",
    titleEn: "Doctors' Mosque - Charitable Project",
    category: "charitable",
    categoryAr: "مشاريع خيرية",
    categoryEn: "Charitable Projects",
    client: "جمعية أعمر",
    clientEn: "Aamar Association",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "4,000,000",
    year: "2025",
    status: "ongoing",
    mainImage: "/images/projects/Government Projects/Mosque/1.png",
    images: [
      "/images/projects/Government Projects/Mosque/1.png",
      "/images/projects/Government Projects/Mosque/2.png",
      "/images/projects/Government Projects/Mosque/3.png",
      "/images/projects/Government Projects/Mosque/4.png",
      "/images/projects/Government Projects/Mosque/5.png",
      "/images/projects/Government Projects/Mosque/6.png",
      "/images/projects/Government Projects/Mosque/7.png",
      "/images/projects/Government Projects/Mosque/8.png",
    ],
    description: "تنفيذ مسجد يتسع لـ 390 مصلياً وفق تصميم معماري مدروس، مع مرافق متكاملة تشمل سكن الإمام والمؤذن وأعمال تنسيق الموقع العام.",
    descriptionEn: "Execution of a mosque accommodating 390 worshippers according to a studied architectural design, with integrated facilities including residence for the imam and muezzin and general site landscaping works.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
    {
    id: "shi5a-kalsem",
    title: "مسجد شيخه ال كلثم",
    titleEn: "Mosque Shikia El Kalsem",
    category: "charitable",
    categoryAr: "مشاريع خيرية",
    categoryEn: "Charitable Projects",
    client: "",
    clientEn: "",
    location: "طريق ميناء الملك عبد عبد العزيز ",
    locationEn: "Way of king Abdel Aziz",
    contractValue: "0",
    year: "2021",
    status: "ongoing",
    mainImage: "/images/projects/Government Projects/MOSQUEELSHIQA/1.jpeg",
    images: [
      "/images/projects/Government Projects/MOSQUEELSHIQA/1.jpeg",
      "/images/projects/Government Projects/MOSQUEELSHIQA/2.png",
      "/images/projects/Government Projects/MOSQUEELSHIQA/3.png",
      "/images/projects/Government Projects/MOSQUEELSHIQA/4.png",
      "/images/projects/Government Projects/MOSQUEELSHIQA/5.png",
    ],
description: "مسجد الشيخة الكلثم — أعمال صيانة وتجديد شاملة للمسجد والحمامات، تشمل تحسين التشطيبات، رفع الكفاءة، وتطوير المرافق والخدمات العامة.",

descriptionEn: "Sheikha Al Kulthum Mosque — Comprehensive maintenance and renovation works for the mosque and bathrooms, including upgraded finishes, improved facilities, and enhanced overall infrastructure.",
    scope: [
      "الأعمال الإنشائية",
      "أعمال التشطيبات الداخلية والخارجية",
      "الأنظمة الكهروميكانيكية",
      "أعمال الموقع العام واللاند سكيب"
    ],
    scopeEn: [
      "Construction works",
      "Interior and exterior finishing works",
      "Electromechanical systems",
      "General site works and landscaping"
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================
const sortProjectsByDate = (projects: YamasProject[]): YamasProject[] => {
  return [...projects].sort((a, b) => {
    const yearA = parseInt(a.year.split("-")[0]);
    const yearB = parseInt(b.year.split("-")[0]);
    return yearB - yearA;
  });
};

// ============================================
// PROJECT CATEGORIES EXPORT
// ============================================
export const projectCategories: ProjectCategory[] = [
    {
    id: "housing",
    nameAr: "المشاريع السكنية",
    nameEn: "Housing Projects",
    description: "مجمعات سكنية فاخرة ومتكاملة وفلل راقية",
    descriptionEn: "Luxury integrated residential complexes and upscale villas",
    icon: "🏘️",
    color: "#059669",
    projects: sortProjectsByDate(housingProjects),
  },
    {
    id: "towers",
    nameAr: "مشاريع الأبراج",
    nameEn: "Towers Projects",
    description: "أبراج سكنية وتجارية متعددة الأدوار",
    descriptionEn: "Multi-story residential and commercial towers",
    icon: "🏗️",
    color: "#EC4899",
    projects: sortProjectsByDate(towersProjects),
  },
    {
    id: "commercial",
    nameAr: "المشاريع التجارية",
    nameEn: "Commercial Projects",
    description: "مولات ومراكز أعمال ومكاتب إدارية",
    descriptionEn: "Malls, business centers and administrative offices",
    icon: "🏢",
    color: "#7C3AED",
    projects: sortProjectsByDate(commercialProjects),
  },
  {
    id: "healthcare",
    nameAr: "المشاريع الصحية",
    nameEn: "Healthcare Projects",
    description: "مستشفيات ومراكز طبية متكاملة",
    descriptionEn: "Integrated hospitals and medical centers",
    icon: "🏥",
    color: "#DC2626",
    projects: sortProjectsByDate(healthcareProjects),
  },



  {
    id: "educational",
    nameAr: "المشاريع التعليمية",
    nameEn: "Educational Projects",
    description: "جامعات وكليات ومدارس ومراكز تدريب",
    descriptionEn: "Universities, colleges, schools and training centers",
    icon: "🎓",
    color: "#2563EB",
    projects: sortProjectsByDate(educationalProjects),
  },
  {
    id: "charitable",
    nameAr: "المشاريع الخيرية",
    nameEn: "Charitable Projects",
    description: "المشاريع الخيرية والمساهمة المجتمعية",
    descriptionEn: "Charitable and community contribution projects",
    icon: "🤝",
    color: "#10B981",
    projects: sortProjectsByDate(charitableProjects),
  },
  {
    id: "government",
    nameAr: "المشاريع الحكومية",
    nameEn: "Government Projects",
    description: "مشاريع حكومية ومرافق عامة ومباني إدارية",
    descriptionEn: "Government projects, public facilities and administrative buildings",
    icon: "🏛️",
    color: "#F59E0B",
    projects: sortProjectsByDate(governmentProjects),
  },
  {
    id: "industrial",
    nameAr: "المشاريع الصناعية",
    nameEn: "Industrial Projects",
    description: "مصانع ومشاريع صناعية",
    descriptionEn: "Factories and industrial projects",
    icon: "🏭",
    color: "#64748B",
    projects: sortProjectsByDate(industrialProjects),
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================
export const getAllProjects = (): YamasProject[] => {
  return projectCategories.flatMap((cat) => cat.projects);
};

export const getProjectById = (id: string): YamasProject | undefined => {
  return getAllProjects().find((p) => p.id === id);
};

export const getProjectsByCategory = (categoryId: string): YamasProject[] => {
  const category = projectCategories.find((c) => c.id === categoryId);
  return category?.projects || [];
};

export const getProjectsByStatus = (
  status: "completed" | "ongoing" | "development"
): YamasProject[] => {
  return getAllProjects().filter((p) => p.status === status);
};

export const getCategoryStats = () => {
  return projectCategories.map((cat) => ({
    ...cat,
    totalProjects: cat.projects.length,
    completedProjects: cat.projects.filter((p) => p.status === "completed").length,
    ongoingProjects: cat.projects.filter((p) => p.status === "ongoing").length,
    totalValue: cat.projects.reduce(
      (sum, p) => sum + parseFloat(p.contractValue.replace(/,/g, "")),
      0
    ),
  }));
};

export const getCompanyStats = () => {
  const allProjects = getAllProjects();
  const totalValue = allProjects.reduce(
    (sum, p) => sum + parseFloat(p.contractValue.replace(/,/g, "")),
    0
  );

  return {
    totalProjects: allProjects.length,
    completedProjects: allProjects.filter((p) => p.status === "completed").length,
    ongoingProjects: allProjects.filter((p) => p.status === "ongoing").length,
    totalValue: totalValue,
    totalValueFormatted: totalValue.toLocaleString("ar-SA"),
    categories: projectCategories.length,
  };
};