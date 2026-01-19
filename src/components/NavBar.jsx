import { useState, useEffect } from 'react';
import Logo from "../assets/logo-transparent.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={
        'fixed w-full z-50 top-0 left-0 transition-all duration-300 border-b ' +
        (scrolled 
          ? 'bg-black/60 backdrop-blur-md border-white/10 py-2' 
          : 'bg-transparent border-transparent py-4')
      }
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img
            src={Logo}
            alt="LineX"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tighter text-white">
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          
          {/* CTA Button */}
          <li>
            <a
              href="#start"
              className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] active:scale-95"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span className={`block w-full h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-full h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu (Dark Glass) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-6 space-y-4 text-center">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#start"
            className="bg-blue-600 text-white py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}