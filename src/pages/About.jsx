import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Award, 
  Users,
  History,
  Target
} from "lucide-react";

export default function About() {
  // עדכון כותרת העמוד בלשונית הדפדפן
  useEffect(() => {
    document.title = "אודות";
  }, []);

  // הגדרת עיצוב כרטיס מקומי
  const CardWrapper = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );

  const values = [
    {
      icon: Award,
      title: "איכות לפני הכל",
      description: "אנו משתמשים רק בחומרים האיכותיים ביותר ובטכנולוגיית הדפסה מתקדמת כדי להבטיח שכל פרויקט עומד בסטנדרטים הגבוהים ביותר."
    },
    {
      icon: Clock,
      title: "עמידה בזמנים",
      description: "אנו מבינים שלוחות זמנים הם קריטיים. התהליכים היעילים שלנו מבטיחים שההזמנות שלכם יושלמו בזמן, כל פעם מחדש."
    },
    {
      icon: Users,
      title: "שירות לקוחות",
      description: "הצוות המנוסה שלנו מספק שירות אישי וייעוץ מומחה לכל צרכי ההדפסה שלכם."
    },
    {
      icon: Target,
      title: "מחירים תחרותיים",
      description: "דפוס איכותי לא חייב להיות יקר. אנו מציעים מחירים תחרותיים מבלי להתפשר על האיכות."
    }
  ];

  return (
    <div className="space-y-16 text-right" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
                אודות דפוס כתר
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed italic border-r-4 border-blue-200 pr-4">
                ממוקם בלב תל אביב, דפוס כתר משרת את הקהילה עם שירותי דפוס מקצועיים כבר למעלה מ-40 שנה. אנו משלבים אומנות מסורתית עם טכנולוגיה מודרנית כדי לספק תוצאות יוצאות דופן.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2 font-sans">40+</div>
                  <div className="text-gray-600 font-medium">שנות ניסיון</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2 font-sans">5000+</div>
                  <div className="text-gray-600 font-medium">לקוחות מרוצים</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-4 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop" 
                  alt="סדנת דפוס כתר"
                  className="w-full h-64 object-cover rounded-2xl mb-4 shadow-inner"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 font-sans">הסדנה שלנו</h3>
                  <p className="text-gray-600">ציוד הדפסה מהמתקדמים בעולם</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <History className="w-8 h-8 text-blue-600 ml-3" />
              <h2 className="text-3xl font-bold text-gray-900 font-sans">הסיפור שלנו</h2>
            </div>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                דפוס כתר, הפועל בלב תל אביב למעלה מ-40 שנה, הוא מוסד ותיק ומוערך של איכות ומקצועיות. התחלנו כעסק קטן, ועם השנים צמחנו והתפתחנו, תוך שאנו שומרים על אותם ערכי ליבה: אמינות, שירות אישי, והתחייבות בלתי מתפשרת לתוצאה המושלמת.
              </p>
              <p>
                הניסיון רב השנים שלנו מאפשר לנו להעניק פתרונות יצירתיים ומדויקים לכל פרויקט, מהזמנה קטנה ועד להפקה מורכבת.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop" 
              alt="תהליך הדפסה"
              className="w-full h-80 object-cover rounded-3xl shadow-xl border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
              הערכים שלנו
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              הערכים שלנו מנחים כל מה שאנחנו עושים, מכרטיס הביקור הקטן ביותר ועד לבאנר הגדול ביותר.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <CardWrapper key={index} className="p-8 text-center hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-sans">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed italic">
                  {value.description}
                </p>
              </CardWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Google Maps - FIXED PIN SOLUTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 pb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans tracking-tight">בואו לבקר אותנו</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          <div className="flex flex-col gap-6 justify-between">
            <CardWrapper className="p-6 hover:border-blue-200 transition-all shadow-sm border-blue-50">
              <div className="flex items-start gap-4 text-right">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans">כתובת</h3>
                  <p className="text-gray-600 font-medium">בן שמן 6, תל אביב-יפו, 6744233</p>
                </div>
              </div>
            </CardWrapper>

            <CardWrapper className="p-6 hover:border-blue-200 transition-all shadow-sm border-blue-50">
              <div className="flex items-start gap-4 text-right">
                <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans">טלפון</h3>
                  <p className="text-gray-600 font-medium tracking-wider" dir="ltr">03-561-2165</p>
                </div>
              </div>
            </CardWrapper>

            <CardWrapper className="p-6 hover:border-blue-200 transition-all shadow-sm border-blue-50">
              <div className="flex items-start gap-4 text-right">
                <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans">שעות פעילות</h3>
                  <p className="text-gray-600 font-medium tracking-wide">א' - ה': 07:00 - 15:00</p>
                </div>
              </div>
            </CardWrapper>
            
            <a 
              href="https://www.waze.com/en/live-map/directions/%D7%91%D7%9F-%D7%A9%D7%9E%D7%9F-6-%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95?navigate=yes&place=w.22806849.228002952.42583" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#33ccff] text-white font-bold py-5 rounded-2xl hover:bg-[#2dbbe9] transition-all shadow-lg hover:shadow-xl mt-4 font-sans text-lg"
            >
              ניווט ב-Waze
            </a>
          </div>

          {/* Google Maps Embed - Place ID Mode for Guaranteed Pin */}
          <div className="w-full h-full min-h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative bg-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.2438666743654!2d34.79468973056576!3d32.075312106038346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b78ea1c99c3%3A0xb8678aafd1dab0!2z15PXpNeV16Eg15vXqteoINeZ15XXnteY15XXkSDXkdei17TXniB8INeR15nXqiDXk9ek15XXoSDXkdeq15wg15DXkdeZ15EgfCDXk9ek15XXoSDXk9eZ15LXmdeY15zXmSDXkdeq15wg15DXkdeZ15E!5e0!3m2!1siw!2sil!4v1772372687155!5m2!1siw!2sil"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="מיקום דפוס כתר יומטוב בע''מ"
              className="grayscale-[15%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
