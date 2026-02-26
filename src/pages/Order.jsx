import React, { useState } from "react";
import { CheckCircle, ShoppingCart, Calculator, Package, Upload as UploadIcon, X } from "lucide-react";
import ProductSelector from "@/components/order/ProductSelector.jsx";
import PriceCalculator from "@/components/order/PriceCalculator.jsx";
import OrderSummary from "@/components/order/OrderSummary.jsx";
import FileUpload from "@/components/order/FileUpload.jsx";

// רכיבי עזר פנימיים למניעת שגיאות ייבוא מה-UI - עוקפים את הצורך בקבצים חיצוניים בתיקיית ה-UI
const LocalCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${className}`}>{children}</div>
);

const LocalButton = ({ children, onClick, disabled, variant = "primary", className = "" }) => {
  const base = "inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed outline-none";
  const styles = variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50";
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
};

const LocalInput = ({ id, value, onChange, placeholder, type = "text", className = "" }) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${className}`}
  />
);

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
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (files) => {
    try {
      const simulatedUrls = files.map(file => URL.createObjectURL(file));
      setOrderData(prev => ({ ...prev, file_urls: [...prev.file_urls, ...simulatedUrls] }));
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const calculatePrice = () => {
    const { product_type, width_cm, height_cm, quantity, paper_type, color_type } = orderData;
    if (!product_type || !width_cm || !height_cm || !quantity) return 0;
    const area = (parseFloat(width_cm) / 100) * (parseFloat(height_cm) / 100);
    const basePrices = { brochure: 15, flyer: 8, calendar: 25, roll_up: 120, business_cards: 0.5, posters: 20, banners: 30, stickers: 5 };
    const paperMultipliers = { standard: 1, premium: 1.3, glossy: 1.2, matte: 1.1, canvas: 1.5 };
    const colorMultiplier = color_type === "color" ? 1 : 0.7;
    let basePrice = basePrices[product_type] || 10;
    let totalPrice = basePrice * area * quantity * paperMultipliers[paper_type] * colorMultiplier;
    return Math.round(Math.max(totalPrice, 20));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 text-right" dir="rtl">
        <LocalCard className="max-w-xl w-full p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-2xl font-bold mb-4">בקשתך התקבלה!</h1>
          <p className="text-gray-600 mb-8">נציג מדפוס כתר יחזור אליך עם הצעת מחיר סופית תוך זמן קצר.</p>
          <LocalButton onClick={() => window.location.reload()}>חזרה לדף הבית</LocalButton>
        </LocalCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-right" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">מערכת הזמנות אונליין</h1>
          <p className="text-gray-600">דפוס כתר - איכות ומקצועיות כבר 40 שנה!</p>
        </div>

        {/* Steps Navbar */}
        <div className="flex justify-center mb-12 space-x-reverse space-x-4">
          {steps.map(s => (
            <div key={s.number} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= s.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                <s.icon size={20} />
              </div>
              <span className={`mr-2 hidden sm:inline ${currentStep >= s.number ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>{s.title}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <ProductSelector orderData={orderData} onInputChange={handleInputChange} onNext={() => setCurrentStep(2)} />
            )}
            {currentStep === 2 && (
              <div className="space-y-6">
                <PriceCalculator orderData={orderData} onInputChange={handleInputChange} calculatePrice={calculatePrice} onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />
                <FileUpload files={orderData.file_urls} onFileUpload={handleFileUpload} onRemoveFile={(i) => handleInputChange('file_urls', orderData.file_urls.filter((_, idx) => idx !== i))} />
              </div>
            )}
            {currentStep === 3 && (
              <LocalCard>
                <div className="bg-blue-600 p-4 text-white font-bold text-xl">פרטי התקשרות</div>
                <div className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">שם מלא *</label>
                      <LocalInput value={orderData.customer_name} onChange={(e) => handleInputChange('customer_name', e.target.value)} placeholder="ישראל ישראלי" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">טלפון *</label>
                      <LocalInput value={orderData.customer_phone} onChange={(e) => handleInputChange('customer_phone', e.target.value)} placeholder="050-0000000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">אימייל *</label>
                    <LocalInput type="email" value={orderData.customer_email} onChange={(e) => handleInputChange('customer_email', e.target.value)} placeholder="email@example.com" />
                  </div>
                  <div className="flex justify-between mt-8">
                    <LocalButton variant="outline" onClick={() => setCurrentStep(2)}>חזור</LocalButton>
                    <LocalButton onClick={handleSubmit} disabled={!orderData.customer_name || isSubmitting}>
                      {isSubmitting ? "שולח..." : "סיים הזמנה"}
                    </LocalButton>
                  </div>
                </div>
              </LocalCard>
            )}
          </div>

          {/* Sidebar Summary Area */}
          <div className="lg:col-span-1">
            <OrderSummary orderData={orderData} estimatedPrice={calculatePrice()} />
          </div>
        </div>
      </div>
    </div>
  );
}
