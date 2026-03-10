import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function SpeedVsQuality() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-right font-sans" dir="rtl">
      <Link to="/Articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors">
        <ArrowRight className="w-4 h-4 ml-2" />
        חזרה למרכז הידע
      </Link>

      <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8 text-blue-600">
          <BookOpen className="w-8 h-8" />
          <span className="bg-blue-50 text-blue-700 py-1.5 px-4 rounded-full text-sm font-bold tracking-wider">טכנולוגיה ותהליכים</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
          מהירות מול איכות בעבודות דפוס ובקרת איכות
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            הדילמה המוכרת ביותר בתעשיית הדפוס היא המאבק התמידי בין הצורך באספקה מהירה לבין הדרישה לאיכות ללא פשרות. מחקרים בטכנולוגיות דפוס מצביעים על כך שמהירות המכונה משפיעה באופן ישיר על הפיזיקה של העברת הדיו ועל התוצר הסופי המונח על הנייר.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            התרחבות נקודת הרשת (Dot Gain)
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            כאשר מגבירים את מהירות ההדפסה נוצרת תופעה פיזיקלית המוכרת בשם התרחבות נקודת הרשת. מחקרים מראים כי במהירויות הפקה גבוהות, הדיו נדחס ומתפשט על גבי הנייר מעבר לגבולות הנקודה המקורית שהוגדרה בלוח ההדפסה. כתוצאה מתופעה זו, אזורים כהים הופכים לאטומים מדי, פרטים עדינים בתמונה הולכים לאיבוד ונוצרת סטייה ניכרת במרחב הצבע המתוכנן לעומת התוצאה בפועל.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            סטיית רג'יסטר וצמיגות הדיו
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            מהירות גבוהה משפיעה גם על צמיגות הדיו ועל הדיוק בהנחת ארבעת צבעי היסוד אחד על גבי השני. ככל שהנייר נע מהר יותר בתוך המכונה, גדל הסיכוי לסטיית רג'יסטר, מצב שבו הצבעים אינם חופפים באופן מושלם ונוצר טשטוש סביב טקסטים ואובייקטים מודפסים.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            מערכות בקרת איכות בזמן אמת
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            כאן נכנסת לתמונה החשיבות הקריטית של בקרת איכות. מפעלי דפוס מקצועיים משלבים מערכות מדידה מתקדמות הדוגמות את צפיפות הדיו בזמן אמת תוך כדי ריצת המכונה. בקרת איכות רציפה זו מתעדת סטיות צבע ומאפשרת פיצוי מיידי על השפעות המהירות. על ידי שילוב של ניטור חכם, בחירת נייר מתאים ושליטה בלחצי ההדפסה, ניתן להגיע לנקודת האיזון המדויקת שבה תפוקה מהירה אינה פוגעת בחדות ובאיכות התמונה.
          </p>

          <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl mt-10 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">איך אנחנו עושים את זה בדפוס כתר?</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              בדפוס כתר, אנו מיישמים עקרונות אלו הלכה למעשה כדי לייעל את העבודה ולהעניק ללקוחותינו זמני אספקה מהירים ללא כל התפשרות על האיכות. אנו משתמשים במכונות בעלות מערכות כיול אוטומטיות ובקרי צבע ממוחשבים הפועלים בזמן אמת. תהליך העבודה שלנו מנוהל בקפידה משלב קבלת הקובץ ועד לגימור הסופי, מה שמאפשר לנו להדפיס במהירות אופטימלית תוך הבטחת רזולוציה מושלמת, התאמת צבעים מדויקת וגימור מוקפד בכל פרויקט.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
