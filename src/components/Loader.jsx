import React from 'react';

const Loader = ({ fadeOut }) => {
  return (
    <div 
      className={`loader-container ${fadeOut ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
    >
      {/* The Stack Wrapper */}
      <div className="stack-wrapper mb-8">
        {/* Book 1 (Bottom - Slate) */}
        <div 
          className="book-item animate-drop bg-slate-700" 
          style={{ animationDelay: '0.1s', width: '100%' }}
        ></div>

        {/* Book 2 (Teal) */}
        <div 
          className="book-item animate-drop bg-najaf-teal" 
          style={{ animationDelay: '0.4s', width: '90%' }} 
        ></div>

        {/* Book 3 (Gold) */}
        <div 
          className="book-item animate-drop bg-najaf-gold" 
          style={{ animationDelay: '0.7s', width: '95%' }} 
        ></div>

         {/* Book 4 (Dark Blue) */}
         <div 
          className="book-item animate-drop bg-blue-900" 
          style={{ animationDelay: '1.0s', width: '85%' }} 
        ></div>

        {/* Book 5 (Top - Red Accent) */}
        <div 
          className="book-item animate-drop bg-rose-800" 
          style={{ animationDelay: '1.3s', width: '88%' }} 
        ></div>
      </div>
      
      <h1 className="text-3xl font-bold text-white tracking-widest font-cairo animate-pulse">
        مكتبة <span className="text-najaf-gold">النجف</span>
      </h1>
      <p className="text-gray-400 text-xs mt-2 font-mono">جاري ترتيب الكتب...</p>
    </div>
  );
};

export default Loader;