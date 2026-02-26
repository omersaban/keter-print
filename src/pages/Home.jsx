import React from "react";
import { Link } from "react-router-dom";
// שים לב: הייבוא עכשיו מתחיל באותיות גדולות ותואם לנתיבים שלנו!
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <div className="space-y-16 text-right">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                דפוס כתר בע"מ
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                מכרטיסי ביקור ועד באנרים ענקיים, אנו מספקים הדפסות באיכות יוצאת דופן ובזמני אספקה מהירים. החזון שלכם, מודפס באופן מושלם.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* הוחלף לשימוש בנתיב פשוט של React */}
                <Link to="/Order">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
                    הזמנה אונליין
                    <ArrowRight className="mr-2 w-5 h-5 transform -scale-x-100" />
                  </Button>
                </Link>
                <Link to="/About">
                  <Button variant="outline" size="lg" className="border-white bg-white text-blue-600 font-semibold px-8 py-4 text-lg">
                    למידע נוסף
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <Printer className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <Palette className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            שירותי הדפוס שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פתרונות הדפסה מקצועיים לכל הצרכים העסקיים והאישיים שלכם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              למה לבחור בדפוס כתר?
            </h2>
            <p className="text-xl text-gray-600">
              בואו להרגיש את ההבדל של שירותי דפוס מקצועיים
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה הלקוחות שלנו אומרים
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "שרה כהן",
                company: "סטודיו לעיצוב",
                text: "איכות ושירות יוצאים מן הכלל. חומרי השיווק שלנו תמיד נראים מקצועיים ומגיעים בזמן."
              },
              {
                name: "דוד לוי",
                company: "מסעדה מקומית",
                text: "דפוס כתר עזרו לנו ליצור תפריטים וחומרי קידום מכירות יפהפיים. ממליץ בחום על השירותים שלהם!"
              },
              {
                name: "רחל גרין",
                company: "מפיקת אירועים",
                text: "מהירים, אמינים ואיכותיים. הם הפכו לשותפי הדפוס הקבועים שלנו לכל האירועים."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            מוכנים להדפיס איתנו?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            התחילו עם פרויקט ההדפסה שלכם עוד היום. מהיר, מקצועי ובמחיר משתלם.
          </p>
          <Link to="/Order">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              התחילו הזמנה
              <ArrowRight className="mr-2 w-5 h-5 transform -scale-x-100" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
