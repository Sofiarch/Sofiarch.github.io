import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

export default function Footer() {
  const { language } = useContext(LanguageContext);
  
  // Footer translations
  const t = translations[language].footer;
  // Nav translations (reused for links)
  const tNav = translations[language].nav;

  // Internal translation for contact labels (since they weren't in the main file)
  const labels = {
    en: { email: "Email", phone: "Phone", office: "Office" },
    ar: { email: "البريد الإلكتروني", phone: "الهاتف", office: "المكتب" }
  };
  const l = labels[language];

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              LineX
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.desc}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-gray-900 dark:text-white font-bold mb-6">{t.explore}</h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                  {tNav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                  {tNav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                  {tNav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                  {tNav.start}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-display text-gray-900 dark:text-white font-bold mb-6">{t.contact}</h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <span className="block text-gray-900 dark:text-white mb-1 font-medium">{l.email}</span>
                <a href="mailto:hello@linex.com" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  hello@linex.com
                </a>
              </li>
              <li>
                <span className="block text-gray-900 dark:text-white mb-1 font-medium">{l.phone}</span>
                <a href="tel:+9640000000000" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  +964 000 000 0000
                </a>
              </li>
              <li>
                <span className="block text-gray-900 dark:text-white mb-1 font-medium">{l.office}</span>
                <span>{t.items.office}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div>
            <h3 className="font-display text-gray-900 dark:text-white font-bold mb-6">{t.legal}</h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                  {t.items.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                  {t.items.terms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
                  {t.items.cookie}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LineX. {t.rights}
          </p>
          
          <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">Twitter</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">Instagram</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-200">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}