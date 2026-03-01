import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 
import { Microscope, Layout, BookOpen, Printer } from "lucide-react";

const ArticleCard = ({ title, content, icon: Icon, tag, path }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all text-right flex flex-col h-full" dir="rtl">
    <div className="flex items-center justify-between mb-6">
      <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
        <Icon size={28} />
      </div>
      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
    </div>
    <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">{title}</h2>
    <div className="text-gray-600 space-y-4 leading-relaxed italic border-r-4 border-blue-200 pr-4 flex-grow">
      {content}
    </div>
    
    <Link to={path} className="mt-8 text-blue-600 font-bold flex items-center hover:gap-2 transition-all w-max">
      <span className="ml-2">←</span>
      קרא את המאמר המלא 
    </Link>
  </div>
);

export default function ArticlesPage() {
  useEffect(() => {
    document.title = "דפוס כתר - מאמרים";
  }, []);

  const articles = [
    {
      tag: "הנדסת חומרים",
      title: "הפיזיקה של הקיפול: למה ברושורים נשברים?",
      icon: BookOpen,
      path: "/Articles/Brochures",
      content: "ברושור הוא לא רק דף מקופל, הוא מבנה תלת-ממדי. ננתח את החשיבות של כיוון סיבי הנייר (Grain Direction) ואת המכניקה של תהליך הביג (Creasing) המונעת מתיחה ושבירה של שכבת הדיו והפולימר בנקודת הכיפוף."
    },
    {
      tag: "כימיה ומכניקה",
      title: "מדע האופסט: למה שמן ומים לא מתערבבים?",
      icon: Printer,
      path: "/Articles/Offset",
      content: "דפוס אופסט הוא הבסיס לתעשיית ההדפסה המסחרית. נחקור את העיקרון הליתוגרפי של דחיית מים ושמן, ואת המעבר המכני של הדיו מגלופת האלומיניום אל גליל הגומי הרך ומשם אל הנייר."
    },
    {
      tag: "כימיה",
      title: "ספקטרופוטומטריה: למה ה-RGB לא נראה כמו ה-CMYK?",
      icon: Microscope,
      path: "/Articles/ColorManagement", // נתיב עתידי
      content: "ההבדל בין אור חוזר (נייר) לאור מוקרן (מסך) הוא עמוק. ננתח את מודל הצבע החיסורי, את חשיבות ה-Gamut ואת המדע של ניהול צבע (ICC Profiles)."
    },
    {
      tag: "טכנולוגיה",
      title: "רזולוציה אופטית מול נתפסת: מעבר ל-DPI",
      icon: Layout,
      path: "/Articles/Resolution", // נתיב עתידי
      content: "האם 1200 DPI באמת נראה טוב יותר מ-600? נחקור את המדע של ה-Halftoning (רשת נקודות) וכיצד העין האנושית משלימה גוונים רציפים מתוך אוסף של נקודות בודדות."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 font-sans" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
            Knowledge Base
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">מאמרים</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            אנחנו בדפוס כתר מאמינים שאיכות מתחילה בהבנה עמוקה. היכנסו למאמרים המקצועיים שלנו על הנדסת דפוס וטכנולוגיה.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t border-gray-200 text-center text-gray-400 text-sm">
          © 2026 דפוס כתר | כל המאמרים נכתבו על בסיס מחקרים בתחום מדע ההדפסה.
        </footer>
      </div>
    </div>
  );
}
