import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import Aurora from './Aurora';
import CountUp from './CountUp';
import { ThemeContext, LanguageContext } from '../App';
import { translations } from '../translations';

// --- Reusable FadeIn ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px", amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- New Infinite Counter Component ---
const InfiniteCountUp = ({ to, duration }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsCompleted(true), duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, duration]);

  return (
    <span ref={ref} className="inline-flex items-center justify-center">
      {isCompleted ? (
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ∞
        </motion.span>
      ) : (
        <CountUp from={0} to={to} duration={duration} separator="," className="inline-block" />
      )}
    </span>
  );
};

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about;

  // Icons array (Order matches the translations in translations.js)
  const valueIcons = [
    // Integrity
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" /></svg>,
    // Diversity
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    // Passion
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    // Quality
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    // Improvement
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    // Humility
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ];

  // Stats Data
  const statsData = [
    { label: t.stats.projects, value: 50, suffix: "+" },
    { label: t.stats.clients, value: 99.9, suffix: "%" },
    { label: t.stats.experience, value: 2, suffix: "+" },
    { label: t.stats.coffee, value: 100000, isInfinite: true } 
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-40 px-6 min-h-[90vh] overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-black">
        
        {/* Background Layer (Aurora) */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Aurora
            colorStops={["#00c3ff", "#3a8dff", "#5227FF"]} 
            blend={0.5}
            amplitude={1.2}
            speed={0.5}
          />
        </div>

        {/* Content Layer */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
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

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <FadeIn delay={0.1} className="h-full">
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-10 rounded-2xl h-full hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-6">{t.mission.title}</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  <p>{t.mission.desc1}</p>
                  <p>{t.mission.desc2}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="h-full">
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-10 rounded-2xl h-full hover:border-purple-500/30 transition-colors shadow-sm dark:shadow-none">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-6">{t.vision.title}</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  <p>{t.vision.desc1}</p>
                  <p>{t.vision.desc2}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display mb-4">{t.values.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{t.values.subtitle}</p>
              <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6" />
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Map over the translations array, using index to grab the corresponding icon */}
              {t.values.items.map((val, i) => (
                <FadeIn key={i} delay={i * 0.1} className="h-full">
                  <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:bg-gray-100 dark:hover:bg-white/5 transition-all group shadow-sm dark:shadow-none">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {valueIcons[i]}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">{val.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-white/10">
             {statsData.map((stat, i) => (
               <FadeIn 
                 key={i}
                 delay={i * 0.1}
                 className="text-center p-8 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors mt-8 shadow-sm dark:shadow-none"
               >
                  <div className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-500 font-display mb-2 flex justify-center items-center gap-1">
                    {stat.isInfinite ? (
                      <InfiniteCountUp to={stat.value} duration={5} />
                    ) : stat.isStatic ? (
                      <span>{stat.value}</span>
                    ) : (
                      <>
                        <CountUp 
                          from={0} 
                          to={stat.value} 
                          separator="," 
                          direction="up" 
                          duration={2} 
                          className="inline-block"
                        />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
               </FadeIn>
             ))}
          </div>

        </div>
      </section>
    </>
  );
}