import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Upload, FileText, Image as ImageIcon, X } from "lucide-react";

export default function FileUpload({ files, onFileUpload, onRemoveFile }) {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(
      file => file.type === "application/pdf" || file.type === "image/jpeg"
    );

    if (selectedFiles.length > 0) {
      onFileUpload(selectedFiles);
    }

    // Reset input
    e.target.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      file => file.type === "application/pdf" || file.type === "image/jpeg"
    );

    if (droppedFiles.length > 0) {
      onFileUpload(droppedFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="border-0 shadow-lg max-w-2xl mx-auto">
      {/* הקטנת ה-Header והפונט */}
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg p-4">
        <CardTitle className="text-lg flex items-center gap-2">
          <Upload className="w-5 h-5" />
          העלאת קבצי עיצוב (אופציונלי)
        </CardTitle>
      </CardHeader>
      
      {/* צמצום ה-Padding מ-8 ל-4 */}
      <CardContent className="p-4">
        {/* Upload Area - הוקטן משמעותית */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-gray-400 transition-colors"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Upload className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                גררו קבצים לכאן או לחצו להעלאה
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                קבצי PDF או JPG בלבד - עד 10MB לכל קובץ
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="gap-2 h-8 text-xs"
              >
                <Upload className="w-3.5 h-3.5" />
                בחרו קבצים
              </Button>
            </div>
          </div>
        </div>

        <Input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Uploaded Files List - מוקטן */}
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-900 mb-2">קבצים שהועלו:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {files.map((fileUrl, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    {fileUrl.includes('.pdf') ? (
                      <FileText className="w-4 h-4 text-red-500 flex-shrink-0" />
                    ) : (
                      <ImageIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    )}
                    <span className="text-xs text-gray-700 truncate">
                      קובץ {index + 1}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveFile(index)}
                    className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                  >
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tip Box - מוקטן */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-[11px] text-blue-800 leading-tight">
            <strong>טיפ:</strong> העלאת קבצי עיצוב תעזור לנו להבין בדיוק את הרצונות שלכם ולספק תוצאה מדויקת יותר.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
