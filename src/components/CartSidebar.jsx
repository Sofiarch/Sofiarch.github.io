import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    deliveryFee, 
    total,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCartOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`شكراً ${formData.name}! تم استلام طلبك بنجاح.\nالمجموع: ${total.toLocaleString()} د.ع`);
      clearCart();
      setIsSubmitting(false);
      setIsCartOpen(false);
      setFormData({ name: '', phone: '', address: '' });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end font-cairo">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div className="relative w-full max-w-md bg-night-card border-l border-slate-700 h-full shadow-2xl flex flex-col animate-[fadeInRight_0.3s_ease-out]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-700 flex justify-between items-center bg-slate-900">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            🛒 سلة المشتريات
            <span className="text-sm bg-najaf-gold text-white px-2 py-0.5 rounded-full">{cartItems.length}</span>
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition">✕</button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <div className="text-5xl mb-4">🕸️</div>
              <p>السلة فارغة حالياً</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                {/* Mini Color Box as Image */}
                <div className={`w-16 h-20 rounded bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-xs text-gray-500`}>
                   كتاب
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-white font-bold text-sm line-clamp-1">{item.title}</h3>
                  <p className="text-najaf-gold text-sm font-bold mt-1">{item.price} د.ع</p>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center bg-slate-900 rounded border border-slate-600">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-2 text-gray-400 hover:text-white">-</button>
                      <span className="text-white text-xs px-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-2 text-gray-400 hover:text-white">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:underline">حذف</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer: Totals & Form */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-slate-900 border-t border-slate-700">
            {/* Calculation */}
            <div className="space-y-2 text-sm mb-6 border-b border-slate-700 pb-4">
              <div className="flex justify-between text-gray-400">
                <span>المجموع الفرعي</span>
                <span>{subtotal.toLocaleString()} د.ع</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>التوصيل (ثابت)</span>
                <span>{deliveryFee.toLocaleString()} د.ع</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-2">
                <span>الإجمالي</span>
                <span className="text-najaf-teal">{total.toLocaleString()} د.ع</span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                required
                type="text" 
                placeholder="الاسم الكامل" 
                className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white text-sm focus:border-najaf-gold outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                required
                type="tel" 
                placeholder="رقم الهاتف" 
                className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white text-sm focus:border-najaf-gold outline-none"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
              <textarea 
                required
                placeholder="العنوان الكامل (المنطقة، أقرب نقطة دالة)" 
                className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white text-sm focus:border-najaf-gold outline-none h-20 resize-none"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              ></textarea>
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-najaf-gold hover:bg-amber-600 text-white font-bold py-3 rounded transition flex justify-center items-center gap-2"
              >
                {isSubmitting ? 'جاري الطلب...' : 'تأكيد الطلب'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;