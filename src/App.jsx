import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BooksPage from './pages/BooksPage';
import About from './pages/About'; // <--- IMPORT THIS
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // ... (keep your existing state and useEffect logic here exactly as before) ...
  // I am abbreviating the logic for clarity, don't delete your logic!
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
     // ... your existing loader logic ...
     if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0,0);
      setTimeout(() => setFadingOut(true), 2800);
      setTimeout(() => setLoading(false), 3300);
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadingOut} />}

      <div className={`transition-opacity duration-1000 ease-out ${loading ? 'display-none' : 'block opacity-100'}`}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/about" element={<About />} /> {/* <--- ADD THIS LINE */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;