import React, { useContext, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext, LanguageContext } from '../App';
import { translations } from '../translations';
import emailjs from '@emailjs/browser';

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

export default function StartProject() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  // States for form handling
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  // Ref to capture form data for EmailJS
  const formRef = useRef();

  // Get translations
  const t = translations[language].start;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Pulling IDs from environment variables instead of hardcoding
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setSubmitted(true);
        // ... rest of your logic
        const formSection = document.getElementById('form-section');
        if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send message. Please try again or contact linex.website@gmail.com directly.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[60vh] overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-black transition-colors duration-700">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-white dark:bg-black" />

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

      {/* --- FORM SECTION --- */}
      <section id="form-section" className="py-20 px-6 bg-gray-50 dark:bg-black relative z-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-700">
        <div className="max-w-3xl mx-auto">
          
          <FadeIn delay={0.2} className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  ref={formRef} // Ref added here
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8 relative z-10"
                >
                  
                  {/* Row 1: Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">
                      {t.form.name}
                    </label>
                    <input 
                      name="user_name" // Name attribute for EmailJS
                      required 
                      type="text" 
                      placeholder={t.form.placeholders.name} 
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                    />
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">
                        {t.form.email}
                      </label>
                      <input 
                        name="user_email" // Name attribute for EmailJS
                        required 
                        type="email" 
                        placeholder={t.form.placeholders.email} 
                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">
                        {t.form.phone} <span className="text-gray-400 dark:text-gray-600 font-normal">{t.form.optional}</span>
                      </label>
                      <input 
                        name="user_phone" // Name attribute for EmailJS
                        type="tel" 
                        placeholder="+964 770..." 
                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                      />
                    </div>
                  </div>

                  {/* Row 3: Company */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">
                      {t.form.company} <span className="text-gray-400 dark:text-gray-600 font-normal">{t.form.optional}</span>
                    </label>
                    <input 
                      name="user_company" // Name attribute for EmailJS
                      type="text" 
                      placeholder={t.form.placeholders.company} 
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                    />
                  </div>

                  {/* Row 4: Details */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">
                      {t.form.details}
                    </label>
                    <textarea 
                      name="message" // Name attribute for EmailJS
                      required 
                      rows="5" 
                      placeholder={t.form.placeholders.details} 
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSending}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-blue-600/30 dark:hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? "Sending Inquiry..." : t.form.submit}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-12 relative z-10"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-4">
                    {t.success.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                    {t.success.desc}
                  </p>
                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg text-blue-800 dark:text-blue-200 text-sm font-medium">
                    {t.success.note}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm underline underline-offset-4"
                  >
                    {t.success.reset}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

          </FadeIn>

        </div>
      </section>
    </>
  );
}