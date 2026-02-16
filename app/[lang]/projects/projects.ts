// src/data/yamas-projects.ts - PART 1/2

export interface YamasProject {
  id: string;
  title: string;
  titleEn: string;
  category: 'healthcare' | 'housing' | 'educational' | 'commercial' | 'industrial' | 'government' | 'towers';
  categoryAr: string;
  categoryEn: string;
  client: string;
  clientEn?: string;
  location: string;
  locationEn: string;
  contractValue: string;
  year: string;
  status: 'completed' | 'ongoing';
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
  {
    id: 'vaccine-center-dammam',
    title: 'مركز التطعيم الطبي - الدمام',
    titleEn: 'Medical Vaccine Centre - Dammam',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'الدمام، المنطقة الشرقية',
    locationEn: 'Dammam, Eastern Area',
    contractValue: '15,350,125',
    year: '2022',
    status: 'completed',
    mainImage: '/images/projects/Healthcare/MedicalVaccineCentre/1.png',
    images: [
      '/images/projects/Healthcare/MedicalVaccineCentre/1.png',
      '/images/projects/Healthcare/MedicalVaccineCentre/2.png',
      '/images/projects/Healthcare/MedicalVaccineCentre/3.png',
      '/images/projects/Healthcare/MedicalVaccineCentre/4.png',
    ],
    description: 'تصميم وإنشاء مبنى مركز التطعيم ضد كورونا بمساحة 2,000 متر مربع',
    descriptionEn: 'Design and construction of Corona vaccine center building with 2,000 sqm area',
    scope: [
      'مناطق انتظار واسعة',
      'غرف تطعيم متعددة',
      'أنظمة تكييف وتهوية متطورة',
      'مرافق صحية متكاملة',
      'نظام إدارة طوابير'
    ],
    scopeEn: [
      'Spacious waiting areas',
      'Multiple vaccination rooms',
      'Advanced HVAC systems',
      'Complete healthcare facilities',
      'Queue management system'
    ],
    area: '2,000 م²'
  },
  {
    id: 'one-day-surgery-dammam',
    title: 'جراحة اليوم الواحد - مجمع الدمام الطبي',
    titleEn: 'One Day Surgery - Dammam Medical Complex',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'الدمام، المنطقة الشرقية',
    locationEn: 'Dammam, Eastern Area',
    contractValue: '13,000,000',
    year: '2022',
    status: 'completed',
    mainImage: '/images/projects/Healthcare/OneDaySurgery/1.png',
    images: [
      '/images/projects/Healthcare/OneDaySurgery/1.png',
      '/images/projects/Healthcare/OneDaySurgery/2.png',
      '/images/projects/Healthcare/OneDaySurgery/3.png',
      '/images/projects/Healthcare/OneDaySurgery/4.png',
      '/images/projects/Healthcare/OneDaySurgery/5.png',

    ],
    description: 'تصميم وإنشاء مبنى جراحة اليوم الواحد بمساحة 1,500 متر مربع',
    descriptionEn: 'Design and construction of One Day Surgery building with 1,500 sqm area',
    scope: [
      'غرف عمليات حديثة',
      'غرف إفاقة',
      'عيادات خارجية',
      'محطة كهرباء فرعية',
      'تنسيق حدائق وأعمال خارجية'
    ],
    scopeEn: [
      'Modern operation rooms',
      'Recovery rooms',
      'Outpatient clinics',
      'Electrical substation',
      'Landscaping & external works'
    ],
    area: '1,500 م²',
    features: ['غرف عمليات متطورة', 'عيادات خارجية']
  },
  {
    id: 'vaccine-center-64-bed',
    title: 'مركز تطعيم 64 سرير',
    titleEn: 'Construction of 64 Bed Vaccine Center',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'المملكة العربية السعودية',
    locationEn: 'Saudi Arabia',
    contractValue: '1,290,500',
    year: '',
    status: 'completed',
    mainImage: '/images/projects/Healthcare/vaccine-center-64-bed/1.png',
    images: [
      '/images/projects/Healthcare/vaccine-center-64-bed/1.png',
      '/images/projects/Healthcare/vaccine-center-64-bed/2.png',
      '/images/projects/Healthcare/vaccine-center-64-bed/3.png',
      '/images/projects/Healthcare/vaccine-center-64-bed/4.png',
    ],
    description: 'تصميم وإنشاء مستشفى كورونا 64 سرير بمساحة 1,250 متر مربع على طابقين',
    descriptionEn: 'Design and construction of 64-bed Corona Hospital with 1,250 sqm on two floors',
    scope: [
      '64 غرفة عزل',
      'غرفتي عمليات',
      'أنظمة MEP',
      'محطة كهرباء فرعية',
      'تنسيق حدائق وأعمال خارجية'
    ],
    scopeEn: [
      '64 Isolation Rooms',
      '2 Operation Rooms',
      'MEP Systems',
      'Electrical substation',
      'Landscaping & external works'
    ],
    area: '1,250 م²'
  },
  {
    id: 'vaccine-center-100-bed',
    title: 'مركز تطعيم 100 سرير',
    titleEn: 'Construction of 100 Bed Vaccine Center',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'المملكة العربية السعودية',
    locationEn: 'Saudi Arabia',
    contractValue: '1,490,500',
    year: '',
    status: 'completed',
    mainImage: '/images/projects/Healthcare/Constructionof100Bed/1.png',
    images: [
      '/images/projects/Healthcare/Constructionof100Bed/1.png',
      '/images/projects/Healthcare/Constructionof100Bed/2.png',
      '/images/projects/Healthcare/Constructionof100Bed/3.png',
      '/images/projects/Healthcare/Constructionof100Bed/4.png',
      '/images/projects/Healthcare/Constructionof100Bed/5.png',
    ],
    description: 'تصميم وإنشاء مستشفى كورونا 100 سرير بمساحة 1,500 متر مربع',
    descriptionEn: 'Design and construction of 100-bed Corona Hospital with 1,500 sqm',
    scope: [
      '100 غرفة عزل',
      '4 غرف عمليات',
      'أنظمة MEP',
      'محطة كهرباء فرعية',
      'تنسيق حدائق وأعمال خارجية'
    ],
    scopeEn: [
      '100 Isolation Rooms',
      '4 Operation Rooms',
      'MEP Systems',
      'Electrical substation',
      'Landscaping & external works'
    ],
    area: '1,500 م²'
  },
  {
    id: 'abha-hospital',
    title: 'مستشفى أبها - 300 سرير',
    titleEn: 'Abha Hospital - 300 Beds',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'أبها، المنطقة الغربية',
    locationEn: 'Abha, West Area',
    contractValue: '28,000,000',
    year: '2020',
    status: 'completed',
    mainImage: '/images/projects/Healthcare/AbhaHospital300Beds/1.png',
    images: [
      '/images/projects/Healthcare/AbhaHospital300Beds/1.png',
      '/images/projects/Healthcare/AbhaHospital300Beds/2.png',
      '/images/projects/Healthcare/AbhaHospital300Beds/3.png',
      '/images/projects/Healthcare/AbhaHospital300Beds/4.png',
    ],
    description: 'تصميم وإنشاء مستشفى كورونا بطاقة 300 سرير، بمساحة بناء 1,500 متر مربع على أربعة طوابق',
    descriptionEn: 'Design and construction of 300-bed Corona Hospital, with 1,500 sqm built-up area across four floors',
    scope: [
      '120 غرفة عزل',
      '4 غرف عمليات',
      '100 سرير متخصص',
      'أنظمة MEP متكاملة',
      'محطة كهرباء فرعية',
      'تنسيق حدائق وأعمال خارجية'
    ],
    scopeEn: [
      '120 Isolation Rooms',
      '4 Operation Rooms',
      '100 Specialized Beds',
      'Integrated MEP Systems',
      'Electrical Substation',
      'Landscaping & External Works'
    ],
    area: '1,500 م²',
    features: ['300 سرير', '120 غرفة عزل', '4 غرف عمليات', '4 طوابق']
  },
  {
    id: 'hail-hospital-200',
    title: 'مستشفى حائل 200 سرير',
    titleEn: 'Construction of Hail 200 Bed Hospital',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'حائل',
    locationEn: 'Hail',
    contractValue: '4,645,377',
    year: '2020',
    status: 'completed',
    mainImage: '',
    images: [
      
    ],
    description: 'إنشاء مستشفى بطاقة 200 سرير في مدينة حائل',
    descriptionEn: 'Construction of 200-bed hospital in Hail city',
    scope: [
      'مبنى المستشفى الرئيسي',
      'أقسام طبية متعددة',
      'أنظمة MEP',
      'المرافق الطبية'
    ],
    scopeEn: [
      'Main hospital building',
      'Multiple medical departments',
      'MEP systems',
      'Medical facilities'
    ]
  },
  {
    id: 'bisha-hospital-100',
    title: 'مستشفى بيشة 100 سرير',
    titleEn: 'Construction of Bisha 100 Bed Hospital',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'بيشة',
    locationEn: 'Bisha',
    contractValue: '2,645,377',
    year: '2020',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'إنشاء مستشفى بطاقة 100 سرير في مدينة بيشة',
    descriptionEn: 'Construction of 100-bed hospital in Bisha city',
    scope: [
      'مبنى المستشفى',
      'أقسام طبية',
      'أنظمة MEP',
      'المرافق الصحية'
    ],
    scopeEn: [
      'Hospital building',
      'Medical departments',
      'MEP systems',
      'Healthcare facilities'
    ]
  },
  {
    id: 'rafha-hospital-100',
    title: 'مستشفى الراكة 100 سرير',
    titleEn: 'Construction of RAFHA 100 Bed Hospital',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'الراكة',
    locationEn: 'Rafha',
    contractValue: '2,645,377',
    year: '2020',
    status: 'completed',
    mainImage: '',
    images: [
    
    ],
    description: 'إنشاء مستشفى بطاقة 100 سرير في مدينة الراكة',
    descriptionEn: 'Construction of 100-bed hospital in Rafha city',
    scope: [
      'مبنى المستشفى',
      'أقسام طبية',
      'أنظمة MEP',
      'المرافق الصحية'
    ],
    scopeEn: [
      'Hospital building',
      'Medical departments',
      'MEP systems',
      'Healthcare facilities'
    ]
  }
];

