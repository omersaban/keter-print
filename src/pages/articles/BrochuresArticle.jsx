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

      <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8 text-blue-600">
          <BookOpen className="w-8 h-8" />
          <span className="bg-blue-50 text-blue-700 py-1.5 px-4 rounded-full text-sm font-bold tracking-wider">מכניקה והנדסה</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
          הנדסת הנייר: הפיזיקה של קיפול ברושורים ומניעת שבירת סיבים
        </h1>
        
        {/* תוכן המאמר - עיצוב מחודש וקריא יותר */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            במבט ראשון, ברושור נראה כמו מוצר פשוט – דף נייר עם הדפסה יפה שמקופל לשניים או לשלושה חלקים. אך מאחורי הקלעים, הפיכת מצע דו-ממדי קשיח למבנה תלת-ממדי גמיש דורשת הבנה מעמיקה בהנדסת חומרים, מתח פנים, וכיווניות סיבים.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            כיוון סיבי הנייר (Paper Grain) - סוד הקיפול המושלם
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            נייר מיוצר בתהליך שבו עיסת תאית מוזרמת במהירות על גבי רשת נעה. תנועה זו גורמת לרוב סיבי העץ להסתדר באותו כיוון – זהו "כיוון הסיבים" (Grain Direction).
          </p>
          <p className="text-lg text-gray-800 leading-loose">
            כאשר אנו מתכננים ברושור, כלל הברזל הוא <strong className="font-bold text-gray-900">לקפל במקביל לכיוון הסיבים</strong>. קיפול נגד כיוון הסיבים מפעיל מאמץ מתיחה אדיר על פני השטח של הנייר. התוצאה? מיקרו-סדקים בציפוי הפולימרי של הנייר ובשכבת הדיו, תופעה המוכרת בתעשייה כ"שבירה" (Cracking) שפוגמת משמעותית בנראות המוצר.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            הפתרון המכני: תהליך הביג (Scoring & Creasing)
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            כאשר אנו נדרשים להדפיס ברושורים על ניירות עבים (200 גרם ומעלה), אפילו קיפול עם כיוון הסיבים אינו מספיק. כאן נכנסת לפעולה מכניקת ה"ביג" (Crease).
          </p>
          
          <p className="text-lg text-gray-800 leading-loose">
            בתהליך זה, במקום פשוט לכופף את הנייר, אנו משתמשים בלהב מתכת קהה שדוחס את הנייר לתוך תעלה תואמת. פעולה זו משנה את המבנה הפנימי של הנייר: היא מחלישה במכוון ובצורה מבוקרת את החיבורים בין הסיבים באזור הקיפול, מה שמאפשר לנייר להתקפל כמעט ללא התנגדות מבלי לקרוע את השכבה החיצונית המודפסת.
          </p>

          <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl mt-10 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">לסיכום:</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              תכנון נכון של ברושור בבית הדפוס לוקח בחשבון את משקל הנייר, סוג הציפוי (למינציה מבריקה/מט או לכה), ואת כיוון הסיבים. שילוב מדויק של פרמטרים אלו מבטיח מוצר סופי אלגנטי, עמיד, שמשדר איכות ללא פשרות בידי הלקוח שלכם.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
