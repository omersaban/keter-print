
import React from "react";
import { button } from "@/components/ui/button";
import { card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  Image as ImageIcon,
  Monitor,
  Bookmark,
  Tag,
  Package
} from "lucide-react";

const products = [
  {
    id: "brochure",
    name: "ברושורים",
    description: "ברושורים שיווקיים מקצועיים לעסק שלך",
    icon: FileText,
    color: "bg-blue-500",
    popular: true
  },
  {
    id: "flyer",
    name: "פליירים",
    description: "פליירים מרשימים לאירועים וקידום מכירות",
    icon: ImageIcon,
    color: "bg-green-500"
  },
  {
    id: "calendar",
    name: "לוחות שנה",
    description: "לוחות שנה מותאמים אישית לעסקים או לשימוש פרטי",
    icon: Calendar,
    color: "bg-purple-500"
  },
  {
    id: "roll_up",
    name: "רול-אפים",
    description: "מתקני תצוגה ניידים לתערוכות וכנסים",
    icon: Monitor,
    color: "bg-orange-500"
  },
  {
    id: "business_cards",
    name: "כרטיסי ביקור",
    description: "כרטיסי ביקור מקצועיים שיוצרים רושם",
    icon: CreditCard,
    color: "bg-indigo-500",
    popular: true
  },
  {
    id: "posters",
    name: "פוסטרים",
    description: "פוסטרים בפורמט גדול לפרסום ועיצוב",
    icon: Bookmark,
    color: "bg-red-500"
  },
  {
    id: "banners",
    name: "באנרים",
    description: "באנרים מותאמים אישית לאירועים ולעסקים",
    icon: Package,
    color: "bg-yellow-500"
  },
  {
    id: "stickers",
    name: "מדבקות",
    description: "מדבקות ותוויות מותאמות אישית לכל מטרה",
    icon: Tag,
    color: "bg-pink-500"
  }
];

export default function ProductSelector({ orderData, onInputChange, onNext }) {

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">בחרו את המוצר שלכם</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onInputChange('product_type', product.id)}
              className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${
                orderData.product_type === product.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {product.popular && (
                <div className="absolute -top-2 -left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  פופולרי
                </div>
              )}
              
              <div className={`w-12 h-12 ${product.color} rounded-xl flex items-center justify-center mb-4`}>
                <product.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button
            onClick={onNext}
            disabled={!orderData.product_type}
            className="bg-blue-600 hover:bg-blue-700 px-8"
          >
            הבא: מפרט טכני
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
