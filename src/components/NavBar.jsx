import { useState, useEffect } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={
        'fixed w-full z-30 top-7 left-0 transition-colors duration-300 ' +
        (scrolled ? 'bg-white/80 backdrop-blur shadow-md' : 'bg-transparent')
      }
    >
      <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/src/assets/logo-transparent.png"
            alt="Company"
            className="h-30 w-40 object-contain transform transition-transform duration-200 hover:scale-110 "
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-600" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-600" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-600" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-600" href="#">
              Contact
            </a>
          </li>
          <li>
            <button
              
              className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:shadow-lg transform transition duration-200 hover:-translate-y-0.5 active:scale-90"
            >
              <a href='#'>Get Started</a>
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (animated) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-4 pb-4 space-y-1 bg-white">
          <a className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 transition" href="#">
            Home
          </a>
          <a className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 transition" href="#">
            About
          </a>
          <a className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 transition" href="#">
            Services
          </a>
          <a className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 transition" href="#">
            Contact
          </a>
          <a className="block mt-2 px-3 py-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition" href="#">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}