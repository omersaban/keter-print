import React from "react";
import { Link } from "react-router-dom";
import {
  Printer,
  Award,
  Clock,
  Truck,
  Palette,
  Users,
  ArrowRight,
  Star
} from "lucide-react";

// רכיבי עזר מקומיים לעקיפת שגיאות ייבוא
const LocalCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-lg border-0 overflow-hidden ${className}`}>
    {children}
  </div>
);

const LocalButton = ({ children, variant = "primary", className = "", size = "md" }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg";
  const variants = {
    primary: "bg-white text-blue-600 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
    cta: "bg-blue-600 text-white hover:bg-blue-700" 
  };
  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} cursor-pointer`}>
      {children}
    </div>
  );
};

export default function Home() {
  const services = [
    { icon: Printer, title: "ברושורים ופליירים", description: "חומרי שיווק איכותיים שיוצרים רושם", color: "bg-blue-500" },
    { icon: Palette, title: "כרטיסי ביקור", description: "כרטיסים מקצועיים שמייצגים את המותג שלך", color: "bg-purple-500" },
    { icon: Award, title: "באנרים ורול-אפים", description: "תצוגות מרשימות לאירועים וקידום מכירות", color: "bg-green-500" },
    { icon: Users, title: "לוחות שנה ופוסטרים", description: "עיצובים מותאמים אישית לעסקים ולפרטיים", color: "bg-orange-500" }
  ];

  const googleReviews = [
    { name: "אילן ג.", date: "לפני חודש", text: "שירות מעולה, מהיר ומקצועי מאוד. מחירים הוגנים והכי חשוב - עומדים בזמנים. מומלץ בחום!" },
    { name: "סמדר ל.", date: "לפני 3 חודשים", text: "הגעתי להדפסה דחופה של פוסטרים, הצוות היה אדיב ועזר לי עם הגרפיקה. האיכות יצאה מדהימה." },
    { name: "יובל כ.", date: "לפני שנה", text: "בית דפוס ותיק ואמין בלב תל אביב. תמיד יוצא מרוצה מהתוצאה הסופית. שירות אישי ונעים." }
  ];

  return (
    <div className="space-y-16 text-right" dir="rtl">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full bg-slate-100 min-h-[200px] flex items-center justify-center">
          {/* הנתיב המעודכן לפי המיקום החדש שציינת */}
          <img 
            src="/images/main-banner.png" 
            alt="דפוס כתר - באנר ראשי" 
            className="w-full h-auto block"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="p-20 text-blue-600 font-bold">הקובץ לא נמצא בנתיב: public/images/main-banner.png</div>';
            }}
          />
          
          {/* שכבת כפתורים לחיצה מעל התמונה */}
          <div className="absolute inset-0 flex items-end justify-start p-[5%] md:p-[8%]">
            <div className="flex flex-row-reverse gap-4">
               <Link to="/Order" className="w-[120px] h-[40px] md:w-[160px] md:h-[55px] opacity-0 cursor-pointer" />
               <Link to="/About" className="w-[100px] h-[40px] md:w-[130px] md:h-[55px] opacity-0 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">שירותי הדפוס שלנו</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">פתרונות הדפסה מקצועיים לכל הצרכים העסקיים והאישיים שלכם</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <LocalCard key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="p-8 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </LocalCard>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">מה הלקוחות שלנו אומרים</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {googleReviews.map((testimonial, index) => (
              <LocalCard key={index} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">{testimonial.name.charAt(0)}</div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-[10px] text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic text-right leading-relaxed">"{testimonial.text}"</p>
              </LocalCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