// 🏘️ Housing Projects - المشاريع السكنية
const housingProjects: YamasProject[] = [
  {
    id: 'darah-alqamrah',
    title: 'داره قمره',
    titleEn: 'Darah Al Qamrah',
    category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'أجدان',
    clientEn: 'AJDAN',
    location: 'صفوى، المنطقة الشرقية',
    locationEn: 'Safwa, Eastern Area',
    contractValue: '127,499,580',
    year: '2024',
    status: 'completed',
    mainImage: '/images/projects/Housing Projects/AJDAN/1.jpg',
    images: [
      '/images/projects/Housing Projects/AJDAN/1.jpg',
      '/images/projects/Housing Projects/AJDAN/4.jpg',
      '/images/projects/Housing Projects/AJDAN/3.jpg',
      '/images/projects/Housing Projects/AJDAN/4.jpg',
      '/images/projects/Housing Projects/AJDAN/5.jpg',
      '/images/projects/Housing Projects/AJDAN/6.jpg',
      '/images/projects/Housing Projects/AJDAN/7.jpg',
      '/images/projects/Housing Projects/AJDAN/8.jpg',
      '/images/projects/Housing Projects/AJDAN/9.jpg',
      '/images/projects/Housing Projects/AJDAN/10.jpg',
    ],
    description: 'تصميم وإنشاء 220 فيلا فاخرة بدور أرضي وأول وسطح حسب معايير الإسكان الوطني، بمساحة بناء 300,000 متر مربع',
    descriptionEn: 'Design and construction of 220 luxury villas with ground, first, and roof floors at NHC level, 300,000 sqm built-up area',
    scope: [
      'تصميم معماري حسب معايير الإسكان الوطني',
      'تنفيذ أعمال البناء والتشطيبات',
      'أعمال MEP متكاملة',
      'تنسيق حدائق',
      'الأعمال الخارجية والبنية التحتية'
    ],
    scopeEn: [
      'Architectural design per NHC standards',
      'Construction & finishing execution',
      'Integrated MEP works',
      'Landscaping',
      'External works & infrastructure'
    ],
    area: '300,000 م²',
    features: ['220 فيلا', 'مستوى NHC', 'تصميم فاخر', '3 أدوار']
  },
  {
    id: 'alfulwa-roshn',
    title: 'الفلوة روشن',
    titleEn: 'Al Fulwa Roshn',
    category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'روشن - العيوني للاستثمار',
    clientEn: 'ROSHAN - Aluyouni Investment',
    location: 'الأحساء، المنطقة الشرقية',
    locationEn: 'Al-Ahsa, Eastern Area',
    contractValue: '227,000,000',
    year: '2024',
    status: 'completed',
    mainImage: '/images/projects/Housing Projects/Fulwa/1.png',
    images: [
      '/images/projects/Housing Projects/Fulwa/1.png',
      '/images/projects/Housing Projects/Fulwa/2.png',

    ],
    description: 'تصميم وإنشاء 439 فيلا فاخرة بدور أرضي وأول وسطح حسب مستوى روشن، بمساحة بناء 153,650 متر مربع',
    descriptionEn: 'Design and construction of 439 luxury villas with ground, first, and roof floors at Roshen level, 153,650 sqm built-up area',
    scope: [
      'تصميم معماري متميز حسب معايير روشن',
      'تنفيذ البناء والتشطيبات الفاخرة',
      'أعمال MEP متكاملة',
      'تنسيق المواقع والحدائق',
      'الأعمال الخارجية والبنية التحتية'
    ],
    scopeEn: [
      'Distinguished architectural design per Roshen standards',
      'Construction & luxury finishing execution',
      'Integrated MEP works',
      'Site landscaping & gardens',
      'External works & infrastructure'
    ],
    area: '153,650 م²',
    features: ['439 فيلا', 'مستوى روشن', 'تصميم عصري', '3 أدوار']
  },
  // src/data/yamas-projects.ts - PART 2/2
// تكملة المشاريع السكنية

  {
    id: 'ajyal-dhahran',
    title: 'أجيال الظهران - أرامكو',
    titleEn: 'Ajyal AL-Dhahran Project - Aramco',
    category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'أرامكو السعودية',
    clientEn: 'Saudi Aramco',
    location: 'الظهران، المنطقة الشرقية',
    locationEn: 'Dhahran, Eastern Area',
    contractValue: '149,000,000',
    year: '2021',
    status: 'completed',
    mainImage: '/images/projects/Housing Projects/elzahran/11.JPG',
    images: [
      '/images/projects/Housing Projects/elzahran/1.JPG',
      '/images/projects/Housing Projects/elzahran/4.JPG',
      '/images/projects/Housing Projects/elzahran/11.JPG',

    ],
    description: 'أعمال التشطيب لـ 149 فيلا فاخرة بدور أرضي وأول وسطح حسب مستوى الإسكان الوطني، بمساحة بناء 59,600 متر مربع',
    descriptionEn: 'Finishing works for 149 luxury villas with ground, first, and roof floors at NHC level, 59,600 sqm built-up area',
    scope: [
      'تصميم وتنفيذ أعمال التشطيبات الفاخرة',
      'الأعمال الكهربائية والميكانيكية',
      'أعمال السباكة',
      'تنسيق الحدائق',
      'الأعمال الخارجية'
    ],
    scopeEn: [
      'Design & execution of luxury finishing works',
      'Electrical & mechanical works',
      'Plumbing works',
      'Landscaping',
      'External works'
    ],
    area: '59,600 م²',
    features: ['149 فيلا', 'مستوى NHC', 'تشطيبات فاخرة']
  },
  {
    id: 'tamkeen-4',
    title: 'تمكين 4',
    titleEn: 'Tamkeen 4',
    category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'تمكين',
    clientEn: 'Tamkeen',
    location: 'الأحساء، المنطقة الشرقية',
    locationEn: 'Al-Ahsa, Eastern Area',
    contractValue: '61,520,000',
    year: '2020',
    status: 'completed',
    mainImage: '/images/projects/Housing Projects/tamkeen-4/1.png',
    images: [
      '/images/projects/Housing Projects/tamkeen-4/1.png',

    ],
    description: 'إنشاء 204 فيلا سكنية',
    descriptionEn: 'Construction of 204 residential villas',
    scope: [
      'التصميم والتنفيذ',
      'أعمال البناء',
      'أعمال التشطيبات',
      'الأعمال الكهربائية والميكانيكية والسباكة',
      'تنسيق الحدائق والأعمال الخارجية'
    ],
    scopeEn: [
      'Design & execution',
      'Construction works',
      'Finishing works',
      'Electrical, mechanical & plumbing works',
      'Landscaping & external works'
    ],
    features: ['204 فيلا', 'مشروع سكني متكامل']
  },
  {
    id: 'abyat-rose',
    title: 'واجهة الفرسان',
    titleEn: 'Al-Fursan Facade',
    category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'شركة أبياتنا للتطوير العقاري',
    clientEn: 'Abyatna Real Estate Development Company (ABYATONA)',
    location: 'حي الفرسان 3، الرياض',
    locationEn: 'Al-Fursan 3 District, Riyadh',
    contractValue: '55,000,125',
    year: '2025',
    status: 'ongoing',
    mainImage: '/images/projects/Housing Projects/Al-FursanFacade/1.png',
    images: [
      '/images/projects/Housing Projects/Al-FursanFacade/1.png',
      '/images/projects/Housing Projects/Al-FursanFacade/2.png',
      
    ],
    description: 'إنشاء 70 فيلا سكنية على مرحلتين في حي الفرسان 3 بالرياض',
    descriptionEn: 'Construction of 70 residential villas in two phases in Al-Fursan 3 district, Riyadh',
    scope: [
      'المرحلة الأولى - 35 فيلا',
      'المرحلة الثانية - 35 فيلا',
      'أعمال البناء والتشطيبات',
      'أنظمة MEP',
      'البنية التحتية والأعمال الخارجية'
    ],
    scopeEn: [
      'Phase 1 - 35 villas',
      'Phase 2 - 35 villas',
      'Construction & finishing works',
      'MEP systems',
      'Infrastructure & external works'
    ],
    features: ['70 فيلا', 'مرحلتين', 'موقع مميز']
  },
  {
    id: 'argan-plains',
    title: 'مشروع أرجان السهول',
    titleEn: 'Argan Plains Project',
     category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'شركة أرجان للمشاريع',
    clientEn: 'Argan Projects Company',
    location: 'الرياض',
    locationEn: 'Riyadh',
    contractValue: '35,000,000',
    year: '2025',
    status: 'completed',
    mainImage: '/images/projects/Commercial Projects/argan-plains/1.png',
    images: [
      '/images/projects/Commercial Projects/argan-plains/1.png',
      '/images/projects/Commercial Projects/argan-plains/2.png',
    ],
    description: 'إنشاء 18 فيلا سكنية خاصة بمستوى تشطيب عالي، بمساحة إجمالية تتجاوز 10,000 متر مربع',
    descriptionEn: 'Construction of 18 private residential villas with high finishing level, total area exceeding 10,000 sqm',
    scope: [
      'فلل خاصة راقية',
      'تشطيبات فاخرة',
      'تصميم معماري مميز',
      'حدائق خاصة',
      'مرافق متكاملة'
    ],
    scopeEn: [
      'Upscale private villas',
      'Luxury finishes',
      'Distinguished architectural design',
      'Private gardens',
      'Complete facilities'
    ],
    area: '10,000+ م²',
    features: ['18 فيلا', 'تشطيبات راقية', 'تصميم خاص']
  },
  {
    id: 'jaddan-life',
    title: 'جدان لايف',
    titleEn: 'Jaddan Life Project',
    category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'إنوفست',
    clientEn: 'Innovest',
    location: 'الأحساء، المنطقة الشرقية',
    locationEn: 'Al-Ahsa, Eastern Area',
    contractValue: '72,000,000',
    year: '2015',
    status: 'completed',
    mainImage: '/images/projects/Housing Projects/jaddan-life/1.png',
    images: [
      '/images/projects/Housing Projects/jaddan-life/1.png',
    ],
    description: 'مشروع سكني متكامل',
    descriptionEn: 'Integrated residential project',
    scope: [],
    scopeEn: []
  }
];

