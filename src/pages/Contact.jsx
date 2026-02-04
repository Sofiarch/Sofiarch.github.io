import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', phone: '', message: '' });
      window.scrollTo(0, 0); // Scroll to top
    }, 1500);
  };

  // --- SUCCESS STATE (Full Page) ---
  if (status === 'sent') {
    return (
      <div className="min-h-screen bg-night-bg flex flex-col font-cairo text-white">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center p-4 animate-[fadeIn_0.5s_ease-out]">
          <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl">📨</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-najaf-gold">تم الإرسال بنجاح</h1>
          <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
            شكراً لتواصلك معنا. استلمنا رسالتك وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setStatus('')}
              className="bg-slate-800 border border-slate-600 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition"
            >
              إرسال رسالة أخرى
            </button>
            <Link to="/">
              <button className="bg-najaf-gold text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition font-bold shadow-lg">
                العودة للرئيسية
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // --- CONTACT FORM STATE ---
  return (
    <div className="min-h-screen bg-night-bg flex flex-col font-cairo text-white">
      <Navbar />

      {/* Header */}
      <div className="relative py-20 bg-slate-900 overflow-hidden text-center border-b border-slate-800">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
            اتصل <span className="text-najaf-gold">بنا</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="space-y-8 animate-[fadeInRight_0.8s_ease-out]">
            <div className="bg-night-card p-8 rounded-xl border border-slate-700 shadow-lg">
              <h3 className="text-2xl font-bold text-najaf-gold mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-najaf-teal">📍</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">العنوان</h4>
                    <p className="text-gray-400">العراق، النجف الأشرف<br/>شارع الروان، مجمع الكتاب الطابق الثاني</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-najaf-teal">📞</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">الهاتف</h4>
                    <p className="text-gray-400" dir="ltr">0773 667 3924</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <div className="h-64 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Imam_Ali_Mosque_Najaf.jpg')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=32.009139,44.355389" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-najaf-gold text-white px-6 py-2 rounded-full shadow-lg font-bold hover:bg-amber-700 transition flex items-center gap-2"
                >
                  <span>📍</span>
                  <span>عرض الموقع على الخريطة</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-night-card p-8 rounded-xl border border-slate-700 shadow-lg animate-[fadeInLeft_0.8s_ease-out]">
            <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">الاسم</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-najaf-gold outline-none transition"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">رقم الهاتف</label>
                <input 
                  required 
                  type="tel" 
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-najaf-gold outline-none transition"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">الرسالة</label>
                <textarea 
                  required 
                  rows="5"
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-najaf-gold outline-none resize-none transition"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={status === 'sending'}
                className="w-full bg-najaf-gold hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition shadow-lg flex justify-center items-center gap-2"
              >
                {status === 'sending' ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;