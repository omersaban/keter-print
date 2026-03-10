import React from "react";
import * as Icons from "lucide-react"; 
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* פריסה של 5 עמודות עם Gap 8 - זה המפתח למתיחה של הגובה מול הצד השמאלי */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-2" dir="rtl">
      {products.map((product) => {
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* aspect-square שומר על הצורה. overflow-hidden מבטיח הגנה */
            className={`relative cursor-pointer transition-all hover:shadow-xl border-2 aspect-square group ${
              orderData.product_type === product.id 
              ? 'border-blue-600 bg-blue-50/30 shadow-md scale-[1.02]' 
              : 'border-transparent bg-white hover:border-gray-200'
            }`}
            onClick={() => {
              onInputChange('product_type', product.id);
              if (onNext) onNext(); 
            }}
          >
            {product.popular && (
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black border-none text-[9px] px-1.5 py-0.5 z-10 font-bold">
                פופולרי
              </Badge>
            )}
            
            {/* תוכן הריבוע: שימוש ב-p-4 ומרכוז מלא */}
            <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center">
              {/* אייקון - גודל בינוני w-11 h-11 נותן מספיק מקום לטקסט מתחתיו */}
              <div className={`w-11 h-11 rounded-xl ${product.color} flex items-center justify-center mb-3 text-white shadow-sm flex-shrink-0 transition-transform group-hover:scale-110`}>
                <IconComponent size={22} />
              </div>
              
              {/* שם המוצר - text-sm (14px) מודגש */}
              <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight w-full px-1">
                {product.name}
              </h3>
              
              {/* התיאור - text-[11px] - הגודל האידיאלי כדי שלא ייחתך בריבוע של 5 עמודות */}
              <p className="text-[11px] text-slate-500 leading-snug px-1 overflow-hidden">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
