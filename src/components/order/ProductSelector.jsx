import React from "react";
import * as Icons from "lucide-react"; // מייבא את כל האייקונים כמרחב שמות
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* פריסה של 5 עמודות במסכים גדולים */
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4" dir="rtl">
      {products.map((product) => {
        // שליפת האייקון הנכון בצורה דינמית
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* aspect-square מבטיח שהכרטיס יהיה ריבוע שווה צלעות */
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
              <Badge className="absolute top-1 left-1 bg-yellow-400 text-black border-none text-[10px] px-1 py-0">
                פופולרי
              </Badge>
            )}
            
            {/* תוכן ממרכז בתוך הריבוע */}
            <CardContent className="p-2 text-center flex flex-col items-center justify-center">
              {/* אייקון מותאם לגודל הריבוע */}
              <div className={`w-10 h-10 rounded-lg ${product.color} flex items-center justify-center mb-2 text-white shadow-sm flex-shrink-0`}>
                <IconComponent size={20} />
              </div>
              
              {/* כותרת מותאמת */}
              <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight">{product.name}</h3>
              
              {/* תיאור קצר מאוד כדי שלא יגלוש מהריבוע */}
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
