import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Printer, Phone, Mail, MapPin, Clock, CloudUpload, Menu, ShieldCheck } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();

  // רשימת הניווט בבאנר העליון - ללא נגישות
  const navigationItems = [
    { name: "דף הבית", path: "/" },
    { name: "אודות", path: "/About" },
    { name: "הזמנה אונליין", path: "/Order" },
    { name: "מאמרים", path: "/Articles" }
  ];

  const isActive = (path) => location.pathname === path;

  const buttonClass = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";
  const primaryBtn = `${buttonClass} bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2`;
  const ghostBtn = `${buttonClass} hover:bg-gray-100 hover:text-blue-600 h-9 px-4 py-2 text-gray-700`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* Header - הבאנר העליון */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-reverse space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-blue-200 transition-all">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-none">Keter Print</span>
                <span className="text-xs text-gray-500 mt-1">דפוס כתר - תל אביב</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-reverse space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive(item.path)
                      ? "text-blue-600 after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions - הטלפון והכפתור */}
            <div className="hidden md:flex items-center space-x-reverse space-x-3">
              <a href="tel:03-555-0123" className={ghostBtn}>
                <Phone className="w-4 h-4 ml-2" />
                03-561-2165
              </a>
              <Link to="/Order" className={primaryBtn}>
                <CloudUpload className="w-4 h-4 ml-2" />
                הזמנה חדשה
              </Link>
            </div>

            <div className="md:hidden">
                <Menu className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-[calc(100vh-300px)]">
        {children}
      </main>

      {/* Footer - המבנה המקורי עם הוספת הנגישות לרשימה */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right">
            
            {/* About Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Printer className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">Keter Print</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                שירותי דפוס מקצועיים בלב תל אביב כבר למעלה מ-40 שנה. אנו מתמחים בפתרונות דפוס דיגיטלי ואופסט לעסקים ופרטיים.
              </p>
            </div>

            {/* Contact Column - כאן הוספתי את הצהרת הנגישות */}
            <div className="space-y-4">
              <h4 className="text-md font-bold text-white uppercase tracking-wider">צרו קשר ומידע</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center space-x-reverse space-x-3">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>בן שמן 6, תל אביב (צמוד לעזריאלי)</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>03-561-2165</span>
                </li>
                <li className="flex items-center space-x-reverse space-x-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <a href="mailto:keter-ta@zahav.net.il" className="hover:text-blue-400 transition-colors">
                    keter-ta@zahav.net.il
                  </a>
                </li>
                {/* הקישור להצהרת נגישות */}
                <li className="flex items-center space-x-reverse space-x-3 pt-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <Link to="/AccessibilityStatement" className="text-blue-400 hover:underline font-bold">
                    הצהרת נגישות האתר
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours Column */}
            <div className="space-y-4">
              <h4 className="text-md font-bold text-white uppercase tracking-wider">שעות פעילות</h4>
              <div className="flex items-start space-x-reverse space-x-3 text-slate-400 text-sm">
                <Clock className="w-4 h-4 text-blue-500 mt-0.5" />
                <div>
                  <p>ראשון - חמישי: 07:00 - 15:00</p>
                  <p className="mt-1">שישי ושבת: סגור</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} דפוס כתר בע"מ. כל הזכויות שמורות.</p>
            <div className="flex space-x-reverse space-x-6">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
