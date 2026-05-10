// src/data/yamas-projects.ts - PART 1/2

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
    | "towers";
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

// 🏥 Healthcare Projects - مشاريع الرعاية الصحية
const healthcareProjects: YamasProject[] = [
  // {
  //   id: 'vaccine-center-dammam',
  //   title: 'مستشفى التطعيم الطبي - الدمام',
  //   titleEn: 'Medical Vaccine Centre - Dammam',
  //   category: 'healthcare',
  //   categoryAr: 'الرعاية الصحية',
  //   categoryEn: 'Healthcare',
  //   client: 'وزارة الصحة',
  //   clientEn: 'Ministry of Health (MOH)',
  //   location: 'الدمام، المنطقة الشرقية',
  //   locationEn: 'Dammam, Eastern Area',
  //   contractValue: '15,350,125',
  //   year: '2022',
  //   status: 'completed',
  //   mainImage: '/images/projects/Healthcare/MedicalVaccineCentre/1.png',
  //   images: [
  //     '/images/projects/Healthcare/MedicalVaccineCentre/1.png',
  //     '/images/projects/Healthcare/MedicalVaccineCentre/2.png',
  //     '/images/projects/Healthcare/MedicalVaccineCentre/3.png',
  //     '/images/projects/Healthcare/MedicalVaccineCentre/4.png',
  //   ],
  //   description: 'تصميم وإنشاء مبنى مستشفى التطعيم ضد كورونا بمساحة 2,000 متر مربع',
  //   descriptionEn: 'Design and construction of Corona vaccine center building with 2,000 sqm area',
  //   scope: [
  //     'مناطق انتظار واسعة',
  //     'غرف تطعيم متعددة',
  //     'أنظمة تكييف وتهوية متطورة',
  //     'مرافق صحية متكاملة',
  //     'نظام إدارة طوابير'
  //   ],
  //   scopeEn: [
  //     'Spacious waiting areas',
  //     'Multiple vaccination rooms',
  //     'Advanced HVAC systems',
  //     'Complete healthcare facilities',
  //     'Queue management system'
  //   ],
  //   area: '2,000 م²'
  // },
{
  id: "one-day-surgery-dammam",
  title: "جراحة اليوم الواحد - مجمع الدمام الطبي",
  titleEn: "One Day Surgery - Dammam Medical Complex",
  category: "healthcare",
  categoryAr: "الرعاية الصحية",
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
  description: "تصميم وإنشاء مبنى جراحة اليوم الواحد بمساحة 1,500 متر مربع، مجهز بأحدث غرف العمليات وغرف الإفاقة وفق أعلى معايير الجودة الصحية.",
  descriptionEn: "Design and construction of a One Day Surgery building with an area of 1,500 sqm, equipped with state-of-the-art operating rooms and recovery rooms to the highest healthcare standards.",
  scope: [
    "غرف عمليات حديثة ومجهزة بأحدث التقنيات",
    "غرف إفاقة مجهزة بالكامل",
    "أعمال الجبس والتشطيبات الداخلية",
    "الأرضيات من نوع Vinyl (المشمع الطبي المخصص للمستشفيات والعيادات)",
    "الأنظمة المتكاملة (MEP) – كهرباء، ميكانيكا، سباكة، وتكييف",
    "تجهيز كامل بأسرة عمليات، أسرة إفاقة، وأجهزة طبية",
    "أنظمة الأمان والتحكم: أكواد دخول، أنظمة دخول إلكتروني، مراقبة"
  ],
  scopeEn: [
    "State-of-the-art operating rooms with the latest technologies",
    "Fully equipped recovery rooms",
    "Plastering and interior finishing works",
    "Vinyl flooring (medical-grade, similar to hospital linoleum) for healthcare environments",
    "Integrated MEP systems (Electrical, Mechanical, Plumbing & HVAC)",
    "Full furnishing with operation beds, recovery beds, and medical equipment",
    "Security & control systems: access codes, electronic entry, monitoring"
  ],
  area: "1,500 م²",
  features: ["غرف عمليات متطورة", "غرف إفاقة مجهزة", "أنظمة MEP متكاملة"]
},
{
  id: "vaccine-center-64-bed",
  title: "مركز تطعيم 64 غرفة تطعيم",
  titleEn: "64-Bed Vaccine Center",
  category: "healthcare",
  categoryAr: "الرعاية الصحية",
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
  description:
    "تصميم وإنشاء مركز تطعيم لقاح كورونا (كوفيد-19) بمساحة ١,٢٥٠ متر مربع، مجهز بـ ٦٤ غرفة تطعيم وفق أعلى معايير الجودة والسلامة الصحية.",
  descriptionEn:
    "Design and construction of a COVID-19 vaccination center with an area of 1,250 sqm, equipped with 64 vaccination rooms to the highest health and safety standards.",
  scope: [
    "أعمال الجبس وإنشاء ٦٤ غرفة تطعيم",
    "الأرضيات من نوع Vinyl (المشمع الطبي المخصص للمستشفيات والعيادات)",
    "الأنظمة المتكاملة (MEP) – كهرباء، ميكانيكا، سباكة، وتكييف",
    "تجهيز كامل بأسرة وأسرة وكراسي طبية مخصصة للتطعيم",
    "أنظمة الأمان والتحكم: أكواد دخول، أنظمة دخول إلكتروني، مراقبة",
    "تنسيق الموقع والأعمال الخارجية"
  ],
  scopeEn: [
    "Plastering and construction of 64 vaccination rooms",
    "Vinyl flooring (medical-grade, similar to hospital linoleum) for healthcare environments",
    "Integrated MEP systems (Electrical, Mechanical, Plumbing & HVAC)",
    "Full furnishing with medical beds, stretchers, and vaccination chairs",
    "Security & control systems: access codes, electronic entry, monitoring",
    "Site landscaping and external works"
  ],
  area: "1250 م²"
},
  {
  id: "vaccine-center-100-bed",
  title: "مركز تطعيم بيشة 100 غرفة",
  titleEn: "Bisha 100-Bed Vaccine Center",
  category: "healthcare",
  categoryAr: "الرعاية الصحية",
  categoryEn: "Healthcare",
  client: "وزارة الصحة",
  clientEn: "Ministry of Health (MOH)",
  location: "بيشة، منطقة عسير",
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
  description: "تصميم وإنشاء مركز تطعيم لقاح كورونا بمساحة 1,500 متر مربع، مجهز بـ 100 غرفة تطعيم وفق أعلى معايير الجودة والسلامة الصحية في بيشة، منطقة عسير.",
  descriptionEn: "Design and construction of a COVID-19 vaccination center with an area of 1,500 sqm, equipped with 100 vaccination rooms to the highest health and safety standards in Bisha, Asir Region.",
  scope: [
    "أعمال الجبس وإنشاء 100 غرفة تطعيم",
    "الأرضيات من نوع Vinyl (المشمع الطبي المخصص للمستشفيات ومراكز التطعيم)",
    "الأنظمة المتكاملة (MEP) – كهرباء، ميكانيكا، سباكة، وتكييف",
    "تجهيز كامل بأسرة وكراسي طبية مخصصة للتطعيم",
    "أنظمة الأمان والتحكم: أكواد دخول، أنظمة دخول إلكتروني، مراقبة"
  ],
  scopeEn: [
    "Plastering and construction of 100 vaccination rooms",
    "Vinyl flooring (medical-grade, similar to hospital linoleum) for healthcare environments",
    "Integrated MEP systems (Electrical, Mechanical, Plumbing & HVAC)",
    "Full furnishing with medical beds and vaccination chairs",
    "Security & control systems: access codes, electronic entry, monitoring"
  ],
  area: "1,500 م²"
},{
  id: "abha-hospital",
  title: "مركز تطعيم أبها - 300 غرفة",
  titleEn: "Abha Vaccine Center - 300 Rooms",
  category: "healthcare",
  categoryAr: "الرعاية الصحية",
  categoryEn: "Healthcare",
  client: "وزارة الصحة",
  clientEn: "Ministry of Health (MOH)",
  location: "أبها، منطقة عسير",
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
  description: "تصميم وإنشاء مركز تطعيم لقاح كورونا بطاقة 300 غرفة تطعيم، بمساحة بناء 1,500 متر مربع على أربعة طوابير في أبها، منطقة عسير.",
  descriptionEn: "Design and construction of a COVID-19 vaccination center with 300 vaccination rooms, with 1,500 sqm built-up area across four floors in Abha, Asir Region.",
  scope: [
    "أعمال الجبس وإنشاء 300 غرفة تطعيم",
    "الأرضيات من نوع Vinyl (المشمع الطبي المخصص للمستشفيات ومراكز التطعيم)",
    "الأنظمة المتكاملة (MEP) – كهرباء، ميكانيكا، سباكة، وتكييف",
    "تجهيز كامل بأسرة وكراسي طبية مخصصة للتطعيم",
    "أنظمة الأمان والتحكم: أكواد دخول، أنظمة دخول إلكتروني، مراقبة"
  ],
  scopeEn: [
    "Plastering and construction of 300 vaccination rooms",
    "Vinyl flooring (medical-grade, similar to hospital linoleum) for healthcare environments",
    "Integrated MEP systems (Electrical, Mechanical, Plumbing & HVAC)",
    "Full furnishing with medical beds and vaccination chairs",
    "Security & control systems: access codes, electronic entry, monitoring"
  ],
  area: "1,500 م²",
  features: ["300 غرفة تطعيم", "4 طوابق", "أنظمة MEP متكاملة"]
},
  {
    id: "hail-hospital-200",
    title: "مستشفى حائل 200 سرير",
    titleEn: "Construction of Hail 200 Bed Hospital",
    category: "healthcare",
    categoryAr: "الرعاية الصحية",
    categoryEn: "Healthcare",
    client: "وزارة الصحة",
    clientEn: "Ministry of Health (MOH)",
    location: "حائل",
    locationEn: "Hail",
    contractValue: "4,645,377",
    year: "2020",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مستشفى بطاقة 200 سرير في مدينة حائل",
    descriptionEn: "Construction of 200-bed hospital in Hail city",
    scope: [
      "مبنى المستشفى الرئيسي",
      "أقسام طبية متعددة",
      "أنظمة MEP",
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

// 🏘️ Housing Projects - المشاريع السكنية
const housingProjects: YamasProject[] = [
 {
  id: "abyat-rose",
  title: "أبيات روز",
  titleEn: "Abyat Rose",
  category: "housing",
  categoryAr: "مشاريع سكنية",
  categoryEn: "Housing Projects",
  client: "شركة أبياتنا للتطوير العقاري",
  clientEn: "Abyatna Real Estate Development Company",
  location: "الرياض، المنطقة الوسطى - ضاحية الفرسان",
  locationEn: "Riyadh, Central Region - Al-Fursan District",
  contractValue: "55,000,125",
  year: "2025",
  status: "ongoing",
  mainImage: "/images/projects/Housing Projects/Al-FursanFacade/3.png",
  images: [
    "/images/projects/Housing Projects/Al-FursanFacade/1.png",
    "/images/projects/Housing Projects/Al-FursanFacade/2.png",
    "/images/projects/Housing Projects/Al-FursanFacade/3.png",
  ],
  description: "بناء فلل سكنية على نموذجين في ضاحية الفرسان، الرياض، المنطقة الوسطى. تشمل المرحلتين 439 فيلا بمواصفات عالية الجودة.",
  descriptionEn: "Construction of residential villas in two models in Al-Fursan District, Riyadh, Central Region. Includes 439 villas across two phases with high-quality specifications.",
  scope: [
    "تصميم معماري متميز حسب معايير روشن",
    "تنفيذ البناء والتشطيبات الفاخرة",
    "أعمال MEP متكاملة",
    "تنسيق المواقع والحدائق",
    "الأعمال الخارجية والبنية التحتية"
  ],
  scopeEn: [
    "Distinguished architectural design per Roshn standards",
    "Construction & luxury finishing execution",
    "Integrated MEP works",
    "Site landscaping & gardens",
    "External works & infrastructure"
  ],
  area: "22,000 م²",
  features: ["439 فيلا", "نموذجين معماريين", "مستوى روشن", "3 أدوار", "مرحلتين"]
},
 {
  id: "alfulwa-roshn",
  title: "الفلوة روشن",
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
  mainImage: "/images/projects/Housing Projects/Fulwa/1.png",
  images: [
    "/images/projects/Housing Projects/Fulwa/1.png",
    "/images/projects/Housing Projects/Fulwa/2.png",
  ],
  description: "تصميم وإنشاء 439 فيلا فاخرة بدور أرضي وأول وسطح حسب مستوى روشن، بمساحة بناء 153,650 متر مربع في الأحساء، المنطقة الشرقية",
  descriptionEn: "Design and construction of 439 luxury villas with ground, first, and roof floors at Roshn level, 153,650 sqm built-up area in Al-Ahsa, Eastern Region",
  scope: [
    "تصميم معماري متميز حسب معايير روشن",
    "تنفيذ البناء والتشطيبات الفاخرة",
    "أعمال MEP متكاملة",
    "تنسيق المواقع والحدائق"
  ],
  scopeEn: [
    "Distinguished architectural design per Roshn standards",
    "Construction & luxury finishing execution",
    "Integrated MEP works",
    "Site landscaping & gardens"
  ],
  area: "153,650 م²",
  features: ["439 فيلا", "مستوى روشن", "تصميم عصري", "3 أدوار", "قيد التطوير"]
},
 {
  id: "arceilia",
  title: "ارسيليا",
  titleEn: "Arceilia",
  category: "housing",
  categoryAr: "مشاريع سكنية",
  categoryEn: "Housing Projects",
  client: "شركة الدارة للتطوير العقاري",
  clientEn: "Al-Darah Real Estate Development Company",
  location: "الدمام، المنطقة الشرقية",
  locationEn: "Dammam, Eastern Region",
  contractValue: "30,000,000",
  year: "2025",
  status: "development",
  mainImage: "/images/projects/Housing Projects/Arceilia/1.png",
  images: [
    "/images/projects/Housing Projects/Arceilia/1.png",
    "/images/projects/Housing Projects/Arceilia/2.png",
    "/images/projects/Housing Projects/Arceilia/3.png",
    "/images/projects/Housing Projects/Arceilia/4.png",
    "/images/projects/Housing Projects/Arceilia/5.png",
    "/images/projects/Housing Projects/Arceilia/6.png",
    "/images/projects/Housing Projects/Arceilia/7.png",
    "/images/projects/Housing Projects/Arceilia/8.png",
    "/images/projects/Housing Projects/Arceilia/9.png",
    "/images/projects/Housing Projects/Arceilia/10.png",
    "/images/projects/Housing Projects/Arceilia/11.png",
    "/images/projects/Housing Projects/Arceilia/12.png",
    "/images/projects/Housing Projects/Arceilia/13.png",
    "/images/projects/Housing Projects/Arceilia/14.png",
    "/images/projects/Housing Projects/Arceilia/15.png",
    "/images/projects/Housing Projects/Arceilia/16.png",
    "/images/projects/Housing Projects/Arceilia/17.png",
    "/images/projects/Housing Projects/Arceilia/18.png",
  ],
  description: "مشروع سكني فاخر، 32 فيلا بـ 4 نماذج مختلفة بتصاميم عصرية وتشطيبات راقية",
  descriptionEn: "Luxury residential project, 32 villas in 4 different models with modern designs and premium finishes",
  scope: [
    "تصميم معماري عصري بأربعة نماذج مختلفة",
    "تشطيبات داخلية وخارجية فاخرة",
    "أعمال MEP متكاملة",
    "تنسيق الحدائق والمساحات الخارجية",
    "البنية التحتية والأعمال الخارجية"
  ],
  scopeEn: [
    "Modern architectural design with 4 different models",
    "Luxury interior and exterior finishes",
    "Integrated MEP works",
    "Landscaping and outdoor spaces",
    "Infrastructure and external works"
  ],
  area: "يتم التحديد",
  features: ["32 فيلا", "4 نماذج معمارية", "تشطيبات فاخرة", "تصميم عصري"]
},
  
 {
  id: "darah-alqamrah",
  title: "دارة قمره",
  titleEn: "Darah Al Qamrah",
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
    "/images/projects/Housing Projects/AJDAN/4.jpg",
    "/images/projects/Housing Projects/AJDAN/3.jpg",
    "/images/projects/Housing Projects/AJDAN/4.jpg",
    "/images/projects/Housing Projects/AJDAN/5.jpg",
    "/images/projects/Housing Projects/AJDAN/6.jpg",
    "/images/projects/Housing Projects/AJDAN/7.jpg",
    "/images/projects/Housing Projects/AJDAN/8.jpg",
    "/images/projects/Housing Projects/AJDAN/9.jpg",
    "/images/projects/Housing Projects/AJDAN/10.jpg",
  ],
  description: "تصميم وإنشاء 220 فيلا فاخرة بدور أرضي وأول وسطح حسب معايير الجودة العالية، بمساحة بناء 300,000 متر مربع في صفوى، المنطقة الشرقية",
  descriptionEn: "Design and construction of 220 luxury villas with ground, first, and roof floors at high-quality standards, 300,000 sqm built-up area in Safwa, Eastern Region",
  scope: [
    "تصميم معماري حسب معايير الجودة العالية",
    "تنفيذ أعمال البناء والتشطيبات",
    "أعمال MEP متكاملة",
    "تنسيق حدائق"
  ],
  scopeEn: [
    "Architectural design per high-quality standards",
    "Construction & finishing execution",
    "Integrated MEP works",
    "Landscaping"
  ],
  area: "300,000 م²",
  features: ["220 فيلا", "تصميم فاخر", "3 أدوار", "منطقة حيوية"]
},

  {
    id: "ajyal-dhahran",
    title: "أجيال الظهران - أرامكو",
    titleEn: "Ajyal AL-Dhahran Project - Aramco",
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
    // ✅ إصلاح: إضافة "NHC" للإنجليزي ليطابق العربي
    description: "أعمال التشطيب لـ 149 فيلا فاخرة بدور أرضي وأول وسطح حسب مستوى ، بمساحة بناء 59,600 متر مربع",
    descriptionEn: "Finishing works for 149 luxury villas with ground, first, and roof floors at NHC level, 59,600 sqm built-up area",
    scope: [
      "تصميم وتنفيذ أعمال التشطيبات الفاخرة",
      "الأعمال الكهربائية والميكانيكية",
      "تنسيق الحدائق",
      "الأعمال الخارجية",
    ],
    scopeEn: [
      "Design & execution of luxury finishing works",
      "Electrical & mechanical works",
      "Plumbing works",
      "Landscaping",
      "External works",
    ],
    area: "59,600 م²",
    features: ["149 فيلا", "مستوى NHC", "تشطيبات فاخرة"],
  },
  {
    id: "tamkeen-4",
    title: "تمكين 4",
    titleEn: "Tamkeen 4",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "تمكين",
    clientEn: "Tamkeen",
    location: " الخبر ، المنطقة الشرقية",
    // ✅ إصلاح: كان "Al-Ahsa" والصح "Khobar"
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
      "الأعمال الكهربائية والميكانيكية ",
      "تنسيق الحدائق ",
    ],
    scopeEn: [
      "Design & execution",
      "Construction works",
      "Finishing works",
      "Electrical, mechanical & plumbing works",
      "Landscaping & external works",
    ],
    features: ["204 فيلا", "مشروع سكني متكامل"],
  },

  {
    id: "argan-plains",
    title: " أرجان السهول",
    titleEn: "Argan Plains Project",
    category: "housing",
    categoryAr: "مشاريع سكنية",
    categoryEn: "Housing Projects",
    client: "شركة أرجان للمشاريع",
    clientEn: "Argan Projects Company",
    location: "الجبيل ، المنطقة الشرقية  ",
    // ✅ إصلاح: كان "Riyadh" والصح "Jubail, Eastern Area"
    locationEn: "Jubail, Eastern Area",
    contractValue: "35,000,000",
    year: "2024",
    status: "development",
    mainImage: "/images/projects/Commercial Projects/argan-plains/1.png",
    images: [
      "/images/projects/Commercial Projects/argan-plains/1.png",
      "/images/projects/Commercial Projects/argan-plains/2.png",
    ],
    description:
      "إنشاء 18 فيلا سكنية خاصة بمستوى تشطيب عالي، بمساحة إجمالية تتجاوز 10,000 متر مربع",
    descriptionEn:
      "Construction of 18 private residential villas with high finishing level, total area exceeding 10,000 sqm",
    scope: [
      "فلل خاصة راقية",
      "تشطيبات فاخرة",
      "تصميم معماري مميز",
      "حدائق خاصة",
      "مرافق متكاملة",
    ],
    scopeEn: [
      "Upscale private villas",
      "Luxury finishes",
      "Distinguished architectural design",
      "Private gardens",
      "Complete facilities",
    ],
    area: "10,000+ م²",
    features: ["18 فيلا", "تشطيبات راقية", "تصميم خاص"],
  },
];

// 🎓 Educational Projects - المشاريع التعليمية
const educationalProjects: YamasProject[] = [
  {
    id: "kfupm-maintenance",
    title: "مشروع جامعة الملك فهد للبترول والمعادن",
    titleEn: "King Fahd University of Petroleum and Minerals Project",
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
    description: "أعمال صيانة لخمسة مباني (مباني القنصلية الأمريكية سابقاً)",
    descriptionEn: "Maintenance works for five buildings (formerly US Consulate buildings)",
    scope: [
      "أعمال الصيانة الشاملة",
      "ترميم المباني",
      "تحديث الأنظمة الكهربائية والميكانيكية",
      "أعمال التشطيبات",
    ],
    scopeEn: [
      "Comprehensive maintenance",
      "Building restoration",
      "Electrical & mechanical systems upgrade",
      "Finishing works",
      "Infrastructure improvements",
    ],
  },
  {
    id: "boys-schools",
    title: "مدارس البنين",
    titleEn: "Boys Schools",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارة التعليم",
    clientEn: "Ministry of Education (MOE)",
    location: "جدة ،المنطقة الغربية",
    locationEn: "Jeddah, Western Area",
    contractValue: "69,988,169",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مجموعة من مدارس البنين",
    descriptionEn: "Construction of boys schools",
    scope: [
      "الفصول الدراسية",
      "المختبرات",
      "المرافق الرياضية",
      "المرافق الإدارية",
      "الساحات والملاعب",
    ],
    scopeEn: [
      "Classrooms",
      "Laboratories",
      "Sports facilities",
      "Administrative facilities",
      "Playgrounds & sports fields",
    ],
  },
  {
    id: "medicine-faculty-najran",
    title: "كلية الطب ",
    titleEn: "Faculty of Medicine - Najran",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارة التعليم العالي",
    clientEn: "Ministry of Higher Education (MOHE)",
    location: "نجران ،المنطقة الجنوبية ",
    locationEn: "Najran, Southern Area",
    contractValue: "22,336,554",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مبنى كلية الطب ",
    descriptionEn: "Construction of Faculty of Medicine building in Najran city",
    scope: [
      "المباني التعليمية",
      "المختبرات الطبية",
      "قاعات المحاضرات",
      "المرافق الطبية التدريبية",
      "أنظمة MEP",
    ],
    scopeEn: [
      "Educational buildings",
      "Medical laboratories",
      "Lecture halls",
      "Medical training facilities",
      "MEP systems",
    ],
  },
  {
    id: "science-college-najran",
    title: "كلية العلوم",
    titleEn: "College of Science - Najran",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارة التعليم",
    clientEn: "Ministry of Education (MOE)",
    location: "نجران ،المنطقة الجنوبية ",
    locationEn: "Najran, Southern Area",
    contractValue: "135,000,000",
    year: "2018",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مبنى كلية العلوم",
    descriptionEn: "Construction of College of Science building",
    scope: [
      "المباني الأكاديمية",
      "المختبرات العلمية",
      "القاعات الدراسية",
      "المرافق الإدارية",
      "أنظمة MEP متكاملة",
    ],
    scopeEn: [
      "Academic buildings",
      "Scientific laboratories",
      "Classrooms",
      "Administrative facilities",
      "Integrated MEP systems",
    ],
  },
  {
    id: "pharmacy-college-najran",
    title: " كلية الصيدلة",
    titleEn: "College of Pharmacy - Najran",
    category: "educational",
    categoryAr: "مشاريع تعليمية",
    categoryEn: "Educational Projects",
    client: "وزارة التعليم",
    clientEn: "Ministry of Education (MOE)",
    location: "نجران ،المنطقة الجنوبية ",
    locationEn: "Najran, Southern Area",
    contractValue: "123,971,700",
    year: "2018",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مبنى كلية الصيدلة",
    descriptionEn: "Construction of College of Pharmacy building",
    scope: [
      "المباني الأكاديمية",
      "مختبرات الصيدلة",
      "القاعات الدراسية المتخصصة",
      "المرافق البحثية",
      "أنظمة MEP",
    ],
    scopeEn: [
      "Academic buildings",
      "Pharmacy laboratories",
      "Specialized classrooms",
      "Research facilities",
      "MEP systems",
    ],
  },
];

// 🏢 Commercial Projects - المشاريع التجارية
const commercialProjects: YamasProject[] = [
  {
    id: "miahona-office",
    title: "المقر الرئيسي الجديد لمياهنا",
    titleEn: "Miahona NEW Head Office",
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
    // ✅ إصلاح: "Miyahuna" → "Miahona"
    description: "أعمال التشطيب والتجهيز لمبنى إدارة شركة مياهنا، إحدى شركات مجموعة المهيدب القابضة",
    descriptionEn: "Finishing and preparation works for Miahona Company administration building, one of Al-Muhaidib Holding Group companies",
    scope: [
      "أعمال التشطيبات الداخلية",
      "تجهيز المكاتب",
      "أنظمة الاتصالات والشبكات",
      "أنظمة MEP",
      "التأثيث والديكور",
    ],
    scopeEn: [
      "Interior finishing works",
      "Office fit-out",
      "Communication & network systems",
      "MEP systems",
      "Furnishing & decoration",
    ],
    features: ["مكاتب إدارية", "تشطيبات حديثة", "تجهيزات متكاملة"],
  },
  {
    id: "grand-hyper",
    title: "جراند هايبر",
    titleEn: "Grand Hyper",
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
    description:
      "تصميم وإنشاء مول تجاري فاخر على مستوى راقي بمساحة 16,000  متر مربع، يشمل ستريب مول مع هايبر ماركت ومواقف لأكثر من 15,000 مركبة",
    descriptionEn:
      "Design and construction of luxury shopping mall on podium level with 16,000 sqm area, including strip mall with hypermarket and parking for over 15,000 vehicles",
    scope: [
      "هايبر ماركت",
      "محلات تجارية ",
      "مواقف سيارات ضخمة (15,000+ مركبة)",
      "محطة كهرباء فرعية",
      "تنسيق حدائق وأعمال خارجية",
    ],
    scopeEn: [
      "Hypermarket",
      "Retail stores (Strip Mall)",
      "Massive parking (15,000+ vehicles)",
      "Power substation",
      "Landscaping & external works",
    ],
    area: "16000 م²",
    features: ["هايبر ماركت", "ستريب مول", "15,000 موقف", "موقع استراتيجي"],
  },
  {
    id: "aljomaih-showroom",
    title: "صالة عرض ineos",
    titleEn: "Aljumaih Showroom",
    category: "commercial",
    categoryAr: "مشاريع تجارية",
    categoryEn: "Commercial Projects",
    client: "شركة الجميح للسيارات",
    clientEn: "Al Jomaih Automotive Company",
    location: "الرياض ، المنطقة الوسطى",
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
    description:
      "إنشاء صالة عرض سيارات جديدة لعلامة تجارية جديدة بمساحة إجمالية 8,500 متر مربع",
    descriptionEn:
      "Construction of new car showroom for a new brand with total area of 8,500 sqm",
    scope: [
      "صالة عرض حديثة",
      "مناطق خدمة العملاء",
      "اعمال ديكور",
      "MEP",
    ],
    scopeEn: [
      "Modern showroom",
      "Customer service areas",
      "Decoration works",
      "MEP",
    ],
    area: "8,500 م²",
    features: ["صالة عرض فاخرة", "علامة تجارية جديدة", "مرافق متكاملة"],
  },
  {
    id: "aljomaih-maintenance",
    title: "تجديد مركز صيانة وكالة الجميح",
    titleEn: "Al Jomaih Maintenance Center Development",
    category: "commercial",
    categoryAr: "مشاريع تجارية",
    categoryEn: "Commercial Projects",
    client: "شركة الجميح للسيارات",
    clientEn: "Al Jomaih Automotive Company (JMC)",
    // ✅ إصلاح: العربي كان "الغربية" والصح "الشرقية"
    location: "الدمام ، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "35,000,000",
    year: "2024",
    status: "completed",
    mainImage: "",
    images: [],
    description: "تطوير وكالة صيانة متكامل للسيارات",
    descriptionEn: "Development of integrated automotive maintenance center",
    scope: [
      "ورش الصيانة",
      "مناطق الفحص",
      "مخازن قطع الغيار",
      "مرافق خدمة العملاء",
      "أنظمة MEP",
    ],
    scopeEn: [
      "Maintenance workshops",
      "Inspection areas",
      "Spare parts warehouses",
      "Customer service facilities",
      "MEP systems",
    ],
  },
];

// 🏗️ Towers Projects - مشاريع الأبراج
const towersProjects: YamasProject[] = [
  {
    id: "rima-tower-1",
    title: "برج ريما 1",
    titleEn: "Rima Tower 1",
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
    description:
      "مبنى سكني راقي مكون من 15 طابق بمساحة بناء إجمالية 18,000 متر مربع، يشمل 62  موقف سيارات ومركز رياضي في مجلس عام و  ريسبيشن استقبال",
    descriptionEn:
      "Premium residential building of 15 floors with total built-up area of 18,000 sqm, including 62 parking spaces, sports center, community lounge and reception",
    // ✅ إصلاح: إزالة السطر الفاضي وتصحيح الأرقام لتطابق العربي
    scope: [
      "62 موقف سيارات سكنية فاخرة",
      "مركز رياضي ومجلس عام وريسبيشن",
      "مرافق متكاملة",
      "تصميم معماري عصري",
      "أنظمة MEP متطورة",
    ],
    scopeEn: [
      "62 parking spaces",
      "Sports center, community lounge and reception",
      "Complete facilities",
      "Modern architectural design",
      "Advanced MEP systems",
    ],
    area: "18,000 م²",
    // ✅ إصلاح: إزالة السطر الفاضي من features
    features: ["15 طابق", "62 موقف سيارات", "مركز رياضي", "تصميم عصري"],
    featuresEn: ["15 Floors", "62 Parking Spaces", "Sports Center", "Modern Design"],
  },
    {
    id: "afoner-elforsan",
    title: "افونير الفرسان",
    titleEn: "AFONER ELFORSAN",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "شركة فيوتشر هومز للاستثمار",
    clientEn: "Future Homes Investment Co.",
    location: "الرياض، المنطقة الوسطى",
    locationEn: "Riyadh, Central Region",
    contractValue: "18,000,500",
    year: "2026",
    status: "ongoing",
    mainImage: "/images/projects/Housing Projects/shofa/1.jpg",
    images: [
      "/images/projects/Housing Projects/shofa/1.jpg",
      "/images/projects/Housing Projects/shofa/2.jpg",
      "/images/projects/Housing Projects/shofa/3.jpg",
      "/images/projects/Housing Projects/shofa/4.jpg",
    ],
    description: "تطوير مجمع سكني متكامل الاستخدامات في الرياض، يشمل مباني سكنية 3 ابراج على مساحه 10,762 م² بتكلفة 18 مليون 500 يوجد جزء تجاري داخلي ٨٦٧ متر و جزء تجاري خارجي ٢٨٢ متر",
    descriptionEn: "Development of a high-quality mixed-use residential community in Riyadh, including 3 residential towers on 10,762 sqm with internal commercial area of 867 sqm and external commercial area of 282 sqm",
    scope: [
      "أعمال الهيكل الإنشائي",
      "أعمال التشطيبات المعمارية",
      "أعمال الكهرباء والميكانيكا (MEP)",
      "إدارة وتنسيق المشروع",
      "المكتب الفني ورسومات التنفيذ",
    ],
    scopeEn: [
      "Structural Works",
      "Architectural & Finishing Works",
      "Mechanical, Electrical & Plumbing (MEP)",
      "External Works & Landscaping",
      "Project Management & Coordination",
      "Technical Office & Shop Drawings",
    ],
    area: "10,762 م²",
    features: [
      "مبنيين (B01) + مبنى واحد (B02)",
      "أرضي + 4 أدوار متكررة + سطح (بنتهاوس)",
      "52 وحدة سكنية",
      "867 م² مساحة تجارية داخلية",
      "282 م² مساحة تجارية خارجية",
      "تسليم مفتاح",
    ],
    featuresEn: [
      "2 Buildings (B01) + 1 Building (B02)",
      "Ground + 4 Typical + Roof (Penthouse)",
      "52 Residential Units",
      "867 m² Internal Commercial Area",
      "282 m² External Commercial Area",
      "Turnkey Delivery",
    ],
  },
  {
    id: "rima-tower-2",
    title: "برج ريما 2",
    titleEn: "Rima Tower 2",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "شركة رعب للتطوير العقاري",
    clientEn: "Raab Real Estate Development Company",
    location: "الدمام، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "39,000,000",
    year: "2025",
    status: "ongoing",
    mainImage: "/images/projects/buildings/Rima2/1.png",
    images: [
      "/images/projects/buildings/Rima2/1.png",
      "/images/projects/buildings/Rima2/2.png",
    ],
    description:
      "مبنى سكني راقي مكون من 15 طابق بمساحة بناء إجمالية 19،000 متر مربع، يشمل 62 موقف سيارات ومركز رياضي في مجلس عام و  ريسبيشن استقبال",
    descriptionEn:
      "Premium residential building of 15 floors with total built-up area of 22,295 sqm, including 62 parking spaces, sports center, community lounge and reception",
    scope: [
      "62 شقة سكنية فاخرة",
      "100 موقف سيارات",
      "مرافق متكاملة",
      "تصميم معماري عصري",
      "أنظمة MEP متطورة",
    ],
    scopeEn: [
      "62 luxury residential apartments",
      "100 parking spaces",
      "Complete facilities",
      "Modern architectural design",
      "Advanced MEP systems",
    ],
    area: "19,000 م²",
    features: ["15 طابق", "62 شقة", "100 موقف", "تصميم عصري"],
  },

  {
    id: "elbaha-tower",
    title: "برج الباحة",
    titleEn: "Elbaha Tower",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "قطاع خاص",
    clientEn: "Private Sector",
    location: "الباحة",
    locationEn: "Al-Baha",
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
      "أنظمة MEP",
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
  {
    id: "khamis-mushait-towers",
    title: "أبراج خميس مشيط",
    titleEn: "Khamis Mushait Towers",
    category: "towers",
    categoryAr: "مشاريع الأبراج",
    categoryEn: "Towers Projects",
    client: "قطاع خاص",
    clientEn: "Private Sector",
    location: "ابها ، المنطقة الجنوبية ",
    locationEn: "Khamis Mushait, Abha, Southern Area",
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
    description: "إنشاء 23 أبراج سكنية ، كل برج مكون من 7 أدوار",
    descriptionEn: "Construction of 23 residential towers, each tower consisting of 7 floors",
    scope: [
      "5 أبراج",
      "7 أدوار لكل برج",
      "وحدات سكنية وتجارية",
      "مواقف سيارات",
      "أنظمة MEP متكاملة",
    ],
    scopeEn: [
      "5 towers",
      "7 floors per tower",
      "Residential and commercial units",
      "Parking spaces",
      "Integrated MEP systems",
    ],
    features: ["5 أبراج", "7 أدوار", "سكني وتجاري"],
  },
];

// 🏛️ Government Projects - المشاريع الحكومية
const governmentProjects: YamasProject[] = [
  {
    id: "admin-court-jeddah",
    title: "مبنى المحكمة الإدارية ",
    titleEn: "Construction of ADMIN Court Building - JEDDAH",
    category: "government",
    categoryAr: "مشاريع حكومية",
    categoryEn: "Government Projects",
    client: "وزارة المالية",
    clientEn: "Ministry of Finance (MOF)",
    location: "جدة ، المنطقة الغربية",
    locationEn: "Jeddah, Western Area",
    contractValue: "80,000,000",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مبنى المحكمة الإدارية في مدينة جدة",
    descriptionEn: "Construction of Administrative Court building in Jeddah city",
    scope: [
      "قاعات المحاكم",
      "المكاتب الإدارية",
      "مرافق الأمن",
      "أنظمة MEP متطورة",
      "أنظمة السلامة والأمن",
    ],
    scopeEn: [
      "Courtrooms",
      "Administrative offices",
      "Security facilities",
      "Advanced MEP systems",
      "Safety & security systems",
    ],
  },
  {
    id: "utilities-complex-king-khalid",
    title: "جامعه الملك خالد ",
    titleEn: "Construction of Utilities Complex - King Khalid University",
    category: "government",
    categoryAr: "مشاريع حكومية",
    categoryEn: "Government Projects",
    client: "وزارة التعليم العالي",
    clientEn: "Ministry of Higher Education (MOHE)",
    location: "ابها ، المنطقة الجنوبية",
    locationEn: "Abha, Southern Area",
    contractValue: "5,145,371",
    year: "2019",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مجمع المرافق بجامعة الملك خالد",
    descriptionEn: "Construction of utilities complex at King Khalid University",
    scope: [
      "مباني المرافق",
      "البنية التحتية",
      "أنظمة المياه والصرف",
      "الأنظمة الكهربائية",
      "شبكات الاتصالات",
    ],
    scopeEn: [
      "Utility buildings",
      "Infrastructure",
      "Water & sewage systems",
      "Electrical systems",
      "Communication networks",
    ],
  },
];

// 🏭 Industrial Projects - المشاريع الصناعية
const industrialProjects: YamasProject[] = [
  {
    id: "nasser-alhajri-factory",
    title: "مصنع ناصر الهاجري ",
    titleEn: "Nasser Al Hajri Factory",
    category: "industrial",
    categoryAr: "مشاريع صناعية",
    categoryEn: "Industrial Projects",
    client: "ناصر الهاجري ",
    clientEn: "Nasser Al Hajri (NSH)",
    location: "الدمام ، المنطقة الشرقية",
    locationEn: "Dammam, Eastern Area",
    contractValue: "35,000,000",
    year: "2020",
    status: "completed",
    mainImage: "",
    images: [],
    description: "إنشاء مصنع متكامل",
    descriptionEn: "Construction of integrated factory",
    scope: [
      "المباني الصناعية",
      "خطوط الإنتاج",
      "المخازن",
      "المكاتب الإدارية",
      "أنظمة MEP الصناعية",
    ],
    scopeEn: [
      "Industrial buildings",
      "Production lines",
      "Warehouses",
      "Administrative offices",
      "Industrial MEP systems",
    ],
  },
];

// ترتيب المشاريع حسب التاريخ من الأجدد للأقدم
const sortProjectsByDate = (projects: YamasProject[]): YamasProject[] => {
  return projects.sort((a, b) => {
    const yearA = parseInt(a.year.split("-")[0]);
    const yearB = parseInt(b.year.split("-")[0]);
    return yearB - yearA;
  });
};

const charitableProjects: YamasProject[] = [
  {
    id: "mosque-jazan",
    title: "مسجد الاطباء ",
    titleEn: "Mosque",
    category: "charitable",
    categoryAr: "مشاريع خيرية",
    categoryEn: "Charitable Projects",
    client: "جمعية أعمر",
    clientEn: "Aamar Association",
    location: "الدمام ،المنطقه الشرقيه ",
    locationEn: "Dammam, Eastern Area",
    // ✅ إصلاح: "4000,000" → "4,000,000"
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
    ],
    description: "مشروع خيري مسجد  يتسع الى 390 مصلي وسكن امام ومؤذن",
    descriptionEn: "Charitable project: mosque accommodating 390 worshippers with imam and muezzin residence",
    scope: [
      "صالة الصلاة الرئيسية",
      "لاند اسكيب",
      "المآذن",
      "حدائق ومحلات تجارية",
      "نطاق العمل كامل",
    ],
    scopeEn: [
      "Main prayer hall",
      "Landscaping",
      "Minarets",
      "Gardens and commercial shops",
      "Full scope of works",
    ],
  },
];

// 🏗️ تجميع البيانات مع الترتيب
export const projectCategories: ProjectCategory[] = [
  {
    id: "healthcare",
    nameAr: "مشاريع الرعاية الصحية",
    nameEn: "Healthcare Projects",
    description: "مستشفيات ومراكز طبية ",
    descriptionEn: "Advanced hospitals, medical centers and vaccination centers",
    icon: "🏥",
    color: "#DC2626",
    projects: sortProjectsByDate(healthcareProjects),
  },
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
    description: "",
    descriptionEn: "Factories and industrial projects",
    icon: "🏭",
    color: "#64748B",
    projects: sortProjectsByDate(industrialProjects),
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
];

// 🎯 دوال مساعدة
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
  status: "completed" | "ongoing" | "development",
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
      0,
    ),
  }));
};

export const getCompanyStats = () => {
  const allProjects = getAllProjects();
  const totalValue = allProjects.reduce(
    (sum, p) => sum + parseFloat(p.contractValue.replace(/,/g, "")),
    0,
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