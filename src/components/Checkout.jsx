import React, { useState } from 'react';
import './Checkout.css';
import { menuItems } from '../data/menuItems';

const Checkout = ({ cart, onBack, onPlaceOrder, isEnglish }) => {
  // Translations
  const t = {
    back: isEnglish ? "Back" : "رجوع",
    checkout: isEnglish ? "Checkout" : "إتمام الطلب",
    yourOrder: isEnglish ? "Your Order" : "طلباتك",
    totalAmount: isEnglish ? "Total Amount" : "المجموع الكلي",
    deliveryDetails: isEnglish ? "Delivery Details" : "تفاصيل التوصيل",
    fullName: isEnglish ? "Full Name" : "الاسم الكامل",
    enterName: isEnglish ? "Enter your name" : "أدخل اسمك",
    phone: isEnglish ? "Phone Number" : "رقم الهاتف",
    address: isEnglish ? "Address / Notes" : "العنوان / ملاحظات",
    addressPlaceholder: isEnglish ? "Building, Street, Apartment..." : "المنطقة، الشارع، أقرب نقطة دالة...",
    confirm: isEnglish ? "Confirm Order" : "تأكيد الطلب"
  };

  const findItem = (id) => {
    const allItems = Object.values(menuItems).flat();
    return allItems.find(item => item.id === parseInt(id));
  };

  const cartEntries = Object.entries(cart);
  
  const totalAmount = cartEntries.reduce((sum, [id, qty]) => {
    const item = findItem(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder(formData, totalAmount);
  };

  return (
    <div className="checkout-container" dir={isEnglish ? 'ltr' : 'rtl'}>
      {/* Header */}
      <div className="checkout-header">
        <button className="back-btn-checkout" onClick={onBack}>
          <i className={`fa-solid ${isEnglish ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i> {t.back}
        </button>
        <h2>{t.checkout}</h2>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>{t.yourOrder}</h3>
        <div className="summary-items">
          {cartEntries.map(([id, qty]) => {
            const item = findItem(id);
            if (!item) return null;
            // Select Language Title
            const title = isEnglish ? item.title : (item.title_ar || item.title);
            
            return (
              <div key={id} className="summary-row">
                <div className="item-info">
                  <span className="qty">{qty}x</span>
                  <span className="name">{title}</span>
                </div>
                <span className="item-price">{(item.price * qty).toFixed(3)}</span>
              </div>
            );
          })}
        </div>
        
        <div className="divider"></div>
        
        <div className="total-row">
          <span>{t.totalAmount}</span>
          <span className="total-price">{totalAmount.toFixed(3)} JOD</span>
        </div>
      </div>

      {/* Customer Form */}
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>{t.deliveryDetails}</h3>
        
        <div className="form-group">
          <label>{t.fullName}</label>
          <input 
            type="text" 
            required 
            placeholder={t.enterName}
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>{t.phone}</label>
          <input 
            type="tel" 
            required 
            placeholder="07xxxxxxxxx"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>{t.address}</label>
          <textarea 
            rows="3" 
            placeholder={t.addressPlaceholder}
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
          ></textarea>
        </div>

        <button type="submit" className="confirm-btn">
          {t.confirm}
        </button>
      </form>
    </div>
  );
};

export default Checkout;