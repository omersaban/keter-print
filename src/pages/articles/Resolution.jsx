import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout } from 'lucide-react';

export default function Resolution() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-right font-sans" dir="rtl">
      <Link to="/Articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors">
        <ArrowRight className="w-4 h-4 ml-2" />
        חזרה למרכז הידע
      </Link>

      <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8 text-blue-600">
          <Layout className="w-8 h-8" />
          <span className="bg-blue-50 text-blue-700 py-1.5 px-4 rounded-full text-sm font-bold tracking-wider">טכנולוגיה</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
          רזולוציה אופטית מול נתפסת: מעבר ל-DPI
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            אחד המיתוסים הנפוצים ביותר בעולם הגרפיקה והדפוס הוא ש"כמה שיותר DPI, ככה יותר טוב". אך האם עין אנושית באמת מסוגלת להבחין בהבדל שבין 600 ל-1200 DPI? התשובה טמונה בהבנת המנגנון שבו מכונות דפוס מייצרות תמונה, ובאופן שבו המוח שלנו מפענח אותה.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            המדע של ה-Halftoning (רשת נקודות)
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            בניגוד למסך מחשב שיכול להאיר פיקסל בכל צבע ורמת בהירות אפשרית, למכונת דפוס יש מגבלה פיזיקלית: היא יכולה רק להניח טיפת דיו על הנייר, או לא להניח אותה כלל. כדי ליצור אשליה של גוונים רציפים, כגון תכלת בהיר או ורוד עדין, הדפוס משתמש בטכניקה הנקראת Halftoning. 
          </p>
          
          <p className="text-lg text-gray-800 leading-loose">
            בשיטה זו, התמונה מפורקת לרשת של נקודות זעירות בצבעי היסוד (CMYK). על ידי שינוי הגודל והצפיפות של הנקודות הללו, אנו "מרמים" את העין האנושית. כאשר אנו מתבוננים בנייר ממרחק קריאה רגיל, המוח שלנו ממזג את הנקודות הבודידות ורואה משטח צבע חלק ורציף.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            האם 1200 DPI באמת נראה טוב יותר מ-600?
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            התשובה תלויה בסוג התוכן. עבור טקסטים קטנים מאוד (מתחת ל-6 נקודות) או גרפיקה וקטורית עם קווים דקים וחדים (Line Art), רזולוציה של 1200 DPI אכן תפיק קצוות חלקים יותר ותמנע מראה מדורג. אולם, כאשר מדובר בתמונות פוטוגרפיות, החוקים משתנים. 
          </p>

          <p className="text-lg text-gray-800 leading-loose">
            בתמונות, הגורם המכריע הוא ה-LPI (Lines Per Inch), כלומר צפיפות רשת הנקודות. מעבר לרף מסוים (לרוב סביב 300-400 DPI בקובץ המקור), העין האנושית פשוט אינה מסוגלת להבחין בפרטים נוספים. העמסת המכונה בקבצים של 1200 DPI עבור תמונות לא תשפר את התוצאה הסופית, אלא רק תאט את תהליך עיבוד הנתונים ותכביד על המערכת ללא הצדקה אופטית.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            השפעת הנייר על הרזולוציה הנתפסת
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            פקטור קריטי נוסף הוא סוג מצע ההדפסה. הדפסה ברזולוציה קיצונית על נייר נטול עץ (Uncoated) היא חסרת תועלת, שכן הנייר סופג את הדיו והנקודות הזעירות מתרחבות ומתמזגות זו בזו. רק ניירות כרומו מצופים ואיכותיים מסוגלים להחזיק את המבנה המדויק של נקודות רשת קטנטנות המופקות ברזולוציות הגבוהות ביותר.
          </p>

          <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl mt-10 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">איך אנחנו עושים את זה בדפוס כתר?</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              בדפוס כתר, אנו לא משאירים את הרזולוציה ליד המקרה. מערכות העיבוד שלנו (RIP) מנתחות כל קובץ בנפרד ומבצעות אופטימיזציה חכמה: הן מחילות רזולוציה מקסימלית ואלגוריתמים של החלקת קצוות עבור טקסטים ווקטורים, במקביל ליצירת רשתות Halftone מדויקות ומותאמות-נייר עבור תמונות. כך אנו מבטיחים שכל עבודה שיוצאת מהמכונות שלנו תיראה חדה, חיה ומושלמת לעין האנושית, תוך שמירה על יעילות ומהירות הפקה מקסימלית.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
