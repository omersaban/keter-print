import React from "react";
import { Ruler, Hash, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function OrderSpecs({ orderData, onInputChange, onNext, onBack }) {
  return (
    <Card className="border-0 shadow-lg text-right" dir="rtl">
      <CardHeader className="bg-slate-50 border-b border-slate-100">
        <CardTitle className="text-xl flex items-center gap-2 text-slate-800">
          <Ruler className="w-5 h-5 text-blue-600" /> מפרט טכני ומידות
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>רוחב (ס"מ)</Label>
            <Input 
              type="number" 
              value={orderData.width_cm} 
              onChange={(e) => onInputChange('width_cm', e.target.value)}
              placeholder="0"
              className="text-right"
            />
          </div>
          <div className="space-y-2">
            <Label>גובה (ס"מ)</Label>
            <Input 
              type="number" 
              value={orderData.height_cm} 
              onChange={(e) => onInputChange('height_cm', e.target.value)}
              placeholder="0"
              className="text-right"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Hash className="w-4 h-4" /> כמות יחידות מבוקשת
          </Label>
          <Input 
            type="number" 
            value={orderData.quantity} 
            onChange={(e) => onInputChange('quantity', e.target.value)}
            className="text-right"
          />
        </div>

        <div className="flex justify-between pt-8 border-t border-slate-50">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" /> חזור
          </Button>
          <Button 
            onClick={onNext} 
            disabled={!orderData.width_cm || !orderData.height_cm || !orderData.quantity}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            המשך להעלאת קבצים <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
