import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">مكتبة النجف</h2>
        <p className="mb-6 opacity-60">شارع الروان، النجف الأشرف، العراق</p>
        <div className="text-sm">
          © 2026 جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;