import React from "react";
import * as Icons from "lucide-react"; 
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* 5 עמודות עם Gap מוגדל (8) כדי למתוח את התצוגה לגובה של הכרטיס משמאל */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-2" dir="rtl">
      {products.map((product) => {
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* aspect-square שומר על הצורה. הוספתי scale קטן ב-hover להדגשת הגודל */
            className={`relative cursor-pointer transition-all hover:shadow-lg border-2 aspect-square flex flex-col justify-center overflow-hidden hover:scale-[1.01] ${
              orderData.product_type === product.id 
              ? 'border-blue-600 bg-blue-50/30 shadow-md scale-[1.02]' 
              : 'border-transparent bg-white'
            }`}
            onClick={() => {
              onInputChange('product_type', product.id);
              if (onNext) onNext(); 
            }}
          >
            {product.popular && (
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black border-none text-[10px] px-2 py-0.5 z-10">
                פופולרי
              </Badge>
            )}
            
            {/* הגדלת ה-Padding ל-p-5 מגדילה את נפח הריבוע ויזואלית בכ-15% */}
            <CardContent className="p-5 flex flex-col items-center justify-center h-full text-center">
              {/* הגדלת האייקון ל-w-12 (מ-w-10) */}
              <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center mb-3 text-white shadow-sm flex-shrink-0`}>
                <IconComponent size={24} />
              </div>
              
              {/* הגדלת הכותרת ל-text-base (מ-text-sm) */}
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-tight w-full truncate px-1">
                {product.name}
              </h3>
              
              {/* הגדלת התיאור ל-text-[11px] (מ-10px) והצגתו ב-2 שורות קבועות */}
              <p className="text-[11px] text-slate-500 leading-tight line-clamp-2 px-1 opacity-90">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
