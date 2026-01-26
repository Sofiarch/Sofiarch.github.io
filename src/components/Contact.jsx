import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Squares from './Squares';
import { ThemeContext, LanguageContext } from '../App';
import { translations } from '../translations';

// --- Reusable FadeIn ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  // Get Contact translations
  const t = translations[language].contact;

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-black transition-colors duration-700">
        
        {/* Background Layer (Squares) */}
        <div className="absolute inset-0 z-0">
          <Squares 
            speed={0.1} 
            squareSize={80} 
            direction="diagonal" 
            borderColor={theme === 'dark' ? '#333' : '#e5e5e5'}
            hoverFillColor={theme === 'dark' ? '#222' : '#f3f4f6'} 
          />
        </div>

        {/* Content Layer */}
        <div className="max-w-4xl mx-auto text-center relative z-10 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-2xl"
          >
            {t.title}
          </motion.h1>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-blue-200/80 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
              {t.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- DIRECT CONTACT SECTION --- */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-black relative z-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-700">
        <div className="max-w-4xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Explanation */}
            <FadeIn delay={0.1} className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-4">
                {t.getInTouch}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {t.desc}
              </p>
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
            </FadeIn>

            {/* Right: Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <FadeIn delay={0.2}>
                <a href="mailto:linex.website@gmail.com" className="flex items-center gap-4 p-6 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group shadow-sm dark:shadow-none">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.emailLabel}</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">linex.website@gmail.com</div>
                  </div>
                </a>
              </FadeIn>

              {/* Phone Card */}
              <FadeIn delay={0.3}>
                <a href="tel:+9647744995655" className="flex items-center gap-4 p-6 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group shadow-sm dark:shadow-none">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{t.callLabel}</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">07744995655</div>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}