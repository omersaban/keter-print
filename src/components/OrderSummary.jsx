import React from "react";
import { Package, Ruler, Palette, Hash, CheckCircle2 } from "lucide-react";

const productNames = {
  brochure: "ברושורים",
  flyer: "פליירים", 
  calendar: "לוחות שנה",
  roll_up: "רול-אפים",
  business_cards: "כרטיסי ביקור",
  posters: "פוסטרים",
  banners: "באנרים",
  stickers: "מדבקות"
};

const paperTypes = {
  standard: "נייר סטנדרטי",
  premium: "נייר פרימיום",
  glossy: "גימור מבריק",
  matte: "גימור מט",
  canvas: "בד קנבס"
};

export default function OrderSummary({ orderData }) {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 sticky top-24 overflow-hidden text-right" dir="rtl">
      <div className="bg-gray-50 p-5 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
           סיכום הזמנה
        </h3>
      </div>
      <div className="p-6 space-y-6">
        {orderData.product_type ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold">מוצר נבחר</p>
              <p className="font-semibold text-gray-900">{productNames[orderData.product_type] || orderData.product_type}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 italic">טרם נבחר מוצר...</p>
        )}

        {(orderData.width_cm || orderData.height_cm) && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Ruler className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold">מידות (ס"מ)</p>
              <p className="font-semibold text-gray-900" dir="ltr">
                {orderData.width_cm || "?"} × {orderData.height_cm || "?"}
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Hash className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold">כמות</p>
            <p className="font-semibold text-gray-900">{orderData.quantity || 1} יחידות</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
           <div className="flex items-center justify-between mb-4">
             <span className="text-sm font-bold text-gray-900">סוג הדפסה:</span>
             <span className={`px-3 py-1 rounded-full text-xs font-bold ${orderData.color_type === 'color' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
               {orderData.color_type === 'color' ? 'צבע מלא' : 'שחור-לבן'}
             </span>
           </div>
        </div>

        <div className="bg-blue-600 rounded-xl p-4 text-white text-center shadow-lg shadow-blue-200">
          <p className="text-xs opacity-90 mb-1">הצעת מחיר סופית</p>
          <p className="text-sm font-bold">תישלח אליכם בהקדם!</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-bold text-gray-900 text-xs mb-3 font-sans">השירות כולל:</h4>
          <ul className="text-xs text-gray-600 space-y-2">
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              בדיקת קבצים מקצועית
            </li>
            <li className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              אספקה מהירה בתל אביב
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