// 🎓 Educational Projects - المشاريع التعليمية
const educationalProjects: YamasProject[] = [
  {
    id: 'kfupm-maintenance',
    title: 'مشروع جامعة الملك فهد للبترول والمعادن',
    titleEn: 'King Fahd University of Petroleum and Minerals Project',
    category: 'educational',
    categoryAr: 'مشاريع تعليمية',
    categoryEn: 'Educational Projects',
    client: 'جامعة الملك فهد للبترول والمعادن',
    clientEn: 'King Fahd University of Petroleum and Minerals (KFUPM)',
    location: 'الظهران، المنطقة الشرقية',
    locationEn: 'Dhahran, Eastern Area',
    contractValue: '13,000,000',
    year: '2025',
    status: 'completed',
    mainImage: '/images/projects/Education/KingFahdUniversity/1.png',
    images: [
      '/images/projects/Education/KingFahdUniversity/1.png',
      '/images/projects/Education/KingFahdUniversity/2.png',
      '/images/projects/Education/KingFahdUniversity/3.png',
      
    ],
    description: 'أعمال صيانة لخمسة مباني (مباني القنصلية الأمريكية سابقاً)',
    descriptionEn: 'Maintenance works for five buildings (formerly US Consulate buildings)',
    scope: [
      'أعمال الصيانة الشاملة',
      'ترميم المباني',
      'تحديث الأنظمة الكهربائية والميكانيكية',
      'أعمال التشطيبات',
      'تحسين البنية التحتية'
    ],
    scopeEn: [
      'Comprehensive maintenance',
      'Building restoration',
      'Electrical & mechanical systems upgrade',
      'Finishing works',
      'Infrastructure improvements'
    ]
  },
  {
    id: 'boys-schools',
    title: 'مدارس البنين',
    titleEn: 'Boys Schools',
    category: 'educational',
    categoryAr: 'مشاريع تعليمية',
    categoryEn: 'Educational Projects',
    client: 'وزارة التعليم',
    clientEn: 'Ministry of Education (MOE)',
    location: 'المملكة العربية السعودية',
    locationEn: 'Saudi Arabia',
    contractValue: '69,988,169',
    year: '2019',
    status: 'completed',
    mainImage: '',
    images: [
  
    ],
    description: 'إنشاء مجموعة من مدارس البنين',
    descriptionEn: 'Construction of boys schools',
    scope: [
      'الفصول الدراسية',
      'المختبرات',
      'المرافق الرياضية',
      'المرافق الإدارية',
      'الساحات والملاعب'
    ],
    scopeEn: [
      'Classrooms',
      'Laboratories',
      'Sports facilities',
      'Administrative facilities',
      'Playgrounds & sports fields'
    ]
  },
  {
    id: 'medicine-faculty-najran',
    title: 'كلية الطب -  نجران في الجنوب',
    titleEn: 'Faculty of Medicine - Najran',
    category: 'educational',
    categoryAr: 'مشاريع تعليمية',
    categoryEn: 'Educational Projects',
    client: 'وزارة التعليم العالي',
    clientEn: 'Ministry of Higher Education (MOHE)',
    location: 'نجران، الجنوب',
    locationEn: 'Najran, South',
    contractValue: '22,336,554',
    year: '2019',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'إنشاء مبنى كلية الطب في مدينة نجران',
    descriptionEn: 'Construction of Faculty of Medicine building in Najran city',
    scope: [
      'المباني التعليمية',
      'المختبرات الطبية',
      'قاعات المحاضرات',
      'المرافق الطبية التدريبية',
      'أنظمة MEP'
    ],
    scopeEn: [
      'Educational buildings',
      'Medical laboratories',
      'Lecture halls',
      'Medical training facilities',
      'MEP systems'
    ]
  },
  {
    id: 'science-college-najran',
    title: 'كلية العلوم - نجران في الجنوب',
    titleEn: 'College of Science - Najran',
    category: 'educational',
    categoryAr: 'مشاريع تعليمية',
    categoryEn: 'Educational Projects',
    client: 'وزارة التعليم',
    clientEn: 'Ministry of Education (MOE)',
    location: 'نجران، الجنوب',
    locationEn: 'Najran, South',
    contractValue: '135,000,000',
    year: '2018',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'إنشاء مبنى كلية العلوم',
    descriptionEn: 'Construction of College of Science building',
    scope: [
      'المباني الأكاديمية',
      'المختبرات العلمية',
      'القاعات الدراسية',
      'المرافق الإدارية',
      'أنظمة MEP متكاملة'
    ],
    scopeEn: [
      'Academic buildings',
      'Scientific laboratories',
      'Classrooms',
      'Administrative facilities',
      'Integrated MEP systems'
    ]
  },
  {
    id: 'pharmacy-college-najran',
    title: 'كلية الصيدلة - نجران في الجنوب',
    titleEn: 'College of Pharmacy - Najran',
    category: 'educational',
    categoryAr: 'مشاريع تعليمية',
    categoryEn: 'Educational Projects',
    client: 'وزارة التعليم',
    clientEn: 'Ministry of Education (MOE)',
    location: 'نجران، الجنوب',
    locationEn: 'Najran, South',
    contractValue: '123,971,700',
    year: '2018',
    status: 'completed',
    mainImage: '',
    images: [
  
    ],
    description: 'إنشاء مبنى كلية الصيدلة',
    descriptionEn: 'Construction of College of Pharmacy building',
    scope: [
      'المباني الأكاديمية',
      'مختبرات الصيدلة',
      'القاعات الدراسية المتخصصة',
      'المرافق البحثية',
      'أنظمة MEP'
    ],
    scopeEn: [
      'Academic buildings',
      'Pharmacy laboratories',
      'Specialized classrooms',
      'Research facilities',
      'MEP systems'
    ]
  }
];

