import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import LegalModal from './LegalModal'; // Import the new modal

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const [legalOpen, setLegalOpen] = useState(null); // 'privacy', 'terms', or 'cookie'

  const t = translations[language].footer;
  const tNav = translations[language].nav;

  const labels = {
    en: { email: "Email", phone: "Phone", office: "Office" },
    ar: { email: "البريد الإلكتروني", phone: "الهاتف", office: "المكتب" }
  };
  const l = labels[language];

  return (
    <>
      <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white tracking-tight">LineX</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">{t.desc}</p>
            </div>

            {/* Column 2: Explore */}
            <div>
              <h3 className="font-display text-gray-900 dark:text-white font-bold mb-6">{t.explore}</h3>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">{tNav.home}</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">{tNav.services}</Link></li>
                <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">{tNav.about}</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">{tNav.contact}</Link></li>
                <li><Link to="/start" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">{tNav.start}</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-display text-gray-900 dark:text-white font-bold mb-6">{t.contact}</h3>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <span className="block text-gray-900 dark:text-white mb-1 font-medium">{l.email}</span>
                  <a href="mailto:hello@linex.com" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">hello@linex.com</a>
                </li>
                <li>
                  <span className="block text-gray-900 dark:text-white mb-1 font-medium">{l.phone}</span>
                  <a href="tel:+9640000000000" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">+964 000 000 0000</a>
                </li>
                <li>
                  <span className="block text-gray-900 dark:text-white mb-1 font-medium">{l.office}</span>
                  <span>{t.items.office}</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal (Buttons instead of Links) */}
            <div>
              <h3 className="font-display text-gray-900 dark:text-white font-bold mb-6">{t.legal}</h3>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <button onClick={() => setLegalOpen('privacy')} className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 text-left">
                    {t.items.privacy}
                  </button>
                </li>
                <li>
                  <button onClick={() => setLegalOpen('terms')} className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 text-left">
                    {t.items.terms}
                  </button>
                </li>
                <li>
                  <button onClick={() => setLegalOpen('cookie')} className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 text-left">
                    {t.items.cookie}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} LineX. {t.rights}</p>
            <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">LinkedIn</a>
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">Twitter</a>
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">Instagram</a>
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

      {/* RENDER THE MODAL IF OPEN */}
      {legalOpen && (
        <LegalModal 
          initialTab={legalOpen} 
          onClose={() => setLegalOpen(null)} 
        />
      )}
    </>
  );
}