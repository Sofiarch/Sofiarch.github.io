import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, deliveryFee, total, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
      setIsSubmitting(false);
      window.scrollTo(0, 0); // Scroll to top for the success message
    }, 1500);
  };

  // --- SUCCESS STATE (Full Page) ---
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-night-bg flex flex-col font-cairo text-white">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center p-4 animate-[fadeIn_0.5s_ease-out]">
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl">🎉</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-najaf-gold">تم استلام طلبك بنجاح!</h1>
          <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
            شكراً لك <span className="text-white font-bold">{formData.name}</span>.<br/>
            سنتواصل معك قريباً على الرقم <span className="dir-ltr inline-block">{formData.phone}</span> لتأكيد موعد التوصيل.
          </p>
          <div className="flex gap-4">
            <Link to="/books">
              <button className="bg-najaf-gold text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition font-bold shadow-lg shadow-amber-900/20">
                العودة للتسوق
              </button>
            </Link>
            <Link to="/">
              <button className="bg-transparent border border-slate-600 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition">
                الرئيسية
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // --- CHECKOUT FORM STATE ---
  return (
    <div className="min-h-screen bg-night-bg flex flex-col font-cairo text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center md:text-right border-b border-slate-800 pb-4">
          إتمام الطلب
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 grayscale opacity-50">🛒</div>
            <h2 className="text-2xl font-bold text-gray-400 mb-4">السلة فارغة</h2>
            <Link to="/books" className="text-najaf-gold hover:underline">تصفح الكتب وأضف بعضها للسلة</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Right Column: Cart Items */}
            <div className="space-y-6">
              <div className="bg-night-card p-6 rounded-xl border border-slate-700 shadow-lg">
                <h2 className="text-xl font-bold mb-6 text-najaf-teal">محتويات السلة ({cartItems.length})</h2>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 items-center">
                       {/* Simplified Thumbnail */}
                      <div className="w-16 h-20 bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded flex items-center justify-center shrink-0">
                         <span className="text-2xl">📖</span>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-bold text-white line-clamp-1">{item.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">{item.price} د.ع</p>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center bg-slate-900 rounded border border-slate-600">
                            <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 text-gray-400 hover:text-white transition">-</button>
                            <span className="text-white text-sm px-2 font-mono">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 text-gray-400 hover:text-white transition">+</button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-300 underline">حذف</button>
                        </div>
                      </div>
                      <div className="text-right font-bold text-najaf-gold">
                        {(parseInt(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Left Column: Form & Totals */}
            <div>
              <div className="bg-night-card p-8 rounded-xl border border-slate-700 shadow-lg sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-najaf-gold">معلومات التوصيل</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">الاسم الكامل</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-najaf-gold outline-none transition"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">رقم الهاتف</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-najaf-gold outline-none transition"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">العنوان بالتفصيل</label>
                    <textarea 
                      required
                      placeholder="المحافظة، المنطقة، أقرب نقطة دالة" 
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:border-najaf-gold outline-none h-24 resize-none transition"
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="border-t border-slate-700 my-6 pt-6 space-y-3">
                    <div className="flex justify-between text-gray-400">
                      <span>المجموع الفرعي</span>
                      <span>{subtotal.toLocaleString()} د.ع</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>التوصيل</span>
                      <span>{deliveryFee.toLocaleString()} د.ع</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-xl border-t border-slate-700 pt-3">
                      <span>الإجمالي الكلي</span>
                      <span className="text-najaf-teal">{total.toLocaleString()} د.ع</span>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-najaf-gold hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition shadow-lg flex justify-center items-center gap-2 transform active:scale-95"
                  >
                    {isSubmitting ? (
                       <span className="animate-pulse">جاري المعالجة...</span>
                    ) : (
                       "تأكيد الطلب والدفع عند الاستلام"
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;