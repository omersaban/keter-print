import React, { useEffect } from 'react';

export default function AccessibilityStatement() {
  useEffect(() => {
    document.title = "דפוס כתר - הצהרת נגישות";
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-6 text-right" dir="rtl">
      <div className="max-w-3xl mx-auto border p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-6 border-b pb-4">הצהרת נגישות - דפוס כתר</h1>
        
        <section className="space-y-4 text-gray-700">
          <p>אנחנו בדפוס כתר רואים חשיבות עליונה בהנגשת האתר לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.</p>
          
          <h2 className="text-xl font-bold mt-6">סטטוס נגישות</h2>
          <p>האתר עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלויות (התאמות נגישות לשירות), התשע"ג 2013, ברמה של AA לפי תקן WCAG 2.1.</p>
          
          <h2 className="text-xl font-bold mt-6">מה הונגש באתר?</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>תפריט נגישות צף המאפשר שינוי ניגודיות, הגדלת פונטים ושחור-לבן.</li>
            <li>התאמה מלאה לניווט במקלדת.</li>
            <li>תמיכה בקוראי מסך.</li>
            <li>הדגשת קישורים וסמן עכבר מוגדל.</li>
          </ul>

          <h2 className="text-xl font-bold mt-6">פרטי רכז נגישות</h2>
          <p>במידה ומצאתם תקלה או שיש לכם הצעה לשיפור, ניתן לפנות לרכז הנגישות:</p>
          <p className="font-medium">שם: עומר סבן</p>
          <p className="font-medium">אימייל: keter-ta@zahav.net.il</p>
          
          <p className="text-sm text-gray-400 mt-10 italic">עדכון אחרון: פברואר 2026</p>
        </section>
      </div>
    </div>
  );
}
