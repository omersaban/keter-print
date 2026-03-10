import React from "react";
import { Ruler, Hash, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function OrderSpecs({ orderData, onInputChange, onNext, onBack }) {
  return (
    <Card className="border-0 shadow-lg text-right" dir="rtl">
      {/* צמצום padding ב-Header */}
      <CardHeader className="bg-slate-50 border-b border-slate-100 p-3">
        <CardTitle className="text-lg flex items-center gap-2 text-slate-800">
          <Ruler className="w-4 h-4 text-blue-600" /> מפרט טכני ומידות
        </CardTitle>
      </CardHeader>
      
      {/* צמצום padding ל-p-4 ושינוי מרווחים ל-space-y-3 */}
      <CardContent className="p-4 space-y-3">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-xs">רוחב (ס"מ)</Label>
            <Input 
              type="number" 
              value={orderData.width_cm} 
              onChange={(e) => onInputChange('width_cm', e.target.value)}
              placeholder="0"
              className="text-right h-9" // גובה Input מצומצם
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">גובה (ס"מ)</Label>
            <Input 
              type="number" 
              value={orderData.height_cm} 
              onChange={(e) => onInputChange('height_cm', e.target.value)}
              placeholder="0"
              className="text-right h-9" // גובה Input מצומצם
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label className="flex items-center gap-2 text-xs">
            <Hash className="w-3 h-3" /> כמות יחידות מבוקשת
          </Label>
          <Input 
            type="number" 
            value={orderData.quantity} 
            onChange={(e) => onInputChange('quantity', e.target.value)}
            className="text-right h-9" // גובה Input מצומצם
          />
        </div>

        {/* צמצום padding עליון בכפתורים */}
        <div className="flex justify-between pt-3 border-t border-slate-50">
          <Button variant="outline" size="sm" onClick={onBack} className="flex items-center gap-2 h-9 text-xs">
            <ArrowRight className="w-4 h-4" /> חזור
          </Button>
          <Button 
            size="sm"
            onClick={onNext} 
            disabled={!orderData.width_cm || !orderData.height_cm || !orderData.quantity}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 h-9 text-xs"
          >
            המשך למילוי פרטי קשר <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
