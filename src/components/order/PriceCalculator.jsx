import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Ruler, FileType } from "lucide-react";

export default function PriceCalculator({ orderData, onInputChange, calculatePrice, onNext, onBack }) {
  // The canProceed variable is replaced by a direct check in the disabled prop of the "Next" button.
  // const canProceed = orderData.width_cm && orderData.height_cm && orderData.quantity > 0;

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl flex items-center gap-3">
          <Ruler className="w-6 h-6" />
          מפרט המוצר
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        {/* Dimensions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Ruler className="w-5 h-5 text-blue-600" />
            מידות (בסנטימטרים)
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="width">רוחב (ס״מ) *</Label>
              <Input
                id="width"
                type="number"
                min="1"
                value={orderData.width_cm}
                onChange={(e) => onInputChange('width_cm', e.target.value)}
                placeholder="לדוגמה: 21"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="height">גובה (ס״מ) *</Label>
              <Input
                id="height"
                type="number"
                min="1"
                value={orderData.height_cm}
                onChange={(e) => onInputChange('height_cm', e.target.value)}
                placeholder="לדוגמה: 29.7"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="length">אורך (ס״מ)</Label>
              <Input
                id="length"
                type="number"
                min="1"
                value={orderData.length_cm}
                onChange={(e) => onInputChange('length_cm', e.target.value)}
                placeholder="אופציונלי"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <Label htmlFor="quantity">כמות *</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            value={orderData.quantity}
            onChange={(e) => onInputChange('quantity', parseInt(e.target.value) || 1)}
            className="mt-2 max-w-xs"
          />
        </div>

        {/* Paper Type */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileType className="w-5 h-5 text-blue-600" />
            אפשרויות חומר
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="paper_type">סוג נייר/חומר</Label>
              <Select value={orderData.paper_type} onValueChange={(value) => onInputChange('paper_type', value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">נייר סטנדרטי</SelectItem>
                  <SelectItem value="premium">נייר פרימיום (+30%)</SelectItem>
                  <SelectItem value="glossy">גימור מבריק (+20%)</SelectItem>
                  <SelectItem value="matte">גימור מט (+10%)</SelectItem>
                  <SelectItem value="canvas">בד קנבס (+50%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="color_type">סוג הדפסה</Label>
              <Select value={orderData.color_type} onValueChange={(value) => onInputChange('color_type', value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="color">צבע מלא</SelectItem>
                  <SelectItem value="black_white">שחור-לבן (-30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Price Estimate */}
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">מחיר מוערך</h3>
              <p className="text-gray-600">המחיר הסופי יאושר לפני תחילת הייצור</p>
            </div>
            <div className="text-left"> {/* Changed from text-right to text-left for RTL */}
              <div className="text-3xl font-bold text-blue-600">
                ₪{calculatePrice()}
              </div>
              <div className="text-sm text-gray-500">כולל מע״מ</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="px-8"
          >
            חזור
          </Button>
          <Button
            onClick={onNext}
            disabled={!orderData.width_cm || !orderData.height_cm || orderData.quantity <= 0}
            className="bg-blue-600 hover:bg-blue-700 px-8"
          >
            הבא: פרטי התקשרות
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
