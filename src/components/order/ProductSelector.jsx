import React from "react";
import * as Icons from "lucide-react"; 
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* 5 עמודות עם Gap של 5 - זה יגדיל את הפריסה הכללית */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2" dir="rtl">
      {products.map((product) => {
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* הסרנו את aspect-square והשתמשנו ב-min-h כדי למנוע חיתוך תוכן */
            className={`relative cursor-pointer transition-all hover:shadow-lg border-2 flex flex-col min-h-[160px] ${
              orderData.product_type === product.id 
              ? 'border-blue-600 bg-blue-50/30 shadow-md scale-[1.03]' 
              : 'border-transparent bg-white'
            }`}
            onClick={() => {
              onInputChange('product_type', product.id);
              if (onNext) onNext(); 
            }}
          >
            {product.popular && (
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black border-none text-[10px] px-1.5 py-0.5 z-10">
                פופולרי
              </Badge>
            )}
            
            {/* הגדלנו את ה-Padding ל-p-5 כדי להגדיל את הריבוע ויזואלית */}
            <CardContent className="p-5 flex flex-col items-center justify-center h-full text-center space-y-2">
              {/* אייקון בגודל 24px (w-12) */}
              <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                <IconComponent size={24} />
              </div>
              
              {/* שם המוצר - text-base (16px) */}
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                {product.name}
              </h3>
              
              {/* התיאור - text-xs (12px) - מוגדר כך שלא ייחתך */}
              <p className="text-[11px] text-slate-500 leading-tight line-clamp-2 min-h-[2rem]">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