// 🏢 Commercial Projects - المشاريع التجارية
const commercialProjects: YamasProject[] = [
  {
    id: 'miahona-office',
    title: 'المقر الرئيسي الجديد لمياهنا',
    titleEn: 'Miahona NEW Head Office',
    category: 'commercial',
    categoryAr: 'مشاريع تجارية',
    categoryEn: 'Commercial Projects',
    client: 'شركة مياهنا',
    clientEn: 'Miahona Company',
    location: 'الرياض',
    locationEn: 'Riyadh',
    contractValue: '12,000,000',
    year: '2025',
    status: 'completed',
    mainImage: '/images/projects/Commercial Projects/Miahona/1.jpg',
    images: [
      '/images/projects/Commercial Projects/Miahona/1.jpg',
      '/images/projects/Commercial Projects/Miahona/2.jpg',
      '/images/projects/Commercial Projects/Miahona/3.jpg',
      '/images/projects/Commercial Projects/Miahona/4.jpg',
      '/images/projects/Commercial Projects/Miahona/5.jpg',
      '/images/projects/Commercial Projects/Miahona/6.jpg',
      '/images/projects/Commercial Projects/Miahona/7.jpg',
      '/images/projects/Commercial Projects/Miahona/8.jpg',
      '/images/projects/Commercial Projects/Miahona/9.jpg',
      '/images/projects/Commercial Projects/Miahona/10.jpg',
      '/images/projects/Commercial Projects/Miahona/11.jpg',
      '/images/projects/Commercial Projects/Miahona/12.jpg',
      '/images/projects/Commercial Projects/Miahona/13.jpg',
    ],
    description: 'أعمال التشطيب والتجهيز لمبنى إدارة شركة مياهنا، إحدى شركات مجموعة المهيدب القابضة',
    descriptionEn: 'Finishing and preparation works for Miyahuna Company administration building, one of Al-Muhaidib Holding Group companies',
    scope: [
      'أعمال التشطيبات الداخلية',
      'تجهيز المكاتب',
      'أنظمة الاتصالات والشبكات',
      'أنظمة MEP',
      'التأثيث والديكور'
    ],
    scopeEn: [
      'Interior finishing works',
      'Office fit-out',
      'Communication & network systems',
      'MEP systems',
      'Furnishing & decoration'
    ],
    features: ['مكاتب إدارية', 'تشطيبات حديثة', 'تجهيزات متكاملة']
  },
  {
    id: 'grand-hyper',
    title: 'جراند هايبر',
    titleEn: 'Grand Hyper',
    category: 'commercial',
    categoryAr: 'مشاريع تجارية',
    categoryEn: 'Commercial Projects',
    client: 'جراند هايبر',
    clientEn: 'Grand Hyper',
    location: 'الجبيل، المنطقة الشرقية',
    locationEn: 'Jubail, Eastern Area',
    contractValue: '52,000,000',
    year: '2024',
    status: 'ongoing',
    mainImage: '/images/projects/Commercial Projects/GrandMall/1.jpeg',
    images: [
      '/images/projects/Commercial Projects/GrandMall/1.jpeg',
      '/images/projects/Commercial Projects/GrandMall/2.jpeg',
      '/images/projects/Commercial Projects/GrandMall/3.jpeg',
      '/images/projects/Commercial Projects/GrandMall/4.jpeg',
    ],
    description: 'تصميم وإنشاء مول تجاري فاخر على مستوى بودية بمساحة 5,000 متر مربع، يشمل ستريب مول مع هايبر ماركت ومواقف لأكثر من 15,000 مركبة',
    descriptionEn: 'Design and construction of luxury shopping mall on podium level with 5,000 sqm area, including strip mall with hypermarket and parking for over 15,000 vehicles',
    scope: [
      'هايبر ماركت',
      'محلات تجارية (ستريب مول)',
      'مواقف سيارات ضخمة (15,000+ مركبة)',
      'محطة كهرباء فرعية',
      'تنسيق حدائق وأعمال خارجية'
    ],
    scopeEn: [
      'Hypermarket',
      'Retail stores (Strip Mall)',
      'Massive parking (15,000+ vehicles)',
      'Power substation',
      'Landscaping & external works'
    ],
    area: '5,000 م²',
    features: ['هايبر ماركت', 'ستريب مول', '15,000 موقف', 'موقع استراتيجي']
  },
  {
    id: 'aljomaih-showroom',
    title: 'صالة عرض الجميح',
    titleEn: 'Aljumaih Showroom',
    category: 'commercial',
    categoryAr: 'مشاريع تجارية',
    categoryEn: 'Commercial Projects',
    client: 'شركة الجميح للسيارات',
    clientEn: 'Al Jomaih Automotive Company',
    location: 'الرياض',
    locationEn: 'Riyadh',
    contractValue: '35,000,000',
    year: '2024',
    status: 'completed',
    mainImage: '/images/projects/Commercial Projects/Aljumaih/1.png',
    images: [
      '/images/projects/Commercial Projects/Aljumaih/1.png',
      '/images/projects/Commercial Projects/Aljumaih/2.png',
      '/images/projects/Commercial Projects/Aljumaih/3.png',
      '/images/projects/Commercial Projects/Aljumaih/4.png',
      '/images/projects/Commercial Projects/Aljumaih/5.png',
      '/images/projects/Commercial Projects/Aljumaih/6.png',
      '/images/projects/Commercial Projects/Aljumaih/7.png',

    ],
    description: 'إنشاء صالة عرض سيارات جديدة لعلامة تجارية جديدة بمساحة إجمالية 8,500 متر مربع',
    descriptionEn: 'Construction of new car showroom for a new brand with total area of 8,500 sqm',
    scope: [
      'صالة عرض حديثة',
      'مناطق خدمة العملاء',
      'مرافق الصيانة',
      'مواقف واسعة',
      'تجهيزات متطورة'
    ],
    scopeEn: [
      'Modern showroom',
      'Customer service areas',
      'Maintenance facilities',
      'Spacious parking',
      'Advanced equipment'
    ],
    area: '8,500 م²',
    features: ['صالة عرض فاخرة', 'علامة تجارية جديدة', 'مرافق متكاملة']
  },
  {
    id: 'aljomaih-maintenance',
    title: 'مركز صيانة الجميح',
    titleEn: 'Al Jomaih Maintenance Center Development',
    category: 'commercial',
    categoryAr: 'مشاريع تجارية',
    categoryEn: 'Commercial Projects',
    client: 'شركة الجميح للسيارات',
    clientEn: 'Al Jomaih Automotive Company (JMC)',
    location: 'المنطقة الشرقية',
    locationEn: 'Eastern Area',
    contractValue: '35,000,000',
    year: '2024',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'تطوير مركز صيانة متكامل للسيارات',
    descriptionEn: 'Development of integrated automotive maintenance center',
    scope: [
      'ورش الصيانة',
      'مناطق الفحص',
      'مخازن قطع الغيار',
      'مرافق خدمة العملاء',
      'أنظمة MEP'
    ],
    scopeEn: [
      'Maintenance workshops',
      'Inspection areas',
      'Spare parts warehouses',
      'Customer service facilities',
      'MEP systems'
    ]
  }
];

