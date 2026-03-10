import React from "react";
import * as Icons from "lucide-react"; // מייבא את כל האייקונים כמרחב שמות
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* פריסה של 5 עמודות עם מרווח מוגדל (gap-6) כדי למתוח את הגובה הכללי */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4" dir="rtl">
      {products.map((product) => {
        // שליפת האייקון הנכון בצורה דינמית
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* aspect-square שומר על צורה ריבועית מושלמת */
            className={`relative cursor-pointer transition-all hover:shadow-lg border-2 aspect-square flex flex-col justify-center ${
              orderData.product_type === product.id 
              ? 'border-blue-600 bg-blue-50/30' 
              : 'border-transparent bg-white'
            }`}
            onClick={() => {
              onInputChange('product_type', product.id);
              if (onNext) onNext(); 
            }}
          >
            {product.popular && (
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black border-none text-[10px] px-1.5 py-0.5">
                פופולרי
              </Badge>
            )}
            
            {/* תוכן הריבוע - מיושר לימין כבמקור עם Padding מותאם */}
            <CardContent className="p-4 text-right flex flex-col justify-center h-full">
              {/* אייקון בגודל המקורי */}
              <div className={`w-11 h-11 rounded-lg ${product.color} flex items-center justify-center mb-3 text-white shadow-md flex-shrink-0`}>
                <IconComponent size={22} />
              </div>
              
              {/* שם המוצר */}
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-tight">
                {product.name}
              </h3>
              
              {/* תיאור המוצר - הוחזר ומוגבל ל-2 שורות כדי שלא יחרוג מהריבוע */}
              <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
