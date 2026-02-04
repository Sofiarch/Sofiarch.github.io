import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-night-bg flex flex-col font-cairo">
      <Navbar />
      <Hero />

      {/* --- Section 1: Features --- */}
      <section className="py-20 bg-night-card border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <RevealOnScroll delay={0.1}>
              <div className="p-6 border border-slate-700 rounded-xl hover:border-najaf-gold transition duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">توصيل سريع</h3>
                <p className="text-gray-400">خدمة توصيل سريعة لكافة محافظات العراق.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="p-6 border border-slate-700 rounded-xl hover:border-najaf-gold transition duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-white mb-2">كتب أصلية</h3>
                <p className="text-gray-400">نضمن لك نسخاً أصلية وعالية الجودة.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="p-6 border border-slate-700 rounded-xl hover:border-najaf-gold transition duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-white mb-2">دفع عند الاستلام</h3>
                <p className="text-gray-400">ادفع فقط عند استلام طلبك.</p>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* --- Section 2: Quote Section --- */}
      <section className="py-24 relative bg-slate-900 border-y border-slate-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80" 
            alt="Reading Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <RevealOnScroll>
            <span className="text-6xl text-najaf-gold opacity-50 block mb-6">❝</span>
            <div className="mb-10 font-amiri font-bold text-white text-4xl md:text-6xl leading-relaxed drop-shadow-lg">
              "الْكُتُبُ بَسَاتِينُ الْعُلَمَاءِ"
            </div>
            <span className="text-xl text-najaf-teal font-medium font-cairo">
              — أمير المؤمنين علي بن أبي طالب (ع)
            </span>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="py-20 text-center bg-night-bg">
        <RevealOnScroll>
          <h2 className="text-3xl text-white font-bold mb-6">هل تبحث عن كتاب معين؟</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">تصفح مجموعتنا الكاملة أو تواصل معنا.</p>
          <div className="flex justify-center gap-4">
            <Link to="/books">
              <button className="bg-najaf-gold text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-amber-700 transition shadow-lg shadow-amber-900/20 transform hover:scale-105">
                تصفح المكتبة الآن
              </button>
            </Link>
            {/* Removed the Contact Us button from here */}
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};

export default Home;