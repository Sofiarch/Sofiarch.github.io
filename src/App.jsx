import React, { useEffect, useState, createContext, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component Imports (Static - Core Layout)
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// 1. EAGER LOAD (Critical Path)
// Home loads instantly so the user sees content immediately (0s TBT impact)
import Home from './components/Home';

// 2. LAZY LOAD (Non-Critical)
// These download in the background. We use ".jsx" to ensure Vite finds them.
const Services = lazy(() => import('./components/Services.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const StartProject = lazy(() => import('./components/StartProject.jsx'));

// --- Contexts ---
export const ThemeContext = createContext();
export const LanguageContext = createContext();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Tiny invisible loader
const PageLoader = () => <div className="min-h-screen bg-white dark:bg-black" />;

function App() {
  const location = useLocation();
  
  // Theme State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Language State
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  // Handle Theme Change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle Language Change
  useEffect(() => {
    const root = window.document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr'; 
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-700">
          <ScrollToTop />
          <NavBar />
          
          <main className="flex-grow">
            {/* Suspense handles the loading of the lazy pages */}
            <Suspense fallback={<PageLoader />}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  
                  {/* Home is instant */}
                  <Route 
                    path="/" 
                    element={
                      <PageTransition>
                        <Home />
                      </PageTransition>
                    } 
                  />

                  {/* Other pages load on demand */}
                  <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  <Route path="/start" element={<PageTransition><StartProject /></PageTransition>} />
                  
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;