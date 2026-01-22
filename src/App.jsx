import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import StartProject from './components/StartProject'; 
import PageTransition from './components/PageTransition'; // <--- RESTORED IMPORT

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
        <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-700 [&_*]:transition-[background-color,border-color,color,fill,stroke] [&_*]:duration-700 [&_*]:ease-in-out">
          <ScrollToTop />
          <NavBar />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* RESTORED TRANSITION WRAPPERS */}
                <Route 
                  path="/" 
                  element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/services" 
                  element={
                    <PageTransition>
                      <Services />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/about" 
                  element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/start" 
                  element={
                    <PageTransition>
                      <StartProject />
                    </PageTransition>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </main>
          
          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;