'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface Message {
  name: string;
  title: string;
  message: string;
  image?: string;
}

interface ManagementMessageProps {
  data: {
    title: string;
    subtitle: string;
    messages: Message[];
  };
  isRTL: boolean;
}

const MessageCard = memo(({ message, index, isRTL }: { message: Message; index: number; isRTL: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative h-full"
    >
      <div className="bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group h-full">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#49A799]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className={`relative z-10 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} h-full min-h-[280px]`}>
          <div className="w-1/3 md:w-40 lg:w-48 flex-shrink-0 relative">
            <div className="h-full relative overflow-hidden">
              {message.image ? (
                <img
                  src={message.image}
                  alt={message.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#49A799]">{message.name.charAt(0)}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm`} />
            </div>
          </div>

          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative">
            <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'}`}>
                <div className="w-10 h-10 rounded-xl bg-[#49A799]/10 flex items-center justify-center">
                    <FaQuoteLeft className="w-4 h-4 text-[#49A799]" />
                </div>
            </div>

            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1">
                {message.name}
              </h3>
              <p className="text-[#49A799] font-bold text-sm md:text-base mb-4">
                {message.title}
              </p>
              
              <div className={`h-1 w-12 bg-[#49A799] rounded-full mb-4 ${isRTL ? 'ml-auto' : 'mr-auto'}`} />

              {/* ✅ تم التعديل هنا: إزالة italic وإضافة bold و text-justify للسمتريه */}
              <p 
                className="text-gray-600 leading-relaxed text-sm md:text-base font-bold"
                style={{ 
                  textAlign: "justify",
                  textAlignLast: isRTL ? "right" : "left"
                }}
              >
                "{message.message}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

MessageCard.displayName = 'MessageCard';

const ManagementMessage = memo(({ data, isRTL }: ManagementMessageProps) => {
  const enhancedMessages = [
    {
      ...data.messages[0],
      name: isRTL ? "أ. معاذ آل كلثم" : "Mr. Mouth Al-Kaltham",
      title: isRTL ? "المدير العام" : "General Manager",
      message: isRTL 
        ? "في شركة يماس العربية للمقاولات، نؤمن بأن التميز لا يتحقق فقط بتنفيذ المشاريع، بل ببناء جسور الثقة وتحقيق الجودة المستدامة. منذ التأسيس، وضعنا نصب أعيننا أن نكون شريكاً موثوقاً في التنمية، ومساهماً فاعلاً في بناء مستقبل عمراني يليق بطموحات وطننا."
        : "At Yamas Al Arabia, we believe excellence isn't just about completing projects, but building trust and achieving sustainable quality. Since our inception, we have aimed to be a reliable partner in development and an active contributor to an urban future that matches our nation's ambitions."
    },
    {
      ...data.messages[1],
      name: isRTL ? "مهندس أحمد النجار" : "Eng. Ahmed Al-Nagar",
      title: isRTL ? "المدير التنفيذي" : "Executive Director",
      message: isRTL 
        ? "التميز في التنفيذ ليس خياراً، بل هو التزام نعيشه كل يوم. نحن نجمع بين الخبرة الهندسية العميقة والتقنيات الحديثة لضمان تسليم مشاريع بأعلى معايير الجودة والسلامة. فريقنا المتخصص يعمل بشغف لتحويل كل تصميم هندسي إلى واقع ملموس يفوق توقعات عملائنا."
        : "Execution excellence is not an option, it's a daily commitment. We combine deep engineering expertise with modern technologies to ensure projects are delivered with the highest quality and safety standards. Our team works passionately to turn every design into a tangible reality."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#49A799 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* رأس القسم */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-[#49A799] text-white rounded-full text-sm font-bold mt-12 mb-8 shadow-md"
          >
            {data.title}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900"
          >
            {data.subtitle}
          </motion.h2>
          
          <div className="flex justify-center mt-6">
            <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-[#49A799] to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {enhancedMessages.map((msg, idx) => (
            <MessageCard key={idx} message={msg} index={idx} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
});

ManagementMessage.displayName = 'ManagementMessage';

export default ManagementMessage;