import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Printer } from 'lucide-react';

export default function OffsetArticle() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-right font-sans" dir="rtl">
      {/* כפתור חזרה */}
      <Link to="/Articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors">
        <ArrowRight className="w-4 h-4 ml-2" />
        חזרה למרכז הידע
      </Link>

      <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8 text-blue-600">
          <Printer className="w-8 h-8" />
          <span className="bg-blue-50 text-blue-700 py-1.5 px-4 rounded-full text-sm font-bold tracking-wider">כימיה ומכניקה</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
          מדע האופסט: למה שמן ומים לא מתערבבים, ואיך זה מדפיס מיליוני עותקים?
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            בעוד שהדפוס הדיגיטלי כבש את תחום הריצות הקצרות והמידע המשתנה, דפוס האופסט (Offset Lithography) נותר המלך הבלתי מעורער של הכמויות הגדולות ואיכות הצבע העילאית. אך בניגוד למדפסת הביתית שמשפריצה דיו, האופסט מבוסס על חוק כימי פשוט ועתיק יומין.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            העיקרון הליתוגרפי: משחק של דחייה ומשיכה
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            לב ליבו של התהליך הוא חוק טבע בסיסי: <strong className="font-bold text-gray-900">מים ושמן אינם מתערבבים</strong>. התהליך מתחיל בלוח אלומיניום דקיק (הגלופה) שעובר צריבה בלייזר. האזורים שנצרבו (הטקסט והתמונות) מקבלים תכונה כימית המושכת שמן (Oleophilic), בעוד שהאזורים הריקים מקבלים תכונה המושכת מים ודוחה שמן (Hydrophilic).
          </p>
          <p className="text-lg text-gray-800 leading-loose">
            כשהלוח מסתובב במכונה, הוא נרטב קודם בתמיסת מים (Dampening solution). המים נצמדים רק לאזורים הריקים. מיד לאחר מכן, הלוח בא במגע עם גלילי הדיו (שהוא על בסיס שומני). הדיו נדחה מהאזורים הרטובים ונדבק אך ורק לאזורים הצרובים. 
          </p>

          <h2 className="text-2xl font-bold text-blue-900 pt-6 mb-4 border-r-4 border-blue-600 pr-4">
            למה קוראים לזה "אופסט" (העברה)?
          </h2>
          
          <p className="text-lg text-gray-800 leading-loose">
            הטעות הנפוצה היא לחשוב שלוח האלומיניום מדפיס ישירות על הנייר. בפועל, אם מתכת תפגוש נייר במהירות של עשרות אלפי גיליונות בשעה, הנייר ייקרע והלוח יישחק מיד.
          </p>
          
          <p className="text-lg text-gray-800 leading-loose">
            כאן נכנס שלב ה"אופסט": לוח האלומיניום מעביר (Offsets) את תמונת הדיו אל גליל ביניים עטוף בשמיכת גומי גמישה (Blanket cylinder). הגומי הרך הוא זה שפוגש את הנייר ולוחץ את הדיו אל תוך הסיבים שלו. הגמישות של הגומי מאפשרת הדפסה חלקה גם על ניירות עם מרקם מחוספס או בטקסטורות מיוחדות.
          </p>

          <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl mt-10 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">סיכום ללקוח: מתי נבחר באופסט?</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              דפוס אופסט הוא הבחירה המנצחת להדפסות מסחריות (מעל 1,000 עותקים של פליירים, קטלוגים או מגזינים), שכן ככל שמדפיסים יותר – המחיר ליחידה צונח. בנוסף, זוהי השיטה היחידה המאפשרת שימוש בצבעי פנטון (Pantone) אמיתיים, צבעים מטאליים וזהב, ברמת דיוק וחדות ששום מכונה דיגיטלית עדיין אינה יכולה לשחזר.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
