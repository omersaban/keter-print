import React from "react";
import * as Icons from "lucide-react"; 
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* פריסה של 5 עמודות עם Gap 8 - המרווח הגדול מותח את הגובה הכללי מול הצד השמאלי */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-2" dir="rtl">
      {products.map((product) => {
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* החלפנו את aspect-square ב-min-h-[180px] כדי להבטיח גודל גדול וקבוע שלא חותך טקסט */
            className={`relative cursor-pointer transition-all hover:shadow-xl border-2 flex flex-col min-h-[200px] ${
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
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black border-none text-[10px] px-2 py-0.5 z-10 font-bold">
                פופולרי
              </Badge>
            )}
            
            {/* תוכן הריבוע: Padding מרווח (p-5) ומרכוז מלא */}
            <CardContent className="p-5 flex flex-col items-center justify-center h-full text-center">
              {/* אייקון - גודל ונוכחות w-12 h-12 */}
              <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center mb-4 text-white shadow-sm flex-shrink-0`}>
                <IconComponent size={24} />
              </div>
              
              {/* שם המוצר - text-sm (14px) */}
              <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight w-full px-1">
                {product.name}
              </h3>
              
              {/* תיאור המוצר - וידוא שהטקסט מופיע במלואו (text-[11px]) */}
              <p className="text-[11px] text-slate-500 leading-snug px-1">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
