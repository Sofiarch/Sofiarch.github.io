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

// --- Theme Context ---
export const ThemeContext = createContext();

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Apply theme class to HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Updated Classes:
          1. duration-700: Slower, smoother fade (0.7s).
          2. [&_*]:transition-... : This acts as a "Global CSS" rule. 
             It tells EVERY child element to transition its colors/borders smoothly.
      */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-all duration-700 [&_*]:transition-[background-color,border-color,color,fill,stroke,opacity,filter] [&_*]:duration-700 [&_*]:ease-in-out">
        <ScrollToTop />
        <NavBar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;