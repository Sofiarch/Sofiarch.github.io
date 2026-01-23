import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../App';

const legalData = {
  en: {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4">
          <p><strong>Last Updated: January 24, 2026</strong></p>
          <p>At LineX, accessible from linex.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by LineX and how we use it.</p>
          <h4 className="text-lg font-bold mt-4">Information We Collect</h4>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact information (Name, Email, Phone number)</li>
            <li>Project details and requirements</li>
            <li>Communication records</li>
          </ul>
          <h4 className="text-lg font-bold mt-4">How We Use Your Information</h4>
          <p>We use the information we collect in various ways, including to provide, operate, and maintain our website, improve, personalize, and expand our website, and understand and analyze how you use our website.</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <div className="space-y-4">
          <p><strong>Last Updated: January 24, 2026</strong></p>
          <h4 className="text-lg font-bold mt-4">1. Agreement to Terms</h4>
          <p>By accessing our website, accessible from linex.com, you agree to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>
          <h4 className="text-lg font-bold mt-4">2. Intellectual Property Rights</h4>
          <p>Other than the content you own, under these Terms, LineX and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
          <h4 className="text-lg font-bold mt-4">3. Restrictions</h4>
          <p>You are specifically restricted from publishing any Website material in any other media, selling, sublicensing and/or otherwise commercializing any Website material, or using this Website in any way that is or may be damaging to this Website.</p>
        </div>
      )
    },
    cookie: {
      title: "Cookie Policy",
      content: (
        <div className="space-y-4">
          <p><strong>Last Updated: January 24, 2026</strong></p>
          <p>This is the Cookie Policy for LineX, accessible from linex.com.</p>
          <h4 className="text-lg font-bold mt-4">What Are Cookies</h4>
          <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.</p>
          <h4 className="text-lg font-bold mt-4">How We Use Cookies</h4>
          <p>We use cookies for a variety of reasons. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Site preferences cookies:</strong> To remember your preferences we need to set cookies.</li>
            <li><strong>Analytics cookies:</strong> We use third party analytics to track and measure usage of this site.</li>
          </ul>
        </div>
      )
    }
  },
  ar: {
    privacy: {
      title: "سياسة الخصوصية",
      content: (
        <div className="space-y-4">
          <p><strong>آخر تحديث: 24 يناير 2026</strong></p>
          <p>في LineX، المتاح عبر linex.com، تعتبر خصوصية زوارنا من أهم أولوياتنا. تحتوي وثيقة سياسة الخصوصية هذه على أنواع المعلومات التي تجمعها وتسجلها LineX وكيفية استخدامنا لها.</p>
          <h4 className="text-lg font-bold mt-4">المعلومات التي نجمعها</h4>
          <p>سيتم توضيح المعلومات الشخصية التي يُطلب منك تقديمها، وأسباب طلبها، في الوقت الذي نطلب فيه منك تقديم معلوماتك الشخصية.</p>
          <ul className="list-disc pr-5 space-y-1">
            <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
            <li>تفاصيل المشروع ومتطلباته</li>
            <li>سجلات التواصل</li>
          </ul>
          <h4 className="text-lg font-bold mt-4">كيف نستخدم معلوماتك</h4>
          <p>نستخدم المعلومات التي نجمعها بطرق مختلفة، بما في ذلك توفير وتشغيل وصيانة موقعنا، وتحسين وتخصيص وتوسيع موقعنا، وفهم وتحليل كيفية استخدامك لموقعنا.</p>
        </div>
      )
    },
    terms: {
      title: "شروط الخدمة",
      content: (
        <div className="space-y-4">
          <p><strong>آخر تحديث: 24 يناير 2026</strong></p>
          <h4 className="text-lg font-bold mt-4">1. الموافقة على الشروط</h4>
          <p>عن طريق الدخول إلى موقعنا، المتاح عبر linex.com، فإنك توافق على الالتزام بشروط وأحكام استخدام الموقع وتوافق على أنك مسؤول عن الامتثال لأي قوانين محلية سارية.</p>
          <h4 className="text-lg font-bold mt-4">2. حقوق الملكية الفكرية</h4>
          <p>باستثناء المحتوى الذي تمتلكه، بموجب هذه الشروط، تمتلك LineX و/أو المرخصون لها جميع حقوق الملكية الفكرية والمواد الواردة في هذا الموقع.</p>
          <h4 className="text-lg font-bold mt-4">3. القيود</h4>
          <p>أنت مقيد بشكل خاص عن كل ما يلي: نشر أي مواد من الموقع في أي وسيلة إعلام أخرى؛ بيع أو ترخيص أو تسويق أي مواد من الموقع؛ استخدام هذا الموقع بأي طريقة تضر أو قد تضر بهذا الموقع.</p>
        </div>
      )
    },
    cookie: {
      title: "سياسة ملفات تعريف الارتباط",
      content: (
        <div className="space-y-4">
          <p><strong>آخر تحديث: 24 يناير 2026</strong></p>
          <p>هذه هي سياسة ملفات تعريف الارتباط لـ LineX، المتاحة عبر linex.com.</p>
          <h4 className="text-lg font-bold mt-4">ما هي ملفات تعريف الارتباط</h4>
          <p>كما هو متبع في جميع المواقع الاحترافية تقريباً، يستخدم هذا الموقع ملفات تعريف الارتباط (Cookies)، وهي ملفات صغيرة يتم تنزيلها على جهاز الكمبيوتر الخاص بك لتحسين تجربتك.</p>
          <h4 className="text-lg font-bold mt-4">كيف نستخدم ملفات تعريف الارتباط</h4>
          <p>نحن نستخدم ملفات تعريف الارتباط لأسباب متنوعة. للأسف في معظم الحالات لا توجد خيارات قياسية لتعطيل ملفات تعريف الارتباط دون تعطيل الوظائف والميزات التي تضيفها لهذا الموقع بالكامل.</p>
          <ul className="list-disc pr-5 space-y-1">
            <li><strong>ملفات تعريف ارتباط تفضيلات الموقع:</strong> لتذكر تفضيلاتك نحتاج إلى تعيين ملفات تعريف الارتباط.</li>
            <li><strong>ملفات تعريف ارتباط التحليلات:</strong> نستخدم تحليلات طرف ثالث لتتبع وقياس استخدام هذا الموقع.</li>
          </ul>
        </div>
      )
    }
  }
};

export default function LegalModal({ initialTab, onClose }) {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(initialTab || 'privacy');
  
  // Select content based on current language
  const currentContent = legalData[language];

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          // Force layout direction based on language
          dir={language === 'ar' ? 'rtl' : 'ltr'}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header & Tabs */}
          <div className="border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display">
                {language === 'ar' ? 'المعلومات القانونية' : 'Legal Information'}
              </h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex px-4 gap-1 overflow-x-auto no-scrollbar">
              {Object.keys(currentContent).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === key
                      ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {currentContent[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-gray-600 dark:text-gray-300"
              >
                {currentContent[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Action */}
          <div className="p-4 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              {language === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}