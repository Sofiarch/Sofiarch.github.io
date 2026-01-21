import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from "/Logo_3.png";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Updated Links to point to specific pages
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'top-4' : 'top-6'
      }`}
    >
      <div
        className={`
          relative flex items-center justify-between px-8 transition-all duration-500 ease-out
          ${scrolled 
            ? 'w-[95%] max-w-5xl h-16 bg-black/80 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl rounded-full' 
            : 'w-full max-w-7xl h-24 bg-transparent border-transparent'
          }
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group z-10">
          <img
            src={Logo}
            alt="LineX"
            className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`relative px-4 py-2 text-base font-medium transition-colors ${
                isActive(item.path) ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {/* Highlight Hover or Active Tab */}
              {(hoveredTab === item.name || isActive(item.path)) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block z-10">
          <Link
            to="/contact"
            className="bg-white text-black hover:bg-blue-500 hover:text-white px-6 py-2.5 rounded-full text-base font-bold transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white z-50 relative"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              className="w-8 h-0.5 bg-current block" 
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-8 h-0.5 bg-current block" 
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
              className="w-8 h-0.5 bg-current block" 
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 w-[90%] max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-3 md:hidden overflow-hidden backdrop-blur-3xl z-40"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block p-3 rounded-xl hover:bg-white/5 transition-colors font-medium text-lg text-center ${
                  isActive(item.path) ? 'text-white bg-white/10' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl bg-blue-600 text-white font-bold text-lg text-center shadow-lg"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}