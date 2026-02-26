import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ShoppingCart, Calculator, Package } from "lucide-react";

// תוקנו הנתיבים לשימוש ב-@ שהוא הרבה יותר בטוח
import ProductSelector from "@/components/order/ProductSelector";
import PriceCalculator from "@/components/order/PriceCalculator";
import OrderSummary from "@/components/order/OrderSummary";
import FileUpload from "@/components/order/FileUpload";

export default function OrderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    product_type: "",
    width_cm: "",
    height_cm: "",
    length_cm: "",
    quantity: 1,
    paper_type: "standard",
    color_type: "color",
    special_instructions: "",
    file_urls: [], 
    estimated_price: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    { number: 1, title: "בחירת מוצר", icon: Package },
    { number: 2, title: "מפרט טכני", icon: Calculator },
    { number: 3, title: "פרטי התקשרות", icon: ShoppingCart }
  ];

  const handleInputChange = (field, value) => {
    setOrderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = async (files) => {
    try {
      // סימולציה של העלאת קבצים (מכיוון שהורדנו את שרתי Base44)
      // בעתיד תוכל לחבר כאן שירות כמו Firebase Storage או AWS S3
      const simulatedUrls = files.map(file => URL.createObjectURL(file));
      
      setOrderData(prev => ({
        ...prev,
        file_urls: [...prev.file_urls, ...simulatedUrls]
      }));
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const removeFile = (indexToRemove) => {
    setOrderData(prev => ({
      ...prev,
      file_urls: prev.file_urls.filter((_, index) => index !== indexToRemove)
    }));
  };

  const calculatePrice = () => {
    const { product_type, width_cm, height_cm, quantity, paper_type, color_type } = orderData;
    
    if (!product_type || !width_cm || !height_cm || !quantity) return 0;

    const area = (parseFloat(width_cm) / 100) * (parseFloat(height_cm) / 100); 
    
    const basePrices = {
      brochure: 15,
      flyer: 8,
      calendar: 25,
      roll_up: 120,
      business_cards: 0.5,
      posters: 20,
      banners: 30,
      stickers: 5
    };

    const paperMultipliers = {
      standard: 1,
      premium: 1.3,
      glossy: 1.2,
      matte: 1.1,
      canvas: 1.5
    };

    const colorMultiplier = color_type === "color" ? 1 : 0.7;

    let basePrice = basePrices[product_type] || 10;
    let totalPrice = basePrice * area * quantity * paperMultipliers[paper_type] * colorMultiplier;

    totalPrice = Math.max(totalPrice, 20);

    return Math.round(totalPrice);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const finalOrderData = {
        ...orderData,
        width_cm: parseFloat(orderData.width_cm),
        height_cm: parseFloat(orderData.height_cm),
        length_cm: orderData.length_cm ? parseFloat(orderData.length_cm) : undefined,
        quantity: parseInt(orderData.quantity)
      };

      // מדמה שליחה לשרת - המתנה של שנייה וחצי
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Order submitted successfully:", finalOrderData);
      // הערה לעתיד: כאן נחבר את שירות שליחת המיילים (כמו EmailJS) במקום הקוד הישן
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 text-right">
        <Card className="max-w-2xl w-full border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">בקשתך נשלחה בהצלחה!</h1>
            <p className="text-xl text-gray-600 mb-8">
              תודה שפנית לדפוס כתר. קיבלנו את בקשתך להצעת מחיר וניצור עמך קשר תוך 24 שעות עם הצעת מחיר מפורטת.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">מה השלב הבא?</h3>
              <ul className="text-gray-600 space-y-2 text-right">
                <li>• נבדוק את המפרט שלכם ונכין הצעת מחיר</li>
                <li>• ניצור קשר תוך 24 שעות עם הצעת מחיר מפורטת</li>
                <li>• לאחר אישור נתחיל בייצור</li>
                <li>• נודיע לכם כשההזמנה מוכנה לאיסוף/משלוח</li>
              </ul>
            </div>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
            >
              שלח בקשה נוספת
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 text-right">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">בצעו הזמנה</h1>
          <p className="text-xl text-gray-600">דפוס מקצועי בקלות</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-reverse space-x-8">
            {steps.map((step) => (
              <React.Fragment key={step.number}>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep >= step.number 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="mr-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      שלב {step.number}
                    </p>
                    <p className={`text-xs ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
                {step.number < steps.length && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <ProductSelector
                orderData={orderData}
                onInputChange={handleInputChange}
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <PriceCalculator
                  orderData={orderData}
                  onInputChange={handleInputChange}
                  calculatePrice={calculatePrice}
                  onNext={() => setCurrentStep(3)}
                  onBack={() => setCurrentStep(1)}
                />
                
                <FileUpload
                  files={orderData.file_urls}
                  onFileUpload={handleFileUpload}
                  onRemoveFile={removeFile}
                />
              </div>
            )}

            {currentStep === 3 && (
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">פרטי התקשרות</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="customer_name">שם מלא *</Label>
                      <Input
                        id="customer_name"
                        value={orderData.customer_name}
                        onChange={(e) => handleInputChange('customer_name', e.target.value)}
                        placeholder="השם המלא שלך"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="customer_phone">מספר טלפון *</Label>
                      <Input
                        id="customer_phone"
                        value={orderData.customer_phone}
                        onChange={(e) => handleInputChange('customer_phone', e.target.value)}
                        placeholder="050-123-4567"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="customer_email">כתובת אימייל *</Label>
                    <Input
                      id="customer_email"
                      type="email"
                      value={orderData.customer_email}
                      onChange={(e) => handleInputChange('customer_email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="special_instructions">הוראות מיוחדות (אופציונלי)</Label>
                    <Textarea
                      id="special_instructions"
                      value={orderData.special_instructions}
                      onChange={(e) => handleInputChange('special_instructions', e.target.value)}
                      placeholder="כל בקשה מיוחדת או הערה..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex justify-between pt-6">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep(2)}
                      className="px-8"
                    >
                      חזור
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!orderData.customer_name || !orderData.customer_email || !orderData.customer_phone || isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 px-8"
                    >
                      {isSubmitting ? "שולח..." : "שלח בקשה להצעת מחיר"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary 
              orderData={orderData}
              estimatedPrice={calculatePrice()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
