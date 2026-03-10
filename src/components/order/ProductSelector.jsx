import React from "react";
import * as Icons from "lucide-react"; 
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* gap-8 הוא המפתח: הוא מותח את הגובה הכללי של הגריד כדי שיתאים לסיכום משמאל */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-2" dir="rtl">
      {products.map((product) => {
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* aspect-square מבטיח ריבוע. overflow-hidden מבטיח הגנה מחריגות טקסט */
            className={`relative cursor-pointer transition-all hover:shadow-lg border-2 aspect-square overflow-hidden ${
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
              <Badge className="absolute top-1 left-1 bg-yellow-400 text-black border-none text-[8px] px-1 py-0 z-10">
                פופולרי
              </Badge>
            )}
            
            {/* p-2.5 נותן מקסימום שטח לטקסט בתוך הריבוע המוגבל */}
            <CardContent className="p-2.5 flex flex-col items-center justify-center h-full text-center">
              {/* אייקון מוקטן מעט (w-8) כדי שלא ינגוס בשטח של הטקסט */}
              <div className={`w-8 h-8 rounded-lg ${product.color} flex items-center justify-center mb-1.5 text-white shadow-sm flex-shrink-0`}>
                <IconComponent size={18} />
              </div>
              
              {/* שם המוצר - text-[13px] */}
              <h3 className="text-[13px] font-bold text-slate-900 mb-0.5 leading-tight w-full px-1 truncate">
                {product.name}
              </h3>
              
              {/* התיאור - text-[10px] עם line-clamp בטוח ל-2 שורות */}
              <p className="text-[10px] text-slate-500 leading-[1.1] px-1 line-clamp-2">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
