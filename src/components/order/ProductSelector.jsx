import React from "react";
import * as Icons from "lucide-react"; // מייבא את כל האייקונים כמרחב שמות
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* שומר על 5 עמודות אבל עם Gap מעט גדול יותר כדי לתת נפח */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4" dir="rtl">
      {products.map((product) => {
        // שליפת האייקון הנכון בצורה דינמית
        const IconComponent = Icons[product.iconName] || Icons.Package;

        return (
          <Card 
            key={product.id}
            className={`relative cursor-pointer transition-all hover:shadow-lg border-2 ${
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
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black border-none text-[11px] px-2 py-0.5">
                פופולרי
              </Badge>
            )}
            
            {/* הגדלתי את ה-Padding ל-6 כדי להגדיל את נפח הריבוע */}
            <CardContent className="p-6 text-right">
              {/* הגדלתי את הריבוע של האייקון חזרה ל-w-12 h-12 */}
              <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center mb-4 text-white shadow-md`}>
                <IconComponent size={24} />
              </div>
              
              {/* הגדלתי את הפונטים ל-text-xl ו-text-sm */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{product.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
