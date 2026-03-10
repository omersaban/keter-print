import React from "react";
import * as Icons from "lucide-react"; // מייבא את כל האייקונים כמרחב שמות
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductSelector({ orderData, onInputChange, onNext }) {
  return (
    /* שינוי ל-5 עמודות ב-Desktop ו-4 ב-Tablet כדי להקטין את הריבועים */
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4" dir="rtl">
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
              if (onNext) onNext(); // אם תרצה שיעבור שלב מיד בלחיצה
            }}
          >
            {product.popular && (
              <Badge className="absolute top-1 left-1 bg-yellow-400 text-black border-none text-[10px] px-2 py-0">
                פופולרי
              </Badge>
            )}
            
            {/* הקטנת ה-Padding ל-4 */}
            <CardContent className="p-4 text-right">
              {/* הקטנת הריבוע של האייקון ל-w-10 h-10 */}
              <div className={`w-10 h-10 rounded-lg ${product.color} flex items-center justify-center mb-3 text-white shadow-md`}>
                <IconComponent size={20} />
              </div>
              
              {/* הקטנת הפונט ל-text-lg ו-text-xs */}
              <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{product.name}</h3>
              <p className="text-xs text-slate-500 leading-tight">
                {product.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
