import React, { useState, useEffect } from "react";
import { CheckCircle, ShoppingCart, Calculator, Package, Upload as UploadIcon, X } from "lucide-react";
import emailjs from '@emailjs/browser';

// ייבוא רכיבי ההזמנה
import ProductSelector from "@/components/order/ProductSelector.jsx";
import OrderSpecs from "@/components/order/OrderSpecs.jsx";
import OrderSummary from "@/components/order/OrderSummary.jsx";
import FileUpload from "@/components/order/FileUpload.jsx";

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
  useEffect(() => {
    document.title = "דפוס כתר - מערכת הזמנות";
    return () => { document.title = "דפוס כתר"; };
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    product_type: "",
    width_cm: "",
    height_cm: "",
    quantity: 1,
    paper_type: "standard",
    color_type: "color",
    special_instructions: "",
    file_urls: [],
    raw_files: [] 
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleReset = () => {
    setOrderData({
      customer_name: "", customer_email: "", customer_phone: "",
      product_type: "", width_cm: "", height_cm: "", quantity: 1,
      paper_type: "standard", color_type: "color", special_instructions: "",
      file_urls: [], raw_files: []
    });
    setSubmitSuccess(false);
    setCurrentStep(1);
  };

  const handleInputChange = (field, value) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (files) => {
    const previewUrls = files.map(file => URL.createObjectURL(file));
    setOrderData(prev => ({ 
      ...prev, 
      file_urls: [...prev.file_urls, ...previewUrls],
      raw_files: [...prev.raw_files, ...files] 
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    // --- חשוב: החלף את המפתחות האלה מהדשבורד של EmailJS ---
    const SERVICE_ID = "service_xxxxxxx"; 
    const TEMPLATE_ID = "template_xxxxxxx";
    const PUBLIC_KEY = "xxxxxxxxxxxxxxxx";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        customer_name: orderData.customer_name,
        customer_email: orderData.customer_email,
        customer_phone: orderData.customer_phone,
        product_type: orderData.product_type,
        width_cm: orderData.width_cm,
        height_cm: orderData.height_cm,
        quantity: orderData.quantity,
        paper_type: orderData.paper_type,
        color_type: orderData.color_type,
        instructions: orderData.special_instructions || "אין הערות",
        file_link: orderData.file_urls[0] || "לא הועלה קובץ"
      }, PUBLIC_KEY);

      setSubmitSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("חלה שגיאה. בדוק אם המפתחות של EmailJS מעודכנים.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 text-right" dir="rtl">
        <LocalCard className="max-w-xl w-full p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-2xl font-bold mb-4">בקשתך נשלחה!</h1>
          <p className="text-gray-600 mb-8">המפרט והקבצים התקבלו. נחזור אליך בהקדם.</p>
          <LocalButton onClick={handleReset}>שלח בקשה נוספת</LocalButton>
        </LocalCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-right font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">מערכת הזמנות אונליין</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <ProductSelector orderData={orderData} onInputChange={handleInputChange} onNext={() => setCurrentStep(2)} />
            )}
            
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* 1. קבצים למעלה */}
                <FileUpload 
                  files={orderData.file_urls} 
                  onFileUpload={handleFileUpload} 
                  onRemoveFile={(i) => {
                    handleInputChange('file_urls', orderData.file_urls.filter((_, idx) => idx !== i));
                    handleInputChange('raw_files', orderData.raw_files.filter((_, idx) => idx !== i));
                  }} 
                />
                
                {/* 2. מפרט למטה */}
                <OrderSpecs 
                  orderData={orderData} 
                  onInputChange={handleInputChange} 
                  onNext={() => setCurrentStep(3)} 
                  onBack={() => setCurrentStep(1)} 
                />
              </div>
            )}

            {currentStep === 3 && (
              <LocalCard>
                <div className="bg-blue-600 p-4 text-white font-bold text-xl text-center">פרטי התקשרות</div>
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">שם מלא *</label>
                      <LocalInput value={orderData.customer_name} onChange={(e) => handleInputChange('customer_name', e.target.value)} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">טלפון *</label>
                      <LocalInput value={orderData.customer_phone} onChange={(e) => handleInputChange('customer_phone', e.target.value)} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">אימייל *</label>
                    <LocalInput type="email" value={orderData.customer_email} onChange={(e) => handleInputChange('customer_email', e.target.value)} required />
                  </div>
                  <div className="flex justify-between mt-8">
                    <LocalButton variant="outline" onClick={() => setCurrentStep(2)} type="button">חזור</LocalButton>
                    <LocalButton disabled={!orderData.customer_name || isSubmitting} type="submit">
                      {isSubmitting ? "שולח..." : "סיים הזמנה"}
                    </LocalButton>
                  </div>
                </form>
              </LocalCard>
            )}
          </div>

          <div className="lg:col-span-1">
            <OrderSummary orderData={orderData} />
          </div>
        </div>
      </div>
    </div>
  );
}
