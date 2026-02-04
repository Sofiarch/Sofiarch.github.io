import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-slate-900 text-white py-32 px-4 text-center relative overflow-hidden font-cairo border-b border-slate-800">
      
      {/* Simple Minimalist Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        
        {/* RESTORED HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[fadeInUp_0.8s_ease-out]">
          من أرض الحكمة .. إلى <span className="text-najaf-gold">يديك</span>
        </h1>
        
        {/* UPDATED PARAGRAPH (Removed "thousands of books") */}
        <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
          تصفح مجموعتنا المميزة من الكتب الثقافية والأدبية واطلبها الآن لتصلك إلى باب منزلك في أي مكان في العراق.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
          <Link to="/books">
            <button className="w-full sm:w-auto bg-najaf-gold text-white text-lg font-bold px-12 py-4 rounded-lg hover:bg-amber-700 transition shadow-lg">
              تصفح المكتبة
            </button>
          </Link>
          <Link to="/contact">
            <button className="w-full sm:w-auto bg-transparent border border-slate-600 text-white text-lg font-bold px-12 py-4 rounded-lg hover:bg-slate-800 transition">
              تواصل معنا
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;