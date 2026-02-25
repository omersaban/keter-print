import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Printer, Phone, Mail, MapPin, Clock, CloudUpload } from "lucide-react"; // Added CloudUpload

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navigationItems = [
    { name: "דף הבית", path: createPageUrl("Home") },
    { name: "אודות", path: createPageUrl("About") },
    { name: "הזמנה אונליין", path: createPageUrl("Order") }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Keter Print</h1>
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
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <Phone className="w-4 h-4" />
                        התקשרו אלינו
                    </Button>
                </a>
                <a href="mailto:keter-ta@zahav.net.il">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <Mail className="w-4 h-4" />
                        כתבו לנו
                    </Button>
                </a>
                {/* New Upload Button */}
                <Link to={createPageUrl("Upload")}>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                        <CloudUpload className="w-4 h-4" />
                        העלאת קבצים
                    </Button>
                </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden pb-4">
            <div className="flex space-x-reverse space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(item.path)
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-reverse space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Printer className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Keter Print</h3>
              </div>
              <p className="text-gray-300 mb-4">
                שירותי דפוס מקצועיים בתל אביב. הדפסות איכותיות, אספקה מהירה, מחירים תחרותיים.
              </p>
              <p className="text-gray-300">
                Professional printing services in Tel-Aviv. Quality prints, fast delivery, competitive prices.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">צרו קשר</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-reverse space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">בן שמן 3, תל אביב-יפו (צמוד למגדלי עזריאלי)</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">03-555-0123</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">info@keterprint.co.il</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">שעות פעילות</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-reverse space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p>ראשון - חמישי: 07:00 עד 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 דפוס כתר. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
