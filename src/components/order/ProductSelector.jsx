import React from "react";
import * as Icons from "lucide-react"; 
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* 5 עמודות עם מרווח (gap) גדול של 6 כדי למתוח את הגובה הכללי */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2" dir="rtl">
      {products.map((product) => {
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* aspect-square מבטיח ריבוע. h-full ו-min-h-0 מונעים קריסה של הגובה */
            className={`relative cursor-pointer transition-all hover:shadow-lg border-2 aspect-square min-h-0 ${
              orderData.product_type === product.id 
              ? 'border-blue-600 bg-blue-50/30 shadow-md' 
              : 'border-transparent bg-white'
            }`}
            onClick={() => {
              onInputChange('product_type', product.id);
              if (onNext) onNext(); 
            }}
          >
            {product.popular && (
              <Badge className="absolute top-1.5 left-1.5 bg-yellow-400 text-black border-none text-[9px] px-1.5 py-0.5 z-10">
                פופולרי
              </Badge>
            )}
            
            {/* מרכזנו את כל התוכן כדי שייכנס בריבוע בלי להיחתך */}
            <CardContent className="p-3 flex flex-col items-center justify-center h-full text-center overflow-hidden">
              {/* אייקון מוקטן מעט כדי להשאיר מקום לתיאור */}
              <div className={`w-10 h-10 rounded-lg ${product.color} flex items-center justify-center mb-2 text-white shadow-sm flex-shrink-0`}>
                <IconComponent size={20} />
              </div>
              
              {/* שם המוצר - text-sm כדי שלא יתפוס יותר משורה אחת */}
              <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight truncate w-full">
                {product.name}
              </h3>
              
              {/* תיאור המוצר - text-[10px] ו-line-clamp מוודאים שזה נכנס בריבוע */}
              <p className="text-[10px] text-slate-500 leading-tight line-clamp-2 px-1">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
