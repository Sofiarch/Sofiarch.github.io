import React, { useState, useMemo } from 'react';
import { books } from '../books';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// --- 1. CSS Book Cover Component (For Books Only) ---
const BookCover = ({ title, author, category }) => {
  // Styles based on category
  const getStyle = () => {
    switch(category) {
      case "تاريخ واجتماع": return "from-amber-900 to-amber-950 border-amber-700";
      case "كتب دينية": return "from-emerald-900 to-emerald-950 border-emerald-700";
      case "روايات": return "from-slate-800 to-slate-950 border-slate-600";
      case "روايات عالمية": return "from-indigo-900 to-indigo-950 border-indigo-700";
      case "تطوير ذات": return "from-sky-900 to-sky-950 border-sky-700";
      case "فلسفة": return "from-purple-900 to-purple-950 border-purple-700";
      case "أطفال": return "from-pink-600 to-rose-700 border-pink-400";
      default: return "from-gray-800 to-gray-900 border-gray-600";
    }
  };

  return (
    <div className={`w-full h-full relative bg-gradient-to-br ${getStyle()} p-4 flex flex-col shadow-inner group overflow-hidden`}>
      {/* Spine Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/20 z-20 border-r border-white/10"></div>
      <div className="absolute left-3 top-0 bottom-0 w-1 bg-white/10 z-20"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>

      {/* Gold Frame */}
      <div className="absolute inset-3 border-2 border-najaf-gold/40 rounded-sm z-10 flex flex-col justify-between p-2">
        <div className="flex justify-center text-najaf-gold/60 text-xs tracking-[0.3em]">✦ ✦ ✦</div>
        
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <h3 className="font-amiri font-bold text-white text-xl md:text-2xl leading-relaxed drop-shadow-md line-clamp-3">
            {title}
          </h3>
          <div className="w-16 h-[1px] bg-najaf-gold/50 my-3"></div>
          <p className="font-cairo text-gray-300 text-xs md:text-sm font-light">{author}</p>
        </div>

        <div className="flex justify-center items-end opacity-60">
           <span className="text-[10px] text-najaf-gold font-serif tracking-widest uppercase">Najaf Books</span>
        </div>
      </div>
      
      {/* Shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30 transform -translate-x-full group-hover:translate-x-full ease-in-out"></div>
    </div>
  );
};

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = ["All", ...new Set(books.map(b => b.category))];

  // Helper: Is this an item that needs a real photo?
  const isAccessory = (cat) => {
    return ["قرطاسية", "هدايا", "إكسسوارات", "ألعاب"].includes(cat);
  };

  const processedBooks = useMemo(() => {
    let result = books;

    if (searchTerm) {
      result = result.filter(book => 
        book.title.includes(searchTerm) || book.author.includes(searchTerm)
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter(book => book.category === selectedCategory);
    }

    if (sortOrder === "low-high") {
      result = [...result].sort((a, b) => 
        parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, ''))
      );
    } else if (sortOrder === "high-low") {
      result = [...result].sort((a, b) => 
        parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, ''))
      );
    }

    return result;
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="min-h-screen bg-night-bg flex flex-col font-cairo text-white">
      <Navbar />
      
      {/* Header */}
      <div className="relative py-20 bg-slate-900 overflow-hidden text-center border-b border-slate-800">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">فهرس <span className="text-najaf-gold">المكتبة</span></h1>
          <p className="text-gray-400 max-w-lg mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">اكتشف مجموعتنا المختارة من الكتب والمستلزمات.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex-grow">
        
        {/* Controls */}
        <div className="bg-night-card p-6 rounded-xl border border-slate-700 mb-12 shadow-2xl relative z-20 -mt-10 mx-4 md:mx-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <label className="block text-gray-400 text-xs mb-2 font-bold tracking-wider">بحث</label>
              <input type="text" placeholder="عنوان الكتاب أو الغرض..." className="w-full bg-slate-800 text-white border border-slate-600 rounded-lg p-3 pr-10 focus:outline-none focus:border-najaf-gold transition-all" onChange={(e) => setSearchTerm(e.target.value)} />
              <span className="absolute left-3 top-10 text-gray-500">🔍</span>
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-2 font-bold tracking-wider">التصنيف</label>
              <select className="w-full bg-slate-800 text-white border border-slate-600 rounded-lg p-3 focus:outline-none focus:border-najaf-gold cursor-pointer" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(cat => ( <option key={cat} value={cat}>{cat === "All" ? "الكل" : cat}</option> ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-2 font-bold tracking-wider">ترتيب</label>
              <select className="w-full bg-slate-800 text-white border border-slate-600 rounded-lg p-3 focus:outline-none focus:border-najaf-gold cursor-pointer" onChange={(e) => setSortOrder(e.target.value)}>
                <option value="default">المقترحة</option>
                <option value="low-high">السعر: الأقل أولاً</option>
                <option value="high-low">السعر: الأعلى أولاً</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {processedBooks.length > 0 ? (
            processedBooks.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 0.05}>
                <div className="group flex flex-col h-full bg-transparent perspective-1000">
                  
                  {/* --- CARD VISUAL LOGIC --- */}
                  <div className="relative w-full aspect-[2/3] rounded-r-md rounded-l-sm shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-najaf-gold/20 overflow-hidden bg-slate-800">
                    
                    {isAccessory(item.category) ? (
                      // RENDER IMAGE FOR ACCESSORIES
                      <>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition duration-700" 
                        />
                        {/* Overlay to make text legible if needed later */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </>
                    ) : (
                      // RENDER CSS BOOK COVER FOR BOOKS
                      <BookCover title={item.title} author={item.author} category={item.category} />
                    )}

                  </div>
                  
                  {/* Info Area */}
                  <div className="pt-4 px-1 flex flex-col flex-grow">
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2 group-hover:text-najaf-gold transition-colors pl-2">
                      {item.title}
                    </h3>
                    
                    <div className="mt-auto flex justify-between items-center border-t border-slate-800 pt-3">
                      <span className="text-najaf-teal font-bold text-base md:text-lg">{item.price}</span>
                      <button className="bg-slate-800 hover:bg-najaf-gold text-white p-2 rounded-full transition-colors shadow-lg group/btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 group-hover/btn:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            ))
          ) : (
            <div className="col-span-full text-center py-24">
              <div className="text-6xl mb-4 grayscale opacity-50">📚</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">لم يتم العثور على نتائج</h3>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BooksPage;