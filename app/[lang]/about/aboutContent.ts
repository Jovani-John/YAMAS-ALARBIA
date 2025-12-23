// content/aboutContent.ts
import {
  HiCheckCircle,
  HiOfficeBuilding,
  HiUserGroup,
  HiGlobe,
  HiLightBulb,
  HiShieldCheck,
  HiTrendingUp,
  HiHeart,
  HiAcademicCap,
  HiClock,
  HiDocumentText,
  HiBadgeCheck,
  HiChartBar,
  HiGlobeAlt,
  HiHome,
  HiOfficeBuilding as HiBuildingOffice,
} from 'react-icons/hi';

export const aboutContent = {
  ar: {
    hero: {
      badge: '✦ من نحن',
      title: 'نحن يماس نبني المستقبل ',
      highlight: 'بخبرة وثقة',
      subtitle: 'رواد في مجال الإنشاءات والمقاولات منذ عام 2009',
      cta: ' ثق بنا',
    },
    management: {
      title: '✦ كلمة الإدارة',
      subtitle: 'رؤية قيادية نحو التميز',
      messages: [
        {
          name: 'معاذ',
          title: 'المدير العام',
          message: 'في يماس العربية للمقاولات، نؤمن بأن كل مشروع هو بصمة نتركها للأجيال القادمة. نحن لا نبني مبانٍ فحسب، بل نبني أحلام وطموحات عملائنا. التزامنا بالجودة والابتكار هو ما يميزنا، ونسعى دائماً لتقديم حلول إنشائية متكاملة تتجاوز التوقعات.',
          image: '',
        },
        {
          name: 'مهندس أحمد',
          title: 'المدير التنفيذي',
          message: 'التميز في التنفيذ ليس خياراً، بل هو التزام نعيشه كل يوم. نحن نجمع بين الخبرة الهندسية العميقة والتقنيات الحديثة لضمان تسليم مشاريع بأعلى معايير الجودة والسلامة. فريقنا المتخصص يعمل بشغف لتحويل كل تصميم إلى واقع ملموس يفوق التوقعات.',
          image: '',
        },
      ],
    },
    stats: [
      { icon: HiOfficeBuilding, number: '200+', label: 'مشروع منجز' },
      { icon: HiUserGroup, number: '15+', label: 'سنة خبرة' },
      { icon: HiGlobe, number: '4', label: 'فروع دولية' },
      { icon: HiCheckCircle, number: '100%', label: 'رضا العملاء' },
    ],
    story: {
      title: 'قصتنا',
      subtitle: 'رحلة من الطموح إلى التميز',
      description:
        'بدأت يماس العربية للمقاولات رحلتها في عام 2009 برؤية واضحة: أن نكون الشريك الأكثر موثوقية في تحويل الأحلام إلى واقع ملموس. على مدار أكثر من 15 عامًا من العمل الدؤوب، نجحنا في بناء سمعة قوية تقوم على الجودة والابتكار والالتزام.',
      description2:
        'اليوم، نفخر بأننا أحد أبرز الشركات الرائدة في مجال المقاولات والإنشاءات، مع محفظة مشاريع متنوعة تشمل المشاريع السكنية والتجارية والصناعية. نحن نؤمن بأن كل مشروع هو فرصة لتقديم قيمة استثنائية لعملائنا وللمجتمع.',
    },
    values: {
      title: 'قيمنا الجوهرية',
      subtitle: 'المبادئ التي توجه عملنا',
      items: [
        {
          icon: HiShieldCheck,
          title: 'الجودة والتميز',
          description:
            'نلتزم بأعلى معايير الجودة في كل مشروع، من التخطيط إلى التسليم النهائي',
        },
        {
          icon: HiLightBulb,
          title: 'الابتكار والتطوير',
          description:
            'نستخدم أحدث التقنيات والأساليب لتقديم حلول مبتكرة ومستدامة',
        },
        {
          icon: HiHeart,
          title: 'العملاء أولاً',
          description:
            'رضا عملائنا هو هدفنا الأسمى، ونسعى دائمًا لتجاوز توقعاتهم',
        },
        {
          icon: HiTrendingUp,
          title: 'التحسين المستمر',
          description:
            'نطور مهاراتنا وعملياتنا باستمرار لنبقى في طليعة الصناعة',
        },
        {
          icon: HiAcademicCap,
          title: 'الخبرة والاحترافية',
          description:
            'فريق من المهندسين والفنيين الخبراء يضمن تنفيذ المشاريع بأعلى كفاءة',
        },
        {
          icon: HiClock,
          title: 'الالتزام بالمواعيد',
          description:
            'نحترم الجداول الزمنية ونضمن تسليم المشاريع في الوقت المحدد',
        },
      ],
    },
    timeline: {
      title: 'مسيرة النجاح',
      subtitle: 'أبرز المحطات في رحلتنا',
      items: [
        {
          year: '2009',
          title: 'التأسيس',
          description:
            'بداية رحلتنا بفريق صغير ورؤية كبيرة لتقديم خدمات مقاولات متميزة',
        },
        {
          year: '2015',
          title: 'التوسع الإقليمي',
          description: 'افتتاح فروع جديدة وتنفيذ مشاريع ضخمة في عدة دول',
        },
        {
          year: '2020',
          title: 'شهادات الجودة',
          description:
            'الحصول على شهادات ISO العالمية وتطبيق أعلى معايير الجودة',
        },
        {
          year: '2024',
          title: 'الريادة والابتكار',
          description:
            'أصبحنا من أبرز الشركات الرائدة مع أكثر من 200 مشروع ناجح',
        },
      ],
    },
    why: {
      title: 'لماذا يماس؟',
      subtitle: 'ما يميزنا عن الآخرين',
      features: [
        'خبرة تمتد لأكثر من 15 عامًا في السوق',
        'فريق هندسي متخصص ومدرب على أعلى مستوى',
        'استخدام أحدث التقنيات والمعدات',
        'التزام صارم بمعايير السلامة والجودة',
        'أسعار تنافسية وشفافية في التعاملات',
        'ضمانات طويلة الأمد على جميع الأعمال',
        'دعم فني مستمر بعد التسليم',
        'محفظة مشاريع متنوعة وناجحة',
      ],
    },
    achievements: {
      title: 'إنجازاتنا',
      subtitle: 'أرقام تثبت تميزنا',
      items: [
        {
          icon: HiBuildingOffice,
          title: '٥٠٠+ مليون ريال',
          description: 'قيمة المشاريع المنفذة في 2024',
        },
        {
          icon: HiHome,
          title: '٨٠٠+ وحدة سكنية',
          description: 'وحدات سكنية تم بناؤها وتسليمها',
        },
        {
          icon: HiChartBar,
          title: '٩٨٪ نسبة إنجاز',
          description: 'متوسط نسبة الإنجاز في المشاريع',
        },
        {
          icon: HiGlobeAlt,
          title: '١٠+ محافظ',
          description: 'تغطية مشاريعنا في جميع أنحاء المملكة',
        },
      ],
    },
    certificates: {
      title: 'شهاداتنا المعتمدة',
      subtitle: 'ضمان الجودة والامتثال الدولي',
      description: 'نفخر بحصولنا على شهادات ISO الدولية التي تؤكد التزامنا بأعلى المعايير العالمية في الجودة والسلامة والاستدامة.',
      items: [
        {
          id: 'iso9001',
          name: 'شهادة نظام إدارة الجودة',
          standard: 'ISO 9001:2015',
          year: '2024',
          description: 'تؤكد التزامنا بأعلى معايير الجودة في جميع عمليات الإنشاء والإدارة',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_1/view',
          icon: HiBadgeCheck,
        },
        {
          id: 'iso14001',
          name: 'شهادة نظام الإدارة البيئية',
          standard: 'ISO 14001:2015',
          year: '2024',
          description: 'التزامنا بالممارسات البيئية المستدامة وحماية البيئة في جميع المشاريع',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view',
          icon: HiGlobe,
        },
        {
          id: 'iso45001',
          name: 'شهادة الصحة والسلامة المهنية',
          standard: 'ISO 45001:2018',
          year: '2024',
          description: 'ضمان بيئة عمل آمنة وصحية لجميع الموظفين والمتعاملين',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/view',
          icon: HiShieldCheck,
        },
        {
          id: 'iso37001',
          name: 'شهادة نظام مكافحة الفساد',
          standard: 'ISO 37001:2016',
          year: '2024',
          description: 'التزامنا بممارسات الأعمال النزيهة والشفافية الكاملة',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_4/view',
          icon: HiDocumentText,
        },
        {
          id: 'iso50001',
          name: 'شهادة إدارة الطاقة',
          standard: 'ISO 50001:2018',
          year: '2024',
          description: 'تحسين كفاءة الطاقة وتقليل البصمة الكربونية في مشاريعنا',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_5/view',
          icon: HiLightBulb,
        },
        {
          id: 'saso',
          name: 'شهادة الهيئة السعودية',
          standard: 'SASO Certified',
          year: '2024',
          description: 'اعتماد من الهيئة السعودية للمواصفات والمقاييس والجودة',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_6/view',
          icon: HiCheckCircle,
        },
      ],
      certificationStats: [
        { number: '6', label: 'شهادات دولية' },
        { number: '100%', label: 'امتثال للمعايير' },
        { number: 'سنوي', label: 'تجديد مستمر' },
        { number: '24/7', label: 'مراقبة الجودة' },
      ],
      contactInfo: {
        title: 'لمزيد من المعلومات عن شهاداتنا',
        department: 'إدارة الجودة والامتثال',
        email: 'quality@yamas.com.sa',
        phone: '+966 50 002 9933 (تحويلة 203)',
        note: 'نوفر نسخ معتمدة من جميع الشهادات عند الطلب',
      },
    },
    cta: {
      title: 'هل أنت مستعد للبدء؟',
      subtitle: 'دعنا نحول أفكارك إلى واقع',
      button: 'ابدأ مشروعك الآن',
    },
  },
  en: {
    hero: {
      badge: '✦ About Us',
      title: 'We Are Yamas Building the Future',
      highlight: 'with Experience and Trust',
      subtitle: 'Pioneers in Construction and Contracting since 2009',
      cta: 'Trust us',
    },
    management: {
      title: '✦ Management Message',
      subtitle: 'Leadership Vision Towards Excellence',
      messages: [
        {
          name: 'Moaz',
          title: 'General Manager',
          message: 'At Yamas Al Arabia Construction, we believe that every project is a legacy we leave for future generations. We don\'t just build structures; we build our clients\' dreams and aspirations. Our commitment to quality and innovation is what sets us apart, and we always strive to deliver comprehensive construction solutions that exceed expectations.',
          image: '',
        },
        {
          name: 'Eng. Ahmed',
          title: 'Executive Director',
          message: 'Excellence in execution is not an option, but a commitment we live every day. We combine deep engineering expertise with modern technologies to ensure the delivery of projects with the highest standards of quality and safety. Our specialized team works passionately to transform every design into a tangible reality that surpasses expectations.',
          image: '',
        },
      ],
    },
    stats: [
      { icon: HiOfficeBuilding, number: '200+', label: 'Completed Projects' },
      { icon: HiUserGroup, number: '15+', label: 'Years Experience' },
      { icon: HiGlobe, number: '4', label: 'International Branches' },
      { icon: HiCheckCircle, number: '100%', label: 'Client Satisfaction' },
    ],
    story: {
      title: 'Our Story',
      subtitle: 'A Journey from Ambition to Excellence',
      description:
        'Yamas Al Arabia Construction began its journey in 2009 with a clear vision: to be the most reliable partner in transforming dreams into tangible reality. Over more than 15 years of dedicated work, we have successfully built a strong reputation based on quality, innovation, and commitment.',
      description2:
        'Today, we are proud to be one of the leading companies in contracting and construction, with a diverse project portfolio including residential, commercial, and industrial projects. We believe that every project is an opportunity to deliver exceptional value to our clients and the community.',
    },
    values: {
      title: 'Our Core Values',
      subtitle: 'The Principles That Guide Our Work',
      items: [
        {
          icon: HiShieldCheck,
          title: 'Quality & Excellence',
          description:
            'We commit to the highest quality standards in every project, from planning to final delivery',
        },
        {
          icon: HiLightBulb,
          title: 'Innovation & Development',
          description:
            'We use the latest technologies and methods to provide innovative and sustainable solutions',
        },
        {
          icon: HiHeart,
          title: 'Clients First',
          description:
            'Client satisfaction is our ultimate goal, and we always strive to exceed their expectations',
        },
        {
          icon: HiTrendingUp,
          title: 'Continuous Improvement',
          description:
            'We continuously develop our skills and processes to stay at the forefront of the industry',
        },
        {
          icon: HiAcademicCap,
          title: 'Expertise & Professionalism',
          description:
            'A team of expert engineers and technicians ensures projects are executed with the highest efficiency',
        },
        {
          icon: HiClock,
          title: 'Timely Delivery',
          description:
            'We respect schedules and ensure projects are delivered on time',
        },
      ],
    },
    timeline: {
      title: 'Success Journey',
      subtitle: 'Key Milestones in Our Path',
      items: [
        {
          year: '2009',
          title: 'Foundation',
          description:
            'The beginning of our journey with a small team and a big vision to provide distinguished contracting services',
        },
        {
          year: '2015',
          title: 'Regional Expansion',
          description:
            'Opening new branches and implementing major projects in several countries',
        },
        {
          year: '2020',
          title: 'Quality Certifications',
          description:
            'Obtaining international ISO certifications and implementing the highest quality standards',
        },
        {
          year: '2024',
          title: 'Leadership & Innovation',
          description:
            'Became one of the leading companies with more than 200 successful projects',
        },
      ],
    },
    why: {
      title: 'Why Yamas?',
      subtitle: 'What Sets Us Apart',
      features: [
        'Over 15 years of market experience',
        'Specialized engineering team trained to the highest level',
        'Use of latest technologies and equipment',
        'Strict commitment to safety and quality standards',
        'Competitive prices and transparency in dealings',
        'Long-term warranties on all work',
        'Continuous technical support after delivery',
        'Diverse and successful project portfolio',
      ],
    },
    achievements: {
      title: 'Our Achievements',
      subtitle: 'Numbers That Prove Our Excellence',
      items: [
        {
          icon: HiBuildingOffice,
          title: '500+ Million SAR',
          description: 'Value of projects executed in 2024',
        },
        {
          icon: HiHome,
          title: '800+ Residential Units',
          description: 'Residential units built and delivered',
        },
        {
          icon: HiChartBar,
          title: '98% Completion Rate',
          description: 'Average project completion rate',
        },
        {
          icon: HiGlobeAlt,
          title: '10+ Governorates',
          description: 'Coverage of our projects across the Kingdom',
        },
      ],
    },
    certificates: {
      title: 'Our Certifications',
      subtitle: 'International Quality and Compliance Assurance',
      description: 'We are proud to have obtained international ISO certifications that confirm our commitment to the highest global standards in quality, safety, and sustainability.',
      items: [
        {
          id: 'iso9001',
          name: 'Quality Management System Certificate',
          standard: 'ISO 9001:2015',
          year: '2024',
          description: 'Confirms our commitment to the highest quality standards in all construction and management operations',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_1/view',
          icon: HiBadgeCheck,
        },
        {
          id: 'iso14001',
          name: 'Environmental Management System Certificate',
          standard: 'ISO 14001:2015',
          year: '2024',
          description: 'Our commitment to sustainable environmental practices and environmental protection in all projects',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view',
          icon: HiGlobe,
        },
        {
          id: 'iso45001',
          name: 'Occupational Health and Safety Certificate',
          standard: 'ISO 45001:2018',
          year: '2024',
          description: 'Ensuring a safe and healthy work environment for all employees and stakeholders',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/view',
          icon: HiShieldCheck,
        },
        {
          id: 'iso37001',
          name: 'Anti-Bribery Management System Certificate',
          standard: 'ISO 37001:2016',
          year: '2024',
          description: 'Our commitment to honest business practices and full transparency',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_4/view',
          icon: HiDocumentText,
        },
        {
          id: 'iso50001',
          name: 'Energy Management Certificate',
          standard: 'ISO 50001:2018',
          year: '2024',
          description: 'Improving energy efficiency and reducing carbon footprint in our projects',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_5/view',
          icon: HiLightBulb,
        },
        {
          id: 'saso',
          name: 'Saudi Arabian Standards Certificate',
          standard: 'SASO Certified',
          year: '2024',
          description: 'Accreditation from the Saudi Standards, Metrology and Quality Organization',
          driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID_6/view',
          icon: HiCheckCircle,
        },
      ],
      certificationStats: [
        { number: '6', label: 'International Certificates' },
        { number: '100%', label: 'Compliance with Standards' },
        { number: 'Annual', label: 'Continuous Renewal' },
        { number: '24/7', label: 'Quality Monitoring' },
      ],
      contactInfo: {
        title: 'For More Information About Our Certifications',
        department: 'Quality and Compliance Department',
        email: 'quality@yamas.com.sa',
        phone: '+966 50 002 9933 (Ext. 203)',
        note: 'We provide certified copies of all certificates upon request',
      },
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: "Let's Turn Your Ideas into Reality",
      button: 'Start Your Project Now',
    },
  },
};