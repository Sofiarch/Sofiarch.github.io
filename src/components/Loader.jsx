import React from 'react';

const Loader = ({ fadeOut }) => {
  return (
    <div 
      className={`loader-container ${fadeOut ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
    >
      <div className="stack-wrapper mb-8">
        <div className="book-item animate-drop bg-slate-700" style={{ animationDelay: '0.1s', width: '100%' }}></div>
        <div className="book-item animate-drop bg-najaf-teal" style={{ animationDelay: '0.4s', width: '90%' }}></div>
        <div className="book-item animate-drop bg-najaf-gold" style={{ animationDelay: '0.7s', width: '95%' }}></div>
        <div className="book-item animate-drop bg-blue-900" style={{ animationDelay: '1.0s', width: '85%' }}></div>
        <div className="book-item animate-drop bg-rose-800" style={{ animationDelay: '1.3s', width: '88%' }}></div>
      </div>
      
      {/* UPDATED NAME */}
      <h1 className="text-3xl font-bold text-white tracking-widest font-cairo animate-pulse">
        مكتبة <span className="text-najaf-gold">الرافدين</span>
      </h1>
      <p className="text-gray-400 text-xs mt-2 font-mono">جاري ترتيب الكتب...</p>
    </div>
  );
};

export default Loader;