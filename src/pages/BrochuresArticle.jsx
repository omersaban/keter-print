import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BrochuresArticle() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-right font-sans" dir="rtl">
      {/* כפתור חזרה */}
      <Link to="/Articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors">
        <ArrowRight className="w-4 h-4 ml-2" />
        חזרה למרכז הידע
      </Link>

      <article className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-6 text-blue-600">
          <BookOpen className="w-8 h-8" />
          <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full text-sm font-bold tracking-wider">מכניקה והנדסה</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
          הנדסת הנייר: הפיזיקה של קיפול ברושורים ומניעת שבירת סיבים
        </h1>
        
        <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none space-y-6">
          <p className="text-xl font-medium text-gray-800">
            במבט ראשון, ברושור נראה כמו מוצר פשוט – דף נייר עם הדפסה יפה שמקופל לשניים או לשלושה חלקיים. אך מאחורי הקלעים, הפיכת מצע דו-ממדי קשיח למבנה תלת-ממדי גמיש דורשת הבנה מעמיקה בהנדסת חומרים, מתח פנים, וכיווניות סיבים.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4 border-r-4 border-blue-600 pr-4">
            כיוון סיבי הנייר (Paper Grain) - סוד הקיפול המושלם
          </h2>
          
          <p>
            נייר מיוצר בתהליך שבו עיסת תאית מוזרמת במהירות על גבי רשת נעה. תנועה זו גורמת לרוב סיבי העץ להסתדר באותו כיוון – זהו "כיוון הסיבים" (Grain Direction). 
          </p>
          <p>
            כאשר אנו מתכננים ברושור, כלל הברזל הוא **לקפל במקביל לכיוון הסיבים**. קיפול נגד כיוון הסיבים מפעיל מאמץ מתיחה אדיר על פני השטח של הנייר. התוצאה? מיקרו-סדקים בציפוי הפולימרי של הנייר ובשכבת הדיו, תופעה המוכרת בתעשייה כ"שבירה" (Cracking) שפוגמת משמעותית בנראות המוצר.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4 border-r-4 border-blue-600 pr-4">
            הפתרון המכני: תהליך הביג (Scoring & Creasing)
          </h2>
          
          <p>
            כאשר אנו נדרשים להדפיס ברושורים על ניירות עבים (200 גרם ומעלה), אפילו קיפול עם כיוון הסיבים אינו מספיק. כאן נכנסת לפעולה מכניקת ה"ביג" (Crease).
          </p>
          
          <p>
            בתהליך זה, במקום פשוט לכופף את הנייר, אנו משתמשים בלהב מתכת קהה שדוחס את הנייר לתוך תעלה תואמת.  פעולה זו משנה את המבנה הפנימי של הנייר: היא מחלישה במכוון ובצורה מבוקרת את החיבורים בין הסיבים באזור הקיפול, מה שמאפשר לנייר להתקפל כמעט ללא התנגדות מבלי לקרוע את השכבה החיצונית המודפסת.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">סיכום ללקוח:</h3>
            <p className="text-sm">
              תכנון נכון של ברושור בבית הדפוס לוקח בחשבון את משקל הנייר, סוג הציפוי (למינציה מבריקה/מט או לכה), ואת כיוון הסיבים. שילוב מדויק של פרמטרים אלו מבטיח מוצר סופי אלגנטי, עמיד, שמשדר איכות ללא פשרות בידי הלקוח שלכם.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
