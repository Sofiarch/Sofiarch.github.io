import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-slate-800 font-cairo">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">مكتبة الرافدين</h2>
        <p className="mb-6 opacity-60">شارع الروان، النجف الأشرف، العراق</p>
        
        <div className="flex flex-col items-center gap-3 text-sm">
          <p>© 2026 جميع الحقوق محفوظة.</p>
          
          {/* LineX Credit */}
          <div className="flex items-center gap-1 text-xs opacity-60 hover:opacity-100 transition duration-300 mt-2">
             <span>تم التطوير بواسطة</span>
             <a 
               href="https://linex.website" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-najaf-gold font-bold hover:text-amber-400 border-b border-transparent hover:border-najaf-gold transition-all pb-0.5"
             >
               LineX
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;