// 🏗️ Towers Projects - مشاريع الأبراج
const towersProjects: YamasProject[] = [
  {
    id: 'rima-tower-1',
    title: 'برج ريما 1',
    titleEn: 'Rima Tower 1',
    category: 'towers',
    categoryAr: 'مشاريع الأبراج',
    categoryEn: 'Towers Projects',
    client: 'شركة رعب للتطوير العقاري',
    clientEn: 'Raab Real Estate Development Company',
    location: 'الدمام، المنطقة الشرقية',
    locationEn: 'Dammam, Eastern Area',
    contractValue: '37,000,000',
    year: '2025',
    status: 'ongoing',
    mainImage: '/images/projects/buildings/Rima1/1.jpg',
    images: [
      '/images/projects/buildings/Rima1/1.jpg',
      '/images/projects/buildings/Rima1/2.jpg',
      '/images/projects/buildings/Rima1/3.jpg',
    ],
    description: 'مبنى سكني راقي مكون من 15 طابق بمساحة بناء إجمالية 22,295 متر مربع، يشمل 62 شقة سكنية و100 موقف سيارات',
    descriptionEn: 'Premium residential building of 15 floors with total built-up area of 22,295 sqm, including 62 apartments and 100 parking spaces',
    scope: [
      '62 شقة سكنية فاخرة',
      '100 موقف سيارات',
      'مرافق متكاملة',
      'تصميم معماري عصري',
      'أنظمة MEP متطورة'
    ],
    scopeEn: [
      '62 luxury residential apartments',
      '100 parking spaces',
      'Complete facilities',
      'Modern architectural design',
      'Advanced MEP systems'
    ],
    area: '22,295 م²',
    features: ['15 طابق', '62 شقة', '100 موقف', 'تصميم عصري']
  },
  {
    id: 'rima-tower-2',
    title: 'برج ريما 2',
    titleEn: 'Rima Tower 2',
    category: 'towers',
    categoryAr: 'مشاريع الأبراج',
    categoryEn: 'Towers Projects',
    client: 'شركة رعب للتطوير العقاري',
    clientEn: 'Raab Real Estate Development Company',
    location: 'الدمام، المنطقة الشرقية',
    locationEn: 'Dammam, Eastern Area',
    contractValue: '40,000,000',
    year: '2025',
    status: 'ongoing',
    mainImage: '/images/projects/buildings/Rima2/1.png',
    images: [
      '/images/projects/buildings/Rima2/1.png',
      '/images/projects/buildings/Rima2/2.png',
    ],
    description: 'مبنى سكني راقي مكون من 15 طابق بمساحة بناء إجمالية 22,295 متر مربع، يشمل 62 شقة سكنية و100 موقف سيارات',
    descriptionEn: 'Premium residential building of 15 floors with total built-up area of 22,295 sqm, including 62 apartments and 100 parking spaces',
    scope: [
      '62 شقة سكنية فاخرة',
      '100 موقف سيارات',
      'مرافق متكاملة',
      'تصميم معماري عصري',
      'أنظمة MEP متطورة'
    ],
    scopeEn: [
      '62 luxury residential apartments',
      '100 parking spaces',
      'Complete facilities',
      'Modern architectural design',
      'Advanced MEP systems'
    ],
    area: '22,295 م²',
    features: ['15 طابق', '62 شقة', '100 موقف', 'تصميم عصري']
  },
// CONTINUATION - باقي الأبراج والمشاريع الحكومية والصناعية

  {
    id: 'elbaha-tower',
    title: 'برج الباحة',
    titleEn: 'Elbaha Tower',
    category: 'towers',
    categoryAr: 'مشاريع الأبراج',
    categoryEn: 'Towers Projects',
    client: 'قطاع خاص',
    clientEn: 'Private Sector',
    location: 'الباحة',
    locationEn: 'Al-Baha',
    contractValue: '85,000,000',
    year: '2019',
    status: 'completed',
    mainImage: '',
    images: [
 
    ],
    description: 'إنشاء برج سكني وتجاري في مدينة الباحة',
    descriptionEn: 'Construction of residential and commercial tower in Al-Baha city',
    scope: [
      'وحدات سكنية',
      'محلات تجارية',
      'مواقف سيارات',
      'أنظمة MEP',
      'المرافق المشتركة'
    ],
    scopeEn: [
      'Residential units',
      'Commercial shops',
      'Parking spaces',
      'MEP systems',
      'Common facilities'
    ]
  },
  {
    id: 'khamis-mushait-towers',
    title: 'أبراج خميس مشيط',
    titleEn: 'Khamis Mushait Towers',
    category: 'towers',
    categoryAr: 'مشاريع الأبراج',
    categoryEn: 'Towers Projects',
    client: 'قطاع خاص',
    clientEn: 'Private Sector',
    location: 'خميس مشيط، أبها',
    locationEn: 'Khamis Mushait, Abha',
    contractValue: '0',
    year: '2025',
    status: 'ongoing',
    mainImage: '/images/projects/buildings/Khames/1.jpg',
    images: [
      '/images/projects/buildings/Khames/1.jpg',
      '/images/projects/buildings/Khames/2.jpg',
      '/images/projects/buildings/Khames/3.jpg',
      '/images/projects/buildings/Khames/4.jpg',
      '/images/projects/buildings/Khames/5.jpg',
      '/images/projects/buildings/Khames/6.jpg',
      '/images/projects/buildings/Khames/7.jpg',
      '/images/projects/buildings/Khames/8.jpg',
      '/images/projects/buildings/Khames/9.jpg',
      '/images/projects/buildings/Khames/10.jpg',
    ],
    description: 'إنشاء 23 أبراج سكنية وتجارية، كل برج مكون من 7 أدوار',
    descriptionEn: 'Construction of 23 residential and commercial towers, each tower consisting of 7 floors',
    scope: [
      '5 أبراج',
      '7 أدوار لكل برج',
      'وحدات سكنية وتجارية',
      'مواقف سيارات',
      'أنظمة MEP متكاملة'
    ],
    scopeEn: [
      '5 towers',
      '7 floors per tower',
      'Residential and commercial units',
      'Parking spaces',
      'Integrated MEP systems'
    ],
    features: ['5 أبراج', '7 أدوار', 'سكني وتجاري']
  }
];

