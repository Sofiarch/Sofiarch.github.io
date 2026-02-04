import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-night-bg text-white py-24 px-4 text-center relative overflow-hidden font-cairo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Badge - Slide Down */}
        <div className="opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-najaf-gold text-sm mb-6 border border-slate-600">
            مكتبة النجف الرقمية
          </span>
        </div>
        
        {/* Headline - Fade Up */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
          من أرض الحكمة .. إلى <span className="text-najaf-gold">يديك</span>
        </h1>
        
        {/* Paragraph - Fade Up Delayed */}
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
          تصفح آلاف الكتب المتنوعة واطلبها بسهولة لتصلك أينما كنت في العراق، مع خدمة دفع آمنة وتوصيل سريع.
        </p>

        {/* Buttons - Zoom In Delayed */}
        <div className="flex justify-center gap-4 opacity-0 animate-[zoomIn_0.8s_ease-out_0.9s_forwards]">
          <Link to="/books">
            <button className="bg-najaf-gold text-white text-lg font-bold px-8 py-3 rounded shadow-lg hover:bg-amber-700 transition transform hover:-translate-y-1">
              تصفح المكتبة
            </button>
          </Link>
          <button className="bg-transparent border border-gray-600 text-white text-lg font-bold px-8 py-3 rounded hover:bg-slate-800 transition">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;