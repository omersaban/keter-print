import React from "react";
import * as Icons from "lucide-react"; // מייבא את כל האייקונים כמרחב שמות
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* שמירה על 5 עמודות, הגדלת המרווח (gap) ל-6 כדי למתוח את הגובה הכללי */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2" dir="rtl">
      {products.map((product) => {
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            /* aspect-square שומר על ריבוע. הוספתי h-full לוודא מתיחה מקסימלית */
            className={`relative cursor-pointer transition-all hover:shadow-lg border-2 aspect-square flex flex-col ${
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
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black border-none text-[10px] px-1.5 py-0.5 z-10">
                פופולרי
              </Badge>
            )}
            
            {/* הגדלתי את ה-padding ל-5 כדי שהריבוע יהיה "מלא" יותר וגדול יותר ויזואלית */}
            <CardContent className="p-5 text-center flex flex-col items-center justify-center h-full">
              {/* אייקון בגודל בינוני */}
              <div className={`w-11 h-11 rounded-xl ${product.color} flex items-center justify-center mb-3 text-white shadow-sm flex-shrink-0`}>
                <IconComponent size={22} />
              </div>
              
              {/* כותרת מודגשת */}
              <h3 className="text-base font-bold text-slate-900 mb-1 leading-tight">{product.name}</h3>
              
              {/* תיאור קצר - line-clamp שומר על 2 שורות גובה קבועות */}
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
