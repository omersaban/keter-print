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

// רכיבי עזר מקומיים מעודכנים לסגנון Apple
const LocalCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-[20px] shadow-sm hover:shadow-md border border-apple-silver/50 transition-all duration-300 overflow-hidden ${className}`}>
    {children}
  </div>
);

const LocalButton = ({ children, variant = "primary", className = "", size = "md" }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full"; // עיגול מלא כמו אפל
  const variants = {
    primary: "bg-apple-blue text-white hover:bg-[#0077ed]",
    outline: "border border-apple-blue text-apple-blue hover:bg-apple-blue/5",
    cta: "bg-apple-blue text-white hover:bg-[#0077ed] shadow-lg shadow-blue-500/20"
  };
  const sizes = {
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-4 text-base"
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
      color: "text-apple-blue"
    },
    {
      icon: Palette,
      title: "כרטיסי ביקור",
      description: "כרטיסים מקצועיים שמייצגים את המותג שלך",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "באנרים ורול-אפים",
      description: "תצוגות מרשימות לאירועים וקידום מכירות",
      color: "text-emerald-600"
    },
    {
      icon: Users,
      title: "לוחות שנה ופוסטרים",
      description: "עיצובים מותאמים אישית לעסקים ולפרטיים",
      color: "text-orange-600"
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
    <div className="bg-apple-bg space-y-20 text-right" dir="rtl">
      {/* Hero Section - Apple Style */}
      <section className="relative pt-20 pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-apple-black tracking-tight mb-6 leading-tight">
            דפוס כתר. <br />
            <span className="text-apple-gray">החזון שלכם, מודפס מושלם.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray mb-10 max-w-2xl mx-auto leading-relaxed">
            מכרטיסי ביקור ועד פרויקטים ענקיים. איכות פרימיום בלב תל אביב עם ניסיון של מעל 40 שנה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Order">
              <LocalButton size="lg" variant="cta">
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
          
          {/* Hero Image / Graphic */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=1200&h=600&fit=crop" 
              alt="Premium Printing" 
              className="rounded-[32px] shadow-2xl border border-apple-silver"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-apple-black mb-4 tracking-tight">
            שירותי הדפוס שלנו
          </h2>
          <p className="text-lg text-apple-gray max-w-2xl mx-auto">
            פתרונות מקצועיים המותאמים בדיוק לצרכים שלכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <LocalCard key={index} className="p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className={`w-12 h-12 mb-6 flex items-center justify-center`}>
                <service.icon className={`w-10 h-10 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-apple-black mb-3 font-sans">
                {service.title}
              </h3>
              <p className="text-apple-gray text-sm leading-relaxed">
                {service.description}
              </p>
            </LocalCard>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-apple-bg py-24 border-y border-apple-silver/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-apple-black mb-4 tracking-tight">
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-bold text-2xl text-apple-black">4.9</span>
              <div className="flex text-apple-blue">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-apple-gray">(ביקורות Google)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-right">
            {googleReviews.map((testimonial, index) => (
              <LocalCard key={index} className="p-8 border-0 shadow-sm bg-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-apple-bg rounded-full flex items-center justify-center text-apple-blue font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-apple-black font-sans">{testimonial.name}</p>
                      <p className="text-xs text-apple-gray">{testimonial.date}</p>
                    </div>
                  </div>
                  <p className="text-apple-black leading-relaxed mb-8 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-apple-silver/50 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px">
                      <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1565c0" d="M43.611,20.083L43.611,20.083L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C40.486,35.703,44,30.261,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                    <span className="text-[10px] text-apple-gray font-bold uppercase tracking-wider">Verified Review</span>
                  </div>
                </div>
              </LocalCard>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a 
               href="https://google.com/maps" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-apple-blue font-bold hover:underline inline-flex items-center gap-2"
             >
               צפו בביקורות נוספות ב-Google
             </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Apple "Pro" Style */}
      <section className="bg-apple-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            הגיע הזמן להדפיס באיכות Pro.
          </h2>
          <Link to="/Order">
            <LocalButton variant="cta" size="lg" className="bg-white text-apple-black hover:bg-apple-bg">
              התחילו הזמנה עכשיו
            </LocalButton>
          </Link>
          <p className="mt-6 text-apple-gray text-sm italic">
            משלוח חינם בהזמנות מעל 500₪ באזור תל אביב
          </p>
        </div>
      </section>
    </div>
  );
}
