import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-najaf-gold" : "text-gray-300 hover:text-najaf-gold";

  return (
    <nav className="bg-night-card shadow-lg border-b border-slate-800 sticky top-0 z-50 font-cairo">
      <div className="container mx-auto px-4 py-4">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          
          {/* Logo - UPDATED */}
          <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span>📚</span>
            <span>مكتبة <span className="text-najaf-gold">الرافدين</span></span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 space-x-reverse font-medium items-center">
            <li><Link to="/" className={`${isActive('/')} transition`}>الرئيسية</Link></li>
            <li><Link to="/books" className={`${isActive('/books')} transition`}>تصفح الكتب</Link></li>
            <li><Link to="/about" className={`${isActive('/about')} transition`}>من نحن</Link></li>
            <li><Link to="/contact" className={`${isActive('/contact')} transition`}>اتصل بنا</Link></li>
          </ul>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center gap-4">
            
            <Link to="/checkout">
              <button className="bg-najaf-gold text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition font-bold shadow-md flex items-center gap-2 text-sm md:text-base">
                <span className="hidden md:inline">سلة المشتريات</span>
                <span className="md:hidden">🛒</span>
                {cartItems.length > 0 && (
                  <span className="bg-white text-najaf-gold text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-4 pt-6 pb-2 border-t border-slate-700 mt-4 text-center">
            <li><Link to="/" onClick={() => setIsOpen(false)} className={`block py-2 ${isActive('/')}`}>الرئيسية</Link></li>
            <li><Link to="/books" onClick={() => setIsOpen(false)} className={`block py-2 ${isActive('/books')}`}>تصفح الكتب</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className={`block py-2 ${isActive('/about')}`}>من نحن</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className={`block py-2 ${isActive('/contact')}`}>اتصل بنا</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;