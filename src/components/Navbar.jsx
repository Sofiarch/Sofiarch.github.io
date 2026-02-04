// ... imports
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-night-card shadow-lg border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span>📚</span>
          <span>مكتبة <span className="text-najaf-gold">النجف</span></span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 space-x-reverse text-gray-300 font-medium">
          <li><Link to="/" className="hover:text-najaf-gold transition">الرئيسية</Link></li>
          <li><Link to="/books" className="hover:text-najaf-gold transition">تصفح الكتب</Link></li>
          
          {/* UPDATED LINK */}
          <li><Link to="/about" className="hover:text-najaf-gold transition">من نحن</Link></li>
        </ul>

        {/* Cart */}
        <button className="bg-najaf-gold text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition font-bold shadow-md">
          سلة القراءة (0)
        </button>
      </div>
    </nav>
  );
};

export default Navbar;