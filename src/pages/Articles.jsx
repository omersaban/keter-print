import React, { useEffect } from "react";
import { Microscope, Zap, Droplets, Layout } from "lucide-react";

const ArticleCard = ({ title, content, icon: Icon, tag }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all text-right" dir="rtl">
    <div className="flex items-center justify-between mb-6">
      <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
        <Icon size={28} />
      </div>
      <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
    </div>
    <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">{title}</h2>
    <div className="text-gray-600 space-y-4 leading-relaxed italic border-r-4 border-blue-200 pr-4">
      {content}
    </div>
    <button className="mt-8 text-blue-600 font-bold flex items-center hover:gap-2 transition-all">
      קרא את המאמר המלא 
      <span className="mr-2">←</span>
    </button>
  </div>
);

export default function ArticlesPage() {
  useEffect(() => {
    document.title = "דפוס כתר - מדע הדפוס ומאמרים מקצועיים";
  }, []);

  const articles = [
    {
      tag: "פיזיקה",
      title: "אלקטרוסטטיקה וטונר: המדע שמאחורי ה-Xerography",
      icon: Zap,
      content: "הדפוס הדיגיטלי המודרני אינו רק 'הזרקת דיו'. הוא מבוסס על עקרונות פוטו-קונדוקטיביים. במאמר זה נסקור כיצד קרן לייזר יוצרת תמונת מטען חשמלי על תוף, ומושכת חלקיקי פולימר (טונר) בדיוק של מיקרונים בודדים לפני תהליך הקיבוע בחום (Fusing)."
    },
    {
      tag: "כימיה",
      title: "ספקטרופוטומטריה: למה ה-RGB שלכם לא נראה כמו ה-CMYK שלנו?",
      icon: Microscope,
      content: "ההבדל בין אור חוזר (נייר) לאור מוקרן (מסך) הוא עמוק. ננתח את מודל הצבע החיסורי, את חשיבות ה-Gamut ואת המדע של ניהול צבע (ICC Profiles) המבטיח שמה שאתם רואים בסטודיו זה מה שיצא מהמכונה."
    },
    {
      tag: "חומרים",
      title: "צפיפות סיבים ורמת ספיגה: הנדסת הנייר המודרנית",
      icon: Droplets,
      content: "נייר הוא לא רק מצע; הוא מבנה הנדסי. נדון בהשפעת ה-Caliper (עובי) וה-Opacity (אטימות) על איכות ההדפסה, וכיצד טיפול בציפוי פולימרי משנה את מתח הפנים של הדיו ומונע 'דימום' של צבעים."
    },
    {
      tag: "טכנולוגיה",
      title: "רזולוציה אופטית מול רזולוציה נתפסת: מעבר ל-DPI",
      icon: Layout,
      content: "האם 1200 DPI באמת נראה טוב יותר מ-600? נחקור את המדע של ה-Halftoning (רשת נקודות) וכיצד העין האנושית משלימה גוונים רציפים מתוך אוסף של נקודות בודדות, ומה זה אומר על איכות התמונות שלכם."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 font-sans" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
            Knowledge Base
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">מרכז המדע והידע</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            אנחנו בדפוס כתר מאמינים שאיכות מתחילה בהבנה עמוקה. צללו למאמרים המקצועיים שלנו על הנדסת דפוס וטכנולוגיה.
          </p>
        </header>

        <div className="grid gap-12">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <footer className="mt-20 pt-10 border-top border-gray-200 text-center text-gray-400 text-sm">
          © 2026 דפוס כתר | כל המאמרים נכתבו על בסיס מחקרים בתחום מדע ההדפסה.
        </footer>
      </div>
    </div>
  );
}
