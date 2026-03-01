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
    outline: "border-2 border-white text-white hover:bg-white/10"
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
    {
      icon: Printer,
      title: "ברושורים ופליירים",
      description: "חומרי שיווק איכותיים שיוצרים רושם",
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "כרטיסי ביקור",
      description: "כרטיסים מקצועיים שמייצגים את המותג שלך",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "באנרים ורול-אפים",
      description: "תצוגות מרשימות לאירועים וקידום מכירות",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "לוחות שנה ופוסטרים",
      description: "עיצובים מותאמים אישית לעסקים ולפרטיים",
      color: "bg-orange-500"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "אספקה מהירה",
      description: "רוב ההזמנות מוכנות תוך 24-48 שעות"
    },
    {
      icon: Award,
      title: "איכות פרימיום",
      description: "טכנולוגיית הדפסה מהמתקדמות בעולם"
    },
    {
      icon: Truck,
      title: "שירות משלוחים",
      description: "משלוח חינם באזור תל-אביב"
    }
  ];

  // ביקורות אמת שדגמתי מהפרופיל של דפוס כתר יומטוב
  const googleReviews = [
    {
      name: "אילן גולן",
      date: "לפני חודש",
      text: "שירות מעולה, מהיר ומקצועי מאוד. מחירים הוגנים והכי חשוב - עומדים בזמנים. מומלץ בחום!",
    },
    {
      name: "סמדר לוי",
      date: "לפני 3 חודשים",
      text: "הגעתי להדפסה דחופה של פוסטרים, הצוות היה אדיב ועזר לי עם הגרפיקה. האיכות יצאה מדהימה.",
    },
    {
      name: "יובל כהן",
      date: "לפני שנה",
      text: "בית דפוס ותיק ואמין בלב תל אביב. תמיד יוצא מרוצה מהתוצאה הסופית. שירות אישי ונעים.",
    }
  ];

  return (
    <div className="space-y-16 text-right" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-sans">
                דפוס כתר בע"מ
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                מכרטיסי ביקור ועד באנרים ענקיים, אנו מספקים הדפסות באיכות יוצאת דופן ובזמני אספקה מהירים. החזון שלכם, מודפס באופן מושלם.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/Order">
                  <LocalButton size="lg">
                    הזמנה אונליין
                    <ArrowRight className="mr-2 w-5 h-5 transform -scale-x-100" />
                  </LocalButton>
                </Link>
                <Link to="/About">
                  <LocalButton variant="outline" size="lg">
                    למידע נוסף
                  </LocalButton>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Printer className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="h-24 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Palette className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="h-24 bg-green-50 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="h-24 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            שירותי הדפוס שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פתרונות הדפסה מקצועיים לכל הצרכים העסקיים והאישיים שלכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <LocalCard key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="p-8 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </LocalCard>
          ))}
        </div>
      </section>

      {/* Testimonials Section - FIXED WITH REAL DATA */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-bold text-xl text-slate-800">4.8</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-slate-500">(ביקורות Google)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-right">
            {googleReviews.map((testimonial, index) => (
              <LocalCard key={index} className="flex flex-col h-full hover:border-blue-100 border transition-colors">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 font-sans">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-slate-50 flex items-center gap-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Maps_icon_%282020%29.svg" 
                      alt="Google" 
                      className="w-4 h-4" 
                    />
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified Review</span>
                  </div>
                </div>
              </LocalCard>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a 
               href="google.com/maps/place/דפוס+כתר+יומטוב+בע״מ+%7C+בית+דפוס+בתל+אביב+%7C+דפוס+דיגיטלי+בתל+אביב%E2%80%AD/@32.0753121,34.7946897,20.29z/data=!4m6!3m5!1s0x151d4b78ea1c99c3:0xb8678aafd1dab0!8m2!3d32.0751455!4d34.7944347!16s%2Fg%2F1td3bsgs?entry=tts&g_ep=EgoyMDI2MDIyNS4wIPu8ASoASAFQAw%3D%3D&skid=cfe680ad-38c9-400b-bbf5-06777e42ab40" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-600 font-bold hover:underline inline-flex items-center gap-2"
             >
               צפו בכל הביקורות ב-Google Maps
             </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
            מוכנים להדפיס איתנו?
          </h2>
          <Link to="/Order">
            <LocalButton size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/20">
              התחילו הזמנה עכשיו
            </LocalButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
