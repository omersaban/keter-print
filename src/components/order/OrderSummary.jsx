import React from "react";
import * as Icons from "lucide-react"; 
import { products } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Hash, Check, Info } from "lucide-react";

export default function OrderSummary({ orderData }) {
  const selectedProduct = products.find(p => p.id === orderData.product_type);
  
  // שליפת האייקון הדינמי של המוצר או אייקון ברירת מחדל
  const ProductIcon = selectedProduct ? Icons[selectedProduct.iconName] : Icons.Package;

  return (
    <Card className="border-0 shadow-xl sticky top-6 text-right overflow-hidden" dir="rtl">
      {/* כותרת עם צבע משתנה לפי בחירת המוצר */}
      <CardHeader className={`${selectedProduct ? selectedProduct.color : 'bg-slate-900'} text-white transition-colors duration-500`}>
        <CardTitle className="text-lg flex items-center gap-2">
          <ProductIcon className="w-5 h-5" /> 
          <span>סיכום הזמנה: {selectedProduct?.name || "חדשה"}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6 bg-white">
        {/* פירוט המפרט */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-slate-50 pb-2">
            <span className="text-slate-500 text-sm">מוצר:</span>
            <span className="font-bold text-slate-800">{selectedProduct?.name || "-"}</span>
          </div>

          {(orderData.width_cm || orderData.height_cm) && (
            <div className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-500 text-sm">מידות:</span>
              <span className="font-bold text-slate-800 flex items-center gap-1">
                {orderData.width_cm || 0}x{orderData.height_cm || 0} ס"מ
              </span>
            </div>
          )}

          <div className="flex justify-between items-center border-b border-slate-50 pb-2">
            <span className="text-slate-500 text-sm">כמות:</span>
            <span className="font-bold text-slate-800">{orderData.quantity} יחידות</span>
          </div>
        </div>

        {/* בוקס מידע שיווקי */}
        <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            שים לב: המפרט יישלח לבדיקת מחלקת הגרפיקה. אנו נחזור אליך טלפונית לאישור סופי ומחיר.
          </p>
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
            <Check className="w-4 h-4" />
            <span>הזמנה מוכנה לשליחה</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