// 🏛️ Government Projects - المشاريع الحكومية
const governmentProjects: YamasProject[] = [
  {
    id: 'admin-court-jeddah',
    title: 'مبنى المحكمة الإدارية - جدة',
    titleEn: 'Construction of ADMIN Court Building - JEDDAH',
    category: 'government',
    categoryAr: 'مشاريع حكومية',
    categoryEn: 'Government Projects',
    client: 'وزارة المالية',
    clientEn: 'Ministry of Finance (MOF)',
    location: 'جدة',
    locationEn: 'Jeddah',
    contractValue: '80,000,000',
    year: '2019',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'إنشاء مبنى المحكمة الإدارية في مدينة جدة',
    descriptionEn: 'Construction of Administrative Court building in Jeddah city',
    scope: [
      'قاعات المحاكم',
      'المكاتب الإدارية',
      'مرافق الأمن',
      'أنظمة MEP متطورة',
      'أنظمة السلامة والأمن'
    ],
    scopeEn: [
      'Courtrooms',
      'Administrative offices',
      'Security facilities',
      'Advanced MEP systems',
      'Safety & security systems'
    ]
  },
  {
    id: 'maintenance-building',
    title: 'مبنى الصيانة',
    titleEn: 'Maintenance Building',
    category: 'government',
    categoryAr: 'مشاريع حكومية',
    categoryEn: 'Government Projects',
    client: 'وزارة التعليم',
    clientEn: 'Ministry of Education (MOE)',
    location: 'المملكة العربية السعودية',
    locationEn: 'Saudi Arabia',
    contractValue: '9,937,570',
    year: '2019',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'إنشاء مبنى الصيانة',
    descriptionEn: 'Construction of maintenance building',
    scope: [
      'ورش الصيانة',
      'المخازن',
      'المكاتب الإدارية',
      'المرافق الخدمية',
      'أنظمة MEP'
    ],
    scopeEn: [
      'Maintenance workshops',
      'Warehouses',
      'Administrative offices',
      'Service facilities',
      'MEP systems'
    ]
  },
  {
    id: 'mosque-jazan',
    title: 'مسجد',
    titleEn: 'Mosque',
    category: 'government',
    categoryAr: 'مشاريع حكومية',
    categoryEn: 'Government Projects',
    client: 'وزارة التعليم العالي',
    clientEn: 'Ministry of Higher Education (MOHE)',
    location: 'جازان',
    locationEn: 'Jazan',
    contractValue: '650,000',
    year: '2019',
    status: 'ongoing',
    mainImage: '/images/projects/Government Projects/Mosque/1.png',
    images: [
      '/images/projects/Government Projects/Mosque/1.png',
      '/images/projects/Government Projects/Mosque/2.png',
      '/images/projects/Government Projects/Mosque/3.png',
      '/images/projects/Government Projects/Mosque/4.png',
      '/images/projects/Government Projects/Mosque/5.png',
      '/images/projects/Government Projects/Mosque/6.png',
    ],
    description: 'إنشاء مسجد في جازان',
    descriptionEn: 'Construction of mosque in Jazan',
    scope: [
      'صالة الصلاة الرئيسية',
      'المرافق',
      'المآذن',
      'أعمال التشطيبات',
      'الأعمال الخارجية'
    ],
    scopeEn: [
      'Main prayer hall',
      'Facilities',
      'Minarets',
      'Finishing works',
      'External works'
    ]
  },
  {
    id: 'utilities-complex-king-khalid',
    title: 'مجمع المرافق - الملك خالد',
    titleEn: 'Construction of Utilities Complex - King Khalid',
    category: 'government',
    categoryAr: 'مشاريع حكومية',
    categoryEn: 'Government Projects',
    client: 'وزارة التعليم العالي',
    clientEn: 'Ministry of Higher Education (MOHE)',
    location: 'المملكة العربية السعودية',
    locationEn: 'Saudi Arabia',
    contractValue: '5,145,371',
    year: '2019',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'إنشاء مجمع المرافق بجامعة الملك خالد',
    descriptionEn: 'Construction of utilities complex at King Khalid University',
    scope: [
      'مباني المرافق',
      'البنية التحتية',
      'أنظمة المياه والصرف',
      'الأنظمة الكهربائية',
      'شبكات الاتصالات'
    ],
    scopeEn: [
      'Utility buildings',
      'Infrastructure',
      'Water & sewage systems',
      'Electrical systems',
      'Communication networks'
    ]
  }
];

