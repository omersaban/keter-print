import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button"; // שינוי ל-B גדולה
import { Printer, Phone, Mail, MapPin, Clock, CloudUpload } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();

  const navigationItems = [
    { name: "דף הבית", path: "/" },
    { name: "אודות", path: "/About" },
    { name: "הזמנה אונליין", path: "/Order" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-none">Keter Print</h1>
                <p className="text-sm text-gray-500">דפוס כתר - תל אביב</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-reverse space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-reverse space-x-2">
                <a href="tel:03-555-0123">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700">
                        <Phone className="w-4 h-4" />
                        03-555-0123
                    </Button>
                </a>
                <Link to="/Order">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                        <CloudUpload className="w-4 h-4" />
                        הזמנה חדשה
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            <div>
              <div className="flex items-center space-x-reverse space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Printer className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Keter Print</h3>
              </div>
              <p className="text-gray-400">
                שירותי דפוס מקצועיים בלב תל אביב. איכות, מהירות ושירות אישי מעל הכל.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">צרו קשר</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-reverse space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>בן שמן 6, תל אביב (ליד עזריאלי)</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>03-555-0123</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>keter-ta@zahav.net.il</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">שעות פעילות</h4>
              <div className="flex items-center space-x-reverse space-x-3 text-gray-300">
                <Clock className="w-5 h-5" />
                <p>א' - ה': 07:00 עד 17:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} דפוס כתר בע"מ. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
