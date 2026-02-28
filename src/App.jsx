import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, BookOpen, Printer } from 'lucide-react';

// ייבוא העמודים
import OrderPage from './pages/Order';
import ArticlesPage from './pages/Articles';

// קומפוננטת תפריט ניווט (Navbar)
const Navbar = () => (
  <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" dir="rtl">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        {/* לוגו / שם העסק */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Printer size={24} />
          </div>
          <span className="text-xl font-bold text-gray-900">דפוס כתר</span>
        </div>

        {/* קישורי ניווט */}
        <div className="flex gap-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors">
            <ShoppingCart size={18} />
            <span>הזמנה אונליין</span>
          </Link>
          <Link to="/articles" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors">
            <BookOpen size={18} />
            <span>מאמרים ומדע</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* התפריט תמיד למעלה */}
        <Navbar />

        {/* תוכן העמודים משתנה לפי הכתובת */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<OrderPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
          </Routes>
        </main>

        {/* Footer פשוט */}
        <footer className="bg-white border-t py-6 text-center text-gray-400 text-sm">
          © 2026 דפוס כתר - איכות, מדע ונגישות
        </footer>
      </div>
    </Router>
  );
}

export default App;
