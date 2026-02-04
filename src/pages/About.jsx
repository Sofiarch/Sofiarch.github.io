import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => {
  return (
    <div className="min-h-screen bg-night-bg flex flex-col font-cairo text-white">
      <Navbar />

      {/* --- Page Header --- */}
      <div className="relative py-24 bg-slate-900 overflow-hidden text-center border-b border-slate-800">
        <div className="absolute inset-0 opacity-10" 
             style={{backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
            من <span className="text-najaf-gold">نحن</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            وجهتكم الثقافية في النجف الأشرف.
          </p>
        </div>
      </div>

      {/* --- Story Section --- */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <RevealOnScroll>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                <img 
                  src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=800&q=80" 
                  alt="Bookstore Shelves" 
                  className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-bg to-transparent opacity-50"></div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-right">
            <RevealOnScroll delay={0.2}>
              <h2 className="text-3xl font-bold mb-6 text-white">
                كتب .. قرطاسية .. <span className="text-najaf-teal">وهدايا</span>
              </h2>
              <p className="text-gray-300 leading-loose mb-6 text-lg">
                نحن متجر متكامل يقع في قلب مدينة النجف، متخصصون في بيع الكتب المتنوعة والمستلزمات المكتبية والهدايا المميزة.
              </p>
              <p className="text-gray-300 leading-loose mb-8 text-lg">
                نحرص على توفير أحدث الإصدارات والمنتجات عالية الجودة لتلبي احتياجات القراء والطلاب والمهتمين بالثقافة. يمكنك زيارة معرضنا للاطلاع على المنتجات وشراؤها مباشرة، أو الطلب عبر موقعنا الإلكتروني ليصلك كل ما تحتاجه.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* --- Simple Features Grid --- */}
      <section className="py-20 bg-night-card border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <RevealOnScroll delay={0.1}>
              <div className="p-6">
                <div className="text-4xl mb-4 text-najaf-gold">📍</div>
                <h3 className="text-xl font-bold text-white mb-2">موقعنا في النجف</h3>
                <p className="text-gray-400">متجرنا مفتوح يومياً لاستقبالكم وتلبية طلباتكم.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="p-6">
                <div className="text-4xl mb-4 text-najaf-gold">✏️</div>
                <h3 className="text-xl font-bold text-white mb-2">قرطاسية ومستلزمات</h3>
                <p className="text-gray-400">تشكيلة واسعة من الأدوات المكتبية والهدايا الراقية.</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="p-6">
                <div className="text-4xl mb-4 text-najaf-gold">📚</div>
                <h3 className="text-xl font-bold text-white mb-2">عناوين مختارة</h3>
                <p className="text-gray-400">كتب دينية، أدبية، وعلمية تناسب جميع الاهتمامات.</p>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;