// 🏭 Industrial Projects - المشاريع الصناعية
const industrialProjects: YamasProject[] = [
  {
    id: 'nasser-alhajri-factory',
    title: 'مصنع ناصر الحجري',
    titleEn: 'Nasser Al Hajri Factory',
    category: 'industrial',
    categoryAr: 'مشاريع صناعية',
    categoryEn: 'Industrial Projects',
    client: 'ناصر الحجري',
    clientEn: 'Nasser Al Hajri (NSH)',
    location: 'المنطقة الشرقية',
    locationEn: 'Eastern Area',
    contractValue: '35,000,000',
    year: '2020',
    status: 'completed',
    mainImage: '',
    images: [

    ],
    description: 'إنشاء مصنع متكامل',
    descriptionEn: 'Construction of integrated factory',
    scope: [
      'المباني الصناعية',
      'خطوط الإنتاج',
      'المخازن',
      'المكاتب الإدارية',
      'أنظمة MEP الصناعية'
    ],
    scopeEn: [
      'Industrial buildings',
      'Production lines',
      'Warehouses',
      'Administrative offices',
      'Industrial MEP systems'
    ]
  }
];

// ترتيب المشاريع حسب التاريخ من الأجدد للأقدم
const sortProjectsByDate = (projects: YamasProject[]): YamasProject[] => {
  return projects.sort((a, b) => {
    const yearA = parseInt(a.year.split('-')[0]);
    const yearB = parseInt(b.year.split('-')[0]);
    return yearB - yearA;
  });
};

