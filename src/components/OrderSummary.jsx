import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Ruler, Palette, Hash } from "lucide-react";

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

export default function OrderSummary({ orderData, estimatedPrice }) {
  return (
    <Card className="border-0 shadow-xl sticky top-4">
      <CardHeader className="bg-gray-50 rounded-t-lg">
        <CardTitle className="text-xl">סיכום הזמנה</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {orderData.product_type && (
          <div className="flex items-center gap-3">
            <Package className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">מוצר</p>
              <p className="text-gray-600">{productNames[orderData.product_type] || orderData.product_type}</p>
            </div>
          </div>
        )}

        {(orderData.width_cm || orderData.height_cm) && (
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">מידות</p>
              <p className="text-gray-600 text-right dir-ltr">
                {orderData.width_cm || "?"} × {orderData.height_cm || "?"} ס״מ
                {orderData.length_cm && ` × ${orderData.length_cm} ס״מ`}
              </p>
            </div>
          </div>
        )}

        {orderData.quantity > 0 && (
          <div className="flex items-center gap-3">
            <Hash className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">כמות</p>
              <p className="text-gray-600">{orderData.quantity} יחידות</p>
            </div>
          </div>
        )}

        {orderData.paper_type && (
          <div className="flex items-center gap-3">
            <Palette className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">חומר</p>
              <p className="text-gray-600">{paperTypes[orderData.paper_type] || orderData.paper_type}</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-900">סוג הדפסה</p>
          <Badge variant={orderData.color_type === 'color' ? 'default' : 'secondary'}>
            {orderData.color_type === 'color' ? 'צבע מלא' : 'שחור-לבן'}
          </Badge>
        </div>

        <div className="border-t pt-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 font-medium text-center">
              תקבלו הצעת מחיר מפורטת תוך זמן קצר!
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">מה כלול:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• הדפסה מקצועית</li>
            <li>• חומרים איכותיים</li>
            <li>• ייעוץ חינם</li>
            <li>• משלוח באזור תל-אביב</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
