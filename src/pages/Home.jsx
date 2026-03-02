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

  const googleReviews = [
    {
      name: "אילן ג.",
      date: "לפני חודש",
      text: "שירות מעולה, מהיר ומקצועי מאוד. מחירים הוגנים והכי חשוב - עומדים בזמנים. מומלץ בחום!",
    },
    {
      name: "סמדר ל.",
      date: "לפני 3 חודשים",
      text: "הגעתי להדפסה דחופה של פוסטרים, הצוות היה אדיב ועזר לי עם הגרפיקה. האיכות יצאה מדהימה.",
    },
    {
      name: "יובל כ.",
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
              {/* החלפת התמונה לתמונה החדשה והמתוקנת */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 h-[400px]">
                <img 
                  src="http://googleusercontent.com/image_generation_content/2" 
                  alt="Professional Printing Services Keter Print" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
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

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-bold text-xl text-slate-800">4.9</span>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.611,20.083L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C40.486,35.703,44,30.261,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified Review</span>
                  </div>
                </div>
              </LocalCard>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a 
               href="https://www.google.com/maps" 
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
            <LocalButton variant="cta" size="lg" className="shadow-xl shadow-blue-900/20">
              התחילו הזמנה עכשיו
            </LocalButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
