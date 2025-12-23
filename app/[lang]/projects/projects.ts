// src/data/yamas-projects.ts

export interface YamasProject {
  id: string;
  title: string;
  titleEn: string;
  category: 'healthcare' | 'housing' | 'educational' | 'commercial' | 'industrial' | 'government';
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
    mainImage: '/projects/healthcare/abha-hospital/main.jpg',
    images: [
      '/projects/healthcare/abha-hospital/1.jpg',
      '/projects/healthcare/abha-hospital/2.jpg',
      '/projects/healthcare/abha-hospital/3.jpg',
    ],
    description: 'تصميم وإنشاء مستشفى كورونا بطاقة 300 سرير، بمساحة بناء 1,500 متر مربع على ثلاثة طوابق',
    descriptionEn: 'Design and construction of 300-bed Corona Hospital, with 1,500 sqm built-up area across three floors',
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
    features: ['300 سرير', '120 غرفة عزل', '4 غرف عمليات', '3 طوابق']
  },
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
    mainImage: '/projects/healthcare/vaccine-center/main.jpg',
    images: [
      '/projects/healthcare/vaccine-center/1.jpg',
      '/projects/healthcare/vaccine-center/2.jpg',
      '/projects/healthcare/vaccine-center/3.jpg',
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
    mainImage: '/projects/healthcare/one-day-surgery/main.jpg',
    images: [
      '/projects/healthcare/one-day-surgery/1.jpg',
      '/projects/healthcare/one-day-surgery/2.jpg',
      '/projects/healthcare/one-day-surgery/3.jpg',
    ],
    description: 'تصميم وإنشاء مبنى جراحة اليوم الواحد بمساحة 1,500 متر مربع على طابقين',
    descriptionEn: 'Design and construction of One Day Surgery building with 1,500 sqm area on two floors',
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
    features: ['طابقين', 'غرف عمليات متطورة', 'عيادات خارجية']
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
    year: '2021',
    status: 'completed',
    mainImage: '/projects/healthcare/vaccine-100/main.jpg',
    images: [
      '/projects/healthcare/vaccine-100/1.jpg',
      '/projects/healthcare/vaccine-100/2.jpg',
    ],
    description: 'تصميم وإنشاء مستشفى كورونا 100 سرير بمساحة 1,500 متر مربع على ثلاثة طوابق',
    descriptionEn: 'Design and construction of 100-bed Corona Hospital with 1,500 sqm on three floors',
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
    year: '2021',
    status: 'completed',
    mainImage: '/projects/healthcare/vaccine-64/main.jpg',
    images: [
      '/projects/healthcare/vaccine-64/1.jpg',
      '/projects/healthcare/vaccine-64/2.jpg',
    ],
    description: 'تصميم وإنشاء مستشفى كورونا 64 سرير بمساحة 3,000 متر مربع على طابقين',
    descriptionEn: 'Design and construction of 64-bed Corona Hospital with 3,000 sqm on two floors',
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
    area: '3,000 م²'
  },
  {
    id: 'hospital-500-bed',
    title: 'مستشفى 500 سرير',
    titleEn: 'Construction & MEP of 500 Bed Hospital',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة التعليم العالي',
    clientEn: 'Ministry of Higher Education (MOHE)',
    location: 'المملكة العربية السعودية',
    locationEn: 'Saudi Arabia',
    contractValue: '25,490,300',
    year: '2019',
    status: 'completed',
    mainImage: '/projects/healthcare/hospital-500/main.jpg',
    images: [
      '/projects/healthcare/hospital-500/1.jpg',
      '/projects/healthcare/hospital-500/2.jpg',
    ],
    description: 'إنشاء وتنفيذ أعمال MEP لمستشفى بطاقة 500 سرير',
    descriptionEn: 'Construction and MEP works for 500-bed hospital',
    scope: [
      'أعمال البناء الإنشائية',
      'أنظمة MEP المتكاملة',
      'أقسام طبية متخصصة',
      'غرف عمليات',
      'أقسام العناية المركزة'
    ],
    scopeEn: [
      'Structural construction works',
      'Integrated MEP systems',
      'Specialized medical departments',
      'Operation rooms',
      'Intensive care units'
    ]
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
    mainImage: '/projects/healthcare/hail-hospital/main.jpg',
    images: [
      '/projects/healthcare/hail-hospital/1.jpg',
      '/projects/healthcare/hail-hospital/2.jpg',
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
    mainImage: '/projects/healthcare/bisha-hospital/main.jpg',
    images: [
      '/projects/healthcare/bisha-hospital/1.jpg',
      '/projects/healthcare/bisha-hospital/2.jpg',
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
    title: 'مستشفى رفحاء 100 سرير',
    titleEn: 'Construction of RAFHA 100 Bed Hospital',
    category: 'healthcare',
    categoryAr: 'الرعاية الصحية',
    categoryEn: 'Healthcare',
    client: 'وزارة الصحة',
    clientEn: 'Ministry of Health (MOH)',
    location: 'رفحاء',
    locationEn: 'Rafha',
    contractValue: '2,645,377',
    year: '2020',
    status: 'completed',
    mainImage: '/projects/healthcare/rafha-hospital/main.jpg',
    images: [
      '/projects/healthcare/rafha-hospital/1.jpg',
      '/projects/healthcare/rafha-hospital/2.jpg',
    ],
    description: 'إنشاء مستشفى بطاقة 100 سرير في مدينة رفحاء',
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
    title: 'درة القمراء أجدان',
    titleEn: 'Darah Al Qamrah Ajdan',
    category: 'housing',
    categoryAr: 'مشاريع سكنية',
    categoryEn: 'Housing Projects',
    client: 'أجدان',
    clientEn: 'AJDAN',
    location: 'صفوى، المنطقة الشرقية',
    locationEn: 'Safwa, Eastern Area',
    contractValue: '127,499,580',
    year: '2024',
    status: 'ongoing',
    mainImage: '/projects/housing/darah-alqamrah/main.jpg',
    images: [
      '/projects/housing/darah-alqamrah/1.jpg',
      '/projects/housing/darah-alqamrah/2.jpg',
      '/projects/housing/darah-alqamrah/3.jpg',
      '/projects/housing/darah-alqamrah/4.jpg',
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
    mainImage: '/projects/housing/alfulwa/main.jpg',
    images: [
      '/projects/housing/alfulwa/1.jpg',
      '/projects/housing/alfulwa/2.jpg',
      '/projects/housing/alfulwa/3.jpg',
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
    year: '2021-2022',
    status: 'completed',
    mainImage: '/projects/housing/ajyal-dhahran/main.jpg',
    images: [
      '/projects/housing/ajyal-dhahran/1.jpg',
      '/projects/housing/ajyal-dhahran/2.jpg',
      '/projects/housing/ajyal-dhahran/3.jpg',
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
    mainImage: '/projects/housing/jaddan-life/main.jpg',
    images: [
      '/projects/housing/jaddan-life/1.jpg',
      '/projects/housing/jaddan-life/2.jpg',
    ],
    description: 'تصميم وإنشاء 85 فيلا بدور أرضي وأول وسطح حسب مستوى الشركة الوطنية للإسكان، بمساحة بناء 34,000 متر مربع',
    descriptionEn: 'Design and construction of 85 villas with ground, first, and roof floors at National Housing Company level, 34,000 sqm built-up area',
    scope: [
      'التصميم المعماري والهندسي',
      'تنفيذ أعمال البناء',
      'أعمال التشطيبات',
      'الأعمال الكهربائية والميكانيكية والسباكة',
      'تنسيق الحدائق والأعمال الخارجية'
    ],
    scopeEn: [
      'Architectural & engineering design',
      'Construction execution',
      'Finishing works',
      'Electrical, mechanical & plumbing works',
      'Landscaping & external works'
    ],
    area: '34,000 م²',
    features: ['85 فيلا', 'مستوى NHC', '3 أدوار']
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
    mainImage: '/projects/housing/tamkeen-4/main.jpg',
    images: [
      '/projects/housing/tamkeen-4/1.jpg',
      '/projects/housing/tamkeen-4/2.jpg',
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
    status: 'ongoing',
    mainImage: '/projects/educational/kfupm/main.jpg',
    images: [
      '/projects/educational/kfupm/1.jpg',
      '/projects/educational/kfupm/2.jpg',
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
    id: 'science-college-girls',
    title: 'كلية العلوم - بنات',
    titleEn: 'College of Science - Girls',
    category: 'educational',
    categoryAr: 'مشاريع تعليمية',
    categoryEn: 'Educational Projects',
    client: 'وزارة التعليم',
    clientEn: 'Ministry of Education (MOE)',
    location: 'المملكة العربية السعودية',
    locationEn: 'Saudi Arabia',
    contractValue: '135,000,000',
    year: '2018',
    status: 'completed',
    mainImage: '/projects/educational/science-college/main.jpg',
    images: [
      '/projects/educational/science-college/1.jpg',
      '/projects/educational/science-college/2.jpg',
    ],description: 'إنشاء مبنى كلية العلوم للبنات',
descriptionEn: 'Construction of Girls College of Science building',
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
id: 'pharmacy-college',
title: 'كلية الصيدلة',
titleEn: 'College of Pharmacy',
category: 'educational',
categoryAr: 'مشاريع تعليمية',
categoryEn: 'Educational Projects',
client: 'وزارة التعليم',
clientEn: 'Ministry of Education (MOE)',
location: 'المملكة العربية السعودية',
locationEn: 'Saudi Arabia',
contractValue: '123,971,700',
year: '2018',
status: 'completed',
mainImage: '/projects/educational/pharmacy-college/main.jpg',
images: [
'/projects/educational/pharmacy-college/1.jpg',
'/projects/educational/pharmacy-college/2.jpg',
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
},
{
id: 'medicine-faculty-hail',
title: 'كلية الطب - حائل',
titleEn: 'Faculty of Medicine - Hail',
category: 'educational',
categoryAr: 'مشاريع تعليمية',
categoryEn: 'Educational Projects',
client: 'وزارة التعليم العالي',
clientEn: 'Ministry of Higher Education (MOHE)',
location: 'حائل',
locationEn: 'Hail',
contractValue: '22,336,554',
year: '2019',
status: 'completed',
mainImage: '/projects/educational/medicine-hail/main.jpg',
images: [
'/projects/educational/medicine-hail/1.jpg',
'/projects/educational/medicine-hail/2.jpg',
],
description: 'إنشاء مبنى كلية الطب في مدينة حائل',
descriptionEn: 'Construction of Faculty of Medicine building in Hail city',
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
mainImage: '/projects/educational/boys-schools/main.jpg',
images: [
'/projects/educational/boys-schools/1.jpg',
'/projects/educational/boys-schools/2.jpg',
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
}
];
// 🏢 Commercial Projects - المشاريع التجارية
const commercialProjects: YamasProject[] = [
{
id: 'rima-tower-1',
title: 'برج ريما 1',
titleEn: 'Rima Tower 1',
category: 'commercial',
categoryAr: 'مشاريع تجارية',
categoryEn: 'Commercial Projects',
client: 'شركة رعب للتطوير العقاري',
clientEn: 'Raab Real Estate Development Company',
location: 'الدمام، المنطقة الشرقية',
locationEn: 'Dammam, Eastern Area',
contractValue: '67,000,000',
year: '2025',
status: 'ongoing',
mainImage: '/projects/commercial/rima-tower-1/main.jpg',
images: [
'/projects/commercial/rima-tower-1/1.jpg',
'/projects/commercial/rima-tower-1/2.jpg',
'/projects/commercial/rima-tower-1/3.jpg',
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
category: 'commercial',
categoryAr: 'مشاريع تجارية',
categoryEn: 'Commercial Projects',
client: 'شركة رعب للتطوير العقاري',
clientEn: 'Raab Real Estate Development Company',
location: 'الدمام، المنطقة الشرقية',
locationEn: 'Dammam, Eastern Area',
contractValue: '67,000,000',
year: '2025',
status: 'ongoing',
mainImage: '/projects/commercial/rima-tower-2/main.jpg',
images: [
'/projects/commercial/rima-tower-2/1.jpg',
'/projects/commercial/rima-tower-2/2.jpg',
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
mainImage: '/images/projects/Commercial Projects/GrandMall/WhatsApp Image 2025-12-20 at 11.26.38 AM.jpeg',
images: [
'/images/projects/Commercial Projects/GrandMall/WhatsApp Image 2025-12-20 at 11.26.38 AM.jpeg',
'/public/images/projects/Commercial Projects/GrandMall/WhatsApp Image 2025-12-20 at 11.26.38 AM1.jpeg',
'/projects/commercial/grand-hyper/3.jpg',
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
location: 'الدمام، المنطقة الشرقية',
locationEn: 'Dammam, Eastern Area',
contractValue: '35,000,000',
year: '2024',
status: 'completed',
mainImage: '/projects/commercial/aljomaih/main.jpg',
images: [
'/projects/commercial/aljomaih/1.jpg',
'/projects/commercial/aljomaih/2.jpg',
'/projects/commercial/aljomaih/3.jpg',
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
status: 'ongoing',
mainImage: '/projects/commercial/aljomaih-maintenance/main.jpg',
images: [
'/projects/commercial/aljomaih-maintenance/1.jpg',
'/projects/commercial/aljomaih-maintenance/2.jpg',
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
},
{
id: 'argan-plains',
title: 'مشروع أرجان السهول',
titleEn: 'Argan Plains Project',
category: 'commercial',
categoryAr: 'مشاريع تجارية',
categoryEn: 'Commercial Projects',
client: 'شركة أرجان للمشاريع',
clientEn: 'Argan Projects Company',
location: 'الرياض',
locationEn: 'Riyadh',
contractValue: '35,000,000',
year: '2025',
status: 'ongoing',
mainImage: '/projects/commercial/argan-plains/main.jpg',
images: [
'/projects/commercial/argan-plains/1.jpg',
'/projects/commercial/argan-plains/2.jpg',
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
status: 'ongoing',
mainImage: '/projects/commercial/miahona/main.jpg',
images: [
'/projects/commercial/miahona/1.jpg',
'/projects/commercial/miahona/2.jpg',
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
id: 'abyat-rose',
title: 'أبيات روز - الفرسان 3',
titleEn: 'Abyat Rose - Al-Fursan 3 Project',
category: 'commercial',
categoryAr: 'مشاريع تجارية',
categoryEn: 'Commercial Projects',
client: 'شركة أبياتنا للتطوير العقاري',
clientEn: 'Abyatna Real Estate Development Company (ABYATONA)',
location: 'حي الفرسان 3، الرياض',
locationEn: 'Al-Fursan 3 District, Riyadh',
contractValue: '55,000,125',
year: '2025',
status: 'ongoing',
mainImage: '/projects/commercial/abyat-rose/main.jpg',
images: [
'/projects/commercial/abyat-rose/1.jpg',
'/projects/commercial/abyat-rose/2.jpg',
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
}
];
// 🏛️ Government Projects - المشاريع الحكومية
const governmentProjects: YamasProject[] = [
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
mainImage: '/projects/government/utilities-complex/main.jpg',
images: [
'/projects/government/utilities-complex/1.jpg',
'/projects/government/utilities-complex/2.jpg',
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
},
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
mainImage: '/projects/government/admin-court-jeddah/main.jpg',
images: [
'/projects/government/admin-court-jeddah/1.jpg',
'/projects/government/admin-court-jeddah/2.jpg',
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
mainImage: '/projects/government/maintenance-building/main.jpg',
images: [
'/projects/government/maintenance-building/1.jpg',
'/projects/government/maintenance-building/2.jpg',
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
title: 'مبنى المسجد - جازان',
titleEn: 'Construction of Mosque Building - Jazan',
category: 'government',
categoryAr: 'مشاريع حكومية',
categoryEn: 'Government Projects',
client: 'وزارة التعليم العالي',
clientEn: 'Ministry of Higher Education (MOHE)',
location: 'جازان',
locationEn: 'Jazan',
contractValue: '650,000',
year: '2019',
status: 'completed',
mainImage: '/projects/government/mosque-jazan/main.jpg',
images: [
'/projects/government/mosque-jazan/1.jpg',
'/projects/government/mosque-jazan/2.jpg',
],
description: 'إنشاء مبنى مسجد في جازان',
descriptionEn: 'Construction of mosque building in Jazan',
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
}
];
// 🏭 Industrial/Private Projects - المشاريع الصناعية والخاصة
const industrialProjects: YamasProject[] = [
{
id: 'elbaha-tower',
title: 'برج الباحة',
titleEn: 'Elbaha Tower',
category: 'industrial',
categoryAr: 'مشاريع خاصة',
categoryEn: 'Private Projects',
client: 'قطاع خاص',
clientEn: 'Private Sector',
location: 'الباحة',
locationEn: 'Al-Baha',
contractValue: '85,000,000',
year: '2019',
status: 'completed',
mainImage: '/projects/industrial/elbaha-tower/main.jpg',
images: [
'/projects/industrial/elbaha-tower/1.jpg',
'/projects/industrial/elbaha-tower/2.jpg',
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
mainImage: '/projects/industrial/nsh-factory/main.jpg',
images: [
'/projects/industrial/nsh-factory/1.jpg',
'/projects/industrial/nsh-factory/2.jpg',
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

// 🏗️ تجميع البيانات
export const projectCategories: ProjectCategory[] = [
  {
    id: 'healthcare',
    nameAr: 'مشاريع الرعاية الصحية',
    nameEn: 'Healthcare Projects',
    description: 'مستشفيات ومراكز طبية ومراكز تطعيم متطورة',descriptionEn: 'Advanced hospitals, medical centers and vaccination centers',
icon: '🏥',
color: '#DC2626',
projects: healthcareProjects
},
{
id: 'housing',
nameAr: 'المشاريع السكنية',
nameEn: 'Housing Projects',
description: 'مجمعات سكنية فاخرة ومتكاملة وفلل راقية',
descriptionEn: 'Luxury integrated residential complexes and upscale villas',
icon: '🏘️',
color: '#059669',
projects: housingProjects
},
{
id: 'educational',
nameAr: 'المشاريع التعليمية',
nameEn: 'Educational Projects',
description: 'جامعات وكليات ومدارس ومراكز تدريب',
descriptionEn: 'Universities, colleges, schools and training centers',
icon: '🎓',
color: '#2563EB',
projects: educationalProjects
},
{
id: 'commercial',
nameAr: 'المشاريع التجارية',
nameEn: 'Commercial Projects',
description: 'مولات وأبراج ومراكز أعمال ومكاتب إدارية',
descriptionEn: 'Malls, towers, business centers and administrative offices',
icon: '🏢',
color: '#7C3AED',
projects: commercialProjects
},
{
id: 'government',
nameAr: 'المشاريع الحكومية',
nameEn: 'Government Projects',
description: 'مشاريع حكومية ومرافق عامة ومباني إدارية',
descriptionEn: 'Government projects, public facilities and administrative buildings',
icon: '🏛️',
color: '#F59E0B',
projects: governmentProjects
},
{
id: 'industrial',
nameAr: 'المشاريع الصناعية والخاصة',
nameEn: 'Industrial & Private Projects',
description: 'مصانع ومشاريع صناعية ومشاريع خاصة',
descriptionEn: 'Factories, industrial projects and private developments',
icon: '🏭',
color: '#64748B',
projects: industrialProjects
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