// 🏗️ تجميع البيانات مع الترتيب
export const projectCategories: ProjectCategory[] = [
  {
    id: 'healthcare',
    nameAr: 'مشاريع الرعاية الصحية',
    nameEn: 'Healthcare Projects',
    description: 'مستشفيات ومراكز طبية ومراكز تطعيم متطورة',
    descriptionEn: 'Advanced hospitals, medical centers and vaccination centers',
    icon: '🏥',
    color: '#DC2626',
    projects: sortProjectsByDate(healthcareProjects)
  },
  {
    id: 'housing',
    nameAr: 'المشاريع السكنية',
    nameEn: 'Housing Projects',
    description: 'مجمعات سكنية فاخرة ومتكاملة وفلل راقية',
    descriptionEn: 'Luxury integrated residential complexes and upscale villas',
    icon: '🏘️',
    color: '#059669',
    projects: sortProjectsByDate(housingProjects)
  },
  {
    id: 'educational',
    nameAr: 'المشاريع التعليمية',
    nameEn: 'Educational Projects',
    description: 'جامعات وكليات ومدارس ومراكز تدريب',
    descriptionEn: 'Universities, colleges, schools and training centers',
    icon: '🎓',
    color: '#2563EB',
    projects: sortProjectsByDate(educationalProjects)
  },
  {
    id: 'commercial',
    nameAr: 'المشاريع التجارية',
    nameEn: 'Commercial Projects',
    description: 'مولات ومراكز أعمال ومكاتب إدارية',
    descriptionEn: 'Malls, business centers and administrative offices',
    icon: '🏢',
    color: '#7C3AED',
    projects: sortProjectsByDate(commercialProjects)
  },
  {
    id: 'towers',
    nameAr: 'مشاريع الأبراج',
    nameEn: 'Towers Projects',
    description: 'أبراج سكنية وتجارية متعددة الأدوار',
    descriptionEn: 'Multi-story residential and commercial towers',
    icon: '🏗️',
    color: '#EC4899',
    projects: sortProjectsByDate(towersProjects)
  },
  {
    id: 'government',
    nameAr: 'المشاريع الحكومية',
    nameEn: 'Government Projects',
    description: 'مشاريع حكومية ومرافق عامة ومباني إدارية',
    descriptionEn: 'Government projects, public facilities and administrative buildings',
    icon: '🏛️',
    color: '#F59E0B',
    projects: sortProjectsByDate(governmentProjects)
  },
  {
    id: 'industrial',
    nameAr: 'المشاريع الصناعية',
    nameEn: 'Industrial Projects',
    description: 'مصانع ومشاريع صناعية',
    descriptionEn: 'Factories and industrial projects',
    icon: '🏭',
    color: '#64748B',
    projects: sortProjectsByDate(industrialProjects)
  }
];

// 🎯 دوال مساعدة
export const getAllProjects = (): YamasProject[] => {
  return projectCategories.flatMap(cat => cat.projects);
};

export const getProjectById = (id: string): YamasProject | undefined => {
  return getAllProjects().find(p => p.id === id);
};

export const getProjectsByCategory = (categoryId: string): YamasProject[] => {
  const category = projectCategories.find(c => c.id === categoryId);
  return category?.projects || [];
};

export const getProjectsByStatus = (status: 'completed' | 'ongoing'): YamasProject[] => {
  return getAllProjects().filter(p => p.status === status);
};

export const getCategoryStats = () => {
  return projectCategories.map(cat => ({
    ...cat,
    totalProjects: cat.projects.length,
    completedProjects: cat.projects.filter(p => p.status === 'completed').length,
    ongoingProjects: cat.projects.filter(p => p.status === 'ongoing').length,
    totalValue: cat.projects.reduce((sum, p) => sum + parseFloat(p.contractValue.replace(/,/g, '')), 0)
  }));
};

export const getCompanyStats = () => {
  const allProjects = getAllProjects();
  const totalValue = allProjects.reduce((sum, p) => sum + parseFloat(p.contractValue.replace(/,/g, '')), 0);
  
  return {
    totalProjects: allProjects.length,
    completedProjects: allProjects.filter(p => p.status === 'completed').length,
    ongoingProjects: allProjects.filter(p => p.status === 'ongoing').length,
    totalValue: totalValue,
    totalValueFormatted: totalValue.toLocaleString('ar-SA'),
    categories: projectCategories.length
  };
};