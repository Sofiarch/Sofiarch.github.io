import React from 'react';
import { books } from '../books';
import { useCart } from '../context/CartContext'; // 1. Import the hook

const BookList = () => {
  const { addToCart } = useCart(); // 2. Get the addToCart function

  return (
    <section className="py-16 bg-night-bg" id="books">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">مختارات من الرفوف</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-najaf-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="group bg-night-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 overflow-hidden">
              {/* Image Area */}
              <div className="h-72 bg-slate-800 w-full relative p-6 flex justify-center items-center">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="h-full object-contain shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur text-najaf-gold text-xs font-bold px-3 py-1 rounded-full border border-slate-600">
                  {book.category}
                </span>
              </div>
              
              <div className="p-5 text-right">
                <h3 className="font-bold text-xl text-white mb-1 leading-relaxed">{book.title}</h3>
                <p className="text-gray-400 text-sm mb-4 font-serif">{book.author}</p>
                <div className="flex justify-between items-end border-t border-slate-700 pt-4">
                  <span className="text-najaf-teal font-bold text-lg">{book.price} د.ع</span>
                  
                  {/* 3. Button with onClick Event */}
                  <button 
                    onClick={() => addToCart(book)}
                    className="text-najaf-gold hover:text-amber-400 font-bold text-sm flex items-center gap-1 transition active:scale-95"
                  >
                    <span>إضافة للسلة</span>
                    <span className="text-lg">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;