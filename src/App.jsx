import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BooksPage from './pages/BooksPage';
import About from './pages/About';
import Contact from './pages/Contact'; // Import Contact
import CheckoutPage from './pages/CheckoutPage';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext'; 

function App() {
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);
    const fadeTimer = setTimeout(() => setFadingOut(true), 2800);
    const removeTimer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <CartProvider>
      {loading && <Loader fadeOut={fadingOut} />}

      <div className={`transition-opacity duration-1000 ease-out ${loading ? 'display-none' : 'block opacity-100'}`}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* New Route */}
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;